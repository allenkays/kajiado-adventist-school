from django.contrib import admin
from .models import Parent

@admin.register(Parent)
class ParentAdmin(admin.ModelAdmin):
    list_display = ["first_name", "last_name", "email_address","phone_number", "student"]
