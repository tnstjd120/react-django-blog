from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import PostList, PostDetail

urlpatterns = [
    path('post', PostList.as_view()),
    path('post/<int:pk>', PostDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)