package ru.ifmo.tpo.task2;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import ru.ifmo.tpo.task3.Human;

public class HashTableTest {
    private HashTable<String, Human> hashTableObject;
    private HashTable<Integer, String> hashTableSimple;

    @BeforeEach
    void setUp() {
        hashTableObject = new HashTable<>();
        hashTableSimple = new HashTable<>();
    }


}
