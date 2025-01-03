
2025-01-03 10:43

Status:

Tags:

---

### **Physical Layer: Transmission Media**

#### **[Guided Transmission Media](<./Topics/Guided Transmission Media.md>)**:

1. **Twisted Pair**:
    - **Description**: Pairs of insulated copper wires twisted together to reduce electromagnetic interference.
    - **Applications**: Telephone lines, Ethernet cables (e.g., Cat 5, Cat 6).
    - **Advantages**: Low cost, easy to install.
    - **Disadvantages**: Limited bandwidth, susceptible to interference.
2. **Coaxial Cable**:
    - **Description**: A central conductor, surrounded by insulation, a shielding layer, and an outer cover.
    - **Applications**: Cable television, internet connections.
    - **Advantages**: Higher bandwidth, better shielding from interference.
    - **Disadvantages**: Bulkier, higher cost than twisted pair.
3. **Fiber Optics**:
    - **Description**: Uses light to transmit data through glass or plastic fibers.
    - **Applications**: Long-distance communications, high-speed internet.
    - **Advantages**: Very high bandwidth, immune to electromagnetic interference.
    - **Disadvantages**: Expensive, difficult to install.

#### **[Unguided Transmission Media](<./Topics/Unguided Transmission Media.md>)**:

1. **Radio Waves**:
    - **Description**: Electromagnetic waves used for wireless communication.
    - **Applications**: Wi-Fi, radio broadcasting, mobile networks.
    - **Advantages**: Convenient, wireless communication.
    - **Disadvantages**: Susceptible to interference, limited range.
2. **Microwaves**:
    - **Description**: High-frequency electromagnetic waves used for point-to-point communication.
    - **Applications**: Satellite communication, cellular networks.
    - **Advantages**: High bandwidth, efficient for long-distance communication.
    - **Disadvantages**: Requires line-of-sight, affected by weather conditions.
3. **Infrared**:
    - **Description**: Electromagnetic waves with wavelengths longer than visible light, used for short-range communication.
    - **Applications**: Remote controls, wireless devices.
    - **Advantages**: Simple, inexpensive, secure.
    - **Disadvantages**: Limited range, requires line-of-sight.

---

### **[Switching: Packet and Circuit Switching](<./Topics/Switching - Packet and Circuit Switching.md>)**

1. **Circuit Switching**:
    
    - **Description**: A dedicated communication path is established for the entire duration of the transmission.
    - **Examples**: Traditional telephone systems.
    - **Advantages**: Consistent, reliable connection.
    - **Disadvantages**: Inefficient use of resources, as the circuit is reserved even if not actively in use.
2. **Packet Switching**:
    
    - **Description**: Data is divided into packets, which are transmitted independently across the network.
    - **Examples**: Internet communication (e.g., TCP/IP).
    - **Advantages**: Efficient use of resources, flexible, scalable.
    - **Disadvantages**: Possible delays and packet loss, variable transmission times.

---

### **[Data Link Layer: Framing, Flow, and Error Control](<./Topics/Data Link Layer - Framing, Flow, and Error Control.md>)**

1. **Framing**:
    
    - **Description**: The process of dividing data into manageable chunks called frames for transmission.
    - **Purpose**: Ensures data integrity and proper synchronization during transmission.
2. **Flow Control**:
    
    - **Description**: Manages the rate at which data is transmitted to prevent overwhelming the receiver.
    - **Techniques**: Buffering, window-based protocols.
3. **Error Control**:
    
    - **Description**: Techniques to detect and correct errors that occur during transmission.
    - **Techniques**:
        - **Error Detection**: CRC, Checksum, Parity Bit.
        - **Error Correction**: Automatic repeat request (ARQ) protocols like Stop and Wait, Go back-N ARQ, and Selective Repeat ARQ.

---

### **[Error Detection and Correction](<./Topics/Error Detection and Correction.md>)**

1. **Types of Errors**:
    
    - **Single-bit Error**: Only one bit is corrupted.
    - **Burst Error**: Multiple consecutive bits are corrupted.
2. **Redundancy**:
    
    - **Definition**: Additional bits are added to the data to help detect and correct errors.
    - **Techniques**: Parity, checksums, and CRC.
3. **LRC (Longitudinal Redundancy Check)**:
    
    - **Description**: A method of error detection by appending a parity bit for each column of bits in a data word.
4. **CRC (Cyclic Redundancy Check)**:
    
    - **Description**: A type of non-secure hash function for error-checking in networks and storage devices.
5. **Checksum**:
    
    - **Description**: A value calculated from the data and sent along to help detect errors by comparing it with a recalculated checksum on the receiving end.

---

### **[Flow and Error Control Protocols](<./Topics/Flow and Error Control Protocols.md>)**

1. **Stop and Wait**:
    
    - **Description**: The sender transmits one frame at a time and waits for an acknowledgment before sending the next.
    - **Advantages**: Simple to implement.
    - **Disadvantages**: Low throughput due to waiting for acknowledgments.
2. **Stop and Wait ARQ**:
    
    - **Description**: A modification of the Stop and Wait protocol that includes automatic retransmission of lost or corrupted frames.
    - **Advantages**: Reliable communication.
    - **Disadvantages**: Similar to Stop and Wait, it still suffers from inefficiency.
3. **Go Back-N ARQ**:
    
    - **Description**: Allows multiple frames to be sent before requiring an acknowledgment, but if an error is detected, all frames from the erroneous one are resent.
    - **Advantages**: Improved efficiency over Stop and Wait.
    - **Disadvantages**: Can lead to redundant retransmissions.
4. **Selective Repeat ARQ**:
    
    - **Description**: Allows the sender to only retransmit the specific frames that were corrupted or lost, rather than all subsequent frames.
    - **Advantages**: More efficient than Go Back-N ARQ.
    - **Disadvantages**: More complex implementation.

---


---
