import datetime
from django.db import models
import re
import bcrypt

class UserManager(models.Manager):
    # validator for Reg
    def registration_validator(self, postData):
        errors = {}
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

        # check the name should be at least 2 character
        if len(postData['fname']) < 2:
            errors['fname'] = "The first name should be at least 2 character "
        
        # check the name should be at least 2 character
        if len(postData['lname']) < 2:
            errors['lname'] = "The last name should be at least 2 character "
        
        #  Ensure the Release Date is in the past.
        if len(postData['birth_date']) > 0:
            _releaseDate = datetime.datetime.strptime(
                postData['birth_date'], '%Y-%m-%d')
            _todayDate = datetime.datetime.today()
            # check the date is in the past?
            if _todayDate < _releaseDate:
                errors['birth_date'] = "Date should be in the past!"
        else:
            # check if not write any date
            errors['birth_date'] = "Date of birth field is required!"
        
        if not EMAIL_REGEX.match(postData['email']):    # test whether a field matches the pattern
            errors['email'] = "Invalid email address!"
        else:
            try:
            # check the email does not exist in the database before creating
                email = User.objects.get(email__iexact=postData['email'])
                errors['email'] = "The email is taken please try another one"
            except:
                pass
        
        if len(postData['password']) < 8:
            errors['password'] = "password should be at least 8 characters"
        
        if postData['password'] != postData['confirmPW']:
            errors['confirmPW'] = "password is not equal to the confirm password"
        
        return errors

    # validator for Login
    def login_validator(self, postData):
        errors= {}
        #  see if the email provided exists in the database
        user = User.objects.filter(email= postData['email'])
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(postData['email']): # test whether a field matches the pattern
            errors['email'] = "Email is not valid"
        else:
            try:
                # check if the email exacted in database and then check if the password is correct
                user = User.objects.get(email__iexact=postData['email'])

                # use bcrypt's check_password_hash method, passing the hash from the database and the password from the form
                if not bcrypt.checkpw(postData['password'].encode(),user.password.encode()):
                    errors['login'] = "Email or Password is incorrect !"
            except:
                errors['login'] = "Email or Password is incorrect !"
        
        return errors


class User(models.Model):
    fname = models.CharField(max_length=255)
    lname = models.CharField(max_length=255)
    birth_date= models.DateTimeField()
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects= UserManager()
