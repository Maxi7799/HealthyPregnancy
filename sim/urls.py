from django.contrib import admin
from django.urls import path, include
from .api.connection_test import test


urlpatterns = [
    path('test/', test.urls),
]
