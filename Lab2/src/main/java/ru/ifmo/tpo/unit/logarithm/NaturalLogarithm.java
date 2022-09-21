package ru.ifmo.tpo.unit.logarithm;

import ru.ifmo.tpo.Function;

import static java.lang.Double.*;
import static java.lang.Math.*;
import static ru.ifmo.tpo.utils.RoundUtils.round;
public class NaturalLogarithm implements Function {
    @Override
    public double apply(double value, double eps) {
        if (isNaN(value) || value <= 0) {
            return NaN;
        }
        if (isInfinite(value)) {
            return POSITIVE_INFINITY;
        }
        if (isNaN(eps) || abs(eps) > 1E-6) {
            throw new IllegalArgumentException("Precision too large (or NaN)");
        }

        double delta, result = 0.0;
        double number = (value - 1) / (value + 1);
        int step = 1;
        do {
            delta = 2 * pow(number, step) / step;
            step   += 2;
            result += delta;
        } while (abs(delta) >= abs(eps));

        return round(result, eps);
    }
}
