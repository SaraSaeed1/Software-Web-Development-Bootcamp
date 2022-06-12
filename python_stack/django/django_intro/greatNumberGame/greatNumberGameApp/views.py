from urllib import request
from urllib.request import Request
from django.shortcuts import render, redirect
import random 	                # import the random module

# ---------------------------------------------------------------
def index(request):
    return render(request, "index.html")

def res (request):
    res = ""
    if request.POST['guess']:
        _random = request.session['rand']= random.randint(1, 2)
        _number = request.session['guess']= int(request.POST['guess'])
        _button = request.session['button'] = False
        # print(f"random{_random}| num{_number}"

        if (_random > _number):
            res = str(_number )+ " Too Low!!"
        elif(_random < _number):
            res = str(_number )+ " Too High!!"
        else:
            res = str(_number )+ " Was The Number"
            _button = True #button for Play Again , if the result is correct so will add button for play again
        # print(f"random: {_random}| guess: {_number}| result: {res}")

        context = {
            "res" : res,
            "button" : _button
        }

    else:
        resDont= " You dont write anything"
        context={
            "resDont" : resDont
        }
    return render(request, "index.html", context)

def playAgain(request):
    return redirect('/')
