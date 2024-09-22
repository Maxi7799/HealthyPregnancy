from django.db import models


class Age(models.Model):
    age = models.CharField(max_length=255)
    odds = models.FloatField()

    class Meta:
        db_table = 'age'


class CountryOfBirth(models.Model):
    country = models.CharField(max_length=255)
    odds = models.FloatField()
    major_groups = models.CharField(max_length=50)

    class Meta:
        db_table = 'country_of_birth'


class Education(models.Model):
    education_attainment = models.CharField(max_length=255)
    odds = models.FloatField()

    class Meta:
        db_table = 'education'


class Employment(models.Model):
    employment = models.CharField(max_length=255)
    odds = models.FloatField()

    class Meta:
        db_table = 'employment'


class Income(models.Model):
    tt_household_income = models.CharField(max_length=255)
    odds = models.FloatField()

    class Meta:
        db_table = 'income'


class MaritalStatus(models.Model):
    marital_status = models.CharField(max_length=255)
    odds = models.FloatField()

    class Meta:
        db_table = 'marital_status'


class RegionCase(models.Model):
    major_groups = models.CharField(max_length=255)
    number = models.IntegerField()
    per_cent = models.FloatField()

    class Meta:
        db_table = 'region_case'


class Remoteness(models.Model):
    remoteness = models.CharField(max_length=255)
    odds = models.FloatField()

    class Meta:
        db_table = 'remoteness'


class Sociecon(models.Model):
    factor = models.CharField(max_length=255)
    choice = models.CharField(max_length=255)
    odds = models.FloatField()

    class Meta:
        db_table = 'sociecon'


class DirectCause(models.Model):
    factor = models.CharField(max_length=255)
    choice = models.CharField(max_length=255)
    odds = models.FloatField()

    class Meta:
        db_table = 'direct_cause'


class CountryGroup(models.Model):
    major_groups = models.CharField(max_length=255)
    country = models.CharField(max_length=255)

    class Meta:
        db_table = 'country_group'
