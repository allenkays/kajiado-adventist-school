"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/6.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from apps.students.views import StudentViewSet, student_profile, student_dashboard
from apps.staff.views import StaffViewSet, staff_profile, staff_dashboard
from apps.parents.views import ParentViewSet, parent_profile
from apps.finance.views import FinanceViewSet, finance_profile
from apps.users.views import LoginView, LogoutView

router = routers.DefaultRouter()
router.register(r"students", StudentViewSet)
router.register(r"staff", StaffViewSet)
router.register(r"parents", ParentViewSet)
router.register(r"finance", FinanceViewSet)

urlpatterns = [
    path("admin/", admin.site.urls),

    # Auth
    path("api/login/", LoginView.as_view(), name="api-login"),
    path("api/logout/", LogoutView.as_view(), name="api-logout"),
    path("api/token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),

    # CRUD APIs
    path("api/", include(router.urls)),

    # Portal-specific endpoints
    path("api/students/profile/", student_profile, name="student-profile"),
    path("api/students/dashboard/", student_dashboard, name="student-dashboard"),
    path("api/staff/profile/", staff_profile, name="staff-profile"),
    path("api/staff/dashboard/", staff_dashboard, name="staff-dashboard"),
    path("api/parents/profile/", parent_profile, name="parent-profile"),
    path("api/finance/profile/", finance_profile, name="finance-profile"),
]
