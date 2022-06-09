package ru.ifmo.tpo.unit;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import ru.ifmo.tpo.Function;
import ru.ifmo.tpo.TaskFunction;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TaskFunctionUnitTest {
    private static final double EPS = 0.01;

    private Function function;

    @BeforeEach
    void setUp() {
        this.function = new TaskFunction();
    }

    @ParameterizedTest(name = "value = {0}, result = {1}")
    @CsvFileSource(
            files = "src/test/resources/data.csv",
            numLinesToSkip = 1
    )
    void testWithPointsFromTable(double value, double result) {
        assertEquals(result, function.apply(value), EPS);
    }
}
