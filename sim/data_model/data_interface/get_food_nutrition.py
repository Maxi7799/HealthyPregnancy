import requests
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

# call Edamam api for food nutrition data
API_URL = "https://jsonplaceholder.typicode.com/posts"



def get(self, request, *args, **kwargs):
    response = requests.get(API_URL)

    if response.status_code == 200:
        data = response.json()
        return Response(data, status=status.HTTP_200_OK)
    else:
        return Response(
            {"error": "Failed to retrieve data from external API"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
