public class CafeUtil{

    public int getStreakGoal( int numWeeks) {
        int sum = 0;
        for (int i=1 ; i <= numWeeks ; i++){
            sum += i;
        }
        return sum;
    }

    public double getOrderTotal(double[] prices){
        double sum = 0;
        for (int i=0 ; i<prices.length ; i++){
            sum += prices[i];
        }
        return sum;
    }

    //     public void displayMenu(ArrayList<String> menuItems) {
    //     return
    // }

    //     public addCustomer(ArrayList<String> customers) {
    //     return
    // }
}