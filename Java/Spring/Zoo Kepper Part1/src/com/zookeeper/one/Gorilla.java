package com.zookeeper.one;

public class Gorilla extends Mammal {
	
	public void throwSomething() {
		System.out.println(" the gorilla has thrown something");
		energyLevel -=5;
		displayEnergy();
	}
	
	public void eatBananas() {
		System.out.println("Yammmmmme ");
		energyLevel +=10;
		displayEnergy();
	}
	
	public void climb() {
		System.out.println("the gorilla has climbed a tree ");
		energyLevel -= 10;
		displayEnergy();
	}

}