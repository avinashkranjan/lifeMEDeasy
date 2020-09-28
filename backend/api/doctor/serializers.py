from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from .models import Doctor
class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model=Doctor
        fields=['name',  'email', 'password']
        extra_kwargs = {'password': {'write_only': True}}
    
    
        def create(self, validated_data):
            password = validated_data.pop('password', None)
            instance = self.Meta.model(**validated_data)

            if password is not None:
                instance.set_password(password)
                
            instance.save()
            return instance