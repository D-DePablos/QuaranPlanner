# Create your views here.
from django.contrib.auth.models import Group
from rest_framework import permissions, generics, viewsets
from QuarenPlanner.serializers import UserSerializer, EventSerializer
from QuarenPlanner.models import Event
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class EventViewSet(viewsets.ModelViewSet):
    """
    API endpoint for Events to be viewed or edited.
    TODO: Currently has no authentication!
    """
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    # permission_classes = [permissions.AllowAny]

