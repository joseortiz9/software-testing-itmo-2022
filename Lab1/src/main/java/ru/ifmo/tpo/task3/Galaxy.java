package ru.ifmo.tpo.task3;

import java.util.Collection;
import java.util.LinkedList;
import java.util.List;

public class Galaxy {
    private Human president;
    private final List<Place> places = new LinkedList<>();

    public Galaxy(Human president) {
        this.president = president;
    }

    public Galaxy(Human president, Collection<Place> places) {
        this.president = president;
        this.places.addAll(places);
    }

    public Human getPresident() {
        return president;
    }
    public void setPresident(Human president) {
        this.president = president;
    }

    public int numberOfPlaces() {
        return places.size();
    }

    public List<Place> getPlaces() {
        return places;
    }

    public boolean isEmpty() {
        return places.isEmpty();
    }

    public void addPlace(Place place) {
        if (places.contains(place)) {
            throw new IllegalArgumentException("Place already present in galaxy");
        } else {
            this.places.add(place);
        }
    }

    public void removeMember(Place place) {
        if (!places.contains(place)) {
            throw new IllegalArgumentException("Place not present in galaxy");
        } else {
            this.places.remove(place);
        }
    }
}
