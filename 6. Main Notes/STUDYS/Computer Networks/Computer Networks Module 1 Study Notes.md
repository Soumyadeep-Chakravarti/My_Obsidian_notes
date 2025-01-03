**Unit 1: Introduction to Computer Networks**

---

### **1. [Networking Goals](<./Topics/Networking Goals.md>)**

- **Primary Objectives**:
    - Enable resource sharing (e.g., files, printers).
    - Improve communication (e.g., email, messaging).
    - Ensure reliable data transfer and security.
    - Minimize delays (low latency).

---

### **2. [Networking Topologies](<./Topics/Networking Topologies.md>)**

- **Types**:
    1. **Bus Topology**: Single cable connects all devices. Simple, but prone to failure.
    2. **Star Topology**: Devices connect to a central hub. Reliable but expensive.
    3. **Ring Topology**: Devices form a closed loop. Equal access but a single failure disrupts the network.
    4. **Mesh Topology**: Each device connects to multiple others. Highly reliable but costly.
    5. **Hybrid Topology**: Combination of two or more topologies.

---

### **3. [Network Architecture](<./Topics/Network Architecture.md>)**

- **Interfaces and Services**: Define how components interact.
- **Types**:
    - **Client-Server Architecture**: Centralized control; servers provide resources.
    - **Peer-to-Peer Architecture**: Devices share resources directly.

---

### **4. [ISO-OSI Reference Model](<./Topics/ISO-OSI Reference Model.md>)**

- **Purpose**: Standardize communication functions.
- **Layers**:
    1. **Physical Layer**: Deals with raw bit transmission (e.g., cables, signals).
    2. **Data Link Layer**: Handles framing, error detection, and correction.
    3. **Network Layer**: Manages routing and logical addressing (e.g., IP).
    4. **Transport Layer**: Ensures reliable data transfer (e.g., TCP/UDP).
    5. **Session Layer**: Establishes and manages sessions between applications.
    6. **Presentation Layer**: Data translation and encryption.
    7. **Application Layer**: Interfaces with user applications (e.g., email, FTP).

---

### **5. [TCP/IP Protocol Suite](<./Topics/TCP-IP Protocol Suite.md>)**

- **Layers**:
    
    - **Application Layer**: High-level protocols like HTTP, FTP.
    - **Transport Layer**: TCP (reliable) and UDP (fast, unreliable).
    - **Internet Layer**: Routing (IP, ICMP).
    - **Network Access Layer**: Data transmission (Ethernet, Wi-Fi).
- **Comparison with OSI**:
    

| OSI Model     | TCP/IP Model             |
| ------------- | ------------------------ |
| 7 Layers      | 4 Layers                 |
| Standerdizeed | Practical Implementation |

---

### **6. [Signals](<./Topics/Signals.md>)**

- **Types**:
	    
    - **Analog Signals**: Continuous waveforms (e.g., sound).
    - **Digital Signals**: Discrete pulses (e.g., binary data).
- **Characteristics**:
    
    - Amplitude: Signal strength.
    - Frequency: Number of cycles per second (Hz).
    - Phase: Signal’s position in its cycle.

---

### **7. [Modulation Techniques](<./Topics/Modulation Techniques.md>)**

- **Analog Modulation**:
    
    - **Amplitude Modulation (AM)**: Varying signal strength.
    - **Frequency Modulation (FM)**: Varying signal frequency.
    - **Phase Modulation (PM)**: Varying signal phase.
- **Quadrature Amplitude Modulation (QAM)**: Combines AM and PM to transmit multiple bits per signal.
    

---

### **8. [Signal Conversion](<Signal Conversion.md>)**

- **Digital to Digital**: Encoding techniques (e.g., NRZ, Manchester).
- **Digital to Analog**: Modulation (e.g., ASK, FSK).
- **Analog to Digital**: Sampling and quantization (e.g., PCM).
- **Analog to Analog**: Modulation for frequency or amplitude changes.

---

### **Summary**

Unit 1 introduces the fundamentals of networking, including architectures, topologies, and signal processing. The comparison between the OSI and TCP/IP models provides insights into standardized communication, while modulation techniques and signal conversions underpin data transmission across networks.