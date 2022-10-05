from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework.exceptions import ValidationError
from rest_framework import status, response
from rest_framework.viewsets import GenericViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from crud_task_fk.common.validations import is_valid_uuid
from review.serializers import ListingReviewSerializer
from review.models import ListingReview


class ListingReviewViewset(mixins.CreateModelMixin,
                           mixins.DestroyModelMixin,
                           GenericViewSet):

    serializer_class = ListingReviewSerializer
    permission_classes = [IsAuthenticated]
    queryset = ListingReview.objects.all()

    def validate_payload(self, data):
        listing = is_valid_uuid(data.get('listing', None))
        if not listing:
            raise ValidationError(detail={
                'ref': 'INVALID_UUID',
                'message': 'Invalid uuid for Listing',
            }, code=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        data = request.data.copy()
        data.update({'user': request.user.id})
        serializer = self.get_serializer(data=data, context={'request': self.request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        if not instance.user == request.user:
            return Response(data={
                'details': 'Cannot delete someone else review'
            }, status=status.HTTP_401_UNAUTHORIZED)
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)
