from django.contrib import admin
from .models import Staff

@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ["first_name", "last_name", "school_section", "subjects_combination"]
