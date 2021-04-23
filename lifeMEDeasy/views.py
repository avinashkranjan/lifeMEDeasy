from django.shortcuts import render
from .models import PatientRegister,DoctorRegister,Appointment
from .forms import PatientRegisterForm,DoctorRegisterForm,EmergencyForm
import json
from .keys import encrypt_key
from django.http import HttpResponse
import cryptocode
from jsonview.decorators import json_view
from restless.dj import DjangoResource
from restless.preparers import FieldsPreparer
from datetime import date,time

class PatientResource(DjangoResource):
    preparer = FieldsPreparer(fields={
        'id': 'id',
       
        'name': 'name',
    })
    # GET /api/v2/friends/
    def list(self):
        return PatientRegister.objects.all()
    # GET /api/v2/friends/<pk>/ 
    def detail(self, pk):
        return Friend.objects.get(id=pk)

class DoctorResource(DjangoResource):
    preparer = FieldsPreparer(fields={
        'id': 'id',
        'name': 'name',
    })
    # GET /api/v2/friends/
    def list(self):
        return DoctorRegister.objects.all()
    # GET /api/v2/friends/<pk>/ 
    def detail(self, pk):
        return Friend.objects.get(id=pk)


@json_view
def hello(request):
    return PatientRegister.objects.all()
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


def AmbulanceView(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        form = EmergencyForm(data)
        form.save()
        return HttpResponse('Ambulance booked!',status=200)
    return HttpResponse('Invalid request',status=404)


def AppointmentView(request):
    if request.method == 'POST':
        data= json.loads(request.body)
        query = DoctorRegister.objects.all().filter(name=data['doctor']).first()
        h,m= data['time'].split(':')
        new_appoint = Appointment(name=data['name'],doctor=query,date=date.fromisoformat(data['date']),time=time(int(h),int(m)))
        new_appoint.save()
        return HttpResponse('Appointment booked!',status=200)
    return HttpResponse('Invalid request',status=404)



