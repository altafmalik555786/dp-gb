from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from rest_framework import status
from review.serializers import ListingReviewSerializer, UserReviewSerializer

from home.models import Listing, DetailUpdateSituation
from review.models import ListingReview

User = get_user_model()


class ListingSerializer(serializers.ModelSerializer):
    reviews = ListingReviewSerializer(many=True, read_only=True)
    # reviews = serializers.SerializerMethodField(method_name='get_reviewsss')

    # def get_reviewsss(self, listing):
    #     user = self.context['request'].user
    #     print(self)
    #     reviews = ListingReview.objects.filter(listing=listing)
    #     return reviews
    class Meta:
        model = Listing
        fields = '__all__'


class DetailUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailUpdateSituation
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):

    reviews = UserReviewSerializer(many=True, read_only=True)

    def validate(self, attrs):
        password = attrs.get('password')
        if not password:
            raise ValidationError(detail={
                'detail': 'No password provided',
                'message': 'Invalid password',
            }, code=status.HTTP_400_BAD_REQUEST)
        validated_data = dict(attrs.copy())
        validated_data.update({
            'is_active': True,
            'password': make_password(password),
        })
        return validated_data

    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {
            'password': {'write_only': True},
            'is_active': {'write_only': True},
            'last_login': {'write_only': True},
            'is_superuser': {'write_only': True},
            'is_staff': {'write_only': True},
            'groups': {'write_only': True},
            'user_permissions': {'write_only': True},
        }
