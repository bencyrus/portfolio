# Generated by Django 4.0 on 2021-12-13 08:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matthewsportfolio', '0007_person_about'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='more_about',
            field=models.CharField(blank=True, default='Lorem ipsum, dolor sit amet consectetur adipisicing elit.         Officiis porro itaque ipsum distinctio, inventore consequuntur nisi quis tenetur blanditiis illum quod voluptates.        Sit odit dolorum aperiam, deserunt veniam quia aut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti         alias, exercitationem atque obcaecati accusantium necessitatibus impedit delectus sequi?', max_length=2000, null=True),
        ),
    ]
