package ru.ifmo.tpo.task2;

import java.util.ArrayList;
import java.util.Objects;

public class HashTable<K, V> {
    private final static float LOAD_FACTOR_THRESHOLD = 0.7f;

    private ArrayList<HashNode<K, V>> bucketsArr; // bucketArray is used to store array of chains
    private int numBuckets; // capacity of array list
    private int size; // number of key value pairs in hash table or number of hash nodes in a HashTable

    public HashTable() {
        this(10); // default capacity
    }

    public HashTable(int capacity) {
        this.bucketsArr = new ArrayList<>();
        this.numBuckets = capacity;
        size = 0;
        // Create empty chains
        for (int i = 0; i < numBuckets; i++)
            bucketsArr.add(null);
    }

    public int size() {
        return size;
    }

    public boolean isEmpty() {
        return size() == 0;
    }

    private final int hashCode(K key) {
        return Objects.hashCode(key);
    }

    /**
     * Hash function to find index for a given key
     *
     * @return index - represents the index of the given key inside the buckets array, is a small number
     */
    private int getBucketIndex(K key) {
        int hashCode = hashCode(key);
        int index = hashCode % numBuckets;
        // key.hashCode() could be negative.
        index = index < 0 ? index * -1 : index;
        return index;
    }

    /**
     * Retrieve value on the given key
     */
    public V get(K key) {
        if (key == null) throw new IllegalArgumentException("Key can not be null");
        // Find head of chain for given key
        int bucketIndex = getBucketIndex(key);

        HashNode<K, V> head = bucketsArr.get(bucketIndex);

        // Search key in chain
        while (head != null) {
            if (head.key.equals(key))
                return head.value;
            head = head.next;
        }
        // If key not found
        return null;
    }

    /**
     * Add/put value represented with the given key
     */
    public void put(K key, V value) {
        if(key == null || value == null) {
            throw new IllegalArgumentException("Key or Value can not be null");
        }
        // Find head of chain for given key
        int bucketIndex = getBucketIndex(key);;
        HashNode<K, V> head = bucketsArr.get(bucketIndex);

        // Check if key is already present
        while (head != null) {
            if (head.key.equals(key)) {
                head.value = value;
                return;
            }
            head = head.next;
        }

        // Insert key in chain
        size++;
        head = bucketsArr.get(bucketIndex);
        // (key, value) -> null
        HashNode<K, V> newNode = new HashNode<K, V>(key, value);
        newNode.next = head;
        bucketsArr.set(bucketIndex, newNode);

        // If load factor goes beyond threshold, then double hash table size
        if ((1.0 * size) / numBuckets >= LOAD_FACTOR_THRESHOLD) {
            ArrayList<HashNode<K, V>> temp = bucketsArr;
            bucketsArr = new ArrayList<>();
            numBuckets = 2 * numBuckets;
            size = 0;
            for (int i = 0; i < numBuckets; i++)
                bucketsArr.add(null);

            for (HashNode<K, V> headNode : temp) {
                while (headNode != null) {
                    put(headNode.key, headNode.value);
                    headNode = headNode.next;
                }
            }
        }
    }

    /**
     * Remove value on the given key
     */
    public V remove(K key) {
        if (key == null) throw new IllegalArgumentException("Key can not be null");
        // Apply hash function to find index for given key
        int bucketIndex = getBucketIndex(key);
        // Get head of chain
        HashNode<K, V> head = bucketsArr.get(bucketIndex);

        // Search for key in its chain
        HashNode<K, V> prev = null;
        while (head != null) {
            // If Key found
            if (head.key.equals(key))
                break;
            // Else keep moving in chain
            prev = head;
            head = head.next;
        }

        // If key was not there
        if (head == null)
            return null;

        // Reduce size
        size--;

        // Remove key
        if (prev != null)
            prev.next = head.next;
        else
            bucketsArr.set(bucketIndex, head.next);

        return head.value;
    }


    /**
     * A node of chains represented by a linked list
     */
    private class HashNode<K, V> {
        K key;
        V value;
        HashNode<K, V> next; // Reference to next node in the chain

        public HashNode(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
}