import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { accreditations, site } from "@/data/site";
import { campusPillars } from "@/data/campus";

export const metadata: Metadata = {
  title: "About GITM — 18 years of technical education in Gurugram",
  description:
    "Established in 2008, GITM Gurugram is AICTE-approved and affiliated to Gurugram University, spread over an 18-acre campus in Farrukhnagar with 3 lakh sq. ft. of built-up infrastructure.",
};

const milestones = [
  { year: "2007", title: "The idea takes shape", body: "Baljeet Singh Education Society is formed to build a technical institute for the Gurugram region." },
  { year: "2008", title: "GITM is established", body: "The institute opens at Farrukhnagar with its first B.Tech cohorts and AICTE approval." },
  { year: "2011", title: "Management studies launched", body: "The Department of Management Studies begins its MBA programme, later joined by the BBA." },
  { year: "2015", title: "Campus expands", body: "Additional academic blocks, laboratories and hostel capacity take the built-up area past 3 lakh sq. ft." },
  { year: "2019", title: "Centres of excellence", body: "COE, CCR, GRDC and CCS are formalised to connect academics with industry and community work." },
  { year: "2022", title: "International collaborations", body: "Partnerships with Henan Institute of Engineering and Guangxi University of Science and Technology, China." },
  { year: "2026", title: "Eighteen years on", body: "Alumni across Delhi NCR's corporate belt, with recruiters from IT, banking, analytics and manufacturing on campus each semester." },
];

