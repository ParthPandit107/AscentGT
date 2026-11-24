import moviboostKtVtVptImg from '../assets/products/pumps/moviboost-kt-vt-vpt.png';
import moviboostDualKhmImg from '../assets/products/pumps/moviboost-dual-khm.png';
import movitecBImg from '../assets/products/pumps/movitec-b.png';
import etanormEtanormGImg from '../assets/products/pumps/etanorm-etanorm-g.png';
import etablocImg from '../assets/products/pumps/etabloc.png';
import etalineImg from '../assets/products/pumps/etaline.png';
import omegaGammaImg from '../assets/products/pumps/omega-gamma.png';
import megaCpkImg from '../assets/products/pumps/mega-cpk.png';
import etalineProImg from '../assets/products/pumps/etaline-pro.png';
import calioproImg from '../assets/products/pumps/caliopro.png';
import calioSImg from '../assets/products/pumps/calio-s.png';
import khmMakeUpImg from '../assets/products/pumps/khm-make-up.png';
import ultraPlusFfImg from '../assets/products/pumps/ultra-plus-ff.png';
import borewellSubmersiblePumpsImg from '../assets/products/pumps/borewell-submersible-pumps.png';
import amaDrainerImg from '../assets/products/pumps/ama-drainer.png';
import amaPorterImg from '../assets/products/pumps/ama-porter.png';
import amarexInKrtuImg from '../assets/products/pumps/amarex-in-krtu.png';
import mfmoVHImg from '../assets/products/pumps/mfmo-v-h.png';
import wkWlMssoImg from '../assets/products/pumps/wk-wl-msso.png';
import megaFirePumpImg from '../assets/products/pumps/mega-fire-pump.png';
import listedFirePumpsetsImg from '../assets/products/pumps/listed-fire-pumpsets.png';

export const pumpReferenceProjects = [
  { name: "Burj Khalifa", location: "Dubai", highlight: "31 Omega cooling pumps" },
  { name: "Hotel Taj", location: "Jaipur & Goa", highlight: "HVAC & water supply" },
  { name: "Surat International Airport", location: "Surat", highlight: "Terminal fluid systems" },
  { name: "CARO Hyderabad", location: "Hyderabad", highlight: "Pumping & pressure booster" },
  { name: "HAL Bangalore", location: "Bangalore", highlight: "Industrial process water" },
  { name: "Bosch Bangalore", location: "Bangalore", highlight: "High-efficiency pumping" },
  { name: "Coca-Cola", location: "Bhubaneshwar, Sanand & Hajipur", highlight: "Process & utility pumps" },
  { name: "Baskin Robbins", location: "Pune", highlight: "Cold-chain water systems" },
  { name: "RBI Colony", location: "Raipur", highlight: "Residential water supply" },
  { name: "MIT College", location: "Pune", highlight: "Campus water & booster" },
  { name: "Enzene Biosciences", location: "Pune", highlight: "Pharma process fluids" }
];

export const pumpSubCategories = [
  "Pressure Boosting & High-Pressure",
  "Water Supply, HVAC & General Building Services",
  "Drainage & Sewage",
  "Firefighting Pumps"
];

