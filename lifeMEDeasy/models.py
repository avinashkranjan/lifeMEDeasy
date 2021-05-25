from django.db import models


# Create your models here.
class DoctorRegister(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=30, unique=True)
    password = models.CharField(max_length=200)
    locality = models.CharField(max_length=30)
    state = models.CharField(max_length=20)


class PatientRegister(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=30, unique=True)
    password = models.CharField(max_length=200)
    locality = models.CharField(max_length=30)
    state = models.CharField(max_length=20)


class Emergency(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=30)
    emergency = models.CharField(max_length=200)
    location = models.CharField(max_length=30)


class Appointment(models.Model):
    name = models.CharField(max_length=50)
    doctor = models.ForeignKey(DoctorRegister, on_delete=models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
