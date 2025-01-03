
---

### **Flow and Error Control Protocols**

#### **Definition**:

- Flow and error control protocols ensure reliable data transfer across a network, by managing how data is sent, how errors are detected, and how any transmission problems are handled.

#### **Types of Flow and Error Control Protocols**:

1. **Stop and Wait ARQ**:
    - The sender transmits a single frame and waits for an acknowledgment (ACK) before sending the next frame.
    - **Key Features**:
        - Simple to implement.
        - Low throughput due to waiting for acknowledgment for each frame.
2. **Go-Back-N ARQ**:
    - The sender can send multiple frames before waiting for an acknowledgment, but the receiver only accepts frames in order.
    - **Key Features**:
        - The sender window allows multiple frames to be sent.
        - If any frame is lost, all subsequent frames are retransmitted.
3. **Selective Repeat ARQ**:
    - The sender sends multiple frames and waits for an acknowledgment for each frame. Only the frames that are lost or erroneous are retransmitted.
    - **Key Features**:
        - More efficient than Go-Back-N as only specific frames are retransmitted.

---

### **Numericals on Flow and Error Control Protocols**:

#### **1. Stop and Wait ARQ**

**Question**:  
A sender is using the Stop-and-Wait ARQ protocol. The round-trip time (RTT) between the sender and receiver is 100 ms, and the data transmission rate is 1 Mbps. What is the throughput of the system?

**Solution**:  
In the Stop-and-Wait ARQ protocol, the sender sends one frame and waits for an acknowledgment (ACK) before sending the next frame. Therefore, the throughput is limited by the round-trip time.

1. **Data rate (R)** = 1 Mbps = 10610^6 bits per second.
2. **Round-trip time (RTT)** = 100 ms = 0.1 seconds.

The formula for throughput in Stop-and-Wait ARQ is given by:

$\text{Throughput} = \frac{\text{Data rate}}{1 + 2 \times \frac{\text{RTT}}{\text{Frame transmission time}}}$

First, calculate the **Frame transmission time**:

$\text{Frame transmission time} = \frac{\text{Frame size}}{\text{Data rate}}$

Assuming the frame size is 1,000 bits:

$\text{Frame transmission time} = \frac{1000}{10^6} = 1 \, \text{ms} = 0.001 \, \text{seconds}$

Now, calculate the throughput:

$\text{Throughput} = \frac{10^6}{1 + 2 \times \frac{0.1}{0.001}} = \frac{10^6}{1 + 200} = \frac{10^6}{201} \approx 4975 \, \text{bps}$

**Answer**: The throughput of the Stop-and-Wait ARQ protocol is approximately **4975 bps**.

---

#### **2. Go-Back-N ARQ**

**Question**:  
Consider a Go-Back-N ARQ protocol where the sender window size is 5, the round-trip time (RTT) is 200 ms, and the data transmission rate is 2 Mbps. If the sender sends a frame every 10 ms, calculate the effective throughput.

**Solution**:  
In Go-Back-N ARQ, the sender can send multiple frames before waiting for an acknowledgment, but the receiver can only process one frame at a time.

1. **Sender window size (N)** = 5 frames.
2. **RTT** = 200 ms = 0.2 seconds.
3. **Frame transmission time** = 10 ms = 0.01 seconds.
4. **Data rate (R)** = 2 Mbps = 2×1062 \times 10^6 bits per second.

The throughput for Go-Back-N ARQ can be approximated by the formula:

$\text{Throughput} = \frac{N \times \text{Frame size}}{\text{RTT} + \text{Frame transmission time}}$

Assuming the frame size is 1,000 bits:

$\text{Frame transmission time} = \frac{1000}{2 \times 10^6} = 0.0005 \, \text{seconds}$

Now, calculate the throughput:

$\text{Throughput} = \frac{5 \times 1000}{0.2 + 0.0005} = \frac{5000}{0.2005} \approx 24,950 \, \text{bps}$

**Answer**: The effective throughput of the Go-Back-N ARQ protocol is approximately **24,950 bps**.

---

#### **3. Selective Repeat ARQ**

**Question**:  
In a Selective Repeat ARQ protocol, the sender window size is 4 and the receiver window size is 3. The round-trip time (RTT) is 150 ms, and the data transmission rate is 1 Mbps. If the sender sends a frame every 12 ms, calculate the throughput.

**Solution**:  
In Selective Repeat ARQ, the sender can send multiple frames, but only those frames that were lost or corrupted are retransmitted. The sender and receiver window sizes play a role in determining how many frames can be sent before waiting for acknowledgment.

1. **Sender window size (N)** = 4 frames.
2. **Receiver window size (R)** = 3 frames.
3. **RTT** = 150 ms = 0.15 seconds.
4. **Frame transmission time** = 12 ms = 0.012 seconds.
5. **Data rate (R)** = 1 Mbps = 10610^6 bps.

The throughput for Selective Repeat ARQ can be approximated by the formula:

$\text{Throughput} = \frac{R \times \text{Frame size}}{\text{RTT} + \text{Frame transmission time}}$

Assuming the frame size is 1,000 bits:

$\text{Frame transmission time} = \frac{1000}{10^6} = 0.001 \, \text{seconds}$

Now, calculate the throughput:

$\text{Throughput} = \frac{3 \times 1000}{0.15 + 0.001} = \frac{3000}{0.151} \approx 19,868 \, \text{bps}$

**Answer**: The throughput of the Selective Repeat ARQ protocol is approximately **19,868 bps**.

---

#### **Conclusion**:

These numericals provide insight into how throughput and efficiency are impacted by the characteristics of different error and flow control protocols. Stop-and-Wait ARQ tends to be less efficient due to its low throughput, while Go-Back-N and Selective Repeat ARQ allow for higher efficiency and better utilization of the available bandwidth.

---
