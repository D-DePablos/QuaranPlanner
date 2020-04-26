# Create your models here.
from django.utils import timezone
from django.db import models
from datetime import timedelta
from django.contrib.auth.models import AbstractUser


class Event(models.Model):
    # Any constants I want to use
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    description = models.TextField()
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    url = models.TextField()
    platform = models.TextField()  # Instagram, Youtube, ...
    host = models.TextField()  # Company or individual (if required)

    event_start = models.DateTimeField(blank=True, null=True, default=None)
    event_end = models.DateTimeField(blank=True, null=True, default=None)

    photo = models.ImageField(blank=True, null=True, default=None, upload_to='event_pictures')

    pub_date = models.DateTimeField(default=timezone.now())

    def is_on(self):
        now = timezone.now()
        if self.event_start:
            if self.event_end:
                return self.event_start <= now <= self.event_end
            return self.event_start <= now
        return False

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - timedelta(days=1)

    def __str__(self):
        return self.name

    def __repr__(self):
        return f'<Event object ({self.id}) "{self.name}">'


