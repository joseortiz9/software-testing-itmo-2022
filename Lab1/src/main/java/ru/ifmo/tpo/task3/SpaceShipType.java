package ru.ifmo.tpo.task3;

public enum SpaceShipType {
    ALFA("alfa"),
    DELTA("delta"),
    BETA("beta");

    private final String message;

    SpaceShipType(String message) {
        this.message = message;
    }
}
