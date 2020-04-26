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

    # Platform and Category choices
    INSTAGRAM = 'Instagram'
    YOUTUBE = 'Youtube'
    FACEBOOK = 'Facebook'
    NA = 'Other'

    PLATFORM_CHOICES = [
        (INSTAGRAM, 'Instagram'),
        (YOUTUBE, 'Youtube'),
        (FACEBOOK, 'Facebook'),
        (NA, 'Other')
    ]
    CULTURE = 'Culture'
    BEAUTY = 'Beauty'
    TECHNOLOGY = 'Technology'
    CRAFTS = 'Crafts'
    MUSIC = 'Music'
    QUIZ = 'Quiz'
    OTHER = 'Other'

    CATEGORY_CHOICES = [
        (CULTURE, 'Culture'),
        (BEAUTY, 'Beauty'),
        (TECHNOLOGY, 'Technology'),
        (CRAFTS, 'Crafts'),
        (MUSIC, 'Music'),
        (QUIZ, 'Quiz'),
        (OTHER, 'Other'),
    ]
    platform = models.TextField(choices=PLATFORM_CHOICES, default='Other')  # Instagram, Youtube, ...
    category = models.TextField(choices=CATEGORY_CHOICES, default='Other')
    host = models.TextField(default='No declared Host')  # Company or individual (if required)

    event_start = models.DateTimeField(blank=True, null=True, default=timezone.now() - timedelta(days=2))
    event_end = models.DateTimeField(blank=True, null=True, default=timezone.now() + timedelta(days=2))

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
        return f'{self.id}, {self.name}, {self.is_on()}'

    def __repr__(self):
        return f'<Event object ({self.id}) "{self.name}">'


