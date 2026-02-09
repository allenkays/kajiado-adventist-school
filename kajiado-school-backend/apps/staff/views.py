from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Staff
from .serializers import StaffSerializer
from apps.users.permissions import IsStaff

# ✅ Staff profile
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsStaff])
def staff_profile(request):
    staff = getattr(request.user, 'staff', None)
    if not staff:
        return Response({"detail": "Staff profile not found"}, status=404)

    return Response({
        "username": request.user.username,
        "first_name": staff.first_name,
        "middle_name": getattr(staff, 'middle_name', ''),
        "last_name": staff.last_name,
        "school_section": staff.school_section,
        "subjects": getattr(staff, 'subjects', []),
    })


# ✅ Staff dashboard
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsStaff])
def staff_dashboard(request):
    staff = getattr(request.user, 'staff', None)
    if not staff:
        return Response({"detail": "Staff profile not found"}, status=404)

    return Response({
        "message": f"Welcome {staff.first_name}!",
        "section": staff.school_section,
        "subjects": getattr(staff, 'subjects', []),
        # Add additional dashboard info like assigned students, pending tasks, etc.
    })


# ✅ Staff CRUD for admins
class StaffViewSet(viewsets.ModelViewSet):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer
    permission_classes = [IsAuthenticated]  # Add stricter permissions if needed
