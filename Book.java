package inheritanceExample;

public class Book extends Item{
	String author;
	int noOfPages;
	 
	void previewContent() {
		System.out.println("preview of the content" + author + noOfPages + name + price );
	}

}
