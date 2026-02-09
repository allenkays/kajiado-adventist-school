from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Finance
from .serializers import FinanceSerializer
from apps.users.permissions import IsFinance

# ✅ Finance profile
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsFinance])
def finance_profile(request):
    finance = getattr(request.user, 'finance', None)
    if not finance:
        return Response({"detail": "Finance profile not found"}, status=404)

    return Response({
        "username": request.user.username,
        "first_name": finance.first_name,
        "middle_name": getattr(finance, 'middle_name', ''),
        "last_name": finance.last_name,
        "department": getattr(finance, 'department', 'Finance'),
    })


# ✅ Finance dashboard
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsFinance])
def finance_dashboard(request):
    finance = getattr(request.user, 'finance', None)
    if not finance:
        return Response({"detail": "Finance profile not found"}, status=404)

    return Response({
        "message": f"Welcome {finance.first_name}!",
        "department": getattr(finance, 'department', 'Finance'),
        # Add additional dashboard info like transactions summary, fee collection stats, etc.
    })


# ✅ Finance CRUD for admins
class FinanceViewSet(viewsets.ModelViewSet):
    queryset = Finance.objects.all()
    serializer_class = FinanceSerializer
    permission_classes = [IsAuthenticated]  # Add stricter permissions if needed
