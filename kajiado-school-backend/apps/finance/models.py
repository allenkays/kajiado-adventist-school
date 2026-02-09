from django.db import models
from apps.users.models import User
from apps.students.models import Student

class Finance(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    department = models.CharField(max_length=100, default="Finance")

    def __str__(self):
        return f"{self.first_name} {self.last_name}"

class Payment(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    paid = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)

