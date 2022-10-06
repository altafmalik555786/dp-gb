import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models

from crud_task_fk.common.models import BaseTimeStampModel


class Listing(BaseTimeStampModel):
    title = models.CharField(max_length=100)
    business_type = models.CharField(max_length=100, null=True, blank=True)
    icon = models.ImageField(upload_to='listing/icon/', null=True, blank=True)
    image = models.ImageField(upload_to='listing/image/', null=True, blank=True)
    address = models.CharField(max_length=100, null=True, blank=True)
    status = models.BooleanField(default=True)
    rating = models.CharField(max_length=100, null=True, blank=True)
    pricing = models.CharField(max_length=100, null=True, blank=True)
    web = models.URLField(max_length=250, null=True, blank=True)
    updated_detail = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.title


class DetailUpdateSituation(models.Model):
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name="listing")
    current_updates = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.listing.title


class User(AbstractUser):
    COMMON = 'COMMON'
    OWNER = 'OWNER'

    USER_TYPES = (
        (COMMON, 'Common'),
        (OWNER, 'Owner'),
    )

    id = models.UUIDField(primary_key=True, editable=False, default=uuid.uuid4)
    email = models.EmailField(unique=True)
    type = models.CharField(choices=USER_TYPES, default=COMMON, max_length=20)

    def __str__(self):
        return self.username
