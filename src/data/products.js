import hv600Img from '../assets/products/hv600.png';
import u1000Img from '../assets/products/u1000.png';
import ga700Img from '../assets/products/ga700.png';
import ga500pfImg from '../assets/products/ga500-pf.png';
import varispeedG7Img from '../assets/products/varispeed-g7.png';
import engineeredPanelsImg from '../assets/products/engineered-panel-solutions.png';

export const products = [
  // ==========================================
  // VFD / VSD (Variable Frequency Drives)
  // ==========================================
  {
    id: "hv600",
    name: "HV600 HVAC&R Drive",
    brand: "AGTPL / Partner Systems",
    category: "VFD / VSD",
    modelNumber: "HV600 Series (1.5 kW - 160 kW)",
    shortDescription: "Dedicated variable frequency drive engineered for HVAC building automation, fan, and pump control with native BACnet, Modbus, and Metasys protocols.",
    fullDescription: "The HV600 variable frequency drive is engineered specifically for commercial and industrial heating, ventilation, air conditioning, and refrigeration (HVAC&R) building automation. Available in IP20, IP55, and protected chassis enclosures, the HV600 features an intuitive Hand-Off-Auto LCD keypad, high-visibility 360° status ring, integrated real-time clock, and conformal coated boards. It delivers exceptional energy efficiency and seamless integration with Building Management Systems (BMS).",
    price: "Contact for Quote",
    availability: "In Stock / Engineered Delivery",
    image: hv600Img,
    specs: {
      "Voltage / Power Ratings": "480V Class: 1.5 kW to 160 kW (3-Phase)",
      "Enclosure Protection": "IP20 / UL Type 1, IP55 / UL Type 12 (washdown-tight)",
      "Operating Temperature": "-10°C to +60°C (with derating)",
      "Motor Control Methods": "V/f, Open Loop Vector (OLV) for Induction & PM Motors",
      "Embedded Protocols": "BACnet MS/TP, Modbus RTU, Johnson Controls Metasys N2",
      "Network Options": "BACnet/IP, LonWorks, Modbus TCP/IP, EtherNet/IP",
      "Safety Standards": "Safe Torque Off (STO), SIL3, PLe compliance",
      "Operator Keypad": "Hand-Off-Auto keypad with backlit LCD & Status Ring",
      "Coating Standard": "IEC 60721-3-3 Class 3C2 / 3S2 conformal coating"
    },
    features: [
      "Pre-configured HVAC application macros for supply fans, return fans, cooling towers, and circulating pumps",
      "DriveWizard Mobile app support via Bluetooth for rapid commissioning, parameter backup, and diagnostics",
      "High-visibility 360° Status Ring for immediate visual drive health indication across large plant rooms",
      "Independent dual PID controllers for auxiliary dampers, valve control, and differential pressure regulation",
      "Safe programming capability without requiring main three-phase AC power",
      "Side-by-side mounting design significantly minimizes control cabinet volume"
    ],
    applications: [
      "Chilled water and condenser water circulation pumps",
      "Air handling units (AHU) and supply / exhaust ventilation fans",
      "Cooling tower fan staging and variable speed draft fans",
      "Data center cooling infrastructure and cleanroom climate systems"
    ],
    accessories: [
      "Bluetooth-enabled LCD Hand-Off-Auto operator keypad",
      "BACnet/IP & EtherNet/IP multi-protocol communication cards",
      "Output AC reactors and dV/dt motor protection filters",
      "NEMA 1 conduit entry kits and flange mount kits"
    ],
    brochureUrl: "/downloads/hv600_datasheet.pdf",
    datasheetUrl: "/downloads/hv600_datasheet.pdf"
  },
  {
    id: "u1000",
    name: "U1000 Low Harmonics VFD",
    brand: "AGTPL / Partner Systems",
    category: "VFD / VSD",
    modelNumber: "U1000 Matrix Converter Series (3.7 kW - 400 kW)",
    shortDescription: "Ultra-low harmonics matrix converter drive providing clean power (<5% THD) and 4-quadrant regeneration without external harmonic filters or braking resistors.",
    fullDescription: "The U1000 is an advanced variable frequency drive based on cutting-edge direct AC-to-AC matrix conversion technology. By eliminating the electrolytic DC bus capacitor, the U1000 achieves sinusoidal input currents with less than 5% total harmonic distortion (THD) and near-unity power factor across broad operating ranges. It provides continuous 4-quadrant power regeneration directly back to the electrical network, cutting energy costs and reducing thermal load in electrical switchgear rooms.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: u1000Img,
    specs: {
      "Voltage / Power Ratings": "3-Phase 200V (3.7 to 45 kW) / 400V Class (up to 400 kW)",
      "Input Current Distortion": "<5% THDi at rated load (exceeds IEEE 519 compliance)",
      "Power Factor": "Near Unity (0.98 or higher across broad load range)",
      "Power Regeneration": "Continuous 4-Quadrant regenerative braking to grid",
      "Bus Technology": "Direct AC-to-AC matrix conversion (No DC bus capacitors)",
      "Functional Safety": "Safe Torque Off (SIL3 / PLe Category 3)",
      "Enclosure Protection": "IP00 / IP20 Protected Chassis",
      "Calculated MTBF": "28 Years estimated service life",
      "Short Circuit Rating": "100 kA SCCR with integrated input branch circuit fuses"
    },
    features: [
      "Eliminates the need for 12/18-pulse transformers, active front ends, or bulky passive harmonic filters",
      "Full four-quadrant power regeneration routes mechanical braking energy back to the plant electrical network",
      "Eco-Mode optimizes operating voltage dynamically to match motor load, maximizing energy savings",
      "Substantially lower heat rejection inside MCC rooms compared to conventional regenerative drive setups",
      "Built-in input branch circuit fuses deliver high short-circuit withstand rating (100 kA SCCR)",
      "Compact installation footprint saves valuable electrical room floor space"
    ],
    applications: [
      "Centrifuges, centrifugally loaded decanters, and test benches",
      "Overhead industrial cranes, hoists, and continuous descent conveyors",
      "High-inertia industrial blowers, kiln drives, and induced draft fans",
      "Hospital and commercial facilities with strict harmonic distortion constraints"
    ],
    accessories: [
      "Remote graphical LCD operator interface",
      "Modbus TCP / PROFINET / EtherNet/IP industrial gateway cards",
      "Floor-mount footprint adapter kits",
      "Input line monitoring transformers"
    ],
    brochureUrl: "/downloads/u1000_datasheet.pdf",
    datasheetUrl: "/downloads/u1000_datasheet.pdf"
  },
  {
    id: "ga700",
    name: "GA700 - Advanced Vector Control & IoT Drive",
    brand: "AGTPL / Partner Systems",
    category: "VFD / VSD",
    modelNumber: "GA700 Series (0.4 kW - 315 kW)",
    shortDescription: "High-performance vector AC drive combining precision control for Induction, PM, and Synchronous Reluctance motors with cloud-ready IoT integration.",
    fullDescription: "The GA700 provides exceptional motor control capability across the most demanding industrial processes. Engineered to run standard induction motors, permanent magnet motors, and synchronous reluctance motors with open- or closed-loop precision, it includes integrated functional safety (SIL3), high-resolution graphical keypad, 24V auxiliary power input, and seamless mobile Bluetooth configuration. Designed for maximum plant uptime and minimal maintenance.",
    price: "Contact for Quote",
    availability: "In Stock / Prompt Dispatch",
    image: ga700Img,
    specs: {
      "Capacity Range": "200V / 400V Class: 0.4 kW to 315 kW",
      "Motor Compatibility": "Induction (IM), Permanent Magnet (SPM/IPM), Synchronous Reluctance (SynRM)",
      "Control Methods": "Closed Loop Vector, Open Loop Vector, V/f, PM Vector",
      "Overload Rating": "Heavy Duty: 150% for 60s, Normal Duty: 110% for 60s",
      "Embedded Safety": "Safe Torque Off (SIL3 / PLe Cat 3)",
      "Auxiliary Control Power": "Embedded 24VDC input for uninterrupted communications",
      "Communication Protocols": "Modbus RTU embedded; EtherNet/IP, PROFINET, Modbus TCP, EtherCAT options",
      "DC Reactor": "Built-in DC Reactor for 30 kW ND and above",
      "Environmental Rating": "Coated PCBs complying with IEC 60721-3-3 (3C3, 3S3)"
    },
    features: [
      "One single drive platform to operate induction, permanent magnet, and synchronous reluctance motors",
      "Fast-acting current limiters prevent nuisance overcurrent trips during sudden mechanical load spikes",
      "DriveWizard Mobile & Cloud platform enables rapid setup, parameter archiving, and remote diagnostics",
      "24V auxiliary power input keeps network communication online even when main 3-phase power is disconnected",
      "Integrated Safe Torque Off (SIL3/PLe) simplifies machine safety designs and reduces external contactors",
      "12-pulse version option provides cost-effective harmonic mitigation on larger capacities"
    ],
    applications: [
      "Extruders, plastic injection molding, and rubber mills",
      "Heavy overhead cranes, hoists, and harbor container lifters",
      "Industrial sorting conveyors, bucket elevators, and crushers",
      "Pulp & paper processing, printing lines, and coil winders"
    ],
    accessories: [
      "High-resolution LCD keypad with Bluetooth connectivity",
      "Dynamic braking transistors and braking resistor units",
      "Speed feedback PG encoder interface cards",
      "EMC line noise filters and dV/dt output reactors"
    ],
    brochureUrl: "/downloads/ga700_datasheet.pdf",
    datasheetUrl: "/downloads/ga700_datasheet.pdf"
  },
  {
    id: "ga500-pf",
    name: "GA500-P&F Drive",
    brand: "AGTPL / Partner Systems",
    category: "VFD / VSD",
    modelNumber: "GA500-P&F Series (0.1 kW - 30 kW)",
    shortDescription: "Ultra-compact variable speed drive engineered for HVAC, pump, and fan applications with embedded multi-pump logic and conformal protection.",
    fullDescription: "The GA500-P&F delivers industrial-grade vector performance in an exceptionally compact footprint. Purpose-designed for pump and fan flow regulation in HVAC systems, commercial water pumping, and refrigeration, it features built-in multi-pump staging, sleep/wake algorithms, pipe fill protection, and robust conformal coating as standard for reliable operation in humid or dust-prone environments.",
    price: "Contact for Quote",
    availability: "In Stock",
    image: ga500pfImg,
    specs: {
      "Voltage / Power Range": "Single-Phase 200V (0.1-4 kW), 3-Phase 400V (0.4-30 kW)",
      "Motor Types": "Induction Motors (IM), Permanent Magnet (PM), SynRM",
      "Control Mode": "Open Loop Current Vector, V/f Control",
      "Enclosure & Protection": "IP20 / NEMA 1 with IEC 60721-3-3 (3C2, 3S2) conformal coating",
      "Functional Safety": "SIL3 (IEC 62061), PLe (ISO 13849-1) Safe Torque Off",
      "Fieldbus Connectivity": "Embedded Modbus RTU (RS-485), optional Ethernet adapters",
      "Operating Temperature": "-10°C to +50°C without derating (up to +60°C with derating)",
      "USB Interface": "No-power programming port via standard USB cable"
    },
    features: [
      "Integrated multi-pump staging logic manages lead-lag rotation and duty sharing without a PLC",
      "Dedicated pipe fill and anti-water-hammer sequencing protects municipal and building piping networks",
      "Compact chassis dimensions enable side-by-side DIN-rail mounting with minimal enclosure footprint",
      "No-power USB programming enables parameter cloning straight out of the box prior to installation",
      "Advanced open-loop vector algorithms deliver high starting torque without shaft encoders",
      "Energy-optimization mode continually minimizes motor flux for maximum operating efficiency"
    ],
    applications: [
      "Hydro-pneumatic booster pumping systems",
      "Submersible borehole pumps and wastewater transfer stations",
      "Commercial HVAC fan coil units and cooling tower circulation",
      "Agricultural irrigation pumping and greenhouse ventilation"
    ],
    accessories: [
      "Remote LED / LCD keypad extensions",
      "Compact EMC input line filters",
      "DIN-rail mounting brackets",
      "Modbus TCP / PROFINET communication modules"
    ],
    brochureUrl: "/downloads/ga500_datasheet.pdf",
    datasheetUrl: "/downloads/ga500_datasheet.pdf"
  },
  {
    id: "varispeed-g7",
    name: "Varispeed G7 - 3 Level control method",
    brand: "AGTPL / Partner Systems",
    category: "VFD / VSD",
    modelNumber: "Varispeed G7 Series (0.4 kW - 300 kW)",
    shortDescription: "World's premier 400V 3-level low-voltage inverter eliminating motor surge voltage, protecting motor winding insulation, and minimizing acoustic noise.",
    fullDescription: "The Varispeed G7 is an innovative low-voltage inverter utilizing a patented 3-level dual-bridge power architecture. By halving output voltage step increments (reducing dV/dt), the G7 effectively eliminates terminal surge voltage spikes on motor windings, preventing insulation breakdown even over extended cable lengths up to 300 meters without external output reactors. It delivers ultra-quiet acoustic motor operation and low micro-surge leakage currents across capacities from 0.4 kW to 300 kW.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: varispeedG7Img,
    specs: {
      "Voltage / Power Range": "200V / 400V Class: 0.4 kW to 300 kW",
      "Inverter Architecture": "3-Level Dual-Bridge Inverter topology",
      "Output dV/dt Reduction": "Over 50% lower voltage rate-of-rise vs. conventional 2-level drives",
      "Motor Cable Run": "Up to 300+ meters without AC output reactors or sine-wave filters",
      "Acoustic Noise": "Significantly reduced audible motor pitch and magnetic hum",
      "Overload Capacity": "Heavy Duty: 150% for 60 seconds, 200% peak torque",
      "Operator Keypad": "Backlit 5-line x 16-character LCD display supporting multiple languages",
      "International Marks": "UL / cUL listed, CE certified"
    },
    features: [
      "3-level power conversion topology prevents micro-surge insulation damage on general-purpose motors",
      "Substantially suppresses high-frequency motor bearing currents and shaft voltages, extending bearing life",
      "High-speed speed-search function instantly catches coasting motors during momentary grid voltage dips",
      "Precise torque limiting algorithms protect driving mechanisms against unexpected mechanical binding",
      "Allows retrofit of older standard-insulated motors without expensive motor replacements or line filters",
      "Backlit multi-language LCD keypad includes easy-to-use parameter copy and verify functions"
    ],
    applications: [
      "Deep-well submersible pumps with long cable runs",
      "Textile spinning frames, ring frames, and yarn winders",
      "Chemical manufacturing and mining facilities with long distance motor cabling",
      "Acoustically sensitive institutional environments like hospitals and luxury hotels"
    ],
    accessories: [
      "Remote mount cable kits for LCD keypad",
      "Profibus-DP, DeviceNet, and Modbus communication adapters",
      "Braking chopper units and dynamic braking resistors",
      "Flange mounting kits for external heatsink cooling"
    ],
    brochureUrl: "/downloads/varispeed_g7_datasheet.pdf",
    datasheetUrl: "/downloads/varispeed_g7_datasheet.pdf"
  },
  {
    id: "engineered-panel-solutions",
    name: "Engineered Panel Solutions",
    brand: "AGTPL Engineering",
    category: "VFD / VSD",
    modelNumber: "AGT-EPS Custom Automation Enclosures",
    shortDescription: "Turnkey custom-engineered VFD panels, MCC enclosures, and automation cabinets built with bypass switchgear, harmonic filters, and SCADA integration.",
    fullDescription: "Ascent Green Technologies Pvt. Ltd. engineers, fabricates, and commissions turnkey variable frequency drive panels and motor control centers (MCC) built to precise industrial requirements. Compliant with IEC 60439 and IEC 60529 standards, AGTPL panels incorporate robust CRCA sheet steel construction, physical segregation of power, control, and communication buses for guaranteed EMI noise immunity, forced cooling or climate control, and comprehensive 100% factory acceptance testing.",
    price: "Custom Engineered / Quote on Request",
    availability: "Built to Project Specifications",
    image: engineeredPanelsImg,
    specs: {
      "Design Compliance": "IEC 60439-1 (Low Voltage Switchgear), IEC 60529, IEC 61800-2",
      "Ingress Protection": "IP42 / IP52 / IP54 / IP55 (Floor-standing or Wall-mounting)",
      "Power Capacity": "Custom configurations from 0.75 kW up to 1200 kW",
      "Sheet Steel Thickness": "1.6mm / 2.0mm CRCA sheet steel with 7-tank powder coating (RAL 7035)",
      "Bypass Architecture": "Manual / Automatic 3-Contactor Bypass with mechanical & electrical interlocks",
      "Harmonic Mitigation": "Active harmonic filters (AHF), passive tuned filters, or multi-pulse arrangements",
      "Thermal Management": "Forced filtered ventilation, exhaust roof fans, or industrial panel air conditioners",
      "Quality Standard": "100% Factory Acceptance Tested (FAT) with comprehensive insulation & load tests"
    },
    features: [
      "Complete turnkey fabrication and commissioning executed in-house by AGTPL automation engineers",
      "Strict physical separation of power lines, control cabling, and digital communications ensures noise-free signals",
      "Comprehensive instrumentation including multifunction digital energy meters, status beacons, and HMI screens",
      "Bypass arrangements ensure uninterrupted motor operation during VFD servicing or maintenance intervals",
      "Seamless communication integration with plant DCS, SCADA, or Building Management Systems via Modbus/Ethernet",
      "Complete engineering documentation package supplied including SLD, GA drawings, and test certificates"
    ],
    applications: [
      "Commercial HVAC primary and secondary chilled water pumping stations",
      "Municipal water treatment plants, intake wells, and STP/ETP lift stations",
      "Cement kiln ID fans, raw mill exhaust fans, and baghouse blowers",
      "Automated plant conveyor lines, material handling systems, and mixing tanks"
    ],
    accessories: [
      "Color touchscreen HMI panels (7-inch to 15-inch)",
      "Industrial panel air conditioning units for high-ambient environments",
      "Active Harmonic Filter (AHF) add-on modules",
      "Automatic changeover PLC controllers for duty / standby systems"
    ],
    brochureUrl: "/downloads/engineered_panel_brochure.pdf",
    datasheetUrl: "/downloads/engineered_panel_datasheet.pdf"
  },

  // ==========================================
  // MOTORS
  // ==========================================
  {
    id: "abb-ie3-motor",
    name: "ABB Low Voltage IE3 Motor",
    brand: "ABB",
    category: "Motors",
    modelNumber: "M3BP 160 MLA",
    shortDescription: "Ultra-reliable low-voltage process performance motor with IE3 premium efficiency class, perfect for severe duty industries.",
    fullDescription: "ABB's process performance cast iron motors are designed for harsh environments and demanding applications. Combining premium IE3 efficiency with robust construction, these motors ensure low lifecycle cost, high reliability, and excellent energy savings.",
    price: "Contact for Quote",
    availability: "In Stock",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600",
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
    price: "Contact for Quote",
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

  // ==========================================
  // PUMPS
  // ==========================================
  {
    id: "ksb-megachem-pump",
    name: "KSB MegaChem Standard Chemical Pump",
    brand: "KSB",
    category: "Pumps",
    modelNumber: "MegaChem 100-250",
    shortDescription: "Horizontal single-stage volute casing pump designed to process aggressive, volatile, and viscous chemicals.",
    fullDescription: "The KSB MegaChem is a premium standard chemical pump engineered to meet the highest safety and process demands. Designed according to ISO 2858 and ISO 5199 standards, it handles highly aggressive chemicals, hydrocarbons, and viscous fluids with absolute containment and efficiency.",
    price: "Contact for Quote",
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
    price: "Contact for Quote",
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
