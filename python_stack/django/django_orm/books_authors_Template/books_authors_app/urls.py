from django.urls import path   

from . import views
urlpatterns = [
    path('', views.index),
    path('AddBook',views.AddBook),
    path('books/<_id>/',views.InfoBook),
    path('deleteBook/<_idBook>/',views.delete),
    path('AddAuthor_Book/<int:_id>/', views.AddAuthor_Book),

    path('authors',views.author),
    path('AddAuthor', views.AddAuthor),
    path('authors/<_id>/',views.InfoAuthor),
    path('delete_author/<_idAuthor>',views.delete_author),
    path('AddBook_Author/<int:_id>/', views.AddBook_Author),
]