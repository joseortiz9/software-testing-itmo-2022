package ru.ifmo.tpo;

import ru.ifmo.tpo.unit.logarithm.Base;
import ru.ifmo.tpo.unit.logarithm.Logarithm;
import ru.ifmo.tpo.unit.logarithm.NaturalLogarithm;
import ru.ifmo.tpo.unit.trigonometry.Cosec;

public class TaskFunction implements Function {
    private final Function csc, ln, log3, log5, log10;

    public TaskFunction() {
        this.csc = new Cosec();
        this.ln = new NaturalLogarithm();
        this.log3 = new Logarithm(Base.BASE_THREE);
        this.log5 = new Logarithm(Base.BASE_FIVE);
        this.log10 = new Logarithm(Base.BASE_TEN);
    }

    public TaskFunction(Cosec csc, NaturalLogarithm ln, Logarithm log3, Logarithm log5, Logarithm log10) {
        this.csc = csc;
        this.ln = ln;
        this.log3 = log3;
        this.log5 = log5;
        this.log10 = log10;
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
