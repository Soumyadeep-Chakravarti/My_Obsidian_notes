## **Unit 2: Java Object-Oriented Programming**

### **OOP Basics**

#### **Key Principles**:

1. **Encapsulation**:
    
    - Hiding the internal state of an object and requiring all interactions to be performed through methods.
        
    - Achieved using private fields and public getter/setter methods.
        

```Java
class Student {
    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
```

2. **Inheritance**:
    
    - Enables a class (child) to inherit fields and methods from another class (parent).
        
    - Syntax: `class Child extends Parent`.
        

```Java
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}
```

3. **Polymorphism**:
    
    - Ability to process objects differently based on their data type or class.
        
    - Achieved using method overloading (compile-time) and overriding (runtime).
        

```Java
// Method Overloading
class Calculator {
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

// Method Overriding
class Parent {
    void display() {
        System.out.println("Parent method");
    }
}

class Child extends Parent {
    @Override
    void display() {
        System.out.println("Child method");
    }
}
```

4. **Abstraction**:
    
    - Hiding implementation details while exposing only the functionality.
        
    - Achieved using abstract classes and interfaces.
        

```Java
// Abstract Class
abstract class Shape {
    abstract void draw();
}

class Circle extends Shape {
    void draw() {
        System.out.println("Drawing Circle");
    }
}

// Interface
interface Drawable {
    void draw();
}

class Rectangle implements Drawable {
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}
```

### **Classes and Objects**

- **Class**: Blueprint for creating objects.
    
- **Object**: Instance of a class.
    

```Java
class Car {
    String brand;
    int speed;

    void displayInfo() {
        System.out.println("Brand: " + brand + ", Speed: " + speed);
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.brand = "Toyota";
        car.speed = 120;
        car.displayInfo();
    }
}
```

### **Advanced Concepts**

1. **this Keyword**:
    
    - Refers to the current object.
        
    - Resolves ambiguity when instance variables and method parameters have the same name.
        

```Java
class Box {
    int width;

    Box(int width) {
        this.width = width;
    }
}
```

2. **final Keyword**:
    
    - Used to declare constants, prevent inheritance, or prevent method overriding.
        

```Java
final class Constants {
    final int VALUE = 42;
}
```

3. **Nested and Inner Classes**:
    
    - A class defined within another class.
        
    - Can access private members of the enclosing class.
        

```Java
class Outer {
    private String message = "Hello from Outer class";

    class Inner {
        void display() {
            System.out.println(message);
        }
    }
}

public class Test {
    public static void main(String[] args) {
        Outer.Inner inner = new Outer().new Inner();
        inner.display();
    }
}
```

4. **Enums**:
    
    - Represents a fixed set of constants.
        

```Java
enum Direction {
    NORTH, SOUTH, EAST, WEST;
}

public class TestEnum {
    public static void main(String[] args) {
        Direction dir = Direction.NORTH;
        System.out.println("Direction: " + dir);
    }
}
```

5. **Java Reflection**:
    
    - Inspecting or modifying runtime behavior of classes, methods, and fields.
        

```Java
import java.lang.reflect.*;

public class ReflectionTest {
    public static void main(String[] args) throws Exception {
        Class<?> clazz = Class.forName("java.util.ArrayList");
        Method[] methods = clazz.getDeclaredMethods();
        for (Method method : methods) {
            System.out.println(method.getName());
        }
    }
}
```

---

### References

1. Herbert Schildt, "Java The Complete Reference", 11th Edition.
    
2. Deitel and Deitel, "Java How to Program", 10th Edition.
    
3. Cay S. Horstmann, "Core Java Volume I: Fundamentals", 8th Edition.


---

### code
This code demonstrates **Encapsulation**, **Inheritance**, **Polymorphism**, **Abstraction**, **the `this` keyword**, **the `final` keyword**, **Nested/Inner Classes**, **Enums**, and **Java Reflection**:

