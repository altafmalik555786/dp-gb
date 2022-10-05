from django.contrib.auth import get_user_model
from rest_framework import serializers
from review.models import UserReview, ListingReview

User = get_user_model()


class ListingReviewSerializer(serializers.ModelSerializer):

    def validate(self, attrs):
        user = self.context['request'].user
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

    class Meta:
        model = UserReview
        fields = '__all__'
