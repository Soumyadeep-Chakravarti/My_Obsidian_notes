
---

## **Unit 5: Database Applications with JDBC and JPA**

### **JDBC (Java Database Connectivity)**

#### **Key Concepts**:

1. **Definition**:
    
    - API for connecting and executing queries with databases.
        
    - Enables seamless interaction between Java applications and relational databases.
        
2. **JDBC Architecture**:
    
    - **DriverManager**: Manages a list of database drivers.
        
    - **Connection**: Represents a session with a specific database.
        
    - **Statement**: Executes SQL queries.
        
    - **ResultSet**: Represents a table of data returned by a query.
        

#### **Steps to Use JDBC**:

1. **Load and Register Driver**:
    
    - Use `Class.forName()` to load the driver.
        

```java
Class.forName("com.mysql.cj.jdbc.Driver");
```

2. **Establish Connection**:
    
    - Use `DriverManager.getConnection()`.
        

```java
Connection conn = DriverManager.getConnection(
    "jdbc:mysql://localhost:3306/testdb", "username", "password");
```

3. **Create Statement**:
    
    - Use `Connection.createStatement()`.
        

```java
Statement stmt = conn.createStatement();
```

4. **Execute Query**:
    
    - Use `Statement.executeQuery()` for SELECT and `Statement.executeUpdate()` for INSERT/UPDATE/DELETE.
        

```java
ResultSet rs = stmt.executeQuery("SELECT * FROM users");
while (rs.next()) {
    System.out.println(rs.getString("name"));
}
```

5. **Close Connection**:
    
    - Release resources using `close()`.
        

```java
stmt.close();
conn.close();
```

### **JPA (Java Persistence API)**

#### **Key Concepts**:

1. **Definition**:
    
    - A standard for Object-Relational Mapping (ORM).
        
    - Simplifies database operations using annotations.
        
2. **Core Components**:
    
    - **EntityManager**: Manages entity instances.
        
    - **Entity**: Represents a table in the database.
        
    - **Persistence Unit**: Configuration for persistence.
        

#### **Steps to Use JPA**:

1. **Define Entity**:
    
    - Annotate a class with `@Entity` and its fields with `@Id` or `@Column`.
        

```java
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    // Getters and Setters
}
```

2. **Configure Persistence Unit**:
    
    - Define in `persistence.xml`.
        

```xml
<persistence xmlns="http://xmlns.jcp.org/xml/ns/persistence" version="2.1">
    <persistence-unit name="testPU">
        <class>User</class>
        <properties>
            <property name="jakarta.persistence.jdbc.url" value="jdbc:mysql://localhost:3306/testdb"/>
            <property name="jakarta.persistence.jdbc.user" value="username"/>
            <property name="jakarta.persistence.jdbc.password" value="password"/>
            <property name="jakarta.persistence.jdbc.driver" value="com.mysql.cj.jdbc.Driver"/>
        </properties>
    </persistence-unit>
</persistence>
```

3. **Perform CRUD Operations**:
    
    - Use `EntityManager` methods like `persist()`, `merge()`, `remove()`, and `find()`.
        

```java
import jakarta.persistence.*;

public class JPAExample {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("testPU");
        EntityManager em = emf.createEntityManager();

        em.getTransaction().begin();

        User user = new User();
        user.setName("John Doe");
        em.persist(user);

        em.getTransaction().commit();

        em.close();
        emf.close();
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

Here is a Java example covering concepts of **JDBC (Java Database Connectivity)** and **JPA (Java Persistence API)**:

### **JDBC Example:**

```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCExample {

    public static void main(String[] args) {
        try {
            // 1. Load and Register Driver
            Class.forName("com.mysql.cj.jdbc.Driver");

            // 2. Establish Connection
            Connection conn = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/testdb", "username", "password");

            // 3. Create Statement
            Statement stmt = conn.createStatement();

            // 4. Execute Query
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");

            while (rs.next()) {
                System.out.println("User Name: " + rs.getString("name"));
            }

            // 5. Close Connection
            rs.close();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

### **JPA Example:**

```java
import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

public class JPAExample {
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("testPU");
        EntityManager em = emf.createEntityManager();

        // Start a transaction
        em.getTransaction().begin();

        // Create a new user
        User user = new User();
        user.setName("John Doe");

        // Persist the user
        em.persist(user);

        // Commit the transaction
        em.getTransaction().commit();

        // Close the EntityManager and EntityManagerFactory
        em.close();
        emf.close();
    }
}
```

### **Explanation**:

1. **JDBC**:
    
    - Establishes a connection to a MySQL database using `DriverManager.getConnection()`.
    - Executes a `SELECT` query to retrieve user data from a `users` table.
    - Processes the result with a `ResultSet` and prints the `name` of users.
    - Properly closes the connection and resources to avoid memory leaks.
2. **JPA**:
    
    - Defines a `User` entity class with `@Entity` and `@Table` annotations, representing a row in the `users` table.
    - Configures JPA to connect to a MySQL database using the `persistence.xml` file.
    - Creates a new user instance, persists it using `EntityManager.persist()`, and commits the transaction.

### **persistence.xml** Configuration:

```xml
<persistence xmlns="http://xmlns.jcp.org/xml/ns/persistence" version="2.1">
    <persistence-unit name="testPU">
        <class>User</class>
        <properties>
            <property name="jakarta.persistence.jdbc.url" value="jdbc:mysql://localhost:3306/testdb"/>
            <property name="jakarta.persistence.jdbc.user" value="username"/>
            <property name="jakarta.persistence.jdbc.password" value="password"/>
            <property name="jakarta.persistence.jdbc.driver" value="com.mysql.cj.jdbc.Driver"/>
        </properties>
    </persistence-unit>
</persistence>
```

### Key Concepts Covered:

- **JDBC**:
    
    - How to connect, execute queries, and retrieve results using JDBC.
    - The steps of loading the driver, establishing a connection, creating statements, and closing resources.
- **JPA**:
    
    - Entity creation and ORM mapping with JPA annotations like `@Entity`, `@Table`, and `@Column`.
    - Using `EntityManager` to perform CRUD operations.

