from multiprocessing import context
from operator import concat
from django.shortcuts import render, HttpResponse, redirect

def index(request):
    return render(request, "index.html")


def result(request):
    _name= request.POST['name']
    _age= request.POST['age']
    _location= request.POST['location']
    _language= request.POST['language']
    _youTube= request.POST['youTube']
    _udemy= request.POST['udemy']
    _satr= request.POST['satr']
    _flexCourses= request.POST['flexCourses']
    _onlyCodingDojo= request.POST['onlyCodingDojo']
    _comment= request.POST['comment']

    context = {
        'name': _name,
        'age': _age,
        'location': _location,
        'language': _language,
        'websiteLearn':[_youTube, _udemy, _satr, _flexCourses, _onlyCodingDojo],
        'comment': _comment
    }
    return render(request, "result.html",context )

def goBack(request):
    _goBack= request.POST['goBack']

    context = {
        'goBack': _goBack
    }
    return render(request, "index.html", context)