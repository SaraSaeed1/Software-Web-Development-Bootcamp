package com.calculator.one;
import java.util.Scanner;

public class Calculator {
	private double operandOne;
	private String operation;
	private double operandTwo;
	private double result = 0;

	
	public double getOperandOne() {
		return operandOne;
	}


	public void setOperandOne(double operandOne) {
		this.operandOne = operandOne;
	}


	public String getOperation() {
		return operation;
	}


	public void setOperation(String operation) {
		this.operation = operation;
	}


	public double getOperandTwo() {
		return operandTwo;
	}


	public void setOperandTwo(double operandTwo) {
		this.operandTwo = operandTwo;
	}


	public void performOperation() {
		
		Scanner input = new Scanner(System.in);
    	//number1
        System.out.print("Enter an Number 1: ");
        setOperandOne(input.nextInt());
        //operation
        System.out.print("Enter an operation: ");
        setOperation(input.next());
        //number2
        System.out.print("Enter an Number 2 : ");
        setOperandTwo(input.nextInt());
        
        //get the result 
        if (getOperation().equals("+")) {
        	result = getOperandOne() + getOperandTwo();
        	message();
        }
        else if (getOperation().equals("-")) {
        	result = getOperandOne() - getOperandTwo();
        	message();
        }
        else if (getOperation().equals("*")) {
        	result = getOperandOne() * getOperandTwo();
        	message();
        }
        else if (getOperation().equals("/")) {
        	result = getOperandOne() / getOperandTwo();
        	message();
        }
        else{
        	System.out.println("you Most Enter operation!!");
        }
        
        // closing the scanner object
        input.close();
	}
	
	
	public void message() {
		System.out.println(getOperandOne()+ " "+ getOperation() +" "+ getOperandTwo() +" = " + result);
	}
	
	public void getResults() {
		System.out.println("Your result is: "+ result);
	}
	
}
