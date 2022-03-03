package stringsExample;

public class ReverseOrder {
	
	    static void reverse(int a[], int n)
	    {
	        int i, k, t;
	        for (i = 0; i < n / 2; i++) {
	            t = a[i];
	            a[i] = a[n - i - 1];
	            a[n - i - 1] = t;
	        }
	  
	        // printing the reversed array
	        System.out.println("Reversed array is: \n");
	        for (k = 0; k < n; k++) {
	            System.out.println(a[k]);
	        }
	    }
	  
	    public static void main(String[] args)
	    {
	        int[] arr = { 23,44,33,55,77,11,99};
	        reverse(arr, arr.length);
	    }
	}




