import java.util.ArrayList;

import javafx.scene.effect.Light.Spot;

public class CoffeeKiosk{


    private ArrayList<Item> menu;
    private ArrayList<Order> orders;

    public coffeeKiosk(){
        menu = new ArrayList<Item>();
        orders = new ArrayList<Order>();
    }

    public String addMenuItem(String name, double price){
        Item item = new Item();
        item.setName(name);
        item.setPrice(price);
        menu.add(item);
    }

    public void displayMenu(){
        for(int i=0;i<menu.size(); i++){
            System.out.println(i+ " " + menu.get(i).getName() + " -- " + i+ " " + menu.get(i).getPrice());

        }
    }
}