from rest_framework import serializers
from .models import Parent
from apps.users.serializers import UserSerializer
from apps.students.serializers import StudentSerializer

class ParentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    student = StudentSerializer(read_only=True)

    class Meta:
        model = Parent
        fields = [
            "id",
            "user",
            "first_name",
            "last_name",
            "phone_number",
            "student",
        ]
