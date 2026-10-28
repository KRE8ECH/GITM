import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { programmes } from "@/data/programmes";

export const metadata: Metadata = {
  title: "Programmes — B.Tech, M.Tech, MBA and BBA at GITM Gurugram",
  description:
    "Explore all eight programmes at GITM Gurugram: B.Tech in CSE, AI & Data Science, ECE, Mechanical and Civil Engineering, M.Tech CSE, MBA and BBA.",
};

const groups = [
  { level: "Undergraduate" as const, note: "Four-year B.Tech degrees and a three-year BBA, through HSTES counselling or direct application." },
  { level: "Postgraduate" as const, note: "Two-year M.Tech and MBA degrees for graduates looking for depth or a career switch." },
];

export default function ProgrammesPage() {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title="Eight programmes, built around what employers actually ask for."
        description="Every programme carries laboratories, industry visits, internship support and a placement track through the Centre for Corporate Relations. All degrees are awarded by Gurugram University."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Programmes" }]}
        image="/images/lab.jpg"
      />

      <section className="border-b border-ink-900/10 bg-parchment py-8">
        <div className="container-x flex flex-wrap items-center gap-x-10 gap-y-4 text-[0.8rem] text-ink-700/90">
          {[
            { icon: "shield", label: "AICTE approved" },
            { icon: "cap", label: "Gurugram University affiliated" },
            { icon: "briefcase", label: "Dedicated placement cell" },
            { icon: "home", label: "On-campus hostels" },
          ].map((item) => (
            <span key={item.label} className="inline-flex items-center gap-2">
              <Icon name={item.icon} className="h-4 w-4 text-gold-600" />
              {item.label}
            </span>
          ))}
        </div>
      </section>

      {groups.map((group) => {
        const items = programmes.filter((programme) => programme.level === group.level);
        return (
          <section key={group.level} className="py-16 md:py-20">
            <div className="container-x">
              <Reveal className="flex flex-col gap-3 border-b border-ink-900/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="eyebrow">{group.level}</p>
                  <h2 className="mt-3 font-serif text-[clamp(1.7rem,3vw,2.3rem)] text-ink-900">
                    {group.level === "Undergraduate" ? "Undergraduate degrees" : "Postgraduate degrees"}
                  </h2>
                </div>
                <p className="max-w-md text-[0.85rem] leading-relaxed text-ink-600/85">{group.note}</p>
              </Reveal>

              <div className="mt-8 space-y-4">
                {items.map((programme, index) => (
                  <Reveal key={programme.slug} delay={index * 60}>
                    <Link
                      href={`/programmes/${programme.slug}`}
                      className="group grid gap-5 rounded-2xl border border-ink-900/10 bg-white p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-[0_24px_48px_-32px_rgba(7,26,51,0.35)] md:grid-cols-[auto_1fr_auto] md:items-center md:p-6"
                    >
                      <div className="hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl md:block">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={programme.image}
                          alt=""
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-ink-900/5 px-2.5 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.1em] text-ink-700">
                            {programme.degree}
                          </span>
                          <span className="text-[0.7rem] uppercase tracking-[0.1em] text-gold-700">{programme.duration}</span>
                        </div>
                        <h3 className="mt-2 font-serif text-xl text-ink-900">{programme.name}</h3>
                        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-700/85">{programme.blurb}</p>
                      </div>

                      <div className="flex items-center gap-4 md:flex-col md:items-end md:gap-2">
                        <div className="text-left md:text-right">
                          <p className="text-[0.66rem] uppercase tracking-[0.12em] text-ink-600/85">Department</p>
                          <p className="text-[0.8rem] font-medium text-ink-800">{programme.department}</p>
                        </div>
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-800 transition-all duration-300 group-hover:border-gold-500 group-hover:bg-gold-500 group-hover:text-ink-950">
                          <Icon name="arrowUpRight" className="h-4 w-4" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-ink-950 py-16 text-white">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            { title: "Not sure which programme fits?", body: "Our admissions counsellors will map your marks, entrance score and interests to the right programme — honestly, including when a different institute is a better fit." },
            { title: "Lateral entry & migration", body: "Lateral entry to the second year of B.Tech is available for eligible diploma holders through HSTES counselling." },
            { title: "International applicants", body: "Applications are processed by the International Admissions Cell, including AIU equivalence and student visa guidance." },
          ].map((item) => (
            <div key={item.title} className="border-l border-gold-500/30 pl-5">
              <h3 className="font-serif text-lg text-white">{item.title}</h3>
              <p className="mt-2 text-[0.85rem] leading-relaxed text-white/60">{item.body}</p>
            </div>
          ))}
        </div>
        <div className="container-x mt-10 flex flex-wrap gap-3">
          <Link href="/admissions" className="btn btn-gold">
            Admissions &amp; eligibility
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-outline-invert">
            Talk to a counsellor
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
