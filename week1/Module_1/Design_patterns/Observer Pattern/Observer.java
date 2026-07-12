import java.util.ArrayList;
import java.util.List;


public interface Observer {
    void update(int state);

public class Subject {

    private List<Observer> observers = new ArrayList<>();

    private int state;

    public void attach(Observer observer) {
        observers.add(observer);
    }

    public void setState(int state) {

        this.state = state;

        notifyAllObservers();
    }

    private void notifyAllObservers() {

        for(Observer observer : observers)
            observer.update(state);
    }
}

public class BinaryObserver implements Observer {

    public void update(int state) {

        System.out.println("Binary : " + Integer.toBinaryString(state));
    }
}
public class HexObserver implements Observer {

    public void update(int state) {

        System.out.println("Hex : " + Integer.toHexString(state));
    }
}

public class Main {

    public static void main(String[] args) {

        Subject subject = new Subject();

        subject.attach(new BinaryObserver());
        subject.attach(new HexObserver());

        subject.setState(25);
    }
}

}