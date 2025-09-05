import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Download,
  Phone,
  Mail,
  ArrowLeft,
  Star,
  Shield,
  Truck,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();

  // Mock product data - in real app this would come from API
  const productData = {
    "stainless-steel-pipes": {
      title: "Stainless Steel Pipes & Tubes",
      subtitle: "High-Quality SS 304, 304L, 316, 316L Pipes & Tubes",
      description:
        "Premium quality stainless steel pipes and tubes manufactured to international standards for various industrial applications including chemical, petrochemical, oil & gas, food processing, and pharmaceutical industries.",
      image: "./../product-images/pipes-tubes.webp",
      gallery: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      ],
      specifications: {
        "Material Grades": [
          "SS 304",
          "SS 304L",
          "SS 304H",
          "SS 316",
          "SS 316L",
          "SS 321",
          "SS 347",
        ],
        "Size Range": [
          '1/8" NB to 48" NB',
          "Outer Diameter: 6mm to 1220mm",
          "Wall Thickness: 0.5mm to 50mm",
        ],
        Length: [
          "Single Random Length: 4-7 meters",
          "Double Random Length: 10-12 meters",
          "Custom lengths available",
        ],
        Standards: [
          "ASTM A312",
          "ASTM A213",
          "ASTM A269",
          "ASME SA312",
          "DIN 2462",
          "JIS G3459",
        ],
      },
      features: [
        "Excellent corrosion resistance",
        "High temperature resistance",
        "Superior mechanical properties",
        "Easy to fabricate and weld",
        "Low maintenance requirements",
        "Hygienic and food-grade",
        "Non-magnetic properties",
        "Long service life",
      ],
      applications: [
        "Chemical & Petrochemical Industry",
        "Oil & Gas Refineries",
        "Food & Beverage Processing",
        "Pharmaceutical Manufacturing",
        "Power Generation Plants",
        "Water Treatment Facilities",
        "Marine & Offshore Applications",
        "Pulp & Paper Industry",
      ],
      certifications: [
        "ISO 9001:2015",
        "ASTM Certified",
        "ASME Approved",
        "CE Marking",
        "PED Certified",
      ],
      testing: [
        "Chemical Composition Analysis",
        "Mechanical Properties Testing",
        "Hydrostatic Pressure Testing",
        "Non-Destructive Testing (NDT)",
        "Dimensional Inspection",
        "Surface Finish Verification",
      ],
    },
    "stainless-steel-flanges": {
      title: "Stainless Steel Flanges",
      subtitle: "Precision-Engineered SS Flanges for Secure Connections",
      description:
        "High-quality stainless steel flanges manufactured to ANSI, DIN, and JIS standards. Available in various pressure ratings and face finishes for reliable pipe connections in critical applications.",
      image: "./../product-images/flanges.webp",
      gallery: [
        "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      ],
      specifications: {
        "Material Grades": [
          "SS 304",
          "SS 304L",
          "SS 316",
          "SS 316L",
          "SS 321",
          "SS 347",
          "Duplex Steel",
        ],
        "Pressure Classes": ["150#", "300#", "600#", "900#", "1500#", "2500#"],
        "Face Types": [
          "Raised Face (RF)",
          "Flat Face (FF)",
          "Ring Type Joint (RTJ)",
        ],
        Standards: [
          "ANSI B16.5",
          "ASME B16.47",
          "DIN 2633",
          "JIS B2220",
          "BS 4504",
        ],
      },
      features: [
        "Leak-proof connections",
        "High pressure rating",
        "Corrosion resistant",
        "Precision machined surfaces",
        "Easy installation",
        "Long-lasting durability",
        "Wide temperature range",
        "Various size options",
      ],
      applications: [
        "Piping Systems",
        "Pressure Vessels",
        "Heat Exchangers",
        "Pumps & Compressors",
        "Valve Connections",
        "Tank Nozzles",
        "Pipeline Connections",
        "Process Equipment",
      ],
      certifications: [
        "ISO 9001:2015",
        "ANSI Certified",
        "DIN Approved",
        "JIS Compliant",
        "API Certified",
      ],
      testing: [
        "Pressure Testing",
        "Dimensional Verification",
        "Material Certification",
        "Surface Finish Check",
        "Flange Face Inspection",
        "Bolt Hole Alignment",
      ],
    },
    "stainless-steel-sheet-plates": {
      title: "Stainless Steel Sheets & Plates",
      subtitle:
        "Durable Stainless Steel Sheets & Plates for Industrial Applications",
      description:
        "Premium quality stainless steel sheets and plates available in a wide range of thicknesses and grades. Designed for superior strength, corrosion resistance, and performance in diverse industrial environments.",
      image: "./../product-images/sheet-plates.webp",
      gallery: [
        "https://images.unsplash.com/photo-1602526216436-6e6e5c8949d7?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581092334442-9c6313d1bfa8?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1620912189862-d2e2c932a0d2?w=400&h=300&fit=crop&crop=center",
      ],
      specifications: {
        Range: [
          "0.1 mm to 100 mm thickness",
          "Up to 2500 mm width",
          "Up to 8000 mm length",
          "Available with NACE MR 01-75 compliance",
        ],
        "Material Grades": [
          "SS 304",
          "SS 304L",
          "SS 304H",
          "SS 309S",
          "SS 309H",
          "SS 310S",
          "SS 310H",
          "SS 316",
          "SS 316L",
        ],
        "Duplex Steel Grades": [
          "UNS S31803",
          "UNS S32205",
          "UNS S32550",
          "UNS S32750",
          "UNS S32760",
        ],
        Standards: [
          "ASTM A240",
          "ASME SA240",
          "EN 10088",
          "DIN Standards",
          "JIS Standards",
        ],
      },
      features: [
        "Excellent corrosion resistance",
        "High tensile strength",
        "Heat and pressure resistant",
        "Wide range of grades and finishes",
        "Smooth surface finish",
        "Available in cut-to-size options",
        "Durable and long-lasting",
        "Complies with international standards",
      ],
      applications: [
        "Chemical Processing Equipment",
        "Oil & Gas Industry",
        "Food Processing",
        "Heat Exchangers",
        "Marine Applications",
        "Pharmaceutical Industry",
        "Architectural Applications",
        "Automotive and Aerospace",
      ],
      certifications: [
        "ISO 9001:2015",
        "NACE MR 01-75",
        "ASTM / ASME Compliance",
        "EN Standards Approved",
        "PED Certified",
      ],
      testing: [
        "Mechanical Testing (Tensile, Hardness, Elongation)",
        "Positive Material Identification (PMI)",
        "Intergranular Corrosion (IGC) Test",
        "Ultrasonic Testing",
        "Micro and Macro Examination",
        "Flattening and Flaring Tests",
        "Dimensional Inspection",
      ],
    },
    "stainless-steel-round-bars": {
      title: "Stainless Steel Round Bars",
      subtitle: "High-Quality SS Round Bars for Machining and Construction",
      description:
        "Premium quality stainless steel round bars available in various grades and diameters. Manufactured to international standards for superior strength, corrosion resistance, and excellent machinability in diverse industrial applications.",
      image: "./../product-images/round-bar.webp",
      gallery: [
        "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1581092334442-9c6313d1bfa8?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1620912189862-d2e2c932a0d2?w=400&h=300&fit=crop&crop=center",
      ],
      specifications: {
        "Diameter Range": [
          "3.17 mm to 350 mm",
          "Custom sizes available",
          "Precision ground options",
        ],
        "Material Grades": [
          "SS 304",
          "SS 304L",
          "SS 316",
          "SS 316L",
          "SS 321",
          "SS 347",
          "SS 410",
          "SS 420",
          "SS 430",
          "SS 431",
        ],
        "Duplex Steel Grades": [
          "UNS S31803",
          "UNS S32205",
          "UNS S32550",
          "UNS S32750",
          "UNS S32760",
        ],
        "Nickel Alloy Grades": [
          "Nickel 200/201",
          "Monel 400",
          "Inconel 600/601/625",
          "Incoloy 800/825",
          "Hastelloy C-276/C-22",
        ],
        Standards: [
          "ASTM A276",
          "ASTM A479",
          "ASME SA479",
          "EN 10088",
          "DIN Standards",
          "JIS Standards",
        ],
      },
      features: [
        "Excellent corrosion resistance",
        "High tensile strength",
        "Superior machinability",
        "Heat and pressure resistant",
        "Wide range of grades and finishes",
        "Precision dimensional accuracy",
        "Durable and long-lasting",
        "Complies with international standards",
      ],
      applications: [
        "Shafts and Axles",
        "Fasteners and Bolts",
        "Machine Components",
        "Valve Parts",
        "Pump Shafts",
        "Marine Applications",
        "Chemical Processing Equipment",
        "Automotive and Aerospace",
      ],
      certifications: [
        "ISO 9001:2015",
        "ASTM / ASME Compliance",
        "EN Standards Approved",
        "NACE MR 01-75",
        "PED Certified",
      ],
      testing: [
        "Mechanical Testing (Tensile, Hardness, Impact)",
        "Positive Material Identification (PMI)",
        "Ultrasonic Testing",
        "Micro and Macro Examination",
        "Chemical Composition Analysis",
        "Dimensional Inspection",
        "Surface Finish Verification",
      ],
    },
    "stainless-steel-buttweld-fittings": {
      title: "Stainless Steel Buttweld Fittings",
      subtitle: "Durable SS Buttweld Pipe Fittings for Piping Solutions",
      description:
        "High-performance stainless steel buttweld fittings designed for reliable connection of pipes in critical industries. Manufactured in various grades and dimensions, these fittings ensure excellent strength, corrosion resistance, and leak-proof performance for industrial piping systems.",
      image: "./../product-images/buttweld-fittings.webp",
      gallery: [
        "https://images.unsplash.com/photo-1617093808854-5a5c16c1a3d3?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1603791236728-0c06f6f6c054?w=400&h=300&fit=crop&crop=center",
      ],
      specifications: {
        "Size Range": [
          '1/2" NB to 48" NB',
          "Custom dimensions available",
          "Seamless and Welded types",
        ],
        "Material Grades": [
          "SS 304",
          "SS 304L",
          "SS 316",
          "SS 316L",
          "SS 321",
          "SS 347",
          "SS 410",
          "SS 420",
        ],
        "Duplex Steel Grades": [
          "UNS S31803",
          "UNS S32205",
          "UNS S32550",
          "UNS S32750",
          "UNS S32760",
        ],
        "Nickel Alloy Grades": [
          "Nickel 200/201",
          "Monel 400",
          "Inconel 600/601/625",
          "Incoloy 800/825",
          "Hastelloy C-276/C-22",
        ],
        Types: [
          "Elbow (90°, 45°, Long Radius, Short Radius)",
          "Reducer (Concentric, Eccentric)",
          "Tee (Equal, Reducing)",
          "Cap",
          "Stub End",
          "Cross",
        ],
        Standards: [
          "ASTM A403",
          "ASME B16.9",
          "ASME B16.28",
          "MSS-SP-43",
          "DIN Standards",
          "JIS Standards",
        ],
      },
      features: [
        "Leak-proof connections",
        "High mechanical strength",
        "Excellent corrosion resistance",
        "Available in seamless and welded forms",
        "Smooth inner surface for better flow",
        "Dimensional accuracy and precision",
        "Durable and long-lasting",
        "Conforms to international standards",
      ],
      applications: [
        "Oil and Gas Pipelines",
        "Petrochemical Plants",
        "Power Generation",
        "Pharmaceutical Processing",
        "Food and Beverage Industry",
        "Shipbuilding and Marine",
        "Water Treatment Plants",
        "Chemical Processing Units",
      ],
      certifications: [
        "ISO 9001:2015",
        "ASTM / ASME Compliance",
        "EN Standards Approved",
        "NACE MR 01-75",
        "PED Certified",
      ],
      testing: [
        "Hydrostatic Testing",
        "Mechanical Testing (Tensile, Hardness, Impact)",
        "Positive Material Identification (PMI)",
        "Ultrasonic Testing",
        "Radiographic Testing",
        "Chemical Composition Analysis",
        "Dimensional Inspection",
      ],
    },
    "stainless-steel-fasteners": {
      title: "Stainless Steel Fasteners",
      subtitle: "Reliable SS Fasteners for Strong and Secure Joints",
      description:
        "Premium-quality stainless steel fasteners designed for high-strength and corrosion-resistant fastening solutions. Available in multiple grades, standards, and types, these fasteners ensure secure connections in demanding industrial and commercial applications.",
      image: "./../product-images/fasteners.webp",
      gallery: [
        "https://images.unsplash.com/photo-1603791236728-0c06f6f6c054?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1617093808854-5a5c16c1a3d3?w=400&h=300&fit=crop&crop=center",
      ],
      specifications: {
        "Size Range": [
          "M3 to M72",
          "Custom lengths available",
          "Metric and Imperial sizes",
        ],
        "Material Grades": [
          "SS 304",
          "SS 304L",
          "SS 316",
          "SS 316L",
          "SS 321",
          "SS 347",
          "SS 410",
          "SS 420",
        ],
        "Duplex Steel Grades": [
          "UNS S31803",
          "UNS S32205",
          "UNS S32550",
          "UNS S32750",
          "UNS S32760",
        ],
        "Nickel Alloy Grades": [
          "Nickel 200/201",
          "Monel 400 / K500",
          "Inconel 600/625/718",
          "Incoloy 800/825/925",
          "Hastelloy C-276 / C-22",
        ],
        Types: [
          "Bolts (Hex, Heavy Hex, Stud, Anchor, U-bolts, J-bolts, Eye bolts, T-head bolts, Wing bolts)",
          "Nuts (Hex, Square, Coupling, Castle, Self-locking, Cap nuts)",
          "Washers (Flat, Spring, Lock, Star, Tooth, Tab washers)",
          "Screws (Socket Head, Machine Screws, Wood Screws, Sheet Metal Screws)",
          "Threaded Rods",
          "Custom Fasteners",
        ],
        Standards: [
          "ASTM A193 / A194",
          "ASTM A320",
          "ASTM A182",
          "ASME B1.1",
          "DIN Standards",
          "ISO Standards",
          "JIS Standards",
        ],
      },
      features: [
        "High tensile strength",
        "Excellent corrosion resistance",
        "Available in standard and custom sizes",
        "Precision threading for secure fit",
        "Durable and long-lasting performance",
        "Suitable for high-pressure and high-temperature applications",
        "Conforms to global quality standards",
        "Smooth finish for easy installation",
      ],
      applications: [
        "Oil and Gas Industry",
        "Petrochemical Plants",
        "Power Generation",
        "Construction and Infrastructure",
        "Automotive Industry",
        "Shipbuilding and Marine Applications",
        "Aerospace and Defense",
        "Pharmaceutical and Food Processing Units",
      ],
      certifications: [
        "ISO 9001:2015",
        "ASTM / ASME Compliance",
        "EN Standards Approved",
        "NACE MR 01-75",
        "PED Certified",
      ],
      testing: [
        "Tensile Strength Test",
        "Hardness Test",
        "Impact Test",
        "Positive Material Identification (PMI)",
        "Salt Spray Test for Corrosion Resistance",
        "Dimensional Inspection",
        "Ultrasonic Testing",
        "Visual and Surface Finish Inspection",
      ],
    },
  };

  const productItems = {
    "stainless-steel-pipes": [
      {
        category: "Stainless & Duplex Steel",
        title: "Stainless & Duplex Steel pipes and tubes",
        range:
          "15 NB UP TO 1200 NB IN SCH 5S , 10S ,10, 20 , 40S , 40 , STD , 60 , 80S , 80 , XS , 100 , 120 , 140 , 160 & XXS.",
        form: "Seamless / Erw / Welded in Round & Square",
        stainlessSteel:
          "ASTM / ASME SA 312 GR. TP 304 , 304L , 304H, 309S ,309H , 310S, 310H , 316 , 316TI , 316H , 316 LN , 317 , 317L , 321 , 321H , 347 , 347 H , 904L. ASTM / ASME SA 358 CL 1 & CL 3 GR. 304 , 304L , 304H, 309S ,309H , 310S, 310H , 316 , 316H , 321 , 321H , 347.",
        duplexSteel:
          "ASTM / ASME SA 790 UNS NO S 31803 , S 32205 , S 32550 , S 32750 , S 32760",
      },
      {
        category: "Carbon & Alloy Steel",
        title: "Carbon & Alloy Steel pipes and tubes",
        range:
          "15 NB UP TO 1200 NB IN SCH 5S , 10S ,10, 20 , 40S , 40 , STD , 60 , 80S , 80 , XS , 100 , 120 , 140 , 160 & XXS",
        form: "Seamless / Erw / Welded in Round & Square",
        carbonSteel:
          "ASTM / ASME A 53 GR. A , B; ASTM / ASME 106 GR. A , B ,C; API 5L GR. B , API 5L X 42 , X 46 , X 52 , X 60 , X 70; ASTM / ASME A 691 GRA , B ,C",
        alloySteel:
          "ASTM / ASME A 335 GRP 1 , P 5 , P 9 , P 11 , P 12 , P 22 , P 23 , P 91; ASTM / ASME A 691 GRP1 CR , 1 1/4 CR , 2 1/4 CR , 5 CR , 9CR , 91",
      },
      {
        category: "Nickel & Copper Alloy",
        title: "Nickel & Copper Alloy pipes and tubes",
        range:
          "15 NB UP TO 1200 NB IN SCH 5S , 10S ,10, 20 , 40S , 40 , STD , 60 , 80S , 80 , XS , 100 , 120 , 140 , 160 & XXS",
        form: "Seamless / Erw / Welded in Round & Square",
        nickelAlloy:
          "ASTM / ASME SB 163 UNS 2200 (NICKEL 200), UNS 2201 (NICKEL 201), UNS 4400 (MONEL 400), UNS 8020 (ALLOY 20 / 20 CB 3), UNS 8825 (INCONEL 825), UNS 6600 (INCONEL 600), UNS 6601 (INCONEL 601), UNS 6625 (INCONEL 625), UNS 10276 (HASTELLOY C 276)",
        copperAlloy:
          "ASTM / ASME SB 111 UNS NO. C 10100 , 10200 , 10300 , 10800 , 12000,12200, 70600 , 71500. ASTM / ASME SB 466 UNS NO. C 70600 (CU -NI- 90/10), C 71500 (CU -NI- 70/30)",
      },
      {
        category: "Hastelloy",
        title: "Hastelloy pipes and tubes",
        grades: "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000",
        type: "Seamless / Erw / Welded/ Fabricated",
        standard: "Hastelloy Seamless Pipe, Hastelloy ERW Pipe",
        applications: [
          "Petrochemicals Plants",
          "Oil Refineries",
          "Fertilizers Plants",
          "Sugar Mills",
          "Chemical Plants",
          "Pharmaceuticals",
          "Textile Machinery",
        ],
      },
      {
        category: "Inconel",
        title: "Inconel pipes and tubes",
        grades:
          "Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750",
        type: "Seamless / Erw / Welded/ Fabricated",
        range:
          "15 NB up to 600 NB in SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS",
        form: "Round, Square, Rectangular, Hydraulic etc.",
        length: "Single Random, Double Random & Cut Length",
        end: "Plain End, Beveled End, Threaded",
        applications: [
          "Petrochemicals Plants",
          "Oil Refineries",
          "Fertilizers Plants",
          "Sugar Mills",
          "Chemical Plants",
          "Pharmaceuticals",
          "Textile Machinery",
        ],
      },
      {
        category: "Incoloy",
        title: "Incoloy pipes and tubes",
        grades:
          "Incoloy 800, Incoloy 825, Incoloy 925, Incoloy a-286, Incoloy DS",
        type: "Seamless / Erw / Welded/ Fabricated",
        standard:
          "ASTM B407, ASTM B829, ASTM B514, ASTM B775, ASTM B515, ASTM B751",
        applications: [
          "Petrochemicals Plants",
          "Oil Refineries",
          "Fertilizers Plants",
          "Sugar Mills",
          "Chemical Plants",
          "Pharmaceuticals",
          "Textile Machinery",
        ],
      },
      {
        category: "Monel",
        title: "Monel pipes and tubes",
        grades: "Monel 400, Monel k500",
        type: "Seamless / Erw / Welded/ Fabricated",
        form: "Round, Square, Rectangular, Hydraulic etc.",
        length: "Single Random, Double Random & Cut Length",
        end: "Plain End, Beveled End, Threaded",
        features: [
          "Hot Dipped Galvanizing",
          "Epoxy & Fbe Coating",
          "Electro Polish",
          "Draw & Expansion",
        ],
      },
      {
        category: "Titanium",
        title: "Titanium pipes and tubes",
        grades:
          "Grade 1, Grade 2, Grade 3, Grade 4, Grade 5, Grade 7, Grade 9, Grade 23",
        type: "Seamless / Erw / Welded/ Fabricated",
        range:
          "15 NB UP TO 600 NB IN SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 etc.",
        form: "Round, Square, Rectangular, Hydraulic etc.",
        length: "Single Random, Double Random & Cut Length",
        end: "Plain End, Bevelled End, Treaded",
      },
      {
        category: "Tantalum",
        title: "Tantalum pipes and tubes",
        grades:
          "Grade 1, Grade 2, Grade 3, Grade 4, Grade 5, Grade 7, Grade 9, Grade 23",
        range:
          "15 NB up to 1500 NB in 150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS available with NACE MR 01-75",
        standard: "ASTM, ASME, API, AISI, BS, ANSI, DIN, JIS, MSSP, NACE",
        types:
          "Socket Weld, Slip On, Blind, Lapped, Screwed, Weld Neck, Long Weld Neck, Reducing, Spectacle, Ring Joint",
        features: [
          "Dimensional accuracy",
          "High strength",
          "Durability",
          "Corrosion resistance",
          "Excellent finish",
        ],
      },
    ],
    "stainless-steel-flanges": [
      {
        category: "Stainless & Duplex Steel",
        title: "Stainless & Duplex Steel flanges",
        range:
          "15 NB UP TO 600 NB IN 150 LBS, 300 LBS, 400 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS / TABLE 2.5, TABLE 6, TABLE 10, TABLE 16, TABLE 25, TABLE 40, TABLE 64, TABLE 160, TABLE 320, TABLE 400",
        form: "Slip On, Socket Weld, Blind, Lapped, Screwed, Weld Neck, Reducing, Spectacle, Slip On Boss, Plate, Plate Blank, Screwed Boss",
        stainlessSteel:
          "ASTM / ASME SA 182 F 304, 304L, 304H, 309H, 310H, 316, 316H, 316L, 316 LN, 317, 317L, 321, 321H, 347H",
        duplexSteel:
          "ASTM / ASME SA 182 F 44, F 45, F51, F 53, F 55, F 60, F 61",
      },
      {
        category: "Carbon & Alloy Steel",
        title: "Carbon & Alloy Steel flanges",
        range:
          "15 NB UP TO 600 NB IN 150 LBS, 300 LBS, 400 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS / TABLE 2.5, TABLE 6, TABLE 10, TABLE 16, TABLE 25, TABLE 40, TABLE 64, TABLE 160, TABLE 320, TABLE 400",
        form: "Slip On, Socket Weld, Blind, Lapped, Screwed, Weld Neck, Reducing, Spectacle, Slip On Boss, Plate, Plate Blank, Screwed Boss",
        carbonSteel: "ASTM / ASME A 105, ASTM / ASME A 350 LF 2",
        alloySteel: "ASTM / ASME A 182 GR F 5, F 9, F 11, F 12, F 22, F 91",
      },
      {
        category: "Nickel & Copper Alloy",
        title: "Nickel & Copper Alloy flanges",
        range:
          "15 NB UP TO 600 NB IN 150 LBS, 300 LBS, 400 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS / TABLE 2.5, TABLE 6, TABLE 10, TABLE 16, TABLE 25, TABLE 40, TABLE 64, TABLE 160, TABLE 320, TABLE 400",
        form: "Slip On, Socket Weld, Blind, Lapped, Screwed, Weld Neck, Reducing, Spectacle, Slip On Boss, Plate, Plate Blank, Screwed Boss",
        nickelAlloy:
          "ASTM / ASME SB 564 UNS 2200 (Nickel 200), UNS 4400 (Monel 400), UNS 8825 (Inconel 825), UNS 6600 (Inconel 600), UNS 6601 (Inconel 601), UNS 6625 (Inconel 625), UNS 10276 (Hastelloy C 276), ASTM / ASME SB 160 UNS 2201 (Nickel 201), ASTM / ASME SB 472 UNS 8020 (Alloy 20 / 20 CB 3)",
        copperAlloy:
          "ASTM / ASME SB 61 UNS C92200, ASTM / ASME SB 62 UNS C83600, ASTM / ASME SB 151 UNS 70600, 71500, C70600 (Cu-Ni 90/10), C71500 (Cu-Ni 70/30), ASTM / ASME SB 152 UNS C10100, C10200, C10300, C10800, C12000, C12200",
      },
      {
        category: "Hastelloy",
        title: "Hastelloy flanges",
        grades: "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000",
        size: '1/2"NB to 12"NB',
        standard: "ASTM, ASME, API, AISI, BS, ANSI, DIN, JIS, MSSP, NACE",
        types:
          "Socket Weld, Slip On, Blind, Lapped, Screwed, Weld Neck, Long Weld Neck, Reducing, Spectacle, Ring Joint",
        features: [
          "Durability",
          "Corrosion resistance",
          "Dimensional accuracy",
          "High strength",
          "Excellent finish",
        ],
      },
      {
        category: "Inconel",
        title: "Inconel flanges",
        grades:
          "Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750",
        size: "1/2 inch - 48 inch (15mm - 1200mm)",
        standard: "ANSI/ASME B16.5, ANSI B16.47 API, DIN, JIS, BS",
        types:
          "Socket Weld, Slip On, Blind, Lapped, Screwed, Weld Neck, Long Weld Neck, Reducing, Spectacle, Ring Joint",
        features: [
          "Durability",
          "Corrosion resistance",
          "Dimensional accuracy",
          "High strength",
          "Excellent finish",
        ],
      },
      {
        category: "Incoloy",
        title: "Incoloy flanges",
        grades:
          "Incoloy 800, Incoloy 825, Incoloy 925, Incoloy a-286, Incoloy DS",
        flangeGrade:
          "ASTM A 182 F 304/L; 316/L; 317/L; 309; 310; 321; 347; 904L",
        type: "SORF, BLRF, WNRF, SOLJ",
        class: "50 To 3000",
        range:
          "DN15 Upto DN1800 IN 150 LBS, 300 LBS, 400 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS / TABLE 2.5, TABLE 6, TABLE 10, TABLE 16, TABLE 25, TABLE 40, TABLE 64, TABLE 160, TABLE 320, TABLE 400",
        types:
          "Socket Weld, Slip On, Blind, Lapped, Screwed, Weld Neck, Long Weld Neck, Reducing, Spectacle, Ring Joint",
        features: [
          "Durability",
          "Corrosion resistance",
          "Dimensional accuracy",
          "High strength",
          "Excellent finish",
        ],
      },
      {
        category: "Monel",
        title: "Monel flanges",
        grades: "Monel 400, Monel K500",
        range: '1/2" NB to 60" NB',
        types:
          "Socket Weld, Slip On, Blind, Lapped, Screwed, Weld Neck, Long Weld Neck, Reducing, Spectacle, Ring Joint",
        features: [
          "Durability",
          "Corrosion resistance",
          "Dimensional accuracy",
          "High strength",
          "Chemical resistance",
          "Excellent finish",
        ],
      },
      {
        category: "Titanium",
        title: "Titanium flanges",
        material: "Titanium",
        grade: "Gr2, Gr5, Gr7, Gr9",
        standards: "DIN, ASTM, BS",
        application: "Bicycles, Motors, Chemicals",
        description: "Standards: DIN, ASTM, BS",
        strength:
          "Superior Quality, Fast delivery, Competitive price as well as humanized after-sales service",
        features: [
          "Low density",
          "Rustless",
          "Good antiwear property",
          "High strength",
        ],
        size: "Customizable as per customer requirements",
      },
    ],
    "stainless-steel-sheet-plates": [
      {
        category: "Stainless & Duplex Steel",
        title: "Stainless & Duplex Steel Sheets, Plates",
        range:
          "0.1 mm to 100 mm thick upto 2500 mm width & upto 8000 mm length available with NACE MR 01-75s.",
        stainlessSteel:
          "ASTM / ASME SA 240 304 , 304L , 304H, 309S , 309H, 310S , 310H , 316 , 316H , 316L , 316 TI , 317 , 317L , 321 , 321H , 347 , 347 H , 409 , 410 , 410S , 430",
        duplexSteel:
          "ASTM / ASME SA 240 UNS NO. S 31803 , S 32205 , S 32550 , S 32750 , S 32760.",
      },
      {
        category: "Nickel & Copper Alloy",
        title: "Nickel & Copper Alloy Sheets, Plates",
        range:
          "5 mm to 100 mm thick in upto 2500 mm width & upto 6000 length available with NACE MR 01-75s.",
        nickelAlloy:
          "ASTM / ASME SB 162 UNS 2200 ( NICKEL 200 ) / UNS 2201 (NICKEL 201 ) ASTM / ASME SB 127UNS 4400 (MONEL 400 ) ASTM / ASME SB 424 UNS 8825 (INCONEL 825) ASTM / ASME SB 168UNS 6600 (INCONEL 600 ) / UNS 6601 ( INCONEL 601 ) ASTM / ASME SB 443 UNS 6625 (INCONEL 625) ASTM / ASME SB 574 UNS 10276 ( HASTELLOY C 276 ) ASTM / ASME SB 462 UNS 8020 ( ALLOY 20 / 20 CB 3 )",
      },
      {
        category: "Hastelloy",
        title: "Hastelloy Sheets, Plates",
        grades: "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000",
        form: "Hastelloy Sheet, Hastelloy Coil, Hastelloy Strips, Hastelloy Plates, Hastelloy Circle, Hastelloy Ring",
      },
      {
        category: "Inconel",
        title: "Inconel Sheets, Plates",
        grades:
          "Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750",
        standard: "ASTM / ASME SB 168, ASTM / ASME SB 424 , ASTM / ASME SB 443",
      },
      {
        category: "Incoloy",
        title: "Incoloy Sheets, Plates",
        grades:
          "Incoloy 800, incoloy 825, Incoloy 925, Incoloy a-286, Incoloy DS",
        type: "Seamless / Erw / Welded/ Fabricated",
        standard:
          "ASTM B407, ASTM B829, ASTM B514, ASTM B775, ASTM B515, ASTM B751",
        applications:
          "Petrochemicals Plants, Oil Refineries, Fertilizers Plants, Sugar Mills, Chemical Plants, Pharmaceuticals, Textile Machinery",
      },
      {
        category: "Monel",
        title: "Monel Sheets, Plates",
        grades: "Monel 400, Monel k500",
        type: "Seamless / Erw / Welded/ Fabricated",
        form: "Round, Square, Rectangular, Hydraulic etc.",
        length: "Single Random, Double Random & Cut Length",
        end: "Plain End, Beveled End, Threaded",
        features:
          "Hot Dipped Galvanizing, Epoxy & Fbe Coating, Electro Polish, Draw & Expansion",
      },
      {
        category: "Titanium",
        title: "Titanium Sheets, Plates",
        specifications:
          "Hot and Cold Rolled, Gr1~Gr23, Thickness: 0.3mm - 60mm, Length: 6000mm, ASTM B265, ASTM 4911, F67, F136",
        material: "Titanium and titanium alloys",
        pureTitaniumGrade: "GR1, GR2, GR3, GR4",
        titaniumAlloyGrade:
          "GR5 (6% Al, 4%V), GR6 (5% AL, 2.5%Sn), Gr.7 (Titanium + Pd), Gr.9 (3% Al, 2.5%V), Gr.10 (11.5%Mo, 6% Zr, 4.5% Sn), Gr.11 (Titanium + Pd), Gr.12 (0.3% Mo, 0.8% Ni)",
        commonSpecification:
          "ASTM B265(Gr2) - Sheet,Strip and Plate; ASTM B338 - Tube,Seamless and Welded; ASTM B348(Gr2) - Bars and Billets; ASTM B861 - Seamless Pipe; ASTM B863 - Wire; ASTM F67(Gr2) - Unalloyed Titanium for Surgical Implants",
      },
      {
        category: "Tantalum",
        title: "Tantalum Sheets, Plates",
        specifications: "Tantalum sheet, tantalum plate, tantalum foil",
        grade: "RO5200, Ro5400, RO5252, RO5255",
        standard: "ASTM B708-98",
        size: "T0.1-10.0mm",
        description:
          "We are factory specializing in the manufacture and export Tantalum and Niobium prodcut for more than ten years,Including foil tube ,rod,wire,sheet,plate, ,rod,strip,target and so on We can supply the best quallity and low price. Tantalum sheets, Tantalum- tungsten alloy sheets(Ta2.5W, Ta10W)",
        purity: "99.95%min or 99.99%min conformity with ASTM B 708 98",
        sizeTable:
          "Foil: thickness 0.03-0.09mm, width 30-600mm, length 100mm; Sheet: thickness 0.1-0.5mm, width 30-609.6mm, length 30-1000mm; Board: thickness 0.5-10mm, width 50-1000mm, length 50-2000mm",
      },
    ],
    "stainless-steel-round-bars": [
      {
        category: "Stainless & Duplex Steel",
        title: "Stainless & Duplex Steel Round Bars",
        range: "3.17 MM TO 350 MM DIA",
        stainlessSteel:
          "ASTM / ASME SA 276 TP 304, 304L, 309S, 309H, 310S, 316, 316L, 316 TI, 317, 321, 347, 410, 420, 430, 431, 440A, B & C, 446. ASTM / ASME SA 479 TP 304, 304L, 304H, 309S, 309H, 310S, 310H, 316, 316H, 316L, 316 TI, 317, 321, 321H, 347, 347 H, 410, 430, 431 & 444",
        duplexSteel:
          "ASTM / ASME SA 276 UNS NO. S 31803, S 32205, S 32550, S 32750, S 32760",
      },
      {
        category: "Nickel & Copper Alloy",
        title: "Nickel & Copper Alloy Round Bars",
        range: "3.17 MM TO 350 MM DIA",
        nickelAlloy:
          "ASTM / ASME SB 160 UNS 2200 (NICKEL 200) / UNS 2201 (NICKEL 201), ASTM / ASME SB 164 UNS 4400 (MONEL 400), ASTM / ASME SB 425 UNS 8825 (INCONEL 825), ASTM / ASME SB 166 UNS 6600 (INCONEL 600) / UNS 6601 (INCONEL 601), ASTM / ASME SB 446 UNS 6625 (INCONEL 625), ASTM / ASME SB 574 UNS 10276 (HASTELLOY C 276), ASTM / ASME SB 472 UNS 8020 (ALLOY 20 / 20 CB 3)",
      },
      {
        category: "Hastelloy",
        title: "Hastelloy Round Bars",
        grades: "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000",
        type: "Hastelloy Round Bar, Hastelloy Bright Bar, Hastelloy Polish Bar, Hastelloy Black Round Bar, Hastelloy Forged Bar, Hastelloy Forged Round Bar, Hastelloy Hex Bar, Hastelloy Forged Hex Bar, Hastelloy Flat Bar, Hastelloy Rod",
      },
      {
        category: "Inconel",
        title: "Inconel Round Bars",
        grades:
          "Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750",
        sizes: "1mm to 200mm diameter",
        type: "Bars, Rods, wire",
        standard: "ASTM, ASME, API, AISI, BS, ANSI, DIN, JIS, MSSP, NACE",
      },
      {
        category: "Incoloy",
        title: "Incoloy Round Bars",
        grades:
          "Incoloy 800, Incoloy 825, Incoloy 925, Incoloy a-286, Incoloy DS",
        standard:
          "ASTM B408, AMS 5766, ISO 9723, ISO 9724, BS 3076NA15, BS 3075NA15, EN 10095, VdTÜV 412 & 434",
        type: "Round Bar Bright Bar, Polish Bar, Black Round Bar, Forged Bar, Forged Round Bar, Hex Bar, Forged Hex Bar, Flat Bar, Rod",
      },
      {
        category: "Monel",
        title: "Monel Round Bars",
        grades: "Monel 400, Monel k500",
        range: "5 mm dia To 500 mm dia in 100 mm TO 6000 mm Length",
        standard: "ASTM / ASME SB 164",
      },
      {
        category: "Nitronic 50",
        title: "Nitronic 50 Round Bars",
        features:
          "Nitronic 50 Stainless Steel is an austenitic stainless steel with a blend of strength and corrosion resistance that is better than Stainless Steel 316, 316L, 317 and 317L. About double the yield strength at room temperature compared to Stainless Steel 316/316L and 317/317L. Good mechanical properties at elevated and sub-zero temperatures. Does not become magnetic even when severely cold worked. Outstanding corrosion resistance in harsh environments, especially in marine applications.",
        grades: "XM-19 (UNS S20910), Nitronic 50 Annealed, XM-19HS",
      },
      {
        category: "Nitronic 60",
        title: "Nitronic 60 Round Bars",
        characteristics:
          "Best galling resistance of the entire range of Stainless Steels. High pitting resistance, Outstanding corrosion resistance, Good high temperature properties for temperatures around 982 degrees Centigrade, Oxidation resistance, Crevice corrosion and chloride pitting resistance greater than Stainless Steel 316",
        primaryElements:
          "Chromium: 16-18%, Nickel: 8-9%, Manganese: 7-9%, Silicon: 3.5-4.5%, Iron: Balance, Trace amounts of Carbon, Sulfur, Phosphorus and Nitrogen",
        industries:
          "Oil and gas production, Hydroelectric power, Petrochemical, Food processing, Automotive, Marine, Pharmaceutical, Construction and chemical sector",
      },
      {
        category: "Titanium",
        title: "Titanium Round Bars",
        specifications:
          "Titanium round bar, Grade: Gr1, Gr2, Gr3, Gr5, Gr7, Standard: ASTM B348, ASTM F136, ASTM F67, AMS 4928",
        grade: "Gr1, Gr2, Gr4, Gr5, Ti-6AL4V ELI, Gr.7, Gr.9, Gr.12",
        size: "Diameter: 4mm to 350mm, Length: 50mm to 6000mm",
        applications: "Industry, glasses and more",
      },
      {
        category: "Tantalum",
        title: "Tantalum Round Bars",
        specifications: "Tantalum bar, Tantalum- tungsten alloy bar",
        grade: "RO5200, RO5400, RO5252(Ta-2.5W), RO5255(Ta-10W)",
        size: "Dia 3~120mm",
        standard: "ASTM B 365",
        purity: ">=99.95% or 99.99%",
      },
    ],
    "stainless-steel-buttweld-fittings": [
      {
        category: "Stainless & Duplex Steel",
        title: "Stainless & Duplex Steel Buttweld Fitting",
        range:
          "15 NB UP TO 1200 NB IN SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS",
        form: "Seamless & Welded Long Radius & Short Radius Elbow 90 Deg, Long Radius Elbow 45 Deg, Long Radius & Short Radius Elbow 90 Deg, Long Radius Elbow 45 Deg, Long Radius & Short Radius Elbow 180 Deg (Return Bend), Reducing Elbow, Equal Tee, Un Equal Tee, Crosses, Concentric Reducer, Eccentric Reducer, Long Stubend, Short Stubend, Coller, Pipe Cap, Long Radius Bends R =3 D, 5 D, 6 D, 8 D, 10 D & 20 D In 15 Deg, 30 Deg, 60 Deg & 90 Deg And Drawing Bassed Butt Weld Fitting (Customised)",
        stainlessSteel:
          "ASTM / ASME SA 403 GR WP S / W / WX 304, 304L, 304H, 304N, 304LN, 309, 310H, 316, 316H, 317, 317L, 321, 321H, 347, 347 H",
        duplexSteel:
          "ASTM / ASME SA 815 UNS NO.S 31803, S 32205, S 32550, S 32750, S 32760",
      },
      {
        category: "Carbon & Alloy Steel",
        title: "Carbon & Alloy Steel Buttweld Fitting",
        range:
          "15 NB UP TO 1200 NB IN SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS",
        form: "Seamless & Welded Long Radius & Short Radius Elbow 90 Deg, Long Radius Elbow 45 Deg, Long Radius & Short Radius Elbow 90 Deg, Long Radius Elbow 45 Deg, Long Radius & Short Radius Elbow 180 Deg (Return Bend), Reducing Elbow, Equal Tee, Un Equal Tee, Crosses, Concentric Reducer, Eccentric Reducer, Long Stubend, Short Stubend, Coller, Pipe Cap, Long Radius Bends R =3 D, 5 D, 6 D, 8 D, 10 D & 20 D In 15 Deg, 30 Deg, 60 Deg & 90 Deg And Drawing Bassed Butt Weld Fitting (Customised)",
        carbonSteel:
          "ASTM / ASME A 234 WPB, WPC ASTM / ASME A 860 WPHY 42, WPHY 46, WPHY 52, WPH 60, WPHY 65 & WPHY 70",
        alloySteel:
          "ASTM / ASME A 234 WP 1, WP 5, WP 9, WP 11, WP 12, WP 22, WP 23, WP 91",
      },
      {
        category: "Nickel & Copper Alloy",
        title: "Nickel & Copper Alloy Buttweld Fitting",
        range:
          "15 NB UP TO 1200 NB IN SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS",
        form: "Seamless / Erw / Welded in Round & Square",
        nickelAlloy:
          "ASTM / ASME SB 163 UNS 2200 (NICKEL 200), ASTM / ASME SB 163 UNS 2201 (NICKEL 201), ASTM / ASME SB 163 / 165 UNS 4400 (MONEL 400), ASTM / ASME SB 464 UNS 8020 (ALLOY 20 / 20 CB 3), ASTM / ASME SB 704/705 UNS 8825 INCONEL (825), ASTM / ASME SB 167 / 517 UNS 6600 (INCONEL 600), ASTM / ASME SB 167 UNS 6601 (INCONEL 601), ASTM / ASME SB 704 /705 UNS 6625 (INCONEL 625), ASTM / ASME SB 619/622/626 UNS 10276 (HASTELLOY C 276)",
        copperAlloy:
          "ASTM / ASME SB 111 UNS NO. C 10100, 10200, 10300, 10800, 12000, 12200, 70600, 71500. ASTM / ASME SB 466 UNS NO. C 70600 (CU -NI- 90/10), C 71500 (CU -NI- 70/30)",
      },
      {
        category: "Hastelloy",
        title: "Hastelloy Buttweld Fitting",
        grades: "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000",
        standards: "ASTM / ASME SB 336 & XXS",
        types:
          "Bend (Long & Short), Elbow (180 Deg., 90 Deg. & 45 Deg.), Tee (Equal & Unequal), Reducer (Concentric & Eccentric), CAP, Stub end (Long &Short), Nipple (Barrel)",
      },
      {
        category: "Inconel",
        title: "Inconel Buttweld Fitting",
        grades:
          "Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750",
        range:
          "15 NB UP TO 600 NB IN SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS",
        types:
          "Elbow 90 Deg, Elbow 45 Deg, Elbow 180 Deg, long/short radius elbows, equal/unequal tees, concentric/eccentric reducers, caps, crosses, short/long neck stub-ends",
      },
      {
        category: "Incoloy",
        title: "Incoloy Buttweld Fitting",
        standards: "ASTM B366",
        types:
          "Bend (Long & Short), Elbow (180 Deg., 90 Deg. & 45 Deg.), Tee (Equal & Unequal), Reducer (Concentric & Eccentric), CAP, Stub end (Long &Short), Nipple (Barrel)",
      },
      {
        category: "Monel",
        title: "Monel Buttweld Fitting",
        grades: "Monel 400, Monel k500",
        range: '1/2" NB to 36" NB',
        types:
          "long/short radius elbows, equal/unequal tees, concentric/eccentric reducers, caps, cross, short/long neck stub-ends",
      },
      {
        category: "Titanium",
        title: "Titanium Buttweld Fitting",
        grades:
          "Grade 1, Grade 2, Grade 3, Grade 4, Grade 5, Grade 7, Grade 9, Grade 23",
        range: "5 NB To 600 NB in Sch.:5, 10, 20, 40, 80, 120, 160, XS, XXS",
        types:
          "Bend (Long & Short), Elbow (180 Deg., 90 Deg. & 45 Deg.), Tee (Equal & Unequal), Reducer (Concentric & Eccentric), CAP, Stub end (Long & Short), Nipple (Barrel)",
      },
    ],
    "stainless-steel-fasteners": [
      {
        category: "Nickel & Copper Alloy",
        title: "Nickel & Copper Alloy Fasteners",
        grades:
          "Nickel 200 (UNS No.2200), Nickel 201 (UNS No.2201), Nickel 205 (UNS N0.2205)",
        standard:
          "ASTM / ASME SB 163 / 165 / 167 / 464 / 517 / 619 / 622 / 626",
        types:
          "Stud bolts, Hex head bolts, Socket hexagon head screw anchor bolts, U-bolts, J bolts, Mushroom head square neck bolts, T-head bolts, Wing screw bolts, Eye bolts, Foundation bolts, Structural bolts, Hexagon nuts, Hexagon coupling nuts, Hexagon thin nuts, Square nuts, Hexagon castle nuts, Self-locking nuts, Hexagon domed cap nuts, Plain washers, Plain big & small washers, Spring lock washers, Spring washers heavy duty, Tooth washers, Star washers, Tab washers with one & two tab, Pan head slotted screws, Hexagon head screws, Cheese head slotted screws, Countersunk head slotted screws, Countersunk raised head slotted screws, Pan Phillipse head screws, Countersunk Phillipse raised head screws",
      },
      {
        category: "Hastelloy",
        title: "Hastelloy Fasteners",
        grades: "Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000",
        types:
          "Bolts, Stud bolts, Hex head bolts, Socket hexagon head screw anchor bolts, U-bolts, J bolts, Mushroom head square neck bolts, T-head bolts, Wing screws",
      },
      {
        category: "Inconel",
        title: "Inconel Fasteners",
        grades:
          "Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750",
        standard: "ASTM / ASME SB 163 / 167 / 517 / 704 / 705",
        types:
          "Bolts, Stud bolts, Hex head bolts, Socket hexagon head screw anchor bolts, U-bolts, J bolts, Mushroom head square neck bolts, T-head bolts, Wing screws, Eye bolts, Foundation bolts, Structural bolts",
        features:
          "Corrosion resistance, Optimum strength, Long service life, Fine finish",
      },
      {
        category: "Incoloy",
        title: "Incoloy Fasteners",
        grades:
          "Incoloy 800, Incoloy 825, Incoloy 925, Incoloy a-286, Incoloy DS",
        types:
          "Bolts, Stud bolts, Hex head bolts, Socket hexagon head screw anchor bolts, U-bolts, J bolts, Mushroom head square neck bolts, T-head bolts, Wing screws, Eye bolts, Foundation bolts, Structural bolts",
        features:
          "Corrosion resistance, Optimum strength, Long service life, Fine finish",
      },
      {
        category: "Monel",
        title: "Monel Fasteners",
        grades: "Monel 400, Monel K500",
        standard: "ASTM / ASME SB 564",
        types:
          "Bolts, Stud bolts, Hex head bolts, Socket hexagon head screw anchor bolts, U-bolts, J bolts, Mushroom head square neck bolts, T-head bolts, Wing screws, Eye bolts, Foundation bolts, Structural bolts",
        features:
          "Optimum strength, Corrosion resistance, Long service life, Fine finish",
      },
      {
        category: "Titanium",
        title: "Titanium Fasteners",
        grades:
          "Grade 1, Grade 2, Grade 3, Grade 4, Grade 5, Grade 7, Grade 9, Grade 23",
        types:
          "Bolts, Stud bolts, Hex head bolts, Socket hexagon head screw anchor bolts, U-bolts, J bolts, Mushroom head square neck bolts, T-head bolts, Wing screws, Eye bolts, Foundation bolts, Structural bolts",
        application:
          "Titanium fasteners can be used in racing industries such as racing motorcycles and cars, sailing boats and medical equipment, etc.",
      },
    ],
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Product Not Found
          </h1>
          <Link to="/products">
            <Button variant="steel">Back to Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span>/</span>
            <Link to="/#products" className="hover:text-primary">
              Products
            </Link>
            <span>/</span>
            <span className="text-foreground">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 mt-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/products">
            <Button variant="ghost" className="group bg-primary text-white">
              <ArrowLeft className="w-4 h-4  group-hover:-translate-x-1 transition-transform" />
              Back to Products
            </Button>
          </Link>
        </div>

        {/* Product Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-xl">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            {/* <div className="grid grid-cols-3 gap-2">
              {product.gallery.map((img, index) => (
                <div
                  key={index}
                  className="aspect-square overflow-hidden rounded-lg"
                >
                  <img
                    src={img}
                    alt={`${product.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">Premium Quality</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                {product.title}
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                {product.subtitle}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">
                Key Features:
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.slice(0, 4).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-foreground">
                Certifications:
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="bg-background"
                  >
                    <Award className="w-3 h-3 mr-1" />
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button size="lg" className="flex-1">
                <Phone className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
              <Button variant="outline" size="lg" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Catalog
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">ISO Certified</p>
              </div>
              <div className="text-center">
                <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">Fast Delivery</p>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">30+ Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <Card>
          <div className="p-6 space-y-10">
            {productItems[productId as keyof typeof productItems]?.map(
              (item, index) => (
                <div key={index} className="shadow-lg rounded-lg border">
                  {/* Category Title */}
                  <h2 className="bg-[#0A6F76] text-white text-lg font-bold p-3 rounded-t-lg">
                    {item.category}
                  </h2>

                  {/* Data Table */}
                  <table className="w-full text-left">
                    <tbody>
                      {Object.entries(item).map(([key, value]) => {
                        if (key === "category") return null; // skip category
                        return (
                          <tr
                            key={key}
                            className="odd:bg-gray-50 even:bg-white"
                          >
                            <th className="p-3 w-40 capitalize border">
                              {key}
                            </th>
                            <td className="p-3 border">
                              {Array.isArray(value) ? value.join(", ") : value}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )
            )}
          </div>
          <CardContent className="p-0">
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-4 rounded-none border-b">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="testing">Testing</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Technical Specifications
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {Object.entries(product.specifications).map(
                    ([category, specs]) => (
                      <div key={category}>
                        <h4 className="font-bold text-foreground mb-3 pb-2 border-b border-primary/20">
                          {category}
                        </h4>
                        <div className="space-y-2">
                          {specs.map((spec, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-sm">
                                {spec}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  )}
                </div>
              </TabsContent>

              <TabsContent value="applications" className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Industrial Applications
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {product.applications.map((app, index) => (
                    <Card
                      key={index}
                      className="p-4 hover:shadow-steel transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">
                          {app}
                        </span>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="features" className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Product Features & Benefits
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg"
                    >
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">
                          {feature}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="testing" className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Quality Testing & Inspection
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.testing.map((test, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 border border-primary/20 rounded-lg"
                    >
                      <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-foreground">
                          {test}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="mt-12 bg-gradient-steel">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Need Custom Specifications or Bulk Orders?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our technical team is ready to assist you with custom
              requirements, technical specifications, and competitive pricing
              for bulk orders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="steel">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +91 98690 06100
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email Inquiry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
