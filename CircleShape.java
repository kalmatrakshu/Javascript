package abstractionExample;

import java.util.Scanner;

public class CircleShape extends Shapes{
	private double radious;
	final double PIE= 3.14;
	double area,perimeter;
	Scanner scan=new Scanner(System.in);
	public void input()
	{
	System.out.println("Enter radious of circle :");
	radious=scan.nextDouble();
	}
	public void Calculate()
	{
	area=PIE*radious*radious;
	System.out.println("Area of circle is : "+area);
	perimeter=2*PIE*radious;
	System.out.println("Perimeter of Circle is :"+perimeter);
	}
	}


