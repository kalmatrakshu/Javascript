package stringsExample;
	import java.util.Scanner;

	public class GCD {

		public static void main(String[] args) {
			
			int a,b,gcd=0;
			Scanner sc=new Scanner(System.in);
					System.out.println("enter the first number");
			a=sc.nextInt();
			System.out.println("enter the second number");
			b=sc.nextInt();
			gcd=findGCD(a,b);
			System.out.println("GCD of" + a + "and" +b+ "="+gcd);
		}
		
		public static int findGCD(int a, int b)
		{
			while(b!=0);
			{
				if(a>b) {
					a=a-b;
				}
				else {
					b=b-a;
				}
			}
			
	return a;
		}

	}


