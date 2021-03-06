# Generated by Django 4.0 on 2021-12-20 21:30

import ckeditor_uploader.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matthewsportfolio', '0016_alter_person_about_alter_person_description_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='person',
            name='profile_picture',
            field=models.ImageField(default='static/images/preload/profile.png', null=True, upload_to=''),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=ckeditor_uploader.fields.RichTextUploadingField(blank=True, null=True),
        ),
    ]
