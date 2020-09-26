from django.db import models
class Patients(models.Model):
    name=models.CharField(max_length=50, default='Anonymous')
    email=models.EmailField(max_length=254, unique=True)
    phone=models.CharField(max_length=20, blank=True, null=True)
    gender=models.CharField(max_length=10, blank=True, null=True)
    address=models.CharField(max_length=50, blank=True, null=True)
