import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import RecruiterMarquee from "@/components/RecruiterMarquee";
import CTASection from "@/components/CTASection";
import { placementHighlights, recruiters } from "@/data/recruiters";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Placements — recruiters, internships and career support",
  description:
    "GITM Gurugram's Centre for Corporate Relations runs campus drives, internships and pre-placement training with recruiters across IT services, banking, analytics and manufacturing in Delhi NCR.",
};

const stages = [
  { title: "Semester 1–2", body: "Communication and aptitude labs begin. Students are introduced to the CCR and to career tracks early, not in the final year." },
  { title: "Semester 3–4", body: "Technical clubs, coding contests and industry visits build a portfolio. Internship awareness sessions begin." },
  { title: "Semester 5–6", body: "Summer internships, live projects, resume workshops and mock interviews. Pre-placement talks from visiting companies." },
  { title: "Semester 7–8", body: "Campus drives, group discussions and final interviews. Offer confirmation and joining support." },
];

const sectors = [
  { name: "IT & product engineering", companies: "Microsoft · Google · Amazon · Daffodil · Syntel" },
  { name: "IT services & consulting", companies: "Accenture · Capgemini · Cognizant · HCL · Wipro · Tech Mahindra" },
  { name: "Banking & financial services", companies: "HDFC Bank · ICICI Bank · Bank of America · Paytm" },
  { name: "Automotive & manufacturing", companies: "Eicher · Mitsuba · JBM · Omax Autos · AVL India" },
  { name: "Analytics & back office", companies: "Genpact · ValueFirst · IndiaMART · Naukri.com" },
  { name: "Engineering & infrastructure", companies: "GVK Power & Infra · Schwing Stetter · DesignTech" },
];

export default function PlacementsPage() {
  const placementEvents = events.filter((event) => event.category === "Placement").slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Placements"
        title="Career preparation that starts long before the final semester."
        description="The Centre for Corporate Relations maintains recruiter relationships across Delhi NCR and runs a structured employability programme from the first year to the last."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Placements" }]}
        image="/images/classroom.jpg"
      />

      {/* Stats strip */}
      <section className="border-b border-ink-900/10 bg-parchment">
        <div className="container-x grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "40+", label: "Companies on the recruiter list" },
            { value: "8", label: "Programmes with placement tracks" },
            { value: "Year-round", label: "Drive calendar" },
            { value: "Delhi NCR", label: "Primary hiring region" },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-serif text-2xl text-ink-900">{item.value}</p>
              <p className="mt-1 text-[0.78rem] uppercase tracking-[0.1em] text-ink-600/80">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight text-ink-900">
              Employability is built semester by semester.
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700/90">
              A placement cell that appears in the seventh semester can only work with what already exists. Ours starts
              earlier — with aptitude and communication training embedded in the academic calendar, technical clubs that
              build portfolios, and internships that give students something real to talk about in an interview.
            </p>
            <div className="mt-8 space-y-4">
              {stages.map((stage) => (
                <div key={stage.title} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <span className="h-2 w-2 rounded-full bg-gold-500" />
                    <span className="mt-1 h-full w-px bg-ink-900/10" />
                  </div>
                  <div className="pb-4">
                    <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold-700">{stage.title}</h3>
                    <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-700/88">{stage.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {placementHighlights.map((item) => (
              <article key={item.title} className="card h-full p-6">
                <Icon name="briefcase" className="h-5 w-5 text-gold-600" />
                <h3 className="mt-4 font-serif text-lg leading-snug text-ink-900">{item.title}</h3>
                <p className="mt-2 text-[0.84rem] leading-relaxed text-ink-700/85">{item.body}</p>
              </article>
            ))}
            <div className="rounded-2xl bg-ink-900 p-6 text-white sm:col-span-2">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.14em] text-gold-400">For recruiters</p>
                  <h3 className="mt-2 font-serif text-xl">Hire from GITM</h3>
                  <p className="mt-1.5 max-w-md text-[0.84rem] leading-relaxed text-white/60">
                    Campus drives, internships and pre-placement talks can be scheduled through the Centre for Corporate
                    Relations. We handle logistics, candidate shortlisting and follow-up.
                  </p>
                </div>
                <Link href="/contact" className="btn btn-gold shrink-0">
                  Contact the CCR
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Recruiter wall */}
      <section className="bg-ink-950 py-20 text-white md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow eyebrow-invert">Recruiters</p>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight">
                Companies that have hired from GITM
              </h2>
            </div>
            <p className="max-w-xs text-[0.78rem] leading-relaxed text-white/65">
              A selected list. Hiring partners vary by season, programme and role.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {recruiters.map((recruiter) => (
              <div
                key={recruiter.name}
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:border-gold-500/40 hover:bg-white/[0.06]"
              >
                <div>
                  <p className="font-serif text-[0.98rem] leading-tight text-white/90">{recruiter.name}</p>
                  <p className="mt-0.5 text-[0.62rem] uppercase tracking-[0.12em] text-white/60">{recruiter.sector}</p>
                </div>
                <Icon name="arrowUpRight" className="h-3.5 w-3.5 shrink-0 text-white/20 transition-colors group-hover:text-gold-500" />
              </div>
            ))}
          </div>

          <div className="mt-10">
            <RecruiterMarquee tone="dark" />
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Where our graduates work</p>
            <h2 className="mt-4 font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] leading-tight text-ink-900">
              Hiring across six sectors
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <Reveal key={sector.name} delay={(index % 3) * 70}>
                <div className="h-full rounded-xl border border-ink-900/10 bg-white p-5">
                  <h3 className="font-serif text-lg leading-snug text-ink-900">{sector.name}</h3>
                  <p className="mt-2 text-[0.8rem] leading-relaxed text-ink-700/85">{sector.companies}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recent placement news */}
      <section className="bg-parchment py-16">
        <div className="container-x">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-2xl text-ink-900">Recent placement updates</h2>
            <Link href="/events" className="link-underline text-sm">
              All updates
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 divide-y divide-ink-900/10 border-y border-ink-900/10">
            {placementEvents.map((event) => (
              <Link key={event.slug} href={`/events/${event.slug}`} className="group flex items-start gap-4 py-4">
                <span className="mt-0.5 shrink-0 rounded-md bg-white px-2 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.08em] text-ink-700">
                  {new Date(event.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                </span>
                <span className="text-sm leading-snug text-ink-800 group-hover:text-gold-700">{event.title}</span>
                <Icon name="arrow" className="ml-auto h-4 w-4 shrink-0 text-ink-600/85 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Recruiting this season? Let's get you on the calendar."
        body="Send us your job description and preferred dates. The Centre for Corporate Relations will confirm logistics within two working days."
        primaryLabel="Contact the CCR"
        primaryHref="/contact"
        secondaryLabel="See campus facilities"
        secondaryHref="/campus-life"
      />
    </>
  );
}
