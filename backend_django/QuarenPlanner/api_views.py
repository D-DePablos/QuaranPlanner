from rest_framework.generics import ListAPIView
from rest_framework.filters import SearchFilter
from .serializers import EventSerializer
from .models import Event

class EventList(ListAPIView):
    queryset = Event.objects.all()
    print(queryset)
    serializer_class = EventSerializer
    filter_backends = (SearchFilter)
    filter_fields = ('id',)
    search_fields = ('name', 'description')
