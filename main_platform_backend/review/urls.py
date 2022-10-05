from django.urls import path, include

from rest_framework.routers import DefaultRouter
from review.views import ListingReviewViewset, UserReviewViewset

router = DefaultRouter()



router.register('listing', ListingReviewViewset)
router.register('user', UserReviewViewset)


urlpatterns = [
    path('', include(router.urls)),
]

