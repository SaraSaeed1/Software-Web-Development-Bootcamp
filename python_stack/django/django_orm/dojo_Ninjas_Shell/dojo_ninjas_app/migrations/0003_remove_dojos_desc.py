# Generated by Django 4.0.5 on 2022-06-15 13:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('dojo_ninjas_app', '0002_dojos_desc'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dojos',
            name='desc',
        ),
    ]