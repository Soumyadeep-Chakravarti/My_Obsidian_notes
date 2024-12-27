## **Unit 1: Java Introduction and Flow Control**

### **Java Basics**

#### **Java Environment**:

- **JDK (Java Development Kit)**:
    
    - A software development environment used for developing Java applications.
        
    - Includes the Java Compiler (`javac`), libraries, and tools.
        
- **JRE (Java Runtime Environment)**:
    
    - Provides libraries, Java Virtual Machine (JVM), and other components required to run Java programs.
        
    - Does not include development tools like a compiler.
        
- **JVM (Java Virtual Machine)**:
    
    - Converts Java bytecode into machine-readable code.
        
    - Enables Java’s platform-independent nature (Write Once, Run Anywhere).
        

#### **Key Features of Java**:

1. **Platform Independent**:
    
    - Code is compiled into bytecode, which can run on any machine with a JVM.
        
2. **Object-Oriented**:
    
    - Focuses on objects and their interactions.
        
    - Key principles include encapsulation, inheritance, abstraction, and polymorphism.
        
3. **Robust**:
    
    - Features like garbage collection, exception handling, and type checking ensure reliable code execution.
        
4. **Secure**:
    
    - Includes runtime security checks and supports cryptography.
        
5. **Multithreaded**:
    
    - Supports concurrent execution of two or more threads.
        
6. **Portable**:
    
    - Java bytecode is platform-agnostic.
        

#### **Java Syntax**:

- Entry point: `public static void main(String[] args)`.
    
- Example program to print "Hello, World!":
    

```Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### **Java Flow Control**

#### **Conditional Statements**:

1. **if-else Statement**:
    
    - Executes a block of code if a condition is true; otherwise, executes another block.
        

```Java
if (condition) {
    // Executes if condition is true
} else {
    // Executes if condition is false
}
```

2. **Nested if Statement**:
    
    - An `if` statement inside another `if` statement.
        

```Java
if (condition1) {
    if (condition2) {
        // Executes if both conditions are true
    }
}
```

3. **switch Statement**:
    
    - Evaluates an expression and executes the matching case block.
        

```Java
switch (variable) {
    case value1:
        // Executes for value1
        break;
    case value2:
        // Executes for value2
        break;
    default:
        // Executes if no cases match
}
```

#### **Loops in Java**:

1. **for Loop**:
    
    - Executes a block of code for a fixed number of iterations.
        

```Java
for (initialization; condition; increment/decrement) {
    // code
}
```

2. **while Loop**:
    
    - Executes a block of code as long as the condition is true.
        

```Java
while (condition) {
    // code
}
```

3. **do-while Loop**:
    
    - Executes the block at least once, then repeats as long as the condition is true.
        

```Java
do {
    // code
} while (condition);
```

4. **Enhanced for Loop**:
    
    - Iterates over arrays or collections.
        

```Java
for (Type item : collection) {
    // code
}
```

#### **Jump Statements**:

1. **break**:
    
    - Exits the current loop or `switch` statement.
        
2. **continue**:
    
    - Skips the current iteration and continues with the next iteration.
        
3. **return**:
    
    - Exits from the current method and optionally returns a value.
        

---

### References

1. Herbert Schildt, "Java The Complete Reference", 11th Edition.
    
2. Deitel and Deitel, "Java How to Program", 10th Edition.
    
3. Cay S. Horstmann, "Core Java Volume I: Fundamentals", 8th Edition.

---

### code
A Java code that covers the basics of Java, explaining key concepts like variables, data types, loops, conditionals, methods, classes, and objects
```java
// Basic Java Program to demonstrate key concepts

// Define a class called BasicJava
public class BasicJava {

    // Main method is the entry point of the program
    public static void main(String[] args) {

        // Variables and Data Types
        int number = 10; // Integer data type
        double decimal = 3.14; // Floating-point data type
        char letter = 'A'; // Character data type
        String greeting = "Hello, World!"; // String data type
        boolean isJavaFun = true; // Boolean data type

        // Print the values of the variables
        System.out.println("Number: " + number);
        System.out.println("Decimal: " + decimal);
        System.out.println("Letter: " + letter);
        System.out.println("Greeting: " + greeting);
        System.out.println("Is Java Fun? " + isJavaFun);

        // Conditional Statement (if-else)
        if (number > 5) {
            System.out.println("The number is greater than 5.");
        } else {
            System.out.println("The number is not greater than 5.");
        }

        // Loop (for loop)
        System.out.println("Counting from 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }

        // Loop (while loop)
        int counter = 0;
        System.out.println("Counting from 5 to 1 using while loop:");
        while (counter < 5) {
            System.out.println(5 - counter);
            counter++;
        }

        // Method Call
        int sum = addTwoNumbers(5, 10); // Calling a method to add two numbers
        System.out.println("The sum of 5 and 10 is: " + sum);

        // Object and Class Usage
        Person person = new Person("John", 25); // Creating an object of class Person
        person.introduce(); // Calling a method on the object

        // Arrays
        int[] numbersArray = {1, 2, 3, 4, 5}; // Array declaration and initialization
        System.out.println("Array elements:");
        for (int num : numbersArray) {
            System.out.println(num);
        }
    }

    // Method to add two numbers
    public static int addTwoNumbers(int a, int b) {
        return a + b;
    }
}

// Class to represent a Person
class Person {
    String name; // Instance variable for name
    int age; // Instance variable for age

    // Constructor to initialize the person object
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Method to introduce the person
    public void introduce() {
        System.out.println("Hi, I am " + name + " and I am " + age + " years old.");
    }
}

```

### Explanation of Concepts:

1. **Variables and Data Types**:  
    Java supports various data types like `int`, `double`, `char`, `String`, and `boolean`. These are used to store values that can be manipulated later in the program.
    
2. **Conditional Statements (if-else)**:  
    The `if-else` statement is used for decision-making, where the program checks whether a condition is true or false, and executes the appropriate block of code.
    
3. **Loops**:  
    Loops like `for` and `while` are used to repeat a block of code multiple times. In this example, a `for` loop is used to count from 1 to 5, and a `while` loop counts down from 5 to 1.
    
4. **Methods**:  
    Methods are blocks of code that perform specific tasks and can be called with arguments. The method `addTwoNumbers` takes two integers as parameters and returns their sum.
    
5. **Classes and Objects**:  
    A `class` is a blueprint for objects. An object is an instance of a class. The `Person` class has two instance variables (`name` and `age`) and a method `introduce` to print details about the person.
    
6. **Arrays**:  
    An array is a collection of elements of the same data type. In the example, an integer array is used to store a sequence of numbers.
    

### Output:

```text
Number: 10
Decimal: 3.14
Letter: A
Greeting: Hello, World!
Is Java Fun? true
The number is greater than 5.
Counting from 1 to 5:
1
2
3
4
5
Counting from 5 to 1 using while loop:
5
4
3
2
1
The sum of 5 and 10 is: 15
Hi, I am John and I am 25 years old.
Array elements:
1
2
3
4
5

```