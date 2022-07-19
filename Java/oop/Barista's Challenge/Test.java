public class Test {
    public static void main(String[] args) {
        
        Item item1 = new Item("cappucino", 5.5);
        Item item2 = new Item("latte", 4.9);
        Item item3 = new Item("mocha", 3.3);
        Item item4 = new Item("drip coffee", 2.1);

        //Create 2 orders for unspecified guests (without specifying a name);
        Order order1 = new Order();
        Order order2 = new Order();

        //Create 3 orders using the overloaded constructor to give each a name for the order.
        Order order3 = new Order("Sara");
        Order order4 = new Order("Aziza");
        Order order5 = new Order("Roaa");


        //Implement the addItem method within the Order class
        order3.addItem(item1);

        //Add at least 2 items to each of the orders using the addItem method you wrote, for example, to add item1 to order3 you would need to call the addItem method from the order3 instance like so: order3.addItem(item1);
        order4.addItem(item1);
        order4.addItem(item2);
        order4.addItem(item3);
        order4.addItem(item4);

        order5.addItem(item4);

        //Implement the getStatusMessage method within the Order class
        System.out.println("--------- Before State ----------");
        System.out.println(order3.getStatusMessage());

        //Test your getStatusMessage functionality by setting some orders to ready and printing the messages for each order. For example: order2.setReady(true); System.out.println(order2.getStatusMessage());
        System.out.println("--------- After State ----------");
        order3.setReady(true);
        System.out.println(order3.getStatusMessage());


        // Implement the getOrderTotal method within the Order class
        System.out.println("--------------Total for Order 3--------------");
        System.out.println(order3.getOrderTotal());

        // Test the total by printing the return value like so: System.out.println(order1.getOrderTotal());
        System.out.println("--------------Total for Order 1--------------");
        System.out.println(order1.getOrderTotal());

        // Implement the display method within the Order class
        System.out.println("---------------Display----------------");
        order1.display();
        // Finally, call the display method on all of your orders, like so: order3.display();
        order2.display();
        order3.display();
        order4.display();
        order5.display();
    }
}
