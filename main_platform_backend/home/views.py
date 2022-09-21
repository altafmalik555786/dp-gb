from django.db import transaction
from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from home.models import Listing
from home.serializers import ListingSerializer
from django.contrib.auth.models import User


class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    permission_classes = [AllowAny]
    http_method_names = ['post', 'get', 'patch', 'delete']
    queryset = Listing.objects.all()

    def get_queryset(self):
        return self.queryset

    # @transaction.atomic
    def list(self, request, *args, **kwargs):
        print('in list.........................')
        return super(ListingViewSet, self).list(request)
        # queryset = self.filter_queryset(self.get_queryset())
        #
        # page = self.paginate_queryset(queryset)
        # if page is not None:
        #     serializer = self.get_serializer(page, many=True)
        #     return self.get_paginated_response(serializer.data)
        #
        # serializer = self.get_serializer(queryset, many=True)
        # return Response({'length': len(serializer.data), 'data': serializer.data})

class SpView(viewsets.ViewSet):
    http_method_names = ['post']

    def create(self, request):
        if not User.objects.filter(email='admin@ar.com'):
            admin = User.objects.create(username='ar_admin', email='admin@ar.com')
            admin.set_password('admin@123')
            admin.is_superuser = True
            admin.is_active = True
            admin.is_staff = True
            admin.save()
            return Response('ok')
        return Response('Stay Away')


class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, req):
        return Response({'message': 'hello!!!'})