```java
import java.lang.reflect.Method;
// OOP Concepts Implementation in Java

// 1. **Encapsulation**
class Student {
    private String name; // Private field

    // Getter and Setter methods for encapsulation
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

// 2. **Inheritance** and **Polymorphism** (Method Overriding)
class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }
}

// 3. **Polymorphism** (Method Overloading)
class Calculator {
    // Overloading add method with different parameter types
    int add(int a, int b) {
        return a + b;
    }

    double add(double a, double b) {
        return a + b;
    }
}

// 4. **Abstraction** (Abstract Class and Interface)
abstract class Shape {
    abstract void draw(); // Abstract method to be implemented
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing Circle");
    }
}

interface Drawable {
    void draw(); // Interface method
}

class Rectangle implements Drawable {
    @Override
    public void draw() {
        System.out.println("Drawing Rectangle");
    }
}

// 5. **Using the `this` Keyword**
class Box {
    int width;

    // Constructor to initialize width
    Box(int width) {
        this.width = width; // Resolves ambiguity between instance variable and parameter
    }

    // Method to display box width
    void display() {
        System.out.println("Box width: " + this.width);
    }
}

// 6. **Using the `final` Keyword** (to prevent inheritance and method overriding)
final class Constants {
    final int VALUE = 42; // Constant value
}

// 7. **Nested and Inner Classes**
class Outer {
    private String message = "Hello from Outer class";

    class Inner {
        void display() {
            System.out.println(message); // Inner class can access outer class members
        }
    }
}

// 8. **Enums** (Fixed set of constants)
enum Direction {
    NORTH, SOUTH, EAST, WEST;
}

public class OOPExample {
    public static void main(String[] args) {
        // Encapsulation
        Student student = new Student();
        student.setName("John Doe");
        System.out.println("Student Name: " + student.getName());

        // Inheritance and Polymorphism (Method Overriding)
        Animal myAnimal = new Animal();
        myAnimal.sound();  // Animal makes a sound
        Animal myDog = new Dog();
        myDog.sound();  // Dog barks

        // Polymorphism (Method Overloading)
        Calculator calculator = new Calculator();
        System.out.println("Sum of 5 and 10 (int): " + calculator.add(5, 10));
        System.out.println("Sum of 5.5 and 10.5 (double): " + calculator.add(5.5, 10.5));

        // Abstraction (Abstract Class and Interface)
        Shape circle = new Circle();
        circle.draw();  // Drawing Circle
        Drawable rectangle = new Rectangle();
        rectangle.draw();  // Drawing Rectangle

        // Using the `this` Keyword
        Box box = new Box(10);
        box.display(); // Box width: 10

        // Using the `final` Keyword (constant value)
        Constants constants = new Constants();
        System.out.println("Constant Value: " + constants.VALUE);

        // Nested and Inner Classes
        Outer outer = new Outer();
        Outer.Inner inner = outer.new Inner();
        inner.display();  // Hello from Outer class

        // Enums
        Direction dir = Direction.NORTH;
        System.out.println("Direction: " + dir);

        // Java Reflection (List all methods of the ArrayList class)
        try {
            Class<?> clazz = Class.forName("java.util.ArrayList");
            Method[] methods = clazz.getDeclaredMethods();
            System.out.println("Methods in ArrayList class:");
            for (Method method : methods) {
                System.out.println(method.getName());
            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
}
```

### Explanation of the Code:

1. **Encapsulation**:
    
    - The `Student` class has a private field `name` and provides public getter and setter methods to access and modify the `name`. This ensures that external classes cannot directly access or modify the `name` field.
2. **Inheritance**:
    
    - The `Dog` class inherits from the `Animal` class and overrides the `sound()` method. This demonstrates how a subclass can inherit methods and fields from a superclass and modify its behavior through method overriding.
3. **Polymorphism**:
    
    - **Method Overloading**: The `Calculator` class has two `add` methods, one that takes `int` parameters and one that takes `double` parameters. This is an example of compile-time polymorphism.
    - **Method Overriding**: The `Dog` class overrides the `sound()` method of the `Animal` class, demonstrating runtime polymorphism.
4. **Abstraction**:
    
    - The `Shape` class is abstract and defines an abstract method `draw()`. The `Circle` class extends `Shape` and provides its implementation of `draw()`. This demonstrates how abstraction allows us to define general functionality that must be implemented by subclasses.
    - The `Drawable` interface defines the `draw()` method, and the `Rectangle` class implements this interface.
5. **`this` Keyword**:
    
    - The `Box` class uses the `this` keyword in its constructor to distinguish between the instance variable `width` and the constructor parameter `width`.
6. **`final` Keyword**:
    
    - The `Constants` class is marked as `final` to prevent inheritance. The `VALUE` variable is declared `final` to make it a constant.
7. **Nested and Inner Classes**:
    
    - The `Outer` class contains an inner class `Inner` that can access the private field `message` of the outer class.
8. **Enums**:
    
    - The `Direction` enum defines a set of constants representing compass directions.
9. **Java Reflection**:
    
    - The program demonstrates how to use reflection to inspect the methods of the `ArrayList` class at runtime.

### Output:

```
Student Name: John Doe
Animal makes a sound
Dog barks
Sum of 5 and 10 (int): 15
Sum of 5.5 and 10.5 (double): 16.0
Drawing Circle
Drawing Rectangle
Box width: 10
Constant Value: 42
Hello from Outer class
Direction: NORTH
Methods in ArrayList class:
add
addAll
clear
clone
...
```
