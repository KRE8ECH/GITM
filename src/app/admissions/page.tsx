import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import Accordion from "@/components/Accordion";
import CTASection from "@/components/CTASection";
import { programmes } from "@/data/programmes";
import { faqs } from "@/data/campus";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Admissions 2026–27 — eligibility, process and scholarships",
  description:
    "Apply to GITM Gurugram for the 2026–27 session. B.Tech admissions through HSTES counselling on JEE Main, plus MBA, BBA and M.Tech routes. Eligibility, documents, scholarships and international admissions.",
  alternates: { canonical: "/admissions" },
};

const steps = [
  {
    step: "01",
    title: "Check your eligibility",
    body: "Confirm the academic requirement for your programme and, for B.Tech, your JEE Main status. Our counsellors will tell you honestly whether you qualify.",
    detail: "10+2 with PCM/PCB · 45% aggregate (40% reserved)",
  },
  {
    step: "02",
    title: "Apply online",
    body: "Complete the GITM application form. For B.Tech, also register for HSTES online counselling — the institute code and seat matrix are published by HSTES each session.",
    detail: "Takes about 10 minutes",
  },
  {
    step: "03",
    title: "Counselling & offer",
    body: "Seats are allotted by merit through HSTES, or directly by the institute for programmes and vacancies outside counselling. A provisional offer letter follows by email.",
    detail: "Merit-based, document verification included",
  },
  {
    step: "04",
    title: "Document verification & fee",
    body: "Submit originals for verification and pay the admission fee within the stipulated window. Only then is the admission confirmed and hostel allotment opened.",
    detail: "Originals + 2 sets of photocopies",
  },
];

const documents = [
  "Class 10 mark sheet and certificate (date of birth proof)",
  "Class 12 mark sheet and certificate",
  "JEE Main / entrance scorecard (as applicable)",
  "Graduation mark sheets for MBA and M.Tech",
  "Category certificate (Haryana domicile, if claiming reservation)",
  "Income certificate (for scholarship applications)",
  "Migration and character certificates",
  "Eight recent passport-size photographs",
  "Aadhaar or other government photo ID",
  "Gap year affidavit, if applicable",
];

const scholarships = [
  {
    title: "Haryana state scholarship schemes",
    body: "Eligible SC/BC/EWS students and families below the notified income threshold can access state post-matric scholarships. The administration office assists with the portal filing.",
    tag: "State government",
  },
  {
    title: "Central government schemes",
    body: "National Scholarship Portal schemes, including merit-cum-means and minority scholarships, where the student meets the notified criteria.",
    tag: "Government of India",
  },
  {
    title: "Institute merit awards",
    body: "Recognition for students with outstanding academic performance each semester, decided by the academic committee.",
    tag: "GITM",
  },
  {
    title: "Financial hardship support",
    body: "The institute supports financially backward students through fee instalment plans and case-by-case assistance so that admission is never blocked by timing of payment.",
    tag: "GITM",
  },
];

const internationalDocs = [
  "Valid passport (mandatory through the admission process and the duration of study in India)",
  "Recent passport-size photograph",
  "Academic transcripts and certificates with certified English translations",
  "Proof of date of birth",
  "AIU equivalence certificate, where the qualifying exam is from a foreign board or university",
  "English proficiency certificate — IELTS, TOEFL or PTE Academic, if prior education was not in English",
  "Valid student visa issued by the Government of India before reporting",
];

