""" Convert an object into json, xml, others """
from django.contrib.auth.models import User
from .models import Event
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        write_only_fields = ('password',)
        read_only_fields = ('id',)
        fields = ['id', 'username', 'email', 'password']

    def create(self, validated_data):
        user = super(UserSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.email = validated_data['email']
        user.save()
        return user


class EventSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'name', 'description', 'likes', 'dislikes', 'url',
                  'platform', 'host', 'event_start', 'event_end', 'photo', 'pub_date']

    def to_representation(self, instance):
        # Serialize the fields and add extra customized fields to representation
        data = super().to_representation(instance)
        data['is_on'] = instance.is_on()
        data['platform'] = instance.platform

        return data
