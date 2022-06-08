package ru.ifmo.tpo;

import ru.ifmo.tpo.logarithm.Base;
import ru.ifmo.tpo.logarithm.Logarithm;
import ru.ifmo.tpo.logarithm.NaturalLogarithm;
import ru.ifmo.tpo.trigonometry.Cosec;

public class TaskFunction implements Function {
    private final Function csc, ln, log3, log5, log10;

    public TaskFunction() {
        this.csc = new Cosec();
        this.ln = new NaturalLogarithm();
        this.log3 = new Logarithm(Base.BASE_THREE);
        this.log5 = new Logarithm(Base.BASE_FIVE);
        this.log10 = new Logarithm(Base.BASE_TEN);
    }

    @Override
    public double apply(double value, double eps) {
        if (value <= 0) {
            return csc.apply(value, eps);
        } else {
            return (((((log5.apply(value, eps) / log3.apply(value, eps)) + ln.apply(value, eps)) - log5.apply(value, eps)) / log5.apply(value, eps))
                    / (log5.apply(value, eps) / ((log10.apply(value, eps) * log3.apply(value, eps)) + log5.apply(Math.pow(value, 2), eps))));
        }
    }
}
