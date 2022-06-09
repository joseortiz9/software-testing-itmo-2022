package ru.ifmo.tpo.unit.trigonometry;

import ru.ifmo.tpo.Function;

import static java.lang.Double.*;
import static java.lang.Math.*;

public class Sin implements Function {
    @Override
    public double apply(double value, double eps) {
        if (isNaN(value) || isInfinite(value)) {
            return NaN;
        }
        if (isNaN(eps) || abs(eps) > 1E-6) {
            throw new IllegalArgumentException("Precision to large (or NaN)");
        }
        /* simplifying the value */
        value = value % (2 * PI);

        double delta, result = 0.0;
        int step = 1, sign = 1;
        do {
            delta = 1;
            /* calc n-th member of the series */
            for (int n = 1; n <= step; n++) {
                delta *= value / n;
            }
            step += 2;
            /* add the value to the result */
            result += sign * delta;
            /* change the sign to the opposite */
            sign *= -1;
        } while (abs(delta) > abs(eps));

        return result;
    }
}
