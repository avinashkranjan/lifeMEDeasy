from django.forms import ModelForm
from .models import PatientRegister,DoctorRegister

class PatientRegisterForm(ModelForm):
    class Meta:
        model = PatientRegister
        fields = '__all__'

class DoctorRegisterForm(ModelForm):
    class Meta:
        model = DoctorRegister
        fields = '__all__'