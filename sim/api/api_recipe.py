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
        'food_index': 0,

        'food_picture': '',

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
        pass

    return recipes


# @recipe.get("/recipefoodnutrition")
# def get_recipe_food_nutrition(request):
#     return "US6.2: Identify Needed Recipes Using the 'Food Nutrition Features'"


# @recipe.get("/ingredientsrecipe")
# def get_ingredient_for_recipe(request):
#     return "US6.3: Manually Add Ingredients to Generate Recipes"


# @recipe.get("/displayrecipe")
# def get_recipe_by_name_display(request):
#     return "US6.4: Search for Recipe by Name and display ingredient"
