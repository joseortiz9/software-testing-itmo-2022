package ru.ifmo.tpo.task3;

public enum SpaceShipState {
    FLYING("flying"),
    STANDING("standing"),
    DAMAGED("damaged");

    private final String message;

    SpaceShipState(String message) {
        this.message = message;
    }
}
