from django.db import models
from apps.users.models import User

class Staff(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    school_section = models.CharField(max_length=50)  # Section they teach
    subjects_combination = models.CharField(max_length=200)  # E.g., Math, Physics

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
