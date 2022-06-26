from django.urls import path     
from . import views

urlpatterns = [
    path('', views.wall),
    path('logOut', views.logOut),
    path('massage',views.massage),
    path('delete/<int:_id>',views.delete),
    path('comment',views.comment),
    path('post_comment/<int:_id>',views.new_comment),
]

