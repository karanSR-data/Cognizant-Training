public interface Shape {
    void draw();

    public class Circle implements Shape {

    @Override
    public void draw() {
        System.out.println("Drawing Circle");
    }
}
public class Rectangle implements Shape {

    @Override
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}
public class ShapeFactory {

    public Shape getShape(String shapeType) {

        if(shapeType == null)
            return null;

        if(shapeType.equalsIgnoreCase("CIRCLE"))
            return new Circle();

        if(shapeType.equalsIgnoreCase("RECTANGLE"))
            return new Rectangle();

        return null;
    }
}

public class Main {

    public static void main(String[] args) {

        ShapeFactory factory = new ShapeFactory();

        Shape shape1 = factory.getShape("circle");
        shape1.draw();

        Shape shape2 = factory.getShape("rectangle");
        shape2.draw();
    }
}
}
