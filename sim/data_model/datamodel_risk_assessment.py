import json
import numpy as np
import pandas as pd
from sim.data_model.data_interface.get_risk_assessment import get_age, get_country_of_birth, get_education, get_employment, get_income, get_marital_status, get_region_case,remoteness

class RiskAssessment:
    def __init__(self):
        # Initialize DataFrames using backend functions
        self.country_of_birth = get_country_of_birth()
        self.age = get_age()
        self.edu = get_education()
        self.employ = get_employment()
        self.income = get_income()
        self.marital_status = get_marital_status()
        self.remoteness = remoteness()
        self.df_sorted = get_region_case()
        
        # Init min and max odds
        self.min_odds, self.max_odds = self._compute_odds_limits()
        self.low_threshold, self.high_threshold = self._compute_thresholds()

    def _compute_odds_limits(self):
        # Compute global min and max odds
        min_odds = round(
            self.country_of_birth['odds'].min() * self.age['odds'].min() * 
            self.edu['odds'].min() * self.employ['odds'].min() * 
            self.income['odds'].min() * self.marital_status['odds'].min() * 
            self.remoteness['odds'].min(), 2
        )
        max_odds = round(
            self.country_of_birth['odds'].max() * self.age['odds'].max() * 
            self.edu['odds'].max() * self.employ['odds'].max() * 
            self.income['odds'].max() * self.marital_status['odds'].max() * 
            self.remoteness['odds'].max(), 2
        )
        return min_odds, max_odds

    def _compute_thresholds(self):
        # Standard of low and high risk
        return np.percentile([self.min_odds, self.max_odds], [30, 70])

    def _get_odds(self, df, column, value):
        if value not in df[column].values:
            print(f"Value '{value}' not found in column '{column}' of the DataFrame.")
            return None
        return float(df.loc[df[column] == value, 'odds'].values[0])

    def categorize_risk(self, odds, thresholds, **kwargs):
        if any(val > 6 for val in kwargs.values()) or odds > thresholds[1]:
            return "High Risk"
        elif odds <= thresholds[0]:
            return "Low Risk"
        else:
            return "Moderate Risk"

    def calculate_odds(self, json_input):
        data = json.loads(json_input)
        
        odds_values = {
            'country': self._get_odds(self.country_of_birth, 'country', data.get('input_country')),
            'age': self._get_odds(self.age, 'age', data.get('input_agegroup')),
            'edu': self._get_odds(self.edu, 'education_attainment', data.get('input_education')),
            'employ': self._get_odds(self.employ, 'employment', data.get('input_employment')),
            'income': self._get_odds(self.income, 'tt_household_income', data.get('input_income')),
            'marital': self._get_odds(self.marital_status, 'marital_status', data.get('input_maritalstatus')),
            'remoteness': self._get_odds(self.remoteness, 'remoteness', data.get('input_remoteness'))
        }

        if None in odds_values.values():
            return json.dumps({"Error": "One or more factors not found in the dataset."})

        calculated_odds = round(np.prod(list(odds_values.values())), 2)
        risk_level = self.categorize_risk(calculated_odds, [self.low_threshold, self.high_threshold], **odds_values)
        
        country_region = self.country_of_birth.loc[self.country_of_birth['country'] == data.get('input_country'), 'major_groups'].values[0]
        au_baseline = self.df_sorted.loc[self.df_sorted['country_of_birth'] == 'Australia', 'per_cent'].values[0]
        risk_comparison = "Higher" if calculated_odds > au_baseline else "Lower"

        result = {
            "output_country_of_birth": data.get('input_country'),
            "output_calculated_odds": calculated_odds,
            "output_risk_level": risk_level,
            "output_country_region": country_region,
            "output_risk_comparison_to_au": risk_comparison
        }
        return json.dumps(result)

