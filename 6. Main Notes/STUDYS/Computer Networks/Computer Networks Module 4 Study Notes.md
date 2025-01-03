
2025-01-03 10:44

Status:

Tags:

---

### [Transport Layer: Services, Multiplexing and Demultiplexing, Process-to-Process Delivery](<./Topics/Transport Layer - Services Multiplexing and Demultiplexing Process-to-Process Delivery.md>)

#### **Transport Layer Overview**

- **Definition:**  
    The transport layer provides end-to-end communication services for applications and ensures reliable data transfer between processes running on different hosts within a network.
    
- **Key Concepts:**
    
    - **Multiplexing:** Combining data streams to optimize network resources.
    - **Demultiplexing:** Separating data streams into their original form at the receiving side.
    - **Process-to-Process Delivery:** Ensures data is sent from one process on the sender’s machine to a specific process on the receiver’s machine, using port numbers.

---

### **[User Datagram Protocol (UDP)](<./Topics/User Datagram Protocol (UDP).md>)**

- **Definition:**  
    UDP is a connectionless, unreliable transport protocol that does not guarantee the delivery, ordering, or integrity of data.
    
- **Key Concepts:**
    
    - UDP is fast due to minimal overhead.
    - Suitable for applications where speed is prioritized over reliability (e.g., VoIP, live streaming).
- **Example:**
    
    - **DNS** queries are typically sent using UDP, as they are simple and do not need reliability.

---

### **[Transmission Control Protocol (TCP)](<./Topics/Transmission Control Protocol (TCP).md>)**

- **Definition:**  
    TCP is a connection-oriented, reliable protocol that ensures data is delivered in order, without errors, and reliably through checksums.
    
- **Key Concepts:**
    
    - **Three-way Handshake:** Process of establishing a TCP connection (SYN, SYN-ACK, ACK).
    - **Reliable Data Transfer:** Ensures data is not lost and arrives in order.
    - **Flow Control:** Manages data transmission rates between sender and receiver.
    - **Congestion Control:** Prevents network congestion by regulating the flow of data.
- **Example:**
    
    - **HTTP** uses TCP to ensure reliable delivery of web pages.

---

### **[Congestion Control Techniques](<./Topics/Congestion Control Techniquesmd.md>)**

- **Definition:**  
    These are techniques used to avoid network congestion by adjusting the transmission rate of data.
    
- **Key Concepts:**
    
    - **Slow Start:** Initially sends a small amount of data to test network capacity.
    - **Congestion Avoidance:** Algorithms like TCP Reno manage data flow to avoid congestion.
    - **Fast Recovery & Fast Retransmit:** Reduces the time spent retransmitting lost packets.
- **Example:**
    
    - TCP’s congestion control prevents bottlenecks and improves overall network performance.

---

### **[Congestion Prevention Policies](<./Topics/Congestion Prevention Policies.md>)**

- **Definition:**  
    These are strategies designed to avoid congestion from occurring in the first place.
    
- **Key Concepts:**
    
    - **Traffic Shaping:** Delays or limits data packets to avoid network congestion.
    - **Resource Allocation:** Prioritizes traffic to ensure high-priority packets are transmitted first.

---

### **[Quality of Service (QoS)](<./Topics/Quality of Service (QoS).md>)**

- **Definition:**  
    QoS ensures that data packets are delivered with acceptable performance, optimizing bandwidth, minimizing latency, and reducing packet loss.
    
- **Key Concepts:**
    
    - **Differentiated Services (DiffServ):** A method for traffic management where traffic is classified and prioritized.
    - **Traffic Policing:** Monitors traffic to ensure compliance with QoS requirements.
    - **Bandwidth Management:** Allocates sufficient bandwidth to ensure critical services receive adequate resources.

---

### **[Techniques to Improve QoS](<./Topics/Techniques to Improve QoS.md>)**

- **Definition:**  
    These techniques improve network performance, ensuring that high-priority traffic is delivered efficiently.
    
- **Key Concepts:**
    
    - **Traffic Prioritization:** Ensures high-priority traffic (e.g., VoIP) is transmitted first.
    - **Buffering & Scheduling:** Controls the flow of data to optimize network performance.

---

### **[Integrated Services](<Integrated Services.md>)**

- **Definition:**  
    Integrated Services (IntServ) is an architecture designed to guarantee specific QoS for individual data flows within a network.
    
- **Key Concepts:**
    
    - **Resource Reservation Protocol (RSVP):** Protocol for reserving resources across a network to ensure QoS.
    - **Guaranteed Service:** Provides assurances on bandwidth and latency for certain applications.

---
