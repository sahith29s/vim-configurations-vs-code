from django.shortcuts import render 
from django.http import HttpResponse

# Create your views here.

def home(request):
    val1 = request.GET.get('num1')
    val2 = request.GET.get('num2')
    return render(request , "home.html")