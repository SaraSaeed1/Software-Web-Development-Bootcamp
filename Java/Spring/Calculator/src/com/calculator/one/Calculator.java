package com.calculator.one;
import java.util.Scanner;

public class Calculator {
	public int operandOne;
	public String operation;
	public int operandTwo;
    public int result = 0;

	
	public void performOperation() {
		
		Scanner input = new Scanner(System.in);
    	//number1
        System.out.print("Enter an Number 1: ");
        operandOne = input.nextInt();
        //operation
        System.out.print("Enter an operation: ");
        operation = input.next();
        //number2
        System.out.print("Enter an Number 2 : ");
        operandTwo = input.nextInt();
        
        //get the result 
        if (operation.equals("+")) {
        	result = operandOne + operandTwo;
        	message();
        }
        else if (operation.equals("-")) {
        	result = operandOne - operandTwo;
        	message();
        }
        else if (operation.equals("*")) {
        	result = operandOne * operandTwo;
        	message();
        }
        else if (operation.equals("/")) {
        	result = operandOne / operandTwo;
        	message();
        }
        else{
        	System.out.println("you Most Enter operation!!");
        }
        
        // closing the scanner object
        input.close();
	}
	
	
	public void message() {
		System.out.println(operandOne+ " "+ operation +" "+ operandTwo +" = " + result);
	}
	
	public void getResults() {
		System.out.println("Your result is: "+ result);
	}
	
}
