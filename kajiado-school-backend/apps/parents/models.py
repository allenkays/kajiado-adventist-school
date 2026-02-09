from django.db import models
from apps.users.models import User
from apps.students.models import Student

class Parent(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=20)
    email_address = models.CharField(max_length=50)
    student = models.ForeignKey(Student, on_delete=models.CASCADE, related_name="parents")

    def __str__(self):
        return f"{self.first_name} {self.last_name} (Parent of {self.student})"
