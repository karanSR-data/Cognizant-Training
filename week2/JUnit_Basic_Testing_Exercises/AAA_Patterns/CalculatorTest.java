package week2.JUnit_Basic_Testing_Exercises.AAA_Patterns;

import static org.junit.Assert.assertEquals;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
        calculator = new Calculator();
        System.out.println("Setup Completed");
    }

    @After
    public void tearDown() {
        System.out.println("Cleanup Completed");
    }

    @Test
    public void testMultiply() {

        // Arrange
        int a = 5;
        int b = 4;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals(20, result);

    }

}