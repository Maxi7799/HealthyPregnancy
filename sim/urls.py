from django.contrib import admin
from django.urls import path, include
from .api.connection_test import test
from .api.api_data_insight import datainsight
from .api.api_risk_assessment import risk


urlpatterns = [
    path('risk/', risk.urls),
    path('datainsight/', datainsight.urls),
    path('test/', test.urls),
]
