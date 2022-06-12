from urllib.request import Request
from django.shortcuts import render, redirect

def counter(request):
    request.session['counter'] = int (request.session.get('counter', 0))+1
    count= {'counter': request.session['counter']}
    return render(request, "index.html")
    # return HttpResponse(t.render(c))

def counterTow(request):
    request.session['counter'] = int (request.session.get('counter', 0))+2
    count= {'add2': request.session['counter']}
    return redirect('/')


def destroy(request):
    del request.session['counter']
    return redirect('/')




# another Solution:

# def session(request):
#     if 'counter' in request.session:
#         request.session ['counter']+=1
#     else:
#         request.session['counter']=0
#     return render(request, "index.html")

# def destroy(request):
#     del request.session['counter']
#     return redirect('/')
