package classandObject;

import java.util.Scanner;

public class Average {
	Scanner scan=new Scanner(System.in);
	static String student_name;
	static int roll_number;
	static int marks;
	static float height;
	static float sumMarks=0;
	static float sumHeight=0;
	static int count=0;
	{
	System.out.println("Enter Student Name ");
	student_name=scan.nextLine();
	System.out.println("Enter roll number");
	roll_number=scan.nextInt();
	System.out.println("Enter Marks");
	marks=scan.nextInt();
	System.out.println("Enter height");
	height=scan.nextFloat();
	sumMarks+=marks;
	sumHeight+=height;
	count++;
	}
	void DispDetails()
	{
	System.out.println("Student Name is "+student_name);
	System.out.println("Roll Number : "+roll_number);
	System.out.println("Marks :"+marks);
	System.out.println("Height :"+height);
	}
	static void dispAverages()
	{
	System.out.println("Average marks="+sumMarks/count);
	System.out.println("Average Height="+sumHeight/count);
	}
	}


