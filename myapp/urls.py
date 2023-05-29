"""UIUX_web URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from . import views

urlpatterns = [
    # path('base',views.base,name='base'),
    path("", views.index, name="index"),
    path("hw1", views.hw1, name="hw1"),
    path("hw2", views.hw2, name="hw2"),
    path("hw3", views.hw3, name="hw3"),
    path("hw4", views.hw4, name="hw4"),
    path("hw5", views.hw5, name="hw5"),
    path("hw6", views.hw6, name="hw6"),
]
