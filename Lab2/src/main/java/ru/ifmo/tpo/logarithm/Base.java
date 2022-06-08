package ru.ifmo.tpo.logarithm;

public enum Base {
    BASE_TWO(2.0),
    BASE_THREE(3.0),
    BASE_FIVE(5.0),
    BASE_TEN(10.0);

    private final double value;

    Base(double value) {
        this.value = value;
    }

    public double value() {
        return value;
    }
}
