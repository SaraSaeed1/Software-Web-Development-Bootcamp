from django.shortcuts import render, redirect
from .models import *

def wall(request):
    if not 'user_id' in request.session:
        return redirect('/')
    context = {
        "user" : User.objects.get(id=request.session['user_id']),
        'massage': Message.objects.all().order_by('-created_at')
        # 'User':User.objects.all()
    }
    return render(request, "wall.html", context)


def massage(request):
    if request.method=='POST':
        new_message= Message.objects.create(
            user =  User.objects.get(id=request.session['user_id']),
            message= request.POST['massage']
        )
        new_message.save()
        return redirect('/wall')
    else:
        return redirect('/wall')



def delete(request,_id):
    message= Message.objects.get(id=_id)
    message.delete()
    return redirect('/wall')



def post_comment(request):
    if request.method == 'POST':
        new_comment = Comment.objects.create(
            comment = request.POST['comment'],
            message = Message.objects.get(id=request.POST['msg_id']),
            user=User.objects.get(id=request.session['userId']) ,
        )
        new_comment.save()
    return redirect('/wall')


def comment(request):
    if not 'user_id' in request.session:
        return redirect('/')
    context = {
        'user' :User.objects.get(id=request.session['user_id']),
        'massage' : Message.objects.all().order_by('-created_at'),
        "comment" : Comment.objects.all().order_by('-created_at')
        }
    return render(request,"wall_comment.html",context)



def new_comment(request,_id):
    if request.method=='POST':
        new_comment= Comment.objects.create(
            message = Message.objects.get(id=_id),
            user =  User.objects.get(id=request.session['user_id']),
            comment= request.POST['comment']
        )
        new_comment.save()
        return redirect('/wall/comment')


def logOut(request):
    del request.session['user_id']
    # request.session.clear()
    return redirect('/')
