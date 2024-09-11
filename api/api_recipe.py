from ninja import NinjaAPI


recipe = NinjaAPI(version="5.0.0")


@recipe.get("/toplocalrecipe")
def get_top_local_recipe(request):
    return "US6.1: View Top 10 Local Recipes for Pregnant Women"


@recipe.get("/recipefoodnutrition")
def get_recipe_food_nutrition(request):
    return "US6.2: Identify Needed Recipes Using the 'Food Nutrition Features'"


@recipe.get("/ingredientsrecipe")
def get_ingredient_for_recipe(request):
    return "US6.3: Manually Add Ingredients to Generate Recipes"


@recipe.get("/displayrecipe")
def get_recipe_by_name_display(request):
    return "US6.4: Search for Recipe by Name and display ingredient"
