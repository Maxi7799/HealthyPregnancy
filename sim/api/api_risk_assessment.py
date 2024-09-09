from ninja import NinjaAPI
from sim.data_model.data_interface.get_risk_assessment import get_age, get_country_of_birth, get_education, get_employment, get_income, get_marital_status, get_region_case
from sim.data_model.datamodel_risk_assessment import RiskAssessment
import json

risk = NinjaAPI(version="3.0.0")

@risk.get("/riskassessment")
def get_risk_assessment(request):

    risk_assessment = RiskAssessment()
    # testing on min max odds
    # print(risk_assessment.age['odds'].min())
    # print(risk_assessment.age['odds'].max())
    
    # testing on thresholds
    # print(risk_assessment._compute_thresholds())
    
    # test case
    test_input = {
        "input_country": "Australia",
        "input_agegroup": "35-44",
        "input_education": "Diploma and certificate",
        "input_employment": "Employed",
        "input_income": "$500-799 ($26,000-41,599)",
        "input_maritalstatus": "Widowed",
        "input_remoteness": "Inner Regional Australia"
    }


    json_input = json.dumps(test_input)

    # Perform risk assessment using the test input
    result = risk_assessment.calculate_odds(json_input)
    print(result)
    
    return "hello"