from django.urls import path
from home import views

urlpatterns = [
    path("boy/:id" , views.index)
]