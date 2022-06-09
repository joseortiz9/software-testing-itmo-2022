package ru.ifmo.tpo.unit.trigonometry;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.junit.jupiter.params.provider.ValueSource;
import ru.ifmo.tpo.Function;

import static java.lang.Double.NaN;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class SinUnitTest {
    private static final double EPS = 0.01;

    private Function sin;

    @BeforeEach
    void setUp() {
        this.sin = new Sin();
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/sin.csv",
            numLinesToSkip = 1
    )
    void testWithPointFromTable(double value, double result) {
        assertEquals(result, sin.apply(value), EPS);
    }

    @ParameterizedTest(name = "epsilon = {0}")
    @ValueSource(doubles = {
            -3.141592,
            0.035544,
            0.000345,
            9.993595,
            NaN
    })
    void testWithInvalidPrecision(double eps) {
        assertThrows(IllegalArgumentException.class, () -> sin.apply(0, eps));
    }
}
