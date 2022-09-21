package ru.ifmo.tpo.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import ru.ifmo.tpo.Function;
import ru.ifmo.tpo.unit.logarithm.Base;
import ru.ifmo.tpo.unit.logarithm.Logarithm;
import ru.ifmo.tpo.unit.logarithm.NaturalLogarithm;
import ru.ifmo.tpo.unit.trigonometry.Sin;

import static org.junit.jupiter.api.Assertions.assertAll;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class LogarithmTest {
    private static final double DELTA = 1E-3;
    private static final double EPS = 1E-14;

    private static NaturalLogarithm lnSpy;
    private Function log2;
    private Function log3;
    private Function log5;
    private Function log10;

    @BeforeEach
    void setUp() {
        lnSpy = spy(new NaturalLogarithm());
        this.log2 = new Logarithm(Base.BASE_TWO, lnSpy);
        this.log3 = new Logarithm(Base.BASE_THREE, lnSpy);
        this.log5 = new Logarithm(Base.BASE_FIVE, lnSpy);
        this.log10 = new Logarithm(Base.BASE_TEN, lnSpy);
    }

    @ParameterizedTest(name = "value = {0}, log2(x) = {1}, log3(x) = {2}, log5(x) = {3}, log10(x) = {4}")
    @CsvFileSource(
            files = "src/test/resources/log.csv",
            numLinesToSkip = 1
    )
    void testWithPointsFromTable(double value, double log2, double log3, double log5, double log10) {
        assertAll(
                () -> assertEquals(log2, this.log2.apply(value), DELTA),
                () -> assertEquals(log3, this.log3.apply(value), DELTA),
                () -> assertEquals(log5, this.log5.apply(value), DELTA),
                () -> assertEquals(log10, this.log10.apply(value), DELTA)
        );
        verify(lnSpy, atLeast(4)).apply(value, EPS);
    }
}
