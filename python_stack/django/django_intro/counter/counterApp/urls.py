from django.urls import path 
from . import views

urlpatterns = [
    path('', views.counter),
    path('add2', views.counterTow),
    path('destroy_session', views.destroy),
]