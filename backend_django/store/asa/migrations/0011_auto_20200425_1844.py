# Generated by Django 3.0.5 on 2020-04-25 18:44

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('QuarenPlanner', '0010_auto_20200425_1719'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 25, 18, 44, 14, 411315, tzinfo=utc)),
        ),
    ]
