# Create your views here.
from django.contrib.auth import authenticate
from rest_framework import permissions, generics, viewsets
from .serializers import UserSerializer, EventSerializer
from .models import Event
from django.contrib.auth.models import User
from rest_framework.filters import SearchFilter
from django.http import HttpResponse, JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.http import require_http_methods
from django.shortcuts import get_object_or_404, render


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = (AllowAny,)

    filter_backends = (SearchFilter,)
    search_fields = ('username', )


class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint for Events to be viewed or edited.
    TODO: Currently has no authentication!
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # permission_classes = [permissions.AllowAny]

    # Searching functionality
    filter_backends = (SearchFilter,)
    search_fields =('name', 'description', 'platform')


def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})


def ping(request):
    return JsonResponse({'result': 'OK'})


@require_http_methods(["GET"])
def index(request):
    return HttpResponse("Hello, world. You are at index through a GET request. "
                        "Please use localhost:PORT/api/ to your content")

@require_http_methods(["GET", "POST"])
def upvote(request, id=None):
    # Change the upvote value of the item

    print(request.body.find(id))
    if not id:
        raise Exception("Need id header in body of GET request")
    event = Event.objects.get(id=id)
    print(event)
    context = {
        'event': event,
        'like_amount': Event.likes
    }

    event.likes = event.likes +1
    event.save()

    return HttpResponse("Added your upvote!")
# # @require_http_methods(["POST", "GET"])
# # def authenticator(request, username, password):
# #
# #     user = authenticate(username=username, password=password)
# #
# #     if user is not None:
# #         return HttpResponse("Successful authentication")
# #     else:
# #         return HttpResponse("Forbidden. Bad username / password")
# #

