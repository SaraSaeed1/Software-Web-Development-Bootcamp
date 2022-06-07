from user import User


print("---------user1----------")
Sara = User("Sara",0)
Sara.make_deposit(100)
Sara.make_deposit(100)
Sara.make_deposit(200)
Sara.make_withdrawal(300)
Sara.display_user_balance()

print("")
print("---------user2----------")
Roaa = User("Roaa",0)
Roaa.make_deposit(100)
Roaa.make_deposit(100)
Roaa.make_withdrawal(50)
Roaa.make_withdrawal(50)
Roaa.display_user_balance()

print("")
print("----------user3---------")
Aziza = User("Aziza",0)
Aziza.make_deposit(100)
Aziza.make_deposit(200)
Aziza.make_withdrawal(300)
Aziza.display_user_balance()

print("")
print("transfer money")
Sara.transfer_money(Aziza, 1)
