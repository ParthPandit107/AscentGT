export const products = [
  {
    id: "abb-ie3-motor",
    name: "ABB Low Voltage IE3 Motor",
    brand: "ABB",
    category: "Motors",
    modelNumber: "M3BP 160 MLA",
    shortDescription: "Ultra-reliable low-voltage process performance motor with IE3 premium efficiency class, perfect for severe duty industries.",
    fullDescription: "ABB's process performance cast iron motors are designed for harsh environments and demanding applications. Combining premium IE3 efficiency with robust construction, these motors ensure low lifecycle cost, high reliability, and excellent energy savings.",
    price: "₹85,000",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600", // Placeholder but high quality
    specs: {
      "Output Power": "11 kW (15 HP)",
      "Speed": "1475 RPM",
      "Voltage": "415V, 3-Phase",
      "Frequency": "50 Hz",
      "Frame Size": "160M",
      "Mounting": "Foot Mounted (IM B3)",
      "Enclosure Protection": "IP55 / IP56",
      "Cooling": "IC 411 (TEFC)",
      "Insulation Class": "Class F"
    },
    features: [
      "IE3 Premium efficiency rating according to IEC 60034-30-1",
      "Rigid cast iron frame design to minimize vibration and prevent resonance",
      "Advanced dust and water resistance with IP55 protection standard",
      "Designed for severe-duty operation in mines, paper mills, and chemical facilities",
      "Equipped with insulated bearings on non-drive end to prevent electrical erosion"
    ],
    applications: [
      "Industrial pumps and fluid systems",
      "Conveyors and material handling systems",
      "Heavy duty fans and blowers",
      "Compressors and mixers in chemical plants"
    ],
    accessories: [
      "Vibration monitoring sensors",
      "Pt100 temperature sensors for windings and bearings",
      "Rain covers for outdoor vertical installation",
      "Shaft grounding rings for VFD operation"
    ],
    brochureUrl: "/downloads/abb_ie3_motor_brochure.pdf",
    datasheetUrl: "/downloads/abb_ie3_motor_datasheet.pdf"
  },
  {
    id: "abb-ie4-motor",
    name: "ABB IE4 Super Premium Motor",
    brand: "ABB",
    category: "Motors",
    modelNumber: "M3BP 200 MLA",
    shortDescription: "Super premium efficiency IE4 cast iron motor offering maximum energy savings and minimized greenhouse gas emissions.",
    fullDescription: "ABB's IE4 super premium efficiency motors represent the vanguard of sustainable industrial performance. Designed for applications with high run-times, these motors deliver substantial energy cost reductions, running cooler and lasting longer than standard machinery.",
    price: "₹1,45,000",
    availability: "Available on Order (2-3 Weeks)",
    image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&q=80&w=600",
    specs: {
      "Output Power": "30 kW (40 HP)",
      "Speed": "2965 RPM",
      "Voltage": "415V, 3-Phase",
      "Frequency": "50 Hz",
      "Frame Size": "200L",
      "Mounting": "Flange Mounted (IM B5)",
      "Enclosure Protection": "IP55 / IP65 Option",
      "Cooling": "IC 411 (TEFC)",
      "Insulation Class": "Class H"
    },
    features: [
      "IE4 Super Premium efficiency class for lowest operating costs",
      "Cooler running temperature extends bearing and insulation lifespan",
      "Low noise levels for improved working environment",
      "Optimized for variable speed drive (VFD) operations",
      "Global warranty and support from ABB network"
    ],
    applications: [
      "Continuous run HVAC air handlers",
      "Municipal water pump stations",
      "Extruders and plastic machinery",
      "Refining mill drives"
    ],
    accessories: [
      "Insulated bearings",
      "Enclosure heating elements for condensation control",
      "Custom terminal boxes",
      "Force ventilation units for low-speed operations"
    ],
    brochureUrl: "/downloads/abb_ie4_motor_brochure.pdf",
    datasheetUrl: "/downloads/abb_ie4_motor_datasheet.pdf"
  },
  {
    id: "yaskawa-ga700-vfd",
    name: "Yaskawa GA700 High Performance Drive",
    brand: "Yaskawa",
    category: "Drives",
    modelNumber: "GA70C4023ABA",
    shortDescription: "High-performance AC drive combining powerful motor control with advanced network integration and ease of use.",
    fullDescription: "The Yaskawa GA700 is a versatile, high-performance industrial AC drive designed to control induction, permanent magnet, and synchronous reluctance motors. With built-in functional safety, cloud-ready mobile apps, and absolute programming flexibility, it is the ultimate motor control solution.",
    price: "₹62,000",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1597491829127-ec457b91d6b2?auto=format&fit=crop&q=80&w=600",
    specs: {
      "Rated Current": "23 Amps",
      "Applicable Motor Capacity": "11 kW (15 HP) Heavy Duty",
      "Input Voltage": "380-480V, 3-Phase",
      "Control Method": "V/f, Open Loop Vector, Closed Loop Vector",
      "Safety Rating": "SIL3 / PLe (STO)",
      "Communication": "Modbus RTU, EtherNet/IP, PROFINET, EtherCAT options",
      "Enclosure": "IP20 / NEMA 1 Type"
    },
    features: [
      "Flexible motor control: runs induction, PM, and SynRM motors",
      "Smart programming with intuitive keypad and mobile app connection via Bluetooth",
      "Embedded functional safety reducing component count in system design",
      "Integrated braking transistor for high cyclic deceleration rates",
      "Coated circuit boards as standard for dust and moisture resistance"
    ],
    applications: [
      "Hoists, cranes, and lifting systems",
      "Conveyor networks and sorting machines",
      "Fans, blowers, and industrial ventilation",
      "Compressors and positive displacement pumps"
    ],
    accessories: [
      "LCD Operator interface with Bluetooth",
      "Braking resistors",
      "Input/Output reactors for harmonic mitigation",
      "Feedback encoder PG cards"
    ],
    brochureUrl: "/downloads/yaskawa_ga700_brochure.pdf",
    datasheetUrl: "/downloads/yaskawa_ga700_datasheet.pdf"
  },
  {
    id: "yaskawa-v1000-vfd",
    name: "Yaskawa V1000 Compact Drive",
    brand: "Yaskawa",
    category: "Drives",
    modelNumber: "V1000-4A0009FAA",
    shortDescription: "General-purpose micro-vector drive offering exceptional reliability, compact design, and simple installation.",
    fullDescription: "Yaskawa's V1000 is a compact, high-quality vector drive designed for general-purpose application. Featuring sensorless vector control, dual-rating (Normal/Heavy duty), and a design lifetime of over 10 years, it provides unmatched reliability in a space-saving footprint.",
    price: "₹34,000",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600",
    specs: {
      "Rated Current": "9.2 Amps",
      "Applicable Motor Capacity": "3.7 kW (5 HP) Heavy Duty",
      "Input Voltage": "380-480V, 3-Phase",
      "Control Method": "Open Loop Vector, V/f Control",
      "Design Life": "10+ Years",
      "Communication": "Modbus RTU (Standard), DeviceNet, Profibus options",
      "Enclosure": "IP20 / NEMA 1"
    },
    features: [
      "Ultra-compact dimensions with side-by-side mounting capability",
      "High starting torque (200% at 0.5Hz) using open loop vector control",
      "Quick-setup parameters for plug-and-play installation",
      "Built-in functional safety (Safe Torque Off - STO)",
      "Maintenance monitors notify when fans or capacitors need replacement"
    ],
    applications: [
      "Packaging machines and labeling systems",
      "Conveyors and small material handlers",
      "Food processing mixers and grinders",
      "Small pumps and circulation loops"
    ],
    accessories: [
      "Remote LED display operator keypad",
      "EMC line noise filter",
      "Braking units",
      "DIN rail mounting kits"
    ],
    brochureUrl: "/downloads/yaskawa_v1000_brochure.pdf",
    datasheetUrl: "/downloads/yaskawa_v1000_datasheet.pdf"
  },
  {
    id: "ksb-megachem-pump",
    name: "KSB MegaChem Standard Chemical Pump",
    brand: "KSB",
    category: "Pumps",
    modelNumber: "MegaChem 100-250",
    shortDescription: "Horizontal single-stage volute casing pump designed to process aggressive, volatile, and viscous chemicals.",
    fullDescription: "The KSB MegaChem is a premium standard chemical pump engineered to meet the highest safety and process demands. Designed according to ISO 2858 and ISO 5199 standards, it handles highly aggressive chemicals, hydrocarbons, and viscous fluids with absolute containment and efficiency.",
    price: "₹1,95,000",
    availability: "Available on Order (4 Weeks)",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=600",
    specs: {
      "Max Flow Rate": "350 m³/h",
      "Max Discharge Head": "110 meters",
      "Operating Temperature": "-30°C to +300°C",
      "Max Operating Pressure": "16 bar",
      "Casing Material": "Stainless Steel 1.4408 (CF8M) / Cast Steel",
      "Shaft Seal": "Single / Double Mechanical Seal",
      "Impeller Type": "Closed Impeller"
    },
    features: [
      "Complies fully with ISO 2858 and ISO 5199 chemical pump specifications",
      "Heavy-duty shaft with minimized deflection increases mechanical seal life",
      "Back pull-out design allows impeller inspection without piping removal",
      "Corrosion-resistant materials handle aggressive acids, alkalis, and solvents",
      "Heating jacket options available for high-viscosity media handling"
    ],
    applications: [
      "Chemical manufacturing and oil processing",
      "Petrochemical and gas refining",
      "Pharmaceutical production facilities",
      "Industrial process heat loops"
    ],
    accessories: [
      "Double cartridge mechanical seals",
      "Seal support flush systems (API Plan 11/53)",
      "Bearing temperature sensors",
      "Pump-motor shaft couplings and guard"
    ],
    brochureUrl: "/downloads/ksb_megachem_brochure.pdf",
    datasheetUrl: "/downloads/ksb_megachem_datasheet.pdf"
  },
  {
    id: "ksb-amarex-pump",
    name: "KSB Amarex KRT Submersible Pump",
    brand: "KSB",
    category: "Pumps",
    modelNumber: "Amarex KRT F 100-250",
    shortDescription: "Submersible motor pump for raw municipal and industrial wastewater containing solids, fibers, and sludge.",
    fullDescription: "The KSB Amarex KRT is a robust submersible motor pump designed for handling untreated sewage, wastewater containing long fibers, solids, and sludge. Equipped with clog-resistant impellers and explosion-proof motors, it ensures block-free operation in the toughest wet-well conditions.",
    price: "₹2,10,000",
    availability: "Available on Order (3 Weeks)",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600",
    specs: {
      "Max Flow Rate": "280 m³/h",
      "Max Discharge Head": "45 meters",
      "Motor Rating": "7.5 kW to 30 kW",
      "Impeller Type": "F-max (Vortex), D-max (Single-channel), K-max (Non-clogging)",
      "Material": "Cast Iron / Duplex Stainless Steel (Option)",
      "Protection Class": "IP68, Ex d IIB T4",
      "Installation Type": "Wet-well with guide rails / Dry-well vertical"
    },
    features: [
      "Explosion-proof ATEX-certified motor as standard",
      "Custom impeller designs optimized for solid passage to prevent clogging",
      "Eco-friendly, water-cooled shaft chamber avoids fluid contamination",
      "Dual mechanical seals with oil reservoir ensure dry motor protection",
      "Pre-assembled duckfoot duck coupling for easy installation and removal"
    ],
    applications: [
      "Municipal sewage pumping stations",
      "Wastewater treatment plants",
      "Flood control and stormwater collection",
      "Industrial effluent and slurry drainage"
    ],
    accessories: [
      "Duckfoot bend and guide rail brackets",
      "Moisture sensors for motor housing leak detection",
      "Chain and shackle installation kits",
      "Submersible power cable with plug"
    ],
    brochureUrl: "/downloads/ksb_amarex_brochure.pdf",
    datasheetUrl: "/downloads/ksb_amarex_datasheet.pdf"
  }
];
