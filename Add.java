package stringsExample;

public class Add {
	

		public static void main(String args[])
		{
		int array[]={12,43,57,66,69,84};
		int oddSum=0,evenSum=0;
		for(int i=0; i<6; i++){
		if(array[i]%2==0){
		evenSum=evenSum+array[i];
		}
		else{
		oddSum=oddSum+array[i];
		}
		}
		System.out.println("\nSum of even is: "+evenSum);
		System.out.println("\nSum of odd is: "+oddSum);
		}
		}


