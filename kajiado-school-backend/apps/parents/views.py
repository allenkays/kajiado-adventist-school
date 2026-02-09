from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Parent
from .serializers import ParentSerializer
from apps.users.permissions import IsParent

# ✅ Parent profile (logged-in parent only)
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsParent])
def parent_profile(request):
    parent = getattr(request.user, 'parent', None)
    if not parent:
        return Response({"detail": "Parent profile not found"}, status=404)

    student = getattr(parent, 'student', None)
    student_name = f"{student.first_name} {student.last_name}" if student else "N/A"

    return Response({
        "username": request.user.username,
        "first_name": parent.first_name,
        "middle_name": getattr(parent, 'middle_name', ''),
        "last_name": parent.last_name,
        "student": student_name
    })


# ✅ Parent dashboard (can include more info)
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsParent])
def parent_dashboard(request):
    parent = getattr(request.user, 'parent', None)
    if not parent:
        return Response({"detail": "Parent profile not found"}, status=404)

    student = getattr(parent, 'student', None)
    return Response({
        "message": f"Welcome {parent.first_name}!",
        "student": f"{student.first_name} {student.last_name}" if student else "N/A",
        # Add more dashboard info as needed
    })


# ✅ CRUD for admins/staff
class ParentViewSet(viewsets.ModelViewSet):
    queryset = Parent.objects.all()
    serializer_class = ParentSerializer
    permission_classes = [IsAuthenticated]  # Add stricter permissions if needed
