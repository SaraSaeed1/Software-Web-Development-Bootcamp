package com.calculator.two;
import java.util.Scanner;
import java.util.ArrayList;

public class Calculator {
	private ArrayList<String> cal = new ArrayList<String>();//Array for save all All user's input
	private double num ;
	private String operation;
	private double result = 0;

	//add the number to the ArrayList after change the type of number to string
	public void AddNumber(double num) {
		String str = Double.toString(num);
		cal.add(str);
	}

	// Add operation to the ArrayList
	public void AddOperation(String operation) {
		cal.add(operation);
	}


	public ArrayList<String> getCal() {
			return cal;
	}

	public double getResult() {
		return result;
	}

	public void getInputFromUser() {
		Scanner input = new Scanner(System.in);
		//number1
		System.out.print("Enter an Number: ");
		num=input.nextDouble();
		AddNumber(num); //add the number to the ArrayList

		//operation
		System.out.print("Enter an operation: ");
		operation=input.next();
		AddOperation(operation); //add the operation to the ArrayList

		while(!operation.equals("=")) {
			System.out.print("Enter an Number: ");
			num=input.nextDouble();
			AddNumber(num); //add the number to the ArrayList

			//operation
			System.out.print("Enter an operation: ");
			operation=input.next();
			AddOperation(operation); //add the operation to the ArrayList
		}
		performOperation();
		input.close();
	}

	public void performOperation() {
		System.out.println(getCal() + "  " + result); //print the calculation and the result
		cal.remove((cal.size()-1)); //remove "=" from the array

		while(cal.size()>1){
			// The order of operations, 
				// 1- exponentiation and root extraction, (But we will not discuss it in our program)
				// 2- multiplication and division
				// 3- addition and subtraction
			// Which arithmetic operations must be performed first in a given arithmetic sentence? 
			// Therefore, multiplication and division must be solved first, So the first loop is solve Multiply && Division
			for (int i=0 ;i<cal.size(); i++) {
				if ((cal.get(i)).equals("*")) {
					result = Double.parseDouble((cal.get(i-1))) * Double.parseDouble((cal.get(i+1)));
					changeArray(i);
					i=0;
				}
				else if (cal.get(i).equals("/")) {
					result = Double.parseDouble((cal.get(i-1))) / Double.parseDouble((cal.get(i+1)));
					changeArray(i);
					i=0;
				}
			}
			// Second for loop for addition & subtraction
			for (int i=0 ;i<cal.size(); i++) {
				if ((cal.get(i)).equals("+")) {
					result = Double.parseDouble((cal.get(i-1))) + Double.parseDouble((cal.get(i+1)));
					changeArray(i);
					i=0;
				}
				else if ((cal.get(i)).equals("-")) {
					result = Double.parseDouble((cal.get(i-1))) - Double.parseDouble((cal.get(i+1)));
					changeArray(i);
					i=0;
				}
			}
		}
		System.out.println(getResult());
	}


	public void changeArray (int i){
		cal.set(i, (Double.toString(result)));
//		System.out.println(getCal());
		cal.remove((cal.get(i+1)));
//		System.out.println(getCal());
		cal.remove((cal.get(i-1)));
//		System.out.println(getCal());
	}

	// Some Method just to check
	public int sizeArray(){
		return cal.size();
	}

	public String sercheString(int index){
		String val= cal.get(index);
		return val;
	}

}
