import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { getProgramme, programmes } from "@/data/programmes";

type Params = { slug: string };

export function generateStaticParams() {
  return programmes.map((programme) => ({ slug: programme.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) return { title: "Programme not found" };
  return {
    title: programme.name,
    description: programme.blurb,
    alternates: { canonical: `/programmes/${programme.slug}` },
    openGraph: { title: programme.name, description: programme.blurb, images: [programme.image] },
  };
}

export default async function ProgrammePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const programme = getProgramme(slug);
  if (!programme) notFound();

  const others = programmes.filter((item) => item.slug !== programme.slug && item.level === programme.level).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: programme.name,
    description: programme.blurb,
    provider: {
      "@type": "CollegeOrUniversity",
      name: "Global Institute of Technology & Management",
      sameAs: "https://gitmgurgaon.com",
    },
    timeToComplete: programme.duration,
    educationalCredentialAwarded: programme.degree,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "full-time",
      courseWorkload: programme.duration,
    },
  };

  return (
    <>
      <PageHero
        eyebrow={`${programme.degree} · ${programme.department}`}
        title={programme.name}
        description={programme.blurb}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/programmes" },
          { label: programme.shortName },
        ]}
        image={programme.image}
      />

      <section className="border-b border-ink-900/10 bg-parchment">
        <div className="container-x grid gap-px py-6 sm:grid-cols-2 lg:grid-cols-4">
          {programme.highlights.map((highlight) => (
            <div key={highlight.label} className="px-1 py-2">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-gold-700">{highlight.label}</p>
              <p className="mt-1 text-[0.9rem] font-medium text-ink-900">{highlight.value}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="container-x grid gap-14 py-16 lg:grid-cols-[1.55fr_0.85fr] md:py-20">
        <div>
          <Reveal>
            <p className="eyebrow">Overview</p>
            <h2 className="mt-3 font-serif text-[clamp(1.6rem,2.8vw,2.2rem)] leading-tight text-ink-900">
              Studying {programme.shortName} at GITM
            </h2>
            <div className="mt-5 space-y-4 text-[0.96rem] leading-[1.8] text-ink-700/85">
              {programme.overview.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <p className="eyebrow">Curriculum structure</p>
            <h2 className="mt-3 font-serif text-[clamp(1.6rem,2.8vw,2.2rem)] leading-tight text-ink-900">
              What you will study
            </h2>
            <p className="mt-2 text-sm text-ink-600/85">
              Indicative structure — the detailed scheme of examination is issued by Gurugram University each session.
            </p>
            <div className="mt-6 space-y-3">
              {programme.curriculum.map((stage) => (
                <div key={stage.year} className="rounded-xl border border-ink-900/10 bg-white p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg text-ink-900">{stage.year}</h3>
                    <span className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-gold-700">{stage.focus}</span>
                  </div>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {stage.courses.map((course) => (
                      <li
                        key={course}
                        className="rounded-full border border-ink-900/10 bg-parchment px-3 py-1 text-[0.76rem] text-ink-700"
                      >
                        {course}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <p className="eyebrow">Career outcomes</p>
            <h2 className="mt-3 font-serif text-[clamp(1.6rem,2.8vw,2.2rem)] leading-tight text-ink-900">
              Where graduates go
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {programme.careers.map((career) => (
                <div key={career.role} className="rounded-xl border border-ink-900/10 bg-white p-5">
                  <div className="flex items-center gap-2">
                    <Icon name="briefcase" className="h-4 w-4 text-gold-600" />
                    <h3 className="text-sm font-semibold text-ink-900">{career.role}</h3>
                  </div>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-700/85">{career.description}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-12">
            <p className="eyebrow">Facilities</p>
            <h2 className="mt-3 font-serif text-[clamp(1.6rem,2.8vw,2.2rem)] leading-tight text-ink-900">
              Laboratories &amp; resources
            </h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {programme.facilities.map((facility) => (
                <li key={facility} className="flex items-start gap-2.5 text-[0.88rem] text-ink-700/85">
                  <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-gold-600" />
                  {facility}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Sticky sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-2xl border border-ink-900/10 bg-white p-6 shadow-lift">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-gold-700">Admissions 2026–27</p>
            <h2 className="mt-2 font-serif text-xl text-ink-900">Apply for {programme.shortName}</h2>
            <dl className="mt-4 space-y-3 border-t border-ink-900/10 pt-4 text-[0.82rem]">
              {[
                ["Degree awarded", programme.degree],
                ["Duration", programme.duration],
                ["Level", programme.level],
                ["Department", programme.department],
                ["Affiliation", "Gurugram University"],
                ["Approval", "AICTE, Govt. of India"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-3">
                  <dt className="text-ink-600/85">{label}</dt>
                  <dd className="text-right font-medium text-ink-900">{value}</dd>
                </div>
              ))}
            </dl>
            <Link href="/admissions" className="btn btn-gold mt-5 w-full justify-center">
              Apply now
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="btn btn-outline mt-2.5 w-full justify-center">
              Ask a question
            </Link>
          </div>

          <div className="rounded-2xl border border-gold-500/30 bg-gold-500/5 p-6">
            <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-700">Eligibility</h2>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-ink-800/85">{programme.eligibility}</p>
            <Link href="/admissions#eligibility" className="link-underline mt-3 text-[0.8rem]">
              Full admission criteria
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="rounded-2xl bg-ink-900 p-6 text-white">
            <h2 className="font-serif text-lg">Talk to the department</h2>
            <p className="mt-2 text-[0.82rem] leading-relaxed text-white/60">
              Our admissions team can arrange a conversation with faculty from {programme.department}.
            </p>
            <a
              href="tel:+919555100100"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
            >
              <Icon name="phone" className="h-4 w-4" />
              +91 95551 00100
            </a>
          </div>
        </aside>
      </div>

      {others.length > 0 && (
        <section className="border-t border-ink-900/10 bg-parchment py-16">
          <div className="container-x">
            <h2 className="font-serif text-2xl text-ink-900">Other {programme.level.toLowerCase()} programmes</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {others.map((other) => (
                <Link
                  key={other.slug}
                  href={`/programmes/${other.slug}`}
                  className="group rounded-xl border border-ink-900/10 bg-white p-5 transition-all hover:-translate-y-1 hover:border-gold-500/50"
                >
                  <p className="text-[0.66rem] uppercase tracking-[0.12em] text-gold-700">{other.degree}</p>
                  <h3 className="mt-1 font-serif text-lg leading-snug text-ink-900">{other.shortName}</h3>
                  <p className="mt-1.5 line-clamp-2 text-[0.8rem] text-ink-700/85">{other.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-ink-800 group-hover:text-gold-700">
                    View programme
                    <Icon name="arrow" className="h-3.5 w-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to apply for ${programme.shortName}?`}
        body="Complete the online application, or speak to a counsellor first — both routes take under ten minutes to start."
        primaryLabel="Start application"
        primaryHref="/admissions"
        secondaryLabel="Admission FAQs"
        secondaryHref="/admissions#faqs"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
