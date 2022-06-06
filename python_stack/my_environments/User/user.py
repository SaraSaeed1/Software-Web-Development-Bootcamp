from turtle import pensize


class User:
    def __init__(self, name,balance):
        self.name = name
        self.account_balance = balance

    def make_deposit(self, amount):
        self.account_balance = self.account_balance + amount
        print (f"The user's balance after deposit : {self.account_balance}")

    def make_withdrawal(self, amount):	
        self.account_balance = self.account_balance - amount
        print (f"The amount is:{amount} \nThe new balance is:{self.account_balance} ")

    def display_user_balance(self):
        print (f"User: {self.name}, Balance: ${self.account_balance }")

    def transfer_money(self, user, amount):
        self.account_balance= self.account_balance - amount
        user.account_balance = user.account_balance+ amount
        print(f"User 1: {self.name}, Balance: {self.account_balance} \ntransfer user : {user.name}, Balance: {user.account_balance} ")