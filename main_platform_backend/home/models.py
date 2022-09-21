import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


class Listing(models.Model):
    title = models.CharField(max_length=100)
    business_type = models.CharField(max_length=100, null=True, blank=True)
    icon = models.ImageField(upload_to='listing/icon/', null=True, blank=True)
    image = models.ImageField(upload_to='listing/image/', null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    status = models.BooleanField(default=True)
    rating = models.CharField(max_length=100, null=True, blank=True)
    pricing = models.CharField(max_length=100, null=True, blank=True)
    web = models.URLField(max_length=250, null=True, blank=True)
    created = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.username
