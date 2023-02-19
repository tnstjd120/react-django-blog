from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=50, help_text="게시물 제목")
    content = models.TextField(help_text="게시물 내용")
    update_dttm = models.DateTimeField(auto_now=True, help_text="수정 시간")
    create_dttm = models.DateTimeField(auto_now=False, help_text="생성 시간")