from django.db import models


class PregnancyFoods(models.Model):
    category = models.CharField(max_length=100)
    food_item = models.CharField(max_length=100)
    can_consume = models.CharField(max_length=50)
    reason = models.CharField(max_length=100)
    recommended_limit = models.CharField(max_length=100)
    nutritional_benefit = models.CharField(max_length=100)
    potential_risk = models.CharField(max_length=100)
    classification = models.CharField(max_length=50)


    class Meta:
        db_table = 'pregnancy_foods'