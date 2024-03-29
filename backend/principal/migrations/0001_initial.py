# Generated by Django 4.2.7 on 2023-11-09 06:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TeachersModel',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=100)),
                ('experience', models.CharField(max_length=10)),
                ('image', models.ImageField(upload_to='Teacher')),
            ],
        ),
    ]
