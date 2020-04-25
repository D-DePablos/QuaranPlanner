""" Convert an object into json, xml, others """
from django.contrib.auth.models import User, Group
from QuarenPlanner.models import Event
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'name', 'description', 'likes', 'url',
                  'platform', 'host', 'event_start', 'event_end', 'photo']

    def to_representation(self, instance):
        # Serialize the fields and add extra customized fields to representation
        data = super().to_representation(instance)
        data['is_on'] = instance.is_on()
        data['platform'] = instance.platform
        return data