To calculate the total time taken to transmit 15 frames using the Stop-and-Wait ARQ protocol, we need to consider the following:

### Parameters:
- **Frame size** = 1200 bits
- **Transmission rate** = 2 Mbps (megabits per second)
- **Round Trip Time (RTT)** = 150 ms (milliseconds)
- **Number of frames** = 15
- **No transmission errors** (this means all frames and ACKs are received correctly in the first attempt).

### Step-by-Step Calculation:

1. **Time to transmit one frame**:
   The time to transmit one frame is calculated as:
   $$
   T_{\text{frame}} = \frac{\text{Frame size}}{\text{Transmission rate}} = \frac{1200 \text{ bits}}{2 \times 10^6 \text{ bits per second}} = 0.0006 \text{ seconds} = 0.6 \text{ ms}
  $$

2. **Round Trip Time (RTT)**:
   RTT is the total time taken for the frame to reach the receiver and for the acknowledgment (ACK) to come back to the sender. Given RTT = 150 ms.

3. **Total time for one frame exchange**:
   In the Stop-and-Wait protocol, after sending a frame, the sender must wait for the ACK before sending the next frame. So the total time to send one frame and receive its acknowledgment is:
   $$
   T_{\text{one frame}} = T_{\text{frame}} + \text{RTT} = 0.6 \text{ ms} + 150 \text{ ms} = 150.6 \text{ ms}
  $$

4. **Total time for 15 frames**:
   Since each frame must be transmitted individually and the sender must wait for the ACK before transmitting the next one, the total time to transmit 15 frames is:
   $$
   T_{\text{total}} = 15 \times T_{\text{one frame}} = 15 \times 150.6 \text{ ms} = 2259 \text{ ms} = 2.259 \text{ seconds}
   $$

### Final Answer:
The total time taken to transmit 15 frames and receive their acknowledgments is **2.259 seconds**.