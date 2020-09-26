from django.db import models
class Doctor(models.Model):
   name=models.CharField(max_length=50, default='Anonymous')
   email=models.EmailField(max_length=254, unique=True)
   password=models.CharField(max_length=20, blank=True, null=True)
   
