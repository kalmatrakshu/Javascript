package arrayExamples;

import java.util.Arrays;
import java.util.Scanner;

public class Arrange {
	public static void main(String[] args)
	{
		//creating an array using floating syntax
		float[] marks=new float[5];
		
		//store or read value in to array
		Scanner sc=new Scanner(System.in);
		
		System.out.println("enter the value of array");
		for(int i=0;i<marks.length;i++)
		{
			marks[i]=sc.nextFloat();
         }
		
		//reading the array values from array to display in console
		System.out.println("values of array.....");
		for(int i=0;i<marks.length;i++)
		{
			System.out.println(marks[i]);
		
		}
		
		Arrays.sort(marks);
		//reading the array values from array after sort to display 
		System.out.println("values of array");
		for(int i=0;i<marks.length;i++)
		{
			System.out.println(marks[i]);
		}
sc.close();
	}
}