export default function AdmissionsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow="Admissions · 2026–27"
        title="A transparent admission process, explained before you commit."
        description="We publish eligibility, documents and timelines in plain language. Read it here, then call us with anything that is still unclear — including the questions that decide whether GITM is right for you."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
        image="/images/students.webp"
      />

      {/* Quick facts */}
      <section className="border-b border-ink-900/10 bg-parchment">
        <div className="container-x grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: "calendar", label: "Applications close", value: "15 November 2026" },
            { icon: "users", label: "Campus visits", value: "Mon–Sat, 9–5" },
            { icon: "phone", label: "Admissions helpline", value: "+91 95551 00100" },
            { icon: "cap", label: "Counselling route", value: "HSTES · JEE Main" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-gold-700">
                <Icon name={item.icon} className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[0.66rem] uppercase tracking-[0.14em] text-ink-600/80">{item.label}</p>
                <p className="text-sm font-semibold text-ink-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-24 py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">How to apply</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight text-ink-900">
              Four steps from enquiry to enrolment.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <Reveal key={step.step} delay={index * 80}>
                <article className="relative flex h-full flex-col rounded-2xl border border-ink-900/10 bg-white p-6">
                  <span className="font-serif text-3xl text-gold-500/50">{step.step}</span>
                  <h3 className="mt-3 font-serif text-lg leading-snug text-ink-900">{step.title}</h3>
                  <p className="mt-2 flex-1 text-[0.85rem] leading-relaxed text-ink-700/85">{step.body}</p>
                  <p className="mt-4 border-t border-ink-900/10 pt-3 text-[0.7rem] font-medium uppercase tracking-[0.08em] text-gold-700">
                    {step.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-ink-900/10 bg-parchment p-6">
            <p className="flex-1 text-sm text-ink-700/90">
              <strong className="font-semibold text-ink-900">Applying for B.Tech?</strong> You will need both the GITM
              application and the HSTES online counselling registration. Our team walks you through the second one at no
              cost.
            </p>
            <Link href={site.applyUrl} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
              Start online application
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" className="scroll-mt-24 bg-ink-950 py-20 text-white md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-invert">Eligibility</p>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
                Programme-wise admission requirements.
              </h2>
            </div>
            <p className="max-w-sm text-[0.8rem] leading-relaxed text-white/65">
              Percentages shown are the statutory minimums. Reserved-category relaxations for Haryana domicile apply as
              notified by the State Government each session.
            </p>
          </Reveal>

          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-[1.1fr_2fr_1fr] gap-6 border-b border-white/10 bg-white/[0.04] px-6 py-4 text-[0.66rem] uppercase tracking-[0.14em] text-white/65 lg:grid">
              <span>Programme</span>
              <span>Eligibility</span>
              <span>Route</span>
            </div>
            {programmes.map((programme) => (
              <div
                key={programme.slug}
                className="grid gap-3 border-b border-white/10 px-6 py-5 last:border-0 hover:bg-white/[0.03] lg:grid-cols-[1.1fr_2fr_1fr] lg:items-start lg:gap-6"
              >
                <div>
                  <p className="font-serif text-base text-white">{programme.shortName}</p>
                  <p className="mt-0.5 text-[0.7rem] text-white/60">{programme.duration}</p>
                </div>
                <p className="text-[0.85rem] leading-relaxed text-white/60">{programme.eligibility}</p>
                <span className="inline-flex w-fit items-center rounded-full border border-gold-500/30 px-3 py-1 text-[0.68rem] font-medium text-gold-300">
                  {programme.level === "Undergraduate" && programme.degree === "B.Tech"
                    ? "HSTES / JEE Main"
                    : programme.degree === "MBA"
                      ? "CAT / MAT / CMAT"
                      : "Direct / University"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents + fees */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Documents</p>
            <h2 className="mt-4 font-serif text-[clamp(1.7rem,3vw,2.3rem)] leading-tight text-ink-900">
              What to bring for verification
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/88">
              Carry originals plus two sets of photocopies. Incomplete documentation is the most common reason an
              admission gets delayed — check this list before you travel.
            </p>
            <ul className="mt-6 space-y-2.5">
              {documents.map((document) => (
                <li key={document} className="flex items-start gap-3 text-[0.88rem] text-ink-700/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-700">
                    <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                  {document}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-2xl border border-ink-900/10 bg-white p-7 shadow-lift">
              <p className="eyebrow">Fees</p>
              <h2 className="mt-3 font-serif text-2xl text-ink-900">Fee structure &amp; payment</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/88">
                Tuition and other charges are notified by the Government of Haryana / Gurugram University for each
                programme and session. Because the notified fee can change between counselling rounds, we publish the
                currently applicable structure in the admissions office rather than risk quoting you a stale figure.
              </p>
              <div className="mt-5 space-y-3">
                {[
                  ["Tuition fee", "As notified for 2026–27"],
                  ["Hostel & mess", "Separate, AC / non-AC options"],
                  ["Transport", "Route-based, optional"],
                  ["Examination fee", "Per university schedule"],
                ].map(([label, value]) => (
                  <div key={label} className="flex items-baseline justify-between gap-4 border-b border-ink-900/10 pb-2.5 text-sm">
                    <span className="text-ink-600/85">{label}</span>
                    <span className="text-right font-medium text-ink-900">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="btn btn-ink flex-1 justify-center">
                  Request fee sheet
                </Link>
                <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline flex-1 justify-center">
                  <Icon name="whatsapp" className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
              <p className="mt-4 text-[0.72rem] leading-relaxed text-ink-600/80">
                Fees are payable only by the official channels listed in your offer letter. Never pay an agent in cash.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="scroll-mt-24 bg-parchment py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Financial support</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight text-ink-900">
              Scholarships and fee support
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/88">
              No eligible student should lose a seat because of the timing of a payment. These are the routes available,
              and the administration office will help you file for them.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {scholarships.map((item, index) => (
              <Reveal key={item.title} delay={(index % 2) * 80}>
                <article className="card h-full p-6">
                  <span className="rounded-full bg-gold-500/15 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-gold-700">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-ink-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/85">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* International */}
      <section id="international" className="scroll-mt-24 py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">International students</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight text-ink-900">
              Applying from outside India
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700/90">
              International applicants are processed through the International Admissions Cell, which handles
              equivalence, documentation and visa guidance. Admission is granted on academic merit, fulfilment of
              eligibility, document verification and approval by the Admission Committee.
            </p>
            <ul className="mt-6 space-y-2.5">
              {internationalDocs.map((document) => (
                <li key={document} className="flex items-start gap-3 text-[0.86rem] leading-relaxed text-ink-700/85">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                  {document}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl border-l-2 border-gold-500 bg-gold-500/5 p-5">
              <p className="text-[0.82rem] leading-relaxed text-ink-800/85">
                <strong className="font-semibold">Important:</strong> do not make travel arrangements until you receive
                the official Admission Offer Letter and complete all admission formalities. Admission cannot be finalised
                without a valid student visa.
              </p>
            </div>
            <div className="mt-6 rounded-xl border border-ink-900/10 bg-white p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-700">International Admissions Cell</p>
              <p className="mt-2 text-sm text-ink-900">Dr. Aruna Yadav — Director, Admissions &amp; Outreach</p>
              <p className="mt-1 text-[0.82rem] text-ink-700/85">
                +91 80539 80002 / 0003 ·{" "}
                <a href="mailto:admission@gitmgurgaon.com" className="font-medium text-ink-900 underline decoration-gold-500 decoration-2 underline-offset-4">
                  admission@gitmgurgaon.com
                </a>
              </p>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-4">
            <div className="overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/students.webp"
                alt="Students from across India and neighbouring countries on the GITM campus"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                ["Nepal", "Bhutan"],
                ["Bangladesh", "U.A.E."],
              ].map((pair) => (
                <div key={pair[0]} className="rounded-xl border border-ink-900/10 bg-parchment p-4">
                  <p className="text-[0.66rem] uppercase tracking-[0.12em] text-ink-600/80">Students from</p>
                  <p className="mt-1 font-serif text-lg text-ink-900">{pair[0]}</p>
                  <p className="font-serif text-lg text-ink-900">{pair[1]}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="scroll-mt-24 border-t border-ink-900/10 bg-parchment py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.5rem)] leading-tight text-ink-900">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/88">
              If your question is not here, call the admissions helpline. You will speak to a person, not a chatbot.
            </p>
            <a href="tel:+919555100100" className="btn btn-ink mt-5">
              <Icon name="phone" className="h-4 w-4" />
              +91 95551 00100
            </a>
          </Reveal>
          <Reveal delay={100}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Applications for 2026–27 are open now."
        body="Start the online application, or book a campus visit and we will walk you through eligibility, fees and hostel options in person."
        primaryLabel="Apply online"
        primaryHref={site.applyUrl}
        secondaryLabel="Book a campus visit"
        secondaryHref="/contact"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
