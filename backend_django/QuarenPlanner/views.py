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
from rest_framework.pagination import PageNumberPagination

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = (AllowAny,)

    filter_backends = (SearchFilter,)
    search_fields = ('username')

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
    search_fields =('category',)

    def get_queryset(self):
        """
        Define new queryset that makes use of is_on to detect ongoing events
        """
        on_sale = self.request.query_params.get('is_on', None)

        if on_sale is None:
            return super().get_queryset()
        queryset = Event.objects.all()
        if on_sale.lower() == 'true':
            from django.utils import timezone
            now = timezone.now()
            return queryset.filter(
                event_start__lte=now,
                event_end__gte=now,
            )
        return queryset


def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})


@require_http_methods(["GET"])
def index(request):
    return HttpResponse("Hello, world. You are at index through a GET request. "
                        "Please use localhost:PORT/api/ to your content")

@require_http_methods(["GET","POST"])
def upvote(request, id=None):
    # Change the upvote value of the item

    import re
    print(f' Found ID {str(request.body)}')
    try:
        found_id = int(re.findall(r'\d+', str(request.body))[0])

    except IndexError:
        raise IndexError(f"Your body {str(request.body)} does not contain a number")

    print(f'Using index {found_id}')

    if found_id or found_id == 0:
        id = found_id
    else:
        return HttpResponse(f"Not found event ID on body: {str(request.body)}")
        raise Exception("Event not found in body")


    if id or id == 0:
        event = Event.objects.get(id=id)
        context = {
            'event': event,
            'like_amount': Event.likes
        }
        event.likes = event.likes + 1
        event.save()

        return HttpResponse("Added your upvote", context)

    else:
        return HttpResponse(f"Event id does not exist")
        raise Exception("Need id header in body of GET request")


#@require_http_methods(["POST"])
def downvote(request, id=None):
    # Change the upvote value of the item

    import re
    print(f' Found ID {str(request.body)}')
    try:
        found_id = int(re.findall(r'\d+', str(request.body))[0])

    except IndexError:
        raise IndexError(f"Your body {str(request.body)} does not contain a number")

    print(f'Using index {found_id}')

    if found_id or found_id == 0:
        id = found_id
    else:
        return HttpResponse(f"Not found event ID on body: {str(request.body)}")
        raise Exception("Event not found in body")

    if id or id == 0:

        event = Event.objects.get(id=id)
        context = {
            'event': event,
            'dislike_amount': Event.dislikes
        }
        event.dislikes = event.dislikes + 1
        event.save()

        return HttpResponse("Added your downvote", context)

    else:
        return HttpResponse(f"Event id does not exist")
        raise Exception("Need id header in body of GET request")

