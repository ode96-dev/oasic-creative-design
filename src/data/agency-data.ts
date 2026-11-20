export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  client: string;
  description: string;
  outcome: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  metrics: { label: string; value: string; context: string }[];
  previewType: "real-estate" | "law-firm" | "branding-pack" | "stationery";
  filterGroup: "web" | "brand";
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
}

export interface GalleryArtifact {
  id: string;
  index: string;
  discipline: string;
  client: string;
  title: string;
  image: string;
  imageAlt: string;
  projectId: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "kontako",
    title: "KONTAKO",
    subtitle: "Real Estate Flagship Platform",
    category: "Digital Architecture & Web",
    year: "2025",
    client: "Kontako Living Group",
    description:
      "Kontako helps architectural buyers discover and commission private Nordic timber residences. We engineered an editorial property showcase built around atmospheric twilight photography, floorplan clarity, and sub-second page transitions.",
    outcome:
      "Increased qualified private viewing requests by 3.4x within 90 days of launch while reducing bounce rate on property detail pages by 42%.",
    deliverables: [
      "Digital Brand Architecture",
      "Custom Next.js Property Platform",
      "Interactive Floorplan Explorer",
      "Editorial Art Direction",
    ],
    image: "/assets/images/kontako_villa_1795182355896.jpg",
    imageAlt:
      "Contemporary Nordic timber and glass villa glowing at twilight by a still lake",
    metrics: [
      {
        label: "Qualified Inquiries",
        value: "+240%",
        context: "First 90 days post-launch",
      },
      {
        label: "Booking Conversion",
        value: "14.8%",
        context: "Private tour requests",
      },
      {
        label: "Median Session",
        value: "4m 12s",
        context: "Across residence listings",
      },
    ],
    previewType: "real-estate",
    filterGroup: "web",
  },
  {
    id: "roolland",
    title: "ROOLLAND",
    subtitle: "Corporate Law Firm Identity & Web",
    category: "Corporate Strategy & Web",
    year: "2025",
    client: "Roolland Legal Partners",
    description:
      "Every high-stakes corporate dispute demands precision. We stripped away generic legal clichés in favor of stark editorial typography, monochrome partner portraiture, and transparent case-outcome reporting.",
    outcome:
      "Positioned Roolland for international M&A retainers, streamlining partner consultation intake and cutting prospective client triage time in half.",
    deliverables: [
      "Editorial Web System",
      "Monochrome Portrait Direction",
      "Case Verdict Archive",
      "Partner Intake Workflow",
    ],
    image: "/assets/images/roolland_counsel_1795182355090.jpg",
    imageAlt:
      "Monochrome editorial portrait of a senior corporate legal partner in a tailored dark suit",
    metrics: [
      {
        label: "Cases Resolved",
        value: "284",
        context: "Verified 5-year litigation record",
      },
      {
        label: "Success Rate",
        value: "84%",
        context: "Commercial & M&A disputes",
      },
      {
        label: "Total Settlements",
        value: "$28B",
        context: "Cumulative client value",
      },
    ],
    previewType: "law-firm",
    filterGroup: "web",
  },
  {
    id: "nihoma",
    title: "NIHOMA",
    subtitle: "Smart Residence Identity & Packaging",
    category: "Brand Identity & Packaging",
    year: "2024",
    client: "Nihoma Living",
    description:
      "An integrated physical and digital identity system for modern residential communities—spanning welcome packaging boxes, matte ceramic objects, tactile access credentials, and resident onboarding software.",
    outcome:
      "Unified 18 physical and digital resident touchpoints under a single vermilion and travertine design language across 6 flagship developments.",
    deliverables: [
      "Rigid Packaging Architecture",
      "Access Keycard & Hardware System",
      "Resident Onboarding App",
      "Custom Object Production",
    ],
    image: "/assets/images/nihoma_packaging_1795182355479.jpg",
    imageAlt:
      "Minimalist white and vermilion-orange rigid packaging boxes on travertine stone",
    metrics: [
      {
        label: "Touchpoints Unified",
        value: "18",
        context: "Physical & digital assets",
      },
      {
        label: "Resident Adoption",
        value: "96%",
        context: "Mobile key onboarding rate",
      },
      {
        label: "Developments",
        value: "6",
        context: "Flagship residential sites",
      },
    ],
    previewType: "branding-pack",
    filterGroup: "brand",
  },
  {
    id: "pitaia",
    title: "PITAIA",
    subtitle: "Letterpress Stationery & Print System",
    category: "Tactile Print & Art Direction",
    year: "2024",
    client: "Pitaia Curated Living",
    description:
      "Debossed 600gsm cotton stationery and terracotta print collateral crafted for architectural interiors studio Pitaia, pairing geometric blind-embossed reliefs with disciplined editorial typography.",
    outcome:
      "Delivered a durable tactile print suite distributed across 14 design showrooms in Zurich, Milan, and Copenhagen.",
    deliverables: [
      "Blind-Debossed Letterpress Suite",
      "Custom Geometric Grid Marks",
      "Print Production Supervision",
      "Material & Paper Specification",
    ],
    image: "/assets/images/pitaia_stationery_1795182356127.jpg",
    imageAlt:
      "Thick cotton letterpress business cards in warm cream and terracotta with geometric relief",
    metrics: [
      {
        label: "Cotton Paper Stock",
        value: "600gsm",
        context: "Custom dyed mineral pigment",
      },
      {
        label: "Showroom Rollout",
        value: "14",
        context: "European studio locations",
      },
      {
        label: "Print Variants",
        value: "9",
        context: "Modular card & folio formats",
      },
    ],
    previewType: "stationery",
    filterGroup: "brand",
  },
];

