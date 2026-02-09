from rest_framework import serializers
from .models import Student
from apps.users.serializers import UserSerializer

class StudentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Student
        fields = [
            "id",
            "user",
            "admission_number",
            "first_name",
            "middle_name",
            "last_name",
            "school_section",
            "grade_level",
        ]
