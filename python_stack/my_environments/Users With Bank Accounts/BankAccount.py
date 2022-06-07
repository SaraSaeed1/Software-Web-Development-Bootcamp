class BankAccount:
    def __init__(self, name, int_rate=0.004, balance=0):
        self.name=name
        self.rate=int_rate
        self.account_balance = balance

    def deposit(self, amount, name):
        self.account_balance += amount
        return self

    def withdraw(self, amount, name):
        self.account_balance -= amount
        return self

    def display_account_info(self):
        print (f"Current {self.name}, Balance:${self.account_balance }")
        return self

    def yield_interest(self):
        self.account_balance *= (1+self.rate)
        return self
        