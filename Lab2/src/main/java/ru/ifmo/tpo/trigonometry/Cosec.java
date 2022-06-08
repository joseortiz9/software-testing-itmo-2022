package ru.ifmo.tpo.trigonometry;

import ru.ifmo.tpo.Function;

import static java.lang.Double.*;
import static java.lang.Math.PI;
import static java.lang.Math.abs;

public class Cosec implements Function {
    private final Sin sin;

    public Cosec() {
        this.sin = new Sin();
    }
    @Override
    public double apply(double value, double eps) {
        return 1 / sin.apply(value, eps);
    }
}
