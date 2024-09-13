from ninja import NinjaAPI, Schema
from sim.data_model.data_interface.get_food_nutrition import get_food_nutrition_data


food = NinjaAPI(version="4.0.0")


class FoodNutritionDataSchema(Schema):
    ingrs: list[str]
    ingredient_list: list[str]


@food.post("/nutritioninfo")
def get_food_nutrition(request, payload: FoodNutritionDataSchema):
    output = {
        'ingrs': payload.ingrs,
        'calories': [],
        'weights': [],
        'total_calories': 0,
        'total_fat_digits': 0,
        'total_fat_percent': 0,
        'saturated_fat_digits': 0,
        'saturated_fat_percent': 0,
        'trans_fat_digits': 0,
        'trans_fat_percent': 0,
        'cholesterol_digits': 0,
        'cholesterol_percent': 0,
        'sodium_digits': 0,
        'sodium_percent': 0,
        'total_carbohydrate_digits': 0,
        "total_carbohydrate_percent": 0,
        'dietary_fiber_digits': 0,
        "dietary_fiber_percent": 0,
        'total_sugars_digits': 0,
        'total_sugars_percent': 0,
        'protein_digits': 0,
        'protein_percent': 0,
        'vitamin_digits': 0,
        'vitamin_percent': 0,
        'calcium_digits': 0,
        'calcium_percent': 0,
        'iron_digits': 0,
        'iron_percent': 0,
        'potassium_digits': 0,
        'potassium_percent': 0
    }
    food_data_list = []
    for ingr in payload.ingredient_list:
        food_data_list.append(get_food_nutrition_data(ingr))

    print(food_data_list[0]["calories"])

    return output


@food.get("/notrecomfood")
def get_notrecom_food_list(request):
    return "US5.2: Not Recommended Foods for Pregnant Women Feature"


@food.get("/nutritioncalcu")
def get_nutrition_calcuated(request):
    return "US5.3: Nutrition Calculator for Balanced Intake"
