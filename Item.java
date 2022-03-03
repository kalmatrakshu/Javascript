package inheritanceExample;

public class Item {
	String name;
	String description;
	String price;
	
	void viewFullDescription(){
		System.out.println("item description" + name + price);
	}
	void addToShopping() {
		System.out.println("item added" + name );
	}
  void removeFromShoppingBasket() {
	  System.out.println("item removed" + name);
  }
}
