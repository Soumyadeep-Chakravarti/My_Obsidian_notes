Reference: [FASTag - Pay Highway Toll collection](https://rfenergie.com/Fastag) 
		 [RFID Fast Tag Reader IITM.pdf](https://respark.iitm.ac.in/wp-content/uploads/2024/09/Build_-Manual_RFID.pdf)

---
# **Tag Chip details**


### Basic Details

| Parameters                 | Specification                                                                         |
| -------------------------- | :------------------------------------------------------------------------------------ |
| ==Air Interface Protocol== | ==ISO/IEC 18000-6C, EPC Global C1G2==                                                 |
| ==Operational Frequency==  | ==860 – 960 MHz==                                                                     |
| Chip                       | Alien Higgs-3                                                                         |
| Memory Configuration       | Worldwide RFID UHF operation (860-960MHz) [gen2](https://ref.gs1.org/standards/gen2/) |
|                            | Higgs™-3 IC with 800-bits of Nonvolatile Memory                                       |
|                            | 32-bit TID, 64-bit Unique TID, 96-bit EPC Memory, extensible to 480-bits              |
|                            | 512-bit User Memory                                                                   |
|                            | <mark style="background: #FFB86CA6;">32-bit Access password</mark>                    |
|                            | 32-bit Kill password                                                                  |
|                            |                                                                                       |
| Data retention             | 50 years                                                                              |
| ==Write endurance==        | ==100,000 Cycles==                                                                    |
| Read Range*                | 8-10 meter on Glass                                                                   |
| Antenna Material           | Aluminum                                                                              |


### Memory Details

![[{9F4A9DFB-603D-4BBD-9E0B-A2138652AADA}.png]]

In the memory map provided, the data for an RFID scanner to read, particularly the unique identifier like the EPC for a Fast Tag, would be stored in the **EPC section**. Specifically:

- **Address Range**: 10h - 17h (EPC-PC).
- **Memory Type**: NVM (Non-Volatile Memory).
- **Bits**: 96.

- **Data Encoding:**
    Uses ===Pulse Interval Encoding (PIE)=== for reader-to-tag communication, with ===Amplitude Shift Keying (ASK)=== for modulation.



## Problems as of while researching

- ===Considering optimal conditions=== the RFID tag is place ===on the front windshield of a vehicle, usually on the inside upper center or corner===. Scanning distance is more than 5 m for small vehicles. For Larger Vehicles (Trucks or Lories) the distance becomes 10 -  12 m. ===For optimum reading of the RFID tag has to inside the 4-5 m range===.
	- More research needed for the application on large vehicles, presently stuck with small to medium sized vehicles

- ===PIE with ASK causing null data entries thus a lot of testing required===
