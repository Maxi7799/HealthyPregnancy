from sim.model.model_risk_assessment import Age, CountryOfBirth, Education, Employment, Income, MaritalStatus, RegionCase, Remoteness
import pandas as pd


def get_age():
    ages = Age.objects.all()
    data = [{"age": age_obj.age, "odds": age_obj.odds}
            for age_obj in ages]
    df_ages = pd.DataFrame(data)
    print(df_ages)
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
    data = [{"country_of_birth": region_case.country_of_birth, "number": region_case.number,
             "per_cent": region_case.per_cent} for region_case in region_cases]
    df_region_cases = pd.DataFrame(data)
    return df_region_cases


def remoteness():
    remotenesses = Remoteness.objects.all()
    data = [{"remoteness": remoteness.remoteness, "odds": remoteness.odds}
            for remoteness in remotenesses]
    df_remotenesses = pd.DataFrame(data)
    return df_remotenesses
