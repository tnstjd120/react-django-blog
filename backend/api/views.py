from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

from .serializer import PostSerializer
from .models import Post

class PostList(APIView): # 게시물 리스트 불러오기
    def get(self, request):
        posts = Post.objects.all().order_by('-create_dttm')[:20] # 게시물 전체를 불러온 후 생성된 날짜의 역순으로 최대 20개 까지만 불러온다.
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

class PostDetail(APIView): # 게시물 디테일 불러오기
    def get_object(self, pk):
        try:
            return Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        post = self.get_object(pk)
        serializer = PostSerializer(post)
        return Response(serializer.data)