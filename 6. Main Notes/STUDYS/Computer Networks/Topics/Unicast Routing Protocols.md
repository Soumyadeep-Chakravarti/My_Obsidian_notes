
2025-01-03 10:39

Status:

Tags:

---

### **Unicast Routing Protocols**

#### **1. Distance Vector Routing**

- **Tags:** Distance Vector, Routing Protocol, Unicast, RIP, Bellman-Ford, Network Layer
    
- **Definition:**
    
    - **Distance Vector Routing** is a routing protocol where each router maintains a table (vector) that contains the best known distance to reach every destination in the network. The router periodically shares its table with its immediate neighbors, and based on the received information, updates its own table.
    - **Distance Vector** protocols rely on the **Bellman-Ford algorithm**, which calculates the shortest path based on the distance to reach the destination.
- **Key Concepts:**
    
    - **Routing Table:** Each router keeps a table with the best-known distance to reach destinations and the next hop router for each destination.
    - **Periodic Updates:** Routers periodically exchange their routing tables with neighbors, which can lead to slow convergence when network changes occur.
    - **Count to Infinity Problem:** A problem in distance vector protocols where incorrect information can cause routers to slowly adjust their tables.
    - **Example:** The **Routing Information Protocol (RIP)** is a popular distance vector routing protocol, operating with hop counts as the distance metric.
- **Applications:**
    
    - **RIP:** Used in small to medium-sized networks where the simplicity of the protocol is advantageous.
    - **Early WAN Routing:** Distance vector routing protocols were commonly used in early wide-area networks.
- **Benefits:**
    
    - **Simple to implement:** Distance vector protocols are easy to configure and manage, making them suitable for smaller networks.
    - **Works well in stable, small networks:** In networks where topology changes infrequently, the protocol performs well.
- **Conclusion:**
    
    - **Distance Vector Routing** protocols like **RIP** are simple and effective in small networks, but they suffer from slow convergence and inefficiency in larger, dynamic networks due to issues like the count-to-infinity problem.

---

#### **2. Link State Routing**

- **Tags:** Link State, Routing Protocol, Unicast, OSPF, Dijkstra, Network Layer
    
- **Definition:**
    
    - **Link State Routing** is a more advanced routing protocol where each router has a complete view of the network topology. Routers exchange information about the state of their links (interfaces) with all other routers in the network, which allows each router to independently calculate the best path to every destination.
    - Link state protocols use the **Dijkstra algorithm** to compute the shortest path.
- **Key Concepts:**
    
    - **Link State Advertisement (LSA):** Each router sends information about its directly connected neighbors and their states. These LSAs are flooded throughout the network.
    - **Flooding:** Information about the state of a router’s links is broadcast to all routers in the network to ensure every router has the same network topology.
    - **Shortest Path First (SPF) Algorithm:** Routers use Dijkstra’s algorithm to calculate the shortest path to all destinations based on the complete network topology.
    - **Example:** **Open Shortest Path First (OSPF)** is a commonly used link state routing protocol.
- **Applications:**
    
    - **OSPF:** Widely used in large enterprise networks and service provider networks due to its scalability and efficiency.
    - **IS-IS:** Another link state protocol often used in large-scale networks like ISP backbones.
- **Benefits:**
    
    - **Faster Convergence:** Link state protocols typically converge more quickly than distance vector protocols when there are network changes.
    - **Scalability:** Better suited for larger, more complex networks due to its efficiency in path calculation and topology sharing.
    - **Accurate Network Topology:** Each router has a complete view of the network, leading to more accurate routing decisions.
- **Conclusion:**
    
    - **Link State Routing** protocols, such as **OSPF**, are more suitable for larger, dynamic networks where faster convergence and accurate path calculation are required, compared to distance vector protocols.

---
