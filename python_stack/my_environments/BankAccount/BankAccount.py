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

    def yield_interest(self):
        self.account_balance *= (1+self.rate)
        return self

#create instances of class BankAccount
check = BankAccount('check',0.002)
save = BankAccount('save',balance=1000)

#print beginning balances
print(f"Beginning Checking Balance: {check.account_balance}")
print(f"Beginning Savings Balance: {save.account_balance}")

#deposit/withdraw/yield interest/display account info
check.deposit(50).deposit(50).deposit(50).withdraw(100).yield_interest().display_account_info()
save.deposit(200).deposit(200).withdraw(20).withdraw(10).withdraw(20).withdraw(10).yield_interest().display_account_info()