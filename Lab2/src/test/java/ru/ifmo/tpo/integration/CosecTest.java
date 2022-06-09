package ru.ifmo.tpo.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.junit.jupiter.params.provider.ValueSource;
import ru.ifmo.tpo.Function;
import ru.ifmo.tpo.unit.trigonometry.Cosec;
import ru.ifmo.tpo.unit.trigonometry.Sin;

import static java.lang.Double.NaN;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.*;

public class CosecTest {
    private static final double EPS = 0.01;

    private static Sin sinSpy;
    private Function csc;

    @BeforeEach
    void setUp() {
        sinSpy = spy(new Sin());
        this.csc = new Cosec(sinSpy);
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/csc.csv",
            numLinesToSkip = 1
    )
    void testWithPointFromTable(double value, double result) {
        assertEquals(result, csc.apply(value), EPS);
        verify(sinSpy, times(1)).apply(value, 1E-18);
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
        assertThrows(IllegalArgumentException.class, () -> csc.apply(0, eps));
    }
}
