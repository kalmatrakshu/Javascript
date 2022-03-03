package inheritanceExample;

public class Mp3 extends Item {
	String artist;
	double duration;
	 void play() {
		 System.out.println("mp3 song played" +  artist   );
	 }
	 void download() {
		 System.out.println("MP3 Song downloaded" +  duration );
	 }

}
