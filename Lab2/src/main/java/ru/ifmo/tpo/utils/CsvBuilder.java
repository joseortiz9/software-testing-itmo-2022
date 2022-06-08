package ru.ifmo.tpo.utils;

import ru.ifmo.tpo.Function;

import java.io.IOException;
import java.io.OutputStream;

public class CsvBuilder {
    private final Function function;
    private final OutputStream outputStream;

    public CsvBuilder(Function function, OutputStream outputStream) {
        this.function = function;
        this.outputStream = outputStream;
    }

    public void build(double from, double to, int parts) throws IOException {
        char delimiter = ',';
        StringBuilder builder = new StringBuilder();
        builder.append("x").append(delimiter).append("f(x)\n");
        for (double x = from; x <= to; x += (to - from) / parts) {
            builder.append(x).append(delimiter).append(function.apply(x)).append("\n");
        }

        outputStream.write(builder.toString().getBytes());
    }
}
