from django.db import models

class Book(models.Model):
    name = models.CharField("Name", max_length=255)
    author = models.CharField("Author", max_length=255)
    pages= models.IntegerField()
    publisher =  models.CharField("Publisher", max_length=255)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name
