from django.contrib import admin
from .models import Student

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = ["admission_number", "first_name", "last_name", "school_section", "grade_level"]
    search_fields = ["first_name", "last_name", "admission_number"]
