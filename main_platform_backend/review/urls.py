from django.urls import path, include

from rest_framework.routers import DefaultRouter
from review.views import ListingReviewViewset

router = DefaultRouter()



router.register('listing', ListingReviewViewset)


urlpatterns = [
    path('', include(router.urls)),
]

