package com.zookeeper.one;

public class Mammal {
	public int energyLevel;
	
	public Mammal () {
		energyLevel=100;
	}
	
	public void displayEnergy() {
		System.out.println("The Energy Level is: " + energyLevel );
	}
}
