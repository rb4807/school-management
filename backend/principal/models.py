from django.db import models

class TeachersModel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    experience = models.CharField(max_length=10)
    image = models.ImageField(upload_to='Teacher')
    def __str__(self):
        return self.name
