from django.contrib import admin
from .models import Finance

@admin.register(Finance)
class FinanceAdmin(admin.ModelAdmin):
    list_display = ["first_name", "last_name", "department"]
