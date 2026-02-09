from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StaffViewSet, staff_profile, staff_dashboard

router = DefaultRouter()
router.register(r'staff', StaffViewSet)

urlpatterns = [
    path('profile/', staff_profile, name='staff-profile'),
    path('dashboard/', staff_dashboard, name='staff-dashboard'),
    path('', include(router.urls)),
]
