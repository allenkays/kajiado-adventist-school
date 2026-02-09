from rest_framework.permissions import BasePermission

class IsStudent(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == "student")

class IsParent(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == "parent")

class IsStaff(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == "staff")

class IsFinance(BasePermission):
    def has_permission(self, request, view):
        return bool(request.user and request.user.role == "finance")
