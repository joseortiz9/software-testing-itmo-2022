package ru.ifmo.tpo.task3;

public class SpaceShip {
    private final SpaceShipType type;
    private Human captain;
    private SpaceShipState state;
    private EngineType engineType;
    private Place location;

    public SpaceShip() {
        this.engineType = EngineType.ION;
        this.type = SpaceShipType.ALFA;
        this.state = SpaceShipState.STANDING;
    }

    public SpaceShip(Human captain) {
        this();
        this.captain = captain;
    }

    public SpaceShip(Human captain, Place location) {
        this(captain);
        this.location = location;
    }

    public void setCaptain(Human captain) {
        if (this.getState() != SpaceShipState.STANDING) {
            throw new IllegalStateException("Could not change captain, cause ship isn't on the ground");
        }
        this.captain = captain;
    }

    public void setEngineType(EngineType engineType) {
        if (this.getState() != SpaceShipState.STANDING) {
            throw new IllegalStateException("Could not set engine, cause ship isn't on the ground");
        }
        this.engineType = engineType;
    }

    public void fix() {
        if (this.getState() != SpaceShipState.DAMAGED) {
            throw new IllegalStateException("Spaceship is not damaged");
        } else {
            this.state = SpaceShipState.STANDING;
        }
    }

    public void fly() {
        if (this.getState() == SpaceShipState.FLYING) {
            throw new IllegalStateException("Spaceship is already flying");
        } else if (this.getState() == SpaceShipState.DAMAGED) {
            throw new IllegalStateException("Spaceship can not fly when is damaged");
        } else if (this.getCaptain() == null) {
            throw new IllegalStateException("Spaceship cannot fly without a captain");
        }
        this.state = SpaceShipState.FLYING;
    }

    public void land() {
        if (this.getState() == SpaceShipState.STANDING)
            throw new IllegalStateException("Spaceship is already on the ground");
        this.state = SpaceShipState.STANDING;
    }

    public void flyToPlace(Place newLocation) {
        this.fly();
        this.location = newLocation;
        this.land();
    }

    public EngineType getEngineType() {
        return engineType;
    }
    public SpaceShipType getType() {
        return type;
    }
    public SpaceShipState getState() {
        return state;
    }
    public Place getLocation() {
        return location;
    }
    public Human getCaptain() {
        return captain;
    }
}
