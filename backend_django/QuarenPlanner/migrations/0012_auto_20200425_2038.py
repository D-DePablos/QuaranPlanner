# Generated by Django 3.0.5 on 2020-04-25 19:38

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('QuarenPlanner', '0011_auto_20200425_1844'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='dislikes',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 25, 19, 38, 36, 407015, tzinfo=utc)),
        ),
    ]
