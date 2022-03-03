package arrayExamples;

import java.util.Arrays;

public class ArrayCreation {
	public static void main(String[] args) {
		char[] word= {'a','n','g','e',};
		System.out.println("values of array");
		for(int i=0;i<word.length;i++)
		{
			System.out.println(word[i]);
		
		}
		Arrays.sort(word);
		System.out.println("values of array after sort");
		for(int i=0;i<word.length;i++)
		{
			System.out.println(word[i]);
		
		}
 System.out.println("values of array after sort in reverse");
 for(int i=word.length-1;i<=0;i++) {
	 System.out.println(word[i]);
 }

	}
}
