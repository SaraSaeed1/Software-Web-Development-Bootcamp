from itertools import count
from django.shortcuts import render, redirect
from django.contrib import messages
from .models import *

def index(request):
    context={
        'courses':Course.objects.all()
    }
    return render(request, 'index.html', context)

def add_course(request):
    if request.method=='POST':
        errors=Course.objects.basic_validator(request.POST)
        # check if the errors dictionary has anything in it
        if len(errors) > 0:
            # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
            for key, value in errors.items():
                messages.error(request, value)
        else:
            _newCourse=Course.objects.create(
                name=request.POST['name'],
                desc=request.POST['desc']
            )
            _newCourse.save()
            messages.success(request, "Successfully Added!")
        return redirect ('/')
    else:
        return redirect ('/')

def go_remove(request, _id):
    context={
        'course':Course.objects.get(id=_id)
    } 
    return render(request, 'remove.html', context)


def remove_course(request, _id):
    course = Course.objects.get(id=_id)
    course.delete()
    return redirect('/')


def go_comment(request, _id):
    context={
        'courses':Course.objects.all(),
        'course':Course.objects.get(id=_id),
        'comments':Comment.objects.all()
    } 
    return render(request, 'comment.html', context)

def add_comment(request, _id):
    if request.method == 'POST':
            new_comment= Comment.objects.create(
            comment = request.POST['comment'],
            course=Course.objects.get(id=_id)
            )
            new_comment.save()
    return redirect(f'/go_comment/{_id}')

def delete_comment(request, _id):
    comment = Comment.objects.get(id=_id)
    comment.delete()
    return redirect('/')