const pillars = [
  { icon: "cap", title: "Academic excellence", body: "A curriculum reviewed against industry expectations, delivered by faculty who combine teaching and practice." },
  { icon: "lab", title: "Applied infrastructure", body: "Ten computer labs, departmental laboratories and workshops that students can use beyond scheduled hours." },
  { icon: "users", title: "Holistic development", body: "Personality development, aptitude training, seminars, industry visits and community service as part of the academic calendar." },
  { icon: "briefcase", title: "Industry connection", body: "The Centre for Corporate Relations puts recruiter relationships, internships and training in front of students early." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the institute"
        title="Built in 2008 for the workplaces Gurugram was creating."
        description="Global Institute of Technology & Management is an AICTE-approved institute affiliated to Gurugram University, operating an 18-acre residential campus in Farrukhnagar, Gurugram."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]}
        image="/images/campus-hero.webp"
      />

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight text-ink-900">
              A place for learning, discovery, innovation, expression and discourse.
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-700/90">
              <p>
                Global Institute of Technology &amp; Management, Gurugram (GITM Farrukhnagar) was established in 2008.
                The institute is approved by the All India Council for Technical Education (AICTE), Ministry of HRD,
                Government of India, and recognised by the Directorate of Technical Education, Government of Haryana.
                All programmes are affiliated to Gurugram University.
              </p>
              <p>
                The institute has grown into one of the leading institutions for technical and management education in
                Delhi NCR. It is located in the corporate capital of India — Gurugram — home to leading IT, software and
                multinational companies.
              </p>
              <p>
                The campus spreads over 18 acres with lush green surroundings and environment-friendly infrastructure.
                With 3 lakh sq. ft. of constructed area, ten computer laboratories and more than 500 PCs, a 20 Mbps
                leased line with campus-wide Wi-Fi, and a library holding more than 20,000 books plus national and
                international journals, the institute is equipped for serious academic work.
              </p>
              <p>
                In-house hostel facilities are available for both boys and girls with a choice of air-conditioned and
                non-air-conditioned rooms. Students come from across India and from neighbouring countries including
                Nepal, Bhutan, Bangladesh and the UAE, giving the campus genuine cultural diversity.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {accreditations.map((item) => (
                <div key={item.name} className="flex items-start gap-3 rounded-xl border border-ink-900/10 bg-white p-4">
                  <Icon name="shield" className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" />
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{item.name}</p>
                    <p className="mt-0.5 text-[0.75rem] leading-snug text-ink-600/85">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/campus-2.webp"
                alt="GITM Gurugram academic building and landscaped campus"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/lab.webp" alt="Computer laboratory at GITM Gurugram" className="aspect-square w-full object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/classroom.webp" alt="Students in a GITM classroom" className="aspect-square w-full object-cover" />
              </div>
            </div>
            <div className="rounded-2xl bg-ink-900 p-6 text-white">
              <p className="text-[0.7rem] uppercase tracking-[0.16em] text-gold-400">At a glance</p>
              <dl className="mt-4 space-y-3 text-sm">
                {[
                  ["Established", "2008"],
                  ["Campus", "18 acres, Farrukhnagar"],
                  ["Built-up area", "3 lakh sq. ft."],
                  ["Programmes", "8 (B.Tech, M.Tech, MBA, BBA)"],
                  ["Affiliation", "Gurugram University"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-2">
                    <dt className="text-white/65">{label}</dt>
                    <dd className="text-right font-medium text-white">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & mission */}
      <section className="bg-ink-950 py-20 text-white md:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <p className="eyebrow eyebrow-invert">Vision &amp; mission</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">
              A premier institution with an unparalleled commitment to excellence.
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                  <Icon name="sparkle" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl">Vision</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-white/65">
                  The vision of Baljeet Singh Education Society is to make Global Institute of Technology &amp;
                  Management a premier institution with an unparalleled commitment to excellence and quality education of
                  global dimensions — enabling ignited souls to take on confidently the present world of evolving
                  technology and management.
                </p>
              </article>
            </Reveal>
            <Reveal delay={100}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-400">
                  <Icon name="award" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-2xl">Mission</h3>
                <ul className="mt-3 space-y-3 text-[0.92rem] leading-relaxed text-white/65">
                  {[
                    "Deliver technical and management education of a standard that industry and society can rely on.",
                    "Create an environment where research, innovation and intellectual curiosity are routine, not exceptional.",
                    "Develop character alongside competence through co-curricular activity and community engagement.",
                    "Make quality education accessible to students from all backgrounds, including those who need financial support.",
                  ].map((point) => (
                    <li key={point} className="flex gap-3">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What sets us apart */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">What sets GITM apart</p>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] leading-tight text-ink-900">
              Focus on academic excellence, applied technology and the whole student.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={(index % 2) * 80}>
                <article className="card h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900/5 text-ink-800">
                    <Icon name={pillar.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-xl text-ink-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/85">{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {campusPillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl border border-ink-900/10 bg-parchment p-5">
                <h3 className="font-serif text-base leading-snug text-ink-900">{pillar.title}</h3>
                <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-700/85">{pillar.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-parchment py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Milestones</p>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] leading-tight text-ink-900">
              Eighteen years, in sequence.
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {milestones.map((milestone, index) => (
              <Reveal as="li" key={milestone.year} delay={(index % 3) * 70}>
                <div className="border-t border-ink-900/15 pt-4">
                  <p className="font-serif text-2xl text-gold-600">{milestone.year}</p>
                  <h3 className="mt-1 font-serif text-lg text-ink-900">{milestone.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-700/85">{milestone.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Committees & statutory cells */}
      <section id="committees" className="scroll-mt-24 py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Governance</p>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.2vw,2.4rem)] leading-tight text-ink-900">
              Statutory cells &amp; student support
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700/88">
              Every institute is required to run these committees. Ours are contactable directly, and we publish the
              routes for raising a concern rather than leaving students to guess.
            </p>
            <div className="mt-6 rounded-xl border border-ink-900/10 bg-white p-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-700">Urgent concerns</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-700/90">
                For any safety, harassment or ragging complaint, contact the Registrar&apos;s office on{" "}
                <a href={`tel:${site.campus.phone.replace(/\s/g, "")}`} className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4">
                  {site.campus.phone}
                </a>{" "}
                or write to{" "}
                <a href={`mailto:${site.campus.email}`} className="font-semibold text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4">
                  {site.campus.email}
                </a>
                . Complaints can be made anonymously.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Anti-ragging committee", body: "UGC-mandated committee with student and faculty representation; meets on every complaint." },
                { title: "Internal Complaints Committee", body: "Handles sexual-harassment complaints under the POSH Act, chaired by a senior woman faculty member." },
                { title: "Grievance redressal cell", body: "Single window for academic, hostel, transport and fee-related grievances." },
                { title: "SC/ST & minority cell", body: "Supports scholarship applications, documentation and representation." },
                { title: "Training & placement cell", body: "The Centre for Corporate Relations handles internships, drives and career counselling." },
                { title: "NSS & community services", body: "Runs literacy, health and environmental programmes in neighbouring villages." },
              ].map((cell) => (
                <div key={cell.title} className="rounded-xl border border-ink-900/10 bg-white p-5">
                  <h3 className="font-serif text-base leading-snug text-ink-900">{cell.title}</h3>
                  <p className="mt-1.5 text-[0.78rem] leading-relaxed text-ink-700/85">{cell.body}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="link-underline mt-6 text-sm">
              Find the right department
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Want to see the campus for yourself?"
        body="Campus visits run Monday to Saturday, 9:00 AM to 5:00 PM. Our team will walk you through the labs, library and hostels."
        primaryLabel="Plan a visit"
        primaryHref="/contact"
        secondaryLabel="Explore programmes"
        secondaryHref="/programmes"
      />
    </>
  );
}
