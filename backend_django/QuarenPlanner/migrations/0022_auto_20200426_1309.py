# Generated by Django 3.0.5 on 2020-04-26 12:09

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('QuarenPlanner', '0021_auto_20200426_1303'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 26, 12, 9, 50, 533180, tzinfo=utc)),
        ),
    ]