# Generated by Django 3.0.5 on 2020-04-26 11:27

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('QuarenPlanner', '0018_auto_20200426_1134'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='platform',
            field=models.TextField(choices=[('IG', 'Instagram'), ('YT', 'Youtube'), ('FB', 'Facebook'), ('NA', 'Other')], default='Other'),
        ),
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 26, 11, 27, 46, 501221, tzinfo=utc)),
        ),
    ]
