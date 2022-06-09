package ru.ifmo.tpo.unit.trigonometry;

import ru.ifmo.tpo.Function;

import static java.lang.Math.abs;

public class Cosec implements Function {
    private final Sin sin;

    public Cosec() {
        this.sin = new Sin();
    }
    public Cosec(Sin sin) {
        this.sin = sin;
    }

    @Override
    public double apply(double value, double eps) {
        return 1 / sin.apply(value, eps);
    }
}
