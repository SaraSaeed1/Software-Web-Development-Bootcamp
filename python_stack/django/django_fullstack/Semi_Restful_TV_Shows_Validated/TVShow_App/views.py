from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *


# Go to show page direct
def index(request):
    return redirect('shows/')

# Page of Read All Shows
def showsAll(request):
    context={
        'shows':Show.objects.all(),
    }
    return render(request, 'read_all.html', context)

# Go to page for Create new Show  
def go_create(request):
    return render(request, 'create.html')

# Create new Show, and then go to Read this Show  
def create_show (request):
    if request.method=="POST":
        errors = Show.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
        if len(errors) > 0:
            # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
            for key, value in errors.items():
                messages.error(request, value)
        else:
            _newShow= Show.objects.create(
                title= request.POST['title'],
                network=request.POST['network'],
                release_date=request.POST['release_date'],
                description=request.POST['description']
            )
            _newShow.save()
            messages.success(request, "Show successfully Added!")
            return redirect(f'/shows/{_newShow.id}')
    return redirect('/shows/new')

# Read Show Information
def readOne(request, _id):
    context={
        'show':Show.objects.get(id=_id)
    } 
    return render(request,'read_one.html',context)

#Page of Edit Show 
def go_edit(request,_id):
    context={
        'show': Show.objects.get(id=_id)
    }
    return render(request, 'update.html',context)

# Edit Show
def edit_show(request,_id):
    if request.method=='POST':
        errors = Show.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
        if len(errors) > 0 :
            # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
            for key, value in errors.items():
                messages.error(request, value)

        else:
            _editShow= Show.objects.get(id=_id)
            _editShow.title= request.POST['title']
            _editShow.network=request.POST['network']
            _editShow.release_date=request.POST['release_date']
            _editShow.description=request.POST['description']
            _editShow.save()
            messages.success(request, "Show successfully Update!")
            return redirect(f'/shows/{_id}')
    return redirect(f'/shows/{_id}/edit')




# Delete Show by ID
def delete_show(request, _id):
    show = Show.objects.get(id=_id)
    show.delete()
    return redirect('/')