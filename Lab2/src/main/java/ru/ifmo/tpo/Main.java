package ru.ifmo.tpo;

import ru.ifmo.tpo.unit.logarithm.NaturalLogarithm;
import ru.ifmo.tpo.unit.trigonometry.Cosec;
import ru.ifmo.tpo.unit.trigonometry.Sin;
import ru.ifmo.tpo.utils.CsvBuilder;

import java.io.FileOutputStream;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {
        CsvBuilder builder = new CsvBuilder(new TaskFunction(), new FileOutputStream("Lab2/task_fun_results.csv"));
        builder.build(-(Math.PI * 5) / 2, Math.PI * 3, 500);

        Function sin = new Sin();
        System.out.println("Sin");
        System.out.println(sin.apply(Math.PI));
        System.out.println(Math.sin(Math.PI));

        Function csc = new Cosec();
        Function csc1 = new Cosec(new Sin() {
            @Override
            public double apply(double value) {
                return Math.sin(value);
            }
        });
        System.out.println("Csc");
        System.out.println(csc.apply(Math.PI));
        System.out.println(csc.apply(-(5 * Math.PI) / 2));
        System.out.println(1 / Math.sin(-(5 * Math.PI) / 2));
        System.out.println("Csc1");
        System.out.println(csc1.apply(Math.PI));
        System.out.println(csc1.apply(-(5 * Math.PI) / 2));
        System.out.println(1 / Math.sin(-(5 * Math.PI) / 2));

        Function ln = new NaturalLogarithm();
        System.out.println("ln");
        System.out.println(ln.apply(Math.PI));
        System.out.println(Math.log(Math.PI));
    }
}
