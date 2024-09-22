from sim.model.model_risk_assessment import Age, CountryOfBirth, Education, Employment, Income, MaritalStatus, RegionCase, Remoteness, Sociecon, DirectCause, CountryGroup
import pandas as pd


def get_age():
    ages = Age.objects.all()
    data = [{"age": age_obj.age, "odds": age_obj.odds}
            for age_obj in ages]
    df_ages = pd.DataFrame(data)
    return df_ages


def get_country_of_birth():
    births = CountryOfBirth.objects.all()
    data = [{"country": birth.country, "odds": birth.odds,
             "major_groups": birth.major_groups} for birth in births]
    df_births = pd.DataFrame(data)
    return df_births


def get_education():
    educations = Education.objects.all()
    data = [{"education_attainment": education.education_attainment,
             "odds": education.odds} for education in educations]
    df_educations = pd.DataFrame(data)
    return df_educations


def get_employment():
    employments = Employment.objects.all()
    data = [{"employment": employment.employment, "odds": employment.odds}
            for employment in employments]
    df_employments = pd.DataFrame(data)
    return df_employments


def get_income():
    incomes = Income.objects.all()
    data = [{"tt_household_income": income.tt_household_income,
             "odds": income.odds} for income in incomes]
    df_incomes = pd.DataFrame(data)
    return df_incomes


def get_marital_status():
    marital_statuses = MaritalStatus.objects.all()
    data = [{"marital_status": marital_status.marital_status,
             "odds": marital_status.odds} for marital_status in marital_statuses]
    df_marital_status = pd.DataFrame(data)
    return df_marital_status


def get_region_case():
    region_cases = RegionCase.objects.all()
    data = [{"major_groups": region_case.major_groups, "number": region_case.number,
             "per_cent": region_case.per_cent} for region_case in region_cases]
    df_region_cases = pd.DataFrame(data)
    return df_region_cases


def get_remoteness():
    remotenesses = Remoteness.objects.all()
    data = [{"remoteness": remoteness.remoteness, "odds": remoteness.odds}
            for remoteness in remotenesses]
    df_remotenesses = pd.DataFrame(data)
    return df_remotenesses


def get_sociecon():
    sociecons = Sociecon.objects.all()
    data = [{"factor": sociecon.factor, "choice": sociecon.choice,
             "odds": sociecon.odds} for sociecon in sociecons]

    df_sociecons = pd.DataFrame(data)
    return df_sociecons


def get_direct_cause():
    direct_causes = DirectCause.objects.all()
    data = [{"factor": direct_cause.factor, "choice": direct_cause.choice,
             "odds": direct_cause.odds} for direct_cause in direct_causes]

    df_direct_cause = pd.DataFrame(data)
    return df_direct_cause


def get_country_group():
    country_groups = CountryGroup.objects.all()
    data = [{"major_groups": country_group.major_groups,
             "country": country_group.country} for country_group in country_groups]

    df_country_groups = pd.DataFrame(data)
    return df_country_groups
