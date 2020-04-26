# Generated by Django 3.0.5 on 2020-04-26 13:42

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('QuarenPlanner', '0027_auto_20200426_1436'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='category',
            field=models.TextField(choices=[('Culture', 'Culture'), ('Beauty', 'Beauty'), ('Technology', 'Technology'), ('Crafts', 'Crafts'), ('Music', 'Music'), ('Quiz', 'Quiz'), ('Other', 'Other')], default='Other'),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_end',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 4, 28, 13, 42, 49, 424125, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='event_start',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 4, 24, 13, 42, 49, 424104, tzinfo=utc), null=True),
        ),
        migrations.AlterField(
            model_name='event',
            name='host',
            field=models.TextField(default='No declared Host'),
        ),
        migrations.AlterField(
            model_name='event',
            name='platform',
            field=models.TextField(choices=[('Instagram', 'Instagram'), ('Youtube', 'Youtube'), ('Facebook', 'Facebook'), ('Other', 'Other')], default='Other'),
        ),
        migrations.AlterField(
            model_name='event',
            name='pub_date',
            field=models.DateTimeField(default=datetime.datetime(2020, 4, 26, 13, 42, 49, 424155, tzinfo=utc)),
        ),
    ]
