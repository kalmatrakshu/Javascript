package classandObject;

import java.util.Scanner;

public class AverageMain {

	public static void main(String[] args) {
		Scanner scan=new Scanner(System.in);
		int i;
		System.out.println("Enter number of students");
		int n=scan.nextInt();
		Average stu[]=new Average[n];
		Average s;
		for (i=0;i<stu.length;i++)
		{
		s=new Average();
		s.DispDetails();
		stu[i]=s;
		}
		Average.dispAverages();
		}

	}


