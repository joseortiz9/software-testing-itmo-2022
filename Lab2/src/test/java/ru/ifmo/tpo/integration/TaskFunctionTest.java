package ru.ifmo.tpo.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import ru.ifmo.tpo.Function;
import ru.ifmo.tpo.TaskFunction;
import ru.ifmo.tpo.unit.logarithm.Base;
import ru.ifmo.tpo.unit.logarithm.Logarithm;
import ru.ifmo.tpo.unit.logarithm.NaturalLogarithm;
import ru.ifmo.tpo.unit.trigonometry.Cosec;
import ru.ifmo.tpo.unit.trigonometry.Sin;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class TaskFunctionTest {
    private static final double DELTA = 0.01;
    private static final double EPS = 1E-18;

    private Sin sin;
    private NaturalLogarithm ln;
    private Cosec csc;
    private Logarithm log3;
    private Logarithm log5;
    private Logarithm log10;
    private Function function;

    @BeforeEach
    void setUp() {
        sin = spy(new Sin());
        ln = spy(new NaturalLogarithm());
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/data.csv",
            numLinesToSkip = 1
    )
    void testWithPointsFromTableOnAllStubs(double value, double result) {
        csc = spy(new Cosec(sin));
        log3 = spy(new Logarithm(Base.BASE_THREE, ln));
        log5 = spy(new Logarithm(Base.BASE_FIVE, ln));
        log10 = spy(new Logarithm(Base.BASE_TEN, ln));
        this.function = new TaskFunction(csc, ln, log3, log5, log10);
        assertEquals(result, function.apply(value), DELTA);
        if (value <= 0) {
            verify(csc).apply(value, EPS);
            verifyNoInteractions(ln);
        } else {
            verify(log3, times(2)).apply(value, EPS);
            verify(log5, atLeast(3)).apply(value, EPS);
            verify(log10, times(1)).apply(value, EPS);
            verifyNoInteractions(csc);
        }
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/data.csv",
            numLinesToSkip = 1
    )
    void testWithPointsFromTableOnFirstStub(double value, double result) {
        csc = new Cosec(new Sin());
        log3 = spy(new Logarithm(Base.BASE_THREE, ln));
        log5 = spy(new Logarithm(Base.BASE_FIVE, ln));
        log10 = spy(new Logarithm(Base.BASE_TEN, ln));
        this.function = new TaskFunction(csc, ln, log3, log5, log10);
        assertEquals(result, function.apply(value), DELTA);
        if (value <= 0) {
            verifyNoInteractions(ln);
        } else {
            verify(log3, times(2)).apply(value, EPS);
            verify(log5, atLeast(3)).apply(value, EPS);
            verify(log10, times(1)).apply(value, EPS);
        }
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/data.csv",
            numLinesToSkip = 1
    )
    void testWithPointsFromTableOnLogsStub(double value, double result) {
        csc = new Cosec(new Sin());
        ln = new NaturalLogarithm();
        log3 = spy(new Logarithm(Base.BASE_THREE, ln));
        log5 = spy(new Logarithm(Base.BASE_FIVE, ln));
        log10 = spy(new Logarithm(Base.BASE_TEN, ln));
        this.function = new TaskFunction(csc, ln, log3, log5, log10);
        assertEquals(result, function.apply(value), DELTA);
        if (value > 0) {
            verify(log3, times(2)).apply(value, EPS);
            verify(log5, atLeast(3)).apply(value, EPS);
            verify(log10, times(1)).apply(value, EPS);
        }
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/data.csv",
            numLinesToSkip = 1
    )
    void testWithPointsFromTableOnNoStub(double value, double result) {
        csc = new Cosec(new Sin());
        ln = new NaturalLogarithm();
        log3 = new Logarithm(Base.BASE_THREE, ln);
        log5 = new Logarithm(Base.BASE_FIVE, ln);
        log10 = new Logarithm(Base.BASE_TEN, ln);
        this.function = new TaskFunction(csc, ln, log3, log5, log10);
        assertEquals(result, function.apply(value), DELTA);
    }
}
