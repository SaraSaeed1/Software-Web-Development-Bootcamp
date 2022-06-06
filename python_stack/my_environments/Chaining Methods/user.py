class User:
    def __init__(self, name):
        self.name = name
        self.account_balance=0

    def make_deposit(self, amount):
        self.account_balance += amount
        return self

    def make_withdrawal(self, amount):	
        self.account_balance -= amount
        return self

    def transfer_money(self, user, amount):
        self.account_balance -= amount
        user.account_balance += amount
        return self

    def display_user_balance(self):
        print (f"User: {self.name}, Balance: ${self.account_balance }")
