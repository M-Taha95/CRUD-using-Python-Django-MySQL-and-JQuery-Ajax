from django.shortcuts import render
from .models import Member


def index(request):
    return render(request, "index.html")
