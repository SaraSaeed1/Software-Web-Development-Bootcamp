import java.util.ArrayList;
import java.util.Arrays;

public class TestCafe{
    public static void main(String[] args) {
        CafeUtil app = new CafeUtil();

        System.out.println("----- Streak Goal Test -----");
        System.out.println(app.getStreakGoal(2));

        System.out.println("----- Order Total Test-----");
        double[] arrPrice = {5.5, 5.0, 2.5};
        System.out.printf("Order total: %s \n\n",app.getOrderTotal(arrPrice));

        System.out.println("-----Display Menu Test------");
        ArrayList<String> menu = new ArrayList<String>();
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        app.displayMenu(menu);

        System.out.println("----- Display Customer-----");
        ArrayList<String> customers = new ArrayList<String>();
        customers.add("Sara");
        customers.add("Roaa");
        customers.add("Aziza");
        app.addCustomer(customers);
    }
}