from django.contrib.auth import get_user_model
from django.db import transaction
from rest_framework import viewsets, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.exceptions import ValidationError

from crud_task_fk.common.validations import is_valid_uuid
from home.models import Listing, DetailUpdateSituation
from home.serializers import ListingSerializer, UserSerializer, DetailUpdateSerializer

User = get_user_model()


class ListingViewSet(viewsets.ModelViewSet):
    serializer_class = ListingSerializer
    permission_classes = [AllowAny]
    http_method_names = ['post', 'get', 'patch', 'delete']
    queryset = Listing.objects.all()

    # def get_queryset(self):
    #     return self.queryset

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

# class SpView(viewsets.ViewSet):
#     http_method_names = ['post']
#
#     def create(self, request):
#         if not User.objects.filter(email='admin@ar.com'):
#             admin = User.objects.create(username='ar_admin', email='admin@ar.com')
#             admin.set_password('admin@123')
#             admin.is_superuser = True
#             admin.is_active = True
#             admin.is_staff = True
#             admin.save()
#             return Response('ok')
#         return Response('Stay Away')


class DetailUpdateViewset(viewsets.ModelViewSet):
    serializer_class = DetailUpdateSerializer
    permission_classes = [AllowAny]
    # http_method_names = ['post', 'get', 'patch', 'delete']
    queryset = DetailUpdateSituation.objects.all()

    def create(self, request, *args, **kwargs):
        serializer = DetailUpdateSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            listing_obj = Listing.objects.get(id=request.data.get('listing', None))
            listing_obj.updated_detail = request.data.get('current_updates', None)
            listing_obj.save()
            return Response({"msg":"created successfully"}, status=status.HTTP_200_OK)
        return Response({"error":serializer.errors}, status=status.HTTP_400_BAD_REQUEST)



class SignUpV(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class UserDetails(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, user_id):
        user_id = is_valid_uuid(user_id)
        if user_id is None:
            raise ValidationError(detail={
                'details': 'Invalid UUID'
            }, code=status.HTTP_400_BAD_REQUEST)

        if not request.user.type == User.OWNER:
            raise ValidationError(detail={
                'details': 'Only owner can get user details',
                'error': 'invalid user type',
            }, code=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.get(id=user_id)
        except User.DoesNotExist:
            user = None

        if user is None:
            raise ValidationError(detail={
                'details': 'User does not exist'
            }, code=status.HTTP_400_BAD_REQUEST)

        serializer = UserSerializer(user)
        # serializer.data
        user_details = serializer.data
        return Response(data=user_details, status=status.HTTP_200_OK)


class ProtectedView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, req):
        return Response({'message': 'hello!!!'})
