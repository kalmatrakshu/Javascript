package arrayExamples;

import java.util.Scanner;

public class MirrorPattern {
	 private static Scanner sc;
		
		public static void main(String[] args) {
			sc = new Scanner(System.in);
			
			System.out.print("Enter Mirrored Right Triangle Pattern Rows = ");
			int rows = sc.nextInt();
			
			System.out.println("Printing Mirrored Right Triangle Star Pattern");
			
			for (int i = 1 ; i <= rows; i++ ) 
			{
				for (int j = 0 ; j < rows - i; j++ ) 
				{
					System.out.print(" ");
				}
				for (int k = 0 ; k < i; k++ ) 
				{
					System.out.print("*");
				}
				System.out.println();
			}
		}      
          
		

}
