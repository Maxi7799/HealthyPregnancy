from ninja import NinjaAPI

risk = NinjaAPI(version="3.0.0")

@risk.get("/riskassessment")
def risk_assessment(request, risk_json):
    return risk_json