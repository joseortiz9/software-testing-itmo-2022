package ru.ifmo.tpo.unit.logarithm;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import ru.ifmo.tpo.Function;

import static org.junit.jupiter.api.Assertions.*;

public class LogarithmUnitTest {
    private static final double EPS = 1E-3;

    private Function log2;
    private Function log3;
    private Function log5;
    private Function log10;

    @BeforeEach
    void setUp() {
        this.log2 = new Logarithm(Base.BASE_TWO);
        this.log3 = new Logarithm(Base.BASE_THREE);
        this.log5 = new Logarithm(Base.BASE_FIVE);
        this.log10 = new Logarithm(Base.BASE_TEN);
    }

    @ParameterizedTest(name = "value = {0}, log2(x) = {1}, log3(x) = {2}, log5(x) = {3}, log10(x) = {4}")
    @CsvFileSource(
            files = "src/test/resources/log.csv",
            numLinesToSkip = 1
    )
    void testWithPointsFromTable(double value, double log2, double log3, double log5, double log10) {
        assertAll(
                () -> assertEquals(log2, this.log2.apply(value), EPS),
                () -> assertEquals(log3, this.log3.apply(value), EPS),
                () -> assertEquals(log5, this.log5.apply(value), EPS),
                () -> assertEquals(log10, this.log10.apply(value), EPS)
        );
    }
}
