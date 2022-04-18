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
    private HashTable<String, Human> smallHashTable;

    @BeforeEach
    void setUp() {
        hashTable = new HashTable<>();
        smallHashTable = new HashTable<>(2);
    }

    @ParameterizedTest
    @EmptySource
    @ValueSource(strings = {"Andres", "jorfe", "aaa", "1", "a"})
    public void testPutObjectEntryWithNotExistingKey(String name) {
        Human saved = hashTable.put(name, new Human(name));
        assertAll(
                () -> assertEquals(name, hashTable.get(name).getName()),
                () -> assertNull(saved) //test returned value when key doesn't exist is null
        );
    }

    @ParameterizedTest
    @EmptySource
    @ValueSource(strings = {"Andres", "jorfe", "aaa", "1", "a"})
    public void testPutObjectEntryWithExistingKey(String name) {
        hashTable.put(name, new Human(name));
        Human alreadyExists = hashTable.put(name, new Human("newNameValue"));
        assertAll(
                () -> assertEquals(name, alreadyExists.getName()), //test when the key already exists return old value
                () -> assertEquals("newNameValue", hashTable.get(name).getName()) //test given key has the new value
        );
    }

    @ParameterizedTest
    @EmptySource
    @ValueSource(strings = {"Andres", "jorfe", "aaa", "1", "a"})
    public void testRemoveEntryAndRetrieveRemovedEntryAfterDeletion(String name) {
        hashTable.put(name, new Human(name));
        Human deleted = hashTable.remove(name);
        assertAll(
                () -> assertNull(hashTable.get(name)),
                () -> assertEquals(name, deleted.getName())
        );
    }

    @Test
    public void testRemoveEntryInTheSameLinkedListNode() {
        String[] arr = new String[]{"zelda", "link", "ganon", "zelda1", "link2", "ganon3"};
        for (String s : arr) {
            smallHashTable.put(s, new Human(s));
        }
        for (String s : arr) {
            smallHashTable.remove(s);
            assertNull(smallHashTable.get(s));
        }
    }

    @Test
    public void testRemoveNonExistEntryReturnsNull() {
        assertNull(smallHashTable.remove("aaa"));
    }

    @Test
    public void testHashtableIsEmptyFunction() {
        assertTrue(hashTable.isEmpty());
    }

    @Test
    public void testHashtableSizeFunction() {
        final int amount = 2000;
        for (int i = 0; i < amount; i++) {
            String name = "Name_" + i;
            hashTable.put(name, new Human(name));
        }
        assertEquals(hashTable.size(), amount);
    }

    @Test
    public void testHashtableClearFunction() {
        final int amount = 2000;
        for (int i = 0; i < amount; i++) {
            String name = "Name_" + i;
            hashTable.put(name, new Human(name));
        }
        hashTable.clear();
        assertAll(
                () -> assertEquals(hashTable.size(), 0),
                () -> assertTrue(hashTable.isEmpty())
        );
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
