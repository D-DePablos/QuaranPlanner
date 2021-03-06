"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin, auth
from django.urls import include, path
from rest_framework import routers
from QuarenPlanner import views, api_views


router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'events', views.EventViewSet)

# Use automatic URL routing
urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include(router.urls)),
    path('csrf/', views.csrf),
    path('admin/', admin.site.urls),
    path('likes/', views.upvote),
    path('dislikes/', views.downvote),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('is_on/', api_views.EventList),
]
