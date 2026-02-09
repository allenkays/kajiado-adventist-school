from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Define roles
    ROLE_CHOICES = [
        ("student", "Student"),
        ("staff", "Staff"),
        ("parent", "Parent"),
        ("finance", "Finance"),
        ("admin", "Admin"),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    
    # Optional: link to additional info if needed
    def is_student(self):
        return self.role == "student"

    def is_staff_member(self):
        return self.role == "staff"

    def is_parent(self):
        return self.role == "parent"

    def is_finance(self):
        return self.role == "finance"
