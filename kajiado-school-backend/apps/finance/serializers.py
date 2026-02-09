from rest_framework import serializers
from .models import Finance
from apps.users.serializers import UserSerializer

class FinanceSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Finance
        fields = [
            "id",
            "user",
            "first_name",
            "last_name",
            "department",
        ]