export const pumps = [
  // ==========================================
  // CATEGORY A – Pressure Boosting & High-Pressure
  // ==========================================
  {
    id: "moviboost-kt-vt-vpt",
    name: "MoviBOOST Kt / Vt / VPt (Hydropneumatic System)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Pressure Boosting & High-Pressure",
    categories: ["Pressure Boosting & High-Pressure"],
    modelNumber: "MoviBOOST Kt / Vt / VPt Series",
    rating: "Capacity up to 800 m³/hr | Head up to 250 m | 40 bar",
    shortDescription: "Fully automatic pressure boosting units in three variants with 2 to 6 vertical in-line high-pressure pumps and fully electronic control of supply pressure.",
    fullDescription: "Fully automatic pressure boosting units in three variants with 2 to 6 vertical in-line high-pressure pumps, fully electronic control of supply pressure, standard volt-free contacts for fault indication and status.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: moviboostKtVtVptImg,
    specs: {
      "Configuration": "2 to 6 vertical in-line high-pressure pumps",
      "Variants": "Kt, Vt, VPt",
      "Control System": "Fully electronic control of supply pressure",
      "Fault Indication": "Standard volt-free contacts for fault indication and status",
      "Capacity": "up to 800 m³/hr",
      "Head": "up to 250 m",
      "Discharge Pressure": "40 bar",
      "Temperature": "up to 140 °C"
    },
    features: [
      "Fully automatic pressure boosting units available in three variants (Kt, Vt, VPt)",
      "Engineered with 2 to 6 vertical in-line high-pressure pumps in parallel staging",
      "Fully electronic control of supply pressure guarantees steady hydraulic line pressure",
      "Standard volt-free contacts for remote fault indication and operational status signalling",
      "Factory-tested skidded assembly minimizes civil works and site installation time"
    ],
    applications: [
      "Residential & commercial buildings",
      "Hospitals and hotels",
      "Departmental stores",
      "Airports and metro stations",
      "Convention centres and sport complexes"
    ],
    applicationTags: ["Pressure Boosting", "Water Supply", "High-Rise", "Hospitals", "Hotels", "Airports", "Metro Stations"],
    accessories: [
      "Diaphragm expansion tank",
      "Dual pressure transmitter package",
      "BMS communication gateway",
      "Anti-vibration base isolators"
    ],
    brochureUrl: "/downloads/ksb_moviboost_brochure.pdf"
  },
  {
    id: "moviboost-dual-khm",
    name: "MoviBOOST Dual – KHM (Pressure Booster System)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Pressure Boosting & High-Pressure",
    categories: ["Pressure Boosting & High-Pressure"],
    modelNumber: "MoviBOOST Dual - KHM",
    rating: "Capacity up to 14 m³/hr | Head up to 54 m | 10 bar",
    shortDescription: "Two identical horizontal multistage KHM pumps in parallel for variable flow pressure boosting with accessories on a common base plate.",
    fullDescription: "Two identical horizontal multistage KHM pumps in parallel for variable flow; includes accessories and piping on a common base plate, optional water tank, pressure sensors, control panel.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: moviboostDualKhmImg,
    specs: {
      "Configuration": "Two identical horizontal multistage KHM pumps in parallel for variable flow",
      "Mounting": "Accessories and piping on a common base plate",
      "Capacity": "up to 14 m³/hr",
      "Head": "up to 54 m",
      "Discharge Pressure": "10 bar",
      "Temperature": "up to 70 °C",
      "System Options": "Optional water tank, pressure sensors, control panel"
    },
    features: [
      "Twin horizontal multistage KHM pumps connected in parallel for variable flow duty",
      "Complete assembly including manifold piping and accessories on a common base plate",
      "Integrated control panel with duty-sharing and lead/lag alternation",
      "Optional water break tank integration for buffer capacity",
      "Precision pressure sensors ensure rapid response to system demand changes"
    ],
    applications: [
      "Residential apartment complexes and villas",
      "Commercial office buildings and hotels",
      "Light industrial variable flow booster service",
      "Domestic water supply boosting"
    ],
    applicationTags: ["Pressure Boosting", "Water Supply", "Hotels", "High-Rise"],
    accessories: [
      "Break tank buffer reservoir",
      "Pressure sensor kit",
      "Non-return check valves",
      "Compact control panel"
    ],
    brochureUrl: "/downloads/ksb_moviboost_dual_khm_brochure.pdf"
  },
  {
    id: "movitec-b",
    name: "Movitec B (High Pressure In-line Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Pressure Boosting & High-Pressure",
    categories: ["Pressure Boosting & High-Pressure", "Water Supply, HVAC & General Building Services", "Firefighting Pumps"],
    modelNumber: "Movitec B Series",
    rating: "Capacity up to 125 m³/hr (160 m³/hr Fire) | Head up to 228 m (250 m Fire)",
    shortDescription: "Multistage vertical in-line high-pressure centrifugal pump, ring-section design, also available with KSB PumpDrive and IE5 magnetless motor.",
    fullDescription: "Multistage vertical in-line high-pressure centrifugal pump, ring-section design. Also available with KSB PumpDrive and IE5 magnetless synchronous reluctance motor. Applications: general water supply, sprinkling, irrigation, pressure boosting, warm/hot/cooling water re-circulation, boiler feed, domestic water supply, washing plants. Firefighting variant: up to 160 m³/hr, 250 m.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: movitecBImg,
    specs: {
      "Design": "Multistage vertical in-line high-pressure centrifugal pump, ring-section design",
      "Drive Options": "Available with KSB PumpDrive and IE5 magnetless synchronous reluctance motor",
      "Pump Sizes": "2, 4, 6, 10, 15, 25, 40, 60, 90, 125",
      "Capacity": "up to 125 m³/hr (Firefighting variant: up to 160 m³/hr)",
      "Head": "up to 228 m (Firefighting variant: up to 250 m)",
      "Discharge Pressure": "25 bar",
      "Temperature": "-20 to 140 °C"
    },
    features: [
      "Ring-section multistage vertical in-line centrifugal pump design",
      "Compatible with KSB PumpDrive variable speed control",
      "Available with ultra-efficient IE5 magnetless synchronous reluctance motor",
      "Available across sizes 2, 4, 6, 10, 15, 25, 40, 60, 90, and 125",
      "Dedicated firefighting variant delivers capacities up to 160 m³/hr and head up to 250 m",
      "Cartridge mechanical seal allows rapid servicing without removing motor"
    ],
    applications: [
      "General water supply, sprinkling, and irrigation",
      "Pressure boosting and boiler feed",
      "Warm/hot/cooling water re-circulation",
      "Domestic water supply and washing plants",
      "Firefighting systems"
    ],
    applicationTags: ["Pressure Boosting", "Water Supply", "HVAC", "Firefighting", "Irrigation", "Boiler Feed", "Industry", "Hospitals", "High-Rise"],
    accessories: [
      "KSB PumpDrive variable speed unit",
      "Cartridge mechanical seal",
      "Counter flanges (oval and round)",
      "Bypass orifice fitting"
    ],
    brochureUrl: "/downloads/ksb_movitec_b_brochure.pdf"
  },

  // ==========================================
  // CATEGORY B – Water Supply, HVAC & General Building Services
  // ==========================================
  {
    id: "etanorm-etanorm-g",
    name: "Etanorm (End Suction Pump, Etanorm G)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services", "Firefighting Pumps"],
    modelNumber: "Etanorm / Etanorm G",
    rating: "Capacity up to 660 m³/hr | Head up to 160 m | 16 bar",
    shortDescription: "Horizontal, end suction, radially split volute casing, back-pull-out design, single-stage radial impeller pump.",
    fullDescription: "Horizontal, end suction, radially split volute casing, back-pull-out design, single-stage radial impeller. Applications: general water supply, sprinkling, irrigation, booster plants, circulation of warm/hot/cooling water, condensate and boiler-feed water, firefighting.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: etanormEtanormGImg,
    specs: {
      "Design": "Horizontal, end suction, radially split volute casing, back-pull-out design, single-stage radial impeller",
      "Discharge Size": "DN 25–150 mm",
      "Capacity": "up to 660 m³/hr",
      "Head": "up to 160 m",
      "Discharge Pressure": "16 bar",
      "Temperature": "-30 to 140 °C",
      "Speed": "up to 2900 rpm"
    },
    features: [
      "Back-pull-out design allows casing to remain in piping during impeller maintenance",
      "Radially split volute casing with replaceable casing wear rings",
      "Single-stage radial impeller optimized for peak energy efficiency",
      "Proven global reliability benchmark for water utilities and HVAC circuits",
      "Operates up to 2900 rpm and temperatures from -30 °C to 140 °C"
    ],
    applications: [
      "General water supply, sprinkling, and irrigation",
      "Booster plants and municipal distribution",
      "Circulation of warm/hot/cooling water",
      "Condensate and boiler-feed water",
      "Firefighting"
    ],
    applicationTags: ["Water Supply", "HVAC", "Firefighting", "Irrigation", "Boiler Feed", "Industry", "Hospitals", "Hotels"],
    accessories: [
      "Spacer coupling and guard",
      "Casing wear rings",
      "Baseplate assembly",
      "PumpDrive / PumpMeter"
    ],
    brochureUrl: "/downloads/ksb_etanorm_brochure.pdf"
  },
  {
    id: "etabloc",
    name: "Etabloc (Closed Coupled Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services", "Firefighting Pumps"],
    modelNumber: "Etabloc Series",
    rating: "Capacity up to 640 m³/hr | Head up to 160 m | 16 bar",
    shortDescription: "Compact horizontal end suction, radially split volute casing, monobloc construction pump.",
    fullDescription: "Compact horizontal end suction, radially split volute casing, monobloc construction. Same applications as Etanorm: general water supply, sprinkling, irrigation, booster plants, circulation of warm/hot/cooling water, condensate and boiler-feed water, firefighting.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: etablocImg,
    specs: {
      "Design": "Compact horizontal end suction, radially split volute casing, monobloc construction",
      "Discharge Size": "25–150 mm",
      "Capacity": "up to 640 m³/hr",
      "Head": "up to 160 m",
      "Discharge Pressure": "16 bar",
      "Temperature": "-30 to 140 °C",
      "Speed": "up to 2900 rpm"
    },
    features: [
      "Close-coupled monobloc construction eliminates coupling alignment procedures",
      "Saves significant floor space in compact plant rooms and skid packages",
      "Shared hydraulic profile with Etanorm for high operating efficiency",
      "Handles fluids from -30 °C to 140 °C at pressures up to 16 bar"
    ],
    applications: [
      "General water supply, sprinkling, and irrigation",
      "Booster plants",
      "Circulation of warm/hot/cooling water",
      "Condensate and boiler-feed water",
      "Firefighting"
    ],
    applicationTags: ["Water Supply", "HVAC", "Firefighting", "Irrigation", "Boiler Feed", "Industry", "Hotels", "Hospitals"],
    accessories: [
      "Vibration dampers and foundation rails",
      "Replacement mechanical seal kit",
      "Suction diffuser and strainers"
    ],
    brochureUrl: "/downloads/ksb_etabloc_brochure.pdf"
  },
  {
    id: "etaline",
    name: "Etaline (Vertical In-line Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services", "Firefighting Pumps"],
    modelNumber: "Etaline Series",
    rating: "Capacity up to 700 m³/hr | Head up to 95 m (96 m with IE3/IE4/IE5)",
    shortDescription: "Radially split in-line, monobloc, mountable horizontally or vertically, flanges drilled to ASME or EN, common suction/delivery size.",
    fullDescription: "Radially split in-line, monobloc, mountable horizontally or vertically, flanges drilled to ASME or EN, common suction/delivery size (no expander needed). For HVAC, firefighting, air conditioning, industrial recirculation. Variants: with VFD-mounted motor (up to 95 m), with IE3/IE4/IE5 motor (up to 96 m).",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: etalineImg,
    specs: {
      "Design": "Radially split in-line, monobloc, mountable horizontally or vertically",
      "Flanges": "Flanges drilled to ASME or EN, common suction/delivery size (no expander needed)",
      "Variants": "With VFD-mounted motor (up to 95 m), with IE3/IE4/IE5 motor (up to 96 m)",
      "Discharge Size": "32–200 mm",
      "Capacity": "up to 700 m³/hr",
      "Head": "up to 95 m (VFD) / 96 m (IE3/IE4/IE5)",
      "Discharge Pressure": "16 bar",
      "Temperature": "-30 to 140 °C",
      "Speed": "up to 2900 rpm"
    },
    features: [
      "Common suction and delivery connection size eliminates pipeline expanders",
      "Versatile mounting horizontally or vertically directly into the pipe run",
      "Flanges drilled to ASME or EN standards for seamless project integration",
      "Available with motor-mounted VFD or IE3/IE4/IE5 premium efficiency motors"
    ],
    applications: [
      "HVAC and air conditioning circulation",
      "Firefighting",
      "Industrial recirculation",
      "District cooling and heating loops"
    ],
    applicationTags: ["HVAC", "Firefighting", "Water Supply", "Industry", "High-Rise", "Data Centres", "Hospitals"],
    accessories: [
      "Pipe mounting bracket",
      "Companion counter-flanges",
      "PumpDrive motor-mounted inverter"
    ],
    brochureUrl: "/downloads/ksb_etaline_brochure.pdf"
  },
  {
    id: "omega-gamma",
    name: "Omega / Gamma (Horizontal Split Case Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services", "Firefighting Pumps"],
    modelNumber: "Omega / Gamma Series",
    rating: "Capacity up to 1000 m³/hr | Head up to 150 m | 16 bar",
    shortDescription: "Single-stage axially split volute casing, double-flow radial impeller, horizontal installation pump for cooling, water, and firefighting.",
    fullDescription: "Single-stage axially split volute casing, double-flow radial impeller, horizontal installation. For firefighting, water & waste water, industry, irrigation, HVAC. Reference: 31 Omega pumps used for cooling at Burj Khalifa, Dubai.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: omegaGammaImg,
    specs: {
      "Design": "Single-stage axially split volute casing, double-flow radial impeller, horizontal installation",
      "Discharge Size": "80–350 mm",
      "Capacity": "up to 1000 m³/hr",
      "Head": "up to 150 m",
      "Discharge Pressure": "16 bar",
      "Temperature": "0 to 80 °C",
      "Speed": "up to 2900 rpm",
      "Reference Project": "31 Omega pumps used for cooling at Burj Khalifa, Dubai"
    },
    features: [
      "Axially split volute casing allows top half removal for complete internal inspection without disturbing piping",
      "Double-flow radial impeller neutralizes axial thrust for smooth, low-vibration operation",
      "High hydraulic efficiency across wide flow envelopes",
      "Benchmark installation: 31 Omega pumps provide critical cooling at Burj Khalifa, Dubai"
    ],
    applications: [
      "Firefighting",
      "Water & waste water",
      "Industry",
      "Irrigation",
      "HVAC and district cooling plants"
    ],
    applicationTags: ["Water Supply", "HVAC", "Firefighting", "Industry", "High-Rise", "Data Centres", "Airports"],
    accessories: [
      "Flexible spacer coupling with guard",
      "Bearing temperature and vibration monitoring sensors",
      "Mechanical seal flush arrangements",
      "Heavy-duty fabricated steel baseplate"
    ],
    brochureUrl: "/downloads/ksb_omega_gamma_brochure.pdf"
  },
  {
    id: "mega-cpk",
    name: "Mega CPK (End Suction Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services"],
    modelNumber: "Mega CPK Series",
    rating: "Capacity up to 1160 m³/hr | Head up to 162 m",
    shortDescription: "Standardized end suction pump delivering high capacities up to 1160 m³/hr and head up to 162 m.",
    fullDescription: "Standardized horizontal end suction centrifugal pump delivering high capacities up to 1160 m³/hr and discharge head up to 162 m for heavy industrial water and process fluid systems.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: megaCpkImg,
    specs: {
      "Design": "Standardized horizontal end suction centrifugal pump",
      "Capacity": "up to 1160 m³/hr",
      "Head": "up to 162 m"
    },
    features: [
      "Heavy-duty back-pull-out construction for rapid servicing",
      "High capacity throughput reaching up to 1160 m³/hr",
      "Optimized hydraulic passages for maximum operating efficiency",
      "Robust casing and bearing assembly engineered for severe industrial duty"
    ],
    applications: [
      "Heavy industrial water supply and recirculation",
      "Chemical, petrochemical, and pharmaceutical manufacturing",
      "District heating, cooling, and power generation plants",
      "Water treatment and bulk transfer"
    ],
    applicationTags: ["Water Supply", "Industry", "Boiler Feed", "HVAC"],
    accessories: [
      "Coupling guard",
      "Mechanical seal flush kit",
      "Base frame assembly"
    ],
    brochureUrl: "/downloads/ksb_mega_cpk_brochure.pdf"
  },
  {
    id: "etaline-pro",
    name: "EtaLine Pro (Dry-installed, high-efficiency variable-speed in-line pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services"],
    modelNumber: "EtaLine Pro Series",
    rating: "Capacity up to 64 m³/hr | Head up to 43 m",
    shortDescription: "Dry-rotor permanent magnet synchronous motor, integrated pump functions, well ahead of ErP efficiency requirements.",
    fullDescription: "Dry-rotor permanent magnet synchronous motor, integrated pump functions, well ahead of ErP efficiency requirements, for heating, air-conditioning and water supply. Benefits: experimentally verified impeller hydraulics (improved efficiency and NPSHreq), low wear/vibration and near cavitation-free operation, reliable casing seal, low-noise motors, space-saving integrated electronics.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: etalineProImg,
    specs: {
      "Motor Type": "Dry-rotor permanent magnet synchronous motor",
      "Functions": "Integrated variable-speed pump functions",
      "Efficiency": "Well ahead of ErP efficiency requirements",
      "Capacity": "up to 64 m³/hr",
      "Head": "up to 43 m"
    },
    features: [
      "Experimentally verified impeller hydraulics (improved efficiency and NPSHreq)",
      "Low wear/vibration and near cavitation-free operation",
      "Reliable casing seal",
      "Low-noise motors creating quiet plant room environments",
      "Space-saving integrated electronics eliminate external VFD cabinets"
    ],
    applications: [
      "Heating, air-conditioning, and water supply",
      "Commercial HVAC variable volume loops",
      "Building water distribution and climate circuits"
    ],
    applicationTags: ["HVAC", "Water Supply", "Hospitals", "Hotels", "Data Centres", "High-Rise"],
    accessories: [
      "BACnet / Modbus building automation card",
      "Differential pressure sensor kit",
      "Thermal insulation shell"
    ],
    brochureUrl: "/downloads/ksb_etaline_pro_brochure.pdf"
  },
  {
    id: "caliopro",
    name: "CalioPro (Dry-installed glandless circulator)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services"],
    modelNumber: "CalioPro Series",
    rating: "High-Efficiency Variable Differential Pressure Circulation",
    shortDescription: "Maintenance-free, high-efficiency, flanged or screw-ended, continuously variable differential pressure control glandless circulator.",
    fullDescription: "Maintenance-free, high-efficiency, flanged or screw-ended, continuously variable differential pressure control. Benefits: Dynamic Control for maximum savings, exceeds ErP 2015, all-in concept reduces investment and commissioning cost, ideal for replacing fixed-speed circulators in larger buildings, lockable control panel, fault message display.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: calioproImg,
    specs: {
      "Design": "Maintenance-free, high-efficiency glandless circulator",
      "Connections": "Flanged or screw-ended",
      "Control Mode": "Continuously variable differential pressure control with Dynamic Control",
      "Standard": "Exceeds ErP 2015",
      "User Interface": "Lockable control panel, fault message display"
    },
    features: [
      "Dynamic Control for maximum energy savings",
      "Exceeds ErP 2015 energy efficiency standards",
      "All-in concept reduces investment and commissioning cost",
      "Ideal for replacing fixed-speed circulators in larger buildings",
      "Lockable control panel and clear fault message display"
    ],
    applications: [
      "Heating and cooling circulation loops",
      "Commercial HVAC air-conditioning circuits",
      "Replacement of obsolete fixed-speed circulators"
    ],
    applicationTags: ["HVAC", "Water Supply", "Hotels", "Hospitals", "High-Rise"],
    accessories: [
      "Thermal insulation shells",
      "Threaded union sets",
      "Building management communication interface"
    ],
    brochureUrl: "/downloads/ksb_caliopro_brochure.pdf"
  },
  {
    id: "calio-s",
    name: "Calio S (Circulator)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services"],
    modelNumber: "Calio S Series",
    rating: "Capacity up to 3.5 m³/hr | Head up to 8 m",
    shortDescription: "Compact high-efficiency glandless circulator with Rp 1/2 to 1 1/4 pipe connection for heating and circulation.",
    fullDescription: "Compact high-efficiency glandless circulator pump for domestic and light commercial heating circuits with capacities up to 3.5 m³/hr and head up to 8 m.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: calioSImg,
    specs: {
      "Design": "Compact high-efficiency glandless circulator",
      "Capacity": "up to 3.5 m³/hr",
      "Head": "up to 8 m",
      "Pipe Connection": "Rp 1/2–1 1/4"
    },
    features: [
      "Compact dimensions for simple installation in tight boiler enclosures",
      "High-efficiency permanent magnet motor with low power draw",
      "Intuitive control modes for constant pressure or proportional regulation",
      "Whisper-quiet operating sound profile"
    ],
    applications: [
      "Domestic and commercial central heating",
      "Underfloor heating manifold circuits",
      "Hot water recirculation"
    ],
    applicationTags: ["HVAC", "Water Supply", "Hotels"],
    accessories: [
      "Threaded pipe connectors",
      "Thermal insulation shell"
    ],
    brochureUrl: "/downloads/ksb_calio_s_brochure.pdf"
  },
  {
    id: "khm-make-up",
    name: "KHM (Make-up Water Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services", "Pressure Boosting & High-Pressure"],
    modelNumber: "KHM Series",
    rating: "Capacity up to 20 m³/hr | Head up to 50 m",
    shortDescription: "Horizontal multistage centrifugal pump engineered for make-up water, boiler feed, and pressurization.",
    fullDescription: "Horizontal multistage centrifugal pump designed for HVAC make-up water replenishment, boiler feed, and pressurization service delivering up to 20 m³/hr and head up to 50 m.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: khmMakeUpImg,
    specs: {
      "Design": "Horizontal multistage centrifugal pump",
      "Capacity": "up to 20 m³/hr",
      "Head": "up to 50 m"
    },
    features: [
      "Smooth, pulsation-free horizontal multistage delivery",
      "Corrosion-resistant stainless steel stage construction",
      "Compact footprint for integration into skidded pressurization units",
      "Low maintenance operation with durable mechanical seal"
    ],
    applications: [
      "HVAC closed loop make-up water and expansion systems",
      "Boiler feed and industrial process water",
      "Pressure boosting and water replenishment"
    ],
    applicationTags: ["Water Supply", "HVAC", "Boiler Feed", "Pressure Boosting", "Industry"],
    accessories: [
      "Baseplate with rubber vibration dampers",
      "Float switch / low water sensor",
      "Non-return check valve"
    ],
    brochureUrl: "/downloads/ksb_khm_brochure.pdf"
  },
  {
    id: "ultra-plus-ff",
    name: "Ultra Plus / Ultra Plus FF (Surface Monobloc Pumps)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services", "Firefighting Pumps"],
    modelNumber: "Ultra Plus / Ultra Plus FF Series",
    rating: "Capacity up to 150 m³/hr | Head up to 76 m | up to 15 kW (20 HP)",
    shortDescription: "3-phase centrifugal monobloc, rigid cast iron body, 7 models from 3 to 20 HP, including FF terrace booster for firefighting.",
    fullDescription: "3-phase centrifugal monobloc, rigid cast iron body, 7 models from 3 to 20 HP, for agriculture, building, firefighting and industrial use; mechanical seal or gland pack sealing. FF variant is the terrace booster for firefighting (up to 54 m³/hr, 53 m).",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: ultraPlusFfImg,
    specs: {
      "Construction": "3-phase centrifugal monobloc, rigid cast iron body",
      "Model Range": "7 models from 3 to 20 HP",
      "Capacity": "up to 150 m³/hr (FF variant: up to 54 m³/hr)",
      "Head": "up to 76 m (FF variant: up to 53 m)",
      "Temperature": "ambient temperature",
      "Power Rating": "up to 15 kW",
      "Speed": "2900 rpm",
      "Sealing Options": "Mechanical seal or gland pack sealing"
    },
    features: [
      "Rigid cast iron monobloc body designed for demanding continuous service",
      "Available in 7 models ranging from 3 to 20 HP (up to 15 kW)",
      "Choice between mechanical seal or gland pack sealing",
      "Dedicated FF variant acts as the terrace booster for firefighting installations (54 m³/hr, 53 m)"
    ],
    applications: [
      "Agriculture and irrigation",
      "Building services and water supply",
      "Firefighting (terrace booster FF variant)",
      "Industrial water transfer"
    ],
    applicationTags: ["Water Supply", "Firefighting", "Irrigation", "Industry", "High-Rise"],
    accessories: [
      "Flange connection set",
      "Terrace booster automatic pressure switch",
      "Motor thermal overload protector"
    ],
    brochureUrl: "/downloads/ksb_ultra_plus_brochure.pdf"
  },
  {
    id: "borewell-submersible-pumps",
    name: "Borewell Submersible Pumps",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Water Supply, HVAC & General Building Services",
    categories: ["Water Supply, HVAC & General Building Services"],
    modelNumber: "Borewell Submersible Series",
    rating: "Capacity up to 800 m³/hr | Head up to 400 m | up to 110 kW",
    shortDescription: "Multistage submersible, radial or mixed flow impellers, oil- or water-filled single/three phase motors.",
    fullDescription: "Multistage submersible, radial or mixed flow impellers, oil- or water-filled single/three phase motors. For horticulture, irrigation, housing, building services, farm houses, ornamental fountains. Well diameter min. 75 mm, capacity up to 800 m³/hr, head up to 400 m, up to 110 kW, 2900 rpm.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: borewellSubmersiblePumpsImg,
    specs: {
      "Design": "Multistage submersible, radial or mixed flow impellers",
      "Motor Type": "Oil- or water-filled single/three phase motors",
      "Well Diameter": "min. 75 mm",
      "Capacity": "up to 800 m³/hr",
      "Head": "up to 400 m",
      "Power Rating": "up to 110 kW",
      "Speed": "2900 rpm"
    },
    features: [
      "Multistage submersible pump bowl assembly for deep well groundwater extraction",
      "High-efficiency radial or mixed flow impellers",
      "Rewindable oil- or water-filled single/three phase submersible motors",
      "Minimum well diameter from 75 mm upwards",
      "Impressive discharge head reach up to 400 m and capacities up to 800 m³/hr"
    ],
    applications: [
      "Horticulture and irrigation",
      "Housing and building services",
      "Farm houses",
      "Ornamental fountains"
    ],
    applicationTags: ["Water Supply", "Irrigation", "Industry", "High-Rise"],
    accessories: [
      "Submersible flat drop cable",
      "Control panel with dry-run protection",
      "Borewell head clamp and riser pipe fittings"
    ],
    brochureUrl: "/downloads/ksb_borewell_submersible_brochure.pdf"
  },

  // ==========================================
  // CATEGORY C – Drainage & Sewage
  // ==========================================
  {
    id: "ama-drainer",
    name: "Ama-Drainer (Submersible Drainage Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Drainage & Sewage",
    categories: ["Drainage & Sewage"],
    modelNumber: "Ama-Drainer Series",
    rating: "Capacity up to 12 m³/hr | Head up to 11 m | up to 0.60 kW",
    shortDescription: "Fully floodable, built-in swing check valve, jacket-cooled single-phase motor with integrated temperature switch and float switch.",
    fullDescription: "Fully floodable, built-in swing check valve, jacket-cooled single-phase motor with integrated temperature switch, float switch for automatic operation. For lowering surface water, water transfer, agricultural pits, garden sprinklers, cellar/basin drainage.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: amaDrainerImg,
    specs: {
      "Design": "Fully floodable, built-in swing check valve",
      "Motor Type": "Jacket-cooled single-phase motor with integrated temperature switch",
      "Automation": "Float switch for automatic operation",
      "Discharge Size": "DN 35",
      "Capacity": "up to 12 m³/hr",
      "Head": "up to 11 m",
      "Power Rating": "up to 0.60 kW",
      "Temperature": "up to 40 °C",
      "Free Passage": "10 mm"
    },
    features: [
      "Fully floodable, impact-resistant submersible drainage pump",
      "Built-in swing check valve prevents backflow automatically",
      "Jacket-cooled motor enables continuous operation in partially submerged applications",
      "Integrated temperature switch and automatic float switch",
      "10 mm free passage for drainage water containing suspended solids"
    ],
    applications: [
      "Lowering surface water",
      "Water transfer",
      "Agricultural pits",
      "Garden sprinklers",
      "Cellar / basin drainage"
    ],
    applicationTags: ["Drainage", "Sewage", "Hospitals", "Hotels", "High-Rise"],
    accessories: [
      "Flexible discharge hose and coupling",
      "Low suction collar (draws down to 2 mm)",
      "Alarm float switch"
    ],
    brochureUrl: "/downloads/ksb_ama_drainer_brochure.pdf"
  },
  {
    id: "ama-porter",
    name: "Ama Porter (Submersible Drainage Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Drainage & Sewage",
    categories: ["Drainage & Sewage"],
    modelNumber: "Ama Porter Series",
    rating: "Capacity up to 29 m³/hr | Head up to 16 m | 1.1 kW (1Ø) / 1.5 kW (3Ø)",
    shortDescription: "Vertical monobloc drainage pump with free-flow impeller in two sizes, IP 68 motor, and bi-directional mechanical seal.",
    fullDescription: "Vertical monobloc, free-flow impeller in two sizes, 1Ø and 3Ø motors with IP 68, 1Ø motor with built-in thermal overload and float switch, bi-directional mechanical seal. For surface water, rain water, waste water with solids, flood-prone sumps, agricultural pits and canals.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: amaPorterImg,
    specs: {
      "Design": "Vertical monobloc, free-flow impeller in two sizes",
      "Motors": "1Ø and 3Ø motors with IP 68 (1Ø motor with built-in thermal overload and float switch)",
      "Sealing": "Bi-directional mechanical seal",
      "Discharge Size": "DN 50",
      "Capacity": "up to 29 m³/hr",
      "Head": "up to 16 m",
      "Power Rating": "up to 1.1 kW (1Ø) / 1.5 kW (3Ø)",
      "Temperature": "up to 40 °C",
      "Free Passage": "40 mm"
    },
    features: [
      "Non-clogging vortex free-flow impeller in two sizes",
      "Submersible motor rated IP 68 for 1-phase and 3-phase power supply",
      "Single-phase version includes built-in thermal overload protection and float switch",
      "Bi-directional mechanical seal with intermediate oil reservoir",
      "Large 40 mm free passage for handling wastewater with solids"
    ],
    applications: [
      "Surface water and rain water drainage",
      "Waste water with solids",
      "Flood-prone sumps and basement pits",
      "Agricultural pits and canals"
    ],
    applicationTags: ["Drainage", "Sewage", "Water Supply", "High-Rise", "Hotels", "Hospitals"],
    accessories: [
      "Guide rail duckfoot auto-coupling kit",
      "Lifting chain and shackle",
      "Non-return check valve DN 50"
    ],
    brochureUrl: "/downloads/ksb_ama_porter_brochure.pdf"
  },
  {
    id: "amarex-in-krtu",
    name: "Amarex IN & KRTU (Sewage Pumps)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Drainage & Sewage",
    categories: ["Drainage & Sewage"],
    modelNumber: "Amarex IN / KRTU",
    rating: "Capacity up to 190 m³/hr | Head up to 49 m | up to 9.5 kW",
    shortDescription: "Single-stage submersible centrifugal sewage pumps for raw wastewater, stormwater, and municipal effluent with cutter option.",
    fullDescription: "Single-stage submersible centrifugal, monobloc. Amarex IN: waste water, storm water, waste water treatment (cutter option available). KRTU: municipal and industrial waste water, 3 impeller types.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: amarexInKrtuImg,
    specs: {
      "Design": "Single-stage submersible centrifugal, monobloc",
      "Amarex IN Duty": "Waste water, storm water, waste water treatment (cutter option available)",
      "KRTU Duty": "Municipal and industrial waste water, 3 impeller types",
      "Discharge Size": "DN 50, 65, 100",
      "Capacity": "up to 190 m³/hr",
      "Head": "up to 49 m",
      "Temperature": "up to 70 °C",
      "Power Rating": "up to 9.5 kW",
      "Speed": "up to 2900 rpm",
      "Free Passage": "up to 100 mm"
    },
    features: [
      "Single-stage submersible centrifugal monobloc construction",
      "Amarex IN variant equipped with optional heavy-duty cutter for fibrous waste",
      "KRTU variant featuring 3 distinct impeller types to match specific waste profiles",
      "Generous spherical free passage up to 100 mm prevents clogging",
      "Capable of handling high fluid temperatures up to 70 °C"
    ],
    applications: [
      "Raw municipal waste water and sewage",
      "Storm water transfer stations",
      "Sewage and effluent treatment plants (STP / ETP)",
      "Industrial effluent lift stations"
    ],
    applicationTags: ["Sewage", "Drainage", "Water Supply", "Industry", "Hospitals", "Hotels", "Metro Stations"],
    accessories: [
      "Duckfoot guide rail coupling kit",
      "Stainless steel lifting chain",
      "Moisture and temperature sensor monitoring"
    ],
    brochureUrl: "/downloads/ksb_amarex_in_krtu_brochure.pdf"
  },

  // ==========================================
  // CATEGORY D – Firefighting Pumps
  // ==========================================
  {
    id: "mfmo-v-h",
    name: "MFMO V/H (Multistage Multi-Outlet Firefighting Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Firefighting Pumps",
    categories: ["Firefighting Pumps"],
    modelNumber: "MFMO V/H Series",
    rating: "Capacity up to 500 m³/hr | Head up to 350 m | 40 bar",
    shortDescription: "Ring-section design firefighting pump with multiple discharge outlets for multi-zone building protection.",
    fullDescription: "Ring-section design, multiple discharge outlets with high-speed prime movers, horizontal and vertical installations.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: mfmoVHImg,
    specs: {
      "Design": "Ring-section design, multiple discharge outlets with high-speed prime movers, horizontal and vertical installations",
      "Discharge Size": "32–150 mm",
      "Capacity": "up to 500 m³/hr",
      "Head": "up to 350 m",
      "Discharge Pressure": "40 bar",
      "Temperature": "-10 to 120 °C",
      "Speed": "up to 3000 rpm"
    },
    features: [
      "Ring-section design capable of handling high discharge pressures up to 40 bar",
      "Multiple discharge outlets allow distinct building pressure zones to be served simultaneously",
      "Driven by high-speed prime movers up to 3000 rpm (electric or diesel)",
      "Available for horizontal and vertical installations to optimize plant layout"
    ],
    applications: [
      "High-rise commercial and residential firefighting",
      "Multi-zone hydrant and sprinkler systems",
      "Hospitals, airports, and luxury hotels"
    ],
    applicationTags: ["Firefighting", "High-Rise", "Hospitals", "Hotels", "Data Centres", "Airports"],
    accessories: [
      "Engineered base skid for prime mover coupling",
      "Multi-outlet discharge manifold",
      "Automatic casing relief valve"
    ],
    brochureUrl: "/downloads/ksb_mfmo_brochure.pdf"
  },
  {
    id: "wk-wl-msso",
    name: "WK-WL (Multi Stage Single Outlet, MSSO)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Firefighting Pumps",
    categories: ["Firefighting Pumps"],
    modelNumber: "WK-WL Series",
    rating: "Capacity up to 273 m³/hr | Head up to 780 m",
    shortDescription: "Multi Stage Single Outlet (MSSO) centrifugal pump delivering high discharge heads up to 780 m.",
    fullDescription: "Multi Stage Single Outlet (MSSO) high-pressure centrifugal pump delivering capacities up to 273 m³/hr and head up to 780 m for extreme high-rise building firefighting and industrial pressure service.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: wkWlMssoImg,
    specs: {
      "Design": "Multi Stage Single Outlet (MSSO) centrifugal pump",
      "Capacity": "up to 273 m³/hr",
      "Head": "up to 780 m"
    },
    features: [
      "Multi Stage Single Outlet (MSSO) hydraulic architecture",
      "Exceptional discharge head reaching up to 780 meters",
      "Heavy tie-bolt ring section design for structural rigidity under extreme pressure",
      "Suitable for high-rise firefighting networks and high-pressure transmission"
    ],
    applications: [
      "High-rise skyscraper firefighting networks",
      "High-pressure boiler feed and industrial water",
      "Long-distance water transmission"
    ],
    applicationTags: ["Firefighting", "High-Rise", "Industry", "Boiler Feed", "Water Supply"],
    accessories: [
      "High-pressure flexible coupling and guard",
      "Hydraulic balance line kit",
      "Fabricated heavy base skid"
    ],
    brochureUrl: "/downloads/ksb_wk_wl_brochure.pdf"
  },
  {
    id: "mega-fire-pump",
    name: "Mega (End Suction Fire Pump)",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Firefighting Pumps",
    categories: ["Firefighting Pumps"],
    modelNumber: "Mega Fire Series",
    rating: "Capacity up to 540 m³/hr | Head up to 100 m",
    shortDescription: "End suction centrifugal fire pump delivering up to 540 m³/hr and 100 m head for hydrant and sprinkler systems.",
    fullDescription: "Horizontal end suction centrifugal fire pump delivering capacities up to 540 m³/hr and head up to 100 m for commercial building fire hydrant and sprinkler protection.",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: megaFirePumpImg,
    specs: {
      "Design": "Horizontal end suction centrifugal fire pump",
      "Capacity": "up to 540 m³/hr",
      "Head": "up to 100 m"
    },
    features: [
      "High-capacity end suction volute casing design",
      "Direct coupling to electric motor or diesel engine prime movers",
      "Rapid emergency pressurization for building hydrants and sprinkler heads",
      "Compliant with regional and national building fire protection codes"
    ],
    applications: [
      "Commercial building hydrant and sprinkler systems",
      "Industrial factory and warehouse fire protection",
      "Hospitals, shopping malls, and institutional campuses"
    ],
    applicationTags: ["Firefighting", "Hospitals", "Hotels", "Industry", "High-Rise"],
    accessories: [
      "Diesel engine drive package",
      "Fire system control panel",
      "Casing relief valve"
    ],
    brochureUrl: "/downloads/ksb_mega_fire_brochure.pdf"
  },
  {
    id: "listed-fire-pumpsets",
    name: "Listed Fire Pumpsets / Containerised Firefighting Sets",
    brand: "KSB",
    category: "Pumps",
    subCategory: "Firefighting Pumps",
    categories: ["Firefighting Pumps"],
    certified: "Certified: UL listed / FM approved",
    badge: "Certified: UL listed / FM approved",
    modelNumber: "Listed Fire Sets (UL / FM Certified)",
    rating: "Capacity up to 700 m³/hr | Head up to 250 m | 40 bar",
    shortDescription: "UL listed and FM approved complete hydrant and sprinkler pumpsets (motor- or engine-driven) assembled and tested at the KSB factory.",
    fullDescription: "UL listed and FM approved complete hydrant and sprinkler pumpsets (motor- or engine-driven). Package: pump, base frame, coupling, coupling guard, electric motor / diesel engine, jockey pump, control cabinet, fuel tank, batteries, switches. Designed, assembled and tested at the KSB factory per fire regulations. Used in data centres, airports, metros, hospitals, commercial hubs. Certifications: UL 448 (centrifugal stationary pumps for fire protection service), FM 1311 (split-case), FM 1319 (horizontal end suction).",
    price: "Contact for Quote",
    availability: "Available on Project Order",
    image: listedFirePumpsetsImg,
    specs: {
      "Certifications": "UL 448 (centrifugal stationary pumps for fire protection service), FM 1311 (split-case), FM 1319 (horizontal end suction)",
      "Package Scope": "Pump, base frame, coupling, coupling guard, electric motor / diesel engine, jockey pump, control cabinet, fuel tank, batteries, switches",
      "Factory Testing": "Designed, assembled and tested at the KSB factory per fire regulations",
      "Capacity": "up to 700 m³/hr",
      "Head": "up to 250 m",
      "Discharge Pressure": "40 bar",
      "Temperature": "up to 140 °C",
      "Speed": "up to 2900 rpm"
    },
    features: [
      "UL listed and FM approved complete hydrant and sprinkler pumpsets",
      "Available with electric motor drive or diesel engine prime movers",
      "Comprehensive factory package: pump, base frame, coupling, guard, jockey pump, control cabinet, fuel tank, batteries, and switches",
      "Designed, assembled, and hydrostatically/performance tested at KSB factory",
      "Turnkey containerised firefighting pump house option eliminates on-site civil building requirements"
    ],
    applications: [
      "Data centres",
      "Airports",
      "Metros",
      "Hospitals",
      "Commercial hubs"
    ],
    applicationTags: ["Firefighting", "Data Centres", "Airports", "Hospitals", "Metro Stations", "High-Rise", "Industry"],
    accessories: [
      "UL/FM listed fire pump controller cabinet",
      "Jockey pump automatic starter",
      "Flow meter test loop piping",
      "Double-walled fuel tank with level alarms"
    ],
    brochureUrl: "/downloads/ksb_listed_fire_pumpsets_brochure.pdf"
  }
];
