from django.contrib import admin
from .models import TeachersModel

class TeachersAdmin(admin.ModelAdmin):
    pass

admin.site.register(TeachersModel,TeachersAdmin)