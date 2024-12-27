## **Unit 3: Exception Handling and Multithreading**

### **Exception Handling**

#### **Key Concepts**:

1. **Definition**:
    
    - Mechanism to handle runtime errors, ensuring normal application flow.
        
2. **Hierarchy**:
    
    - `Throwable` is the superclass of all exceptions.
        
        - **Checked Exceptions**: Subclasses of `Exception` (e.g., `IOException`, `SQLException`).
            
        - **Unchecked Exceptions**: Subclasses of `RuntimeException` (e.g., `NullPointerException`, `ArithmeticException`).
            

#### **Try-Catch Mechanism**:

- Syntax to catch and handle exceptions.
    

```java
try {
    // Code that may throw an exception
} catch (ExceptionType e) {
    // Handle exception
} finally {
    // Code that always executes
}
```

#### **Multiple Catch Blocks**:

- Handle different exceptions separately.
    

```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Arithmetic Exception caught: " + e);
} catch (Exception e) {
    System.out.println("General Exception caught: " + e);
}
```

#### **Throw and Throws**:

1. **throw**:
    
    - Used to explicitly throw an exception.
        

```java
throw new IllegalArgumentException("Invalid input");
```

2. **throws**:
    
    - Declares exceptions that a method might throw.
        

```java
void checkAge(int age) throws IllegalArgumentException {
    if (age < 18) {
        throw new IllegalArgumentException("Underage");
    }
}
```

#### **Custom Exceptions**:

- Create user-defined exceptions by extending the `Exception` class.
    

```java
class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}
```

### **Multithreading**

#### **Key Concepts**:

1. **Definition**:
    
    - Running multiple threads simultaneously for better performance.
        
2. **Thread Lifecycle**:
    
    - States: New, Runnable, Running, Blocked, Terminated.
        
3. **Creating Threads**:
    
    - By extending the `Thread` class.
        
    - By implementing the `Runnable` interface.
        

#### **Creating a Thread**:

1. **Extending Thread Class**:
    

```java
class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

public class TestThread {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();
    }
}
```

2. **Implementing Runnable Interface**:
    

```java
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread is running");
    }
}

public class TestRunnable {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();
    }
}
```

#### **Synchronization**:

- Ensures thread safety by allowing only one thread to access a resource at a time.
    

```java
class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++;
    }

    public int getCount() {
        return count;
    }
}

public class TestSync {
    public static void main(String[] args) {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final count: " + counter.getCount());
    }
}
```

#### **Thread Communication**:

- Methods: `wait()`, `notify()`, `notifyAll()` for thread coordination.
    

```java
class SharedResource {
    synchronized void produce() throws InterruptedException {
        System.out.println("Producing...");
        wait();
        System.out.println("Resumed production");
    }

    synchronized void consume() {
        System.out.println("Consuming...");
        notify();
    }
}

public class TestComm {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        Thread producer = new Thread(() -> {
            try {
                resource.produce();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        Thread consumer = new Thread(resource::consume);

        producer.start();
        consumer.start();
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
Here’s an implementation of Java code covering **Exception Handling** and **Multithreading**:

```java
// Exception Handling and Multithreading in Java

// 1. **Exception Handling**

class TestExceptionHandling {
    public static void main(String[] args) {
        // Try-Catch Mechanism
        try {
            // Code that may throw an exception
            int result = 10 / 0; // Arithmetic Exception
        } catch (ArithmeticException e) {
            System.out.println("Arithmetic Exception caught: " + e);
        } catch (Exception e) {
            System.out.println("General Exception caught: " + e);
        } finally {
            // This block always executes
            System.out.println("Finally block executed.");
        }

        // Throwing an exception
        try {
            throw new IllegalArgumentException("Invalid input");
        } catch (IllegalArgumentException e) {
            System.out.println("Exception thrown: " + e);
        }

        // Using `throws` to declare exceptions in method
        try {
            checkAge(15); // This will throw an exception
        } catch (IllegalArgumentException e) {
            System.out.println("Caught exception in main: " + e);
        }

        // Custom Exception
        try {
            throw new MyException("Custom Exception occurred");
        } catch (MyException e) {
            System.out.println("Caught custom exception: " + e.getMessage());
        }
    }

    // Method to throw an exception using `throws`
    static void checkAge(int age) throws IllegalArgumentException {
        if (age < 18) {
            throw new IllegalArgumentException("Underage");
        }
    }
}

// Custom Exception
class MyException extends Exception {
    public MyException(String message) {
        super(message);
    }
}

// 2. **Multithreading**

class MyThread extends Thread {
    public void run() {
        System.out.println("Thread is running");
    }
}

class TestThread {
    public static void main(String[] args) {
        MyThread thread = new MyThread();
        thread.start();  // Starting the thread
    }
}

// Implementing Runnable interface
class MyRunnable implements Runnable {
    public void run() {
        System.out.println("Runnable thread is running");
    }
}

class TestRunnable {
    public static void main(String[] args) {
        Thread thread = new Thread(new MyRunnable());
        thread.start();  // Starting the thread
    }
}

// 3. **Synchronization**

class Counter {
    private int count = 0;

    public synchronized void increment() {
        count++; // Increment count in a thread-safe manner
    }

    public int getCount() {
        return count;
    }
}

class TestSync {
    public static void main(String[] args) {
        Counter counter = new Counter();

        // Creating two threads that increment the counter
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) counter.increment();
        });

        t1.start();  // Start thread 1
        t2.start();  // Start thread 2

        try {
            t1.join();  // Ensure main thread waits for t1 to finish
            t2.join();  // Ensure main thread waits for t2 to finish
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("Final count: " + counter.getCount());  // Output should be 2000
    }
}

// 4. **Thread Communication**

class SharedResource {
    synchronized void produce() throws InterruptedException {
        System.out.println("Producing...");
        wait();  // Wait for signal to resume production
        System.out.println("Resumed production");
    }

    synchronized void consume() {
        System.out.println("Consuming...");
        notify();  // Notify producer to resume production
    }
}

class TestComm {
    public static void main(String[] args) {
        SharedResource resource = new SharedResource();

        // Producer thread
        Thread producer = new Thread(() -> {
            try {
                resource.produce();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });

        // Consumer thread
        Thread consumer = new Thread(resource::consume);

        producer.start();  // Start producer thread
        consumer.start();  // Start consumer thread
    }
}
```

### Key Concepts Covered:

1. **Exception Handling**:
    
    - **Try-Catch Mechanism**: The `try` block contains code that may throw an exception, and the `catch` block handles the exception. The `finally` block runs regardless of an exception.
    - **Multiple Catch Blocks**: Handles multiple specific exceptions separately.
    - **Throw and Throws**: `throw` is used to explicitly throw an exception, and `throws` is used in method declarations to specify that the method can throw certain exceptions.
    - **Custom Exceptions**: A user-defined exception class (`MyException`) extends `Exception`.
2. **Multithreading**:
    
    - **Thread Creation**: Threads are created by extending the `Thread` class or implementing the `Runnable` interface.
    - **Synchronization**: The `synchronized` keyword is used to make sure that only one thread can access the resource at a time. The `Counter` class ensures thread safety during increments.
    - **Thread Communication**: The `wait()`, `notify()`, and `notifyAll()` methods are used to coordinate the activities of threads. The producer-consumer example demonstrates this communication.

