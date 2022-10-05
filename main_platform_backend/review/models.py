from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from crud_task_fk.common.models import BaseTimeStampModel

from home.models import User, Listing


class BaseReview(BaseTimeStampModel):

    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500, null=True, blank=True)
    rating = models.IntegerField(
        default=1,
        validators=[
            MinValueValidator(1),
            MaxValueValidator(5),
        ],
    )

    def __str__(self):
        return self.title

    class Meta:
        abstract = True


class UserReview(BaseReview):
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class ListingReview(BaseReview):
    listing = models.ForeignKey(Listing, on_delete=models.CASCADE, related_name='reviews')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='users')

    def __str__(self):
        return f"{self.listing} - {self.title} - {self.rating}"
