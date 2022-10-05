from django.contrib.auth import get_user_model
from rest_framework import serializers, status
from rest_framework.exceptions import ValidationError
from review.models import UserReview, ListingReview

User = get_user_model()


class ListingReviewSerializer(serializers.ModelSerializer):

    def validate(self, attrs):
        user = self.context['request'].user
        if not user.type == user.COMMON:
            raise ValidationError(detail={
                'details': 'Only common user can add reviews to listing',
                'error': f'{user.type} User detected'
            }, code=status.HTTP_400_BAD_REQUEST)
        listing = attrs['listing']
        model = self.Meta.model
        try:
            review = model.objects.get(user=user, listing=listing)
            self.instance = review
        except model.DoesNotExist: pass
        attrs = super().validate(attrs=attrs)
        return attrs

    class Meta:
        model = ListingReview
        fields = '__all__'


class UserReviewSerializer(serializers.ModelSerializer):

    def validate(self, attrs):
        user = attrs['user']
        req_user = self.context['request'].user
        if not req_user.type == User.OWNER:
            raise ValidationError(detail={
                'details': 'Only owner can add reviews to listing',
                'error': f'{user.type} User detected'
            }, code=status.HTTP_400_BAD_REQUEST)
        owner = attrs['owner']
        model = self.Meta.model
        try:
            review = model.objects.get(user=user, owner=owner)
            self.instance = review
        except model.DoesNotExist: pass
        attrs = super().validate(attrs=attrs)
        return attrs


    class Meta:
        model = UserReview
        fields = '__all__'
