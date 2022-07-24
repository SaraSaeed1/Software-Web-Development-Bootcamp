package com.zookeeper.one;

public class Gorilla extends Mammal {
	int energyLevel= getEnergyLevel();
	
	public void throwSomething() {
		System.out.println(" the gorilla has thrown something");
		this.energyLevel -=5;
		setEnergyLevel(energyLevel);
		displayEnergy();
	}
	
	public void eatBananas() {
		System.out.println("Yammmmmme ");
		this.energyLevel +=10;
		setEnergyLevel(energyLevel);
		displayEnergy();
	}
	
	public void climb() {
		System.out.println("the gorilla has climbed a tree ");
		this.energyLevel -= 10;
		setEnergyLevel(energyLevel);
		displayEnergy();
	}

}
