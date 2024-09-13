from ninja import NinjaAPI, Schema
from sim.data_model.data_interface.get_food_nutrition import get_food_nutrition_data
from sim.model.model_pregancy_food import PregnancyFoods


food = NinjaAPI(version="4.0.0")


class FoodNutritionDataSchema(Schema):
    ingrs: list[str]
    ingredient_list: list[str]


class FoodNotRecomDataSchema(Schema):
    classifiction: str
    category: str


@food.post("/nutritioninfo")
def get_food_nutrition(request, payload: FoodNutritionDataSchema):
    output = {
        'ingrs': payload.ingrs,
        'calories': [],
        'weights': [],
        'total_calories': 0,
        'total_fat_digits': 0,
        'total_fat_percent': 0,
        'total_fat_unit': '',
        'saturated_fat_digits': 0,
        'saturated_fat_percent': 0,
        'saturated_fat_unit': '',
        'trans_fat_digits': 0,
        'trans_fat_percent': 0,
        'trans_fat_unit': '',
        'cholesterol_digits': 0,
        'cholesterol_percent': 0,
        'cholesterol_unit': '',
        'sodium_digits': 0,
        'sodium_percent': 0,
        'sodium_unit': '',
        'total_carbohydrate_digits': 0,
        "total_carbohydrate_percent": 0,
        "total_carbohydrate_unit": '',
        'dietary_fiber_digits': 0,
        "dietary_fiber_percent": 0,
        "dietary_fiber_unit": '',
        'total_sugars_digits': 0,
        'total_sugars_percent': 0,
        'total_sugars_unit': '',
        'protein_digits': 0,
        'protein_percent': 0,
        'protein_unit': '',
        'vitamin_digits': 0,
        'vitamin_percent': 0,
        'vitamin_unit': '',
        'calcium_digits': 0,
        'calcium_percent': 0,
        'calcium_unit': '',
        'iron_digits': 0,
        'iron_percent': 0,
        'iron_unit': '',
        'potassium_digits': 0,
        'potassium_percent': 0,
        'potassium_unit': ''
    }
    # food_data_list = []

    for ingr in payload.ingredient_list:
        response = get_food_nutrition_data(ingr)

        # Safely append calories and weights
        output['calories'].append(response.get("calories", 0))
        output['weights'].append(response.get("totalWeight", 0))

        output['total_calories'] += response.get('calories', 0)

        # Safely handle 'totalNutrients' and 'totalDaily' to avoid KeyErrors
        total_nutrients = response.get('totalNutrients', {})
        total_daily = response.get('totalDaily', {})

        # Fat
        output['total_fat_digits'] += total_nutrients.get(
            'FAT', {}).get('quantity', 0)
        output['total_fat_percent'] += total_daily.get(
            'FAT', {}).get('quantity', 0)
        output['total_fat_unit'] = total_nutrients.get(
            'FAT', {}).get('unit', '')

        # Saturated Fat
        output["saturated_fat_digits"] += total_nutrients.get(
            'FASAT', {}).get('quantity', 0)
        output["saturated_fat_percent"] += total_daily.get(
            'FASAT', {}).get('quantity', 0)
        output['saturated_fat_unit'] = total_nutrients.get(
            'FASAT', {}).get('unit', '')

        # Trans Fat
        output['trans_fat_digits'] += total_nutrients.get(
            'FATRN', {}).get('quantity', 0)
        output['trans_fat_percent'] += total_daily.get(
            'FATRN', {}).get('quantity', 0)
        output['trans_fat_unit'] = total_nutrients.get(
            'FATRN', {}).get('unit', '')

        # Cholesterol
        output['cholesterol_digits'] += total_nutrients.get(
            'CHOLE', {}).get('quantity', 0)
        output['cholesterol_percent'] += total_daily.get(
            'CHOLE', {}).get('quantity', 0)
        output['cholesterol_unit'] = total_nutrients.get(
            'CHOLE', {}).get('unit', '')

        # Sodium
        output['sodium_digits'] += total_nutrients.get(
            'NA', {}).get('quantity', 0)
        output['sodium_percent'] += total_daily.get(
            'NA', {}).get('quantity', 0)
        output['sodium_unit'] = total_nutrients.get('NA', {}).get('unit', '')

        # Carbohydrates
        output['total_carbohydrate_digits'] += total_nutrients.get(
            'CHOCDF', {}).get('quantity', 0)
        output['total_carbohydrate_percent'] += total_daily.get(
            'CHOCDF', {}).get('quantity', 0)
        output['total_carbohydrate_unit'] = total_nutrients.get(
            'CHOCDF', {}).get('unit', '')

        # Dietary Fiber
        output['dietary_fiber_digits'] += total_nutrients.get(
            'FIBTG', {}).get('quantity', 0)
        output['dietary_fiber_percent'] += total_daily.get(
            'FIBTG', {}).get('quantity', 0)
        output['dietary_fiber_unit'] = total_nutrients.get(
            'FIBTG', {}).get('unit', '')

        # Sugars
        output['total_sugars_digits'] += total_nutrients.get(
            'SUGAR', {}).get('quantity', 0)
        output['total_sugars_percent'] += total_daily.get(
            'SUGAR', {}).get('quantity', 0)
        output['total_sugars_unit'] = total_nutrients.get(
            'SUGAR', {}).get('unit', '')

        # Protein
        output['protein_digits'] += total_nutrients.get(
            'PROCNT', {}).get('quantity', 0)
        output['protein_percent'] += total_daily.get(
            'PROCNT', {}).get('quantity', 0)
        output['protein_unit'] = total_nutrients.get(
            'PROCNT', {}).get('unit', '')

        # Vitamins and Minerals
        output['vitamin_digits'] += total_nutrients.get(
            'VITD', {}).get('quantity', 0)
        output['vitamin_percent'] += total_daily.get(
            'VITD', {}).get('quantity', 0)
        output['vitamin_unit'] = total_nutrients.get(
            'VITD', {}).get('unit', '')

        output['calcium_digits'] += total_nutrients.get(
            'CA', {}).get('quantity', 0)
        output['calcium_percent'] += total_daily.get(
            'CA', {}).get('quantity', 0)
        output['calcium_unit'] = total_nutrients.get('CA', {}).get('unit', '')

        output['iron_digits'] += total_nutrients.get(
            'FE', {}).get('quantity', 0)
        output['iron_percent'] += total_daily.get('FE', {}).get('quantity', 0)
        output['iron_unit'] = total_nutrients.get('FE', {}).get('unit', '')

        output['potassium_digits'] += total_nutrients.get(
            'K', {}).get('quantity', 0)
        output['potassium_percent'] += total_daily.get(
            'K', {}).get('quantity', 0)
        output['potassium_unit'] = total_nutrients.get('K', {}).get('unit', '')

    return output


@food.post("/notrecomfood")
def get_notrecom_food_list(request, payload: FoodNotRecomDataSchema):
    foods = PregnancyFoods.objects.all()
    food_item = []
    reason = []

    for food in foods:
        if food.classification == payload.classifiction and food.category == payload.category:
            food_item.append(food.food_item)
            reason.append(food.reason)

    return {
        "food_item": food_item,
        "reason": reason
    }


# @food.get("/nutritioncalcu")
# def get_nutrition_calcuated(request):
#     return "US5.3: Nutrition Calculator for Balanced Intake"
