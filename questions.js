const questions = [
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which layer of the OSI model is responsible for logical addressing and routing?",
    options: ["Physical", "Data Link", "Network", "Transport", "Application"],
    correctAnswer: 2,
    explanation:
      "The Network layer (Layer 3) handles logical addressing and routing, using protocols like IP to determine the best path for data.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "The TCP/IP model combines the Application, Presentation, and Session layers of the OSI model into a single Application layer.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The TCP/IP model simplifies the OSI model’s seven layers into four, with the Application layer encompassing the OSI’s Application, Presentation, and Session layers.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two devices operate primarily at the Data Link layer? (Choose two)",
    options: ["Router", "Switch", "Hub", "Bridge", "Firewall"],
    correctAnswer: [1, 3],
    explanation:
      "Switches and bridges operate at the Data Link layer (Layer 2), using MAC addresses to forward frames. Routers (Layer 3), hubs (Layer 1), and firewalls (multiple layers) do not primarily operate at Layer 2.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the default subnet mask for a Class B IP address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: 1,
    explanation:
      "A Class B IP address has a default subnet mask of 255.255.0.0 (/16), providing 65,536 addresses per network.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "An IPv6 address consists of 128 bits.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 addresses are 128 bits long, typically represented as eight groups of four hexadecimal digits.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the Address Resolution Protocol (ARP)?",
    options: [
      "Map IP addresses to MAC addresses",
      "Assign IP addresses dynamically",
      "Resolve domain names to IP addresses",
      "Encrypt data packets",
    ],
    correctAnswer: 0,
    explanation:
      "ARP maps IP addresses to MAC addresses, enabling communication at the Data Link layer.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two characteristics describe Ethernet technology? (Choose two)",
    options: [
      "It uses a bus topology",
      "It supports full-duplex communication",
      "It uses CSMA/CD for media access",
      "It requires token passing",
      "It operates only at 10 Mbps",
    ],
    correctAnswer: [1, 2],
    explanation:
      "Ethernet supports full-duplex communication and uses CSMA/CD for media access in half-duplex mode. It does not use a bus topology, token passing, or operate only at 10 Mbps.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the binary equivalent of the IP address 192.168.1.1?",
    options: [
      "11000000.10101000.00000001.00000001",
      "11000000.10101000.00000000.00000001",
      "11000000.10101000.00000001.00000000",
      "11000000.10101000.00000000.00000000",
    ],
    correctAnswer: 0,
    explanation:
      "The IP address 192.168.1.1 converts to binary as 11000000.10101000.00000001.00000001.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "A collision domain is a network segment where only one device can transmit at a time.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. In a collision domain, devices share the same medium, and only one can transmit at a time to avoid collisions.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which protocol is used to automatically assign IP addresses to devices on a network?",
    options: ["DNS", "DHCP", "ARP", "SNMP"],
    correctAnswer: 1,
    explanation:
      "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses and other network configuration parameters to devices.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. A network administrator configures a switch port with the command 'switchport mode access'. What is the effect of this command?",
    options: [
      "The port can only belong to one VLAN",
      "The port can carry multiple VLANs",
      "The port becomes a trunk port",
      "The port disables VLAN tagging",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport mode access' command configures the port to operate in access mode, allowing it to belong to only one VLAN.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "VLAN 1 is the default VLAN on Cisco switches and cannot be deleted.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VLAN 1 is the default VLAN on Cisco switches and cannot be deleted, though it can be unused.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands are required to configure a switch port as a trunk? (Choose two)",
    options: [
      "switchport mode trunk",
      "switchport trunk allowed vlan 10,20",
      "switchport access vlan 10",
      "switchport trunk encapsulation dot1q",
      "vlan 10",
    ],
    correctAnswer: [0, 3],
    explanation:
      "To configure a trunk port, use 'switchport mode trunk' to set trunk mode and 'switchport trunk encapsulation dot1q' to specify 802.1Q encapsulation.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the purpose of the Spanning Tree Protocol (STP)?",
    options: [
      "Assign IP addresses",
      "Prevent Layer 2 loops",
      "Route packets between VLANs",
      "Encrypt data frames",
    ],
    correctAnswer: 1,
    explanation:
      "STP prevents Layer 2 loops in switched networks by blocking redundant paths.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "PortFast should be enabled on ports connected to routers to improve convergence time.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. PortFast enables faster STP convergence on ports connected to end devices like routers, bypassing Listening and Learning states.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which IEEE standard defines Power over Ethernet (PoE)?",
    options: ["802.1Q", "802.3af", "802.1X", "802.3ad"],
    correctAnswer: 1,
    explanation:
      "IEEE 802.3af defines Power over Ethernet, allowing devices to receive power over Ethernet cables.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two benefits does VLAN configuration provide? (Choose two)",
    options: [
      "Improved security",
      "Increased latency",
      "Logical network segmentation",
      "Reduced bandwidth",
      "Simplified routing",
    ],
    correctAnswer: [0, 2],
    explanation:
      "VLANs enhance security by isolating traffic and provide logical network segmentation for better organization and traffic control.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the maximum number of VLANs supported on a Cisco switch using 802.1Q?",
    options: ["256", "1000", "4094", "65535"],
    correctAnswer: 2,
    explanation:
      "The 802.1Q standard supports up to 4094 VLANs (VLAN IDs 1–4094, with 0 and 4095 reserved).",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "EtherChannel allows multiple physical links to be combined into a single logical link.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. EtherChannel aggregates multiple physical links into a single logical link for increased bandwidth and redundancy.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which protocol is used to carry VLAN information between switches?",
    options: ["STP", "VTP", "LACP", "CDP"],
    correctAnswer: 1,
    explanation:
      "VTP (VLAN Trunking Protocol) is used to manage and propagate VLAN configurations between switches.",
  },

  // IP Connectivity (25%, ~13 questions)
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the first usable host address in the subnet 192.168.10.0/26?",
    options: ["192.168.10.0", "192.168.10.1", "192.168.10.63", "192.168.10.64"],
    correctAnswer: 1,
    explanation:
      "For a /26 subnet (increment 64), the first subnet is 192.168.10.0–192.168.10.63. The first usable host is 192.168.10.1.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "OSPF uses a link-state database to build its routing table.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. OSPF is a link-state routing protocol that builds a topology database to calculate the best paths.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands are used to configure a static route on a Cisco router? (Choose two)",
    options: [
      "ip route 192.168.2.0 255.255.255.0 192.168.1.1",
      "router ospf 1",
      "ip default-gateway 192.168.1.1",
      "network 192.168.2.0",
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
    ],
    correctAnswer: [0, 4],
    explanation:
      "Static routes are configured using the 'ip route' command, specifying the destination network and next-hop address, e.g., 'ip route 192.168.2.0 255.255.255.0 192.168.1.1' or the default route 'ip route 0.0.0.0 0.0.0.0 192.168.1.1'.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which routing protocol uses bandwidth and delay as its default metrics?",
    options: ["RIP", "OSPF", "EIGRP", "BGP"],
    correctAnswer: 2,
    explanation:
      "EIGRP uses bandwidth and delay as its default metrics to calculate the best path.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "A default route is represented as 0.0.0.0/0 in the routing table.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A default route, used when no specific route matches, is represented as 0.0.0.0/0.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the administrative distance of OSPF routes?",
    options: ["1", "90", "110", "120"],
    correctAnswer: 2,
    explanation:
      "OSPF routes have an administrative distance of 110, indicating their preference level in Cisco routing.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two protocols are considered First Hop Redundancy Protocols (FHRP)? (Choose two)",
    options: ["VRRP", "RIP", "HSRP", "OSPF", "EIGRP"],
    correctAnswer: [0, 2],
    explanation:
      "VRRP and HSRP are FHRPs that provide gateway redundancy by allowing multiple routers to share a virtual IP address.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the purpose of the 'passive-interface' command in OSPF configuration?",
    options: [
      "Disable routing updates on an interface",
      "Enable authentication",
      "Set the interface as a trunk",
      "Increase the interface priority",
    ],
    correctAnswer: 0,
    explanation:
      "The 'passive-interface' command prevents OSPF from sending routing updates on the specified interface, while still including it in the routing process.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "RIP version 2 supports classless routing and VLSM.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RIPv2 supports classless routing and Variable Length Subnet Masking (VLSM), unlike RIPv1.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the IP routing table on a Cisco router?",
    options: [
      "show ip arp",
      "show ip route",
      "show running-config",
      "show interfaces",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip route' command displays the IP routing table, showing all routes and their sources.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two features are supported by IPv6? (Choose two)",
    options: [
      "Broadcast addressing",
      "128-bit addressing",
      "Stateful autoconfiguration",
      "ARP",
      "Multicast addressing",
    ],
    correctAnswer: [1, 4],
    explanation:
      "IPv6 uses 128-bit addressing and supports multicast addressing. It does not use broadcasts or ARP (replaced by NDP) and supports both stateful and stateless autoconfiguration.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the maximum hop count for RIP?",
    options: ["15", "16", "255", "Unlimited"],
    correctAnswer: 0,
    explanation:
      "RIP has a maximum hop count of 15; a hop count of 16 is considered unreachable.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "A floating static route has a higher administrative distance than a dynamically learned route.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A floating static route is configured with a higher administrative distance to act as a backup for dynamically learned routes.",
  },

  // IP Services (10%, ~5 questions)
  {
    category: "IP Services",
    type: "single",
    question:
      "Which protocol is used to synchronize clocks on network devices?",
    options: ["DHCP", "NTP", "SNMP", "DNS"],
    correctAnswer: 1,
    explanation:
      "NTP (Network Time Protocol) synchronizes clocks on network devices for consistent timekeeping.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "NAT overload uses PAT to map multiple private IP addresses to a single public IP address.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NAT overload, or Port Address Translation (PAT), maps multiple private IP addresses to one public IP address using unique port numbers.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands are used to configure NAT on a Cisco router? (Choose two)",
    options: [
      "ip nat inside",
      "ip nat outside",
      "access-list 1 permit 192.168.1.0 0.0.0.255",
      "ip nat pool mypool 192.168.1.1 192.168.1.1 netmask 255.255.255.0",
      "ip nat enable",
    ],
    correctAnswer: [0, 1],
    explanation:
      "The 'ip nat inside' and 'ip nat outside' commands designate interfaces as inside or outside for NAT operation.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "What does the command 'ip dhcp pool MYPOOL' configure on a Cisco router?",
    options: [
      "A static IP address",
      "A DHCP address pool",
      "A NAT pool",
      "A VLAN interface",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip dhcp pool MYPOOL' command creates a DHCP address pool for assigning IP addresses to clients.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "SNMPv3 supports authentication and encryption for secure communication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SNMPv3 provides authentication and encryption, enhancing security over previous versions.",
  },

  // Security Fundamentals (15%, ~8 questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which protocol is used for secure remote access to a Cisco device?",
    options: ["Telnet", "SSH", "HTTP", "SNMP"],
    correctAnswer: 1,
    explanation:
      "SSH (Secure Shell) provides secure remote access to Cisco devices, encrypting all traffic.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "Port security limits the number of MAC addresses allowed on a switch port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Port security restricts the number of MAC addresses on a switch port to prevent unauthorized access.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands are used to enable port security on a Cisco switch? (Choose two)",
    options: [
      "switchport port-security",
      "switchport mode access",
      "switchport port-security maximum 2",
      "switchport trunk encapsulation dot1q",
      "spanning-tree portfast",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'switchport port-security' enables port security, and 'switchport port-security maximum 2' sets the maximum number of MAC addresses allowed.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of an access control list (ACL)?",
    options: [
      "Assign IP addresses",
      "Filter network traffic",
      "Encrypt data",
      "Synchronize clocks",
    ],
    correctAnswer: 1,
    explanation:
      "ACLs filter network traffic based on defined rules, controlling access and security.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "A standard ACL can filter traffic based on both source and destination IP addresses.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A standard ACL filters traffic based only on the source IP address; extended ACLs filter on both source and destination.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables AAA on a Cisco device?",
    options: [
      "aaa new-model",
      "aaa authentication",
      "aaa authorization",
      "aaa accounting",
    ],
    correctAnswer: 0,
    explanation:
      "The 'aaa new-model' command enables Authentication, Authorization, and Accounting (AAA) services on a Cisco device.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two features does 802.1X provide? (Choose two)",
    options: [
      "Port-based authentication",
      "VLAN segmentation",
      "User authentication",
      "Loop prevention",
      "Traffic encryption",
    ],
    correctAnswer: [0, 2],
    explanation:
      "802.1X provides port-based authentication and user authentication, ensuring only authorized devices and users access the network.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "DHCP snooping prevents unauthorized DHCP servers from assigning IP addresses.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DHCP snooping filters DHCP messages to prevent rogue DHCP servers from assigning IP addresses.",
  },

  // Automation and Programmability (10%, ~5 questions)
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which data format is commonly used in network automation for configuration files?",
    options: ["XML", "JSON", "HTML", "CSV"],
    correctAnswer: 1,
    explanation:
      "JSON is widely used in network automation for its lightweight, human-readable structure suitable for configuration data.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "REST APIs use HTTP methods like GET and POST to interact with network devices.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. REST APIs use HTTP methods (GET, POST, PUT, DELETE) to perform operations on network devices.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two tools are used for network automation? (Choose two)",
    options: ["Ansible", "Packet Tracer", "Python", "Wireshark", "GNS3"],
    correctAnswer: [0, 2],
    explanation:
      "Ansible and Python are commonly used for network automation, enabling programmatic configuration and management of devices.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What does SDN stand for in the context of network automation?",
    options: [
      "Secure Digital Network",
      "Software-Defined Networking",
      "Static Data Network",
      "Systematic Device Negotiation",
    ],
    correctAnswer: 1,
    explanation:
      "SDN stands for Software-Defined Networking, which separates the control plane from the data plane for flexible network management.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "YANG is a data modeling language used to define the structure of configuration and state data.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. YANG is used to model configuration and state data for network devices, often with NETCONF.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which device operates at the Physical layer of the OSI model?",
    options: ["Router", "Switch", "Hub", "Firewall"],
    correctAnswer: 2,
    explanation:
      "A hub operates at the Physical layer (Layer 1), transmitting raw bits over the network without processing frames or packets.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "The broadcast address for a subnet is always the last address in the subnet range.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The broadcast address is the last address in a subnet, used to send data to all devices in that subnet.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two protocols are connection-oriented? (Choose two)",
    options: ["UDP", "TCP", "ICMP", "FTP", "IP"],
    correctAnswer: [1, 3],
    explanation:
      "TCP and FTP are connection-oriented, ensuring reliable data transfer with acknowledgments. UDP, ICMP, and IP are connectionless.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the maximum transmission unit (MTU) for Ethernet frames by default?",
    options: ["64 bytes", "128 bytes", "1500 bytes", "9216 bytes"],
    correctAnswer: 2,
    explanation:
      "The default MTU for Ethernet frames is 1500 bytes, excluding the frame header and trailer.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "IPv4 addresses are 32 bits long and expressed in dotted-decimal notation.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv4 addresses are 32 bits, typically written in dotted-decimal format (e.g., 192.168.1.1).",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which type of cable is used to connect a switch to a router?",
    options: ["Straight-through", "Crossover", "Rollover", "Fiber"],
    correctAnswer: 0,
    explanation:
      "A straight-through cable is used to connect dissimilar devices, such as a switch to a router.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two characteristics describe a collision domain? (Choose two)",
    options: [
      "Devices share the same bandwidth",
      "Only one device can transmit at a time",
      "It spans multiple VLANs",
      "It is defined by routers",
      "It uses CSMA/CD",
    ],
    correctAnswer: [1, 4],
    explanation:
      "In a collision domain, only one device can transmit at a time, and devices use CSMA/CD to manage access. VLANs and routers separate collision domains.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the subnet mask in an IP address?",
    options: [
      "Identify the device",
      "Determine the network portion",
      "Assign the default gateway",
      "Encrypt the address",
    ],
    correctAnswer: 1,
    explanation:
      "The subnet mask determines which portion of an IP address is the network part and which is the host part.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A switch creates a separate collision domain for each port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Each switch port is its own collision domain, unlike a hub, which shares a single collision domain.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol resolves domain names to IP addresses?",
    options: ["DHCP", "DNS", "ARP", "NTP"],
    correctAnswer: 1,
    explanation:
      "DNS (Domain Name System) resolves domain names (e.g., www.example.com) to IP addresses.",
  },

  // Network Access (20%, 10 new questions)
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. A switch port is configured with 'switchport access vlan 10'. What happens if VLAN 10 does not exist on the switch?",
    options: [
      "The port is disabled",
      "The command is rejected",
      "VLAN 10 is automatically created",
      "The port remains in VLAN 1",
    ],
    correctAnswer: 1,
    explanation:
      "If VLAN 10 does not exist, the 'switchport access vlan 10' command is rejected, and the port remains in its current VLAN (typically VLAN 1).",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "The Rapid Per-VLAN Spanning Tree (PVST) protocol allows a separate STP instance for each VLAN.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Rapid PVST allows a separate STP instance per VLAN, improving convergence and flexibility.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands are used to configure a VLAN on a Cisco switch? (Choose two)",
    options: [
      "vlan 10",
      "name VLAN10",
      "switchport mode trunk",
      "switchport access vlan 10",
      "interface vlan 10",
    ],
    correctAnswer: [0, 1],
    explanation:
      "The 'vlan 10' command creates VLAN 10, and 'name VLAN10' assigns a name to it in VLAN configuration mode.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the default priority value for a switch in Spanning Tree Protocol?",
    options: ["8192", "16384", "32768", "65535"],
    correctAnswer: 2,
    explanation:
      "The default STP priority for a switch is 32768, which can be modified to influence root bridge selection.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "A trunk port carries traffic for multiple VLANs by default.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A trunk port carries traffic for all VLANs unless restricted by a VLAN allowed list.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which protocol is used for link aggregation on Cisco devices?",
    options: ["STP", "VTP", "LACP", "CDP"],
    correctAnswer: 2,
    explanation:
      "LACP (Link Aggregation Control Protocol) is used for link aggregation, enabling EtherChannel on Cisco devices.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two benefits does EtherChannel provide? (Choose two)",
    options: [
      "Increased bandwidth",
      "Loop prevention",
      "Load balancing",
      "VLAN segmentation",
      "Automatic IP assignment",
    ],
    correctAnswer: [0, 2],
    explanation:
      "EtherChannel increases bandwidth by aggregating links and provides load balancing across the bundled links.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the purpose of the 'switchport nonegotiate' command?",
    options: [
      "Disable DTP negotiation",
      "Enable VLAN tagging",
      "Set the port as an access port",
      "Prevent STP convergence",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport nonegotiate' command disables Dynamic Trunking Protocol (DTP), preventing automatic trunk negotiation.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "VTP pruning reduces unnecessary VLAN traffic on trunk links.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VTP pruning prevents unnecessary VLAN traffic from being sent over trunk links, optimizing bandwidth.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command displays the VLAN database on a Cisco switch?",
    options: [
      "show vlan brief",
      "show running-config",
      "show interfaces",
      "show vlan database",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show vlan brief' command displays the VLAN database, including VLAN IDs and associated ports.",
  },

  // IP Connectivity (25%, 13 new questions)
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the broadcast address for the subnet 10.1.1.0/27?",
    options: ["10.1.1.31", "10.1.1.32", "10.1.1.63", "10.1.1.255"],
    correctAnswer: 0,
    explanation:
      "For a /27 subnet (increment 32), the subnet 10.1.1.0–10.1.1.31 has a broadcast address of 10.1.1.31.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "EIGRP uses the Diffusing Update Algorithm (DUAL) to calculate the best path.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. EIGRP uses DUAL to calculate the best loop-free paths and maintain backup routes.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands are required to enable OSPF on a Cisco router? (Choose two)",
    options: [
      "router ospf 10",
      "network 192.168.1.0 0.0.0.255 area 0",
      "ip ospf enable",
      "ospf router-id 1.1.1.1",
      "ip routing",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'router ospf 10' enables the OSPF process, and 'network 192.168.1.0 0.0.0.255 area 0' advertises the network in OSPF.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which protocol is used to discover the Layer 2 address of a directly connected device?",
    options: ["DNS", "DHCP", "ARP", "ICMP"],
    correctAnswer: 2,
    explanation:
      "ARP (Address Resolution Protocol) discovers the MAC address of a device given its IP address.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "A router uses the longest prefix match to forward packets.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Routers select the route with the longest prefix match (most specific subnet mask) for packet forwarding.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the administrative distance of a static route by default?",
    options: ["1", "90", "110", "120"],
    correctAnswer: 0,
    explanation:
      "A static route has a default administrative distance of 1, making it highly preferred.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two characteristics describe OSPF areas? (Choose two)",
    options: [
      "All routers share the same LSDB",
      "Area 0 is the backbone area",
      "Each area requires a separate routing table",
      "All areas must connect to Area 0",
      "Areas are used only in single-router networks",
    ],
    correctAnswer: [1, 3],
    explanation:
      "OSPF Area 0 is the backbone, and all other areas must connect to it. Routers in the same area share the same LSDB, but each router maintains one routing table.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the ARP table on a Cisco router?",
    options: [
      "show arp",
      "show ip arp",
      "show mac address-table",
      "show ip route",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip arp' command displays the ARP table, mapping IP addresses to MAC addresses.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "IPv6 uses Neighbor Discovery Protocol (NDP) instead of ARP.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 uses NDP for address resolution, replacing ARP used in IPv4.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the purpose of the 'ip default-gateway' command on a Cisco switch?",
    options: [
      "Configure a static route",
      "Set the default gateway for the switch",
      "Enable IP routing",
      "Assign an IP address to an interface",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip default-gateway' command sets the default gateway for a switch to forward packets to networks it doesn’t know.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands can verify OSPF neighbor relationships? (Choose two)",
    options: [
      "show ip ospf neighbor",
      "show ip route",
      "show ip ospf interface",
      "show running-config",
      "show ip protocols",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'show ip ospf neighbor' displays OSPF neighbor states, and 'show ip ospf interface' shows OSPF-enabled interfaces and their status.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the default metric used by RIP to determine the best path?",
    options: ["Bandwidth", "Delay", "Hop count", "Cost"],
    correctAnswer: 2,
    explanation: "RIP uses hop count as its metric, with a maximum of 15 hops.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "HSRP provides redundancy by allowing multiple routers to share a virtual IP address.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. HSRP (Hot Standby Router Protocol) allows multiple routers to share a virtual IP address for gateway redundancy.",
  },

  // IP Services (10%, 5 new questions)
  {
    category: "IP Services",
    type: "single",
    question: "Which command enables a Cisco router to act as a DHCP server?",
    options: ["ip dhcp server", "ip dhcp pool", "service dhcp", "dhcp enable"],
    correctAnswer: 2,
    explanation:
      "The 'service dhcp' command enables the DHCP server feature on a Cisco router.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "Static NAT maps a single private IP address to a single public IP address.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Static NAT creates a one-to-one mapping between a private and a public IP address.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two protocols are used for network monitoring? (Choose two)",
    options: ["SNMP", "NTP", "Syslog", "DHCP", "DNS"],
    correctAnswer: [0, 2],
    explanation:
      "SNMP and Syslog are used for network monitoring, collecting device statistics and logging events, respectively.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'ip helper-address' command?",
    options: [
      "Enable NAT",
      "Forward DHCP requests",
      "Configure a static route",
      "Set the time zone",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip helper-address' command forwards DHCP requests from a local subnet to a remote DHCP server.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "QoS can prioritize certain types of traffic to reduce latency.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Quality of Service (QoS) prioritizes traffic to manage bandwidth and reduce latency for critical applications.",
  },

  // Security Fundamentals (15%, 8 new questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables password encryption on a Cisco device?",
    options: [
      "enable password",
      "service password-encryption",
      "password encrypt",
      "crypto key generate rsa",
    ],
    correctAnswer: 1,
    explanation:
      "The 'service password-encryption' command encrypts passwords in the configuration for added security.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "A VLAN access control list (VACL) filters traffic within a VLAN.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VACLs filter traffic within or between VLANs on a switch.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure a standard ACL on a Cisco router? (Choose two)",
    options: [
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "ip access-group 10 in",
      "access-list 100 permit tcp any any",
      "ip access-list standard 10",
      "interface vlan 10",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'access-list 10 permit 192.168.1.0 0.0.0.255' defines a standard ACL, and 'ip access-group 10 in' applies it to an interface.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'crypto key generate rsa' command?",
    options: [
      "Enable NAT",
      "Generate SSH keys",
      "Configure an ACL",
      "Set the device hostname",
    ],
    correctAnswer: 1,
    explanation:
      "The 'crypto key generate rsa' command generates RSA keys for secure SSH access.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "Dynamic ARP Inspection (DAI) prevents ARP spoofing attacks.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DAI validates ARP packets to prevent ARP spoofing by checking against a DHCP snooping binding table.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which feature restricts devices based on their MAC addresses on a switch port?",
    options: ["802.1X", "Port security", "VACL", "DAI"],
    correctAnswer: 1,
    explanation:
      "Port security restricts devices by limiting the MAC addresses allowed on a switch port.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two security features protect against unauthorized network access? (Choose two)",
    options: [
      "Port security",
      "VTP pruning",
      "802.1X authentication",
      "STP",
      "EtherChannel",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Port security limits MAC addresses, and 802.1X authenticates devices, both preventing unauthorized access.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "A Cisco switch can use a RADIUS server for user authentication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Cisco switches support RADIUS for centralized user authentication, often with 802.1X.",
  },

  // Automation and Programmability (10%, 5 new questions)
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which protocol is used with YANG for network device configuration?",
    options: ["SNMP", "NETCONF", "REST", "FTP"],
    correctAnswer: 1,
    explanation:
      "NETCONF is used with YANG to manage and configure network devices programmatically.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "Python scripts can use the 'requests' library to interact with REST APIs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'requests' library in Python is commonly used to make HTTP requests to REST APIs.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two characteristics describe SDN? (Choose two)",
    options: [
      "Centralized control plane",
      "Distributed data plane",
      "Uses proprietary protocols only",
      "Requires manual configuration",
      "Separates control and data planes",
    ],
    correctAnswer: [0, 4],
    explanation:
      "SDN centralizes the control plane and separates it from the data plane for flexible network management.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What does the acronym API stand for in network automation?",
    options: [
      "Automated Protocol Interface",
      "Application Programming Interface",
      "Advanced Packet Inspection",
      "Application Protocol Integration",
    ],
    correctAnswer: 1,
    explanation:
      "API stands for Application Programming Interface, enabling programmatic interaction with network devices.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "Ansible uses SSH to manage network devices without requiring agents.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Ansible is agentless and uses SSH to manage network devices, simplifying automation.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which OSI layer is responsible for data compression and encryption?",
    options: [
      "Physical",
      "Data Link",
      "Network",
      "Presentation",
      "Application",
    ],
    correctAnswer: 3,
    explanation:
      "The Presentation layer (Layer 6) handles data compression, encryption, and translation to ensure data is in a usable format.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "A hub operates by broadcasting all received frames to every connected device.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A hub broadcasts all frames to all ports, creating a single collision domain.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two protocols operate at the Transport layer of the OSI model? (Choose two)",
    options: ["HTTP", "TCP", "UDP", "IP", "ICMP"],
    correctAnswer: [1, 2],
    explanation:
      "TCP and UDP are Transport layer (Layer 4) protocols, managing data transfer reliability and flow control. HTTP, IP, and ICMP operate at other layers.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the range of private IP addresses for Class A networks?",
    options: [
      "10.0.0.0 - 10.255.255.255",
      "172.16.0.0 - 172.31.255.255",
      "192.168.0.0 - 192.168.255.255",
      "169.254.0.0 - 169.254.255.255",
    ],
    correctAnswer: 0,
    explanation:
      "The Class A private IP range is 10.0.0.0–10.255.255.255, as defined by RFC 1918.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "The loopback address 127.0.0.1 is used to test network connectivity on a local device.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The loopback address 127.0.0.1 is used to test the TCP/IP stack on a local device.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which type of network topology connects all devices to a single central point?",
    options: ["Bus", "Star", "Ring", "Mesh"],
    correctAnswer: 1,
    explanation:
      "A star topology connects all devices to a central point, such as a switch or hub.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two characteristics describe a full-duplex Ethernet connection? (Choose two)",
    options: [
      "Data can be sent and received simultaneously",
      "It requires a hub",
      "It eliminates collisions",
      "It uses CSMA/CD",
      "It is limited to 100 Mbps",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Full-duplex allows simultaneous sending and receiving, eliminating collisions. Hubs don’t support full-duplex, CSMA/CD is for half-duplex, and speeds vary.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the decimal equivalent of the binary IP address 11000000.10101000.00000000.00000001?",
    options: ["192.168.0.0", "192.168.0.1", "192.168.1.0", "192.168.1.1"],
    correctAnswer: 1,
    explanation:
      "Converting 11000000.10101000.00000000.00000001 to decimal gives 192.168.0.1.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "The Transport layer uses port numbers to identify applications.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The Transport layer uses port numbers to differentiate between applications and services.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which protocol is used to detect network errors and unreachable destinations?",
    options: ["ARP", "DHCP", "ICMP", "DNS"],
    correctAnswer: 2,
    explanation:
      "ICMP (Internet Control Message Protocol) is used for error reporting and diagnostics, such as ping.",
  },

  // Network Access (20%, 10 new questions)
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. A switch port is configured with 'switchport mode trunk'. What happens if the connected device does not support trunking?",
    options: [
      "The port becomes an access port",
      "The port is disabled",
      "The link fails to establish",
      "The port continues as a trunk",
    ],
    correctAnswer: 2,
    explanation:
      "If the connected device does not support trunking, the link may fail due to mismatched configurations, as trunking requires both sides to agree.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "The command 'spanning-tree vlan 10 root primary' makes a switch the root bridge for VLAN 10.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'spanning-tree vlan 10 root primary' command sets the switch as the root bridge for VLAN 10 by lowering its priority.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands configure a switch port as an access port for VLAN 20? (Choose two)",
    options: [
      "switchport mode access",
      "switchport access vlan 20",
      "switchport mode trunk",
      "vlan 20",
      "switchport trunk allowed vlan 20",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'switchport mode access' sets the port to access mode, and 'switchport access vlan 20' assigns it to VLAN 20.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the purpose of the 'spanning-tree portfast' command?",
    options: [
      "Enable rapid STP convergence",
      "Bypass Listening and Learning states",
      "Set the switch as the root bridge",
      "Disable STP on a port",
    ],
    correctAnswer: 1,
    explanation:
      "The 'spanning-tree portfast' command bypasses the Listening and Learning states for faster convergence on access ports.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "VTP operates in three modes: Server, Client, and Transparent.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VTP (VLAN Trunking Protocol) operates in Server, Client, and Transparent modes to manage VLAN configurations.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which IEEE standard defines VLAN tagging?",
    options: ["802.1Q", "802.3af", "802.1X", "802.3ad"],
    correctAnswer: 0,
    explanation:
      "IEEE 802.1Q defines VLAN tagging, used to identify VLANs on trunk links.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two features does Rapid Per-VLAN Spanning Tree (PVST) provide? (Choose two)",
    options: [
      "Faster convergence than traditional STP",
      "Separate STP instance per VLAN",
      "Automatic VLAN creation",
      "Load balancing across VLANs",
      "Port security",
    ],
    correctAnswer: [0, 1],
    explanation:
      "Rapid PVST offers faster convergence and a separate STP instance for each VLAN, enabling per-VLAN optimization.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command displays the status of trunk ports on a Cisco switch?",
    options: [
      "show vlan brief",
      "show interfaces trunk",
      "show running-config",
      "show spanning-tree",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show interfaces trunk' command displays the status and configuration of trunk ports, including allowed VLANs.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "A switch port in dynamic auto mode will form a trunk if the other side is set to trunk or dynamic desirable.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Dynamic auto ports will form a trunk if the other side initiates trunking (trunk or dynamic desirable mode).",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the maximum number of ports that can be bundled in an EtherChannel on most Cisco switches?",
    options: ["4", "8", "16", "32"],
    correctAnswer: 1,
    explanation:
      "Most Cisco switches support up to 8 ports in an EtherChannel for link aggregation.",
  },

  // IP Connectivity (25%, 13 new questions)
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the last usable host address in the subnet 172.16.4.0/22?",
    options: ["172.16.4.255", "172.16.5.255", "172.16.7.254", "172.16.7.255"],
    correctAnswer: 2,
    explanation:
      "For a /22 subnet (increment 4), the subnet 172.16.4.0–172.16.7.255 has the last usable host address as 172.16.7.254.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "OSPF routers in the same area share the same link-state database.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. OSPF routers in the same area maintain an identical link-state database for consistent routing decisions.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands configure a default route on a Cisco router? (Choose two)",
    options: [
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "ip default-gateway 192.168.1.1",
      "ip route 0.0.0.0 255.255.255.255 192.168.1.1",
      "router ospf 1",
      "ip route 0.0.0.0 0.0.0.0 serial0/0/0",
    ],
    correctAnswer: [0, 4],
    explanation:
      "A default route is configured with 'ip route 0.0.0.0 0.0.0.0' followed by a next-hop IP (e.g., 192.168.1.1) or exit interface (e.g., serial0/0/0).",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which protocol uses an autonomous system number for routing between organizations?",
    options: ["OSPF", "EIGRP", "BGP", "RIP"],
    correctAnswer: 2,
    explanation:
      "BGP (Border Gateway Protocol) uses autonomous system numbers for inter-domain routing between organizations.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "A router will prefer a route with a lower administrative distance over one with a higher administrative distance.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A lower administrative distance indicates a more preferred route in Cisco routing.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the default hello interval for OSPF on a point-to-point link?",
    options: ["10 seconds", "30 seconds", "40 seconds", "120 seconds"],
    correctAnswer: 0,
    explanation:
      "The default OSPF hello interval is 10 seconds on point-to-point and broadcast links.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two features are supported by EIGRP? (Choose two)",
    options: [
      "Classless routing",
      "MD5 authentication",
      "Hop count metric",
      "Area-based routing",
      "Automatic summarization",
    ],
    correctAnswer: [0, 1],
    explanation:
      "EIGRP supports classless routing (VLSM) and MD5 authentication for secure neighbor relationships.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command shows the OSPF adjacency state on a Cisco router?",
    options: [
      "show ip route",
      "show ip ospf neighbor",
      "show ip protocols",
      "show running-config",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip ospf neighbor' command displays the state of OSPF adjacencies, such as FULL or 2WAY.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "IPv6 link-local addresses always begin with FE80::/10.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 link-local addresses start with FE80::/10 and are used for communication within a single link.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the purpose of the 'ip route' command?",
    options: [
      "Configure a static route",
      "Enable dynamic routing",
      "Assign an IP address",
      "Set the default gateway",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip route' command configures a static route, specifying the destination network and next-hop or exit interface.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two protocols support IPv6 routing? (Choose two)",
    options: ["RIP", "OSPFv3", "EIGRP for IPv6", "BGPv2", "HSRP"],
    correctAnswer: [1, 2],
    explanation:
      "OSPFv3 and EIGRP for IPv6 are routing protocols designed to support IPv6 networks.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the maximum path cost in STP for a 100 Mbps link?",
    options: ["4", "19", "100", "1000"],
    correctAnswer: 1,
    explanation:
      "The STP path cost for a 100 Mbps link is 19, as defined by the IEEE 802.1D standard.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "VRRP is an open standard protocol for gateway redundancy.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VRRP (Virtual Router Redundancy Protocol) is an open standard for providing gateway redundancy.",
  },

  // IP Services (10%, 5 new questions)
  {
    category: "IP Services",
    type: "single",
    question: "Which command displays the DHCP bindings on a Cisco router?",
    options: [
      "show ip dhcp pool",
      "show ip dhcp binding",
      "show ip dhcp server",
      "show running-config",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip dhcp binding' command displays the IP-to-MAC address mappings assigned by a DHCP server.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "PAT allows multiple devices to share a single public IP address using unique port numbers.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Port Address Translation (PAT) maps multiple private IP addresses to one public IP using unique port numbers.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands are used to configure a syslog server on a Cisco device? (Choose two)",
    options: [
      "logging host 192.168.1.100",
      "logging trap informational",
      "logging enable",
      "ip syslog server",
      "service syslog",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'logging host 192.168.1.100' specifies the syslog server, and 'logging trap informational' sets the logging level to informational.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'ntp server' command?",
    options: [
      "Configure a DHCP server",
      "Set the time zone",
      "Specify an NTP server",
      "Enable SNMP",
    ],
    correctAnswer: 2,
    explanation:
      "The 'ntp server' command configures a Cisco device to synchronize its clock with a specified NTP server.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "HSRP version 2 supports IPv6 addressing.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. HSRP version 2 supports IPv6, unlike version 1, which is limited to IPv4.",
  },

  // Security Fundamentals (15%, 8 new questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command applies an access list to an interface on a Cisco router?",
    options: [
      "access-list 10 permit",
      "ip access-group 10 in",
      "ip access-list standard 10",
      "access-class 10 in",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip access-group 10 in' command applies access list 10 to an interface in the inbound direction.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "An extended ACL can filter traffic based on source and destination IP addresses and ports.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Extended ACLs filter traffic based on source and destination IP addresses, ports, and protocols.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands are required to enable SSH on a Cisco router? (Choose two)",
    options: [
      "crypto key generate rsa",
      "transport input ssh",
      "ip ssh enable",
      "hostname R1",
      "ip ssh version 2",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'crypto key generate rsa' creates RSA keys, and 'transport input ssh' enables SSH on VTY lines.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the purpose of the 'switchport port-security violation shutdown' command?",
    options: [
      "Disable the port on a security violation",
      "Log the violation",
      "Restrict MAC addresses",
      "Enable 802.1X",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport port-security violation shutdown' command shuts down the port when a security violation occurs.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "802.1X requires a RADIUS or TACACS+ server for authentication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. 802.1X uses a RADIUS or TACACS+ server for centralized authentication of devices.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which feature prevents unauthorized DHCP servers on a network?",
    options: [
      "Port security",
      "DHCP snooping",
      "Dynamic ARP Inspection",
      "802.1X",
    ],
    correctAnswer: 1,
    explanation:
      "DHCP snooping prevents unauthorized DHCP servers by filtering untrusted DHCP messages.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two protocols can be used for AAA authentication on Cisco devices? (Choose two)",
    options: ["RADIUS", "TACACS+", "SNMP", "NTP", "Syslog"],
    correctAnswer: [0, 1],
    explanation:
      "RADIUS and TACACS+ are used for AAA authentication, providing centralized user authentication and authorization.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'login local' command requires a local username and password database.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'login local' command uses a locally configured username and password for authentication.",
  },

  // Automation and Programmability (10%, 5 new questions)
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which HTTP method is used to retrieve data from a REST API?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: 1,
    explanation:
      "The GET method retrieves data from a REST API without modifying the resource.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "NETCONF uses XML to encode configuration data.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NETCONF uses XML to encode configuration and operational data for network devices.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two benefits does network automation provide? (Choose two)",
    options: [
      "Increased manual configuration",
      "Reduced human error",
      "Consistent configurations",
      "Slower deployment",
      "Higher bandwidth usage",
    ],
    correctAnswer: [1, 2],
    explanation:
      "Network automation reduces human error and ensures consistent configurations across devices.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the YANG data model?",
    options: [
      "Encrypt network traffic",
      "Define configuration data structure",
      "Monitor device performance",
      "Assign IP addresses",
    ],
    correctAnswer: 1,
    explanation:
      "YANG defines the structure and syntax of configuration and state data for network devices.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "Puppet requires an agent to be installed on managed network devices.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Puppet uses agents on managed devices to apply configurations, unlike agentless tools like Ansible.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which OSI layer provides flow control and error recovery for end-to-end communication?",
    options: ["Physical", "Data Link", "Network", "Transport", "Application"],
    correctAnswer: 3,
    explanation:
      "The Transport layer (Layer 4) provides flow control, error recovery, and reliable end-to-end communication using protocols like TCP.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A switch uses MAC addresses to forward frames within a LAN.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A switch operates at the Data Link layer and uses MAC addresses to forward frames to the correct destination within a LAN.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two characteristics describe a circuit-switched network? (Choose two)",
    options: [
      "Dedicated bandwidth",
      "Packet-based transmission",
      "Connection-oriented",
      "Best-effort delivery",
      "High latency",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Circuit-switched networks, like traditional telephone systems, provide dedicated bandwidth and are connection-oriented, establishing a dedicated path before communication.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the range of private IP addresses for Class C networks?",
    options: [
      "10.0.0.0 - 10.255.255.255",
      "172.16.0.0 - 172.31.255.255",
      "192.168.0.0 - 192.168.255.255",
      "169.254.0.0 - 169.254.255.255",
    ],
    correctAnswer: 2,
    explanation:
      "The Class C private IP range is 192.168.0.0–192.168.255.255, as defined by RFC 1918.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "The APIPA address range is 169.254.0.0/16.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. APIPA (Automatic Private IP Addressing) uses the range 169.254.0.0/16 for automatic IP assignment when DHCP fails.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which device connects multiple network segments and forwards packets based on IP addresses?",
    options: ["Hub", "Switch", "Router", "Bridge"],
    correctAnswer: 2,
    explanation:
      "A router operates at the Network layer (Layer 3) and forwards packets between network segments based on IP addresses.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two types of addresses are used in IPv6? (Choose two)",
    options: ["Broadcast", "Unicast", "Multicast", "Anycast", "Loopback"],
    correctAnswer: [1, 2],
    explanation:
      "IPv6 uses unicast addresses for one-to-one communication and multicast addresses for one-to-many communication. Broadcasts are not used in IPv6.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the CRC in an Ethernet frame?",
    options: [
      "Identify the source device",
      "Detect transmission errors",
      "Encrypt the payload",
      "Assign VLAN tags",
    ],
    correctAnswer: 1,
    explanation:
      "The CRC (Cyclic Redundancy Check) in an Ethernet frame is used to detect transmission errors by verifying data integrity.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "A broadcast domain includes all devices that receive a broadcast frame.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A broadcast domain encompasses all devices that receive a broadcast frame, typically separated by routers or VLANs.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which protocol is used to manage IP address assignments in a network?",
    options: ["ICMP", "DHCP", "DNS", "SNMP"],
    correctAnswer: 1,
    explanation:
      "DHCP (Dynamic Host Configuration Protocol) manages IP address assignments, providing automatic configuration to devices.",
  },

  // Network Access (20%, 10 new questions)
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. A switch is configured with 'switchport mode dynamic desirable'. What happens if the connected device is set to access mode?",
    options: [
      "The port becomes a trunk",
      "The port remains in access mode",
      "The port is disabled",
      "The link fails",
    ],
    correctAnswer: 1,
    explanation:
      "If the connected device is in access mode, the switch port in dynamic desirable mode will negotiate to remain in access mode, as trunking requires mutual agreement.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "The command 'spanning-tree mode rapid' enables Rapid Per-VLAN Spanning Tree on a Cisco switch.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'spanning-tree mode rapid' command enables Rapid Per-VLAN Spanning Tree (PVST) for faster convergence.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands are used to configure an EtherChannel on a Cisco switch? (Choose two)",
    options: [
      "channel-group 1 mode active",
      "interface port-channel 1",
      "switchport mode trunk",
      "spanning-tree portfast",
      "lacp enable",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'channel-group 1 mode active' configures the port for LACP, and 'interface port-channel 1' creates the logical EtherChannel interface.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the default VLAN used for Cisco Discovery Protocol (CDP) traffic?",
    options: ["VLAN 1", "VLAN 10", "VLAN 100", "Native VLAN"],
    correctAnswer: 0,
    explanation:
      "CDP traffic is sent over the default VLAN, which is VLAN 1 on Cisco switches, unless otherwise configured.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "The 'switchport trunk allowed vlan 10,20' command restricts the trunk to only VLANs 10 and 20.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. This command limits the trunk to carry traffic only for VLANs 10 and 20, excluding others.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which feature improves STP convergence time on access ports connected to end devices?",
    options: ["PortFast", "BPDU Guard", "Root Guard", "Loop Guard"],
    correctAnswer: 0,
    explanation:
      "PortFast bypasses the Listening and Learning states on access ports, improving STP convergence for end devices.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two protocols are used for VLAN management on Cisco switches? (Choose two)",
    options: ["VTP", "STP", "LACP", "DTP", "CDP"],
    correctAnswer: [0, 3],
    explanation:
      "VTP (VLAN Trunking Protocol) manages VLAN configurations, and DTP (Dynamic Trunking Protocol) negotiates trunking between switches.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command displays the Spanning Tree status for VLAN 10 on a Cisco switch?",
    options: [
      "show spanning-tree",
      "show spanning-tree vlan 10",
      "show vlan brief",
      "show interfaces trunk",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show spanning-tree vlan 10' command displays detailed STP information specific to VLAN 10.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "BPDU Guard disables a port if it receives a BPDU on a PortFast-enabled port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. BPDU Guard protects PortFast ports by disabling them if a BPDU is received, preventing potential loops.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the purpose of the native VLAN on a trunk link?",
    options: [
      "Carry tagged traffic",
      "Carry untagged traffic",
      "Prevent VLAN hopping",
      "Assign IP addresses",
    ],
    correctAnswer: 1,
    explanation:
      "The native VLAN carries untagged traffic on a trunk link, typically VLAN 1 unless changed.",
  },

  // IP Connectivity (25%, 13 new questions)
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the network address for the IP address 192.168.15.100/26?",
    options: [
      "192.168.15.0",
      "192.168.15.64",
      "192.168.15.96",
      "192.168.15.128",
    ],
    correctAnswer: 1,
    explanation:
      "For a /26 subnet (increment 64), 192.168.15.100 falls in the subnet 192.168.15.64–192.168.15.127, with the network address 192.168.15.64.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "RIP automatically summarizes routes to classful boundaries by default.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RIPv2 summarizes routes to classful boundaries unless the 'no auto-summary' command is used.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands are used to configure EIGRP on a Cisco router? (Choose two)",
    options: [
      "router eigrp 100",
      "network 192.168.1.0 0.0.0.255",
      "ip eigrp enable",
      "eigrp router-id 1.1.1.1",
      "ip routing",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'router eigrp 100' enables EIGRP with AS 100, and 'network 192.168.1.0 0.0.0.255' advertises the specified network.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which protocol uses a cost metric based on link-state information?",
    options: ["RIP", "OSPF", "EIGRP", "BGP"],
    correctAnswer: 1,
    explanation:
      "OSPF uses a cost metric based on link-state information, calculated from interface bandwidth.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "A static route with an administrative distance of 200 is considered a floating static route.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A static route with a higher administrative distance (e.g., 200) is a floating static route, used as a backup.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the default OSPF priority for electing the Designated Router (DR)?",
    options: ["0", "1", "100", "255"],
    correctAnswer: 1,
    explanation:
      "The default OSPF priority is 1; higher values increase the likelihood of becoming the DR.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands verify routing protocol operation on a Cisco router? (Choose two)",
    options: [
      "show ip route",
      "show ip protocols",
      "show running-config",
      "show interfaces",
      "show ip arp",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show ip route' displays the routing table, and 'show ip protocols' shows details about active routing protocols.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which command configures a router to advertise a network in OSPF Area 0?",
    options: [
      "network 192.168.1.0 0.0.0.255 area 0",
      "ip ospf 1 area 0",
      "ospf network 192.168.1.0",
      "area 0 network 192.168.1.0",
    ],
    correctAnswer: 0,
    explanation:
      "The 'network 192.168.1.0 0.0.0.255 area 0' command advertises the specified network in OSPF Area 0.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "IPv6 stateless autoconfiguration uses Router Advertisements to assign addresses.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 stateless autoconfiguration relies on Router Advertisements to provide network prefixes for address assignment.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the administrative distance of an EIGRP internal route?",
    options: ["90", "110", "120", "170"],
    correctAnswer: 0,
    explanation:
      "EIGRP internal routes have an administrative distance of 90, indicating high preference.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two characteristics describe HSRP? (Choose two)",
    options: [
      "Uses a virtual IP address",
      "Operates at Layer 2",
      "Provides gateway redundancy",
      "Uses a cost metric",
      "Supports IPv6",
    ],
    correctAnswer: [0, 2],
    explanation:
      "HSRP uses a virtual IP address and provides gateway redundancy by allowing multiple routers to act as a single gateway.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the EIGRP topology table?",
    options: [
      "show ip route",
      "show ip eigrp topology",
      "show ip eigrp neighbors",
      "show ip protocols",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip eigrp topology' command displays the EIGRP topology table, including successor and feasible successor routes.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "A router can have multiple default gateways configured.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A router typically uses a single default route (gateway), though multiple static routes can be configured for redundancy.",
  },

  // IP Services (10%, 5 new questions)
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command configures a Cisco router to exclude the first 10 IP addresses in a DHCP pool?",
    options: [
      "ip dhcp excluded-address 192.168.1.1 192.168.1.10",
      "dhcp exclude 192.168.1.1 192.168.1.10",
      "ip dhcp pool exclude 192.168.1.1 192.168.1.10",
      "exclude-address 192.168.1.1 192.168.1.10",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip dhcp excluded-address 192.168.1.1 192.168.1.10' command prevents the specified IP addresses from being assigned by the DHCP server.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "NTP uses UDP port 123 for communication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NTP (Network Time Protocol) uses UDP port 123 for time synchronization.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure static NAT on a Cisco router? (Choose two)",
    options: [
      "ip nat inside source static 192.168.1.1 209.165.200.1",
      "ip nat outside",
      "ip nat inside",
      "access-list 1 permit 192.168.1.0 0.0.0.255",
      "ip nat pool static 209.165.200.1 209.165.200.1",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'ip nat inside source static 192.168.1.1 209.165.200.1' maps a private to a public IP, and 'ip nat inside' designates the inside interface.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'logging synchronous' command?",
    options: [
      "Enable SNMP logging",
      "Synchronize console messages",
      "Configure a syslog server",
      "Enable DHCP logging",
    ],
    correctAnswer: 1,
    explanation:
      "The 'logging synchronous' command ensures console messages do not interrupt command input, improving usability.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "SNMP traps are sent to a management station to report events.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SNMP traps are unsolicited messages sent to a management station to report significant events.",
  },

  // Security Fundamentals (15%, 8 new questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command configures a local username and password on a Cisco device?",
    options: [
      "username admin password cisco",
      "enable password cisco",
      "login local",
      "crypto key generate rsa",
    ],
    correctAnswer: 0,
    explanation:
      "The 'username admin password cisco' command creates a local user account with the specified password.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "Port security can restrict a switch port to a specific MAC address.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Port security can limit a switch port to one or more specific MAC addresses to prevent unauthorized access.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands are used to configure an extended ACL? (Choose two)",
    options: [
      "access-list 100 permit tcp any any eq 80",
      "ip access-group 100 in",
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "ip access-list extended 100",
      "interface vlan 100",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'access-list 100 permit tcp any any eq 80' defines an extended ACL rule, and 'ip access-list extended 100' enters extended ACL configuration mode.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the purpose of the 'ip domain-name' command in SSH configuration?",
    options: [
      "Set the device hostname",
      "Specify the DNS server",
      "Define the domain for RSA key generation",
      "Enable DNS lookup",
    ],
    correctAnswer: 2,
    explanation:
      "The 'ip domain-name' command specifies the domain name used to generate RSA keys for SSH.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'service password-encryption' command encrypts all passwords in the running configuration.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'service password-encryption' command applies a basic encryption to all passwords in the configuration.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which feature prevents VLAN hopping attacks on a switch?",
    options: [
      "Port security",
      "DHCP snooping",
      "Disabling unused ports",
      "Dynamic ARP Inspection",
    ],
    correctAnswer: 2,
    explanation:
      "Disabling unused ports prevents VLAN hopping by ensuring attackers cannot connect to misconfigured or open ports.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands enable 802.1X authentication on a Cisco switch? (Choose two)",
    options: [
      "dot1x system-auth-control",
      "authentication port-control auto",
      "switchport mode access",
      "aaa new-model",
      "spanning-tree portfast",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'dot1x system-auth-control' enables 802.1X globally, and 'authentication port-control auto' enables it on a specific port.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "A named ACL allows for easier modification compared to a numbered ACL.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Named ACLs allow rules to be edited or deleted individually, unlike numbered ACLs.",
  },

  // Automation and Programmability (10%, 5 new questions)
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which HTTP method is used to update data in a REST API?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 2,
    explanation: "The PUT method updates existing resources in a REST API.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "JSON uses key-value pairs to structure data.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. JSON (JavaScript Object Notation) structures data using key-value pairs, arrays, and nested objects.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two programming languages are commonly used for network automation? (Choose two)",
    options: ["Python", "Java", "Ruby", "C++", "Perl"],
    correctAnswer: [0, 2],
    explanation:
      "Python and Ruby are widely used for network automation due to their simplicity and robust libraries.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the role of the controller in an SDN architecture?",
    options: [
      "Forward packets",
      "Manage the control plane",
      "Encrypt traffic",
      "Assign IP addresses",
    ],
    correctAnswer: 1,
    explanation:
      "The SDN controller manages the control plane, making centralized decisions about network traffic.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "NETCONF is a protocol that supports transactional configuration changes.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NETCONF supports transactional changes, ensuring configurations are applied or rolled back atomically.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the primary function of the Network layer in the OSI model?",
    options: [
      "Physical signaling",
      "Data framing",
      "Logical addressing",
      "Application services",
    ],
    correctAnswer: 2,
    explanation:
      "The Network layer (Layer 3) handles logical addressing and routing, using protocols like IP to deliver packets across networks.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A hub operates at the Data Link layer of the OSI model.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A hub operates at the Physical layer (Layer 1), simply repeating signals to all connected devices.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two characteristics describe Ethernet technology? (Choose two)",
    options: [
      "Uses CSMA/CD",
      "Operates only in full-duplex",
      "Supports broadcast",
      "Requires token passing",
      "Limited to 10 Mbps",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Ethernet uses CSMA/CD for collision detection in half-duplex mode and supports broadcast frames for communication within a LAN.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the default subnet mask for a Class B IP address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: 1,
    explanation:
      "A Class B IP address has a default subnet mask of 255.255.0.0 (/16), providing 65,536 addresses.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "IPv6 addresses are 128 bits long.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 addresses are 128 bits, expressed as eight groups of four hexadecimal digits.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol resolves MAC addresses to IP addresses?",
    options: ["ARP", "DHCP", "DNS", "ICMP"],
    correctAnswer: 0,
    explanation:
      "ARP (Address Resolution Protocol) resolves IP addresses to MAC addresses for communication within a LAN.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two components are found in an Ethernet frame? (Choose two)",
    options: [
      "Preamble",
      "VLAN tag",
      "Source IP",
      "Destination MAC",
      "Payload encryption",
    ],
    correctAnswer: [0, 3],
    explanation:
      "An Ethernet frame includes a preamble for synchronization and a destination MAC address for frame delivery.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the TTL field in an IP packet?",
    options: [
      "Encrypt data",
      "Limit packet lifetime",
      "Assign source address",
      "Fragment packets",
    ],
    correctAnswer: 1,
    explanation:
      "The TTL (Time to Live) field prevents packets from looping indefinitely by decrementing at each hop, discarding the packet when it reaches 0.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A collision domain includes all devices connected to a switch.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A switch creates separate collision domains for each port, unlike a hub.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which cable type is used to connect a switch to a router?",
    options: ["Crossover", "Straight-through", "Rollover", "Fiber"],
    correctAnswer: 1,
    explanation:
      "A straight-through cable is used to connect a switch to a router, as they are dissimilar devices.",
  },

  // Network Access (10 new questions)
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. A switch port is configured with 'switchport mode dynamic auto'. What happens if the connected device is in trunk mode?",
    options: [
      "The port becomes an access port",
      "The port becomes a trunk",
      "The port is disabled",
      "The link fails",
    ],
    correctAnswer: 1,
    explanation:
      "With 'switchport mode dynamic auto', the port will negotiate to become a trunk if the connected device is in trunk mode.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "The 'spanning-tree portfast' command should be applied to ports connected to other switches.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'spanning-tree portfast' is for access ports connected to end devices, not switches, to avoid topology changes.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two features enhance VLAN security on a Cisco switch? (Choose two)",
    options: [
      "Private VLANs",
      "VLAN ACLs",
      "PortFast",
      "Dynamic ARP Inspection",
      "VTP pruning",
    ],
    correctAnswer: [0, 1],
    explanation:
      "Private VLANs isolate devices within a VLAN, and VLAN ACLs filter traffic, enhancing security.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command verifies the VLAN configuration on a Cisco switch port?",
    options: [
      "show vlan brief",
      "show interfaces switchport",
      "show running-config",
      "show spanning-tree",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show interfaces switchport' command displays VLAN assignments and trunking details for a port.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "EtherChannel requires all ports to have the same speed and duplex settings.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. EtherChannel requires consistent speed, duplex, and VLAN settings across all member ports.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the default mode for DTP on a Cisco switch port?",
    options: ["Access", "Trunk", "Dynamic Auto", "Dynamic Desirable"],
    correctAnswer: 2,
    explanation:
      "The default DTP mode is Dynamic Auto, which negotiates trunking or access mode based on the connected device.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands configure a VLAN on a Cisco switch? (Choose two)",
    options: [
      "vlan 10",
      "name SALES",
      "switchport access vlan 10",
      "interface vlan 10",
      "switchport mode access",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'vlan 10' creates the VLAN, and 'name SALES' assigns a name to it.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which feature protects a switch from unauthorized switches forming a trunk?",
    options: [
      "BPDU Guard",
      "DTP disable",
      "Root Guard",
      "VLAN hopping prevention",
    ],
    correctAnswer: 1,
    explanation:
      "Disabling DTP ('switchport nonegotiate') prevents unauthorized switches from negotiating a trunk.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "The 'show vlan brief' command displays trunk port information.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'show vlan brief' shows VLANs and access ports, not trunk details; use 'show interfaces trunk' for trunks.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the purpose of the 'switchport port-security' command?",
    options: [
      "Enable 802.1X",
      "Restrict MAC addresses",
      "Configure trunking",
      "Set VLAN priority",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport port-security' command restricts a port to specific MAC addresses, enhancing security.",
  },

  // IP Connectivity (13 new questions)
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the broadcast address for the subnet 172.16.10.50/27?",
    options: ["172.16.10.31", "172.16.10.63", "172.16.10.95", "172.16.10.255"],
    correctAnswer: 1,
    explanation:
      "For a /27 subnet (increment 32), 172.16.10.50 is in 172.16.10.32–172.16.10.63, with the broadcast address 172.16.10.63.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "OSPF uses a distance-vector algorithm to calculate routes.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. OSPF uses a link-state algorithm, building a topology map to calculate the shortest path.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands configure a static route on a Cisco router? (Choose two)",
    options: [
      "ip route 10.0.0.0 255.255.255.0 192.168.1.1",
      "ip default-gateway 192.168.1.1",
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "ip routing",
      "network 10.0.0.0",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'ip route 10.0.0.0 255.255.255.0 192.168.1.1' configures a static route, and 'ip route 0.0.0.0 0.0.0.0 192.168.1.1' sets a default route.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which protocol supports unequal-cost load balancing by default?",
    options: ["RIP", "OSPF", "EIGRP", "BGP"],
    correctAnswer: 2,
    explanation:
      "EIGRP supports unequal-cost load balancing using the variance feature, unlike OSPF or RIP.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "The command 'ip default-gateway' is used on a router to set its default route.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'ip default-gateway' is for switches or devices without routing enabled; routers use 'ip route 0.0.0.0 0.0.0.0'.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the OSPF cost of a 100 Mbps interface by default?",
    options: ["1", "10", "100", "1000"],
    correctAnswer: 1,
    explanation:
      "OSPF cost is calculated as 10^8 / bandwidth (bps). For 100 Mbps (10^8 bps), the cost is 10^8 / 10^8 = 1.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two features are supported by HSRP? (Choose two)",
    options: [
      "Preemption",
      "Load balancing",
      "Virtual MAC address",
      "Path selection",
      "Metric-based routing",
    ],
    correctAnswer: [0, 2],
    explanation:
      "HSRP supports preemption (allowing a higher-priority router to take over) and uses a virtual MAC address for the virtual IP.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which command displays the OSPF neighbor table on a Cisco router?",
    options: [
      "show ip route",
      "show ip ospf neighbor",
      "show ip ospf database",
      "show ip protocols",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip ospf neighbor' command displays the OSPF neighbor table, including neighbor IDs and states.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "IPv6 uses Neighbor Discovery Protocol to replace ARP.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 uses NDP (Neighbor Discovery Protocol) for address resolution, replacing ARP used in IPv4.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the administrative distance of a RIP route?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 3,
    explanation:
      "RIP routes have an administrative distance of 120, indicating lower preference compared to OSPF (110) or EIGRP (90).",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands are used to verify EIGRP neighbors? (Choose two)",
    options: [
      "show ip eigrp neighbors",
      "show ip route eigrp",
      "show ip eigrp topology",
      "show ip eigrp interfaces",
      "show running-config",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'show ip eigrp neighbors' displays neighbor details, and 'show ip eigrp interfaces' shows interfaces running EIGRP.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command sets the HSRP priority to 150 for group 1?",
    options: [
      "standby 1 priority 150",
      "hsrp 1 priority 150",
      "standby priority 150",
      "hsrp group 1 priority 150",
    ],
    correctAnswer: 0,
    explanation:
      "The 'standby 1 priority 150' command sets the HSRP priority to 150 for group 1.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "A router prefers a route with a lower administrative distance over one with a higher distance.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A lower administrative distance indicates a more preferred route (e.g., EIGRP 90 vs. RIP 120).",
  },

  // IP Services (5 new questions)
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures a Cisco router as an NTP client?",
    options: [
      "ntp server 192.168.1.1",
      "ntp master",
      "ntp source 192.168.1.1",
      "ntp authenticate",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ntp server 192.168.1.1' command configures the router to synchronize with an NTP server at 192.168.1.1.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "DHCP uses TCP port 67 for server communication.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. DHCP uses UDP ports 67 (server) and 68 (client) for communication.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure PAT on a Cisco router? (Choose two)",
    options: [
      "ip nat inside source list 1 pool NAT_POOL overload",
      "access-list 1 permit 192.168.1.0 0.0.0.255",
      "ip nat outside",
      "ip nat pool NAT_POOL 209.165.200.1 209.165.200.10",
      "ip nat inside",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip nat inside source list 1 pool NAT_POOL overload' enables PAT, and 'access-list 1 permit 192.168.1.0 0.0.0.255' defines the source addresses.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'ip helper-address' command?",
    options: [
      "Enable NAT",
      "Forward DHCP requests",
      "Configure DNS",
      "Set default gateway",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip helper-address' command forwards DHCP and other UDP broadcasts to a specified server.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "Syslog messages can be sent to a remote server for centralized logging.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Syslog messages can be sent to a remote server using the 'logging host' command.",
  },

  // Security Fundamentals (8 new questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables AAA on a Cisco device?",
    options: [
      "aaa enable",
      "aaa new-model",
      "aaa authentication",
      "aaa authorization",
    ],
    correctAnswer: 1,
    explanation:
      "The 'aaa new-model' command enables AAA (Authentication, Authorization, Accounting) on a Cisco device.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "Port security can limit the number of MAC addresses on a switch port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Port security can restrict a port to a specific number of MAC addresses using 'switchport port-security maximum'.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure SSH access on a Cisco device? (Choose two)",
    options: [
      "crypto key generate rsa",
      "ip ssh version 2",
      "transport input ssh",
      "ip domain-name example.com",
      "login local",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'crypto key generate rsa' generates RSA keys, and 'ip domain-name example.com' sets the domain for key generation.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the default action for a port security violation?",
    options: ["Shutdown", "Restrict", "Protect", "Error-disable"],
    correctAnswer: 0,
    explanation:
      "The default port security violation action is 'shutdown', which disables the port.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "The 'access-class' command applies an ACL to VTY lines.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'access-class' command restricts VTY access by applying an ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which feature mitigates ARP spoofing attacks?",
    options: [
      "Port security",
      "DHCP snooping",
      "Dynamic ARP Inspection",
      "802.1X",
    ],
    correctAnswer: 2,
    explanation:
      "Dynamic ARP Inspection validates ARP packets against DHCP snooping bindings to prevent spoofing.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure a standard ACL? (Choose two)",
    options: [
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "ip access-list standard 10",
      "access-list 100 permit tcp any any",
      "ip access-group 10 in",
      "access-list 10 deny any",
    ],
    correctAnswer: [0, 4],
    explanation:
      "'access-list 10 permit 192.168.1.0 0.0.0.255' and 'access-list 10 deny any' define rules for a standard ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'crypto key generate rsa' command is required for SSH configuration.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'crypto key generate rsa' command generates RSA keys, necessary for SSH.",
  },

  // Automation and Programmability (4 new questions)
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which data format is commonly used in REST APIs?",
    options: ["XML", "JSON", "CSV", "YAML"],
    correctAnswer: 1,
    explanation:
      "JSON is widely used in REST APIs due to its lightweight and human-readable structure.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Ansible requires an agent to be installed on managed devices.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Ansible is agentless, using SSH or other protocols to manage devices.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two benefits does SDN provide? (Choose two)",
    options: [
      "Centralized control",
      "Hardware-based routing",
      "Programmatic configuration",
      "Fixed topology",
      "Increased latency",
    ],
    correctAnswer: [0, 2],
    explanation:
      "SDN provides centralized control via a controller and enables programmatic configuration through APIs.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Cisco platform supports programmability via APIs?",
    options: ["IOS XR", "IOS XE", "NX-OS", "All of the above"],
    correctAnswer: 3,
    explanation:
      "IOS XR, IOS XE, and NX-OS all support programmability via APIs like RESTCONF and NETCONF.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which OSI layer is responsible for segmenting data into packets?",
    options: ["Application", "Transport", "Network", "Data Link"],
    correctAnswer: 2,
    explanation:
      "The Network layer (Layer 3) segments data into packets and handles logical addressing and routing.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "All devices in a broadcast domain share the same collision domain.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A broadcast domain includes all devices that receive a broadcast frame, but collision domains are separated by switches or routers.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two protocols operate at the Transport layer? (Choose two)",
    options: ["IP", "TCP", "UDP", "ARP", "ICMP"],
    correctAnswer: [1, 2],
    explanation:
      "TCP and UDP are Transport layer protocols, providing reliable and unreliable data delivery, respectively.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the usable host range for the subnet 192.168.1.64/26?",
    options: [
      "192.168.1.65–192.168.1.126",
      "192.168.1.64–192.168.1.127",
      "192.168.1.65–192.168.1.127",
      "192.168.1.64–192.168.1.126",
    ],
    correctAnswer: 0,
    explanation:
      "For a /26 subnet (increment 64), the range is 192.168.1.64–192.168.1.127. Usable hosts are 192.168.1.65–192.168.1.126 (64 is network, 127 is broadcast).",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A switch forwards frames based on IP addresses.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A switch forwards frames based on MAC addresses at the Data Link layer.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol is used to detect loops in Ethernet networks?",
    options: ["STP", "VTP", "DTP", "LACP"],
    correctAnswer: 0,
    explanation:
      "STP (Spanning Tree Protocol) prevents loops in Ethernet networks by blocking redundant paths.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two characteristics apply to IPv6? (Choose two)",
    options: [
      "Uses 32-bit addresses",
      "Supports autoconfiguration",
      "Requires DHCP",
      "Uses multicast for neighbor discovery",
      "Limited to 64 subnets",
    ],
    correctAnswer: [1, 3],
    explanation:
      "IPv6 supports stateless address autoconfiguration and uses multicast for Neighbor Discovery Protocol (NDP).",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the CRC field in an Ethernet frame?",
    options: [
      "Address resolution",
      "Error detection",
      "Frame synchronization",
      "VLAN tagging",
    ],
    correctAnswer: 1,
    explanation:
      "The CRC (Cyclic Redundancy Check) field detects errors in the frame by verifying data integrity.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "The maximum transmission unit (MTU) for Ethernet is 1500 bytes.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The standard MTU for Ethernet is 1500 bytes, excluding the frame header and trailer.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which device operates primarily at the Physical layer?",
    options: ["Router", "Switch", "Hub", "Firewall"],
    correctAnswer: 2,
    explanation:
      "A hub operates at the Physical layer (Layer 1), repeating signals to all connected devices.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two factors affect network latency? (Choose two)",
    options: [
      "Propagation delay",
      "Frame size",
      "MAC address table size",
      "Serialization delay",
      "VLAN count",
    ],
    correctAnswer: [0, 3],
    explanation:
      "Propagation delay (time for a signal to travel) and serialization delay (time to transmit bits) affect network latency.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the default subnet mask for a Class C IP address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: 2,
    explanation:
      "A Class C IP address has a default subnet mask of 255.255.255.0 (/24), providing 256 addresses.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A router separates broadcast domains.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A router separates broadcast domains by not forwarding broadcast traffic between interfaces.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol encapsulates Ethernet frames over a WAN?",
    options: ["PPP", "ICMP", "DNS", "FTP"],
    correctAnswer: 0,
    explanation:
      "PPP (Point-to-Point Protocol) encapsulates Ethernet frames for transmission over WAN links.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two fields are included in an IPv4 header? (Choose two)",
    options: [
      "Source MAC",
      "Destination IP",
      "VLAN ID",
      "Time to Live",
      "Frame Check Sequence",
    ],
    correctAnswer: [1, 3],
    explanation:
      "The IPv4 header includes the Destination IP address and Time to Live (TTL) field.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the subnet mask in IP networking?",
    options: [
      "Encrypt packets",
      "Identify the network portion",
      "Assign MAC addresses",
      "Determine MTU size",
    ],
    correctAnswer: 1,
    explanation:
      "The subnet mask identifies the network portion of an IP address, separating it from the host portion.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "TCP provides error detection but not error correction.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. TCP provides both error detection (via checksums) and error correction (via retransmission).",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which cable type connects two switches?",
    options: ["Straight-through", "Crossover", "Rollover", "Coaxial"],
    correctAnswer: 1,
    explanation:
      "A crossover cable is used to connect two switches, as they are similar devices.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two protocols are connectionless? (Choose two)",
    options: ["TCP", "UDP", "ICMP", "HTTP", "FTP"],
    correctAnswer: [1, 2],
    explanation:
      "UDP and ICMP are connectionless protocols, not establishing a session before data transfer.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the maximum number of hosts in a /25 subnet?",
    options: ["126", "128", "254", "256"],
    correctAnswer: 0,
    explanation:
      "A /25 subnet has 2^(32-25) = 128 addresses, with 126 usable hosts (excluding network and broadcast).",
  },

  // Network Access (20 new questions)
  {
    category: "Network Access",
    type: "single",
    question: "Which command assigns VLAN 20 to a switch port?",
    options: [
      "switchport vlan 20",
      "switchport access vlan 20",
      "vlan 20",
      "switchport mode vlan 20",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport access vlan 20' command assigns VLAN 20 to a switch port in access mode.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "VTP requires a trunk link to propagate VLAN information.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VTP (VLAN Trunking Protocol) requires a trunk link to advertise VLAN configurations.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure a trunk port? (Choose two)",
    options: [
      "switchport mode trunk",
      "switchport trunk encapsulation dot1q",
      "switchport access vlan 10",
      "switchport mode access",
      "vlan 10",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'switchport mode trunk' sets the port to trunk mode, and 'switchport trunk encapsulation dot1q' specifies 802.1Q encapsulation.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the purpose of the 'spanning-tree root primary' command?",
    options: [
      "Enable PortFast",
      "Set the switch as the root bridge",
      "Disable STP",
      "Configure VLAN priority",
    ],
    correctAnswer: 1,
    explanation:
      "The 'spanning-tree root primary' command configures the switch to become the root bridge for STP.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "A switch port in 'dynamic desirable' mode will never form a trunk.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A 'dynamic desirable' port actively attempts to form a trunk with a compatible neighbor.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command displays the status of EtherChannel on a switch?",
    options: [
      "show etherchannel summary",
      "show interfaces trunk",
      "show vlan brief",
      "show spanning-tree",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show etherchannel summary' command displays the status and configuration of EtherChannel groups.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two features are supported by 802.1Q trunking? (Choose two)",
    options: [
      "Native VLAN",
      "Dynamic negotiation",
      "VLAN tagging",
      "Port security",
      "MAC address filtering",
    ],
    correctAnswer: [0, 2],
    explanation:
      "802.1Q trunking supports a native VLAN (untagged traffic) and VLAN tagging for multiple VLANs.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What happens if a switch receives a superior BPDU on a Root Guard-enabled port?",
    options: [
      "Port transitions to forwarding",
      "Port is placed in err-disabled state",
      "Port ignores the BPDU",
      "Switch becomes the root",
    ],
    correctAnswer: 1,
    explanation:
      "Root Guard places a port in err-disabled state if it receives a superior BPDU, protecting the root bridge.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "PortFast should be enabled on trunk ports to reduce convergence time.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. PortFast is for access ports connected to end devices, not trunk ports.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which protocol negotiates EtherChannel configuration?",
    options: ["STP", "VTP", "LACP", "DTP"],
    correctAnswer: 2,
    explanation:
      "LACP (Link Aggregation Control Protocol) negotiates EtherChannel configuration for link bundling.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure port security? (Choose two)",
    options: [
      "switchport port-security",
      "switchport port-security maximum 2",
      "switchport mode access",
      "switchport port-security mac-address 0000.1111.2222",
      "switchport access vlan 10",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'switchport port-security' enables port security, and 'switchport port-security maximum 2' sets the maximum allowed MAC addresses.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command disables DTP on a switch port?",
    options: [
      "switchport mode access",
      "switchport nonegotiate",
      "switchport trunk encapsulation dot1q",
      "switchport mode trunk",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport nonegotiate' command disables DTP, preventing trunk negotiation.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "The 'show interfaces trunk' command displays access port VLAN assignments.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'show interfaces trunk' displays trunk port details; use 'show interfaces switchport' for access ports.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the default priority for a switch in STP?",
    options: ["8192", "16384", "32768", "65535"],
    correctAnswer: 2,
    explanation:
      "The default STP priority is 32768, combined with the VLAN ID to determine the root bridge.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands verify VLAN assignments? (Choose two)",
    options: [
      "show vlan brief",
      "show interfaces trunk",
      "show interfaces switchport",
      "show running-config",
      "show spanning-tree",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'show vlan brief' lists VLANs and ports, and 'show interfaces switchport' shows VLAN details for specific ports.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which feature allows a switch to learn VLANs from another switch?",
    options: ["STP", "VTP", "LACP", "802.1X"],
    correctAnswer: 1,
    explanation:
      "VTP (VLAN Trunking Protocol) allows switches to learn and synchronize VLAN configurations.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "EtherChannel can bundle up to 16 physical links.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Cisco EtherChannel supports up to 8 active links, with additional links as standby.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command enables BPDU Guard on a switch port?",
    options: [
      "spanning-tree bpduguard enable",
      "spanning-tree portfast",
      "spanning-tree root guard",
      "switchport port-security",
    ],
    correctAnswer: 0,
    explanation:
      "The 'spanning-tree bpduguard enable' command enables BPDU Guard, protecting against unauthorized switches.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two VLAN ranges are allowed on a trunk by default? (Choose two)",
    options: ["1–1001", "1002–4094", "1–4094", "1006–4094", "2–1005"],
    correctAnswer: [0, 4],
    explanation:
      "By default, Cisco switches allow VLANs 1–1001 and 2–1005 on trunks, depending on the platform.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the purpose of the 'switchport mode access' command?",
    options: [
      "Enable trunking",
      "Disable DTP negotiation",
      "Assign a VLAN",
      "Force the port to access mode",
    ],
    correctAnswer: 3,
    explanation:
      "The 'switchport mode access' command forces the port to operate in access mode, disabling trunking.",
  },

  // IP Connectivity (25 new questions)
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the network address for the IP 10.20.30.40/28?",
    options: ["10.20.30.32", "10.20.30.40", "10.20.30.0", "10.20.30.48"],
    correctAnswer: 0,
    explanation:
      "For a /28 subnet (increment 16), 10.20.30.40 is in 10.20.30.32–10.20.30.47, with the network address 10.20.30.32.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "EIGRP uses the same metric calculation as OSPF.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. EIGRP uses bandwidth, delay, reliability, load, and MTU, while OSPF uses cost based on bandwidth.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands enable OSPF on a router interface? (Choose two)",
    options: [
      "network 192.168.1.0 0.0.0.255 area 0",
      "ip ospf 1 area 0",
      "router ospf 1",
      "ip ospf enable",
      "interface ospf area 0",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'router ospf 1' enables OSPF, and 'network 192.168.1.0 0.0.0.255 area 0' advertises the interface in OSPF.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command verifies the IP routing table on a Cisco router?",
    options: [
      "show ip route",
      "show ip protocols",
      "show ip arp",
      "show ip interface brief",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show ip route' command displays the IP routing table, including connected, static, and dynamic routes.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "HSRP uses UDP port 1985 for communication.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. HSRP uses UDP port 1985 is incorrect; it uses multicast address 224.0.0.2 with a proprietary protocol.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the default OSPF priority for a router interface?",
    options: ["0", "1", "10", "255"],
    correctAnswer: 1,
    explanation:
      "The default OSPF priority is 1; higher values increase the likelihood of becoming the Designated Router.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two metrics does EIGRP use by default? (Choose two)",
    options: ["Bandwidth", "Delay", "Load", "Reliability", "MTU"],
    correctAnswer: [0, 1],
    explanation:
      "EIGRP uses bandwidth and delay by default for its composite metric calculation.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which command configures a floating static route with an administrative distance of 200?",
    options: [
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1 200",
      "ip route 192.168.1.0 255.255.255.0 200",
      "ip route 0.0.0.0 0.0.0.0 200",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip route 0.0.0.0 0.0.0.0 192.168.1.1 200' command sets a default route with an administrative distance of 200.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "IPv6 requires a link-local address on every interface.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 requires a link-local address (FE80::/10) for each interface to enable routing and neighbor discovery.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which protocol is used for first-hop redundancy in IPv6?",
    options: ["HSRP", "VRRP", "GLBP", "ND"],
    correctAnswer: 1,
    explanation:
      "VRRP (Virtual Router Redundancy Protocol) is commonly used for first-hop redundancy in IPv6 networks.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands verify OSPF routes? (Choose two)",
    options: [
      "show ip route ospf",
      "show ip ospf database",
      "show ip ospf neighbor",
      "show ip protocols",
      "show running-config",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show ip route ospf' displays OSPF routes, and 'show ip ospf database' shows the link-state database.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the broadcast address for the subnet 192.168.10.100/29?",
    options: [
      "192.168.10.103",
      "192.168.10.107",
      "192.168.10.111",
      "192.168.10.127",
    ],
    correctAnswer: 0,
    explanation:
      "For a /29 subnet (increment 8), 192.168.10.100 is in 192.168.10.96–192.168.10.103, with the broadcast address 192.168.10.103.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "A router can have multiple OSPF processes running simultaneously.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A router can run multiple OSPF processes, each identified by a unique process ID.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command enables IPv6 routing on a Cisco router?",
    options: [
      "ipv6 enable",
      "ipv6 unicast-routing",
      "ipv6 router ospf 1",
      "ipv6 address autoconfig",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ipv6 unicast-routing' command enables IPv6 routing on a Cisco router.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two features are supported by VRRP? (Choose two)",
    options: [
      "Preemption",
      "Load balancing",
      "Virtual IP address",
      "Dynamic routing",
      "Metric-based path selection",
    ],
    correctAnswer: [0, 2],
    explanation:
      "VRRP supports preemption and uses a virtual IP address for first-hop redundancy.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the administrative distance of an OSPF route?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 2,
    explanation:
      "OSPF routes have an administrative distance of 110, indicating preference over RIP (120).",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "The 'passive-interface' command in OSPF prevents routing updates but allows advertisements.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'passive-interface' command prevents OSPF updates and neighbor formation on the interface.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the EIGRP topology table?",
    options: [
      "show ip eigrp neighbors",
      "show ip eigrp topology",
      "show ip route eigrp",
      "show ip eigrp interfaces",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip eigrp topology' command displays the EIGRP topology table, including successors and feasible successors.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands configure a default route in OSPF? (Choose two)",
    options: [
      "default-information originate",
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "router ospf 1",
      "network 0.0.0.0 0.0.0.0 area 0",
      "ip default-gateway 192.168.1.1",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'router ospf 1' enables OSPF, and 'default-information originate' advertises a default route.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the purpose of the 'ip address dhcp' command on a router interface?",
    options: [
      "Assign a static IP",
      "Enable DHCP server",
      "Obtain an IP via DHCP",
      "Configure DHCP relay",
    ],
    correctAnswer: 2,
    explanation:
      "The 'ip address dhcp' command configures the interface to obtain an IP address from a DHCP server.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "RIPng supports IPv6 routing.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RIPng is the IPv6 version of RIP, supporting IPv6 routing.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command sets the OSPF router ID to 1.1.1.1?",
    options: [
      "router-id 1.1.1.1",
      "ip ospf router-id 1.1.1.1",
      "ospf router-id 1.1.1.1",
      "router ospf id 1.1.1.1",
    ],
    correctAnswer: 0,
    explanation:
      "The 'router-id 1.1.1.1' command sets the OSPF router ID to 1.1.1.1.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands are used to configure HSRP? (Choose two)",
    options: [
      "standby 1 ip 192.168.1.254",
      "standby 1 priority 150",
      "hsrp 1 ip 192.168.1.254",
      "standby 1 preempt",
      "hsrp 1 priority 150",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'standby 1 ip 192.168.1.254' sets the virtual IP, and 'standby 1 priority 150' sets the priority for HSRP.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the usable host range for the subnet 172.16.1.128/25?",
    options: [
      "172.16.1.129–172.16.1.254",
      "172.16.1.128–172.16.1.255",
      "172.16.1.129–172.16.1.255",
      "172.16.1.128–172.16.1.254",
    ],
    correctAnswer: 0,
    explanation:
      "For a /25 subnet (increment 128), the range is 172.16.1.128–172.16.1.255, with usable hosts 172.16.1.129–172.16.1.254.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "The 'show ip interface brief' command displays routing protocol information.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'show ip interface brief' displays interface status and IP addresses, not routing protocol details.",
  },

  // IP Services (10 new questions)
  {
    category: "IP Services",
    type: "single",
    question: "Which command displays the DHCP bindings on a Cisco router?",
    options: [
      "show ip dhcp binding",
      "show ip dhcp pool",
      "show ip dhcp server",
      "show running-config",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show ip dhcp binding' command displays the IP-to-MAC bindings for DHCP clients.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "NAT overload uses a single public IP for multiple private IPs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NAT overload (PAT) maps multiple private IPs to a single public IP using port numbers.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure a DHCP pool on a Cisco router? (Choose two)",
    options: [
      "ip dhcp pool MYPOOL",
      "network 192.168.1.0 255.255.255.0",
      "default-router 192.168.1.1",
      "ip dhcp excluded-address 192.168.1.1",
      "lease 7",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip dhcp pool MYPOOL' creates the pool, and 'network 192.168.1.0 255.255.255.0' specifies the IP range.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'logging trap' command?",
    options: [
      "Set syslog server IP",
      "Enable logging",
      "Set syslog message severity",
      "Disable logging",
    ],
    correctAnswer: 2,
    explanation:
      "The 'logging trap' command sets the severity level for syslog messages sent to a server.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "SNMPv3 supports encryption for secure communication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SNMPv3 supports encryption and authentication for secure network management.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures a Cisco router to relay DHCP requests?",
    options: [
      "ip helper-address 192.168.1.1",
      "ip dhcp relay",
      "ip forward-protocol udp",
      "ip dhcp server",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip helper-address 192.168.1.1' command configures the router to relay DHCP requests to the specified server.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure NTP authentication? (Choose two)",
    options: [
      "ntp authenticate",
      "ntp authentication-key 1 md5 MYKEY",
      "ntp server 192.168.1.1",
      "ntp trusted-key 1",
      "ntp master",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ntp authenticate' enables authentication, and 'ntp authentication-key 1 md5 MYKEY' sets the key.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the default SNMP community string for read-only access?",
    options: ["public", "private", "secret", "cisco"],
    correctAnswer: 0,
    explanation:
      "The default SNMP read-only community string is often 'public' on many devices.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'ip nat inside' command is applied to the external interface.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'ip nat inside' command is applied to the internal interface, while 'ip nat outside' is for the external.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command displays the NAT translation table?",
    options: [
      "show ip nat translations",
      "show ip nat statistics",
      "show ip nat pool",
      "show running-config",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show ip nat translations' command displays the active NAT translations.",
  },

  // Security Fundamentals (15 new questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command restricts Telnet access to a specific subnet?",
    options: [
      "access-class 10 in",
      "line vty 0 4 access-list 10",
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "ip access-group 10 in",
    ],
    correctAnswer: 0,
    explanation:
      "The 'access-class 10 in' command applies an ACL to VTY lines, restricting Telnet access.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "DHCP snooping prevents unauthorized DHCP servers.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DHCP snooping filters DHCP messages, allowing only trusted ports to act as DHCP servers.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure 802.1X authentication? (Choose two)",
    options: [
      "dot1x system-auth-control",
      "aaa authentication dot1x default group radius",
      "authentication port-control auto",
      "ip access-list dot1x",
      "switchport mode access",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'dot1x system-auth-control' enables 802.1X globally, and 'authentication port-control auto' enables it on a port.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'login local' command on VTY lines?",
    options: [
      "Enable SSH",
      "Use local username/password",
      "Disable authentication",
      "Enable Telnet",
    ],
    correctAnswer: 1,
    explanation:
      "The 'login local' command configures VTY lines to use the local username and password database.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'service password-encryption' command encrypts all passwords in the configuration.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'service password-encryption' command encrypts passwords in the running-config.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which feature requires a RADIUS or TACACS+ server for authentication?",
    options: ["Port security", "802.1X", "DHCP snooping", "VLAN ACLs"],
    correctAnswer: 1,
    explanation:
      "802.1X requires a RADIUS or TACACS+ server for centralized authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure an extended ACL? (Choose two)",
    options: [
      "access-list 100 permit tcp any any eq 80",
      "ip access-list extended WEB",
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "ip access-group 100 in",
      "access-list 100 deny udp any any",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'access-list 100 permit tcp any any eq 80' defines a rule, and 'ip access-list extended WEB' creates a named extended ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command enables password encryption for the enable password?",
    options: [
      "enable password cisco",
      "enable secret cisco",
      "service password-encryption",
      "login local",
    ],
    correctAnswer: 1,
    explanation:
      "The 'enable secret cisco' command sets an encrypted enable password.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "Dynamic ARP Inspection requires DHCP snooping to be enabled.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DAI uses DHCP snooping bindings to validate ARP packets.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command applies an ACL to an interface?",
    options: [
      "ip access-list 10",
      "ip access-group 10 in",
      "access-class 10 in",
      "access-list 10 permit any",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip access-group 10 in' command applies an ACL to an interface in the inbound direction.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two features mitigate VLAN hopping? (Choose two)",
    options: [
      "Disable DTP",
      "Enable BPDU Guard",
      "Set native VLAN to an unused VLAN",
      "Enable 802.1X",
      "Configure VTP pruning",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Disabling DTP and setting the native VLAN to an unused VLAN prevent VLAN hopping attacks.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the default timeout for a Cisco device’s EXEC session?",
    options: ["5 minutes", "10 minutes", "15 minutes", "30 minutes"],
    correctAnswer: 1,
    explanation:
      "The default EXEC timeout is 10 minutes, after which the session is terminated.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'username admin privilege 15 secret cisco' command sets an encrypted password.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'secret' keyword encrypts the password using a strong hashing algorithm.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which protocol secures remote access to a Cisco device?",
    options: ["Telnet", "SSH", "SNMP", "FTP"],
    correctAnswer: 1,
    explanation:
      "SSH (Secure Shell) provides encrypted remote access to Cisco devices.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands are required for SSH configuration? (Choose two)",
    options: [
      "ip domain-name example.com",
      "crypto key generate rsa",
      "transport input telnet",
      "line vty 0 4",
      "login local",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip domain-name example.com' sets the domain, and 'crypto key generate rsa' generates RSA keys for SSH.",
  },

  // Automation and Programmability (10 new questions)
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which protocol is used by NETCONF for device configuration?",
    options: ["HTTP", "SSH", "SNMP", "FTP"],
    correctAnswer: 1,
    explanation: "NETCONF uses SSH for secure transport of configuration data.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "RESTCONF requires XML for data encoding.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. RESTCONF supports both JSON and XML for data encoding.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two tools are used for network automation? (Choose two)",
    options: ["Ansible", "Puppet", "SNMP", "Cisco DNA Center", "Syslog"],
    correctAnswer: [0, 3],
    explanation:
      "Ansible and Cisco DNA Center are used for network automation, supporting programmatic configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the primary function of a controller in SDN?",
    options: [
      "Forward packets",
      "Manage data plane",
      "Centralize network control",
      "Encrypt traffic",
    ],
    correctAnswer: 2,
    explanation:
      "In SDN, the controller centralizes network control, managing policies and configurations.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Python scripts can interact with Cisco devices via APIs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Python scripts can use APIs like RESTCONF or NETCONF to configure Cisco devices.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which HTTP method is used to retrieve data in a REST API?",
    options: ["POST", "GET", "PUT", "DELETE"],
    correctAnswer: 1,
    explanation:
      "The GET method retrieves data from a REST API without modifying it.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two protocols support programmatic network configuration? (Choose two)",
    options: ["SNMP", "NETCONF", "RESTCONF", "Telnet", "FTP"],
    correctAnswer: [1, 2],
    explanation:
      "NETCONF and RESTCONF enable programmatic configuration of network devices.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the role of YANG in network automation?",
    options: [
      "Encrypt data",
      "Define data models",
      "Route packets",
      "Monitor traffic",
    ],
    correctAnswer: 1,
    explanation:
      "YANG (Yet Another Next Generation) is a data modeling language used to define data structures for NETCONF and RESTCONF.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "Cisco DNA Center requires manual CLI configuration for all devices.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Cisco DNA Center uses APIs and automation to manage devices, reducing manual CLI configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which tool uses playbooks for network automation?",
    options: ["Chef", "Ansible", "Puppet", "Salt"],
    correctAnswer: 1,
    explanation:
      "Ansible uses playbooks, written in YAML, to define automation tasks for network devices.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which layer of the OSI model ensures reliable data transfer between hosts?",
    options: ["Application", "Session", "Transport", "Network"],
    correctAnswer: 2,
    explanation:
      "The Transport layer (Layer 4) ensures reliable data transfer using protocols like TCP, which provides error checking and retransmission.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "A switch creates a single collision domain for all connected devices.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A switch creates separate collision domains for each port, reducing collisions.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two characteristics define a LAN? (Choose two)",
    options: [
      "High latency",
      "Geographically limited",
      "High bandwidth",
      "Public access",
      "Low reliability",
    ],
    correctAnswer: [1, 2],
    explanation:
      "A LAN (Local Area Network) is geographically limited (e.g., a building) and typically offers high bandwidth.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the first usable IP address in the subnet 172.16.20.0/30?",
    options: ["172.16.20.0", "172.16.20.1", "172.16.20.2", "172.16.20.3"],
    correctAnswer: 1,
    explanation:
      "For a /30 subnet (increment 4), the range is 172.16.20.0–172.16.20.3. The first usable IP is 172.16.20.1 (0 is network, 3 is broadcast).",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "UDP provides flow control for data transmission.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. UDP is connectionless and does not provide flow control, unlike TCP.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol is used to assign IP addresses dynamically?",
    options: ["ARP", "DHCP", "DNS", "ICMP"],
    correctAnswer: 1,
    explanation:
      "DHCP (Dynamic Host Configuration Protocol) dynamically assigns IP addresses to devices.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two components are part of the TCP header? (Choose two)",
    options: [
      "Source IP",
      "Sequence number",
      "Destination MAC",
      "Acknowledgment number",
      "VLAN ID",
    ],
    correctAnswer: [1, 3],
    explanation:
      "The TCP header includes the sequence number and acknowledgment number for reliable data transfer.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the ARP cache on a device?",
    options: [
      "Store DNS mappings",
      "Store IP-to-MAC mappings",
      "Store routing tables",
      "Store VLAN configurations",
    ],
    correctAnswer: 1,
    explanation:
      "The ARP cache stores IP-to-MAC address mappings for efficient communication within a LAN.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "IPv4 supports multicast addressing.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv4 supports multicast addressing (e.g., 224.0.0.0–239.255.255.255) for group communication.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which device connects multiple collision domains?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    correctAnswer: 2,
    explanation:
      "A router connects multiple collision domains, separating them and forwarding packets based on IP addresses.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two protocols operate at the Application layer? (Choose two)",
    options: ["HTTP", "TCP", "DNS", "IP", "ARP"],
    correctAnswer: [0, 2],
    explanation:
      "HTTP and DNS are Application layer protocols, providing services directly to user applications.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the maximum number of hosts in a /26 subnet?",
    options: ["62", "64", "126", "128"],
    correctAnswer: 0,
    explanation:
      "A /26 subnet has 2^(32-26) = 64 addresses, with 62 usable hosts (excluding network and broadcast).",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A frame is a Protocol Data Unit (PDU) at the Network layer.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A frame is a PDU at the Data Link layer; a packet is the PDU at the Network layer.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which cable type is used to connect a PC to a switch?",
    options: ["Crossover", "Straight-through", "Rollover", "Fiber"],
    correctAnswer: 1,
    explanation:
      "A straight-through cable connects a PC to a switch, as they are dissimilar devices.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two features are supported by IPv6? (Choose two)",
    options: [
      "Broadcast addressing",
      "128-bit addresses",
      "ARP",
      "Stateless autoconfiguration",
      "32-bit checksum",
    ],
    correctAnswer: [1, 3],
    explanation:
      "IPv6 uses 128-bit addresses and supports stateless address autoconfiguration (SLAAC).",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the preamble in an Ethernet frame?",
    options: [
      "Error detection",
      "Frame synchronization",
      "Address resolution",
      "VLAN identification",
    ],
    correctAnswer: 1,
    explanation:
      "The preamble synchronizes the sender and receiver clocks for proper frame processing.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "The MAC address is 48 bits long.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A MAC address is 48 bits, expressed as 12 hexadecimal digits.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol resolves domain names to IP addresses?",
    options: ["ARP", "DHCP", "DNS", "ICMP"],
    correctAnswer: 2,
    explanation:
      "DNS (Domain Name System) resolves domain names (e.g., example.com) to IP addresses.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two factors increase network throughput? (Choose two)",
    options: [
      "Higher latency",
      "Larger frame size",
      "Higher bandwidth",
      "More collisions",
      "Lower MTU",
    ],
    correctAnswer: [1, 2],
    explanation:
      "Larger frame sizes reduce overhead, and higher bandwidth increases data transfer rates.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the default subnet mask for a Class A IP address?",
    options: ["255.0.0.0", "255.255.0.0", "255.255.255.0", "255.255.255.255"],
    correctAnswer: 0,
    explanation:
      "A Class A IP address has a default subnet mask of 255.0.0.0 (/8), providing over 16 million addresses.",
  },

  // Network Access (20 new questions)
  {
    category: "Network Access",
    type: "single",
    question: "Which command configures a switch port as a trunk?",
    options: [
      "switchport mode access",
      "switchport mode trunk",
      "switchport access vlan 10",
      "switchport trunk vlan 10",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport mode trunk' command configures a switch port to operate as a trunk.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "VLAN 1 is the default native VLAN on Cisco switches.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VLAN 1 is the default native VLAN for untagged traffic on Cisco switch trunks.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands enable PortFast on a switch port? (Choose two)",
    options: [
      "spanning-tree portfast",
      "switchport mode access",
      "spanning-tree portfast default",
      "switchport port-security",
      "spanning-tree bpduguard enable",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'spanning-tree portfast' enables PortFast on a specific port, and 'spanning-tree portfast default' enables it globally for access ports.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the purpose of the 'switchport trunk allowed vlan' command?",
    options: [
      "Assign access VLAN",
      "Restrict VLANs on a trunk",
      "Enable DTP",
      "Set native VLAN",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport trunk allowed vlan' command restricts which VLANs can traverse a trunk link.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "EtherChannel can be configured using PAgP or LACP.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. EtherChannel supports PAgP (Cisco proprietary) and LACP (IEEE standard) for link aggregation.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command verifies the spanning tree root bridge for VLAN 10?",
    options: [
      "show spanning-tree vlan 10",
      "show vlan brief",
      "show interfaces trunk",
      "show spanning-tree summary",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show spanning-tree vlan 10' command displays the root bridge and port states for VLAN 10.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands create and name a VLAN? (Choose two)",
    options: [
      "vlan 20",
      "name ENGINEERING",
      "switchport access vlan 20",
      "interface vlan 20",
      "switchport mode trunk",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'vlan 20' creates the VLAN, and 'name ENGINEERING' assigns a name to it.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What happens if a port security violation occurs in 'restrict' mode?",
    options: [
      "Port shuts down",
      "Violating packets are dropped",
      "Port transitions to forwarding",
      "MAC address is learned",
    ],
    correctAnswer: 1,
    explanation:
      "In 'restrict' mode, port security drops packets from unauthorized MAC addresses and may generate a syslog message.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "The 'show running-config' command displays trunk port details.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Use 'show interfaces trunk' or 'show interfaces switchport' for trunk details; 'show running-config' shows configurations.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which feature prevents a switch port from receiving BPDUs?",
    options: ["BPDU Guard", "BPDU Filter", "Root Guard", "Loop Guard"],
    correctAnswer: 1,
    explanation:
      "BPDU Filter prevents a port from sending or receiving BPDUs, often used with PortFast.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure an EtherChannel? (Choose two)",
    options: [
      "channel-group 1 mode active",
      "interface port-channel 1",
      "switchport mode trunk",
      "etherchannel 1 mode on",
      "switchport access vlan 10",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'channel-group 1 mode active' configures the EtherChannel mode, and 'interface port-channel 1' creates the logical interface.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command sets the native VLAN to 99 on a trunk port?",
    options: [
      "switchport trunk native vlan 99",
      "switchport access vlan 99",
      "vlan native 99",
      "switchport mode native vlan 99",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport trunk native vlan 99' command sets VLAN 99 as the native VLAN for untagged traffic.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "VTP version 3 supports extended VLANs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VTP version 3 supports extended VLANs (1006–4094) and enhanced security.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command enables 802.1X authentication on a switch port?",
    options: [
      "authentication port-control auto",
      "dot1x port-control auto",
      "switchport mode access",
      "aaa authentication dot1x",
    ],
    correctAnswer: 0,
    explanation:
      "The 'authentication port-control auto' command enables 802.1X authentication on a port.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands verify EtherChannel configuration? (Choose two)",
    options: [
      "show etherchannel summary",
      "show interfaces port-channel",
      "show vlan brief",
      "show spanning-tree",
      "show interfaces trunk",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show etherchannel summary' displays EtherChannel status, and 'show interfaces port-channel' shows the logical interface details.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the default VTP mode on a Cisco switch?",
    options: ["Server", "Client", "Transparent", "Off"],
    correctAnswer: 0,
    explanation:
      "The default VTP mode is Server, allowing the switch to create and propagate VLANs.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "A switch port in 'dynamic auto' mode will always form a trunk.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A 'dynamic auto' port forms a trunk only if the neighbor actively requests it (e.g., 'dynamic desirable' or 'trunk').",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command restricts a switch port to a single MAC address?",
    options: [
      "switchport port-security maximum 1",
      "switchport port-security mac-address 0000.1111.2222",
      "switchport mode access",
      "switchport port-security",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport port-security maximum 1' command limits the port to one MAC address.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two features enhance STP convergence? (Choose two)",
    options: [
      "PortFast",
      "BPDU Guard",
      "UplinkFast",
      "Root Guard",
      "VTP pruning",
    ],
    correctAnswer: [0, 2],
    explanation:
      "PortFast speeds up access port convergence, and UplinkFast accelerates recovery for uplink failures.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command displays the MAC address table on a switch?",
    options: [
      "show mac address-table",
      "show arp",
      "show interfaces",
      "show vlan brief",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show mac address-table' command displays the MAC addresses learned by the switch.",
  },

  // IP Connectivity (25 new questions)
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the broadcast address for the subnet 192.168.5.20/28?",
    options: ["192.168.5.15", "192.168.5.31", "192.168.5.47", "192.168.5.63"],
    correctAnswer: 1,
    explanation:
      "For a /28 subnet (increment 16), 192.168.5.20 is in 192.168.5.16–192.168.5.31, with the broadcast address 192.168.5.31.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "RIP supports a maximum of 15 hops by default.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RIP (Routing Information Protocol) has a maximum hop count of 15, with 16 considered unreachable.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure EIGRP on a router? (Choose two)",
    options: [
      "router eigrp 100",
      "network 10.0.0.0 0.255.255.255",
      "ip eigrp 100",
      "eigrp router-id 1.1.1.1",
      "network 10.0.0.0",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'router eigrp 100' enables EIGRP with AS 100, and 'network 10.0.0.0 0.255.255.255' advertises the network.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the HSRP status on a router?",
    options: ["show standby", "show ip hsrp", "show vrrp", "show glbp"],
    correctAnswer: 0,
    explanation:
      "The 'show standby' command displays the HSRP status, including group, state, and virtual IP.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "OSPF requires manual configuration of neighbor adjacencies.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. OSPF automatically discovers neighbors via multicast hello packets.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the default EIGRP hold time for neighbors?",
    options: ["5 seconds", "15 seconds", "30 seconds", "60 seconds"],
    correctAnswer: 1,
    explanation:
      "The default EIGRP hold time is 15 seconds, after which a neighbor is considered down if no hellos are received.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure a static route? (Choose two)",
    options: [
      "ip route 172.16.0.0 255.255.0.0 192.168.1.1",
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "ip default-gateway 192.168.1.1",
      "network 172.16.0.0",
      "ip routing",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip route 172.16.0.0 255.255.0.0 192.168.1.1' configures a static route, and 'ip route 0.0.0.0 0.0.0.0 192.168.1.1' sets a default route.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which protocol uses the Dijkstra algorithm for path selection?",
    options: ["RIP", "EIGRP", "OSPF", "BGP"],
    correctAnswer: 2,
    explanation:
      "OSPF uses the Dijkstra algorithm to calculate the shortest path based on link-state information.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "IPv6 supports broadcast addressing for neighbor discovery.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. IPv6 uses multicast (via Neighbor Discovery Protocol) instead of broadcast for neighbor discovery.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command enables OSPF on a specific interface?",
    options: [
      "ip ospf 1 area 0",
      "network 192.168.1.0 0.0.0.255 area 0",
      "ospf enable",
      "interface ospf 1",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip ospf 1 area 0' command enables OSPF directly on an interface for process ID 1 in area 0.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two features are supported by GLBP? (Choose two)",
    options: [
      "Preemption",
      "Load balancing",
      "Virtual MAC address",
      "Path selection",
      "Metric-based routing",
    ],
    correctAnswer: [1, 2],
    explanation:
      "GLBP (Gateway Load Balancing Protocol) supports load balancing across multiple routers and uses virtual MAC addresses.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the network address for the IP 10.10.10.50/29?",
    options: ["10.10.10.48", "10.10.10.50", "10.10.10.40", "10.10.10.56"],
    correctAnswer: 0,
    explanation:
      "For a /29 subnet (increment 8), 10.10.10.50 is in 10.10.10.48–10.10.10.55, with the network address 10.10.10.48.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "The 'show ip route' command displays only connected routes by default.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'show ip route' displays all routes, including connected, static, and dynamic routes.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which command configures VRRP group 1 with a virtual IP of 192.168.1.254?",
    options: [
      "vrrp 1 ip 192.168.1.254",
      "standby 1 ip 192.168.1.254",
      "vrrp group 1 ip 192.168.1.254",
      "ip vrrp 1 192.168.1.254",
    ],
    correctAnswer: 0,
    explanation:
      "The 'vrrp 1 ip 192.168.1.254' command configures VRRP group 1 with the virtual IP 192.168.1.254.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands verify EIGRP configuration? (Choose two)",
    options: [
      "show ip eigrp interfaces",
      "show ip eigrp neighbors",
      "show ip route",
      "show running-config",
      "show ip eigrp topology",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show ip eigrp interfaces' displays EIGRP-enabled interfaces, and 'show ip eigrp neighbors' shows neighbor adjacencies.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "What is the administrative distance of a static route by default?",
    options: ["1", "90", "110", "120"],
    correctAnswer: 0,
    explanation:
      "A static route has a default administrative distance of 1, making it highly preferred.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "OSPF uses multicast address 224.0.0.5 for hello packets.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. OSPF uses multicast address 224.0.0.5 for hello packets and LSAs on multi-access networks.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the ARP table on a Cisco router?",
    options: [
      "show arp",
      "show ip arp",
      "show mac address-table",
      "show ip route",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip arp' command displays the ARP table, showing IP-to-MAC mappings.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure IPv6 OSPFv3? (Choose two)",
    options: [
      "ipv6 router ospf 1",
      "ipv6 ospf 1 area 0",
      "network 2001:db8::/64 area 0",
      "ospfv3 1 ipv6 area 0",
      "router ospfv3 1",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ipv6 router ospf 1' enables OSPFv3, and 'ipv6 ospf 1 area 0' enables it on an interface.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the purpose of the 'ip route-cache' command?",
    options: [
      "Enable NAT",
      "Enable fast switching",
      "Disable routing",
      "Configure static routes",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip route-cache' command enables fast switching for improved routing performance.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "EIGRP supports IPv6 with the same configuration as IPv4.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. EIGRP for IPv6 requires different commands, such as 'ipv6 eigrp' and enabling on interfaces.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command sets the OSPF priority to 50 on an interface?",
    options: [
      "ip ospf priority 50",
      "ospf priority 50",
      "priority 50",
      "ip ospf cost 50",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip ospf priority 50' command sets the OSPF priority for Designated Router election.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands are used to verify HSRP? (Choose two)",
    options: [
      "show standby",
      "show standby brief",
      "show ip route",
      "show vrrp",
      "show running-config",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show standby' and 'show standby brief' display HSRP group details and status.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the usable host range for the subnet 172.31.10.0/27?",
    options: [
      "172.31.10.1–172.31.10.30",
      "172.31.10.0–172.31.10.31",
      "172.31.10.1–172.31.10.31",
      "172.31.10.0–172.31.10.30",
    ],
    correctAnswer: 0,
    explanation:
      "For a /27 subnet (increment 32), the range is 172.31.10.0–172.31.10.31, with usable hosts 172.31.10.1–172.31.10.30.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "The 'ip routing' command is enabled by default on Cisco routers.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'ip routing' command is enabled by default on Cisco routers to allow IP routing.",
  },

  // IP Services (10 new questions)
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures a Cisco router as a DHCP server?",
    options: [
      "ip dhcp server",
      "ip dhcp pool MYPOOL",
      "dhcp enable",
      "ip helper-address 192.168.1.1",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip dhcp pool MYPOOL' command creates a DHCP pool to configure the router as a DHCP server.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "NTP uses UDP port 123 for synchronization.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NTP (Network Time Protocol) uses UDP port 123 for time synchronization.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure static NAT? (Choose two)",
    options: [
      "ip nat inside source static 192.168.1.10 209.165.200.10",
      "ip nat outside",
      "ip nat inside",
      "access-list 1 permit 192.168.1.0 0.0.0.255",
      "ip nat pool NAT_POOL 209.165.200.1 209.165.200.10",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'ip nat inside source static 192.168.1.10 209.165.200.10' maps a private to a public IP, and 'ip nat inside' marks the internal interface.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'snmp-server community' command?",
    options: [
      "Enable SSH",
      "Configure SNMP access",
      "Set syslog server",
      "Enable NTP",
    ],
    correctAnswer: 1,
    explanation:
      "The 'snmp-server community' command configures SNMP access with a community string.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "Syslog uses TCP for reliable message delivery.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Syslog typically uses UDP port 514, which is unreliable; TCP can be configured but is not default.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command excludes an IP address from a DHCP pool?",
    options: [
      "ip dhcp excluded-address 192.168.1.1",
      "ip dhcp pool exclude 192.168.1.1",
      "dhcp exclude 192.168.1.1",
      "ip dhcp reserve 192.168.1.1",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip dhcp excluded-address 192.168.1.1' command prevents the specified IP from being assigned by DHCP.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure a syslog server? (Choose two)",
    options: [
      "logging host 192.168.1.100",
      "logging trap informational",
      "logging enable",
      "logging server 192.168.1.100",
      "logging facility local7",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'logging host 192.168.1.100' specifies the syslog server, and 'logging trap informational' sets the severity level.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the default lease duration for a Cisco DHCP server?",
    options: ["1 hour", "12 hours", "1 day", "7 days"],
    correctAnswer: 2,
    explanation:
      "The default DHCP lease duration on a Cisco router is 1 day (24 hours).",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'ip nat outside' command is applied to the internal interface.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'ip nat outside' command is applied to the external interface, while 'ip nat inside' is for the internal.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command displays the NTP status on a Cisco router?",
    options: [
      "show ntp status",
      "show ntp associations",
      "show clock",
      "show ntp server",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show ntp status' command displays the NTP synchronization status and stratum level.",
  },

  // Security Fundamentals (15 new questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables 802.1X globally on a Cisco switch?",
    options: [
      "dot1x system-auth-control",
      "aaa authentication dot1x",
      "authentication port-control auto",
      "dot1x enable",
    ],
    correctAnswer: 0,
    explanation:
      "The 'dot1x system-auth-control' command enables 802.1X authentication globally on a switch.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'enable password' command stores the password in encrypted form.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'enable password' command stores the password in plain text unless 'service password-encryption' is enabled; use 'enable secret' for encryption.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure port security with a sticky MAC address? (Choose two)",
    options: [
      "switchport port-security mac-address sticky",
      "switchport port-security maximum 1",
      "switchport port-security",
      "switchport mode access",
      "switchport port-security violation shutdown",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'switchport port-security' enables port security, and 'switchport port-security mac-address sticky' learns MAC addresses dynamically.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which protocol is used for centralized authentication in 802.1X?",
    options: ["SNMP", "RADIUS", "SSH", "Telnet"],
    correctAnswer: 1,
    explanation:
      "RADIUS is used for centralized authentication in 802.1X, communicating with an authentication server.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "DHCP snooping can prevent IP address spoofing.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DHCP snooping validates DHCP messages, preventing clients from using unauthorized IP addresses.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command applies an extended ACL to a VTY line?",
    options: [
      "ip access-group 100 in",
      "access-class 100 in",
      "access-list 100 permit tcp any any",
      "ip access-list extended 100",
    ],
    correctAnswer: 1,
    explanation:
      "The 'access-class 100 in' command applies an ACL to VTY lines for remote access control.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure AAA authentication? (Choose two)",
    options: [
      "aaa new-model",
      "aaa authentication login default group radius",
      "login local",
      "crypto key generate rsa",
      "ip domain-name example.com",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'aaa new-model' enables AAA, and 'aaa authentication login default group radius' configures authentication using a RADIUS server.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the default action for a port security violation in 'protect' mode?",
    options: [
      "Shut down the port",
      "Drop violating packets",
      "Send an SNMP trap",
      "Disable the port",
    ],
    correctAnswer: 1,
    explanation:
      "In 'protect' mode, port security drops packets from unauthorized MAC addresses without generating notifications.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "The 'transport input ssh' command disables Telnet access.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'transport input ssh' command restricts VTY access to SSH, disabling Telnet.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which feature prevents unauthorized DHCP clients from receiving IP addresses?",
    options: [
      "Port security",
      "DHCP snooping",
      "Dynamic ARP Inspection",
      "802.1X",
    ],
    correctAnswer: 1,
    explanation:
      "DHCP snooping filters DHCP messages, allowing only trusted ports to assign IP addresses.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure a named ACL? (Choose two)",
    options: [
      "ip access-list standard MYACL",
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "ip access-list extended MYACL",
      "access-list 100 permit tcp any any",
      "ip access-group MYACL in",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'ip access-list standard MYACL' and 'ip access-list extended MYACL' create named standard and extended ACLs.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command sets the privilege level for a user to 15?",
    options: [
      "username admin privilege 15 secret cisco",
      "username admin secret cisco",
      "privilege level 15",
      "enable secret level 15 cisco",
    ],
    correctAnswer: 0,
    explanation:
      "The 'username admin privilege 15 secret cisco' command sets the user’s privilege level to 15 with an encrypted password.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "Dynamic ARP Inspection can operate without DHCP snooping.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. DAI relies on DHCP snooping bindings to validate ARP packets.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables SSH version 2 on a Cisco device?",
    options: [
      "ip ssh version 2",
      "ssh version 2",
      "transport input ssh",
      "crypto key generate rsa",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip ssh version 2' command enables SSH version 2 for enhanced security.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two features protect against MAC address spoofing? (Choose two)",
    options: [
      "Port security",
      "DHCP snooping",
      "Dynamic ARP Inspection",
      "VLAN ACLs",
      "Root Guard",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Port security restricts MAC addresses, and Dynamic ARP Inspection validates ARP packets to prevent spoofing.",
  },

  // Automation and Programmability (10 new questions)
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which protocol uses XML for data encoding in network automation?",
    options: ["RESTCONF", "NETCONF", "SNMP", "Syslog"],
    correctAnswer: 1,
    explanation:
      "NETCONF uses XML as its primary data encoding format for configuration and state data.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Ansible uses YAML for its playbooks.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Ansible uses YAML to define playbooks for network automation tasks.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two benefits does network automation provide? (Choose two)",
    options: [
      "Increased manual errors",
      "Consistent configurations",
      "Reduced operational costs",
      "Higher latency",
      "Static policies",
    ],
    correctAnswer: [1, 2],
    explanation:
      "Network automation ensures consistent configurations and reduces operational costs by minimizing manual tasks.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of an API in network automation?",
    options: [
      "Encrypt data",
      "Provide programmatic access",
      "Route packets",
      "Monitor hardware",
    ],
    correctAnswer: 1,
    explanation:
      "APIs provide programmatic access to network devices, enabling automation and integration.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "SDN separates the control plane from the data plane.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SDN (Software-Defined Networking) separates the control plane (decision-making) from the data plane (forwarding).",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which HTTP method updates a resource in a REST API?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 2,
    explanation: "The PUT method updates an existing resource in a REST API.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two Cisco platforms support RESTCONF? (Choose two)",
    options: ["IOS XE", "NX-OS", "IOS 12.4", "Catalyst 2950", "IOS XR"],
    correctAnswer: [0, 1],
    explanation:
      "IOS XE and NX-OS support RESTCONF for programmatic configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the role of a southbound API in SDN?",
    options: [
      "Communicate with applications",
      "Manage user access",
      "Interact with network devices",
      "Encrypt traffic",
    ],
    correctAnswer: 2,
    explanation:
      "Southbound APIs allow the SDN controller to interact with network devices for configuration and management.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "Puppet requires an agent to be installed on managed network devices.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Puppet typically requires an agent on managed devices, unlike Ansible.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which data model is used by Cisco for network automation?",
    options: ["JSON", "YANG", "XML", "CSV"],
    correctAnswer: 1,
    explanation:
      "YANG is used by Cisco to define data models for NETCONF and RESTCONF in network automation.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which OSI layer handles logical addressing and routing?",
    options: ["Data Link", "Network", "Transport", "Session"],
    correctAnswer: 1,
    explanation:
      "The Network layer (Layer 3) handles logical addressing (e.g., IP addresses) and routing of packets.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A hub creates separate collision domains for each port.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A hub creates a single collision domain, as it forwards signals to all ports.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two characteristics describe a WAN? (Choose two)",
    options: [
      "High bandwidth",
      "Geographically dispersed",
      "Low latency",
      "Leased lines",
      "Single broadcast domain",
    ],
    correctAnswer: [1, 3],
    explanation:
      "A WAN (Wide Area Network) is geographically dispersed and often uses leased lines for connectivity.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the last usable IP address in the subnet 192.168.10.128/27?",
    options: [
      "192.168.10.158",
      "192.168.10.159",
      "192.168.10.160",
      "192.168.10.161",
    ],
    correctAnswer: 0,
    explanation:
      "For a /27 subnet (increment 32), the range is 192.168.10.128–192.168.10.159. The last usable IP is 192.168.10.158 (159 is broadcast).",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "TCP is a connectionless protocol.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. TCP is a connection-oriented protocol, establishing a session before data transfer.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol is used to detect network errors?",
    options: ["ARP", "DHCP", "DNS", "ICMP"],
    correctAnswer: 3,
    explanation:
      "ICMP (Internet Control Message Protocol) is used to detect and report network errors, such as with ping.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two fields are included in an Ethernet frame header? (Choose two)",
    options: [
      "Source IP",
      "Destination MAC",
      "Type/Length",
      "Sequence number",
      "TTL",
    ],
    correctAnswer: [1, 2],
    explanation:
      "An Ethernet frame header includes the Destination MAC address and Type/Length field (e.g., IPv4, IPv6).",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the default gateway in a network?",
    options: [
      "Resolve MAC addresses",
      "Forward packets to other networks",
      "Assign IP addresses",
      "Filter traffic",
    ],
    correctAnswer: 1,
    explanation:
      "The default gateway forwards packets to destinations outside the local network.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "IPv6 uses ARP for address resolution.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. IPv6 uses Neighbor Discovery Protocol (NDP) instead of ARP for address resolution.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which device operates at both the Data Link and Network layers?",
    options: ["Hub", "Switch", "Router", "Repeater"],
    correctAnswer: 2,
    explanation:
      "A router operates at the Network layer (routing) and Data Link layer (frame processing).",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two protocols are used for email services? (Choose two)",
    options: ["SMTP", "POP3", "HTTP", "FTP", "SNMP"],
    correctAnswer: [0, 1],
    explanation:
      "SMTP (Simple Mail Transfer Protocol) sends emails, and POP3 (Post Office Protocol) retrieves them.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the maximum number of hosts in a /28 subnet?",
    options: ["14", "16", "30", "32"],
    correctAnswer: 0,
    explanation:
      "A /28 subnet has 2^(32-28) = 16 addresses, with 14 usable hosts (excluding network and broadcast).",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A packet is a Protocol Data Unit (PDU) at the Data Link layer.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A packet is a PDU at the Network layer; a frame is the PDU at the Data Link layer.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which cable type connects a router to a PC?",
    options: ["Straight-through", "Crossover", "Rollover", "Coaxial"],
    correctAnswer: 2,
    explanation:
      "A rollover cable (console cable) connects a PC to a router’s console port for configuration.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two characteristics apply to UDP? (Choose two)",
    options: [
      "Connection-oriented",
      "Low overhead",
      "Reliable delivery",
      "Best-effort delivery",
      "Flow control",
    ],
    correctAnswer: [1, 3],
    explanation:
      "UDP has low overhead and uses best-effort delivery, without reliability or flow control.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the FCS field in an Ethernet frame?",
    options: [
      "Address resolution",
      "Error detection",
      "VLAN tagging",
      "Frame synchronization",
    ],
    correctAnswer: 1,
    explanation:
      "The FCS (Frame Check Sequence) field detects errors in the frame using a CRC.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "The IP address 192.168.1.0/24 is a valid host address.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 192.168.1.0 is the network address for the /24 subnet, not a valid host address.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol is used for file transfer?",
    options: ["HTTP", "FTP", "DNS", "ICMP"],
    correctAnswer: 1,
    explanation:
      "FTP (File Transfer Protocol) is used for transferring files between devices.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two factors affect network jitter? (Choose two)",
    options: [
      "Packet loss",
      "Frame size",
      "Variable delay",
      "Bandwidth",
      "MTU size",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Packet loss and variable delay (inconsistent packet arrival times) contribute to network jitter.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the broadcast address for a Class C network with a /25 mask?",
    options: [
      "255.255.255.127",
      "255.255.255.255",
      "192.168.1.127",
      "192.168.1.255",
    ],
    correctAnswer: 2,
    explanation:
      "For a /25 Class C network (e.g., 192.168.1.0/25), the broadcast address is 192.168.1.127 (range 192.168.1.0–192.168.1.127).",
  },

  // Network Access (20 new questions)
  {
    category: "Network Access",
    type: "single",
    question: "Which command verifies the trunking status of a switch port?",
    options: [
      "show vlan brief",
      "show interfaces trunk",
      "show spanning-tree",
      "show mac address-table",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show interfaces trunk' command displays trunking status, including allowed VLANs and encapsulation.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "The native VLAN must be the same on both ends of a trunk link.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Mismatched native VLANs on a trunk link cause traffic issues and generate error messages.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure BPDU Guard? (Choose two)",
    options: [
      "spanning-tree bpduguard enable",
      "spanning-tree portfast",
      "spanning-tree bpduguard default",
      "switchport mode access",
      "spanning-tree root guard",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'spanning-tree bpduguard enable' enables BPDU Guard on a port, and 'spanning-tree bpduguard default' enables it globally for PortFast ports.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the purpose of the 'switchport trunk encapsulation dot1q' command?",
    options: [
      "Enable access mode",
      "Set VLAN tagging protocol",
      "Disable DTP",
      "Assign native VLAN",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport trunk encapsulation dot1q' command sets the trunk to use 802.1Q VLAN tagging.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "Port security can be configured on trunk ports.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Port security is typically configured on access ports, not trunk ports.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command displays the VTP configuration on a switch?",
    options: [
      "show vtp status",
      "show vlan brief",
      "show interfaces trunk",
      "show spanning-tree",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show vtp status' command displays the VTP mode, domain, and version.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure a static access port? (Choose two)",
    options: [
      "switchport mode access",
      "switchport access vlan 30",
      "switchport mode trunk",
      "vlan 30",
      "switchport trunk native vlan 30",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'switchport mode access' sets the port to access mode, and 'switchport access vlan 30' assigns VLAN 30.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What happens if a switch receives a BPDU on a PortFast-enabled port with BPDU Guard?",
    options: [
      "Port transitions to forwarding",
      "Port is placed in err-disabled state",
      "BPDU is ignored",
      "Port becomes a trunk",
    ],
    correctAnswer: 1,
    explanation:
      "BPDU Guard places a PortFast-enabled port in err-disabled state if it receives a BPDU, preventing topology changes.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "The 'show interfaces switchport' command displays VTP domain information.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'show interfaces switchport' displays port and VLAN details; use 'show vtp status' for VTP domain information.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which protocol dynamically negotiates trunking between switches?",
    options: ["STP", "VTP", "DTP", "LACP"],
    correctAnswer: 2,
    explanation:
      "DTP (Dynamic Trunking Protocol) negotiates trunking modes (auto, desirable) between Cisco switches.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure a LACP EtherChannel? (Choose two)",
    options: [
      "channel-group 1 mode active",
      "interface port-channel 1",
      "channel-group 1 mode passive",
      "etherchannel 1 mode on",
      "switchport mode trunk",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'channel-group 1 mode active' and 'channel-group 1 mode passive' configure LACP for EtherChannel.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command restricts a trunk to VLANs 10 and 20?",
    options: [
      "switchport trunk allowed vlan 10,20",
      "switchport access vlan 10,20",
      "vlan 10,20",
      "switchport trunk vlan 10,20",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport trunk allowed vlan 10,20' command restricts the trunk to VLANs 10 and 20.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "VTP pruning reduces unnecessary VLAN traffic on trunks.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VTP pruning prevents unused VLAN traffic from being sent over trunk links.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command enables Root Guard on a switch port?",
    options: [
      "spanning-tree root guard",
      "spanning-tree bpduguard enable",
      "spanning-tree portfast",
      "spanning-tree guard root",
    ],
    correctAnswer: 3,
    explanation:
      "The 'spanning-tree guard root' command enables Root Guard to protect the STP root bridge.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands verify port security settings? (Choose two)",
    options: [
      "show port-security",
      "show interfaces switchport",
      "show vlan brief",
      "show port-security interface",
      "show running-config",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'show port-security' displays port security settings, and 'show port-security interface' shows details for a specific port.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the default STP mode on a Cisco switch?",
    options: ["PVST+", "RSTP", "MST", "STP"],
    correctAnswer: 0,
    explanation:
      "The default STP mode on Cisco switches is PVST+ (Per-VLAN Spanning Tree Plus).",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "A switch port in 'dynamic desirable' mode can form an access port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A 'dynamic desirable' port can form an access port if the neighbor is in 'access' or 'dynamic auto' mode.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command sets the maximum number of MAC addresses to 3 on a port?",
    options: [
      "switchport port-security maximum 3",
      "switchport port-security mac-address 3",
      "switchport port-security limit 3",
      "switchport mode access maximum 3",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport port-security maximum 3' command limits the port to three MAC addresses.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two features are supported by Rapid Per-VLAN Spanning Tree (PVST)? (Choose two)",
    options: [
      "Faster convergence",
      "Per-VLAN instances",
      "Single topology",
      "BPDU Guard",
      "PortFast",
    ],
    correctAnswer: [0, 1],
    explanation:
      "Rapid PVST offers faster convergence than traditional PVST and maintains per-VLAN STP instances.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command displays the native VLAN on a trunk port?",
    options: [
      "show interfaces trunk",
      "show vlan brief",
      "show spanning-tree",
      "show vtp status",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show interfaces trunk' command displays the native VLAN and other trunking details.",
  },

  // IP Connectivity (25 new questions)
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the network address for the IP 172.16.100.75/26?",
    options: [
      "172.16.100.0",
      "172.16.100.64",
      "172.16.100.75",
      "172.16.100.128",
    ],
    correctAnswer: 1,
    explanation:
      "For a /26 subnet (increment 64), 172.16.100.75 is in 172.16.100.64–172.16.100.127, with the network address 172.16.100.64.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "EIGRP uses multicast address 224.0.0.10 for updates.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. EIGRP uses multicast address 224.0.0.10 for sending hello packets and updates.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands configure OSPF area 0 on a router? (Choose two)",
    options: [
      "router ospf 1",
      "network 192.168.1.0 0.0.0.255 area 0",
      "ip ospf 1 area 0",
      "ospf area 0 enable",
      "network 192.168.1.0 255.255.255.0",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'router ospf 1' enables OSPF, and 'network 192.168.1.0 0.0.0.255 area 0' advertises the network in area 0.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the VRRP status on a router?",
    options: ["show vrrp", "show standby", "show glbp", "show ip vrrp"],
    correctAnswer: 0,
    explanation:
      "The 'show vrrp' command displays the VRRP status, including group, state, and virtual IP.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "RIP uses a link-state algorithm for routing.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. RIP uses a distance-vector algorithm, unlike OSPF, which is link-state.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the default OSPF hello interval on a broadcast network?",
    options: ["5 seconds", "10 seconds", "30 seconds", "60 seconds"],
    correctAnswer: 1,
    explanation:
      "The default OSPF hello interval on broadcast networks is 10 seconds.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure a default route? (Choose two)",
    options: [
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "ip default-gateway 192.168.1.1",
      "ip route 192.168.1.0 255.255.255.0 192.168.1.1",
      "default-information originate",
      "ip routing",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'ip route 0.0.0.0 0.0.0.0 192.168.1.1' sets a default route, and 'default-information originate' advertises it in OSPF.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which protocol supports load balancing across unequal-cost paths?",
    options: ["RIP", "OSPF", "EIGRP", "BGP"],
    correctAnswer: 2,
    explanation:
      "EIGRP supports unequal-cost load balancing using the variance feature.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "IPv6 uses a 64-bit interface ID for all unicast addresses.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 unicast addresses typically use a 64-bit interface ID for the host portion.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command configures a static route with a next-hop IP?",
    options: [
      "ip route 10.0.0.0 255.255.255.0 192.168.1.1",
      "ip route 10.0.0.0 255.255.255.0 eth0/0",
      "ip route 10.0.0.0 192.168.1.1",
      "ip route 10.0.0.0 eth0/0",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip route 10.0.0.0 255.255.255.0 192.168.1.1' command configures a static route with a next-hop IP.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands verify OSPF neighbor adjacencies? (Choose two)",
    options: [
      "show ip ospf neighbor",
      "show ip ospf interface",
      "show ip route ospf",
      "show ip ospf database",
      "show running-config",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show ip ospf neighbor' displays neighbor details, and 'show ip ospf interface' shows interface-specific OSPF information.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the broadcast address for the subnet 10.1.1.100/30?",
    options: ["10.1.1.99", "10.1.1.100", "10.1.1.103", "10.1.1.107"],
    correctAnswer: 2,
    explanation:
      "For a /30 subnet (increment 4), 10.1.1.100 is in 10.1.1.100–10.1.1.103, with the broadcast address 10.1.1.103.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "The 'ip default-gateway' command is used on routers for routing.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'ip default-gateway' is used on switches or non-routing devices; routers use 'ip route' for default routes.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command enables IPv6 OSPFv3 on a router?",
    options: [
      "ipv6 ospf 1 area 0",
      "ipv6 router ospf 1",
      "ospfv3 enable",
      "ipv6 unicast-routing",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ipv6 router ospf 1' command enables OSPFv3 for IPv6 routing.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two features are supported by HSRP? (Choose two)",
    options: [
      "Load balancing",
      "Virtual IP address",
      "Preemption",
      "Dynamic routing",
      "Unequal-cost paths",
    ],
    correctAnswer: [1, 2],
    explanation:
      "HSRP uses a virtual IP address for redundancy and supports preemption for priority-based failover.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the administrative distance of an EIGRP internal route?",
    options: ["90", "100", "110", "170"],
    correctAnswer: 0,
    explanation:
      "EIGRP internal routes have an administrative distance of 90, preferred over OSPF (110).",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "OSPF supports authentication for secure routing updates.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. OSPF supports authentication (e.g., MD5) to secure routing updates.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which command displays the routing protocols enabled on a router?",
    options: [
      "show ip route",
      "show ip protocols",
      "show ip arp",
      "show running-config",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip protocols' command displays details of enabled routing protocols (e.g., OSPF, EIGRP).",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure RIP on a router? (Choose two)",
    options: [
      "router rip",
      "network 192.168.1.0",
      "version 2",
      "ip rip enable",
      "network 192.168.1.0 255.255.255.0",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'router rip' enables RIP, and 'network 192.168.1.0' advertises the network.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the purpose of the 'ip arp' command?",
    options: [
      "Enable ARP",
      "Display ARP table",
      "Configure static ARP",
      "Clear ARP cache",
    ],
    correctAnswer: 2,
    explanation:
      "The 'ip arp' command configures a static ARP entry (e.g., 'ip arp 192.168.1.1 0000.1111.2222').",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "GLBP provides load balancing by default.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. GLBP (Gateway Load Balancing Protocol) provides load balancing across multiple routers.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command sets the EIGRP router ID to 2.2.2.2?",
    options: [
      "eigrp router-id 2.2.2.2",
      "router-id 2.2.2.2",
      "ip eigrp router-id 2.2.2.2",
      "eigrp id 2.2.2.2",
    ],
    correctAnswer: 0,
    explanation:
      "The 'eigrp router-id 2.2.2.2' command sets the EIGRP router ID.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands verify GLBP configuration? (Choose two)",
    options: [
      "show glbp",
      "show glbp brief",
      "show standby",
      "show ip route",
      "show running-config",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show glbp' and 'show glbp brief' display GLBP group details and status.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the usable host range for the subnet 192.168.200.0/29?",
    options: [
      "192.168.200.1–192.168.200.6",
      "192.168.200.0–192.168.200.7",
      "192.168.200.1–192.168.200.7",
      "192.168.200.0–192.168.200.6",
    ],
    correctAnswer: 0,
    explanation:
      "For a /29 subnet (increment 8), the range is 192.168.200.0–192.168.200.7, with usable hosts 192.168.200.1–192.168.200.6.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "The 'show ip ospf interface' command displays neighbor information.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'show ip ospf interface' displays interface details; use 'show ip ospf neighbor' for neighbor information.",
  },

  // IP Services (10 new questions)
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures the default gateway for a DHCP pool?",
    options: [
      "default-router 192.168.1.1",
      "ip dhcp pool gateway 192.168.1.1",
      "gateway 192.168.1.1",
      "ip default-gateway 192.168.1.1",
    ],
    correctAnswer: 0,
    explanation:
      "The 'default-router 192.168.1.1' command sets the default gateway for a DHCP pool.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "SNMP uses UDP port 161 for agent communication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SNMP uses UDP port 161 for agent communication and port 162 for traps.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure dynamic NAT? (Choose two)",
    options: [
      "ip nat pool MYPOOL 209.165.200.1 209.165.200.10 netmask 255.255.255.0",
      "ip nat inside source list 1 pool MYPOOL",
      "access-list 1 permit 192.168.1.0 0.0.0.255",
      "ip nat inside",
      "ip nat outside",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip nat pool MYPOOL ...' defines the public IP pool, and 'ip nat inside source list 1 pool MYPOOL' maps private IPs to the pool.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'ntp master' command?",
    options: [
      "Set the router as an NTP client",
      "Set the router as an NTP server",
      "Enable NTP authentication",
      "Set the NTP server IP",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ntp master' command configures the router as an NTP server.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "DHCP relay forwards broadcasts to a DHCP server.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DHCP relay (via 'ip helper-address') forwards DHCP broadcasts to a server on another subnet.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command displays the syslog messages on a Cisco device?",
    options: [
      "show logging",
      "show syslog",
      "show log messages",
      "show logging host",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show logging' command displays syslog messages and logging configuration.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure a DHCP lease duration? (Choose two)",
    options: [
      "ip dhcp pool MYPOOL",
      "lease 0 12 0",
      "network 192.168.1.0 255.255.255.0",
      "lease 7",
      "default-router 192.168.1.1",
    ],
    correctAnswer: [1, 3],
    explanation:
      "'lease 0 12 0' sets a 12-hour lease, and 'lease 7' sets a 7-day lease for the DHCP pool.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the default SNMP trap severity level on a Cisco device?",
    options: ["Informational", "Warning", "Error", "Critical"],
    correctAnswer: 0,
    explanation:
      "The default SNMP trap severity level is Informational, capturing all events.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "The 'ip nat pool' command is used for static NAT.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'ip nat pool' command is used for dynamic NAT; static NAT uses 'ip nat inside source static'.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command verifies the NTP server associations?",
    options: [
      "show ntp status",
      "show ntp associations",
      "show clock",
      "show ntp server",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ntp associations' command displays the NTP server associations and their status.",
  },

  // Security Fundamentals (15 new questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command restricts SSH access to a specific subnet?",
    options: [
      "access-class 10 in",
      "ip access-group 10 in",
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "line vty 0 4 access-list 10",
    ],
    correctAnswer: 0,
    explanation:
      "The 'access-class 10 in' command applies an ACL to VTY lines, restricting SSH access.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "Port security can prevent MAC address flooding attacks.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Port security limits the number of MAC addresses, mitigating flooding attacks.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure AAA for SSH access? (Choose two)",
    options: [
      "aaa new-model",
      "aaa authentication login default local",
      "username admin secret cisco",
      "crypto key generate rsa",
      "line vty 0 4",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'aaa new-model' enables AAA, and 'aaa authentication login default local' uses the local database for authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which feature mitigates IP address spoofing?",
    options: ["Port security", "DHCP snooping", "802.1X", "VLAN ACLs"],
    correctAnswer: 1,
    explanation:
      "DHCP snooping prevents IP address spoofing by validating DHCP messages.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "The 'enable secret' command uses MD5 hashing by default.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'enable secret' command encrypts the password using MD5 hashing.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables DHCP snooping on a switch?",
    options: [
      "ip dhcp snooping",
      "dhcp snooping enable",
      "ip dhcp relay",
      "ip dhcp snooping vlan 10",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip dhcp snooping' command enables DHCP snooping globally on a switch.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure a standard ACL? (Choose two)",
    options: [
      "access-list 20 permit 192.168.2.0 0.0.0.255",
      "ip access-list standard MYACL",
      "access-list 100 permit tcp any any",
      "access-list 20 deny any",
      "ip access-group 20 in",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'access-list 20 permit 192.168.2.0 0.0.0.255' and 'access-list 20 deny any' define rules for a standard ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'line vty 0 4' command?",
    options: [
      "Enable SSH",
      "Configure Telnet/SSH access",
      "Set console access",
      "Disable remote access",
    ],
    correctAnswer: 1,
    explanation:
      "The 'line vty 0 4' command configures settings for Telnet and SSH access via VTY lines.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "802.1X authenticates devices before granting network access.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. 802.1X authenticates devices using EAP before allowing network access.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command sets the EXEC timeout to 5 minutes?",
    options: [
      "exec-timeout 5 0",
      "timeout 5",
      "exec-timeout 0 5",
      "session-timeout 5",
    ],
    correctAnswer: 0,
    explanation:
      "The 'exec-timeout 5 0' command sets the EXEC session timeout to 5 minutes.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure Dynamic ARP Inspection? (Choose two)",
    options: [
      "ip arp inspection vlan 10",
      "ip dhcp snooping",
      "ip arp inspection trust",
      "switchport port-security",
      "ip arp inspection enable",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'ip arp inspection vlan 10' enables DAI for VLAN 10, and 'ip arp inspection trust' sets a trusted port.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables password encryption for all passwords?",
    options: [
      "enable secret",
      "service password-encryption",
      "password-encryption",
      "crypto key generate rsa",
    ],
    correctAnswer: 1,
    explanation:
      "The 'service password-encryption' command encrypts all passwords in the configuration.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "The 'access-class' command can be applied to console lines.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'access-class' command is applied to VTY lines, not console lines.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which protocol is used by TACACS+ for authentication?",
    options: ["UDP", "TCP", "ICMP", "SNMP"],
    correctAnswer: 1,
    explanation:
      "TACACS+ uses TCP for reliable authentication, authorization, and accounting.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two features protect against VLAN hopping? (Choose two)",
    options: [
      "Disable unused ports",
      "Set native VLAN to an unused VLAN",
      "Enable BPDU Guard",
      "Disable DTP",
      "Enable 802.1X",
    ],
    correctAnswer: [1, 3],
    explanation:
      "Setting the native VLAN to an unused VLAN and disabling DTP prevent VLAN hopping attacks.",
  },

  // Automation and Programmability (10 new questions)
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which protocol uses HTTP/HTTPS for network automation?",
    options: ["NETCONF", "RESTCONF", "SNMP", "Syslog"],
    correctAnswer: 1,
    explanation:
      "RESTCONF uses HTTP/HTTPS for programmatic network device management.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "NETCONF requires SSH for secure communication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NETCONF uses SSH as its transport protocol for secure communication.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two tools support agentless network automation? (Choose two)",
    options: ["Ansible", "Puppet", "Chef", "Salt", "Cisco DNA Center"],
    correctAnswer: [0, 4],
    explanation:
      "Ansible and Cisco DNA Center support agentless automation, using SSH or APIs.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of a northbound API in SDN?",
    options: [
      "Communicate with network devices",
      "Manage control plane",
      "Interface with applications",
      "Encrypt traffic",
    ],
    correctAnswer: 2,
    explanation:
      "Northbound APIs allow SDN controllers to interface with applications for policy and orchestration.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "YANG models are used only with NETCONF.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. YANG models are used with both NETCONF and RESTCONF for data modeling.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which HTTP method deletes a resource in a REST API?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 3,
    explanation: "The DELETE method removes a resource in a REST API.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two data formats are supported by RESTCONF? (Choose two)",
    options: ["JSON", "XML", "CSV", "YAML", "HTML"],
    correctAnswer: [0, 1],
    explanation:
      "RESTCONF supports JSON and XML for encoding configuration and state data.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the benefit of using Cisco DNA Center for automation?",
    options: [
      "Manual CLI configuration",
      "Centralized management",
      "Static routing",
      "Hardware upgrades",
    ],
    correctAnswer: 1,
    explanation:
      "Cisco DNA Center provides centralized management for network automation and orchestration.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Chef requires an agent on managed network devices.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Chef typically requires an agent on managed devices for automation.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which language is commonly used for scripting network automation?",
    options: ["Java", "Python", "C++", "Ruby"],
    correctAnswer: 1,
    explanation:
      "Python is widely used for network automation due to its simplicity and library support.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. A network administrator notices that pings between two hosts on the same subnet fail intermittently. The ARP table shows multiple MAC addresses for a single IP. What is the likely cause?\n\nExhibit:\nshow arp\nIP: 192.168.1.10 MAC: 0000.1111.2222\nIP: 192.168.1.10 MAC: 0000.3333.4444",
    options: [
      "Duplicate IP address",
      "Misconfigured VLAN",
      "ARP cache poisoning",
      "Incorrect subnet mask",
    ],
    correctAnswer: 2,
    explanation:
      "Multiple MAC addresses for a single IP (192.168.1.10) indicate ARP cache poisoning, where an attacker sends fake ARP replies to associate their MAC with the legitimate IP.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "In a /31 subnet, both IP addresses are usable for point-to-point links.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. In a /31 subnet, there are two IP addresses, both usable for point-to-point links, as no network or broadcast address is reserved.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two factors can cause TCP session failures in a congested network? (Choose two)",
    options: [
      "Packet reordering",
      "High jitter",
      "Low MTU",
      "Duplicate ACKs",
      "VLAN mismatch",
    ],
    correctAnswer: [1, 3],
    explanation:
      "High jitter causes variable delays, disrupting TCP timing, and duplicate ACKs indicate packet loss, triggering retransmissions and potential session failures.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the network address for the IP 172.31.255.130 with a subnet mask of 255.255.255.192?",
    options: [
      "172.31.255.0",
      "172.31.255.128",
      "172.31.255.192",
      "172.31.255.64",
    ],
    correctAnswer: 1,
    explanation:
      "For a /26 subnet (mask 255.255.255.192, increment 64), 172.31.255.130 is in 172.31.255.128–172.31.255.191, with the network address 172.31.255.128.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "The TCP window size is dynamically adjusted based on network conditions.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. TCP uses a sliding window mechanism, adjusting the window size based on congestion, acknowledgments, and receiver capacity.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol mitigates loops in a Layer 2 network?",
    options: ["ARP", "STP", "DHCP", "ICMP"],
    correctAnswer: 1,
    explanation:
      "STP (Spanning Tree Protocol) prevents loops in Layer 2 networks by blocking redundant paths.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two IPv6 address types are used for router advertisements? (Choose two)",
    options: [
      "Unicast",
      "Multicast",
      "Anycast",
      "Link-local",
      "Global unicast",
    ],
    correctAnswer: [1, 3],
    explanation:
      "Router advertisements use multicast (e.g., FF02::1 for all nodes) and link-local addresses (FE80::/10) for neighbor discovery.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. A host cannot resolve a domain name, but can ping IP addresses. What is the likely issue?\n\nExhibit:\nshow running-config\nip dns server 8.8.8.8",
    options: [
      "Misconfigured default gateway",
      "DNS server unreachable",
      "Incorrect subnet mask",
      "MTU mismatch",
    ],
    correctAnswer: 1,
    explanation:
      "The host can ping IPs but not resolve domains, suggesting the DNS server (8.8.8.8) is unreachable, possibly due to routing or connectivity issues.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "The Ethernet frame’s Type field identifies the Network layer protocol.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The Type field (e.g., 0x0800 for IPv4, 0x86DD for IPv6) identifies the encapsulated Network layer protocol.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the maximum number of usable hosts in a subnet with mask 255.255.255.248?",
    options: ["6", "8", "14", "16"],
    correctAnswer: 0,
    explanation:
      "A /29 subnet (mask 255.255.255.248) has 2^(32-29) = 8 addresses, with 6 usable hosts (excluding network and broadcast).",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two protocols are used for VoIP signaling? (Choose two)",
    options: ["SIP", "RTP", "H.323", "ICMP", "FTP"],
    correctAnswer: [0, 2],
    explanation:
      "SIP (Session Initiation Protocol) and H.323 are used for VoIP signaling, establishing and managing calls.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which cable type is used to connect two switches with auto-MDIX disabled?",
    options: ["Straight-through", "Crossover", "Rollover", "Fiber"],
    correctAnswer: 1,
    explanation:
      "A crossover cable is required to connect two switches when auto-MDIX is disabled, as they are similar devices.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "IPv6 Stateless Address Autoconfiguration (SLAAC) requires a DHCP server.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. SLAAC allows hosts to configure their IPv6 addresses using router advertisements, without a DHCP server.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the TCP three-way handshake?",
    options: [
      "Error detection",
      "Establish a connection",
      "Address resolution",
      "Path selection",
    ],
    correctAnswer: 1,
    explanation:
      "The TCP three-way handshake (SYN, SYN-ACK, ACK) establishes a reliable connection between hosts.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two factors can cause high latency in a network? (Choose two)",
    options: [
      "Long cable lengths",
      "High bandwidth",
      "Queueing delays",
      "Large frame size",
      "Low jitter",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Long cable lengths increase propagation delay, and queueing delays occur when packets wait in router or switch buffers.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the broadcast address for the subnet 10.10.10.96/28?",
    options: ["10.10.10.103", "10.10.10.111", "10.10.10.127", "10.10.10.95"],
    correctAnswer: 1,
    explanation:
      "For a /28 subnet (increment 16), 10.10.10.96–10.10.10.111 is the range, with the broadcast address 10.10.10.111.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A switch forwards frames based on IP addresses.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. A switch forwards frames based on MAC addresses at Layer 2; routers use IP addresses at Layer 3.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol encapsulates user data in a VPN tunnel?",
    options: ["IPsec", "GRE", "PPPoE", "LACP"],
    correctAnswer: 1,
    explanation:
      "GRE (Generic Routing Encapsulation) encapsulates user data in a VPN tunnel, often used with IPsec for security.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two characteristics describe jumbo frames? (Choose two)",
    options: [
      "MTU up to 1500 bytes",
      "Reduced overhead",
      "Supported by 802.1Q",
      "Up to 9000 bytes",
      "Increased latency",
    ],
    correctAnswer: [1, 3],
    explanation:
      "Jumbo frames can be up to 9000 bytes and reduce overhead by carrying more data per frame.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the purpose of the IPv6 solicited-node multicast address?",
    options: [
      "Router discovery",
      "Duplicate address detection",
      "Global routing",
      "Broadcast replacement",
    ],
    correctAnswer: 1,
    explanation:
      "The solicited-node multicast address (FF02::1:FF00:0/104) is used for duplicate address detection and neighbor discovery in IPv6.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "The TCP MSS is negotiated during the three-way handshake.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The Maximum Segment Size (MSS) is negotiated in the TCP SYN packet during the three-way handshake.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which command displays the MTU size on a Cisco interface?",
    options: [
      "show interfaces",
      "show ip interface",
      "show running-config",
      "show mtu",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show interfaces' command displays the MTU size along with other interface details.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two protocols operate at the Transport layer? (Choose two)",
    options: ["TCP", "IP", "UDP", "ARP", "ICMP"],
    correctAnswer: [0, 2],
    explanation:
      "TCP and UDP are Transport layer protocols, providing reliable and unreliable data transfer, respectively.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the first usable IP in the subnet 192.168.50.0/29?",
    options: ["192.168.50.0", "192.168.50.1", "192.168.50.2", "192.168.50.7"],
    correctAnswer: 1,
    explanation:
      "For a /29 subnet (increment 8), the range is 192.168.50.0–192.168.50.7. The first usable IP is 192.168.50.1.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "All IPv6-enabled interfaces must have a link-local address.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPv6 requires every enabled interface to have a link-local address (FE80::/10) for local communication.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which feature allows a switch to prioritize VoIP traffic?",
    options: ["VLAN tagging", "QoS", "Port security", "EtherChannel"],
    correctAnswer: 1,
    explanation:
      "QoS (Quality of Service) prioritizes VoIP traffic by classifying and scheduling packets.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two issues can result from a duplex mismatch? (Choose two)",
    options: [
      "High latency",
      "Frame loss",
      "Broadcast storms",
      "CRC errors",
      "VLAN leaks",
    ],
    correctAnswer: [1, 3],
    explanation:
      "A duplex mismatch causes frame loss (due to collisions) and CRC errors (due to corrupted frames).",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the purpose of the IPv6 EUI-64 format?",
    options: [
      "Generate a global unicast address",
      "Create a link-local address",
      "Assign a multicast address",
      "Form an interface ID",
    ],
    correctAnswer: 3,
    explanation:
      "EUI-64 generates a 64-bit interface ID for IPv6 addresses by modifying a 48-bit MAC address.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "UDP retransmits lost packets to ensure reliability.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. UDP is connectionless and does not retransmit lost packets; TCP handles reliability.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which command verifies the ARP cache on a Cisco router?",
    options: [
      "show arp",
      "show ip arp",
      "show mac address-table",
      "show ip cache",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show ip arp' command displays the ARP cache, showing IP-to-MAC mappings.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question: "Which two characteristics describe CSMA/CD? (Choose two)",
    options: [
      "Used by Ethernet",
      "Prevents collisions",
      "Detects collisions",
      "Prioritizes traffic",
      "Full-duplex support",
    ],
    correctAnswer: [0, 2],
    explanation:
      "CSMA/CD (Carrier Sense Multiple Access with Collision Detection) is used by Ethernet to detect and manage collisions in half-duplex networks.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "What is the subnet mask for a /30 prefix?",
    options: [
      "255.255.255.0",
      "255.255.255.252",
      "255.255.255.248",
      "255.255.255.254",
    ],
    correctAnswer: 1,
    explanation:
      "A /30 prefix corresponds to a subnet mask of 255.255.255.252, providing 4 addresses (2 usable).",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question:
      "The Ethernet preamble is included in the frame size calculation.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The Ethernet preamble (7 bytes) and start frame delimiter (1 byte) are not included in the frame size calculation.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question: "Which protocol is used for network management and monitoring?",
    options: ["SNMP", "FTP", "DNS", "DHCP"],
    correctAnswer: 0,
    explanation:
      "SNMP (Simple Network Management Protocol) is used for network device monitoring and management.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two features are supported by 802.3 Ethernet standards? (Choose two)",
    options: [
      "Full-duplex operation",
      "Collision detection",
      "VLAN tagging",
      "Priority queuing",
      "Path selection",
    ],
    correctAnswer: [0, 1],
    explanation:
      "802.3 Ethernet supports full-duplex operation (no collisions) and collision detection (in half-duplex mode).",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the purpose of the IPv6 Neighbor Discovery Protocol (NDP)?",
    options: [
      "Assign IP addresses",
      "Resolve MAC addresses",
      "Route packets",
      "Encrypt traffic",
    ],
    correctAnswer: 1,
    explanation:
      "NDP resolves MAC addresses for IPv6 neighbors, replacing ARP, and supports router discovery.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "A Class B network with a default mask supports 65,534 hosts.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A Class B network (/16) has 2^16 = 65,536 addresses, with 65,534 usable hosts.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "Which command displays the duplex settings on a Cisco switch interface?",
    options: [
      "show interfaces",
      "show ip interface brief",
      "show running-config",
      "show interfaces status",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show interfaces' command displays duplex settings, speed, and other interface details.",
  },
  {
    category: "Network Fundamentals",
    type: "multiple",
    question:
      "Which two protocols are susceptible to broadcast storms? (Choose two)",
    options: ["ARP", "DHCP", "TCP", "UDP", "ICMP"],
    correctAnswer: [0, 1],
    explanation:
      "ARP and DHCP rely on broadcasts, which can contribute to broadcast storms if misconfigured or exploited.",
  },
  {
    category: "Network Fundamentals",
    type: "single",
    question:
      "What is the maximum transmission unit (MTU) for standard Ethernet frames?",
    options: ["128 bytes", "1500 bytes", "9000 bytes", "1518 bytes"],
    correctAnswer: 1,
    explanation:
      "The standard Ethernet MTU is 1500 bytes, excluding the frame header and trailer.",
  },
  {
    category: "Network Fundamentals",
    type: "truefalse",
    question: "The IPv6 loopback address is ::1/128.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The IPv6 loopback address is ::1 with a /128 prefix, equivalent to 127.0.0.1 in IPv4.",
  },

  // Network Access (40 new advanced questions)
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. A trunk link between two switches fails to pass VLAN 10 traffic. What is the issue?\n\nExhibit:\nSwitch1: switchport trunk allowed vlan 20,30\nSwitch2: switchport trunk allowed vlan 10,20",
    options: [
      "Mismatched native VLAN",
      "VLAN 10 not allowed",
      "DTP disabled",
      "Incorrect encapsulation",
    ],
    correctAnswer: 1,
    explanation:
      "Switch1’s trunk allows VLANs 20 and 30, but not 10, so VLAN 10 traffic is blocked.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "VTP version 2 supports private VLANs.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. VTP version 2 does not support private VLANs; VTP version 3 is required.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands resolve a port stuck in err-disabled state due to BPDU Guard? (Choose two)",
    options: [
      "shutdown",
      "no shutdown",
      "errdisable recovery cause bpduguard",
      "spanning-tree bpduguard disable",
      "clear errdisable",
    ],
    correctAnswer: [2, 1],
    explanation:
      "'errdisable recovery cause bpduguard' enables automatic recovery, and 'no shutdown' manually recovers the port.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command configures a switch port to use 802.1Q tagging with a non-default native VLAN?",
    options: [
      "switchport trunk encapsulation dot1q",
      "switchport trunk native vlan 99",
      "switchport mode trunk",
      "switchport vlan 99",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport trunk native vlan 99' command sets VLAN 99 as the native VLAN for untagged traffic.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "An EtherChannel in 'on' mode ignores LACP and PAgP negotiations.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. 'On' mode forces the EtherChannel to form without using LACP or PAgP.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. A switch port transitions to err-disabled. What is the cause?\n\nExhibit:\nswitchport port-security\nswitchport port-security maximum 2\nswitchport port-security violation shutdown",
    options: [
      "Too many MAC addresses",
      "BPDU received",
      "VLAN mismatch",
      "Duplex mismatch",
    ],
    correctAnswer: 0,
    explanation:
      "The port-security violation mode is 'shutdown,' and exceeding two MAC addresses triggers err-disabled state.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands configure a switch as a VTP server? (Choose two)",
    options: [
      "vtp mode server",
      "vtp domain MYDOMAIN",
      "vtp version 2",
      "vtp password MYPASS",
      "vtp pruning",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'vtp mode server' sets the switch to VTP server mode, and 'vtp domain MYDOMAIN' configures the VTP domain.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command verifies the PortFast status on a specific interface?",
    options: [
      "show spanning-tree interface",
      "show interfaces switchport",
      "show portfast",
      "show running-config",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show spanning-tree interface' command displays PortFast status for a specific interface.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "Root Guard prevents a port from becoming a root port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Root Guard prevents a port from becoming a root port if it receives superior BPDUs, protecting the root bridge.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command disables DTP on a switch port?",
    options: [
      "switchport mode trunk",
      "switchport nonegotiate",
      "switchport mode access",
      "switchport trunk encapsulation dot1q",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport nonegotiate' command disables DTP, preventing dynamic trunk negotiation.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two issues can prevent an EtherChannel from forming? (Choose two)",
    options: [
      "Mismatched duplex settings",
      "Different native VLANs",
      "Incompatible modes",
      "VLAN mismatch",
      "Port security enabled",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Mismatched duplex settings and incompatible EtherChannel modes (e.g., 'on' vs. LACP) prevent EtherChannel formation.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the effect of the 'spanning-tree vlan 10 root primary' command?",
    options: [
      "Sets the switch as the root for VLAN 10",
      "Enables PortFast for VLAN 10",
      "Disables STP for VLAN 10",
      "Sets the native VLAN to 10",
    ],
    correctAnswer: 0,
    explanation:
      "The 'spanning-tree vlan 10 root primary' command configures the switch as the root bridge for VLAN 10.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "A switch in VTP transparent mode forwards VTP advertisements.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A VTP transparent switch forwards VTP advertisements without processing them.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command enables 802.1X authentication for a specific VLAN?",
    options: [
      "authentication vlan 10",
      "dot1x vlan 10",
      "authentication port-control vlan 10",
      "dot1x system-auth-control",
    ],
    correctAnswer: 0,
    explanation:
      "The 'authentication vlan 10' command enables 802.1X authentication for VLAN 10.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands verify the native VLAN mismatch on a trunk? (Choose two)",
    options: [
      "show interfaces trunk",
      "show interfaces switchport",
      "show vlan brief",
      "show spanning-tree",
      "show vtp status",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show interfaces trunk' and 'show interfaces switchport' display the native VLAN, revealing mismatches.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the purpose of the 'spanning-tree portfast trunk' command?",
    options: [
      "Enable PortFast on access ports",
      "Enable PortFast on trunk ports",
      "Disable BPDU Guard",
      "Set the port as a root port",
    ],
    correctAnswer: 1,
    explanation:
      "The 'spanning-tree portfast trunk' command enables PortFast on trunk ports, speeding up convergence.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "LACP supports up to 16 links in an EtherChannel, with 8 active.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. LACP supports up to 16 links in an EtherChannel, with a maximum of 8 active and 8 in standby.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command configures a sticky MAC address for port security?",
    options: [
      "switchport port-security mac-address sticky",
      "switchport port-security mac-address 0000.1111.2222",
      "switchport port-security maximum 1",
      "switchport port-security sticky",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport port-security mac-address sticky' command enables sticky learning of MAC addresses.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure MST on a switch? (Choose two)",
    options: [
      "spanning-tree mode mst",
      "spanning-tree mst configuration",
      "spanning-tree vlan 10 root primary",
      "spanning-tree portfast",
      "vtp mode mst",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'spanning-tree mode mst' enables MST, and 'spanning-tree mst configuration' enters MST configuration mode.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. Why is VLAN 50 traffic not passing over the trunk?\n\nExhibit:\nswitchport mode trunk\nswitchport trunk allowed vlan 10-20",
    options: [
      "VLAN 50 not allowed",
      "Mismatched encapsulation",
      "DTP disabled",
      "Native VLAN mismatch",
    ],
    correctAnswer: 0,
    explanation: "The trunk allows VLANs 10–20, so VLAN 50 traffic is blocked.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "BPDU Filter disables STP on a port.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. BPDU Filter prevents a port from sending or receiving BPDUs, effectively disabling STP.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command sets the STP priority for VLAN 20 to 4096?",
    options: [
      "spanning-tree vlan 20 priority 4096",
      "spanning-tree vlan 20 root primary",
      "spanning-tree priority 4096",
      "spanning-tree vlan 20 cost 4096",
    ],
    correctAnswer: 0,
    explanation:
      "The 'spanning-tree vlan 20 priority 4096' command sets the STP priority for VLAN 20.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands prevent VLAN hopping? (Choose two)",
    options: [
      "switchport mode access",
      "switchport trunk native vlan 999",
      "switchport nonegotiate",
      "switchport port-security",
      "vtp pruning",
    ],
    correctAnswer: [1, 2],
    explanation:
      "'switchport trunk native vlan 999' sets an unused native VLAN, and 'switchport nonegotiate' disables DTP to prevent VLAN hopping.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the effect of the 'errdisable recovery interval 300' command?",
    options: [
      "Disables err-disabled recovery",
      "Sets recovery timer to 300 seconds",
      "Enables BPDU Guard",
      "Clears err-disabled ports",
    ],
    correctAnswer: 1,
    explanation:
      "The 'errdisable recovery interval 300' command sets the recovery timer for err-disabled ports to 300 seconds.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "A switch port in 'dynamic auto' mode forms a trunk with a 'dynamic desirable' neighbor.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. A 'dynamic auto' port forms a trunk when paired with a 'dynamic desirable' neighbor, which initiates trunking.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command displays the EtherChannel load-balancing method?",
    options: [
      "show etherchannel load-balance",
      "show etherchannel summary",
      "show port-channel load-balance",
      "show interfaces port-channel",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show etherchannel load-balance' command displays the load-balancing method (e.g., src-mac, dst-ip).",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure a private VLAN? (Choose two)",
    options: [
      "vlan 100 private-vlan community",
      "vlan 50 private-vlan isolated",
      "switchport mode private-vlan host",
      "vtp mode private-vlan",
      "spanning-tree private-vlan",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'vlan 100 private-vlan community' configures a community private VLAN, and 'switchport mode private-vlan host' sets the port mode.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the purpose of the 'spanning-tree loopguard default' command?",
    options: [
      "Prevents loops on access ports",
      "Protects against unidirectional link failures",
      "Enables PortFast globally",
      "Disables BPDU Guard",
    ],
    correctAnswer: 1,
    explanation:
      "Loop Guard protects against unidirectional link failures by placing ports in a loop-inconsistent state if BPDUs stop.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question: "VTP version 3 requires a password for secure operation.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VTP version 3 supports a password for secure VLAN propagation.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command enables UplinkFast on a Cisco switch?",
    options: [
      "spanning-tree uplinkfast",
      "spanning-tree portfast",
      "spanning-tree backbonefast",
      "spanning-tree uplink enable",
    ],
    correctAnswer: 0,
    explanation:
      "The 'spanning-tree uplinkfast' command enables UplinkFast for faster convergence on uplink failures.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question:
      "Which two commands verify private VLAN configurations? (Choose two)",
    options: [
      "show vlan private-vlan",
      "show interfaces switchport",
      "show vlan brief",
      "show vtp status",
      "show running-config",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show vlan private-vlan' displays private VLAN details, and 'show interfaces switchport' shows port associations.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Refer to the exhibit. Why does the EtherChannel fail to form?\n\nExhibit:\nSwitch1: channel-group 1 mode active\nSwitch2: channel-group 1 mode on",
    options: [
      "Mismatched modes",
      "Different VLANs",
      "Port security enabled",
      "Native VLAN mismatch",
    ],
    correctAnswer: 0,
    explanation:
      "The EtherChannel fails because Switch1 uses LACP (active) while Switch2 uses 'on' mode, which does not negotiate.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "The 'show spanning-tree blockedports' command displays all non-forwarding ports.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'show spanning-tree blockedports' command lists all ports in blocking or alternate states.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "Which command sets the EtherChannel load-balancing to source and destination IP?",
    options: [
      "port-channel load-balance src-dst-ip",
      "port-channel load-balance src-ip",
      "etherchannel load-balance src-dst-ip",
      "port-channel load-balance ip",
    ],
    correctAnswer: 0,
    explanation:
      "The 'port-channel load-balance src-dst-ip' command sets load balancing based on source and destination IP addresses.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two features improve STP scalability? (Choose two)",
    options: ["MST", "PVST+", "BPDU Filter", "BackboneFast", "VTP pruning"],
    correctAnswer: [0, 3],
    explanation:
      "MST (Multiple Spanning Tree) groups VLANs for scalability, and BackboneFast speeds up convergence for indirect link failures.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "What is the purpose of the 'switchport protected' command?",
    options: [
      "Enable port security",
      "Restrict communication within a VLAN",
      "Disable DTP",
      "Enable 802.1X",
    ],
    correctAnswer: 1,
    explanation:
      "The 'switchport protected' command restricts communication between protected ports within the same VLAN.",
  },
  {
    category: "Network Access",
    type: "truefalse",
    question:
      "A PortFast-enabled port bypasses the Listening and Learning states.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. PortFast allows a port to transition directly to Forwarding, bypassing Listening and Learning.",
  },
  {
    category: "Network Access",
    type: "single",
    question: "Which command displays the VTP pruning status?",
    options: [
      "show vtp status",
      "show vlan brief",
      "show interfaces trunk",
      "show vtp pruning",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show vtp status' command displays whether VTP pruning is enabled.",
  },
  {
    category: "Network Access",
    type: "multiple",
    question: "Which two commands configure a voice VLAN? (Choose two)",
    options: [
      "switchport voice vlan 100",
      "switchport access vlan 100",
      "switchport mode access",
      "switchport voice vlan dot1p",
      "switchport trunk allowed vlan 100",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'switchport voice vlan 100' assigns VLAN 100 for voice, and 'switchport voice vlan dot1p' uses priority tagging.",
  },
  {
    category: "Network Access",
    type: "single",
    question:
      "What is the effect of the 'spanning-tree vlan 10 cost 10' command on an interface?",
    options: [
      "Sets the port priority",
      "Sets the path cost for VLAN 10",
      "Enables PortFast",
      "Disables STP",
    ],
    correctAnswer: 1,
    explanation:
      "The 'spanning-tree vlan 10 cost 10' command sets the path cost for VLAN 10 on the interface.",
  },

  // IP Connectivity (50 new advanced questions)
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Refer to the exhibit. OSPF neighbors fail to form an adjacency. What is the issue?\n\nExhibit:\ninterface Gi0/0\n ip address 192.168.1.1 255.255.255.0\n ip ospf 1 area 0\n ip ospf network point-to-point",
    options: [
      "Mismatched area IDs",
      "Incorrect network type",
      "MTU mismatch",
      "Authentication enabled",
    ],
    correctAnswer: 2,
    explanation:
      "An MTU mismatch prevents OSPF adjacency, as OSPF requires matching MTU sizes on neighboring interfaces.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "EIGRP supports authentication using MD5 or SHA.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. EIGRP supports MD5 and, in newer IOS versions, SHA authentication for secure updates.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure OSPF authentication? (Choose two)",
    options: [
      "ip ospf authentication message-digest",
      "ip ospf message-digest-key 1 md5 MYKEY",
      "ospf authentication enable",
      "ip ospf authentication-key MYKEY",
      "router ospf 1 authentication",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip ospf authentication message-digest' enables MD5 authentication, and 'ip ospf message-digest-key 1 md5 MYKEY' sets the key.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the network address for the IP 10.20.30.40/27?",
    options: ["10.20.30.0", "10.20.30.32", "10.20.30.40", "10.20.30.64"],
    correctAnswer: 1,
    explanation:
      "For a /27 subnet (increment 32), 10.20.30.40 is in 10.20.30.32–10.20.30.63, with the network address 10.20.30.32.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "HSRP preemption is enabled by default.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. HSRP preemption must be explicitly enabled with the 'standby preempt' command.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which command configures a floating static route with an administrative distance of 200?",
    options: [
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1 200",
      "ip route 0.0.0.0 0.0.0.0 192.168.1.1",
      "ip route 0.0.0.0 192.168.1.1 200",
      "ip route 0.0.0.0 255.255.255.255 192.168.1.1",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip route 0.0.0.0 0.0.0.0 192.168.1.1 200' command sets a default route with an AD of 200.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands verify EIGRP authentication? (Choose two)",
    options: [
      "show ip eigrp interfaces",
      "show running-config",
      "show ip eigrp neighbors",
      "show key chain",
      "show ip eigrp topology",
    ],
    correctAnswer: [1, 3],
    explanation:
      "'show running-config' displays authentication settings, and 'show key chain' shows the key chain used for EIGRP authentication.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Refer to the exhibit. Why does the default route fail to appear in the routing table?\n\nExhibit:\nip route 0.0.0.0 0.0.0.0 192.168.1.1\nno ip routing",
    options: [
      "Invalid next-hop IP",
      "Routing disabled",
      "ACL blocking traffic",
      "OSPF misconfigured",
    ],
    correctAnswer: 1,
    explanation:
      "The 'no ip routing' command disables IP routing, preventing the static route from being used.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "OSPF virtual links can connect two non-backbone areas.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. OSPF virtual links can connect a non-backbone area to the backbone through another area.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command enables EIGRP on a specific interface?",
    options: [
      "ip eigrp 100 enable",
      "network 192.168.1.0 0.0.0.255",
      "ip eigrp 100 area 0",
      "ip hello-interval eigrp 100 5",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip eigrp 100 enable' command enables EIGRP directly on an interface for AS 100.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure VRRP with preemption? (Choose two)",
    options: [
      "vrrp 1 ip 192.168.1.254",
      "vrrp 1 preempt",
      "vrrp 1 priority 150",
      "vrrp 1 authentication MYKEY",
      "vrrp 1 track 1",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'vrrp 1 ip 192.168.1.254' sets the virtual IP, and 'vrrp 1 preempt' enables preemption.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the default OSPF cost for a 1 Gbps interface?",
    options: ["1", "10", "100", "1000"],
    correctAnswer: 0,
    explanation:
      "The default OSPF cost is 1 for a 1 Gbps interface, based on the formula: cost = reference bandwidth / interface bandwidth.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "GLBP uses a single virtual MAC address for all routers.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. GLBP uses multiple virtual MAC addresses for load balancing across routers.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the OSPF link-state database?",
    options: [
      "show ip ospf database",
      "show ip ospf neighbor",
      "show ip ospf interface",
      "show ip route ospf",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show ip ospf database' command displays the OSPF link-state database, showing LSAs.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two issues can prevent OSPF adjacency? (Choose two)",
    options: [
      "Mismatched hello timers",
      "Different network types",
      "VLAN mismatch",
      "Duplicate router IDs",
      "Port security enabled",
    ],
    correctAnswer: [0, 3],
    explanation:
      "Mismatched hello timers and duplicate router IDs prevent OSPF adjacency formation.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the broadcast address for the subnet 172.16.20.0/25?",
    options: [
      "172.16.20.127",
      "172.16.20.255",
      "172.16.20.128",
      "172.16.20.126",
    ],
    correctAnswer: 0,
    explanation:
      "For a /25 subnet (increment 128), the range is 172.16.20.0–172.16.20.127, with the broadcast address 172.16.20.127.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "EIGRP variance allows load balancing over equal-cost paths only.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. EIGRP variance allows load balancing over unequal-cost paths, based on the variance value.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command configures OSPF to summarize routes?",
    options: [
      "area 0 range 192.168.0.0 255.255.0.0",
      "summary-address 192.168.0.0 255.255.0.0",
      "ip ospf summary 192.168.0.0",
      "network 192.168.0.0 0.0.255.255 area 0",
    ],
    correctAnswer: 0,
    explanation:
      "The 'area 0 range 192.168.0.0 255.255.0.0' command summarizes routes for area 0.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure HSRP with tracking? (Choose two)",
    options: [
      "standby 1 ip 192.168.1.254",
      "standby 1 track 1 decrement 10",
      "standby 1 priority 150",
      "standby 1 preempt",
      "track 1 interface Gi0/0 line-protocol",
    ],
    correctAnswer: [1, 4],
    explanation:
      "'standby 1 track 1 decrement 10' configures tracking, and 'track 1 interface Gi0/0 line-protocol' defines the tracked object.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Refer to the exhibit. Why is the EIGRP neighbor adjacency flapping?\n\nExhibit:\ninterface Gi0/0\n ip address 192.168.1.1 255.255.255.0\n ip hello-interval eigrp 100 5\n ip hold-time eigrp 100 10",
    options: [
      "Mismatched timers",
      "Authentication mismatch",
      "MTU mismatch",
      "Incorrect AS number",
    ],
    correctAnswer: 0,
    explanation:
      "The hold-time (10s) is too short compared to the hello-interval (5s), causing the neighbor to time out.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "RIP version 2 supports VLSM.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RIPv2 supports Variable Length Subnet Masking (VLSM) by including subnet masks in updates.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command enables IPv6 routing on a Cisco router?",
    options: [
      "ipv6 unicast-routing",
      "ipv6 enable",
      "ipv6 router ospf 1",
      "ipv6 address 2001:db8::1/64",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ipv6 unicast-routing' command enables IPv6 routing on a Cisco router.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure OSPF stub area? (Choose two)",
    options: [
      "area 1 stub",
      "area 1 stub no-summary",
      "router ospf 1",
      "area 1 default-cost 10",
      "network 192.168.1.0 0.0.0.255 area 1",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'area 1 stub' configures a stub area, and 'area 1 stub no-summary' configures a totally stubby area.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the administrative distance of an OSPF external route?",
    options: ["90", "110", "120", "170"],
    correctAnswer: 1,
    explanation:
      "OSPF external routes have an administrative distance of 110, same as OSPF internal routes.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question:
      "The 'show ip ospf database' command displays neighbor information.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'show ip ospf database' displays LSAs; use 'show ip ospf neighbor' for neighbor details.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which command configures a static route to exit via an interface?",
    options: [
      "ip route 10.0.0.0 255.255.255.0 Gi0/0",
      "ip route 10.0.0.0 255.255.255.0 192.168.1.1",
      "ip route 10.0.0.0 Gi0/0",
      "ip route 10.0.0.0 255.255.255.255 Gi0/0",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip route 10.0.0.0 255.255.255.0 Gi0/0' command specifies an exit interface.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands verify RIP configuration? (Choose two)",
    options: [
      "show ip rip database",
      "show ip protocols",
      "show ip route rip",
      "show running-config",
      "show ip rip neighbors",
    ],
    correctAnswer: [1, 3],
    explanation:
      "'show ip protocols' displays RIP settings, and 'show running-config' shows the RIP configuration.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the purpose of the 'ip ospf cost 50' command?",
    options: [
      "Set the interface priority",
      "Set the path cost",
      "Enable authentication",
      "Adjust hello timers",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip ospf cost 50' command sets the OSPF path cost for the interface.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "VRRP uses multicast address 224.0.0.18 for communication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. VRRP uses multicast address 224.0.0.18 for sending advertisements.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Refer to the exhibit. Why is the static route not installed?\n\nExhibit:\nip route 172.16.0.0 255.255.0.0 192.168.1.1\ninterface Gi0/0\n ip address 192.168.2.1 255.255.255.0",
    options: [
      "Invalid subnet mask",
      "Next-hop unreachable",
      "Interface down",
      "OSPF conflict",
    ],
    correctAnswer: 1,
    explanation:
      "The next-hop IP (192.168.1.1) is not in the same subnet as Gi0/0 (192.168.2.0/24), making it unreachable.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure EIGRP stub routing? (Choose two)",
    options: [
      "eigrp stub",
      "router eigrp 100",
      "eigrp stub connected summary",
      "network 192.168.1.0",
      "eigrp stub receive-only",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'eigrp stub' enables stub routing, and 'eigrp stub connected summary' specifies advertised routes.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the usable host range for the subnet 192.168.100.0/26?",
    options: [
      "192.168.100.1–192.168.100.62",
      "192.168.100.0–192.168.100.63",
      "192.168.100.1–192.168.100.63",
      "192.168.100.0–192.168.100.62",
    ],
    correctAnswer: 0,
    explanation:
      "For a /26 subnet (increment 64), the range is 192.168.100.0–192.168.100.63, with usable hosts 192.168.100.1–192.168.100.62.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "OSPF supports load balancing over equal-cost paths by default.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. OSPF automatically load balances over equal-cost paths without additional configuration.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command configures OSPF passive interface?",
    options: [
      "passive-interface Gi0/0",
      "ip ospf passive",
      "no ip ospf active",
      "passive-interface default",
    ],
    correctAnswer: 0,
    explanation:
      "The 'passive-interface Gi0/0' command prevents OSPF from sending hello packets on the interface.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure IPv6 static routing? (Choose two)",
    options: [
      "ipv6 route 2001:db8::/64 2001:db8:1::1",
      "ipv6 unicast-routing",
      "ipv6 route 2001:db8::/64 Gi0/0",
      "ipv6 address 2001:db8::1/64",
      "ipv6 route ::/0 2001:db8:1::1",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'ipv6 route 2001:db8::/64 2001:db8:1::1' and 'ipv6 route 2001:db8::/64 Gi0/0' configure IPv6 static routes.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the default EIGRP metric formula components?",
    options: [
      "Bandwidth, Delay",
      "Bandwidth, Load",
      "Delay, Reliability",
      "MTU, Hop count",
    ],
    correctAnswer: 0,
    explanation:
      "EIGRP’s default metric uses Bandwidth and Delay; other factors like Load and Reliability are optional.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "The 'show ip route' command displays only dynamic routes.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'show ip route' displays all routes, including static, connected, and dynamic.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question:
      "Which command configures HSRP with a virtual IP of 192.168.1.254?",
    options: [
      "standby 1 ip 192.168.1.254",
      "vrrp 1 ip 192.168.1.254",
      "glbp 1 ip 192.168.1.254",
      "standby ip 192.168.1.254",
    ],
    correctAnswer: 0,
    explanation:
      "The 'standby 1 ip 192.168.1.254' command configures HSRP group 1 with the virtual IP 192.168.1.254.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question:
      "Which two commands troubleshoot OSPF adjacency issues? (Choose two)",
    options: [
      "debug ip ospf adj",
      "debug ip ospf hello",
      "show ip ospf neighbor",
      "show ip route ospf",
      "show ip ospf database",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'debug ip ospf adj' shows adjacency events, and 'debug ip ospf hello' displays hello packet issues.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the purpose of the 'ip ospf priority 0' command?",
    options: [
      "Disable OSPF",
      "Prevent DR election",
      "Set path cost",
      "Enable authentication",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip ospf priority 0' command prevents an interface from becoming the Designated Router.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "EIGRP uses DUAL for loop-free routing.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. EIGRP uses the Diffusing Update Algorithm (DUAL) to ensure loop-free routing.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "Which command displays the HSRP virtual MAC address?",
    options: ["show standby", "show vrrp", "show glbp", "show ip interface"],
    correctAnswer: 0,
    explanation:
      "The 'show standby' command displays the HSRP virtual MAC address and group details.",
  },
  {
    category: "IP Connectivity",
    type: "multiple",
    question: "Which two commands configure OSPF virtual links? (Choose two)",
    options: [
      "area 1 virtual-link 2.2.2.2",
      "router ospf 1",
      "virtual-link area 1",
      "area 1 stub",
      "area 1 virtual-link router-id 2.2.2.2",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'router ospf 1' enters OSPF configuration, and 'area 1 virtual-link 2.2.2.2' configures a virtual link.",
  },
  {
    category: "IP Connectivity",
    type: "single",
    question: "What is the first usable IP in the subnet 192.168.1.0/30?",
    options: ["192.168.1.0", "192.168.1.1", "192.168.1.2", "192.168.1.3"],
    correctAnswer: 1,
    explanation:
      "For a /30 subnet (increment 4), the range is 192.168.1.0–192.168.1.3. The first usable IP is 192.168.1.1.",
  },
  {
    category: "IP Connectivity",
    type: "truefalse",
    question: "The 'ip route-cache' command enables fast switching by default.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'ip route-cache' command enables fast switching for improved routing performance.",
  },

  // IP Services (20 new advanced questions)
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why are clients not receiving DHCP addresses?\n\nExhibit:\nip dhcp pool MYPOOL\n network 192.168.1.0 255.255.255.0\n default-router 192.168.1.1\ninterface Gi0/0\n ip address 192.168.2.1 255.255.255.0",
    options: [
      "Pool misconfigured",
      "DHCP relay missing",
      "Interface down",
      "ACL blocking DHCP",
    ],
    correctAnswer: 1,
    explanation:
      "The DHCP pool is for 192.168.1.0/24, but the interface is in 192.168.2.0/24, requiring a DHCP relay ('ip helper-address').",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "NTP authentication requires matching keys on client and server.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NTP authentication requires matching keys and key IDs for secure time synchronization.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure PAT with overload? (Choose two)",
    options: [
      "ip nat inside source list 1 interface Gi0/0 overload",
      "access-list 1 permit 192.168.1.0 0.0.0.255",
      "ip nat pool MYPOOL 209.165.200.1 209.165.200.10",
      "ip nat inside",
      "ip nat outside",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip nat inside source list 1 interface Gi0/0 overload' enables PAT, and 'access-list 1 ...' defines the private IPs.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command configures SNMPv3 with authentication and encryption?",
    options: [
      "snmp-server group MYGROUP v3 auth",
      "snmp-server group MYGROUP v3 priv",
      "snmp-server user MYUSER v3 auth",
      "snmp-server host 192.168.1.100 v3",
    ],
    correctAnswer: 1,
    explanation:
      "The 'snmp-server group MYGROUP v3 priv' command configures SNMPv3 with both authentication and encryption.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "Syslog messages are sent to the logging host only if a logging trap level is set.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'logging trap' command specifies the severity level for syslog messages sent to the logging host.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command sets the DHCP lease to 2 days?",
    options: ["lease 2", "lease 0 48 0", "lease 2 0 0", "ip dhcp lease 2"],
    correctAnswer: 0,
    explanation:
      "The 'lease 2' command sets the DHCP lease duration to 2 days.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure NTP authentication? (Choose two)",
    options: [
      "ntp authenticate",
      "ntp authentication-key 1 md5 MYKEY",
      "ntp server 192.168.1.100",
      "ntp trusted-key 1",
      "ntp master",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ntp authenticate' enables authentication, and 'ntp authentication-key 1 md5 MYKEY' defines the key.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why is NAT not translating addresses?\n\nExhibit:\nip nat inside source list 1 interface Gi0/0 overload\naccess-list 1 permit 192.168.1.0 0.0.0.255\ninterface Gi0/0\n ip nat outside",
    options: [
      "Missing 'ip nat inside'",
      "Incorrect ACL",
      "Interface down",
      "Overload not supported",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip nat inside' command is missing on the internal interface, preventing NAT translation.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'ip helper-address' command forwards UDP broadcasts for multiple protocols.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'ip helper-address' command forwards UDP broadcasts for protocols like DHCP, TFTP, and DNS.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command displays the SNMP community strings?",
    options: [
      "show snmp",
      "show snmp community",
      "show running-config",
      "show snmp group",
    ],
    correctAnswer: 2,
    explanation:
      "The 'show running-config' command displays SNMP community strings in the configuration.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure a static NAT mapping? (Choose two)",
    options: [
      "ip nat inside source static 192.168.1.10 209.165.200.10",
      "ip nat inside",
      "ip nat outside",
      "access-list 1 permit 192.168.1.10",
      "ip nat pool MYPOOL 209.165.200.10",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip nat inside source static 192.168.1.10 209.165.200.10' maps the IPs, and 'ip nat inside' marks the internal interface.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the default syslog facility on a Cisco device?",
    options: ["local0", "local7", "local5", "local3"],
    correctAnswer: 1,
    explanation: "The default syslog facility on Cisco devices is local7.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "SNMPv3 supports authentication without encryption.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SNMPv3 supports 'authNoPriv' mode, providing authentication without encryption.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures the router as an NTP client?",
    options: [
      "ntp server 192.168.1.100",
      "ntp master",
      "ntp peer 192.168.1.100",
      "ntp client 192.168.1.100",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ntp server 192.168.1.100' command configures the router as an NTP client synchronizing with the specified server.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands verify DHCP server operation? (Choose two)",
    options: [
      "show ip dhcp binding",
      "show ip dhcp pool",
      "show ip dhcp server",
      "show running-config",
      "show ip dhcp conflict",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show ip dhcp binding' displays assigned IPs, and 'show ip dhcp pool' shows pool details.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'logging synchronous' command?",
    options: [
      "Enable syslog server",
      "Prevent console interruptions",
      "Set logging severity",
      "Clear logs",
    ],
    correctAnswer: 1,
    explanation:
      "The 'logging synchronous' command prevents log messages from interrupting console input.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'ip dhcp excluded-address' command reserves IP addresses for static assignment.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'ip dhcp excluded-address' command excludes IPs from the DHCP pool for static use.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures a syslog severity level of 4?",
    options: [
      "logging trap 4",
      "logging level 4",
      "logging severity 4",
      "logging host 192.168.1.100 level 4",
    ],
    correctAnswer: 0,
    explanation:
      "The 'logging trap 4' command sets the syslog severity level to 4 (warning).",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure SNMP traps? (Choose two)",
    options: [
      "snmp-server host 192.168.1.100 traps MYCOMMUNITY",
      "snmp-server enable traps",
      "snmp-server community MYCOMMUNITY",
      "snmp-server group MYGROUP v3",
      "snmp-server user MYUSER",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'snmp-server host 192.168.1.100 traps MYCOMMUNITY' specifies the trap destination, and 'snmp-server enable traps' enables trap generation.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'ip dhcp pool' command?",
    options: [
      "Enable DHCP relay",
      "Configure DHCP server",
      "Exclude IP addresses",
      "Set DHCP client",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip dhcp pool' command configures a DHCP pool on a router acting as a DHCP server.",
  },

  // Security Fundamentals (30 new advanced questions)
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why are SSH connections failing?\n\nExhibit:\nline vty 0 4\n transport input telnet\n access-class 10 in\naccess-list 10 permit 192.168.1.0 0.0.0.255",
    options: [
      "SSH disabled",
      "ACL blocking SSH",
      "No crypto key",
      "VTY lines full",
    ],
    correctAnswer: 0,
    explanation:
      "The 'transport input telnet' command allows only Telnet, disabling SSH on the VTY lines.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "DHCP snooping requires trusted ports to be configured.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DHCP snooping requires trusted ports (e.g., for the DHCP server) to allow legitimate DHCP messages.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure 802.1X with RADIUS? (Choose two)",
    options: [
      "aaa authentication dot1x default group radius",
      "radius-server host 192.168.1.100",
      "dot1x system-auth-control",
      "authentication port-control auto",
      "aaa new-model",
    ],
    correctAnswer: [0, 4],
    explanation:
      "'aaa authentication dot1x default group radius' configures 802.1X with RADIUS, and 'aaa new-model' enables AAA.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command restricts Telnet access to a specific IP?",
    options: [
      "access-class 10 in",
      "ip access-group 10 in",
      "access-list 10 permit 192.168.1.1",
      "line vty 0 4 access 10",
    ],
    correctAnswer: 0,
    explanation:
      "The 'access-class 10 in' command applies an ACL to VTY lines, restricting Telnet access.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "Dynamic ARP Inspection validates ARP packets using DHCP snooping bindings.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DAI uses DHCP snooping bindings to validate ARP packets, preventing ARP spoofing.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why are SSH connections to the router failing?\n\nExhibit:\nline vty 0 4\n transport input ssh\n access-class 10 in\naccess-list 10 permit 192.168.2.0 0.0.0.255\ninterface Gi0/0\n ip address 192.168.1.1 255.255.255.0",
    options: [
      "No crypto key generated",
      "ACL blocking SSH",
      "VTY lines disabled",
      "SSH version mismatch",
    ],
    correctAnswer: 1,
    explanation:
      "The ACL 10 permits only 192.168.2.0/24, but the interface is in 192.168.1.0/24, blocking SSH from the connected subnet.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "Port security can be configured to allow only dynamically learned MAC addresses.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Port security with 'switchport port-security mac-address sticky' allows only dynamically learned MAC addresses to be stored.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands enable 802.1X authentication with a RADIUS server? (Choose two)",
    options: [
      "aaa new-model",
      "aaa authentication dot1x default group radius",
      "dot1x system-auth-control",
      "radius-server host 192.168.1.100 key MYKEY",
      "authentication port-control auto",
    ],
    correctAnswer: [1, 2],
    explanation:
      "'aaa authentication dot1x default group radius' configures 802.1X to use RADIUS, and 'dot1x system-auth-control' enables 802.1X globally.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command configures a switch port to restrict traffic to a single MAC address?",
    options: [
      "switchport port-security maximum 1",
      "switchport port-security mac-address 0000.1111.2222",
      "switchport port-security violation restrict",
      "switchport mode access",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport port-security maximum 1' command limits the port to one MAC address.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "DHCP snooping prevents rogue DHCP servers by blocking untrusted ports.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DHCP snooping blocks DHCP server messages from untrusted ports to prevent rogue DHCP servers.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why is Telnet access denied from 192.168.1.100?\n\nExhibit:\nline vty 0 4\n access-class 20 in\naccess-list 20 permit 192.168.1.0 0.0.0.255 deny any",
    options: [
      "Incorrect ACL syntax",
      "Implicit deny",
      "VTY lines disabled",
      "Telnet not enabled",
    ],
    correctAnswer: 1,
    explanation:
      "The ACL has an explicit 'deny any,' which blocks 192.168.1.100 despite the permit statement, due to incorrect order or logic.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure a standard ACL to allow traffic from 192.168.1.0/24? (Choose two)",
    options: [
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "ip access-list standard MYACL",
      "access-list 10 deny any",
      "permit 192.168.1.0 0.0.0.255",
      "ip access-group 10 in",
    ],
    correctAnswer: [0, 4],
    explanation:
      "'access-list 10 permit 192.168.1.0 0.0.0.255' defines the rule, and 'ip access-group 10 in' applies it to an interface.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'crypto key generate rsa' command?",
    options: [
      "Enable Telnet",
      "Generate SSH keys",
      "Encrypt passwords",
      "Configure VPN",
    ],
    correctAnswer: 1,
    explanation:
      "The 'crypto key generate rsa' command generates RSA keys for SSH, enabling secure remote access.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "Dynamic ARP Inspection (DAI) requires IP Source Guard to function.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. DAI can function independently using DHCP snooping bindings, though IP Source Guard enhances security.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables AAA authentication for console access?",
    options: [
      "aaa authentication login default local",
      "aaa authentication login console local",
      "line console 0 login local",
      "aaa new-model",
    ],
    correctAnswer: 1,
    explanation:
      "The 'aaa authentication login console local' command enables AAA authentication for console access using the local database.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two features mitigate VLAN hopping attacks? (Choose two)",
    options: [
      "Disable DTP",
      "Enable BPDU Guard",
      "Set unused native VLAN",
      "Enable port security",
      "Configure VTP pruning",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Disabling DTP ('switchport nonegotiate') and setting an unused native VLAN ('switchport trunk native vlan 999') prevent VLAN hopping.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why is port security not enforcing the MAC address limit?\n\nExhibit:\ninterface Gi0/1\n switchport mode access\n switchport port-security maximum 2",
    options: [
      "Port security not enabled",
      "Missing violation mode",
      "Trunk mode enabled",
      "Sticky MAC not configured",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport port-security' command is missing, so port security is not enabled on the interface.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "The 'service password-encryption' command uses AES encryption.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'service password-encryption' command uses a weak Type 7 encryption, not AES.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command configures a switch to use a RADIUS server for 802.1X?",
    options: [
      "radius-server host 192.168.1.100 key MYKEY",
      "aaa authentication dot1x default radius",
      "dot1x radius-server 192.168.1.100",
      "aaa radius enable",
    ],
    correctAnswer: 0,
    explanation:
      "The 'radius-server host 192.168.1.100 key MYKEY' command configures the RADIUS server for 802.1X authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure DHCP snooping for VLAN 10? (Choose two)",
    options: [
      "ip dhcp snooping",
      "ip dhcp snooping vlan 10",
      "ip dhcp snooping trust",
      "switchport mode access",
      "ip dhcp relay",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip dhcp snooping' enables DHCP snooping globally, and 'ip dhcp snooping vlan 10' enables it for VLAN 10.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'ip verify source' command?",
    options: [
      "Enable DHCP snooping",
      "Enable IP Source Guard",
      "Configure DAI",
      "Restrict MAC addresses",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip verify source' command enables IP Source Guard to prevent IP spoofing by validating source IP addresses.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "TACACS+ encrypts the entire packet, unlike RADIUS.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. TACACS+ encrypts the entire packet, while RADIUS encrypts only the password.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command sets the port security violation mode to drop packets without shutting down?",
    options: [
      "switchport port-security violation restrict",
      "switchport port-security violation shutdown",
      "switchport port-security violation protect",
      "switchport port-security drop",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport port-security violation restrict' command drops packets from unauthorized MACs without shutting down the port.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands verify port security violations? (Choose two)",
    options: [
      "show port-security",
      "show port-security interface Gi0/1",
      "show interfaces status",
      "show running-config",
      "show vlan brief",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show port-security' displays all port security settings, and 'show port-security interface Gi0/1' shows violations for a specific port.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why is 802.1X authentication failing?\n\nExhibit:\ninterface Gi0/1\n authentication port-control auto\n dot1x pae authenticator\naaa new-model\nradius-server host 192.168.1.100 key MYKEY",
    options: [
      "Missing AAA authentication",
      "RADIUS server unreachable",
      "Port not in access mode",
      "802.1X not enabled",
    ],
    correctAnswer: 0,
    explanation:
      "The 'aaa authentication dot1x default group radius' command is missing, preventing 802.1X authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'enable secret' command supports stronger encryption than 'enable password'.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. 'enable secret' uses MD5 hashing, stronger than the weak encryption of 'enable password'.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which protocol is used by IPsec for key exchange?",
    options: ["IKE", "ESP", "AH", "GRE"],
    correctAnswer: 0,
    explanation:
      "IKE (Internet Key Exchange) is used by IPsec for key exchange and tunnel negotiation.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure a named ACL to deny HTTP traffic? (Choose two)",
    options: [
      "ip access-list extended MYACL",
      "deny tcp any any eq 80",
      "access-list 100 deny tcp any any eq 80",
      "ip access-group MYACL in",
      "permit ip any any",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip access-list extended MYACL' creates a named ACL, and 'deny tcp any any eq 80' denies HTTP traffic.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'login local' command on VTY lines?",
    options: [
      "Enable Telnet",
      "Use local database for authentication",
      "Disable remote access",
      "Encrypt passwords",
    ],
    correctAnswer: 1,
    explanation:
      "The 'login local' command configures VTY lines to use the local username/password database for authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "Dynamic ARP Inspection can be enabled on trunk ports.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. DAI can be enabled on trunk ports to validate ARP packets in multiple VLANs.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command enables automatic recovery for err-disabled ports due to port security?",
    options: [
      "errdisable recovery cause psecure-violation",
      "errdisable recovery interval 300",
      "switchport port-security recovery",
      "port-security recovery enable",
    ],
    correctAnswer: 0,
    explanation:
      "The 'errdisable recovery cause psecure-violation' command enables automatic recovery for port security violations.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two protocols are used for AAA services? (Choose two)",
    options: ["RADIUS", "TACACS+", "SNMP", "LDAP", "Kerberos"],
    correctAnswer: [0, 1],
    explanation:
      "RADIUS and TACACS+ are used for AAA (Authentication, Authorization, Accounting) services in network devices.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why is traffic from 192.168.1.100 allowed despite the ACL?\n\nExhibit:\ninterface Gi0/0\n ip access-group 10 in\naccess-list 10 deny 192.168.1.100 0.0.0.0\naccess-list 10 permit any",
    options: [
      "ACL applied in wrong direction",
      "Incorrect wildcard mask",
      "Implicit permit",
      "ACL not activated",
    ],
    correctAnswer: 0,
    explanation:
      "The ACL is applied 'in' on Gi0/0, affecting incoming traffic, but 192.168.1.100 may be on the outbound side, bypassing the ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'crypto isakmp policy' command is used to configure IPsec VPNs.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'crypto isakmp policy' command defines the IKE policy for IPsec VPNs.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command restricts SSH access to only IPv6 addresses?",
    options: [
      "transport input ssh ipv6",
      "line vty 0 4 ipv6 access-class MYACL in",
      "ipv6 access-list MYACL permit ssh",
      "access-class ipv6 MYACL in",
    ],
    correctAnswer: 1,
    explanation:
      "The 'line vty 0 4 ipv6 access-class MYACL in' command restricts SSH access using an IPv6 ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure IP Source Guard? (Choose two)",
    options: [
      "ip verify source",
      "ip dhcp snooping",
      "ip source binding 0000.1111.2222 vlan 10 192.168.1.100",
      "switchport port-security",
      "ip arp inspection",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'ip verify source' enables IP Source Guard, and 'ip source binding ...' configures a static binding.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the default port security violation mode on a Cisco switch?",
    options: ["Shutdown", "Restrict", "Protect", "Drop"],
    correctAnswer: 0,
    explanation:
      "The default port security violation mode is 'shutdown,' placing the port in err-disabled state.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "RADIUS uses UDP for communication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RADIUS uses UDP ports 1812 (authentication) and 1813 (accounting) for communication.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command enables logging of security violations on a switch?",
    options: [
      "logging security violations",
      "switchport port-security violation log",
      "logging trap 4",
      "show port-security violations",
    ],
    correctAnswer: 2,
    explanation:
      "The 'logging trap 4' command enables logging of security violations at warning level or higher.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure TACACS+ for AAA? (Choose two)",
    options: [
      "aaa new-model",
      "tacacs-server host 192.168.1.100 key MYKEY",
      "aaa authentication login default group tacacs+",
      "tacacs-server enable",
      "aaa authorization exec default group tacacs+",
    ],
    correctAnswer: [1, 2],
    explanation:
      "'tacacs-server host 192.168.1.100 key MYKEY' configures the TACACS+ server, and 'aaa authentication login default group tacacs+' enables TACACS+ authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why is DAI dropping ARP packets?\n\nExhibit:\ninterface Gi0/1\n ip arp inspection vlan 10\n ip dhcp snooping\n ip dhcp snooping vlan 10",
    options: [
      "Port not trusted",
      "DHCP snooping disabled",
      "VLAN not configured",
      "Incorrect ACL",
    ],
    correctAnswer: 0,
    explanation:
      "DAI drops ARP packets on untrusted ports unless 'ip arp inspection trust' is configured.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "The 'username admin secret cisco' command uses SHA-256 hashing.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'username ... secret' command uses MD5 hashing by default, unless SHA-256 is explicitly configured.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command displays the number of port security violations on an interface?",
    options: [
      "show port-security interface Gi0/1",
      "show interfaces Gi0/1",
      "show port-security violations",
      "show running-config",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show port-security interface Gi0/1' command displays violation counts and port security details.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands protect against MAC address flooding? (Choose two)",
    options: [
      "switchport port-security maximum 2",
      "switchport port-security violation restrict",
      "ip dhcp snooping",
      "ip arp inspection",
      "storm-control broadcast level 10",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'switchport port-security maximum 2' limits MAC addresses, and 'switchport port-security violation restrict' drops excess frames to prevent flooding.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'dot1x pae authenticator' command?",
    options: [
      "Enable 802.1X client",
      "Enable 802.1X authenticator",
      "Configure RADIUS",
      "Disable 802.1X",
    ],
    correctAnswer: 1,
    explanation:
      "The 'dot1x pae authenticator' command configures a port as an 802.1X authenticator, initiating authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "IPsec ESP provides both authentication and encryption.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. IPsec ESP (Encapsulating Security Payload) provides authentication, encryption, and integrity.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command configures a timeout for inactive SSH sessions?",
    options: [
      "exec-timeout 10 0",
      "session-timeout 10",
      "ip ssh timeout 10",
      "line vty 0 4 timeout 10",
    ],
    correctAnswer: 0,
    explanation:
      "The 'exec-timeout 10 0' command sets a 10-minute timeout for inactive SSH sessions.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure an extended ACL to permit HTTPS traffic? (Choose two)",
    options: [
      "access-list 100 permit tcp any any eq 443",
      "ip access-list extended MYACL",
      "permit tcp any any eq 443",
      "access-list 100 deny any",
      "ip access-group 100 in",
    ],
    correctAnswer: [0, 4],
    explanation:
      "'access-list 100 permit tcp any any eq 443' permits HTTPS, and 'ip access-group 100 in' applies the ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why are clients not authenticating via 802.1X?\n\nExhibit:\ninterface Gi0/1\n switchport mode access\n authentication port-control auto\nradius-server host 192.168.1.100 key MYKEY",
    options: [
      "802.1X not globally enabled",
      "RADIUS server misconfigured",
      "AAA not enabled",
      "Port in trunk mode",
    ],
    correctAnswer: 0,
    explanation:
      "The 'dot1x system-auth-control' command is missing, so 802.1X is not globally enabled.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'access-class' command can restrict both Telnet and SSH access.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'access-class' command applies ACLs to VTY lines, restricting both Telnet and SSH.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables logging of ACL matches?",
    options: [
      "access-list 10 permit 192.168.1.0 0.0.0.255 log",
      "ip access-list log enable",
      "logging acl matches",
      "access-list 10 log",
    ],
    correctAnswer: 0,
    explanation:
      "The 'access-list 10 permit 192.168.1.0 0.0.0.255 log' command enables logging of ACL matches.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure a secure VTY line? (Choose two)",
    options: [
      "transport input ssh",
      "crypto key generate rsa",
      "login local",
      "access-class 10 in",
      "line vty 0 4 password cisco",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'transport input ssh' restricts to SSH, and 'crypto key generate rsa' generates keys for SSH.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'ip arp inspection trust' command?",
    options: [
      "Enable DAI on a port",
      "Mark a port as trusted for DAI",
      "Disable ARP inspection",
      "Configure DHCP snooping",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip arp inspection trust' command marks a port as trusted, allowing ARP packets without DAI validation.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "Port security sticky MAC addresses are saved in the running configuration.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Sticky MAC addresses are saved in the running configuration when learned.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command configures a router to use TACACS+ for login authentication?",
    options: [
      "aaa authentication login default group tacacs+",
      "tacacs-server login enable",
      "aaa login tacacs+",
      "tacacs-server host 192.168.1.100",
    ],
    correctAnswer: 0,
    explanation:
      "The 'aaa authentication login default group tacacs+' command configures TACACS+ for login authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands verify DHCP snooping operation? (Choose two)",
    options: [
      "show ip dhcp snooping",
      "show ip dhcp snooping binding",
      "show ip dhcp pool",
      "show running-config",
      "show ip dhcp snooping statistics",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show ip dhcp snooping' displays snooping status, and 'show ip dhcp snooping binding' shows bindings.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why is IP Source Guard not working?\n\nExhibit:\ninterface Gi0/1\n ip verify source\n switchport mode access",
    options: [
      "DHCP snooping not enabled",
      "Port not trusted",
      "ACL misconfigured",
      "IP Source Guard not supported",
    ],
    correctAnswer: 0,
    explanation:
      "IP Source Guard requires DHCP snooping ('ip dhcp snooping') to build bindings, which is missing.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'crypto map' command is used to apply IPsec policies to an interface.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'crypto map' command applies IPsec policies to an interface for VPNs.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command sets the maximum login attempts to 3 before locking out a user?",
    options: [
      "login block-for 60 attempts 3 within 60",
      "login attempts 3",
      "aaa authentication attempts 3",
      "login lockout 3",
    ],
    correctAnswer: 0,
    explanation:
      "The 'login block-for 60 attempts 3 within 60' command locks out users after 3 failed attempts in 60 seconds.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure a secure console line? (Choose two)",
    options: [
      "login local",
      "password cisco",
      "exec-timeout 5 0",
      "transport input none",
      "aaa authentication login console local",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'login local' enables local authentication, and 'exec-timeout 5 0' sets a 5-minute inactivity timeout.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "What is the purpose of the 'ip dhcp snooping trust' command?",
    options: [
      "Enable DHCP snooping",
      "Mark a port as trusted",
      "Disable DHCP snooping",
      "Configure DAI",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip dhcp snooping trust' command marks a port as trusted for DHCP messages.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "802.1X supports guest VLANs for unauthenticated devices.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. 802.1X can assign unauthenticated devices to a guest VLAN for limited access.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command displays the current AAA configuration?",
    options: [
      "show aaa configuration",
      "show running-config",
      "show aaa sessions",
      "show aaa servers",
    ],
    correctAnswer: 1,
    explanation:
      "The 'show running-config' command displays the current AAA configuration.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure a VPN tunnel using GRE with IPsec? (Choose two)",
    options: [
      "crypto ipsec transform-set MYSET esp-aes",
      "tunnel mode gre ip",
      "crypto map MYMAP 10 ipsec-isakmp",
      "interface tunnel 0",
      "crypto isakmp policy 10",
    ],
    correctAnswer: [1, 2],
    explanation:
      "'tunnel mode gre ip' configures the GRE tunnel, and 'crypto map MYMAP 10 ipsec-isakmp' applies IPsec to the tunnel.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why is the ACL not blocking traffic?\n\nExhibit:\ninterface Gi0/0\n ip access-group 100 out\naccess-list 100 deny ip 192.168.1.0 0.0.0.255 any",
    options: [
      "ACL applied in wrong direction",
      "Missing permit statement",
      "Interface down",
      "Incorrect wildcard mask",
    ],
    correctAnswer: 1,
    explanation:
      "The ACL lacks a 'permit any' statement, so the implicit deny blocks all traffic, but a permit is needed to allow other traffic.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'login delay' command adds a delay between failed login attempts.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'login delay' command adds a delay to slow down brute-force login attempts.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables debugging of 802.1X events?",
    options: [
      "debug dot1x all",
      "debug authentication dot1x",
      "debug dot1x events",
      "debug aaa dot1x",
    ],
    correctAnswer: 0,
    explanation:
      "The 'debug dot1x all' command enables debugging of all 802.1X events.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands secure a switch against unauthorized access? (Choose two)",
    options: [
      "service password-encryption",
      "enable secret cisco",
      "switchport port-security",
      "vtp password MYKEY",
      "login local",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'service password-encryption' encrypts passwords, and 'enable secret cisco' sets a secure enable password.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the purpose of the 'aaa authorization exec default group tacacs+' command?",
    options: [
      "Enable authentication",
      "Set authorization for EXEC sessions",
      "Configure accounting",
      "Disable AAA",
    ],
    correctAnswer: 1,
    explanation:
      "The 'aaa authorization exec default group tacacs+' command sets authorization for EXEC sessions using TACACS+.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "IPsec AH provides encryption for data payloads.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. IPsec AH (Authentication Header) provides authentication and integrity, but not encryption.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command configures a static MAC address for port security?",
    options: [
      "switchport port-security mac-address 0000.1111.2222",
      "switchport port-security static 0000.1111.2222",
      "switchport port-security mac-address sticky",
      "switchport port-security maximum 1",
    ],
    correctAnswer: 0,
    explanation:
      "The 'switchport port-security mac-address 0000.1111.2222' command configures a static MAC address.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands troubleshoot ACL issues? (Choose two)",
    options: [
      "show access-lists",
      "show ip interface",
      "debug ip packet",
      "show running-config",
      "show vlan brief",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show access-lists' displays ACL details, and 'show ip interface' shows applied ACLs.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the purpose of the 'authentication event fail action next-method' command in 802.1X?",
    options: [
      "Retry authentication",
      "Use alternative authentication",
      "Disable port",
      "Log failures",
    ],
    correctAnswer: 1,
    explanation:
      "The 'authentication event fail action next-method' command uses the next authentication method if 802.1X fails.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'ip access-group' command can be applied to both interfaces and VTY lines.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. 'ip access-group' applies to interfaces; 'access-class' is used for VTY lines.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables accounting for AAA login events?",
    options: [
      "aaa accounting login default group tacacs+",
      "aaa accounting exec default group tacacs+",
      "aaa accounting login enable",
      "aaa accounting tacacs+ login",
    ],
    correctAnswer: 0,
    explanation:
      "The 'aaa accounting login default group tacacs+' command enables accounting for login events.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure a secure password policy? (Choose two)",
    options: [
      "security passwords min-length 8",
      "password complexity enable",
      "enable secret cisco",
      "username admin secret cisco",
      "login block-for 60 attempts 3 within 60",
    ],
    correctAnswer: [0, 4],
    explanation:
      "'security passwords min-length 8' sets a minimum password length, and 'login block-for 60 attempts 3 within 60' limits login attempts.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Refer to the exhibit. Why is SSH access not restricted by the ACL?\n\nExhibit:\nline vty 0 4\n access-class 10 in\naccess-list 10 permit 192.168.1.0 0.0.0.255\ntransport input ssh",
    options: [
      "ACL applied incorrectly",
      "Missing deny statement",
      "VTY lines disabled",
      "IPv6 traffic allowed",
    ],
    correctAnswer: 1,
    explanation:
      "The ACL lacks a 'deny any' statement, so the implicit permit allows all other traffic.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'dot1x timeout' command adjusts 802.1X authentication timers.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'dot1x timeout' command adjusts timers like tx-period for 802.1X authentication.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables DAI for VLANs 10-20?",
    options: [
      "ip arp inspection vlan 10-20",
      "ip arp inspection enable 10-20",
      "arp inspection vlan 10-20",
      "ip arp inspection trust 10-20",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip arp inspection vlan 10-20' command enables DAI for VLANs 10 through 20.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands protect against rogue DHCP servers? (Choose two)",
    options: [
      "ip dhcp snooping",
      "ip dhcp snooping trust",
      "ip verify source",
      "switchport port-security",
      "ip arp inspection",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip dhcp snooping' enables DHCP snooping, and 'ip dhcp snooping trust' marks trusted ports.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the purpose of the 'crypto isakmp key MYKEY address 192.168.1.1' command?",
    options: [
      "Set IPsec encryption",
      "Configure IKE pre-shared key",
      "Enable GRE tunnel",
      "Generate RSA keys",
    ],
    correctAnswer: 1,
    explanation:
      "The 'crypto isakmp key MYKEY address 192.168.1.1' command configures a pre-shared key for IKE in IPsec.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question: "Port security can be configured on EtherChannel interfaces.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Port security is not supported on EtherChannel interfaces.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command displays the current IPsec security associations?",
    options: [
      "show crypto ipsec sa",
      "show crypto isakmp sa",
      "show crypto map",
      "show crypto session",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show crypto ipsec sa' command displays the current IPsec security associations.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure a secure enable password? (Choose two)",
    options: [
      "enable secret cisco",
      "enable password cisco",
      "service password-encryption",
      "username admin secret cisco",
      "password cisco",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'enable secret cisco' sets a secure MD5-hashed password, and 'service password-encryption' encrypts other passwords.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the purpose of the 'authentication host-mode multi-auth' command in 802.1X?",
    options: [
      "Allow multiple devices on a port",
      "Enable single-host mode",
      "Disable 802.1X",
      "Force re-authentication",
    ],
    correctAnswer: 0,
    explanation:
      "The 'authentication host-mode multi-auth' command allows multiple authenticated devices on a single 802.1X port.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'show ip dhcp snooping binding' command displays static MAC addresses.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The command displays DHCP bindings, not static MAC addresses.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "Which command restricts console access to a specific IP address?",
    options: [
      "access-class 10 in",
      "line console 0 access-class 10 in",
      "ip access-group 10 in",
      "console access 10",
    ],
    correctAnswer: 1,
    explanation:
      "The 'line console 0 access-class 10 in' command restricts console access using an ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands configure a time-based ACL? (Choose two)",
    options: [
      "time-range MYTIME",
      "access-list 100 permit tcp any any eq 80 time-range MYTIME",
      "access-list 100 time-range MYTIME",
      "periodic daily 8:00 to 17:00",
      "ip access-group 100 in",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'time-range MYTIME' defines the time range, and 'access-list 100 permit ... time-range MYTIME' applies it to the ACL.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the purpose of the 'aaa accounting commands 15 default group tacacs+' command?",
    options: [
      "Log all commands",
      "Log privilege level 15 commands",
      "Enable authentication",
      "Disable accounting",
    ],
    correctAnswer: 1,
    explanation:
      "The command logs all commands executed at privilege level 15 to the TACACS+ server.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'ip access-list logging interval' command limits ACL logging frequency.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The command sets a minimum interval between ACL log messages to prevent flooding.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command enables debugging of IPsec events?",
    options: [
      "debug crypto ipsec",
      "debug crypto isakmp",
      "debug crypto all",
      "debug ipsec events",
    ],
    correctAnswer: 0,
    explanation:
      "The 'debug crypto ipsec' command enables debugging of IPsec events.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question:
      "Which two commands configure port security with sticky MAC addresses? (Choose two)",
    options: [
      "switchport port-security",
      "switchport port-security mac-address sticky",
      "switchport port-security maximum 2",
      "switchport mode access",
      "switchport port-security violation restrict",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'switchport port-security' enables port security, and 'switchport port-security mac-address sticky' enables sticky MAC learning.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question:
      "What is the purpose of the 'aaa authentication enable default group tacacs+' command?",
    options: [
      "Enable console authentication",
      "Enable EXEC authorization",
      "Enable privilege mode authentication",
      "Enable VTY authentication",
    ],
    correctAnswer: 2,
    explanation:
      "The command configures authentication for entering privilege mode using TACACS+.",
  },
  {
    category: "Security Fundamentals",
    type: "truefalse",
    question:
      "The 'ip dhcp snooping information option' command enables Option 82.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The command enables DHCP Option 82 for additional client information.",
  },
  {
    category: "Security Fundamentals",
    type: "single",
    question: "Which command displays the current crypto map configuration?",
    options: [
      "show crypto map",
      "show crypto ipsec sa",
      "show crypto isakmp policy",
      "show crypto session",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show crypto map' command displays the current crypto map configuration.",
  },
  {
    category: "Security Fundamentals",
    type: "multiple",
    question: "Which two commands protect against ARP spoofing? (Choose two)",
    options: [
      "ip arp inspection vlan 10",
      "ip dhcp snooping",
      "switchport port-security",
      "ip verify source",
      "access-list 10 deny arp",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip arp inspection vlan 10' enables DAI, and 'ip dhcp snooping' provides bindings for DAI to prevent ARP spoofing.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Refer to the exhibit. A NETCONF session fails to retrieve device configuration. What is the issue?\n\nExhibit:\n<rpc message-id='101'>\n  <get-config>\n    <source>\n      <running/>\n    </source>\n  </get-config>\n</rpc>\nError: missing namespace",
    options: [
      "Incorrect XML namespace",
      "Invalid message ID",
      "Missing YANG model",
      "Authentication failure",
    ],
    correctAnswer: 0,
    explanation:
      "NETCONF requires an XML namespace (e.g., xmlns='urn:ietf:params:xml:ns:netconf:base:1.0') in the RPC message. The missing namespace causes the session to fail.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "RESTCONF supports both JSON and XML data formats.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RESTCONF supports JSON and XML for encoding configuration and state data, making it flexible for automation.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two components are part of a YANG model? (Choose two)",
    options: ["Data nodes", "RPCs", "HTTP headers", "SNMP traps", "VLAN tags"],
    correctAnswer: [0, 1],
    explanation:
      "YANG models define data nodes (e.g., leaf, container) for configuration/state data and RPCs (Remote Procedure Calls) for operations.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which protocol uses SSH as its default transport for network automation?",
    options: ["RESTCONF", "NETCONF", "SNMP", "gRPC"],
    correctAnswer: 1,
    explanation:
      "NETCONF uses SSH as its default transport protocol for secure communication between the client and network device.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question:
      "Ansible requires an agent to be installed on managed network devices.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Ansible is agentless, using SSH or APIs to manage network devices without requiring agent software.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of a southbound API in an SDN architecture?",
    options: [
      "Communicate with applications",
      "Manage the control plane",
      "Configure network devices",
      "Encrypt data traffic",
    ],
    correctAnswer: 2,
    explanation:
      "Southbound APIs (e.g., OpenFlow, NETCONF) enable the SDN controller to configure and manage network devices.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two HTTP methods are commonly used in RESTCONF for configuration? (Choose two)",
    options: ["GET", "POST", "DELETE", "TRACE", "CONNECT"],
    correctAnswer: [1, 2],
    explanation:
      "POST creates or updates resources, and DELETE removes resources in RESTCONF for configuration tasks.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Refer to the exhibit. Why does the Ansible playbook fail to configure a VLAN?\n\nExhibit:\n- name: Configure VLAN\n  ios_vlan:\n    vlan_id: 10\n    name: TEST_VLAN\n  state: absent",
    options: [
      "Incorrect module",
      "State set to absent",
      "Missing credentials",
      "Invalid VLAN ID",
    ],
    correctAnswer: 1,
    explanation:
      "The 'state: absent' parameter deletes VLAN 10 instead of creating it. Use 'state: present' to configure the VLAN.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Cisco DNA Center supports intent-based networking.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Cisco DNA Center uses intent-based networking to automate policy enforcement and network configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Python library is commonly used for NETCONF operations?",
    options: ["requests", "ncclient", "paramiko", "netmiko"],
    correctAnswer: 1,
    explanation:
      "The ncclient Python library is designed for NETCONF operations, enabling programmatic device management.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two tools are used for network automation? (Choose two)",
    options: ["Ansible", "Cisco ACI", "SNMP", "Syslog", "FTP"],
    correctAnswer: [0, 1],
    explanation:
      "Ansible automates device configuration, and Cisco ACI (Application Centric Infrastructure) supports network automation via APIs.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the role of a YANG leaf node in a data model?",
    options: [
      "Define a container",
      "Hold a single value",
      "Execute an RPC",
      "Group multiple nodes",
    ],
    correctAnswer: 1,
    explanation:
      "A YANG leaf node holds a single value (e.g., an IP address or interface name) in a data model.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Puppet requires an agent on managed network devices.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Puppet typically requires an agent on managed devices to apply configurations.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which HTTP status code indicates a successful RESTCONF operation?",
    options: ["200", "404", "500", "401"],
    correctAnswer: 0,
    explanation:
      "The HTTP status code 200 (OK) indicates a successful RESTCONF operation, such as retrieving or updating a resource.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two features are supported by Cisco DNA Center? (Choose two)",
    options: [
      "Policy automation",
      "VLAN configuration",
      "SNMP monitoring",
      "Network assurance",
      "Static routing",
    ],
    correctAnswer: [0, 3],
    explanation:
      "Cisco DNA Center supports policy automation (intent-based networking) and network assurance (monitoring and analytics).",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Refer to the exhibit. A RESTCONF POST request fails. What is the issue?\n\nExhibit:\nPOST /restconf/data/ietf-interfaces:interfaces\nContent-Type: application/yang-data+json\n{\n  'interface': {\n    'name': 'GigabitEthernet0/0',\n    'enabled': true\n  }\n}\nError: malformed JSON",
    options: [
      "Incorrect Content-Type",
      "Missing namespace",
      "Invalid JSON syntax",
      "Authentication failure",
    ],
    correctAnswer: 2,
    explanation:
      "The JSON syntax is invalid (e.g., single quotes instead of double quotes). RESTCONF requires valid JSON or XML.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "NETCONF uses TCP port 830 by default.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NETCONF uses TCP port 830 over SSH for secure communication.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which command enables NETCONF on a Cisco IOS device?",
    options: [
      "netconf-yang",
      "restconf",
      "netconf enable",
      "yang-model enable",
    ],
    correctAnswer: 0,
    explanation:
      "The 'netconf-yang' command enables NETCONF with YANG support on a Cisco IOS device.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two protocols are used for programmatic network management? (Choose two)",
    options: ["SNMP", "NETCONF", "FTP", "DHCP", "ICMP"],
    correctAnswer: [1, 0],
    explanation:
      "NETCONF and SNMP are used for programmatic network management, with NETCONF offering structured automation.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of a northbound API in Cisco DNA Center?",
    options: [
      "Configure devices",
      "Interface with applications",
      "Manage data plane",
      "Encrypt traffic",
    ],
    correctAnswer: 1,
    explanation:
      "Northbound APIs in Cisco DNA Center allow applications to interact with the controller for policy and orchestration.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "JSON is a hierarchical data format.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. JSON (JavaScript Object Notation) supports hierarchical structures with nested objects and arrays.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Ansible module configures Cisco IOS interfaces?",
    options: ["ios_config", "ios_interface", "ios_vlan", "ios_facts"],
    correctAnswer: 0,
    explanation:
      "The ios_config module is used to configure Cisco IOS interfaces and other settings via CLI commands.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two data models are supported by NETCONF? (Choose two)",
    options: ["YANG", "XML", "JSON", "SNMP MIB", "CSV"],
    correctAnswer: [0, 1],
    explanation:
      "NETCONF uses YANG for data modeling and XML for encoding configuration and state data.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the benefit of using Cisco ACI for automation?",
    options: [
      "Manual CLI configuration",
      "Centralized policy management",
      "Static routing",
      "Hardware upgrades",
    ],
    correctAnswer: 1,
    explanation:
      "Cisco ACI provides centralized policy management through APIC, enabling automated network configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "RESTCONF requires HTTPS for secure communication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RESTCONF uses HTTPS (TCP port 443) for secure communication with network devices.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Python library is used for REST API calls?",
    options: ["ncclient", "requests", "netmiko", "paramiko"],
    correctAnswer: 1,
    explanation:
      "The requests library is used for making REST API calls, including RESTCONF operations.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two characteristics describe SDN? (Choose two)",
    options: [
      "Centralized control plane",
      "Distributed data plane",
      "Manual configuration",
      "Static policies",
      "CLI-based management",
    ],
    correctAnswer: [0, 1],
    explanation:
      "SDN uses a centralized control plane (e.g., via a controller) and a distributed data plane across devices.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Refer to the exhibit. Why does the Python script fail to retrieve interface data?\n\nExhibit:\nimport requests\nurl = 'http://router/restconf/data/ietf-interfaces:interfaces'\nresponse = requests.get(url)\nError: Connection refused",
    options: [
      "Incorrect URL",
      "HTTP instead of HTTPS",
      "Missing authentication",
      "Invalid JSON",
    ],
    correctAnswer: 1,
    explanation:
      "RESTCONF requires HTTPS, not HTTP. Using HTTP causes a connection refusal due to security settings.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "YANG models are device-specific.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. YANG models are vendor-neutral and standardized (e.g., IETF models), though devices may use custom models.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which command enables RESTCONF on a Cisco IOS-XE device?",
    options: [
      "restconf",
      "netconf-yang",
      "restconf enable",
      "http server restconf",
    ],
    correctAnswer: 0,
    explanation:
      "The 'restconf' command enables RESTCONF on a Cisco IOS-XE device.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two benefits does automation provide in network management? (Choose two)",
    options: [
      "Reduced human errors",
      "Increased manual effort",
      "Faster configuration",
      "Higher latency",
      "Static policies",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Automation reduces human errors by standardizing tasks and speeds up configuration with programmatic tools.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'ietf-interfaces' YANG model?",
    options: [
      "Manage routing protocols",
      "Configure device interfaces",
      "Monitor syslog",
      "Define VLANs",
    ],
    correctAnswer: 1,
    explanation:
      "The ietf-interfaces YANG model is used to configure and manage network device interfaces.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Chef is an agentless automation tool.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. Chef requires an agent on managed devices, unlike Ansible, which is agentless.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which HTTP method updates an existing resource in RESTCONF?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 2,
    explanation:
      "The PUT method updates an existing resource in RESTCONF, replacing its configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two components are required for NETCONF operation? (Choose two)",
    options: [
      "YANG models",
      "SNMP MIBs",
      "SSH transport",
      "HTTP server",
      "JSON data",
    ],
    correctAnswer: [0, 2],
    explanation:
      "NETCONF requires YANG models for data structure and SSH for secure transport.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the role of the Cisco APIC in ACI?",
    options: [
      "Data plane forwarding",
      "Centralized controller",
      "Routing protocol",
      "SNMP agent",
    ],
    correctAnswer: 1,
    explanation:
      "The Cisco APIC (Application Policy Infrastructure Controller) is the centralized controller for ACI, managing policies.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "XML requires strict syntax validation.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. XML used in NETCONF requires strict syntax validation to ensure proper parsing.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Ansible playbook keyword defines a task?",
    options: ["tasks", "play", "roles", "vars"],
    correctAnswer: 0,
    explanation:
      "The 'tasks' keyword in an Ansible playbook defines the actions to be executed on managed devices.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two Cisco platforms support RESTCONF? (Choose two)",
    options: [
      "IOS-XE",
      "IOS-XR",
      "Catalyst 2950",
      "ASA firewall",
      "Aironet AP",
    ],
    correctAnswer: [0, 1],
    explanation:
      "IOS-XE and IOS-XR support RESTCONF for programmatic configuration and management.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Refer to the exhibit. Why does the NETCONF operation fail?\n\nExhibit:\n<rpc message-id='102'>\n  <edit-config>\n    <target>\n      <candidate/>\n    </target>\n    <config>\n      <interfaces>\n        <interface>\n          <name>GigabitEthernet0/0</name>\n        </interface>\n      </interfaces>\n    </config>\n  </edit-config>\n</rpc>\nError: candidate datastore not enabled",
    options: [
      "Invalid XML",
      "Candidate datastore disabled",
      "Missing YANG model",
      "Incorrect RPC",
    ],
    correctAnswer: 1,
    explanation:
      "The candidate datastore must be enabled on the device (e.g., via 'netconf-yang feature candidate-datastore') for edit-config operations.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "SDN separates the control plane from the data plane.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SDN decouples the control plane (decision-making) from the data plane (forwarding).",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Python library is used for SSH-based CLI automation?",
    options: ["ncclient", "requests", "netmiko", "json"],
    correctAnswer: 2,
    explanation:
      "Netmiko is a Python library for SSH-based CLI automation on network devices.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two characteristics describe Ansible playbooks? (Choose two)",
    options: [
      "Written in YAML",
      "Agent-based",
      "Idempotent tasks",
      "XML-based",
      "Manual execution",
    ],
    correctAnswer: [0, 2],
    explanation:
      "Ansible playbooks are written in YAML and designed to be idempotent, ensuring consistent outcomes.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'lock' operation in NETCONF?",
    options: [
      "Encrypt data",
      "Prevent concurrent configuration changes",
      "Retrieve state data",
      "Delete resources",
    ],
    correctAnswer: 1,
    explanation:
      "The 'lock' operation in NETCONF prevents other sessions from modifying the configuration during an operation.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "RESTCONF supports PATCH for partial updates.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RESTCONF supports the PATCH method for partial updates to resources.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Cisco DNA Center API retrieves device health information?",
    options: [
      "/dna/intent/api/v1/network-health",
      "/dna/intent/api/v1/device-config",
      "/dna/intent/api/v1/vlan",
      "/dna/intent/api/v1/policy",
    ],
    correctAnswer: 0,
    explanation:
      "The /dna/intent/api/v1/network-health API retrieves device health information from Cisco DNA Center.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two YANG node types hold configuration data? (Choose two)",
    options: ["Leaf", "Container", "List", "RPC", "Notification"],
    correctAnswer: [0, 2],
    explanation:
      "Leaf nodes hold single values, and List nodes hold multiple entries of structured configuration data.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'commit' operation in NETCONF?",
    options: [
      "Retrieve configuration",
      "Apply candidate changes",
      "Lock the datastore",
      "Delete resources",
    ],
    correctAnswer: 1,
    explanation:
      "The 'commit' operation applies changes from the candidate datastore to the running configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "JSON requires strict key-value pair syntax.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. JSON requires strict syntax with double-quoted keys and proper value formats.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which Ansible module gathers device facts from Cisco IOS devices?",
    options: ["ios_config", "ios_facts", "ios_vlan", "ios_command"],
    correctAnswer: 1,
    explanation:
      "The ios_facts module gathers device facts (e.g., OS version, interfaces) from Cisco IOS devices.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two SDN controllers are widely used? (Choose two)",
    options: ["Cisco APIC", "OpenDaylight", "Ansible", "Puppet", "SNMP"],
    correctAnswer: [0, 1],
    explanation:
      "Cisco APIC (for ACI) and OpenDaylight are popular SDN controllers for network automation.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Refer to the exhibit. Why does the RESTCONF GET request fail?\n\nExhibit:\nGET /restconf/data/ietf-interfaces:interfaces/interface=GigabitEthernet0/0\nAccept: application/yang-data+json\nError: 401 Unauthorized",
    options: [
      "Invalid URL",
      "Missing authentication",
      "Incorrect Accept header",
      "Device offline",
    ],
    correctAnswer: 1,
    explanation:
      "The 401 Unauthorized error indicates missing or invalid authentication credentials (e.g., username/password or token).",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "NETCONF supports rollback-on-error for configuration changes.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NETCONF’s rollback-on-error capability reverts changes if an error occurs during configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which command verifies NETCONF status on a Cisco device?",
    options: [
      "show netconf-yang status",
      "show restconf",
      "show netconf session",
      "show yang model",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show netconf-yang status' command verifies NETCONF/YANG status and sessions.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two automation tools support YAML? (Choose two)",
    options: ["Ansible", "Puppet", "Chef", "Cisco DNA Center", "NETCONF"],
    correctAnswer: [0, 3],
    explanation:
      "Ansible uses YAML for playbooks, and Cisco DNA Center supports YAML for configuration templates.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'notification' YANG node?",
    options: [
      "Define configuration data",
      "Send event messages",
      "Execute RPCs",
      "Store state data",
    ],
    correctAnswer: 1,
    explanation:
      "Notification nodes in YANG define event messages sent by devices (e.g., interface status changes).",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "OpenFlow is a southbound protocol in SDN.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. OpenFlow is a southbound protocol used by SDN controllers to manage device forwarding tables.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which Python script retrieves Cisco IOS interface data using Netmiko?\n\nA. \nfrom netmiko import ConnectHandler\ndevice = {'device_type': 'cisco_ios', 'ip': '192.168.1.1', 'username': 'admin', 'password': 'cisco'}\nconn = ConnectHandler(**device)\noutput = conn.send_command('show ip interface brief')\n\nB. \nfrom ncclient import manager\nconn = manager.connect(host='192.168.1.1', username='admin', password='cisco')\noutput = conn.get_config(source='running')\n\nC. \nimport requests\nurl = 'https://192.168.1.1/restconf/data/ietf-interfaces:interfaces'\nresponse = requests.get(url, auth=('admin', 'cisco'))\n\nD. \nfrom paramiko import SSHClient\nclient = SSHClient()\nclient.connect('192.168.1.1', username='admin', password='cisco')\noutput = client.exec_command('show ip interface brief')",
    options: ["A", "B", "C", "D"],
    correctAnswer: 0,
    explanation:
      "Option A uses Netmiko to send the 'show ip interface brief' command via SSH, correctly retrieving interface data.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two Cisco DNA Center features support automation? (Choose two)",
    options: [
      "SWIM",
      "VLAN tagging",
      "Plug and Play",
      "Port security",
      "ACL configuration",
    ],
    correctAnswer: [0, 2],
    explanation:
      "SWIM (Software Image Management) automates software upgrades, and Plug and Play automates device onboarding.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'rpc-reply' message in NETCONF?",
    options: [
      "Initiate a session",
      "Respond to RPC requests",
      "Lock the datastore",
      "Send notifications",
    ],
    correctAnswer: 1,
    explanation:
      "The 'rpc-reply' message in NETCONF responds to RPC requests with the operation’s result or error.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Ansible modules are idempotent by design.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Ansible modules are designed to be idempotent, ensuring repeated runs produce the same result.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which HTTP header specifies the data format in a RESTCONF request?",
    options: ["Content-Type", "Authorization", "Accept", "User-Agent"],
    correctAnswer: 0,
    explanation:
      "The Content-Type header (e.g., application/yang-data+json) specifies the data format in a RESTCONF request.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two tasks can be automated with Cisco DNA Center APIs? (Choose two)",
    options: [
      "Device provisioning",
      "VLAN creation",
      "Static route configuration",
      "Port security",
      "ACL updates",
    ],
    correctAnswer: [0, 1],
    explanation:
      "Cisco DNA Center APIs support device provisioning and VLAN creation for automated network management.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'candidate' datastore in NETCONF?",
    options: [
      "Store running configuration",
      "Hold temporary changes",
      "Log events",
      "Manage state data",
    ],
    correctAnswer: 1,
    explanation:
      "The candidate datastore holds temporary configuration changes before they are committed to the running configuration.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "RESTCONF supports URI-based resource addressing.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RESTCONF uses URI-based addressing (e.g., /restconf/data/ietf-interfaces:interfaces) to access resources.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Ansible variable type stores device-specific data?",
    options: [
      "Play variables",
      "Host variables",
      "Role variables",
      "Task variables",
    ],
    correctAnswer: 1,
    explanation:
      "Host variables store device-specific data (e.g., IP, credentials) in Ansible inventory files.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two protocols support YANG data models? (Choose two)",
    options: ["NETCONF", "RESTCONF", "SNMP", "Syslog", "FTP"],
    correctAnswer: [0, 1],
    explanation:
      "NETCONF and RESTCONF use YANG data models for structured configuration and management.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "What is the benefit of using intent-based networking in Cisco DNA Center?",
    options: [
      "Manual CLI access",
      "Simplified policy enforcement",
      "Static routing",
      "Increased complexity",
    ],
    correctAnswer: 1,
    explanation:
      "Intent-based networking simplifies policy enforcement by translating high-level intents into device configurations.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "NETCONF supports capability exchange during session setup.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NETCONF exchanges capabilities (e.g., supported YANG models) during session establishment.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which Python script retrieves RESTCONF data with proper authentication?\n\nA. \nimport requests\nurl = 'https://192.168.1.1/restconf/data/ietf-interfaces:interfaces'\nresponse = requests.get(url)\n\nB. \nimport requests\nurl = 'https://192.168.1.1/restconf/data/ietf-interfaces:interfaces'\nheaders = {'Accept': 'application/yang-data+json'}\nresponse = requests.get(url, headers=headers, auth=('admin', 'cisco'))\n\nC. \nfrom ncclient import manager\nconn = manager.connect(host='192.168.1.1', username='admin', password='cisco')\nresponse = conn.get_config(source='running')\n\nD. \nfrom netmiko import ConnectHandler\ndevice = {'device_type': 'cisco_ios', 'ip': '192.168.1.1', 'username': 'admin', 'password': 'cisco'}\nconn = ConnectHandler(**device)\nresponse = conn.send_command('show running-config')",
    options: ["A", "B", "C", "D"],
    correctAnswer: 1,
    explanation:
      "Option B uses the requests library with proper HTTPS, headers, and authentication for RESTCONF data retrieval.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question: "Which two RESTCONF operations are idempotent? (Choose two)",
    options: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    correctAnswer: [0, 3],
    explanation:
      "GET (retrieve) and DELETE (remove) are idempotent, producing consistent results regardless of repeated calls.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'running' datastore in NETCONF?",
    options: [
      "Store temporary changes",
      "Hold active configuration",
      "Log notifications",
      "Manage YANG models",
    ],
    correctAnswer: 1,
    explanation:
      "The running datastore holds the active configuration currently applied to the device.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Cisco ACI uses spine-leaf architecture for automation.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Cisco ACI uses a spine-leaf architecture to support automated, policy-driven networking.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "Which Ansible module sends raw CLI commands to Cisco devices?",
    options: ["ios_config", "ios_command", "ios_facts", "ios_vlan"],
    correctAnswer: 1,
    explanation:
      "The ios_command module sends raw CLI commands (e.g., 'show version') to Cisco devices.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two HTTP status codes indicate RESTCONF errors? (Choose two)",
    options: ["200", "404", "500", "201", "204"],
    correctAnswer: [1, 2],
    explanation:
      "404 (Not Found) indicates a missing resource, and 500 (Internal Server Error) indicates a server-side issue.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'get-config' operation in NETCONF?",
    options: [
      "Apply configuration",
      "Retrieve configuration",
      "Delete resources",
      "Send notifications",
    ],
    correctAnswer: 1,
    explanation:
      "The 'get-config' operation retrieves configuration data from a specified datastore (e.g., running).",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "YANG models support data validation constraints.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. YANG models include constraints (e.g., range, pattern) to validate configuration data.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which Cisco DNA Center API creates a new VLAN?\n\nA. /dna/intent/api/v1/network-device\nB. /dna/intent/api/v1/vlan\nC. /dna/intent/api/v1/site\nD. /dna/intent/api/v1/policy",
    options: ["A", "B", "C", "D"],
    correctAnswer: 1,
    explanation:
      "The /dna/intent/api/v1/vlan API is used to create and manage VLANs in Cisco DNA Center.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two characteristics describe NETCONF sessions? (Choose two)",
    options: ["Stateful", "Stateless", "SSH-based", "HTTP-based", "Idempotent"],
    correctAnswer: [0, 2],
    explanation:
      "NETCONF sessions are stateful (maintaining session context) and SSH-based for secure communication.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the purpose of the 'edit-config' operation in NETCONF?",
    options: [
      "Retrieve state data",
      "Modify configuration",
      "Send notifications",
      "Lock the datastore",
    ],
    correctAnswer: 1,
    explanation:
      "The 'edit-config' operation modifies configuration data in a specified datastore (e.g., candidate).",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "RESTCONF operations are stateless.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. RESTCONF operations are stateless, with each request containing all necessary information.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which Ansible playbook component defines reusable configurations?",
    options: ["Tasks", "Roles", "Vars", "Handlers"],
    correctAnswer: 1,
    explanation:
      "Roles in Ansible playbooks define reusable configurations, organizing tasks, variables, and templates.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two Cisco IOS-XE features support automation? (Choose two)",
    options: ["NETCONF", "RESTCONF", "SNMP", "VTP", "STP"],
    correctAnswer: [0, 1],
    explanation:
      "NETCONF and RESTCONF are supported on IOS-XE for programmatic configuration and management.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "What is the purpose of the 'close-session' operation in NETCONF?",
    options: [
      "Apply configuration",
      "Retrieve data",
      "Terminate session",
      "Lock datastore",
    ],
    correctAnswer: 2,
    explanation:
      "The 'close-session' operation terminates an active NETCONF session.",
  },
  {
    category: "Automation and Programmability",
    type: "truefalse",
    question: "Cisco DNA Center supports Python SDK for automation.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Cisco DNA Center provides a Python SDK for programmatic interaction with its APIs.",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question:
      "Which HTTP method retrieves data in RESTCONF without modifying it?",
    options: ["POST", "PUT", "GET", "DELETE"],
    correctAnswer: 2,
    explanation:
      "The GET method retrieves data in RESTCONF without modifying the resource.",
  },
  {
    category: "Automation and Programmability",
    type: "multiple",
    question:
      "Which two elements are included in a YANG list node? (Choose two)",
    options: ["Key", "Value", "Container", "RPC", "Notification"],
    correctAnswer: [0, 2],
    explanation:
      "A YANG list node includes a key (to uniquely identify entries) and containers (to hold structured data).",
  },
  {
    category: "Automation and Programmability",
    type: "single",
    question: "What is the benefit of using NETCONF over SNMP for automation?",
    options: [
      "Simpler configuration",
      "Structured data model",
      "Lower bandwidth",
      "Manual CLI support",
    ],
    correctAnswer: 1,
    explanation:
      "NETCONF uses structured YANG models, enabling robust and programmatic configuration compared to SNMP.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why are DHCP clients not receiving IP addresses?\n\nExhibit:\nip dhcp pool MYPOOL\n network 192.168.1.0 255.255.255.0\n default-router 192.168.1.1\ninterface Gi0/0\n ip address 192.168.1.1 255.255.255.0\n no ip dhcp server",
    options: [
      "DHCP pool misconfigured",
      "Interface down",
      "DHCP service disabled",
      "ACL blocking DHCP",
    ],
    correctAnswer: 2,
    explanation:
      "The 'no ip dhcp server' command disables the DHCP server on the router, preventing clients from receiving IP addresses.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'ip helper-address' command forwards DHCP broadcasts to a specified server.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'ip helper-address' command forwards DHCP broadcasts (and other UDP broadcasts) to a specified server IP.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure NAT overload with an ACL? (Choose two)",
    options: [
      "ip nat inside source list 10 interface Gi0/0 overload",
      "access-list 10 permit 192.168.1.0 0.0.0.255",
      "ip nat pool MYPOOL 209.165.200.1 209.165.200.10",
      "ip nat inside",
      "ip nat outside",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip nat inside source list 10 interface Gi0/0 overload' enables NAT overload, and 'access-list 10 permit 192.168.1.0 0.0.0.255' defines the source IPs.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command configures SNMPv3 with authentication and no encryption?",
    options: [
      "snmp-server group MYGROUP v3 auth",
      "snmp-server group MYGROUP v3 priv",
      "snmp-server user MYUSER v3 noauth",
      "snmp-server host 192.168.1.100 v3 auth",
    ],
    correctAnswer: 0,
    explanation:
      "The 'snmp-server group MYGROUP v3 auth' command configures SNMPv3 with authentication but no encryption (authNoPriv).",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "NTP stratum 1 servers are directly connected to a GPS time source.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NTP stratum 1 servers are directly synchronized with a high-precision time source, such as GPS.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why is syslog not sending messages to the logging host?\n\nExhibit:\nlogging host 192.168.1.100\nno logging trap",
    options: [
      "Logging host unreachable",
      "Trap level not set",
      "Syslog disabled",
      "Incorrect severity",
    ],
    correctAnswer: 1,
    explanation:
      "The 'no logging trap' command disables sending syslog messages to the logging host by not specifying a severity level.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure a DHCP relay? (Choose two)",
    options: [
      "ip helper-address 192.168.1.100",
      "interface Gi0/0",
      "ip dhcp relay enable",
      "ip dhcp pool MYPOOL",
      "ip helper-address 192.168.2.100",
    ],
    correctAnswer: [0, 4],
    explanation:
      "'ip helper-address 192.168.1.100' and 'ip helper-address 192.168.2.100' configure the router to forward DHCP requests to the specified servers.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command sets the QoS priority for VoIP traffic on an interface?",
    options: [
      "priority 100",
      "class-map VOIP",
      "policy-map VOIP",
      "priority percent 20",
    ],
    correctAnswer: 3,
    explanation:
      "The 'priority percent 20' command in a policy-map assigns a percentage of bandwidth to VoIP traffic for QoS.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "SNMP traps are sent to the management station without acknowledgment.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SNMP traps are sent asynchronously without requiring acknowledgment from the management station.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "What is the default NTP authentication key type on Cisco devices?",
    options: ["MD5", "SHA", "AES", "RSA"],
    correctAnswer: 0,
    explanation:
      "MD5 is the default authentication key type for NTP on Cisco devices.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands verify NAT translations? (Choose two)",
    options: [
      "show ip nat translations",
      "show running-config",
      "show ip nat statistics",
      "show ip dhcp binding",
      "show ip nat pool",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'show ip nat translations' displays active NAT translations, and 'show ip nat statistics' shows NAT operation details.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why is the NAT configuration not working?\n\nExhibit:\nip nat inside source static 192.168.1.10 209.165.200.10\ninterface Gi0/0\n ip address 192.168.1.1 255.255.255.0\n ip nat outside",
    options: [
      "Missing 'ip nat inside'",
      "Incorrect static IP",
      "Interface down",
      "ACL required",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip nat inside' command is missing on the internal interface, preventing NAT from functioning.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'logging console' command sends messages to the syslog server.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'logging console' command sends messages to the console, not the syslog server.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures a DHCP pool with a DNS server?",
    options: [
      "dns-server 8.8.8.8",
      "ip dhcp dns 8.8.8.8",
      "dhcp dns-server 8.8.8.8",
      "domain-name server 8.8.8.8",
    ],
    correctAnswer: 0,
    explanation:
      "The 'dns-server 8.8.8.8' command in a DHCP pool configures the DNS server for clients.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two syslog severity levels are used for critical issues? (Choose two)",
    options: [
      "Emergency (0)",
      "Alert (1)",
      "Critical (2)",
      "Error (3)",
      "Warning (4)",
    ],
    correctAnswer: [1, 2],
    explanation:
      "Alert (1) and Critical (2) severity levels indicate critical issues requiring immediate attention.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command enables QoS classification based on DSCP values?",
    options: [
      "class-map match dscp",
      "policy-map dscp",
      "match dscp",
      "qos dscp enable",
    ],
    correctAnswer: 0,
    explanation:
      "The 'class-map match dscp' command creates a class-map to classify traffic based on DSCP values.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "SNMPv2c uses community strings for authentication.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SNMPv2c uses community strings (e.g., public, private) for authentication.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'ip dhcp excluded-address' command?",
    options: [
      "Reserve IPs for clients",
      "Exclude IPs from DHCP pool",
      "Enable DHCP relay",
      "Set lease duration",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip dhcp excluded-address' command excludes specified IP addresses from the DHCP pool for static use.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure NTP with authentication? (Choose two)",
    options: [
      "ntp authentication-key 1 md5 MYKEY",
      "ntp trusted-key 1",
      "ntp server 192.168.1.100",
      "ntp authenticate",
      "ntp master",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'ntp authentication-key 1 md5 MYKEY' defines the key, and 'ntp authenticate' enables NTP authentication.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why are clients not resolving domain names?\n\nExhibit:\nip dns server\nip name-server 8.8.8.8\ninterface Gi0/0\n ip address 192.168.1.1 255.255.255.0\n no ip dns server",
    options: [
      "DNS server unreachable",
      "Local DNS disabled",
      "Incorrect name-server",
      "ACL blocking DNS",
    ],
    correctAnswer: 1,
    explanation:
      "The 'no ip dns server' command disables the local DNS server, preventing clients from resolving domain names locally.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'service timestamps log datetime' command adds timestamps to syslog messages.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'service timestamps log datetime' command adds date and time to syslog messages.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures a static NAT mapping with a port?",
    options: [
      "ip nat inside source static tcp 192.168.1.10 80 209.165.200.10 80",
      "ip nat inside source list 10 interface Gi0/0",
      "ip nat pool MYPOOL 209.165.200.10 80",
      "ip nat static 192.168.1.10 209.165.200.10",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip nat inside source static tcp 192.168.1.10 80 209.165.200.10 80' command maps a specific port for static NAT.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands verify DHCP client leases? (Choose two)",
    options: [
      "show ip dhcp binding",
      "show ip dhcp pool",
      "show ip dhcp server statistics",
      "show running-config",
      "show ip dhcp conflict",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show ip dhcp binding' shows active client leases, and 'show ip dhcp pool' displays pool usage details.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which QoS mechanism prioritizes traffic based on bandwidth allocation?",
    options: [
      "Policing",
      "Shaping",
      "Low Latency Queuing (LLQ)",
      "Weighted Fair Queuing (WFQ)",
    ],
    correctAnswer: 2,
    explanation:
      "Low Latency Queuing (LLQ) prioritizes traffic by allocating guaranteed bandwidth for high-priority traffic like VoIP.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "SNMP informs require acknowledgment from the management station.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. Unlike traps, SNMP informs require acknowledgment from the management station.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command sets the syslog host to 192.168.1.100 with severity level 5?",
    options: [
      "logging host 192.168.1.100 trap 5",
      "logging 192.168.1.100 level 5",
      "logging trap 5 host 192.168.1.100",
      "logging host 192.168.1.100 5",
    ],
    correctAnswer: 0,
    explanation:
      "The 'logging host 192.168.1.100 trap 5' command configures the syslog host with severity level 5 (notice).",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two protocols are supported by the 'ip helper-address' command? (Choose two)",
    options: ["DHCP", "DNS", "FTP", "SNMP", "NTP"],
    correctAnswer: [0, 1],
    explanation:
      "The 'ip helper-address' command forwards UDP broadcasts for DHCP and DNS (among others) to a specified server.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'ip dhcp pool' command?",
    options: [
      "Enable DHCP relay",
      "Configure DHCP server pool",
      "Exclude IP addresses",
      "Set DHCP client",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ip dhcp pool' command creates a DHCP pool for assigning IP addresses to clients.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "The 'ip nat pool' command is used for static NAT.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'ip nat pool' command is used for dynamic NAT, not static NAT.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command displays the NTP synchronization status?",
    options: [
      "show ntp status",
      "show ntp associations",
      "show ntp server",
      "show ntp sync",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show ntp status' command displays the NTP synchronization status, including stratum and reference clock.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure SNMP traps for interface events? (Choose two)",
    options: [
      "snmp-server enable traps link",
      "snmp-server host 192.168.1.100 traps MYCOMMUNITY",
      "snmp-server community MYCOMMUNITY",
      "snmp-server trap link-status",
      "snmp-server group MYGROUP v3",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'snmp-server enable traps link' enables interface event traps, and 'snmp-server host 192.168.1.100 traps MYCOMMUNITY' specifies the trap destination.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why is the QoS policy not applied?\n\nExhibit:\nclass-map match-all VOIP\n match dscp ef\npolicy-map VOIP\n class VOIP\n  priority percent 30\ninterface Gi0/0\n no service-policy input VOIP",
    options: [
      "Policy not applied",
      "Incorrect class-map",
      "DSCP mismatch",
      "Interface down",
    ],
    correctAnswer: 0,
    explanation:
      "The 'no service-policy input VOIP' command removes the QoS policy from the interface, preventing its application.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'ip dhcp conflict logging' command enables conflict detection.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'ip dhcp conflict logging' command enables logging of DHCP address conflicts.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command configures a router as an NTP master with stratum 5?",
    options: [
      "ntp master 5",
      "ntp server stratum 5",
      "ntp master stratum 5",
      "ntp source stratum 5",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ntp master 5' command configures the router as an NTP master with stratum 5.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands troubleshoot NAT issues? (Choose two)",
    options: [
      "debug ip nat",
      "show ip nat translations",
      "debug ip dhcp server",
      "show ip nat pool",
      "debug ip packet",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'debug ip nat' shows NAT translation events, and 'show ip nat translations' displays active translations.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the default syslog severity level for Cisco devices?",
    options: ["Informational (6)", "Debugging (7)", "Warning (4)", "Error (3)"],
    correctAnswer: 0,
    explanation:
      "The default syslog severity level for Cisco devices is Informational (6).",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "NAT overload supports multiple internal hosts sharing a single public IP.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. NAT overload (PAT) allows multiple internal hosts to share a single public IP using port numbers.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command enables DNS lookup on a Cisco router?",
    options: [
      "ip domain-lookup",
      "ip name-server 8.8.8.8",
      "ip dns enable",
      "dns lookup enable",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip domain-lookup' command enables DNS lookup on a Cisco router.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure QoS policing? (Choose two)",
    options: [
      "police 8000 conform-action transmit",
      "class-map POLICE",
      "policy-map POLICE",
      "match dscp ef",
      "priority percent 10",
    ],
    correctAnswer: [0, 2],
    explanation:
      "'police 8000 conform-action transmit' sets the policing rate, and 'policy-map POLICE' defines the QoS policy.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'logging buffered' command?",
    options: [
      "Send logs to a syslog server",
      "Store logs in memory",
      "Clear log messages",
      "Enable console logging",
    ],
    correctAnswer: 1,
    explanation:
      "The 'logging buffered' command stores log messages in the router’s memory buffer.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "The 'ip dhcp snooping' command enables DHCP snooping globally.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'ip dhcp snooping' command enables DHCP snooping globally on a switch.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures a DHCP pool with a lease of 12 hours?",
    options: ["lease 0 12 0", "lease 12", "ip dhcp lease 12", "lease 0 0 12"],
    correctAnswer: 0,
    explanation:
      "The 'lease 0 12 0' command sets the DHCP lease duration to 12 hours (0 days, 12 hours, 0 minutes).",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands enable SNMPv3 with encryption? (Choose two)",
    options: [
      "snmp-server group MYGROUP v3 priv",
      "snmp-server user MYUSER MYGROUP v3 auth md5 MYKEY priv aes 128 MYKEY",
      "snmp-server host 192.168.1.100 v3 auth",
      "snmp-server enable traps",
      "snmp-server community MYCOMMUNITY",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'snmp-server group MYGROUP v3 priv' enables encryption, and 'snmp-server user MYUSER ...' configures the user with AES encryption.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why is NTP not synchronizing?\n\nExhibit:\nntp server 192.168.1.100 key 1\nntp authentication-key 2 md5 MYKEY",
    options: [
      "Server unreachable",
      "Key mismatch",
      "Stratum too high",
      "Authentication disabled",
    ],
    correctAnswer: 1,
    explanation:
      "The NTP server is configured with key 1, but the authentication key is defined as key 2, causing a mismatch.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "The 'show logging' command displays buffered log messages.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'show logging' command displays log messages stored in the buffer.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures NAT to use a pool of public IPs?",
    options: [
      "ip nat inside source list 10 pool MYPOOL",
      "ip nat pool MYPOOL 209.165.200.1 209.165.200.10 netmask 255.255.255.0",
      "ip nat inside source static 192.168.1.10 209.165.200.10",
      "ip nat inside source list 10 interface Gi0/0",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip nat inside source list 10 pool MYPOOL' command maps internal IPs to a pool of public IPs.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands troubleshoot DHCP issues? (Choose two)",
    options: [
      "debug ip dhcp server events",
      "show ip dhcp binding",
      "debug ip nat",
      "show ip dhcp pool",
      "debug ip packet",
    ],
    correctAnswer: [0, 3],
    explanation:
      "'debug ip dhcp server events' shows DHCP server activity, and 'show ip dhcp pool' displays pool status.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "What is the purpose of the 'match protocol' command in a class-map?",
    options: [
      "Match VLAN tags",
      "Match application protocols",
      "Match DSCP values",
      "Match IP addresses",
    ],
    correctAnswer: 1,
    explanation:
      "The 'match protocol' command in a class-map matches application protocols (e.g., HTTP, FTP) for QoS classification.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "SNMPv3 supports both authentication and encryption.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. SNMPv3 supports authentication (auth) and encryption (priv) for secure communication.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command sets the default gateway in a DHCP pool?",
    options: [
      "default-router 192.168.1.1",
      "gateway 192.168.1.1",
      "ip default-gateway 192.168.1.1",
      "router 192.168.1.1",
    ],
    correctAnswer: 0,
    explanation:
      "The 'default-router 192.168.1.1' command sets the default gateway for clients in a DHCP pool.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure syslog to a remote host? (Choose two)",
    options: [
      "logging host 192.168.1.100",
      "logging trap 6",
      "logging console",
      "logging buffered",
      "logging on",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'logging host 192.168.1.100' specifies the syslog server, and 'logging trap 6' sets the severity level.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which QoS mechanism limits traffic to a specified rate?",
    options: ["Shaping", "LLQ", "WFQ", "Policing"],
    correctAnswer: 3,
    explanation:
      "Policing limits traffic to a specified rate, dropping or remarking packets that exceed the limit.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "The 'ip domain-name' command is required for DNS lookups.",
    options: ["True", "False"],
    correctAnswer: 1,
    explanation:
      "False. The 'ip domain-name' command is optional; DNS lookups work with 'ip name-server' and 'ip domain-lookup'.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command displays active SNMP traps?",
    options: [
      "show snmp",
      "show snmp trap",
      "show running-config",
      "show snmp host",
    ],
    correctAnswer: 3,
    explanation:
      "The 'show snmp host' command displays configured SNMP trap destinations and their status.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands configure DHCP snooping? (Choose two)",
    options: [
      "ip dhcp snooping",
      "ip dhcp snooping vlan 10",
      "ip dhcp relay",
      "ip helper-address 192.168.1.100",
      "ip dhcp snooping trust",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'ip dhcp snooping' enables DHCP snooping globally, and 'ip dhcp snooping vlan 10' enables it for VLAN 10.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Refer to the exhibit. Why is the NTP server not responding?\n\nExhibit:\nntp server 192.168.1.100 source Loopback0\ninterface Loopback0\n ip address 10.0.0.1 255.255.255.0\n no ntp source",
    options: [
      "Server unreachable",
      "Source interface down",
      "Authentication required",
      "Stratum mismatch",
    ],
    correctAnswer: 1,
    explanation:
      "The 'no ntp source' command on Loopback0 disables the specified source interface, preventing NTP communication.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'show ip dhcp conflict' command displays IP address conflicts.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'show ip dhcp conflict' command displays IP addresses flagged as conflicting in the DHCP pool.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command configures NAT overload with a specific pool?",
    options: [
      "ip nat inside source list 10 pool MYPOOL overload",
      "ip nat inside source static 192.168.1.10 209.165.200.10",
      "ip nat pool MYPOOL overload",
      "ip nat inside source list 10 interface Gi0/0",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip nat inside source list 10 pool MYPOOL overload' command enables NAT overload with a defined pool.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands enable QoS for video traffic? (Choose two)",
    options: [
      "class-map match-all VIDEO",
      "match dscp af41",
      "policy-map VIDEO",
      "priority percent 25",
      "match protocol http",
    ],
    correctAnswer: [1, 2],
    explanation:
      "'match dscp af41' classifies video traffic, and 'policy-map VIDEO' defines the QoS policy.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'ntp trusted-key' command?",
    options: [
      "Enable NTP server",
      "Specify trusted authentication key",
      "Set stratum level",
      "Configure NTP client",
    ],
    correctAnswer: 1,
    explanation:
      "The 'ntp trusted-key' command specifies which authentication key is trusted for NTP synchronization.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'logging synchronous' command prevents log messages from interrupting CLI input.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'logging synchronous' command ensures log messages do not interrupt CLI input.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command configures a router to use TFTP for file transfers?",
    options: [
      "tftp-server flash:config.txt",
      "ip tftp enable",
      "tftp source flash:config.txt",
      "tftp-server enable",
    ],
    correctAnswer: 0,
    explanation:
      "The 'tftp-server flash:config.txt' command configures the router as a TFTP server to share the specified file.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question: "Which two commands verify NTP configuration? (Choose two)",
    options: [
      "show ntp status",
      "show ntp associations",
      "show ntp server",
      "show running-config",
      "show ntp sync",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'show ntp status' shows synchronization status, and 'show ntp associations' displays server associations.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which QoS mechanism buffers excess traffic to avoid packet loss?",
    options: ["Policing", "Shaping", "LLQ", "WFQ"],
    correctAnswer: 1,
    explanation:
      "Shaping buffers excess traffic to smooth bursts, avoiding packet loss within the configured rate.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question: "The 'ip name-server' command specifies DNS servers for lookups.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'ip name-server' command specifies DNS server IPs for domain name resolution.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command enables SNMPv2c with a read-only community string?",
    options: [
      "snmp-server community MYCOMMUNITY RO",
      "snmp-server community MYCOMMUNITY RW",
      "snmp-server group MYGROUP v2c",
      "snmp-server host 192.168.1.100 MYCOMMUNITY",
    ],
    correctAnswer: 0,
    explanation:
      "The 'snmp-server community MYCOMMUNITY RO' command enables SNMPv2c with a read-only community string.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands configure a DHCP pool with options? (Choose two)",
    options: [
      "dns-server 8.8.8.8",
      "default-router 192.168.1.1",
      "ip dhcp pool MYPOOL",
      "lease 1",
      "ip helper-address 192.168.1.100",
    ],
    correctAnswer: [0, 1],
    explanation:
      "'dns-server 8.8.8.8' sets the DNS server, and 'default-router 192.168.1.1' sets the gateway in the DHCP pool.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "What is the purpose of the 'service-policy output' command?",
    options: [
      "Apply QoS policy to outgoing traffic",
      "Enable syslog",
      "Configure NAT",
      "Set DHCP options",
    ],
    correctAnswer: 0,
    explanation:
      "The 'service-policy output' command applies a QoS policy to outgoing traffic on an interface.",
  },
  {
    category: "IP Services",
    type: "truefalse",
    question:
      "The 'debug ip dhcp server packet' command shows DHCP packet details.",
    options: ["True", "False"],
    correctAnswer: 0,
    explanation:
      "True. The 'debug ip dhcp server packet' command displays detailed DHCP packet information.",
  },
  {
    category: "IP Services",
    type: "single",
    question:
      "Which command configures NAT to map an entire subnet dynamically?",
    options: [
      "ip nat inside source list 10 pool MYPOOL",
      "ip nat inside source static 192.168.1.0 209.165.200.0",
      "ip nat inside source list 10 interface Gi0/0 overload",
      "ip nat pool MYPOOL 192.168.1.0 192.168.1.255",
    ],
    correctAnswer: 0,
    explanation:
      "The 'ip nat inside source list 10 pool MYPOOL' command dynamically maps a subnet to a NAT pool.",
  },
  {
    category: "IP Services",
    type: "multiple",
    question:
      "Which two commands enable syslog timestamp precision? (Choose two)",
    options: [
      "service timestamps log datetime msec",
      "logging host 192.168.1.100",
      "service timestamps log uptime",
      "logging trap 6",
      "service timestamps log datetime",
    ],
    correctAnswer: [0, 4],
    explanation:
      "'service timestamps log datetime' adds timestamps, and 'service timestamps log datetime msec' includes millisecond precision.",
  },
  {
    category: "IP Services",
    type: "single",
    question: "Which command verifies the QoS policy applied to an interface?",
    options: [
      "show policy-map interface",
      "show class-map",
      "show policy-map",
      "show qos interface",
    ],
    correctAnswer: 0,
    explanation:
      "The 'show policy-map interface' command displays the QoS policy and statistics applied to an interface.",
  },
];
