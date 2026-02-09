from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import Student
from .serializers import StudentSerializer
from apps.users.permissions import IsStudent

# ✅ Student profile view (only accessible by the logged-in student)
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsStudent])
def student_profile(request):
    # Assuming a OneToOneField from User -> Student
    student = request.user.student
    return Response({
        "username": request.user.username,
        "first_name": student.first_name,
        "middle_name": student.middle_name,
        "last_name": student.last_name,
        "grade": student.grade_level,
        "section": student.school_section,
    })


# ✅ Student dashboard (example, can include more data)
@api_view(['GET'])
@permission_classes([IsAuthenticated, IsStudent])
def student_dashboard(request):
    student = request.user.student
    # Return summary data for dashboard
    return Response({
        "message": f"Welcome {student.first_name}!",
        "grade": student.grade_level,
        "section": student.school_section,
        # Add more relevant dashboard info here
    })


# ✅ Generic CRUD viewset for admins/staff
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    permission_classes = [IsAuthenticated]  # Restrict to staff/admin in frontend or via custom permission
