package week2.Module_4.Calculator;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

import static org.junit.jupiter.api.Assertions.*;

class ParameterizedDemo {

    Calculator calculator = new Calculator();

    @ParameterizedTest
    @CsvSource({
            "2,3,5",
            "10,20,30",
            "5,5,10"
    })

    void testAdd(int a,int b,int result){

        assertEquals(result,
                calculator.add(a,b));
    }
}