# Generated by Django 3.0.5 on 2020-04-25 14:52

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('QuarenPlanner', '0005_auto_20200425_1407'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 25, 14, 52, 30, 544521, tzinfo=utc)),
        ),
    ]
