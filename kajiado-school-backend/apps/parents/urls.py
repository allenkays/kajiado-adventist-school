from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ParentViewSet, parent_profile

router = DefaultRouter()
router.register(r'parents', ParentViewSet)

urlpatterns = [
    path('profile/', parent_profile, name='parent-profile'),
    path('', include(router.urls)),
]
