import java.util.Arrays;

public class ArraysSorting {

	public static void main(String[] args) {
		int arr[]= {2,3,5,8,6,9,4,7,1};
		System.out.println("Before sorting");
		System.out.println(Arrays.toString(arr));
		System.out.println("after sorting");
		Arrays.sort(arr);
		System.out.println(Arrays.toString(arr));

	}

}
