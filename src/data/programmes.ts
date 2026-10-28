export type Programme = {
  slug: string;
  name: string;
  shortName: string;
  degree: "B.Tech" | "M.Tech" | "MBA" | "BBA";
  department: string;
  duration: string;
  level: "Undergraduate" | "Postgraduate";
  image: string;
  blurb: string;
  overview: string[];
  highlights: { label: string; value: string }[];
  curriculum: { year: string; focus: string; courses: string[] }[];
  careers: { role: string; description: string }[];
  facilities: string[];
  eligibility: string;
};

export const programmes: Programme[] = [
  {
    slug: "btech-cse",
    name: "B.Tech Computer Science & Engineering",
    shortName: "B.Tech CSE",
    degree: "B.Tech",
    department: "Computer Science & Engineering",
    duration: "4 years · 8 semesters",
    level: "Undergraduate",
    image: "/images/lab.webp",
    blurb:
      "A hands-on computer science degree built around industry practice — eight dedicated labs, 250+ workstations and a curriculum that keeps pace with the market.",
    overview: [
      "Rooted at GITM since 2008, the Department of Computer Science & Engineering is the institute's largest department, with an independent floor of classrooms, laboratories and faculty offices.",
      "The programme is structured with foundational courses, electives, industry visits, internships and a capstone project. Students work across theoretical computer science, image processing and computer vision, high-performance computing, artificial intelligence and deep learning, IoT, data science, cloud computing, networking and cyber security.",
      "Our faculty bring together academic rigour and industry experience, and the department's diverse student body creates a genuinely cross-cultural learning environment.",
    ],
    highlights: [
      { label: "Labs", value: "8 dedicated computer labs" },
      { label: "Workstations", value: "250+ systems, Windows & Linux" },
      { label: "Campus network", value: "20 Mbps leased line + Wi-Fi" },
      { label: "Focus areas", value: "AI, cloud, cyber security, IoT" },
    ],
    curriculum: [
      {
        year: "Year 1",
        focus: "Foundations",
        courses: ["Programming in C", "Engineering Mathematics", "Digital Logic Design", "Physics & Communication Skills", "Engineering Graphics"],
      },
      {
        year: "Year 2",
        focus: "Core computing",
        courses: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Computer Organisation", "Operating Systems"],
      },
      {
        year: "Year 3",
        focus: "Systems & specialisation",
        courses: ["Computer Networks", "Software Engineering", "Theory of Computation", "Artificial Intelligence", "Departmental electives"],
      },
      {
        year: "Year 4",
        focus: "Industry & capstone",
        courses: ["Machine Learning", "Cloud Computing", "Cyber Security", "Internship", "Major project"],
      },
    ],
    careers: [
      { role: "Software Engineer", description: "Builds and maintains systems for corporate needs, owning operational feasibility across the software development lifecycle." },
      { role: "Software Developer", description: "Designs, develops and ships applications — including debugging, interface upgrades and performance tuning." },
      { role: "Database Designer", description: "Creates and maintains database architecture, capacity planning and data integrity for an organisation." },
      { role: "Data / AI Engineer", description: "Works on pipelines, models and deployment for data science and machine learning products." },
      { role: "Cloud & DevOps Engineer", description: "Automates infrastructure, deployments and reliability for cloud-hosted systems." },
      { role: "Cyber Security Analyst", description: "Monitors, tests and hardens systems against threats and compliance risk." },
    ],
    facilities: [
      "8 computer laboratories with 250+ systems",
      "Windows and Linux environments for computation",
      "High-speed internet with campus-wide Wi-Fi",
      "Dedicated servers and printers for staff and students",
      "Digital electronics and microprocessor kits",
      "Departmental library and project room",
    ],
    eligibility:
      "10+2 with Physics, Mathematics and one of Chemistry / Computer Science / Biology, with at least 45% aggregate (40% for reserved categories of Haryana), plus a valid JEE Main score for HSTES counselling.",
  },
  {
    slug: "btech-ai-ds",
    name: "B.Tech Artificial Intelligence & Data Science",
    shortName: "B.Tech AI & DS",
    degree: "B.Tech",
    department: "Artificial Intelligence & Data Science",
    duration: "4 years · 8 semesters",
    level: "Undergraduate",
    image: "/images/classroom.webp",
    blurb:
      "An applied AI degree covering machine learning, deep learning and data engineering — for students who want to build the models, not just use them.",
    overview: [
      "Artificial intelligence and data science now sit at the centre of daily life, from autonomous vehicles to recommendation engines and diagnostics. This programme prepares students to design those systems responsibly.",
      "The curriculum builds from mathematics and programming into machine learning, deep learning, natural language processing, computer vision and MLOps, with continuous exposure to real datasets and project work.",
      "Students work inside the institute's Centre of Excellence and collaborate with the Global Research & Development Cell on applied problems from industry partners.",
    ],
    highlights: [
      { label: "Core stack", value: "Python, PyTorch, SQL, cloud" },
      { label: "Labs", value: "AI/ML lab with GPU workstations" },
      { label: "Practice", value: "Kaggle-style sprints & hackathons" },
      { label: "Careers", value: "ML engineer, data scientist, MLOps" },
    ],
    curriculum: [
      { year: "Year 1", focus: "Mathematics & coding", courses: ["Python Programming", "Linear Algebra & Probability", "Statistics for Data Science", "Data Structures", "Communication Skills"] },
      { year: "Year 2", focus: "Data engineering", courses: ["Database Systems", "Data Visualisation", "Machine Learning I", "Big Data Fundamentals", "Operating Systems"] },
      { year: "Year 3", focus: "Deep learning", courses: ["Deep Learning", "Natural Language Processing", "Computer Vision", "Reinforcement Learning", "Cloud & MLOps"] },
      { year: "Year 4", focus: "Applied AI", courses: ["Generative AI", "AI Ethics & Governance", "Capstone project", "Industry internship", "Electives"] },
    ],
    careers: [
      { role: "Machine Learning Engineer", description: "Trains, evaluates and deploys models into production systems." },
      { role: "Data Scientist", description: "Turns raw data into decisions using statistics, experiments and modelling." },
      { role: "Data Engineer", description: "Builds the pipelines and warehouses that make analytics possible." },
      { role: "AI Product Analyst", description: "Translates business problems into AI-backed product requirements." },
    ],
    facilities: [
      "GPU-enabled AI/ML laboratory",
      "Access to cloud credits for coursework",
      "Centre of Excellence in emerging technologies",
      "Faculty mentorship for research publications",
    ],
    eligibility:
      "10+2 with Physics, Mathematics and one of Chemistry / Computer Science / Biology, with at least 45% aggregate (40% for reserved categories), plus a valid JEE Main score.",
  },
  {
    slug: "btech-ece",
    name: "B.Tech Electronics & Communication Engineering",
    shortName: "B.Tech ECE",
    degree: "B.Tech",
    department: "Electronics & Communication Engineering",
    duration: "4 years · 8 semesters",
    level: "Undergraduate",
    image: "/images/classroom-2.webp",
    blurb:
      "From semiconductor devices to 5G and embedded systems — the engineering behind every connected device in the modern world.",
    overview: [
      "Electronics & Communication Engineering deals with electronic devices, circuits and communication equipment — transmitters, receivers, integrated circuits, antennas and embedded controllers.",
      "The programme balances device physics with system design, so graduates can work across telecom, embedded products, VLSI and signal processing.",
      "Laboratories cover analog and digital electronics, communication systems, microprocessors, signal processing and VLSI design, supported by simulation tools used in industry.",
    ],
    highlights: [
      { label: "Labs", value: "Electronics, VLSI, communication" },
      { label: "Tools", value: "MATLAB, Xilinx, Proteus, Cadence" },
      { label: "Focus", value: "Embedded, 5G, IoT, signal processing" },
      { label: "Projects", value: "Annual hardware innovation showcase" },
    ],
    curriculum: [
      { year: "Year 1", focus: "Engineering foundations", courses: ["Basic Electronics", "Network Theory", "Mathematics I & II", "Programming", "Physics"] },
      { year: "Year 2", focus: "Devices & circuits", courses: ["Analog Electronics", "Digital Electronics", "Signals & Systems", "Electromagnetic Theory", "Microprocessors"] },
      { year: "Year 3", focus: "Communication systems", courses: ["Analog & Digital Communication", "Digital Signal Processing", "VLSI Design", "Antenna & Wave Propagation", "Embedded Systems"] },
      { year: "Year 4", focus: "Specialisation", courses: ["Wireless & Mobile Communication", "Optical Fibre", "IoT Systems", "Internship", "Major project"] },
    ],
    careers: [
      { role: "VLSI Design Engineer", description: "Designs and verifies chips and digital blocks for semiconductor companies." },
      { role: "Embedded Systems Engineer", description: "Programs microcontrollers for automotive, industrial and consumer devices." },
      { role: "Telecom / RF Engineer", description: "Plans, deploys and optimises communication networks and radio systems." },
      { role: "IoT Solutions Engineer", description: "Connects sensors and devices to cloud platforms with reliable firmware." },
    ],
    facilities: [
      "Analog and digital electronics laboratories",
      "Communication systems and microwave lab",
      "VLSI and embedded design lab",
      "Signal processing lab with MATLAB licences",
    ],
    eligibility:
      "10+2 with Physics, Mathematics and Chemistry, with at least 45% aggregate (40% for reserved categories), plus a valid JEE Main score for HSTES counselling.",
  },
  {
    slug: "btech-me",
    name: "B.Tech Mechanical Engineering",
    shortName: "B.Tech ME",
    degree: "B.Tech",
    department: "Mechanical Engineering",
    duration: "4 years · 8 semesters",
    level: "Undergraduate",
    image: "/images/campus-view.webp",
    blurb:
      "One of the oldest and broadest engineering disciplines, taught with a manufacturing and automation focus that maps directly to the Delhi NCR industrial belt.",
    overview: [
      "Mechanical engineering finds application in every field of technology, which is why it remains one of the most versatile engineering degrees available.",
      "GITM's programme covers thermal sciences, design, manufacturing and industrial engineering, with practical work in workshops, CAD/CAM labs and thermal labs.",
      "The department runs industry visits across the Gurugram–Manesar manufacturing corridor, giving students direct exposure to automotive and process plants.",
    ],
    highlights: [
      { label: "Workshops", value: "Machining, welding, foundry" },
      { label: "Labs", value: "Thermal, fluid, CAD/CAM, metrology" },
      { label: "Software", value: "AutoCAD, SolidWorks, ANSYS, CATIA" },
      { label: "Industry", value: "Visits across Manesar auto belt" },
    ],
    curriculum: [
      { year: "Year 1", focus: "Engineering foundations", courses: ["Engineering Mechanics", "Engineering Graphics", "Thermodynamics", "Mathematics", "Workshop Practice"] },
      { year: "Year 2", focus: "Core mechanical", courses: ["Strength of Materials", "Fluid Mechanics", "Manufacturing Processes", "Theory of Machines", "Material Science"] },
      { year: "Year 3", focus: "Design & thermal", courses: ["Machine Design", "Heat Transfer", "IC Engines", "CAD/CAM", "Industrial Engineering"] },
      { year: "Year 4", focus: "Specialisation", courses: ["Automobile Engineering", "Robotics & Automation", "Internship", "Major project", "Electives"] },
    ],
    careers: [
      { role: "Design Engineer", description: "Creates and validates mechanical components and assemblies in CAD." },
      { role: "Production / Manufacturing Engineer", description: "Improves yield, cycle time and quality on the shop floor." },
      { role: "Automotive Engineer", description: "Works on powertrain, chassis and vehicle systems." },
      { role: "Maintenance & Plant Engineer", description: "Keeps industrial plant and equipment reliable and safe." },
    ],
    facilities: [
      "Central workshop with machining and welding bays",
      "Thermal and fluid mechanics laboratories",
      "CAD/CAM laboratory with industry software",
      "Metrology and material testing lab",
    ],
    eligibility:
      "10+2 with Physics, Mathematics and Chemistry, with at least 45% aggregate (40% for reserved categories), plus a valid JEE Main score for HSTES counselling.",
  },
  {
    slug: "btech-ce",
    name: "B.Tech Civil Engineering",
    shortName: "B.Tech CE",
    degree: "B.Tech",
    department: "Civil Engineering",
    duration: "4 years · 8 semesters",
    level: "Undergraduate",
    image: "/images/campus-front.webp",
    blurb:
      "Civil engineering has enduring employability in technical education — and plays the decisive role in India's infrastructure build-out.",
    overview: [
      "Civil engineering underpins every other form of development: transport, water, housing, energy and urban infrastructure all depend on it.",
      "The programme covers structural analysis, geotechnical engineering, transportation, surveying, environmental engineering and construction management, reinforced by site visits to live projects.",
      "Graduates work with contractors, consultancies, government agencies and infrastructure developers, or pursue postgraduate study and public-sector examinations.",
    ],
    highlights: [
      { label: "Labs", value: "Concrete, soil, hydraulics, survey" },
      { label: "Software", value: "STAAD Pro, AutoCAD, Revit" },
      { label: "Practice", value: "Live site visits & field surveys" },
      { label: "Exams", value: "Pathway to GATE & PSU roles" },
    ],
    curriculum: [
      { year: "Year 1", focus: "Engineering foundations", courses: ["Engineering Mechanics", "Surveying", "Building Materials", "Mathematics", "Engineering Graphics"] },
      { year: "Year 2", focus: "Analysis", courses: ["Strength of Materials", "Structural Analysis", "Fluid Mechanics", "Concrete Technology", "Soil Mechanics"] },
      { year: "Year 3", focus: "Design", courses: ["RCC Design", "Steel Design", "Transportation Engineering", "Environmental Engineering", "Hydraulics"] },
      { year: "Year 4", focus: "Practice", courses: ["Construction Management", "Earthquake Engineering", "Estimation & Costing", "Internship", "Major project"] },
    ],
    careers: [
      { role: "Site Engineer", description: "Supervises construction quality, schedule and safety on site." },
      { role: "Structural Designer", description: "Analyses and designs structures for buildings and infrastructure." },
      { role: "Quantity Surveyor", description: "Prepares estimates, bills of quantities and contract documentation." },
      { role: "Public Sector Engineer", description: "Joins state and central agencies delivering public infrastructure." },
    ],
    facilities: [
      "Concrete and material testing laboratory",
      "Soil mechanics and geotechnical lab",
      "Hydraulics and environmental engineering labs",
      "Survey field equipment and CAD studio",
    ],
    eligibility:
      "10+2 with Physics, Mathematics and Chemistry, with at least 45% aggregate (40% for reserved categories), plus a valid JEE Main score for HSTES counselling.",
  },
  {
    slug: "mtech-cse",
    name: "M.Tech Computer Science & Engineering",
    shortName: "M.Tech CSE",
    degree: "M.Tech",
    department: "Computer Science & Engineering",
    duration: "2 years · 4 semesters",
    level: "Postgraduate",
    image: "/images/lab.webp",
    blurb:
      "A research-oriented postgraduate programme for engineers who want depth in AI, data science, security or high-performance computing.",
    overview: [
      "The CSE department was established at GITM in 2008 and has since grown into a full research and teaching ecosystem alongside the B.Tech programme.",
      "The M.Tech programme combines advanced coursework with a year-long dissertation, supervised by faculty working in image processing, machine learning, networks and cloud systems.",
      "Students publish in national and international venues and often work alongside the Global Research & Development Cell on funded problems.",
    ],
    highlights: [
      { label: "Duration", value: "2 years, 4 semesters" },
      { label: "Research", value: "Dissertation from semester II" },
      { label: "Tracks", value: "AI/ML, security, networks, cloud" },
      { label: "Outcome", value: "Publication or industry R&D" },
    ],
    curriculum: [
      { year: "Semester I", focus: "Advanced core", courses: ["Advanced Algorithms", "Advanced Computer Architecture", "Mathematical Foundations", "Research Methodology"] },
      { year: "Semester II", focus: "Specialisation", courses: ["Machine Learning", "Advanced Computer Networks", "Elective I & II", "Dissertation Phase I"] },
      { year: "Semester III", focus: "Deep specialisation", courses: ["Elective III", "Elective IV", "Dissertation Phase II"] },
      { year: "Semester IV", focus: "Thesis", courses: ["Dissertation defence", "Research paper submission"] },
    ],
    careers: [
      { role: "Research Engineer", description: "Works in industrial R&D on applied machine learning and systems." },
      { role: "Senior Software Engineer", description: "Leads architecture and delivery of complex software products." },
      { role: "Doctoral researcher", description: "Continues to PhD study in computing disciplines." },
      { role: "Technical faculty", description: "Enters academic teaching and research careers." },
    ],
    facilities: [
      "Dedicated research lab and faculty supervision",
      "Access to IEEE/Springer digital libraries",
      "Conference and publication support",
      "Centre of Excellence project space",
    ],
    eligibility:
      "B.E./B.Tech in CSE/IT/ECE or equivalent with at least 50% marks (47.5% for reserved categories), plus a valid GATE score or as per HSTES/University norms.",
  },
  {
    slug: "mba",
    name: "Master of Business Administration",
    shortName: "MBA",
    degree: "MBA",
    department: "Department of Management Studies",
    duration: "2 years · 4 semesters",
    level: "Postgraduate",
    image: "/images/students.webp",
    blurb:
      "A practice-led MBA with specialisations in marketing, finance, HR and business analytics, built around live company projects and a full placement season.",
    overview: [
      "The Department of Management Studies grew from an idea floated in 2007 into one of the institute's most sought-after programmes.",
      "The MBA blends core management disciplines with electives in marketing, finance, human resources and business analytics, delivered through case discussions, simulation and live consulting assignments.",
      "Students run the Corporate Relations Cell alongside the TPO, organise management festivals and complete a summer internship between the first and second year.",
    ],
    highlights: [
      { label: "Specialisations", value: "Marketing, Finance, HR, Analytics" },
      { label: "Internship", value: "8-week summer placement" },
      { label: "Practice", value: "Live company projects & simulations" },
      { label: "Placements", value: "Dedicated CCR & TPO support" },
    ],
    curriculum: [
      { year: "Semester I", focus: "Core I", courses: ["Principles of Management", "Managerial Economics", "Accounting", "Business Statistics", "Organisational Behaviour"] },
      { year: "Semester II", focus: "Core II", courses: ["Marketing Management", "Financial Management", "Operations Management", "Business Communication", "Summer internship"] },
      { year: "Semester III", focus: "Specialisation", courses: ["Strategic Management", "Specialisation electives I–III", "Business Analytics", "Research project"] },
      { year: "Semester IV", focus: "Capstone", courses: ["International Business", "Entrepreneurship", "Electives IV–V", "Dissertation"] },
    ],
    careers: [
      { role: "Marketing Manager", description: "Owns brand, campaigns and go-to-market for products and services." },
      { role: "Financial Analyst", description: "Analyses investment, budgeting and business performance." },
      { role: "HR Business Partner", description: "Aligns talent strategy with business objectives." },
      { role: "Business Analyst", description: "Turns data into decisions across operations and strategy." },
    ],
    facilities: [
      "Case-study classrooms and seminar halls",
      "Business analytics and simulation software",
      "Corporate relations cell with recruiter network",
      "GD/PI coaching and soft-skills lab",
    ],
    eligibility:
      "Bachelor's degree in any discipline with at least 50% aggregate (47.5% for reserved categories) and a valid CAT/MAT/CMAT/Haryana MBA entrance score.",
  },
  {
    slug: "bba",
    name: "Bachelor of Business Administration",
    shortName: "BBA",
    degree: "BBA",
    department: "Department of Management Studies",
    duration: "3 years · 6 semesters",
    level: "Undergraduate",
    image: "/images/campus-hero.webp",
    blurb:
      "A three-year business foundation covering management, marketing, finance and analytics — with the option to continue into GITM's MBA.",
    overview: [
      "The BBA builds business fundamentals early: accounting, marketing, economics, operations and organisational behaviour, taught through case work and group projects.",
      "Students choose specialisations in the final year and complete an industry internship, making the programme a direct pathway into management roles or postgraduate study.",
      "The programme shares faculty and the corporate relations network with the MBA department, giving undergraduates an early introduction to recruiters.",
    ],
    highlights: [
      { label: "Duration", value: "3 years, 6 semesters" },
      { label: "Specialisations", value: "Marketing, finance, HR" },
      { label: "Practice", value: "Internship + live projects" },
      { label: "Progression", value: "Direct pathway to MBA" },
    ],
    curriculum: [
      { year: "Year 1", focus: "Business foundations", courses: ["Principles of Management", "Business Economics", "Financial Accounting", "Business Communication", "Business Mathematics"] },
      { year: "Year 2", focus: "Functional areas", courses: ["Marketing Management", "Human Resource Management", "Business Statistics", "Business Law", "Operations Management"] },
      { year: "Year 3", focus: "Specialisation", courses: ["Strategic Management", "Entrepreneurship", "Electives", "Internship & project"] },
    ],
    careers: [
      { role: "Business Development Executive", description: "Opens new markets, manages pipelines and closes institutional deals." },
      { role: "Marketing Associate", description: "Executes campaigns, content and channel programmes." },
      { role: "Operations Associate", description: "Coordinates processes, vendors and service quality." },
      { role: "Higher study", description: "Progresses to MBA, PGDM or professional qualifications." },
    ],
    facilities: [
      "Management classrooms with case-study method",
      "Computer lab for analytics coursework",
      "Corporate talks and internship placement",
      "Student clubs for marketing and entrepreneurship",
    ],
    eligibility:
      "10+2 in any stream with at least 45% aggregate (40% for reserved categories of Haryana).",
  },
];

export function getProgramme(slug: string) {
  return programmes.find((programme) => programme.slug === slug);
}
