from user import User

Sara = User("Sara Alghamdi")
Aziza = User("Aziza")
Roaa = User("Roaa")

Sara.make_deposit(100).make_deposit(200).make_deposit(300).make_withdrawal(50).display_user_balance()
Aziza.make_deposit(100).make_deposit(100).make_withdrawal(50).make_withdrawal(50).display_user_balance()
Roaa.make_deposit(1000).make_withdrawal(200).make_withdrawal(100).make_withdrawal(100).display_user_balance()
print("")

print("------TRANSFER from Sara to Roaa ------")
Sara.transfer_money(Roaa, 100).display_user_balance()
print("")
print("------Display Roaa account------")
Roaa.display_user_balance()

