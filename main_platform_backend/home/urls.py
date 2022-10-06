from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from home.views import ListingViewSet, ProtectedView, SignUpV, UserDetails, DetailUpdateViewset
from review import urls as review_urls


router = DefaultRouter()
router.register('listing', ListingViewSet, basename='listing')
router.register('details', DetailUpdateViewset, basename='detail_update_situation')
# router.register('sp', SpView, basename='sp')

urlpatterns = [
    path('home/', include(router.urls)),
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('signin-refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('test-signin/', ProtectedView.as_view(), name='test_signin'),
    path('reviews/', include(review_urls)),
    path('signup/', SignUpV.as_view(), name='signin'),
    path('user/<str:user_id>/', UserDetails.as_view(), name='user_details')
]
