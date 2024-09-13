import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

Edamam_URL = "https://api.edamam.com"


def get_food_nutrition_data(ingr):

    params = {
        'app_id': "f5122945",
        'app_key': "f4d0d4b74ed080435e5faf94071f2e6d",
        'ingr': ingr
    }

    response = requests.get(Edamam_URL + "/api/nutrition-data", params)

    if response.status_code == 200:
        data = response.json()
        return data
    else:
        return Response(
            {"error": "Failed to retrieve data from external API"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
