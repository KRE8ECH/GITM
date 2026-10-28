export type EventItem = {
  slug: string;
  title: string;
  category: "Placement" | "Internship" | "Achievement" | "Campus" | "Industry";
  date: string;
  excerpt: string;
  body: string[];
  image: string;
};

export const events: EventItem[] = [
  {
    slug: "seva-satkar-foundation-internship",
    title: "GITM students selected for Seva Satkar Foundation internship",
    category: "Internship",
    date: "2026-08-18",
    excerpt:
      "Students from the Department of Computer Science & Engineering have been selected for a social-impact technology internship with Seva Satkar Foundation.",
    image: "/images/students.webp",
    body: [
      "Global Institute of Technology and Management, Gurugram, congratulates the students selected for the Seva Satkar Foundation internship programme.",
      "The internship gives students hands-on exposure to building and maintaining technology for social-sector operations, working directly with field teams and partner organisations.",
      "The Centre for Corporate Relations (CCR) supports students through application review, mock interviews and documentation so that internships convert into durable career experience.",
    ],
  },
  {
    slug: "savera-placements",
    title: "GITM students secure placements at Savera",
    category: "Placement",
    date: "2026-08-12",
    excerpt:
      "Final-year students have received offers from Savera following an on-campus recruitment drive conducted by the Centre for Corporate Relations.",
    image: "/images/classroom.webp",
    body: [
      "The Global Institute of Technology and Management, Gurugram, proudly announces another successful campus placement drive.",
      "Savera conducted a multi-round selection process covering aptitude, technical discussion and personal interview on the GITM campus.",
      "The CCR team continues to build recruiter relationships across Gurugram's corporate belt, giving students access to local opportunities alongside national drives.",
    ],
  },
  {
    slug: "codeyoung-campus-drive",
    title: "Codeyoung campus recruitment drive at GITM",
    category: "Placement",
    date: "2026-08-05",
    excerpt:
      "Codeyoung visited campus to hire for technology and instructional roles, with students from CSE, ECE and MBA participating.",
    image: "/images/lab.webp",
    body: [
      "GITM Gurugram welcomed Codeyoung for a full-day campus recruitment drive.",
      "The process began with a pre-placement talk covering the company's product roadmap and role expectations, followed by a coding round and interviews.",
      "Students from the 2027 graduating batch used the opportunity to benchmark themselves against industry hiring standards.",
    ],
  },
  {
    slug: "oscode-campus-ambassador",
    title: "GITM student selected as OSCode campus ambassador",
    category: "Achievement",
    date: "2026-07-29",
    excerpt:
      "A GITM student has been appointed campus ambassador for OSCode, leading peer programmes on open source and competitive programming.",
    image: "/images/campus-view.webp",
    body: [
      "GITM Gurugram is proud to announce the selection of a student as OSCode campus ambassador.",
      "Campus ambassadors run coding circles, hackathons and open-source contribution sprints for their peers, supported by the department's faculty coordinators.",
      "This is part of a wider effort to build a strong competitive-programming culture at the institute.",
    ],
  },
  {
    slug: "stickypins-shortlist",
    title: "Students shortlisted by StickyPins for developer and AI roles",
    category: "Placement",
    date: "2026-07-22",
    excerpt:
      "Shortlists for content engineer-developer and AI developer roles follow a technical assessment round held on campus.",
    image: "/images/classroom-2.webp",
    body: [
      "The Global Institute of Technology and Management, Gurugram, proudly shares that its students have been shortlisted by StickyPins Inc.",
      "Roles included content engineer-developer and AI developer positions, assessed through a practical task followed by technical interviews.",
      "The department credits its project-based coursework and AI electives for preparing students for applied developer roles.",
    ],
  },
  {
    slug: "kalvium-recruitment-drive",
    title: "Kalvium recruitment drive conducted at GITM",
    category: "Placement",
    date: "2026-07-15",
    excerpt:
      "Kalvium met final-year students for product engineering roles, with an emphasis on problem solving and project portfolios.",
    image: "/images/campus-hero.webp",
    body: [
      "GITM Gurugram welcomed the Kalvium team for a campus recruitment drive.",
      "Students presented projects from their capstone work and departmental labs, an approach that aligns with how the company evaluates engineering candidates.",
      "The CCR continues to schedule drives through the semester so that placements do not clash with examinations.",
    ],
  },
  {
    slug: "internshala-student-partners",
    title: "Two GITM students selected as Internshala student partners",
    category: "Achievement",
    date: "2026-07-08",
    excerpt:
      "Parth and Sarvesh Kumar have been selected as Internshala student partners, supporting peers with internship discovery and applications.",
    image: "/images/students.webp",
    body: [
      "The Global Institute of Technology and Management, Gurugram, congratulates Parth and Sarvesh Kumar on their selection as Internshala student partners.",
      "The programme equips student partners to run internship-awareness sessions, review applications and connect classmates with verified opportunities.",
      "Their work complements the CCR's own internship pipeline for pre-final year students.",
    ],
  },
  {
    slug: "algocirrus-campus-ambassador",
    title: "Manav Mahawar selected as AlgoCirrus campus ambassador",
    category: "Achievement",
    date: "2026-06-30",
    excerpt:
      "The appointment will bring structured coding mentorship and contests to GITM's first and second-year students.",
    image: "/images/lab.webp",
    body: [
      "Student Manav Mahawar has been selected as an AlgoCirrus campus ambassador for GITM Gurugram.",
      "Ambassadors coordinate coding contests, doubt-clearing sessions and mentorship circles within the department.",
      "The institute encourages such peer-led initiatives as part of its Centre of Excellence activity.",
    ],
  },
  {
    slug: "capgemini-training-programme",
    title: "Capgemini training-cum-placement programme at GITM",
    category: "Industry",
    date: "2026-06-20",
    excerpt:
      "A multi-week programme combining technical training, aptitude preparation and an assessment for final-year students.",
    image: "/images/classroom.webp",
    body: [
      "GITM Gurugram announced the commencement of a Capgemini training-cum-placement programme on campus.",
      "The programme combines instructor-led technical sessions, aptitude modules and periodic assessments, with successful candidates moving into the company's hiring pipeline.",
      "Such partnerships are central to the institute's approach of combining academic study with direct industry preparation.",
    ],
  },
  {
    slug: "adobe-summer-internship",
    title: "Adobe summer internship programme announced at GITM",
    category: "Internship",
    date: "2026-06-10",
    excerpt:
      "Selected pre-final year students will work on applied design and engineering projects through the summer.",
    image: "/images/campus-view.webp",
    body: [
      "GITM Gurugram announced opportunities for pre-final year students through the Adobe summer internship programme.",
      "The selection process involved a portfolio or coding submission followed by technical interviews.",
      "Interns receive mentorship from practising engineers and work on real product problems over the summer break.",
    ],
  },
  {
    slug: "edubridge-placement-drive",
    title: "EduBridge placement drive for BBA and MBA students",
    category: "Placement",
    date: "2026-05-28",
    excerpt:
      "A dedicated drive for management students, covering analytics, operations and relationship-management roles.",
    image: "/images/campus-2.webp",
    body: [
      "The Global Institute of Technology and Management, Gurugram, welcomed the EduBridge team for a placement drive focused on management students.",
      "BBA and MBA candidates went through group discussions, aptitude testing and interviews across analytics, operations and client-facing roles.",
      "The Department of Management Studies prepares students through mock GDs and internship-led learning in the semesters before placement season.",
    ],
  },
  {
    slug: "meta-space-student-ambassador",
    title: "GITM student selected as Meta Space student ambassador",
    category: "Achievement",
    date: "2026-05-15",
    excerpt:
      "The role brings student-led programmes on immersive technology and spatial computing to campus.",
    image: "/images/campus-3.webp",
    body: [
      "GITM Gurugram is delighted to share that one of its students has been selected as a Meta Space student ambassador.",
      "The ambassador will organise workshops introducing peers to AR/VR development and spatial computing concepts.",
      "It is another opportunity for students to explore emerging technologies beyond the prescribed syllabus.",
    ],
  },
];

export const eventCategories = ["All", "Placement", "Internship", "Achievement", "Industry", "Campus"] as const;
