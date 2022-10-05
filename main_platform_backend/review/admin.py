from django.contrib import admin
from review.models import UserReview, ListingReview


admin.site.register(UserReview)
admin.site.register(ListingReview)
