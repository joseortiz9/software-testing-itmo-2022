package ru.ifmo.tpo.task1;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;
import static ru.ifmo.tpo.task1.TaylorSeries.PRECISION;

public class TaylorSeriesTest {

    private final static int BIG_N = 1000;
    private final static int SMALL_N = 10;

    private TaylorSeries nTaylorSeries;

    @ParameterizedTest
    @ValueSource(doubles = {Math.PI / 2 + 0.01, -(Math.PI / 2 + 0.01)})
    public void checkCloseToZeroCosLeftPart(double angle) throws SmallNException {
        assertAll(
                () -> assertEquals(Math.cos(angle), new TaylorSeries(BIG_N).cos(angle), PRECISION),
                () -> assertEquals(Math.cos(angle), new TaylorSeries(SMALL_N).cos(angle), PRECISION)
        );
    }

    @ParameterizedTest
    @ValueSource(doubles = {Math.PI / 2 - 0.01, -(Math.PI / 2 - 0.01)})
    public void checkCloseToZeroCosRightPart(double angle) throws SmallNException {
        assertAll(
                () -> assertEquals(Math.cos(angle), new TaylorSeries(BIG_N).cos(angle), PRECISION),
                () -> assertEquals(Math.cos(angle), new TaylorSeries(SMALL_N).cos(angle), PRECISION)
        );
    }

    @ParameterizedTest
    @ValueSource(doubles = {Math.PI, Math.PI + 0.00000001, Math.PI - 0.00000001})
    public void checkPi(double angle) throws SmallNException {
        assertAll(
                () -> assertEquals(Math.cos(angle), new TaylorSeries(BIG_N).cos(angle), PRECISION),
                () -> assertEquals(Math.cos(angle), new TaylorSeries(SMALL_N).cos(angle), PRECISION)
        );
    }

    @ParameterizedTest
    @ValueSource(doubles = {Math.PI / 2, Math.PI / 2 + 0.00000001, Math.PI / 2 - 0.00000001, -Math.PI / 2, -Math.PI / 2 + 0.00000001, -Math.PI / 2 - 0.00000001})
    public void checkZeroCos(double angle) throws SmallNException {
        assertAll(
                () -> assertEquals(Math.cos(angle), new TaylorSeries(BIG_N).cos(angle), PRECISION),
                () -> assertEquals(Math.cos(angle), new TaylorSeries(SMALL_N).cos(angle), PRECISION)
        );
    }

    @ParameterizedTest
    @ValueSource(doubles = {0, 0.00000001, -0.00000001})
    public void checkZero(double angle) throws SmallNException {
        assertAll(
                () -> assertEquals(Math.cos(angle), new TaylorSeries(BIG_N).cos(angle), PRECISION),
                () -> assertEquals(Math.cos(angle), new TaylorSeries(SMALL_N).cos(angle), PRECISION)
        );
    }

    @ParameterizedTest
    @ValueSource(ints = {-1, 1, 2})
    public void checkSmallNException(int n) {
        nTaylorSeries = new TaylorSeries(n);
        Exception actualException = assertThrows(SmallNException.class, () -> nTaylorSeries.cos(0));

        String expectedMessage = "N should be more than 2";
        assertTrue(actualException.getMessage().contains(expectedMessage));
    }
}
