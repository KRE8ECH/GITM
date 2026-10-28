export const site = {
  name: "Global Institute of Technology & Management",
  shortName: "GITM",
  tagline: "Gurugram, Haryana",
  established: 2008,
  url: "https://gitmgurgaon.com",
  description:
    "GITM Gurugram is an AICTE-approved, Gurugram University-affiliated institute offering B.Tech, M.Tech, MBA and BBA programmes on an 18-acre campus in Farrukhnagar, Gurugram.",
  applyUrl: "https://admissions.gitmgurgaon.com/global-application-form",
  whatsapp: "https://wa.me/+919555100100?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20admissions%20at%20GITM%20Gurugram.",
  campus: {
    label: "Campus",
    lines: [
      "Global Institute of Technology & Management",
      "5 KM Milestone, Kheda Khurampur",
      "Farrukhnagar, Haily Mandi Road",
      "Gurugram, Haryana – 122506",
    ],
    mapQuery: "Global Institute of Technology & Management Farrukhnagar Gurugram",
    phone: "+91 80539 80002",
    phoneAlt: "+91 80539 80003",
    email: "info@gitmgurgaon.com",
  },
  delhi: {
    label: "Delhi Office",
    lines: [
      "Ch. Birkhe Ram Complex, D–96, 1st Floor",
      "Munirka Village, Opp. Community Centre",
      "New Delhi – 110067",
    ],
    phone: "+91 88005 26886",
    email: "info@gitmgurgaon.com",
  },
};

export const departments = [
  { name: "Admissions", phone: "+91 95551 00100", email: "admission@gitmgurgaon.com" },
  { name: "Administration", phone: "+91 89507 46762", email: "admin@gitmgurgaon.com" },
  { name: "Corporate Relations (TPO)", phone: "+91 80539 80002", email: "ccr@gitmgurgaon.com" },
  { name: "Hostel", phone: "+91 74048 41737", email: "hostelwarden@gitmgurgaon.com" },
  { name: "Transport", phone: "+91 89507 18034", email: "tptincharge@gitmgurgaon.com" },
  { name: "Finance & Accounts", phone: "+91 86840 69747", email: "accounts@gitmgurgaon.com" },
];

export const stats = [
  { value: "2008", label: "Founded", note: "18 years of academic excellence" },
  { value: "18", suffix: " acres", label: "Green campus", note: "Farrukhnagar, Gurugram" },
  { value: "3L", suffix: " sq.ft.", label: "Built-up area", note: "Labs, library, studios, hostels" },
  { value: "500+", label: "Workstations", note: "Across 10 computer labs" },
];

export const accreditations = [
  { name: "AICTE", detail: "Approved by the All India Council for Technical Education" },
  { name: "Gurugram University", detail: "Affiliated for all technical & management programmes" },
  { name: "DTE Haryana", detail: "Recognised by the Directorate of Technical Education" },
  { name: "MHRD, Govt. of India", detail: "Approved under the Ministry of Human Resource Development" },
];

export const nav: {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
}[] = [
  { label: "About", href: "/about" },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "B.Tech CSE", href: "/programmes/btech-cse", description: "Computer Science & Engineering" },
      { label: "B.Tech AI & DS", href: "/programmes/btech-ai-ds", description: "Artificial Intelligence & Data Science" },
      { label: "B.Tech ECE", href: "/programmes/btech-ece", description: "Electronics & Communication" },
      { label: "B.Tech ME", href: "/programmes/btech-me", description: "Mechanical Engineering" },
      { label: "B.Tech CE", href: "/programmes/btech-ce", description: "Civil Engineering" },
      { label: "M.Tech CSE", href: "/programmes/mtech-cse", description: "Postgraduate engineering" },
      { label: "MBA", href: "/programmes/mba", description: "Master of Business Administration" },
      { label: "BBA", href: "/programmes/bba", description: "Bachelor of Business Administration" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to apply", href: "/admissions#process", description: "Four steps from enquiry to enrolment" },
      { label: "Eligibility & fees", href: "/admissions#eligibility", description: "Programme-wise requirements" },
      { label: "Scholarships", href: "/admissions#scholarships", description: "Merit and need-based support" },
      { label: "International students", href: "/admissions#international", description: "Visas, AIU and documents" },
    ],
  },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];
