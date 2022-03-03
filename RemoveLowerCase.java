package xworz;



public class RemoveLowerCase {
	public static void main (String args[]) {
		String str= "HhEelLlLo";
		str=str.replaceAll("[a-z]","");
		System.out.println("Message:" +str);
	}

}
