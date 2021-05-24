from django.contrib import admin
from .models import PatientRegister, DoctorRegister, Emergency, Appointment

# Register your models here.
admin.site.register(PatientRegister)
admin.site.register(DoctorRegister)
admin.site.register(Emergency)
admin.site.register(Appointment)
