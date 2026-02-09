from rest_framework import serializers
from .models import Staff
from apps.users.serializers import UserSerializer

class StaffSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Staff
        fields = [
            "id",
            "user",
            "first_name",
            "last_name",
            "school_section",
            "subjects_combination",
        ]
