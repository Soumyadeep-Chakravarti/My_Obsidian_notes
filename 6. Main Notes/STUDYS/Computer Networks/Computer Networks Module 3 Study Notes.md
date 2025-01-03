
2025-01-03 10:28

Status:

Tags:

---

### **[Local Area Network (LAN) and Ethernet](<./Topics/Local Area Network (LAN) and Ethernet.md>)**

#### **Multiple Access Links and Protocols**

- **Definition:** Protocols used to manage access to a shared communication medium.
- **Key Concepts:**
    - **ALOHA:** A simple, early protocol for sharing channels; relies on retransmissions upon collision detection.
    - **CSMA (Carrier Sense Multiple Access):** A method to sense the medium before transmitting.
    - **CSMA/CD (Collision Detection):** Used in Ethernet to detect and resolve collisions.
    - **CSMA/CA (Collision Avoidance):** Used in Wi-Fi to avoid collisions.
- **Example:**
    - **ALOHA:** Used in early satellite communication systems.
    - **CSMA/CD:** Common in Ethernet networks.
    - **CSMA/CA:** Used in Wi-Fi networks to avoid signal interference.

#### **IEEE Standards (802.3, 802.4, 802.5)**

- **Definition:** IEEE standards for local area networks that define various LAN technologies.
- **Key Concepts:**
    - **802.3:** Defines Ethernet, the most widely used LAN technology.
    - **802.4:** Token Bus, used for industrial control networks.
    - **802.5:** Token Ring, an older LAN technology with a ring topology.
- **Example:**
    - **802.3 (Ethernet):** Common in most modern wired networks.
    - **802.4 (Token Bus):** Used in specific network environments like factories.
    - **802.5 (Token Ring):** Historical relevance in legacy networks.

#### **Wireless LAN Protocols**

- **Definition:** Protocols for wireless communication in LANs.
- **Key Concepts:**
    - **Wi-Fi (802.11):** Defines wireless communication standards in LANs.
    - **WLAN (Wireless LAN):** Used in environments like homes, offices, and public spaces.
- **Example:**
    - **Wi-Fi networks:** Found in homes, businesses, and cafes.

---

### **[Logical Addressing](<./Topics/Logical Addressing.md>)**

#### **IPv4 Addresses**

- **Definition:** IPv4 is the fourth version of the Internet Protocol, using 32-bit addresses.
- **Key Concepts:**
    - IPv4 addresses are in the format of four 8-bit octets (e.g., 192.168.0.1).
    - Limited address space due to 32-bit size.
- **Example:**
    - Private addresses like 192.168.x.x used in local networks.

#### **IPv6 Addresses**

- **Definition:** IPv6 is the latest version of Internet Protocol, using 128-bit addresses.
- **Key Concepts:**
    - Larger address space to accommodate the growing number of devices.
    - Written in hexadecimal format (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
- **Example:**
    - Used in modern internet systems for scalable addressing.

---

### **[Internetworking Devices](<./Topics/Internetworking Devices.md>)**

#### **Repeater, Hubs (Layer 1 Connections)**

- **Definition:** Devices that operate at the physical layer to extend signals or broadcast data.
- **Key Concepts:**
    - **Repeaters:** Amplify or regenerate signals to extend the range of a network.
    - **Hubs:** Simple networking devices that broadcast data to all connected devices.
- **Example:**
    - **Repeaters:** Used to extend Wi-Fi signals in large buildings.
    - **Hubs:** Legacy devices now largely replaced by switches.

#### **Bridges, Switches (Layer 2 Connections)**

- **Definition:** Devices that operate at the data link layer to manage traffic between network segments.
- **Key Concepts:**
    - **Bridges:** Connect separate LAN segments, filtering traffic.
    - **Switches:** More advanced than hubs, they direct data to specific devices based on MAC addresses.
- **Example:**
    - **Switches:** Used in almost all modern Ethernet networks.

#### **Routers, Gateways (Layer 3 Connections)**

- **Definition:** Devices that operate at the network layer to route data between different networks.
- **Key Concepts:**
    - **Routers:** Direct packets between networks based on IP addresses.
    - **Gateways:** Bridge networks with different protocols, often integrating different types of networks.
- **Example:**
    - **Routers:** Used in home networks to connect to the internet.

---

### **[Unicast Routing Protocols](<./Topics/Unicast Routing Protocols.md>)**

#### **Distance Vector Routing**

- **Definition:** Routing protocol where routers share information about the network with their neighbors to update routing tables.
- **Key Concepts:**
    - **Routing by Rumor:** Routers share their knowledge of the network with neighbors.
    - Common protocols: RIP (Routing Information Protocol).
- **Example:**
    - **RIP:** Used in small networks for routing updates.

#### **Link State Routing**

- **Definition:** Routing protocol where routers maintain a map of the network's topology and make routing decisions based on this map.
- **Key Concepts:**
    - **Dijkstra's Algorithm:** Used for shortest path calculation.
    - Common protocol: OSPF (Open Shortest Path First).
- **Example:**
    - **OSPF:** Used in larger networks for dynamic routing.

---

### **[Internet Protocols](<./Topics/Internet Protocols.md>)**

#### **Class A, B, C, D, E Traffic**

- **Definition:** Classes of IP addresses based on their size and purpose.
- **Key Concepts:**
    - **Class A:** Large networks (e.g., 0.0.0.0 - 127.255.255.255).
    - **Class B:** Medium-sized networks (e.g., 128.0.0.0 - 191.255.255.255).
    - **Class C:** Small networks (e.g., 192.0.0.0 - 223.255.255.255).
    - **Class D & E:** Used for multicast and reserved addresses.
- **Example:**
    - **Class A:** Used by large organizations.
    - **Class C:** Common in home networks.

---

### **[Address Mapping](<Address Mapping.md>)**

#### **ARP, RARP**

- **Definition:** Protocols used to map between logical and physical addresses.
- **Key Concepts:**
    - **ARP (Address Resolution Protocol):** Maps IPv4 addresses to MAC addresses.
    - **RARP (Reverse ARP):** Maps MAC addresses to IPv4 addresses.
- **Example:**
    - **ARP:** Used when a device wants to find the MAC address of a given IP address.

---
