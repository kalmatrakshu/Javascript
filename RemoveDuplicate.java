package stringsExample;
import java.util.LinkedHashSet;
import java.util.Set;

public class RemoveDuplicate {
	static void removeDuplicate(String str) {
		Set <Character> container=new LinkedHashSet <Character>();
		for(int i=0;i<str.length();i++)
			container.add(str.charAt(i));
		for(Character ch:container)
			System.out.print(ch);
			
	}

	public static void main(String[] args) {
		String str="aabbccdd";
		removeDuplicate(str);
		

	}
	


}
