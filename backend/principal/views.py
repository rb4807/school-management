from django.shortcuts import render
from principal import serializers
from .models import TeachersModel
from .serializers import TeachersSerializer
from .serializers import TeachersSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class TeachersTable(APIView):
    def get(self,request):
        teachersObj = TeachersModel.objects.all()
        teachersSerializeObj = TeachersSerializer(teachersObj,many=True)
        return Response(teachersSerializeObj.data)
    
class TeachersAdd(APIView):   
    def post(self,request):
        serializeObj = TeachersSerializer(data = request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response("Created")
        return Response(serializeObj.errors)

class TeachersUpdate(APIView):
    def post(self,request,pk):
        try:
            teachersObj = TeachersModel.objects.get(pk=pk)
        except:
            return Response("Not found")
        
        serializeObj = TeachersSerializer(teachersObj,data = request.data)
        if serializeObj.is_valid():
            serializeObj.save()
            return Response("Updated")
        return Response(serializeObj.errors)

class TeachersDelete(APIView):
    def post(self,request,pk):
        try:
            teachersObj = TeachersModel.objects.get(pk=pk)
        except:
            return Response("Not found")
        teachersObj.delete()
        return Response("Deleted")


