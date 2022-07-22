import java.util.ArrayList;

public class Order{

    public String name;
    public double total;
    public boolean ready;
    // public ArrayList<String> item;
    ArrayList<Item> item = new ArrayList<Item>();
    public Order() {
    }

    public Order(String name, double total, boolean ready, ArrayList<Item> item) {
        this.name = name;
        this.total = total;
        this.ready = ready;
        this.item = item;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public double getTotal() {
        return total;
    }
    public void setTotal(double total) {
        this.total = total;
    }
    public boolean isReady() {
        return ready;
    }
    public void setReady(boolean ready) {
        this.ready = ready;
    }
    public ArrayList<Item> getItem() {
        return item;
    }
    public void setItem(ArrayList<Item> item) {
        this.item = item;
    }
}