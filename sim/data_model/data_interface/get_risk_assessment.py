from sim.model.model_risk_assessment import Age, CountryOfBirth, Education, Employment, Income, MaritalStatus, RegionCase, Remoteness


def get_age():
    ages = Age.objects.all()

def get_country_of_birth():
    births = CountryOfBirth.objects.all()

def get_education():
    educations = Education.objects.all()

def get_employment():
    employments = Employment.objects.all() 

def get_income():
    incomes = Income.objects.all()

def get_marital_status():
    marital_statuses = MaritalStatus.objects.all()

def get_region_case():
    region_cases = RegionCase.objects.all()

def remoteness():
    remotenesses = RegionCase.objects.all()