# Generated by Django 3.0.5 on 2020-04-26 09:47

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('QuarenPlanner', '0015_auto_20200426_1019'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='category',
            field=models.TextField(default='Default'),
        ),
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 26, 9, 47, 42, 883615, tzinfo=utc)),
        ),
    ]
