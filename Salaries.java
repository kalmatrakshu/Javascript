package com.capgemini.tranning;
import java.util.Scanner;

public class Salaries {
	public static void main(String args[]) {
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the employee name");
		 String name=sc.nextLine();
		 System.out.println("enter the year of service");
		 int service=sc.nextInt();
		 sc.nextLine();
		 System.out.println("enter the salary");
		 double salary=sc.nextDouble();
		 sc.nextLine();
		 System.out.println("select rating(for out of 5:");
		 int rating=sc.nextInt();
		 sc.nextLine();
		 System.out.println("department of the emplpyee:1.HR,2.ACCOUNTING,3.IT,4.SALES");
		 int dept=sc.nextInt();
		 double b=0;
		 if((service>=2) && (rating>=3)) {
			 
				switch(dept) {
				case 1 :b=salary*(0.02);
				System.out.println("Bonus amount you recieved:" +b);
				break;
				case 2: b=salary*(0.03);
				System.out.println("Bonus amount you recieved:" +b);
				break;
				case 3: b=salary*(0.05);
				System.out.println("Bonus amount you recieved:" +b);
				break;
				case 4: b=salary*(0.08);
				System.out.println("bonus amount you recieved:" +b);
				break;
				 }
					 
			 }else {
				 System.out.println("not eligble for bonus");
			 }
			 }
		 }
		 
		 
		 
		 
		 
		 
		 
		 
		 
		
		
		
		
				
	
			
		
	


