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


def edit(request, id):
    members = Member.objects.get(id=id)
    context = {"member": members}
    return render(request, "edit.html", context)


def update(request, id):
    member = Member.objects.get(id=id)
    member.first_name = request.POST["first_name"]
    member.last_name = request.POST["last_name"]
    member.save()
    return redirect("/")


def delete(request, id):
    member = Member.objects.get(id=id)
    member.delete()
    return redirect("/")
