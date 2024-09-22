from ninja import NinjaAPI, Schema
from sim.data_model.datamodel_risk_assessment import RiskAssessment
from sim.data_model.data_interface.get_risk_assessment import get_sociecon, get_direct_cause, get_country_group, get_region_case
import json

risk = NinjaAPI(version="3.0.0")

class DataSchema(Schema):
    country: str
    age: str
    physical_activity: str
    family_history: str
    smoking: str
    alcohol: str
    height_cm: float
    weight_kg: float


@risk.post("/riskassessment")
def get_risk_assessment(request, payload: DataSchema):

    try: 
        risk_assessment = RiskAssessment(
            get_sociecon(), get_direct_cause(), get_country_group(), get_region_case())

        input_dic = {
            "input_country": payload.country,
            "input_agegroup": payload.age,
            "input_physical_activity": payload.physical_activity,
            "input_family_history": payload.family_history,
            "input_smoking": payload.smoking,
            "input_alcohol": payload.alcohol,
            "input_height_cm": payload.height_cm,
            "input_weight_kg": payload.weight_kg
        }

        output = risk_assessment.get_risk_output(json.dumps(input_dic))
    
    except:
        return {"Error": "404 not found"}

    return output