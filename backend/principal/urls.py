from django.urls import path
from . import views

urlpatterns = [
    path('TeacherData',views.TeachersTable.as_view()),
    path('add/',views.TeachersAdd.as_view()),
    path('edit/<int:pk>',views.TeachersUpdate.as_view()),
    path('delete/<int:pk>',views.TeachersDelete.as_view()),
]
