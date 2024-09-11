from ninja import NinjaAPI, Schema
from sim.data_model.data_interface.get_risk_assessment import get_age, get_country_of_birth, get_education, get_employment, get_income, get_marital_status, get_region_case
from sim.data_model.datamodel_risk_assessment import RiskAssessment
import json

risk = NinjaAPI(version="3.0.0")

class DataSchema(Schema):
    country: str
    age: str
    educational:str
    employment:str
    income:str
    status:str
    remoteness:str


@risk.post("/riskassessment")
def get_risk_assessment(request, payload: DataSchema):

    risk_assessment = RiskAssessment()

    input_dic = {
        "input_country": payload.country,
        "input_agegroup": payload.age,
        "input_education": payload.educational,
        "input_employment": payload.employment,
        "input_income": payload.income,
        "input_maritalstatus": payload.status,
        "input_remoteness": payload.remoteness
    }

    json_input = json.dumps(input_dic)
    print(json_input)
    result = risk_assessment.calculate_odds(json_input)

    return result