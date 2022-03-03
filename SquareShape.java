package abstractionExample;

import java.util.Scanner;

public class SquareShape {
	private double side;
	private double area;
	private double perimeter;
	Scanner scan=new Scanner(System.in);
	public void input()
	{
	System.out.println("Enter Side length :");
	side=scan.nextDouble();
	}
	public void Calculate()
	{
	area=side*side;
	System.out.println("Area of Square is : "+area);
	perimeter=4*side;
	System.out.println("Perimeter of Square is :"+perimeter);
	}

}
