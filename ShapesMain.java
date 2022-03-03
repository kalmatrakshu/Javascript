package abstractionExample;

public class ShapesMain {
	public static void main(String[] args) {
		
		CircleShape c=new CircleShape();
		c.input();
		c.Calculate();
		TriangleShape t=new TriangleShape();
		t.input();
		t.Calculate();
		SquareShape s=new SquareShape();
		s.input();
		s.Calculate();
		RectangleShape r=new RectangleShape();
		r.input();
		r.Calculate();

		}

}
