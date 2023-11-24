from rest_framework import serializers
from .models import TeachersModel

class TeachersSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeachersModel
        fields = "__all__"