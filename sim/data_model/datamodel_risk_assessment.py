import json
import numpy as np
import pandas as pd
from sim.data_model.data_interface.get_risk_assessment import get_age, get_country_of_birth, get_education, get_employment, get_income, get_marital_status, get_region_case, get_remoteness


class RiskAssessment:
    def __init__(self, sociecon, direct_cause, country_group, region_case):
        # Store socio-economic and direct cause data
        self.sociecon = sociecon
        self.direct_cause = direct_cause
        self.country_group = country_group
        self.region_case = region_case

        # Initialize min and max odds
        self.min_odds, self.max_odds = self._compute_odds_limits()
        self.low_threshold, self.high_threshold = self._compute_thresholds()

    def _compute_odds_limits(self):
        # Ensure odds are numeric and drop any NaN values
        self.sociecon['odds'] = pd.to_numeric(
            self.sociecon['odds'], errors='coerce')
        self.direct_cause['odds'] = pd.to_numeric(
            self.direct_cause['odds'], errors='coerce')

        # Combine the 'odds' columns from both DataFrames into one Series
        all_odds = pd.concat([
            self.sociecon['odds'],
            self.direct_cause['odds']
        ]).dropna()  # Remove NaN values

        # Compute global min and max odds across all factors
        min_odds = round(all_odds.min(), 2)
        max_odds = round(all_odds.max(), 2)

        return min_odds, max_odds

    def _compute_thresholds(self):
        # Compute low and high risk thresholds based on percentiles
        return np.percentile([self.min_odds, self.max_odds], [20, 70])

    def _get_odds(self, df, factor, choice):
        # Find odds based on the factor and choice
        row = df[(df['factor'] == factor) & (df['choice'] == choice)]
        if not row.empty:
            return float(row['odds'].values[0])
        return None

    def calculate_bmi(self, height_cm, weight_kg):
        # Convert height from cm to meters and calculate BMI
        if height_cm and weight_kg:
            height_m = float(height_cm) / 100
            bmi = float(weight_kg) / (float(height_m) ** 2)
            return round(bmi, 2)
        return None

    def get_bmi_category(self, bmi):
        # Determine BMI category
        if bmi:
            if bmi < 18.5:
                return "Underweight (BMI < 18.5)"
            elif 18.5 <= bmi < 24.9:
                return "Normal weight (BMI 18.5–24.9)"
            elif 25 <= bmi < 29.9:
                return "Overweight (BMI 25–29.9)"
            elif 30 <= bmi < 34.9:
                return "Obesity I (BMI 30–34.9)"
            elif 35 <= bmi < 39.9:
                return "Obesity II (BMI 35–39.9)"
            else:
                return "Obesity III (BMI ≥ 40)"
        return None

    def categorize_risk(self, odds, thresholds, bmi_category, odds_values, **kwargs):
        # Calculate the upper quartile
        upper_quartile = np.percentile(list(odds_values.values()), 75)

        # Filter factors with odds above the upper quartile
        upper_quartile_factors = {factor: value for factor, value in odds_values.items() if value >= upper_quartile}

        # Identify the highest contributor to risk
        highest_contributor = max(upper_quartile_factors, key=upper_quartile_factors.get)

        # Categorize risk
        if any(val > 5 for val in kwargs.values()) or odds > thresholds[1] or (bmi_category == "Obesity"):
            return "High Risk", highest_contributor
        elif odds <= thresholds[0]:
            return "Low Risk", highest_contributor
        else:
            return "Moderate Risk", highest_contributor

    def compare_with_au(self, input_country):
        # Check if the input country is Australia
        if input_country == "Australia":
            country_region = "Australia"
        else:
            # Look up the major_groups corresponding to the input country
            country_region = self.country_group.loc[
                self.country_group['country'] == input_country, 'major_groups'
            ]

            if country_region.empty:
                return {"Error": f"Country group for {input_country} not found."}

            country_region = country_region.values[0]

        # Look up the number of cases for the major_groups or Australia
        country_cases = self.region_case.loc[
            self.region_case['major_groups'] == country_region, 'number'
        ]

        if country_cases.empty:
            return {"Error": f"Number of cases for {country_region} not found."}

        country_cases = country_cases.values[0]

        # Look up the number of cases for Australia (for comparison)
        au_cases = self.region_case.loc[
            self.region_case['major_groups'] == 'Australia', 'number'
        ].values[0]

        # Compare the number of cases with Australia
        if country_cases > au_cases:
            risk_comparison = "Higher"
        elif country_cases < au_cases:
            risk_comparison = "Lower"
        else:
            risk_comparison = "Same"

        return {
            "output_country_region": country_region,
            "output_risk_vs_au": risk_comparison
        }


    def calculate_odds(self, json_input):
        data = json.loads(json_input)
        height_cm = data.get('input_height_cm')
        weight_kg = data.get('input_weight_kg')

        # Calculate BMI and determine BMI category
        bmi = self.calculate_bmi(height_cm, weight_kg)
        bmi_category = self.get_bmi_category(bmi)

        # Extracting odds for each socio-economic and direct cause factor
        odds_values = {
            'Country': self._get_odds(self.sociecon, 'Country', data.get('input_country')),
            'Age': self._get_odds(self.sociecon, 'Age', data.get('input_agegroup')),
            'BMI': self._get_odds(self.direct_cause, 'BMI', bmi_category),
            'Physical_Activity': self._get_odds(self.direct_cause, 'Physical Activity', data.get('input_physical_activity')),
            'Family_History': self._get_odds(self.direct_cause, 'Family History of Diabetes', data.get('input_family_history')),
            'Smoking': self._get_odds(self.direct_cause, 'Smoking', data.get('input_smoking')),
            'Alcohol': self._get_odds(self.direct_cause, 'Alcohol Consumption', data.get('input_alcohol'))
        }

        # Debugging output
        for key, value in odds_values.items():
               if value is None:
                    print(f"Missing odds for factor: {key}")

        # Check for missing input values
        if None in odds_values.values():
            return {"Error": "One or more factors not found in the dataset."}

        # Calculate the overall odds
        calculated_odds = round(np.prod(list(odds_values.values())), 2)
        # Determine the risk level and the highest contributor
        risk_level, highest_contributor = self.categorize_risk(
            calculated_odds,
            [self.low_threshold, self.high_threshold],
            bmi_category,
            odds_values,
            **odds_values
        )
       # Call compare_with_au to get the comparison data
        au_comparison_result = self.compare_with_au(data.get('input_country'))

        # Merge the results from both calculate_odds and compare_with_au
        result = {
            "output_country_group": data.get('input_country'),
            "output_calculated_odds": calculated_odds,
            "output_risk_level": risk_level,
            "output_highest_contributor": highest_contributor,
            "output_bmi": bmi,
            "output_bmi_category": bmi_category,
            **au_comparison_result
        }

        return result

    def get_risk_output(self, json_input):
        return self.calculate_odds(json_input)
