from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet, student_profile, student_dashboard

router = DefaultRouter()
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('profile/', student_profile, name='student-profile'),
    path('dashboard/', student_dashboard, name='student-dashboard'),
    path('', include(router.urls)),
]
