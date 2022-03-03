package inheritanceExample;

public class DVD extends Item {
	String actors;
	float duration;
	
	void Trailer() {
		System.out.println("trailer of the DVD released" +  actors + duration + price);
	}
	

}
