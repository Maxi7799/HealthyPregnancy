import requests
from rest_framework.response import Response
from rest_framework import status

Edamam_URL = "https://api.edamam.com"


def get_recom_recipe_data(meal_time):

    meal_list = [meal_time]
    params = {
        'type': "public",
        'app_id': "82874fb9",
        'app_key': "7d282272a8965320920ddd78da1245c8",
        'mealType': meal_list,
        'random': True
    }

    response = requests.get(Edamam_URL + "/api/recipes/v2", params)

    # return 10 recipes in a list
    if response.status_code == 200:
        data = response.json()
        output = []
        try:
            output = data["hits"][0:10]
            return output
        except:
            return "recipes less than 10"
    else:
        return "Failed to retrieve data from external API"
