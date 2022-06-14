from django.urls import path , include 
from . import views

urlpatterns = [
    path('',views.index),
    path('register/', views.register),
    path('login/', views.login),
    path('users/new/', views.new),
    path('users/', views.users),

    # path('/blogs', include('blog_app.urls')),
    # path('/surveys', include('survey_app.urls')),
    # path('', include('users_app.urls'))
]
