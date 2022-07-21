public class BankAccount {
    private double checking;
    private double saving;
    private static int numberOfAccounts=0;
    private static double totalAmountOfMoney;

    public BankAccount() {
        numberOfAccounts++;
    }

    public static int getNumberOfAccounts(){
        return numberOfAccounts;
    }

    public static double getTotalAmountOfMoney(){
        return totalAmountOfMoney;
    }

    public double getTotalAmountOfUser() {
        double totalAmount = checking + saving; 
        return totalAmount;
    }

    // Get & Set
    public double getChecking() {
        return checking;
    }

    public double getSaving() {
        return saving;
    }

    public void deposit(){
        System.out.println("\n ------------ Hi, please choose account: ------------");
        System.out.println("Please enter 1 or 2 to choose account, or q to quit:");
        System.out.println("1. checking");
        System.out.println("2. saving");
        String account = System.console().readLine();
        
        while(!account.equals("q")) {
            
            if(account.equals("1")){
                System.out.println("\n -------- Please enter amount: --------");
                String i = System.console().readLine();
                int amount =Integer.parseInt(i);
                checking += amount;
                totalAmountOfMoney += amount;
            }
            else if(account.equals("2")){
                System.out.println("\n -------- Please enter amount: --------");
                String i = System.console().readLine();
                int amount =Integer.parseInt(i);
                saving += amount;
                totalAmountOfMoney += amount;
            }
            else{
                System.out.println("#################################");
                System.out.println("PLZ enter 1 or 2, or q to quit");
                System.out.println("#################################");
            }
            System.out.println("\n ------------ Hi, please choose account: ------------");
            System.out.println("Please enter 1 or 2 to choose account, or q to quit:");
            System.out.println("1. checking");
            System.out.println("2. saving");
            account = System.console().readLine();
        }
        displayDeposit();
    }

    public void withdraw(){
        System.out.println("\n Hi, please choose account: ");
        System.out.println("Please enter 1 or 2 to choose account, or q to quit:");
        System.out.println("1. checking");
        System.out.println("2. saving");
        String account = System.console().readLine();
        
        while(!account.equals("q")) {
            System.out.println("\n-------- Please enter amount: --------");
            String i = System.console().readLine();
            int amount =Integer.parseInt(i);
            if(account.equals("1") && amount <= checking){
                checking-= amount;
                totalAmountOfMoney -= amount;
                displayWithdraw();
            }
            else if(account.equals("2") && amount <= saving ){
                saving -= amount;
                totalAmountOfMoney -= amount;
                displayWithdraw();
            }
            else if(amount > checking || amount > saving){
                System.out.println("\n ###--------insufficient funds--------###");
            }
            else{
                System.out.println("#################################");
                System.out.println("PLZ enter 1 or 2, or q to quit");
                System.out.println("#################################");
            }
            System.out.println("\n ------------ Hi, please choose account: ------------");
            System.out.println("Please enter 1 or 2 to choose account, or q to quit:");
            System.out.println("1. checking");
            System.out.println("2. saving");
            account = System.console().readLine();
        }
    }

    public void displayDeposit (){
        System.out.println("\n ------------------ Information Deposit ------------------");
        System.out.println("The Checking: " + getChecking() + " ------- the saving: "+ getSaving() );
        System.out.println("The Total: " + getTotalAmountOfUser());
        System.out.println("The amount of money: " + getTotalAmountOfMoney());
    }

    public void displayWithdraw (){
        System.out.println("\n ------------------ Information Withdraw ------------------");
        System.out.println("The Checking: " + getChecking() + " ------- the saving: "+ getSaving() );
        System.out.println("The amount: " + getTotalAmountOfUser());
        System.out.println("The amount of money: " + getTotalAmountOfMoney());
    }

}
