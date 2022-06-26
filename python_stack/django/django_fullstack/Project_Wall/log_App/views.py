from django.shortcuts import render,redirect
from django.contrib import messages
from .models import *

def index(request):
    return render(request, "index.html")


def registration(request):
    if request.method=='POST':
        errors = User.objects.registration_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
            _hash = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode()
            _newUser = User.objects.create(
                fname = request.POST['fname'],
                lname = request.POST['lname'],
                birth_date=request.POST['birth_date'],
                email = request.POST['email'],
                password = _hash
            )
            _newUser.save()
            request.session['user_id'] = _newUser.id
            return redirect('/wall')
    else:
        return redirect ('/')

def login(request):
    if request.method == 'POST':
        errors = User.objects.login_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
            # if we get True after checking the password, we may put the user id in session
            log_user=User.objects.get(email__iexact=request.POST['email'])
            request.session['user_id'] = log_user.id
            # if we didn't find anything in the database by searching by email or if the passwords don't match, 
            # redirect back to a safe route
            return redirect('/wall')

# def success(request):
#     if not 'user_id' in request.session:
#         return redirect('')
#     context = {
#         "user" : User.objects.get(id=request.session['user_id'])
#     }
#     return render(request, "success.html", context)

