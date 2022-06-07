from BankAccount import BankAccount

class User:
    def __init__(self, name):
        self.name = name
        self.account=BankAccount(name= '', int_rate=0.004, balance=0)

    def make_deposit(self, amount, name):
        self.account.deposit(amount, name)
        return self

    def make_withdrawal(self, amount, name):	
        self.account.withdraw(amount, name)
        return self

    # def transfer_money(self, user, amount):
    #     self.account_balance -= amount
    #     user.account_balance += amount
    #     return self

    def display_user_balance(self):
        print (f"User: {self.name}")
        self.account.display_account_info()
        return self
