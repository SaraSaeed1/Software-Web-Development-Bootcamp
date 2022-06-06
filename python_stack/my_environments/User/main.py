from user import User


print("---------user1----------")
Sara = User("Sara",0)
Sara.make_deposit(3)
Sara.make_withdrawal(1)
Sara.display_user_balance()

print("")
print("---------user2----------")
Roaa = User("Roaa",0)
Roaa.make_deposit(2)
Roaa.make_withdrawal(2)
Roaa.display_user_balance()

print("")
print("----------user3---------")
Aziza = User("Aziza",0)
Aziza.make_deposit(1)
Aziza.make_withdrawal(3)
Aziza.display_user_balance()

print("")
print("transfer money")
Sara.transfer_money(Aziza, 1)