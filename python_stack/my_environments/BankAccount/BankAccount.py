class BankAccount:
    def __init__(self, name, int_rate=0.004, balance=0):
        self.name=name
        self.rate=int_rate
        self.account_balance = balance

    def deposit(self, amount):
        self.account_balance += amount
        return self

    def withdraw(self, amount):
        if amount > self.account_balance:
            print("Insufficient funds: Charging a $5 fee")
            self.account_balance = self.account_balance - 5
        else:
            self.account_balance -= amount
        return self

    def display_account_info(self):
        print (f"Current {self.name}, Balance:${self.account_balance }")
        return self

    def display_account_info(self):
        print (f"Current {self.name} Balance:${self.account_balance }")
        return self

    def yield_interest(self):
        self.account_balance *= (1+self.rate)
        return self

#create instances of class BankAccount
Sara = BankAccount('Sara',0.002)
Njd = BankAccount('Njd',balance=1000)

#print beginning balances
print(f"Frit Sara Balance: {Sara.account_balance}")
print(f"Frit Njd Balance: {Njd.account_balance}")

#deposit/withdraw/yield interest/display account info
Sara.deposit(100).deposit(50).deposit(50).withdraw(100).yield_interest().display_account_info()
Njd.deposit(200).deposit(200).withdraw(20).withdraw(10).withdraw(20).withdraw(10).yield_interest().display_account_info()
