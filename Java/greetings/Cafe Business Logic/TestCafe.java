import java.util.ArrayList;


public class TestCafe{
    public static void main(String[] args) {
        CafeUtil app = new CafeUtil();

        System.out.print(app.getStreakGoal(2));

        // ArrayList<Double> arr = new ArrayList<Double>();
        double[] arr = {2.3 , 5.5 , 6.1};
        System.out.print(app.getOrderTotal(arr));

    }
}

