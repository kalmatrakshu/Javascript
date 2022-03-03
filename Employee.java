package classandObject;
import java.util.*;
import java.text.ParseException;
import java.text.SimpleDateFormat;

public class Employee {
        String empName;
        int empId;
        String email;
		int empPhoneNumber;
		
		
		Scanner sc=new Scanner(System.in);
		void readEmployeeDetails1()  {
			System.out.println("Enter the employee data");
			System.out.println("Enter the employee");
			 empId = sc.nextInt();
			System.out.println("Enter the employee name");
			sc.nextLine();
			empName = sc.nextLine();
			System.out.println("enter the employee email");
			email=sc.nextLine();
			System.out.println("enter the employee phonenumber");
			 empPhoneNumber=sc.nextInt();
			
			 
			
		}
		
		void displayEmployeeDetails1(){
			System.out.println("Entered the employee data ...............");
			System.out.println("Employee name=" + empName );
			System.out.println("Employee id=" + empId);
			System.out.println("Employee email=" + email);
			System.out.println("Employee phonenumber=" + empPhoneNumber );
			
			
		
		
		}



	}


