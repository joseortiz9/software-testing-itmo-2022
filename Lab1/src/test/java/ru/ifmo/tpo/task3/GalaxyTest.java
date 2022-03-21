package ru.ifmo.tpo.task3;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

public class GalaxyTest {
    private Galaxy galaxy;

    @BeforeEach
    void setUp() {
        this.galaxy = new Galaxy();
    }

    @Test
    void testAddAndRemovePlacesWithThrowingIllegalArgumentException() {
        Class<IllegalArgumentException> exception = IllegalArgumentException.class;
        Place place = new Place(null);
        assertAll(
                () -> assertDoesNotThrow(() -> galaxy.addPlace(place)),
                () -> assertThrows(exception, () -> galaxy.addPlace(place)),
                () -> assertDoesNotThrow(() -> galaxy.removePlace(place)),
                () -> assertThrows(exception, () -> galaxy.removePlace(place))
        );
    }
}
