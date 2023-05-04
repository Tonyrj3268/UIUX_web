from django.shortcuts import render

# Create your views here.

def index(request):
    # 今天先不探討什麼是 render，先記得它會去撈 test.html
    return render(request, 'index.html')
def hw1(request):
    # 今天先不探討什麼是 render，先記得它會去撈 test.html
    return render(request, 'hw1.html')
def hw2(request):
    # 今天先不探討什麼是 render，先記得它會去撈 test.html
    return render(request, 'hw2.html')
def hw3(request):
    # 今天先不探討什麼是 render，先記得它會去撈 test.html
    return render(request, 'hw3.html')
def hw5(request):
    # 今天先不探討什麼是 render，先記得它會去撈 test.html
    return render(request, 'hw5.html')