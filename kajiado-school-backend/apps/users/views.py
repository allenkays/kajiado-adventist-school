from django.contrib.auth import authenticate, login, logout
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import UserSerializer, MyTokenObtainPairSerializer


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer



class LoginView(APIView):
    permission_classes = [AllowAny]  # 🔥 THIS IS THE KEY FIX

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(username=username, password=password)

        if not user:
            return Response(
                {"error": "Invalid credentials"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        refresh = RefreshToken.for_user(user)

        response = Response({
            "access_token": str(refresh.access_token),
            "refresh_token": str(refresh),
            "role": user.role,  # student | parent | staff | finance
            "user": {
                "id": user.id,
                "username": user.username,
            }
        })

        # # ✅ HttpOnly JWT cookies
        # response.set_cookie(
        #     key="access_token",
        #     value=str(refresh.access_token),
        #     httponly=True,
        #     secure=False,   # set True in production
        #     samesite="Lax",
        #     path="/",
        # )

        # response.set_cookie(
        #     key="refresh_token",
        #     value=str(refresh),
        #     httponly=True,
        #     secure=False,
        #     samesite="Lax",
        #     path="/",
        # )

        # response.set_cookie(
        #     key="role",
        #     value=user.role,
        #     httponly=False,  # frontend can read
        #     secure=False,
        #     samesite="Lax",
        #     path="/",
        # )

        return response

class LogoutView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        response = Response({"message": "Logged out successfully"})
        response.delete_cookie("access_token")
        response.delete_cookie("refresh_token")
        response.delete_cookie("role")
        return response
