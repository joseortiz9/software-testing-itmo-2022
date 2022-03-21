package ru.ifmo.tpo.task1;

import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import static org.junit.jupiter.api.Assertions.*;
import static ru.ifmo.tpo.task1.TaylorSeries.PRECISION;

public class TaylorSeriesTest {

    private TaylorSeries nTaylorSeries;

    @ParameterizedTest
    @ValueSource(doubles = {Math.PI / 2 + 0.01, -(Math.PI / 2 + 0.01)})
    public void checkCloseToZeroCosLeftPart(double angle) throws SmallNException {
        nTaylorSeries = new TaylorSeries(1000);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
        //System.out.println("angle: "+angle+", result: "+nTaylorSeries.cos(angle));
        nTaylorSeries = new TaylorSeries(10);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
        //System.out.println("angle: "+angle+", result: "+nTaylorSeries.cos(angle));
    }

    @ParameterizedTest
    @ValueSource(doubles = {Math.PI / 2 - 0.01, -(Math.PI / 2 - 0.01)})
    public void checkCloseToZeroCosRightPart(double angle) throws SmallNException {
        nTaylorSeries = new TaylorSeries(1000);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
        nTaylorSeries = new TaylorSeries(10);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
    }

    @ParameterizedTest
    @ValueSource(doubles = {Math.PI, Math.PI + 0.00000001, Math.PI - 0.00000001})
    public void checkPi(double angle) throws SmallNException {
        nTaylorSeries = new TaylorSeries(1000);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
        nTaylorSeries = new TaylorSeries(10);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
    }

    @ParameterizedTest
    @ValueSource(doubles = {Math.PI / 2, Math.PI / 2 + 0.00000001, Math.PI / 2 - 0.00000001, -Math.PI / 2, -Math.PI / 2 + 0.00000001, -Math.PI / 2 - 0.00000001})
    public void checkZeroCos(double angle) throws SmallNException {
        nTaylorSeries = new TaylorSeries(1000);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
        nTaylorSeries = new TaylorSeries(10);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
    }

    @ParameterizedTest
    @ValueSource(doubles = {0, 0.00000001, -0.00000001})
    public void checkZero(double angle) throws SmallNException {
        nTaylorSeries = new TaylorSeries(1000);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
        nTaylorSeries = new TaylorSeries(10);
        assertEquals(Math.cos(angle), nTaylorSeries.cos(angle), PRECISION);
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
