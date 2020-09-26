from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('doctors/', include('api.doctor.urls')),
    path('patients/', include('api.patients.urls')),
   
]
