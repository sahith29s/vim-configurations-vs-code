from django.shortcuts import render
from home.models import Todo

# Create your views here.

def index(request):
    if(request.method == "POST"):
        todoTitle = request.POST['todoTitle']
        todoDescription = request.POST['todoDescription']
        instance = Todo(
            todoTitle = todoTitle,
            todoDescription = todoDescription
        )
        instance.save()
    return render(request , "index.html")

def tasks(request):
    allTodos = Todo.objects.all()
    print(allTodos[0])
    return render(request ,  "tasks.html")