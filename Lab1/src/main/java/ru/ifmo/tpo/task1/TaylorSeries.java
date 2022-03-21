package ru.ifmo.tpo.task1;



public class TaylorSeries {

    public static final double PRECISION = 00.5f;
    private final int N;

    public TaylorSeries(int n) {
        this.N = n;
    }

    public double cos(double angle) throws SmallNException {
        double result = 0;
        try {
            if (N < 3) throw new SmallNException("N should be more than 2");
            for (int i = 0; i < N; ++i) {
                if (i > 100) throw new BigNException("N is too big");
                double step_result = Math.pow(-1, i) * Math.pow(angle, 2 * i);
                for (int j = 2; j <= 2 * i; ++j) {
                    step_result /= j;
                }
                result += step_result;
            }
        } catch(BigNException ex){
            System.out.println("Could be smaller precision, err: "+ex);
            return result;
        }
        return result;
    }
}
