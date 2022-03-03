package classandObject;

import java.util.Scanner;

public class PallindromeCheck {
	public static void main(String[] args) 
	{
		Scanner scan=new Scanner(System.in);
		System.out.println("Enter a number");
		long n=scan.nextLong();
		long temp=n;
		long rev=0;
		while(n!=0)
		{
          long digit=n%10;
		  rev=rev*10+digit;
		  n/=10;
		}
		if(temp==rev)
		{
			System.out.println("The enter number is pallindrome");
		}
		else
		{
          System.out.println("The enter number is not pallindrome");
		}
	}

}
