### 1.1 Introduction
- The chapter introduces basic computer components and differentiates between analog and digital signals.
- Key skills include converting decimal numbers to binary and performing binary arithmetic operations.

### 1.2 Analog Signals
- **Characteristics of an Analog Signal:**
  - **Frequency:** The number of cycles per second, measured in Hertz (Hz).
  - **Amplitude:** The height of the wave, representing the strength of the signal.
  - **Phase:** The position of the wave relative to time zero, measured in degrees.
- **Waveform:** Typically represented as a sine wave, which repeats periodically.

### 1.3 Digital Signals
- Digital signals represent data using two discrete voltage levels, often 0 volts and +5 volts.
- A digital signal can be visualized as a series of square waves corresponding to binary values (0s and 1s).
- **Bit and Byte:** 
  - A single binary digit is a bit.
  - Eight bits make a byte.

### 1.4 Number System
- **Decimal (Base 10):** Uses digits 0 through 9. Example: \( 356 = 6 \times 10^0 + 5 \times 10^1 + 3 \times 10^2 \).
- **Binary (Base 2):** Uses digits 0 and 1. Valid binary numbers include 10011; invalid examples include 211.01.
- **Conversion Formulas:**
  - Converting from other bases to decimal uses the formula:
    \[
    (a_5a_4a_3a_2a_1a_0.a_{-1}a_{-2}a_{-3})_r = a_0 \cdot r^0 + a_1 \cdot r^1 + a_2 \cdot r^2 + \ldots
    \]
  - Example conversion: \( (27.35)_8 \) to base 10.

### 1.5 Complement and Two’s Complement
- **Two’s Complement:** A method for representing negative numbers in binary. 
  - To find two’s complement: Invert all bits and add one.
  - Used for binary subtraction and representing signed numbers.

### 1.6 Unsigned, Signed Magnitude, and Signed Two’s Complement Binary Numbers
- **Unsigned Numbers:** Only represent positive values.
- **Signed Magnitude:** Uses the most significant bit as a sign bit.
- **Signed Two’s Complement:** Allows for easier arithmetic operations and is widely used in computing.

### 1.7 Binary Addition Using Signed Two’s Complement
- Addition of signed numbers using two’s complement involves straightforward binary addition, considering overflow rules.

### 1.8 Floating Point Representation
- **IEEE 754 Standard:** Used for representing real numbers in computers.
- **Single Precision:** Consists of 1 sign bit, 8 exponent bits, and 23 fraction bits.

### 1.14 Transmission Methods
- **Serial Transmission:** Data is sent one bit at a time over a single channel. It is simpler but slower compared to parallel transmission.
- **Parallel Transmission:** Multiple bits are sent simultaneously, using multiple channels, which increases the data transfer rate【20:4†source】【20:5†source】.