package ru.ifmo.tpo.unit;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import org.junit.jupiter.params.provider.ValueSource;
import ru.ifmo.tpo.Function;
import ru.ifmo.tpo.unit.trigonometry.Cosec;
import ru.ifmo.tpo.unit.trigonometry.Sin;

import java.util.Arrays;

import static java.lang.Double.NaN;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class CosecUnitTest {
    private static final double EPS = 0.01;

    private Cosec csc;

    @BeforeEach
    void setUp() {
        Sin sinMock = mock(Sin.class);
        when(sinMock.apply(anyDouble(), anyDouble())).thenAnswer(i -> Math.sin(i.getArgument(0)));
        // when(sinMock.apply(anyDouble(), eq(1E-14))).thenAnswer(i -> Math.sin(i.getArgument(0)));
        this.csc = new Cosec(sinMock);
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/csc.csv",
            numLinesToSkip = 1
    )
    void testWithPointFromTable(double value, double result) {
        assertEquals(result, csc.apply(value), EPS);
    }
}
