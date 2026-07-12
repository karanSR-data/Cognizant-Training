public interface Strategy {
    int doOperation(int a, int b);

    public class Add implements Strategy {

    public int doOperation(int a, int b) {
        return a + b;
    }
}
public class Multiply implements Strategy {

    public int doOperation(int a, int b) {
        return a * b;
    }
}
public class Context {

    private Strategy strategy;

    public Context(Strategy strategy) {
        this.strategy = strategy;
    }

    public int execute(int a,int b) {
        return strategy.doOperation(a,b);
    }
}
public class Main {

    public static void main(String[] args) {

        Context add = new Context(new Add());

        System.out.println(add.execute(10,20));

        Context mul = new Context(new Multiply());

        System.out.println(mul.execute(10,20));
    }
}
}