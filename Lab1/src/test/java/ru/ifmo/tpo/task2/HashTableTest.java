package ru.ifmo.tpo.task2;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.EmptySource;
import org.junit.jupiter.params.provider.NullSource;
import org.junit.jupiter.params.provider.ValueSource;
import ru.ifmo.tpo.task3.Human;

import static org.junit.jupiter.api.Assertions.*;

public class HashTableTest {
    private HashTable<String, Human> hashTable;

    @BeforeEach
    void setUp() {
        hashTable = new HashTable<>();
    }

    @ParameterizedTest
    @EmptySource
    @ValueSource(strings = {"Andres", "jorfe", "aaa", "1", "a"})
    public void testPutObjectEntryWithNotExistingAndExistingKey(String name) {
        Human saved = hashTable.put(name, new Human(name));
        assertEquals(name, hashTable.get(name).getName());
        //test returned value when key doesn't exist is null
        assertNull(saved);
        //test when the key already exists return old value
        Human alreadyExists = hashTable.put(name, new Human("newNameValue"));
        assertEquals(name, alreadyExists.getName());
        //test given key has the new value
        assertEquals("newNameValue", hashTable.get(name).getName());
    }

    @ParameterizedTest
    @EmptySource
    @ValueSource(strings = {"Andres", "jorfe", "aaa", "1", "a"})
    public void testRemoveEntryAndRetrieveRemovedEntryAfterDeletion(String name) {
        hashTable.put(name, new Human(name));
        assertEquals(name, hashTable.get(name).getName());
        Human deleted = hashTable.remove(name);
        assertNull(hashTable.get(name));
        assertEquals(name, deleted.getName());
    }

    @Test
    public void testClearHashtable() {
        final int amount = 2000;
        for (int i = 0; i < amount; i++) {
            String name = "Name_" + i;
            hashTable.put(name, new Human(name));
        }
        assertEquals(hashTable.size(), amount);
        hashTable.clear();
        assertEquals(hashTable.size(), 0);
        assertTrue(hashTable.isEmpty());
        for (int i = 0; i < amount; i++) {
            assertNull(hashTable.get("Name_" + i));
        }
    }

    @ParameterizedTest
    @NullSource
    public void testAddNullKeyThrowsIllegalArgumentException(String input) {
        assertThrows(IllegalArgumentException.class, () -> hashTable.put(input, new Human("aaa")));
    }

    @ParameterizedTest
    @NullSource
    public void testAddNullValueThrowsIllegalArgumentException(Human input) {
        assertThrows(IllegalArgumentException.class, () -> hashTable.put("a", input));
    }
}
