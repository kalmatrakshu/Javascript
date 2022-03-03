package classandObject;

import java.util.Scanner;

public class Studentheight {

	public static void main(String[] args) {
		float sum=0,avg;
		Scanner s1=new Scanner(System.in);
		System.out.println("enter number of students");
		int n=s1.nextInt();
		System.out.println("enter the height of students");
		for(int i=0;i<n;i++) {
			System.out.println("student"+(i+1)+":");
			float height = s1.nextFloat();
			sum=sum+height;
		}
		avg=sum/n;
		System.out.println("Average height :" +avg);
		
		

	}

}
