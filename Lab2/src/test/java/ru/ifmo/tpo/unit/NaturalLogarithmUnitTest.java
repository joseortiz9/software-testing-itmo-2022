package ru.ifmo.tpo.unit;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.junit.jupiter.params.provider.ValueSource;
import ru.ifmo.tpo.Function;
import ru.ifmo.tpo.unit.logarithm.NaturalLogarithm;

import static java.lang.Double.*;
import static java.lang.Math.log;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

public class NaturalLogarithmUnitTest {
    private static final double EPS = 1E-3;

    private Function ln;

    @BeforeEach
    void setUp() {
        this.ln = new NaturalLogarithm();
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/ln.csv",
            numLinesToSkip = 1
    )
    void testWithPointFromTable(double value, double result) {
        assertEquals(result, ln.apply(value), EPS);
    }

    @ParameterizedTest(name = "epsilon = {0}")
    @ValueSource(doubles = {
            -4.54544,
            0.12455,
            1.02345,
            9.99999,
            NaN
    })
    void testWithInvalidPrecision(double eps) {
        assertThrows(IllegalArgumentException.class, () -> ln.apply(1, eps));
    }

    @ParameterizedTest(name = "value = {0}")
    @ValueSource(doubles = {
            -9.03244,
            -0.33559,
            0.00000,
            NEGATIVE_INFINITY,
            NaN
    })
    void testWithUnacceptableRangePoints(double value) {
        assertEquals(NaN, ln.apply(value));
    }

    @ParameterizedTest(name = "value = {0}")
    @ValueSource(doubles = {
            0.00001,
            0.92378,
            1.00000,
            3.43665,
            9.34654,
            POSITIVE_INFINITY
    })
    void testWithAcceptableRangePoints(double value) {
        assertEquals(log(value), ln.apply(value), EPS);
    }

    @ParameterizedTest(name = "value = {0}")
    @ValueSource(doubles = {
            234434,
            102354,
            404521,
            894672,
            999423,
            234446
    })
    void testWithExtraBigValues(double value) {
        assertEquals(log(value), ln.apply(value), EPS);
    }
}
