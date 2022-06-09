package ru.ifmo.tpo.unit.logarithm;

import ru.ifmo.tpo.Function;

public class Logarithm implements Function {
    private final NaturalLogarithm ln;
    private final Base base;

    public Logarithm(Base base) {
        this.base = base;
        this.ln = new NaturalLogarithm();
    }
    public Logarithm(Base base, NaturalLogarithm ln) {
        this.base = base;
        this.ln = ln;
    }
    @Override
    public double apply(double value, double eps) {
        return ln.apply(value, eps) / ln.apply(base.value(), eps);
    }
}
