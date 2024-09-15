from ninja import NinjaAPI, Schema

from sim.data_model.data_interface.get_recipe import get_recom_recipe_data


recipe = NinjaAPI(version="5.0.0")


class RecommRecipeDataSchema(Schema):
    meal_time: str


@recipe.post("/recommrecipe")
def get_recommended_recipe(request, payload: RecommRecipeDataSchema):
    # recipes is a list of 10 recipes
    recipes = get_recom_recipe_data(payload.meal_time)

    output = {
        'length': 10,
        'recipes': []
    }

    output_element = {
        'recipe_index': 0,
        'recipe_name': '',

        'food_picture': '',

        'calories_digits': 0,

        'protein_digits': 0,
        'protein_unit': '',

        'fat_digits': 0,
        'fat_unit': '',

        'carb_digits': 0,
        'carb_unit': '',

        'cholesterol_digits': 0,
        'cholesterol_unit': '',

        'sodium_digits': 0,
        'sodium_unit': '',

        'calcium_digits': 0,
        'calcium_unit': '',

        'magnesium_digits': 0,
        'magnesium_unit': '',

        'potassium_digits': 0,
        'potassium_unit': '',

        'iron_digits': 0,
        'iron_unit': ''
    }

    index = 0
    for recipe in recipes:
        output_element = {}

        output_element['recipe_index'] = index
        index += 1

        output_element['recipe_name'] = recipe['recipe'].get('label', '')

        output_element['food_picture'] = recipe['recipe'].get('image', '')

        output_element['calories_digits'] = recipe['recipe'].get('calories', 0)

        output_element['protein_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('PROCNT', {}).get('quantity', 0)
        output_element['protein_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('PROCNT', {}).get('unit', '')

        output_element['fat_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('FAT', {}).get('quantity', 0)
        output_element['fat_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('FAT', {}).get('unit', '')

        output_element['carb_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('CHOCDF', {}).get('quantity', 0)
        output_element['carb_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('CHOCDF', {}).get('unit', '')

        output_element['cholesterol_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('CHOLE', {}).get('quantity', 0)
        output_element['cholesterol_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('CHOLE', {}).get('unit', '')

        output_element['sodium_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('NA', {}).get('quantity', 0)
        output_element['sodium_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('NA', {}).get('unit', '')

        output_element['calcium_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('CA', {}).get('quantity', 0)
        output_element['calcium_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('CA', {}).get('unit', '')

        output_element['magnesium_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('MG', {}).get('quantity', 0)
        output_element['magnesium_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('MG', {}).get('unit', '')

        output_element['potassium_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('K', {}).get('quantity', 0)
        output_element['potassium_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('K', {}).get('unit', '')

        output_element['iron_digits'] = recipe['recipe'].get(
            'totalNutrients', {}).get('FE', {}).get('quantity', 0)
        output_element['iron_unit'] = recipe['recipe'].get(
            'totalNutrients', {}).get('FE', {}).get('unit', '')

        output['recipes'].append(output_element)

    return output


# @recipe.get("/recipefoodnutrition")
# def get_recipe_food_nutrition(request):
#     return "US6.2: Identify Needed Recipes Using the 'Food Nutrition Features'"


# @recipe.get("/ingredientsrecipe")
# def get_ingredient_for_recipe(request):
#     return "US6.3: Manually Add Ingredients to Generate Recipes"


# @recipe.get("/displayrecipe")
# def get_recipe_by_name_display(request):
#     return "US6.4: Search for Recipe by Name and display ingredient"
