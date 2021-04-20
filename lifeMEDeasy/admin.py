from django.contrib import admin
from .models import PatientRegister,DoctorRegister
# Register your models here.
admin.site.register(PatientRegister)
admin.site.register(DoctorRegister)