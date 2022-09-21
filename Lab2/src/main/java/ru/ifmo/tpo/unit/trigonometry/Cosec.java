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
//        double result = 1 / sin.apply(value, eps);
//        System.out.println(value);
//        System.out.println(eps);
//        System.out.println(result);
//        System.out.println(sin.apply(value));
//        System.out.println(sin.apply(value, eps));
//        System.out.println(Math.sin(Math.PI));
//        System.out.println(1 / Math.sin(value));
        return 1 / sin.apply(value, eps);
    }
}
