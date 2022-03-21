package ru.ifmo.tpo.task3;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EnumSource;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class SpaceShipTest {
    private SpaceShip ship;
    private Human captain;
    private Galaxy galaxy;

    @BeforeEach
    void setUp() {
        this.ship = new SpaceShip();
        this.captain = new Human("Зафод Библброкс");
        List<Place> places = new ArrayList<>();
        places.add(new Place("Damogran star"));
        places.add(new Place("Damogran seas"));
        this.galaxy = new Galaxy(captain, places);
    }


    @ParameterizedTest(name = "engineType = {0}")
    @EnumSource(EngineType.class)
    void testChangeEngineType(EngineType engineType) {
        ship.setEngineType(engineType);
        assertEquals(engineType, ship.getEngineType());
    }

    @Test
    void testFixMethodWithoutThrowingAnyExceptionsAndWith() {
        var exception = IllegalStateException.class;
        assertAll(
                () -> assertThrows(exception, () -> ship.fix()),
                () -> assertDoesNotThrow(() -> {
                    ship.reportDamage();
                    ship.fix();
                }),
                () -> assertThrows(exception, () -> {
                    ship.reportDamage();
                    ship.fly();
                    ship.fix();
                })
        );
    }

    @Test
    void testLandMethodWithoutThrowingAnyExceptionsAndWith() {
        var exception = IllegalStateException.class;
        assertAll(
                () -> assertThrows(exception, () -> ship.land()),
                () -> assertDoesNotThrow(() -> {
                    ship.setCaptain(captain);
                    ship.fly();
                    ship.land();
                })
        );
    }

    @Test
    public void testChangeEngineTypeAndChangeCaptainWhileFlyingThrowsException() {
        Class<IllegalStateException> exception = IllegalStateException.class;
        ship.setCaptain(captain);
        ship.fly();
        assertAll(
                () -> assertThrows(exception, () -> ship.setCaptain(new Human("Wrong captain"))),
                () -> assertThrows(exception, () -> ship.setEngineType(EngineType.THERMAL)),
                () -> assertThrows(exception, () -> ship.fly())
        );
    }

    @Test
    public void testFlyMethodWithNoCaptainAndDamagedState() {
        Class<IllegalStateException> exception = IllegalStateException.class;
        assertAll(
                () -> assertThrows(exception, () -> ship.fly()),
                () -> assertThrows(exception, () -> {
                    ship.reportDamage();
                    ship.fly();
                })
        );
    }

    @Test
    void testFlyToPlaceMethod() {
        Place oldPlace = galaxy.getPlaces().get(0);
        Place newPlace = galaxy.getPlaces().get(1);
        ship = new SpaceShip(captain, oldPlace);
        assertEquals(ship.getLocation().getName(), oldPlace.getName());
        ship.flyToPlace(newPlace);
        assertEquals(ship.getState(), SpaceShipState.STANDING);
        assertEquals(ship.getLocation().getName(), newPlace.getName());
    }
}
