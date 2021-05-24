from django.forms import ModelForm
from .models import PatientRegister, DoctorRegister, Emergency


class PatientRegisterForm(ModelForm):
    class Meta:
        model = PatientRegister
        fields = "__all__"


class DoctorRegisterForm(ModelForm):
    class Meta:
        model = DoctorRegister
        fields = "__all__"


class EmergencyForm(ModelForm):
    class Meta:
        model = Emergency
        fields = "__all__"