export const GALLERY_ARTIFACTS: GalleryArtifact[] = [
  {
    id: "art-nihoma-box",
    index: "01",
    discipline: "Packaging System",
    client: "Nihoma",
    title: "Rigid Welcome Box Suite",
    image: "/assets/images/nihoma_packaging_1795182355479.jpg",
    imageAlt:
      "Nihoma minimalist white and vermilion packaging boxes on travertine",
    projectId: "nihoma",
  },
  {
    id: "art-pitaia-cards",
    index: "02",
    discipline: "Tactile Print",
    client: "Pitaia",
    title: "600gsm Letterpress Cards",
    image: "/assets/images/pitaia_stationery_1795182356127.jpg",
    imageAlt: "Pitaia embossed terracotta and cream cotton stationery cards",
    projectId: "pitaia",
  },
  {
    id: "art-nihoma-keytag",
    index: "03",
    discipline: "Brand Collateral",
    client: "Nihoma",
    title: "Architectural Keycard & Lanyard",
    image: "/assets/images/nihoma_keytag_1795182355794.jpg",
    imageAlt:
      "Matte cream access keycard on black woven lanyard against vermilion surface",
    projectId: "nihoma",
  },
  {
    id: "art-nihoma-mug",
    index: "04",
    discipline: "Industrial Objects",
    client: "Nihoma",
    title: "Matte Ceramic Espresso Vessel",
    image: "/assets/images/nihoma_mug_1795182355347.jpg",
    imageAlt: "Matte vermilion ceramic mug on clean light stone studio plinth",
    projectId: "nihoma",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "LOGO & BRANDING",
    description:
      "Cohesive visual identity systems built to scale cleanly from embossed stationery and physical packaging to high-contrast digital interfaces.",
    deliverables: [
      "Visual Identity Systems",
      "Typographic Direction",
      "Print & Packaging Specifications",
      "Design Guidelines",
    ],
    image: "/assets/images/pitaia_stationery_1795182356127.jpg",
    imageAlt: "Letterpress stationery identity system by Oasic",
  },
  {
    number: "02",
    title: "WEB DESIGN",
    featured: true,
    description:
      "With our commitment to creativity, innovation and order, we work closely with you to produce a website that fits your unique needs and vision.",
    deliverables: [
      "Information & UI Architecture",
      "Editorial Design Systems",
      "Responsive Grid Choreography",
      "Interactive Prototyping",
    ],
    image: "/assets/images/kontako_villa_1795182355896.jpg",
    imageAlt: "Kontako luxury real estate web design showcase",
  },
  {
    number: "03",
    title: "MOBILE APP",
    description:
      "Native iOS and Android product interfaces engineered around thumb ergonomics, clear typographic hierarchy, and tactile micro-interactions.",
    deliverables: [
      "iOS & Android Product Design",
      "Gesture & Motion Flows",
      "Component Token Libraries",
      "Usability Validation",
    ],
    image: "/assets/images/nihoma_keytag_1795182355794.jpg",
    imageAlt: "Connected smart residence access experience",
  },
  {
    number: "04",
    title: "ILLUSTRATION",
    description:
      "Bespoke 3D still lifes, architectural studies, and vector motion graphics that give product storytelling a distinct, ownable visual signature.",
    deliverables: [
      "3D Art Direction",
      "Custom Iconography",
      "Editorial Key Visuals",
      "Lottie Vector Motion",
    ],
    image: "/assets/images/hero_sculptural_orb_1795182355405.jpg",
    imageAlt: "Sculptural 3D sphere art direction",
  },
  {
    number: "05",
    title: "DEVELOPMENT",
    description:
      "Production frontend and full-stack engineering in TypeScript and Next.js, delivering accessible interfaces with crisp 60fps motion.",
    deliverables: [
      "Next.js & React Architecture",
      "Physics-Driven Motion Systems",
      "Headless CMS Integration",
      "Accessibility & Speed Audits",
    ],
    image: "/assets/images/nihoma_packaging_1795182355479.jpg",
    imageAlt: "Structured engineering and system architecture",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "martin-rosser",
    name: "Martin Rosser",
    role: "CEO",
    company: "Pentiar",
    avatar: "/assets/images/client_portrait_1795182355293.jpg",
    quote:
      "We are very happy to work with such an amazing team! Our working experience is great. They have a deep understanding of our brand vision and values, and are able to present them in creative and impressive designs.",
  },
  {
    id: "kianna-curtis",
    name: "Kianna Curtis",
    role: "Founder",
    company: "Kontako",
    avatar: "/assets/images/kontako_villa_1795182355896.jpg",
    quote:
      "OASIC translated our architectural standards into a calm, high-converting flagship site. Private viewing requests more than tripled in the first quarter without adding a single ad campaign.",
  },
  {
    id: "arthur-vance",
    name: "Arthur Vance",
    role: "Senior Partner",
    company: "Roolland Legal",
    avatar: "/assets/images/roolland_counsel_1795182355090.jpg",
    quote:
      "Their restraint sets them apart. Rather than burying our practice in stock templates, they built an authoritative digital presence that reflects how our partners actually work.",
  },
];
