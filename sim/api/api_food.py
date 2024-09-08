from ninja import NinjaAPI


food = NinjaAPI(version="4.0.0")


@food.get("/nutritioninfo")
def get_food_nutrition(request):
    return "US5.1: Ingredient Nutrition Information"


@food.get("/notrecomfood")
def get_notrecom_food_list(request):
    return "US5.2: Not Recommended Foods for Pregnant Women Feature"


@food.get("/nutritioncalcu")
def get_nutrition_calcuated(request):
    return "US5.3: Nutrition Calculator for Balanced Intake"

