# Generated by Django 3.0.5 on 2020-04-26 14:19

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('QuarenPlanner', '0030_auto_20200426_1508'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='event_end',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 4, 28, 14, 19, 5, 599182, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_start',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 4, 24, 14, 19, 5, 599158, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 26, 14, 19, 5, 599211, tzinfo=utc)),
        ),
    ]
