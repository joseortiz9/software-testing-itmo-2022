package ru.ifmo.tpo;

public interface Function {
    double apply(double value, double eps);
    default double apply(double value) {
        return apply(value, 1E-14);
    }
}
