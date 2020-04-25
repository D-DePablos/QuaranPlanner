"""Functions to be utilised within manage.py shell"""
from QuarenPlanner.models import Event
import datetime


def delete_all(model):
    model.objects.all().delete()


def create_example_event():
    """
    Create an example event with id of 0 in database
    """
    event = Event()
    event.id = 0
    event.name = 'Example Event'
    event.description = 'This is a description'
    event.likes = 20
    event.url = "exampleurl.com"
    event.platform = 'Instagram'
    event.host = 'Host Person'

    event.event_start = datetime.datetime(2020,2,21,tzinfo=datetime.timezone.utc)
    event.event_end = datetime.datetime(2020,5,21,tzinfo=datetime.timezone.utc)

    event.photo = '/home/ddp/PycharmProjects/Quaranplanner/backend_django/event_pictures/Fiestuqui.jpeg'

    event.save()

    print(Event.objects.all())


def create_superuser():
    """
    Creates a superuser with username admin, password admin
    """
    from django.contrib.auth.models import User

    user = User.objects.create_user('admin', password='admin')
    user.is_superuser = True
    user.is_staff = True
    user.save()

# {
# 	"username": "patatitomanager",
# 	"password": "geniousKID",
# 	"email": "Iamtheeggman@gmail.com"
# }