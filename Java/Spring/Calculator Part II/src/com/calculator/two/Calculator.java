package com.calculator.two;
import java.util.Scanner;
import java.util.ArrayList;

public class Calculator {
	private ArrayList<String> cal = new ArrayList<String>();
	private double num ;
	private String operation;
	private double result = 0;


	public String getOperation() {
		return operation;
	}


	public void setOperation(String operation) {
		this.operation = operation;
	}
	
	public void m() {
		System.out.print(result);
	}
	
	public double getResults() {
		return result;
	}

	
	public void AddToArray(double num) {
		String str = Double.toString(num);
		cal.add(str);
	}
	
public void performOperation() {
		
	Scanner input = new Scanner(System.in);
    //number1
    System.out.print("Enter an Number: ");
    num=(input.nextInt());
    AddToArray(num);

    //operation
    System.out.print("Enter an operation: ");
    setOperation(input.next());
    String operation= getOperation();
    cal.add(operation);
        
    //get the result 
    while(!operation.equals("=")) {
    	result=num;

    	System.out.print("Enter an Number: ");
        num=(input.nextInt());
        AddToArray(num);

        if (operation.equals("+")) {
        	result = result + num;
        	num=result;
        }
        else if (operation.equals("-")) {
        	result = result - num;
        	num=result;
        }
        else if (operation.equals("*")) {
        	result = result * num;
        	num=result;
        }
        else if (operation.equals("/")) {
        	result = result / num;
        	num=result;
        }
        else{
        	System.out.println("you Most Enter operation!!");
        }
        
        System.out.print("Enter an operation: ");
        setOperation(input.next());
        operation= getOperation();
        cal.add(operation);

    }
        // closing the scanner object
        input.close();
	}
	public void calculation () {
		for(int i=0 ;i<cal.size(); i++) {
			System.out.print(cal.get(i) + " ");
		}
		System.out.print(getResults());
	}
}
