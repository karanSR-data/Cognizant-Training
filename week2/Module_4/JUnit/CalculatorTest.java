
class CalculatorTest {

    Calculator calculator = new Calculator();

    @Test
    void testAdd(){

        assertEquals(30, calculator.add(10,20));
    }

    @Test
    void testSubtract(){

        assertEquals(10, calculator.subtract(20,10));
    }

    @Test
    void testMultiply(){

        assertEquals(200, calculator.multiply(20,10));
    }

    @Test
    void testDivide(){

        assertEquals(5, calculator.divide(10,2));
    }
}