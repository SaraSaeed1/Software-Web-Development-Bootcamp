from django.shortcuts import render, redirect
from dojo_Ninja_App.models import Dojos
from .models import *

def index(request):
    context ={
        'dojos':Dojos.objects.all(),
        'ninjas':Ninjas.objects.all(),
        }
    return render(request,'index.html',context)

def addDojo(request):
    if request.method == 'POST':
        newDojo= Dojos.objects.create(
        name = request.POST['name'],
        city = request.POST['city'],
        state = request.POST['state'],
        )
        newDojo.save()
    return redirect('/')

def addNinja(request):
    if request.method == 'POST':
        newNinja= Ninjas.objects.create(
        fname = request.POST['fname'],
        lname = request.POST['lname'],
        dojo_id=Dojos.objects.get(id=request.POST['dojo'])
        )
        newNinja.save()
    return redirect('/')

def delete(request, _id):
    dojo = Dojos.objects.get(id=_id)
    dojo.delete()
    
    return redirect('/')
