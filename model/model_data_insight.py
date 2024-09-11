from django.db import models


class HealthRisk(models.Model):
    risk = models.CharField(max_length=255)
    year = models.IntegerField()
    value = models.IntegerField()
    percent = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return f"{self.risk} ({self.year})"

    class Meta:
        db_table = 'health_risk'


class FirstVisit(models.Model):
    duration = models.CharField(max_length=255)
    value = models.IntegerField()
    percent = models.DecimalField(max_digits=5, decimal_places=2)
    
    
    def __str__(self):
        return f"{self.duration} ({self.value})"

    class Meta:
        db_table = 'first_visit'


class BirthMethod(models.Model):
    method = models.CharField(max_length=255)
    value = models.IntegerField()
    percent = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'birth_method'



class CReason(models.Model):
    reason = models.CharField(max_length=255)
    value = models.IntegerField()
    percent = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'c_reason'


class PostLength(models.Model):
    method = models.CharField(max_length=255)
    length_of_stay = models.CharField(max_length=255)
    value = models.IntegerField()
    percent = models.DecimalField(max_digits=5, decimal_places=2)


    class Meta:
        db_table = 'post_length'

