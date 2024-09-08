from django.contrib import admin
from django.urls import path, include
from .api.connection_test import test
from .api.api_data_insight import datainsight
from .api.api_risk_assessment import risk
from .api.api_food import food
from .api.api_recipe import recipe

urlpatterns = [
    path('recipe/', recipe.urls),
    path('food/', food.urls),
    path('risk/', risk.urls),
    path('datainsight/', datainsight.urls),
    path('test/', test.urls),
]
