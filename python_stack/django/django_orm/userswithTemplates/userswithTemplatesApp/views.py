from multiprocessing import context
from operator import ne
from django.shortcuts import render, redirect
from .models import Users

def index(request):
    users=Users.objects.all()
    context={
        'users':users
    }
    return render(request, "index.html", context)

def create(request):
    if request.method == 'POST':
        newUser= Users.objects.create(
            first_name=request.POST['fname'],
            last_name=request.POST['lname'],
            email_address=request.POST['email'],
            age=request.POST['age'],
        )
        newUser.save()
    return redirect('/')