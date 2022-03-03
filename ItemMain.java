package inheritanceExample;

public class ItemMain {

	public static void main(String[] args) {
		Mp3 mp3=new Mp3();
		DVD dvd=new DVD();
		Book book=new Book();
		 mp3.name="Gaana";
		 mp3.description="Syndney nagarm";
		 mp3.artist="Ram Charn";
		 mp3.duration=2.3;
		 
		 mp3.viewFullDescription();
		 mp3.play();
		 mp3.download();
		 
		 dvd.actors="Yash";
		 dvd.duration=3;
		 dvd.price="100";
		 
		 dvd.viewFullDescription();
		 dvd.Trailer();
		 
		 book.author="kuvempu";
		  book.noOfPages=20;
		  book.name="Shri Ramayan Darshanam";
		  book.price="200";
		  book.addToShopping();
		  book.previewContent();
				  
		 
		 

	}

}
