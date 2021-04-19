from django.shortcuts import render
from .models import PatientRegister,DoctorRegister
from .forms import PatientRegisterForm,DoctorRegisterForm
import json
from .keys import encrypt_key
from django.http import HttpResponse
import cryptocode
# Create your views here.
def PatientRegisterView(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        data['password'] = cryptocode.encrypt(data['password'],encrypt_key )
        form = PatientRegisterForm(data)
        form.save()
        return HttpResponse('Patient Registered',status=200)
    else:
        return HttpResponse('bad request',status=404)


def DoctorRegisterView(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        data['password'] = cryptocode.encrypt(data['password'],encrypt_key )
        form = DoctorRegisterForm(data)
        form.save()
        return HttpResponse('Doctor Registered',status=200)
    else:
        return HttpResponse('bad request',status=404)


def DPLogin(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        if data['select'] == 'Patient':
            query = PatientRegister.objects.all().filter(email=data['email']).first()
            if query and cryptocode.decrypt(query.password,encrypt_key ) == data['password']:
                return HttpResponse('Patient Login successful ',status=200)
            else:
                return HttpResponse('Invalid Credentials',status=404)

        elif data['select'] == 'Doctor':
            
            query = DoctorRegister.objects.all().filter(email=data['email']).first()
            if query and cryptocode.decrypt(query.password,encrypt_key ) == data['password']:
                return HttpResponse('Patient Login successful ',status=200)
            else:
                return HttpResponse('Invalid Credentials',status=404)

        else:
            return HttpResponse('bad request',status=404)            

    else:
        return HttpResponse('bad request',status=404)