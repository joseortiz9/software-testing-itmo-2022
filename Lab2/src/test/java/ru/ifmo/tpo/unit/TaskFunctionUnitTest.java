package ru.ifmo.tpo.unit;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvFileSource;
import ru.ifmo.tpo.Function;
import ru.ifmo.tpo.TaskFunction;
import ru.ifmo.tpo.unit.logarithm.Logarithm;
import ru.ifmo.tpo.unit.logarithm.NaturalLogarithm;
import ru.ifmo.tpo.unit.trigonometry.Cosec;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class TaskFunctionUnitTest {
    private static final double EPS = 0.01;

    private Function function;

    private Logarithm createLogMock(double base) {
        Logarithm logToMock = mock(Logarithm.class);
        when(logToMock.apply(anyDouble(), anyDouble())).thenAnswer(i -> Math.log(i.getArgument(0)) / Math.log(base));
        return logToMock;
    }

    @BeforeEach
    void setUp() {
        Cosec cscMock = mock(Cosec.class);
        when(cscMock.apply(anyDouble(), anyDouble())).thenAnswer(i -> 1 / Math.sin(i.getArgument(0)));
        NaturalLogarithm lnMock = mock(NaturalLogarithm.class);
        when(lnMock.apply(anyDouble(), anyDouble())).thenAnswer(i -> Math.log(i.getArgument(0)));

        Logarithm log3 = createLogMock(3);
        Logarithm log5 = createLogMock(5);
        Logarithm log10 = createLogMock(10);
        this.function = new TaskFunction(cscMock, lnMock, log3, log5, log10);
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
