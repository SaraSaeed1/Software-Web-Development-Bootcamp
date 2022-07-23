package com.zoo.two;

public class Bat extends Mammal {
	
	public Bat() {
		energyLevel =300;
	}
	
	public void fly() {
		System.out.println("fly");
		energyLevel -=25;
		displayEnergy();
	}
	
	public void eatHumans() {
		System.out.println("eatHumans");
		energyLevel +=50;
		displayEnergy();
	}
	
	public void attackTown() {
		System.out.println("attackTown");
		energyLevel -=100;
		displayEnergy();
	}

}
