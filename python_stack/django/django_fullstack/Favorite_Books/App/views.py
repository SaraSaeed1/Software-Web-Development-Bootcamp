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
                email = request.POST['email'],
                password = _hash
            )
            _newUser.save()
            request.session['user_id'] = _newUser.id
            return redirect('/books')
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
            log_user=User.objects.get(email__iexact=request.POST['email'])
            request.session['user_id'] = log_user.id
            return redirect('/books')
    else:
        return redirect('/')



def book_home(request):
    if not 'user_id' in request.session:
        return redirect('/')
    context = {
        'books':Books.objects.all(),
        "user" : User.objects.get(id=request.session['user_id'])
    }
    return render(request, "book_home.html", context)




def add_book(request):
    if request.method == 'POST':
        errors = Books.objects.book_validator(request.POST)
        if len(errors)>0:
            for key, value in errors.items():
                messages.error(request, value)
            return redirect('/books')
        else:
            this_user= User.objects.get(id=request.session['user_id'])
            book=Books.objects.create(
                title = request.POST['title'],
                desc = request.POST['desc'],
                uploaded_py = this_user
            )
            book.user_who_like.add(this_user)
            # this_user.liked_books.add(this_book)
            book.save()
        return redirect('/books')
    else:
        return redirect('/books')



def info_book(request, _id):
    if not 'user_id' in request.session:
        return redirect('/')
    context = {
        'user':User.objects.get(id=request.session['user_id']),
        'book':Books.objects.get(id=_id)
    }
    return render (request, "info_book.html", context)



def favorite(request, _id):
    user_id=request.session['user_id']
    book=Books.objects.get(id=_id)
    this_user=User.objects.get(id=user_id)
    book.user_who_like.add(this_user)
    return redirect (f'/{_id}')



def un_favorite(request, _id):
    user_id=request.session['user_id']
    book=Books.objects.get(id=_id)
    this_user=User.objects.get(id=user_id)
    book.user_who_like.remove(this_user)
    return redirect (f'/{_id}')



def update(request, _id):
    if request.method =='POST': 
        updates=Books.objects.get(id=_id)
        updates.title=request.POST['title']
        updates.desc=request.POST['desc']
        updates.save()
    return redirect('/books')



def delete_book(request, _id):
    book = Books.objects.get(id=_id)
    user = request.session['user_id']
    if user == book.uploaded_py.id:
        book=Books.objects.get(id=_id)
        book.delete()
        return redirect('/books')
    else:
        return redirect('/books')


def logout(request):
    del request.session['user_id']
    return redirect('/')

