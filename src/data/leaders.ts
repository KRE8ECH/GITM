export type Leader = {
  name: string;
  role: string;
  message: string[];
  quote: string;
  initials: string;
};

export const leaders: Leader[] = [
  {
    name: "Mr. Surjeet Singh",
    role: "Founder & Managing Trustee",
    initials: "SS",
    quote:
      "An institution is judged not by the buildings it raises, but by the confidence of the young people who walk out of them.",
    message: [
      "I welcome you on behalf of Global Institute of Technology & Management, and thank you for taking the time to know us.",
      "When we founded GITM in 2008, Gurugram was already the corporate capital of India — a city where global companies were building products for the world. What the region did not have in sufficient numbers were institutions that prepared young people for those workplaces with equal seriousness.",
      "We set out to build one. An 18-acre campus in Farrukhnagar, laboratories that keep pace with industry, faculty who teach from experience, and a culture where discipline and curiosity are treated as equally important.",
      "Eighteen years later, our alumni work across that same corporate belt and beyond. They are our strongest argument. I invite you to visit the campus, meet our faculty and see the work for yourself.",
    ],
  },
  {
    name: "Mr. Ravinder Tokas",
    role: "Chairman",
    initials: "RT",
    quote:
      "We believe in imparting quality technical and management education that is measured by outcomes, not intentions.",
    message: [
      "I extend a warm welcome to you on joining the Global family.",
      "Technical education today is a promise: that four years of study will translate into capability that industry values. We hold ourselves to that promise through a curriculum reviewed against industry needs, a Centre for Corporate Relations that begins working with students long before their final semester, and a faculty development programme that keeps our teachers current.",
      "Equally important is what happens outside the classroom — sports, cultural festivals, community service and student-led technical clubs. These are where character is formed.",
      "I wish you an enriching and rewarding time at GITM.",
    ],
  },
  {
    name: "Dr. Aruna Yadav",
    role: "Director — Admissions & Outreach",
    initials: "AY",
    quote:
      "Admissions are the beginning of a relationship, not the end of a process. We are answerable to every family who trusts us.",
    message: [
      "Choosing an engineering or management programme is one of the most consequential decisions a family makes. Our admissions team is structured to make that decision transparent.",
      "We publish eligibility criteria, explain the counselling process in plain language, and are available on call, over WhatsApp and on campus to answer questions before you commit — not after.",
      "For international applicants, the International Admissions Cell handles equivalence, visa guidance and documentation so that nothing is left ambiguous.",
      "Our doors are open. Come and ask us the difficult questions.",
    ],
  },
];
