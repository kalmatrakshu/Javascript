package classandObject;

import java.util.Scanner;

public class LeapYear {
	public static void main(String args[])
	{
	  Scanner scan=new Scanner(System.in);
	  System.out.println(" enter a Year");
	  int year=scan.nextInt();
	  int val;
	  if(year%100==0)
		{
	  val=year/100;
		}
		else
		{
			val=year;
		}

	  if(val%4==0)
		{
	      System.out.println("It is a leap year");
		}
		else
		{
			System.out.println("It is not a leap Year");
		}
	}

}
