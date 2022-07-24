package com.zookeeper.one;

public class Mammal {
	private int energyLevel;
	
	public Mammal () {
		energyLevel=100;
	}
	
	
	public int getEnergyLevel() {
		return energyLevel;
	}


	public void setEnergyLevel(int energyLevel) {
		this.energyLevel = energyLevel;
	}


	public void displayEnergy() {
		System.out.println("The Energy Level is: " + energyLevel );
	}
}

