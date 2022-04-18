package ru.ifmo.tpo.task2;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class HashTable<K, V> {
    private final static float LOAD_FACTOR_THRESHOLD = 0.7f;

    private List<HashNode<K, V>> bucketsArr; // bucketArray is used to store array of chains
    private int numBuckets; // capacity of array list
    private int size; // number of key value pairs in hash table or number of hash nodes in a HashTable

    public HashTable() {
        this(10); // default capacity
    }

    public HashTable(int initialCapacity) {
        if (initialCapacity < 0) throw new IllegalArgumentException("Illegal Capacity: "+ initialCapacity);
        this.bucketsArr = new ArrayList<>();
        this.numBuckets = initialCapacity;
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

    private int hashCode(K key) {
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
    public V put(K key, V value) {
        if(key == null || value == null) {
            throw new IllegalArgumentException("Key or Value can not be null");
        }
        // Find head of chain for given key
        int bucketIndex = getBucketIndex(key);
        HashNode<K, V> head = bucketsArr.get(bucketIndex);

        // Check if key is already present
        while (head != null) {
            if (head.key.equals(key)) {
                V old = head.value;
                head.value = value;
                return old;
            }
            head = head.next;
        }

        // Insert key in chain
        size++;
        head = bucketsArr.get(bucketIndex);
        // (key, value) -> null
        HashNode<K, V> newNode = new HashNode<>(key, value);
        newNode.next = head;
        bucketsArr.set(bucketIndex, newNode);

        // FOR TESTING PORPOISES THIS BLOCK FOR DOUBLE TABLE SIZE IS OMITTED
        // If load factor goes beyond threshold, then double hash table size
        /* if ((1.0 * size) / numBuckets >= LOAD_FACTOR_THRESHOLD) {
            List<HashNode<K, V>> temp = bucketsArr;
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
        }*/

        return null;
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
     * Clears this hashtable so that it contains no keys.
     */
    public void clear() {
        this.bucketsArr = new ArrayList<>();
        size = 0;
        // Create empty chains
        for (int i = 0; i < numBuckets; i++)
            bucketsArr.add(null);
    }

    @Override
    public String toString() {
        StringBuilder stringRepresentation = new StringBuilder();
        stringRepresentation.append("HashTable{");
        stringRepresentation.append("numBuckets=").append(numBuckets).append(',');
        stringRepresentation.append("size=").append(size).append(',');
        stringRepresentation.append("data={");

        for (int i = 0; i < bucketsArr.size(); i++) {
            HashNode<K, V> node = bucketsArr.get(i);
            if (node == null) {
                stringRepresentation.append("[").append(i).append("] => (null); ");
            }
            while (node != null) {
                stringRepresentation.append("[").append(i).append("] => (")
                        .append(node.key).append(" => ")
                        .append(node.value).append("); ");
                node = node.next;
            }
        }

        stringRepresentation.append("}}");
        return stringRepresentation.toString();
    }

    /**
     * A node of chains represented by a linked list
     */
    private static class HashNode<K, V> {
        final K key;
        V value;
        HashNode<K, V> next; // Reference to next node in the chain

        public HashNode(K key, V value) {
            this.key = key;
            this.value = value;
        }
    }
}
