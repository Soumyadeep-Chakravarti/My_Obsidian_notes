## **Unit 4: Java Collections and I/O Streams**

### **Java Collections Framework**

#### **Key Concepts**:

1. **Definition**:
    
    - A set of classes and interfaces to store and manipulate groups of objects.
        
    - Includes data structures like lists, sets, and maps.
        
2. **Hierarchy**:
    
    - Interfaces: `Collection`, `List`, `Set`, `Queue`, `Map`.
        
    - Classes: `ArrayList`, `LinkedList`, `HashSet`, `TreeSet`, `HashMap`, `TreeMap`.
        

#### **Common Collection Classes**:

1. **ArrayList**:
    
    - Dynamic array that grows as needed.
        
    - Allows duplicate elements.
        

```java
import java.util.ArrayList;

public class TestArrayList {
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        for (String fruit : list) {
            System.out.println(fruit);
        }
    }
}
```

2. **HashSet**:
    
    - No duplicate elements.
        
    - Unordered collection.
        

```java
import java.util.HashSet;

public class TestHashSet {
    public static void main(String[] args) {
        HashSet<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(3);

        for (int num : set) {
            System.out.println(num);
        }
    }
}
```

3. **HashMap**:
    
    - Key-value pairs.
        
    - Allows one null key and multiple null values.
        

```java
import java.util.HashMap;

public class TestHashMap {
    public static void main(String[] args) {
        HashMap<String, Integer> map = new HashMap<>();
        map.put("Alice", 25);
        map.put("Bob", 30);

        for (String key : map.keySet()) {
            System.out.println(key + ": " + map.get(key));
        }
    }
}
```

### **Iterating Collections**:

1. **Enhanced For-Loop**:
    
    - Simplified iteration.
        
2. **Iterator**:
    
    - Provides methods like `hasNext()` and `next()`.
        

```java
Iterator<String> it = list.iterator();
while (it.hasNext()) {
    System.out.println(it.next());
}
```

---

### **Java I/O Streams**

#### **Key Concepts**:

1. **Definition**:
    
    - I/O Streams provide a way to read and write data.
        
    - Two types: Byte Streams and Character Streams.
        
2. **Byte Streams**:
    
    - Used for binary data.
        
    - Classes: `FileInputStream`, `FileOutputStream`.
        

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;

public class TestByteStream {
    public static void main(String[] args) throws Exception {
        FileOutputStream fout = new FileOutputStream("test.txt");
        fout.write("Hello, World!".getBytes());
        fout.close();

        FileInputStream fin = new FileInputStream("test.txt");
        int i;
        while ((i = fin.read()) != -1) {
            System.out.print((char) i);
        }
        fin.close();
    }
}
```

3. **Character Streams**:
    
    - Used for text data.
        
    - Classes: `FileReader`, `FileWriter`.
        

```java
import java.io.FileReader;
import java.io.FileWriter;

public class TestCharStream {
    public static void main(String[] args) throws Exception {
        FileWriter writer = new FileWriter("output.txt");
        writer.write("Hello, File!");
        writer.close();

        FileReader reader = new FileReader("output.txt");
        int i;
        while ((i = reader.read()) != -1) {
            System.out.print((char) i);
        }
        reader.close();
    }
}
```

---

### References

1. Herbert Schildt, "Java The Complete Reference", 11th Edition.
    
2. Deitel and Deitel, "Java How to Program", 10th Edition.
    
3. Cay S. Horstmann, "Core Java Volume I: Fundamentals", 8th Edition.

---
### Code
 Java code that demonstrates concepts from **Java Collections Framework** and **Java I/O Streams**:

```java
// Java Collections Framework and I/O Streams

// 1. **Java Collections Framework**

import java.util.ArrayList;
import java.util.HashSet;
import java.util.HashMap;
import java.util.Iterator;

public class TestCollections {

    public static void main(String[] args) {

        // ArrayList: A dynamic array that grows as needed
        ArrayList<String> list = new ArrayList<>();
        list.add("Apple");
        list.add("Banana");
        list.add("Cherry");

        System.out.println("ArrayList contents:");
        for (String fruit : list) {
            System.out.println(fruit);  // Using enhanced for-loop
        }

        // HashSet: No duplicate elements, unordered collection
        HashSet<Integer> set = new HashSet<>();
        set.add(1);
        set.add(2);
        set.add(3);

        System.out.println("\nHashSet contents:");
        for (int num : set) {
            System.out.println(num);  // Using enhanced for-loop
        }

        // HashMap: Key-value pairs, allows one null key and multiple null values
        HashMap<String, Integer> map = new HashMap<>();
        map.put("Alice", 25);
        map.put("Bob", 30);

        System.out.println("\nHashMap contents:");
        for (String key : map.keySet()) {
            System.out.println(key + ": " + map.get(key));  // Using enhanced for-loop
        }

        // Iterating a collection using Iterator
        Iterator<String> it = list.iterator();
        System.out.println("\nIterator iteration over ArrayList:");
        while (it.hasNext()) {
            System.out.println(it.next());
        }
    }
}

// 2. **Java I/O Streams**

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;

public class TestIOStreams {

    public static void main(String[] args) throws Exception {
        // Byte Stream: Using FileInputStream and FileOutputStream for binary data
        FileOutputStream fout = new FileOutputStream("test.txt");
        fout.write("Hello, World!".getBytes());  // Writing bytes to file
        fout.close();

        FileInputStream fin = new FileInputStream("test.txt");
        int i;
        System.out.println("\nByte Stream reading:");
        while ((i = fin.read()) != -1) {  // Reading byte by byte
            System.out.print((char) i);  // Converting byte to character and printing
        }
        fin.close();

        // Character Stream: Using FileReader and FileWriter for text data
        FileWriter writer = new FileWriter("output.txt");
        writer.write("Hello, File!");  // Writing text to file
        writer.close();

        FileReader reader = new FileReader("output.txt");
        System.out.println("\nCharacter Stream reading:");
        while ((i = reader.read()) != -1) {  // Reading character by character
            System.out.print((char) i);  // Printing characters
        }
        reader.close();
    }
}
```

### Key Concepts Covered:

1. **Java Collections Framework**:
    
    - **ArrayList**: A dynamic array that grows as needed and allows duplicate elements.
    - **HashSet**: A collection that does not allow duplicate elements and is unordered.
    - **HashMap**: A collection that stores key-value pairs, where each key is unique.
    - **Iterator**: An interface that provides methods like `hasNext()` and `next()` to iterate over a collection.
2. **Java I/O Streams**:
    
    - **Byte Streams**: Used for reading and writing binary data. `FileInputStream` and `FileOutputStream` are used for this purpose.
    - **Character Streams**: Used for reading and writing text data. `FileReader` and `FileWriter` are used for this purpose.
