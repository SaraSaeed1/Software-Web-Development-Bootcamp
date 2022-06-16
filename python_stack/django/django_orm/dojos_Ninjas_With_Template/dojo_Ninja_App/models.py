from django.db import models

class Dojos(models.Model):
    name = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state= models.CharField(max_length=2)
    desc=models.TextField(default='old dojo')

    # def __str__(self):
    #     return f"name{self.name} | city {self.city} | state: {self.state} "

class Ninjas(models.Model):
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    dojo_id= models.ForeignKey(Dojos,related_name='dojoNinja', on_delete=models.CASCADE )
