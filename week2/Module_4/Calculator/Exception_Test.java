package week2.Module_4.Calculator;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ExceptionTest {

    Calculator calculator = new Calculator();

    @Test
    void divideByZero(){

        assertThrows(ArithmeticException.class,
                () -> calculator.divide(10,0));
    }
}