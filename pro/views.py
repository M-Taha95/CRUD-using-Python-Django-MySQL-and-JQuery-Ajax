from django.shortcuts import render, redirect
from .models import Member


def index(request):
    return render(request, "index.html")


def create(requset):
    member = Member(
        first_name=requset.POST["first_name"], last_name=requset.POST["last_name"]
    )
    member.save()
    return redirect("/")


def read(request):
    members = Member.objects.all()
    context = {"members": members}
    return render(request, "result.html", context)
