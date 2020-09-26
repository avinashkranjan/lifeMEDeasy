from django.http import JsonResponse
def home(request):
    return JsonResponse({'info':'Django Webdev', 'name':"Arnab"})