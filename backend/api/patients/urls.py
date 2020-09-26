from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet
router = routers.DefaultRouter()
router.register('patients', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
]