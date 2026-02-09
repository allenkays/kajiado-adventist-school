from django.urls import path
from . import views

urlpatterns = [
    # Placeholder – will add views later
]
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FinanceViewSet, finance_profile, finance_dashboard

router = DefaultRouter()
router.register(r'finance', FinanceViewSet)

urlpatterns = [
    path('profile/', finance_profile, name='finance-profile'),
    path('dashboard/', finance_dashboard, name='finance-dashboard'),
    path('', include(router.urls)),
]
