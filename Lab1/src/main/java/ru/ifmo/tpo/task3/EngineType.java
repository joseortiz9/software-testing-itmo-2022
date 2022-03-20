package ru.ifmo.tpo.task3;

public enum EngineType {
    ION("ionic"),
    ELECTRICAL("electric"),
    THERMAL("thermal");

    private final String message;

    EngineType(String message) {
        this.message = message;
    }
}
