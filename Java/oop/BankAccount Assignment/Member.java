

public class Member {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount();
        BankAccount account2 = new BankAccount();

        System.out.println("----------Number Of Account---------");
        System.out.println(BankAccount.getNumberOfAccounts());

        // account1.setChecking(10.0);
        // account1.setSaving(10.0);
        // // account2
        // account2.setChecking(20.0);
        // account2.setSaving(10.0);

        System.out.println("----------Total Amount Of Money---------");
        System.out.println(BankAccount.getTotalAmountOfMoney());


        System.out.println("The Total Of amount account1: $"+account1.getTotalAmountOfUser());
        System.out.println("The Total Of amount account2: $"+account2.getTotalAmountOfUser());

        System.out.println();
        System.out.println("\n ------- Deposit Of Account 1-------- ");
        account1.deposit();
        account1.deposit();
        System.out.println("\n ------- Withdraw Of Account 1-------- ");
        account1.withdraw();
        // System.out.println(account2.getChecking());
        // account1.getTotalAmount();
    }
}