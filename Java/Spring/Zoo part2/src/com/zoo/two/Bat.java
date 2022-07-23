package com.zoo.two;

public class Bat extends Mammal {
	
	public Bat() {
		energyLevel =300;
	}
	
	public void fly() {
		System.out.println("Bat is flying!");
		energyLevel -=50;
		displayEnergy();
	}
	
	public void eatHumans() {
		System.out.println("so- well, never mind");
		energyLevel +=25;
		displayEnergy();
	}
	
	public void attackTown() {
		System.out.println("Bat is attacking town!");
		energyLevel -=100;
		displayEnergy();
	}

}
