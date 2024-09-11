from ninja import NinjaAPI
from sim.data_model.data_interface.get_risk_assessment import get_age, get_country_of_birth, get_education, get_employment, get_income, get_marital_status, get_region_case

risk = NinjaAPI(version="3.0.0")

@risk.get("/riskassessment")
def get_risk_assessment(request, json):

    print( get_age())

    return "hello"