import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import ProgrammeCard from "@/components/ProgrammeCard";
import RecruiterMarquee from "@/components/RecruiterMarquee";
import { EventCard } from "@/components/EventsExplorer";
import { events } from "@/data/events";
import { programmes } from "@/data/programmes";
import { leaders } from "@/data/leaders";
import { facilities, notices, testimonials } from "@/data/campus";
import { accreditations, site, stats } from "@/data/site";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "GITM Gurugram — Best Engineering & Management College in Delhi NCR",
  description:
    "An AICTE-approved, Gurugram University-affiliated institute in Farrukhnagar, Gurugram. B.Tech, M.Tech, MBA and BBA programmes on an 18-acre campus with a dedicated placement cell.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Credential strip */}
      <section className="border-b border-ink-900/10 bg-parchment" aria-label="Accreditations">
        <div className="container-x grid gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {accreditations.map((item) => (
            <div key={item.name} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900/5 text-ink-800">
                <Icon name="shield" className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[0.82rem] font-semibold text-ink-900">{item.name}</p>
                <p className="mt-0.5 text-[0.72rem] leading-snug text-ink-600/85">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Intro + stats */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="eyebrow">Welcome to GITM</p>
            <h2 className="mt-4 font-serif text-[clamp(2rem,3.6vw,3rem)] leading-[1.1] text-ink-900">
              A place for learning, discovery, innovation and discourse — in the heart of Delhi NCR.
            </h2>
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-ink-700/90">
              <p>
                Global Institute of Technology &amp; Management, Gurugram (GITM Farrukhnagar) was established in
                2008. The institute is approved by the <strong className="font-semibold text-ink-900">All India Council
                for Technical Education (AICTE)</strong>, Ministry of HRD, Government of India, and recognised by the
                Directorate of Technical Education, Government of Haryana. All programmes are affiliated to{" "}
                <strong className="font-semibold text-ink-900">Gurugram University</strong>.
              </p>
              <p>
                Spread across 18 acres with over 3 lakh sq. ft. of constructed area, the campus sits in India&apos;s
                corporate capital — home to the country&apos;s leading IT, software and multinational employers. Students
                come from across India and neighbouring countries, creating a genuinely diverse campus.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <Link href="/about" className="link-underline">
                Read our story
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
              <Link href="/leadership" className="link-underline">
                Messages from leadership
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/campus-front.webp"
                alt="The main academic building at GITM Gurugram, with its dome and landscaped lawn"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/85 to-transparent p-6 pt-16">
                <p className="font-serif text-xl text-white">GITM Farrukhnagar campus</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gold-300/80">
                  18 acres · 3 lakh sq. ft. built-up
                </p>
              </div>
            </div>
            <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-tl-2xl border-l-2 border-t-2 border-gold-500/60 lg:block" />
          </Reveal>
        </div>

        <div className="container-x mt-16">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-cream p-6 transition-colors hover:bg-white">
                <p className="font-serif text-3xl text-ink-900">
                  {stat.value}
                  {"suffix" in stat && stat.suffix ? <span className="text-xl text-gold-600">{stat.suffix}</span> : null}
                </p>
                <p className="mt-2 text-[0.8rem] font-semibold uppercase tracking-[0.12em] text-ink-800">{stat.label}</p>
                <p className="mt-1 text-[0.78rem] text-ink-600/80">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="relative overflow-hidden bg-ink-950 py-20 text-white md:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(200,164,92,0.25),transparent_45%)]" />
        </div>
        <div className="container-x relative">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow eyebrow-invert">From the leadership</p>
              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight">
                Eighteen years of holding ourselves to one standard: outcomes.
              </h2>
            </div>
            <Link href="/leadership" className="btn btn-outline-invert shrink-0">
              Read all messages
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {leaders.map((leader, index) => (
              <Reveal key={leader.name} delay={index * 90}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-colors hover:border-gold-500/35 hover:bg-white/[0.06]">
                  <Icon name="quote" className="h-7 w-7 text-gold-500/70" />
                  <blockquote className="mt-4 flex-1 font-serif text-[1.05rem] leading-relaxed text-white/90">
                    “{leader.quote}”
                  </blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 font-serif text-sm text-gold-300">
                      {leader.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{leader.name}</p>
                      <p className="text-[0.72rem] uppercase tracking-[0.1em] text-white/65">{leader.role}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Academic programmes</p>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight text-ink-900">
                Eight programmes. One standard of rigour.
              </h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700/88">
                Undergraduate and postgraduate degrees across computing, electronics, core engineering and management —
                each with laboratories, industry visits and a placement track.
              </p>
            </div>
            <Link href="/programmes" className="btn btn-outline shrink-0">
              Compare all programmes
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programmes.map((programme, index) => (
              <Reveal key={programme.slug} delay={(index % 4) * 70}>
                <ProgrammeCard slug={programme.slug} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="relative overflow-hidden bg-parchment py-20 md:py-24">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <Reveal>
              <p className="eyebrow">Placements &amp; careers</p>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight text-ink-900">
                Recruiters from Gurugram&apos;s corporate belt, on campus every semester.
              </h2>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700/90">
                The Centre for Corporate Relations runs placement drives, internships and pre-placement training
                through the year — with companies hiring for software, analytics, banking, core engineering and
                management roles.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Aptitude, reasoning and communication training from year one",
                  "Mock interviews, GD practice and resume workshops",
                  "Summer and final-year internships with partner companies",
                  "Dedicated TPO team and an active alumni referral network",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-ink-700/85">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/20 text-gold-700">
                      <Icon name="check" className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/placements" className="btn btn-ink">
                  Placement record
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Hire from GITM
                </Link>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mb-6 flex items-baseline gap-3">
                <h3 className="font-serif text-xl text-ink-900">Top recruiters</h3>
                <span className="text-[0.7rem] uppercase tracking-[0.14em] text-ink-600/80">Selected list</span>
              </div>
              <RecruiterMarquee />
              <div className="mt-2">
                <RecruiterMarquee reverse />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Campus life */}
      <section className="py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center before:hidden">Life at GITM</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.8rem)] leading-tight text-ink-900">
              Diverse perspectives, one shared commitment to excellence.
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700/88">
              A residential campus with hostels, sports, clubs and a calendar full of festivals, guest lectures and
              community work.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.slice(0, 6).map((facility, index) => (
              <Reveal key={facility.title} delay={(index % 3) * 80}>
                <article className="card group h-full p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900/5 text-ink-800 transition-colors group-hover:bg-gold-500/20 group-hover:text-gold-700">
                    <Icon name={facility.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-ink-900">{facility.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/85">{facility.body}</p>
                  <p className="mt-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-gold-700">{facility.stat}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/campus-life" className="link-underline">
              Explore campus life
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-ink-900 py-20 text-white md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow eyebrow-invert">Student voices</p>
              <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight">
                What our students and alumni say.
              </h2>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={item.detail} delay={index * 90}>
                <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="flex gap-1 text-gold-400" aria-label="Five star rating">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Icon key={starIndex} name="star" className="h-3.5 w-3.5" strokeWidth={1.2} />
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-[0.92rem] leading-relaxed text-white/75">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-white/10 pt-4">
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-[0.72rem] text-white/65">{item.detail}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notices + events */}
      <section className="py-20 md:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <p className="eyebrow">Notices</p>
            <h2 className="mt-4 font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] leading-tight text-ink-900">
              What&apos;s happening on campus
            </h2>
            <div className="mt-6 divide-y divide-ink-900/10 border-y border-ink-900/10">
              {notices.map((notice) => (
                <Link key={notice.label} href={notice.href} className="group flex items-start gap-4 py-4">
                  <span className="mt-0.5 shrink-0 rounded-md bg-ink-900/5 px-2 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.08em] text-ink-700">
                    {new Date(notice.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                  </span>
                  <span className="text-sm leading-snug text-ink-800 transition-colors group-hover:text-gold-700">
                    {notice.label}
                  </span>
                  <Icon
                    name="arrow"
                    className="ml-auto h-4 w-4 shrink-0 text-ink-600/85 transition-all group-hover:translate-x-1 group-hover:text-gold-700"
                  />
                </Link>
              ))}
            </div>
          </Reveal>

          <div>
            <Reveal className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Latest updates</p>
                <h2 className="mt-4 font-serif text-[clamp(1.7rem,2.8vw,2.3rem)] leading-tight text-ink-900">
                  Placements, internships &amp; achievements
                </h2>
              </div>
              <Link href="/events" className="link-underline shrink-0 text-sm">
                All updates
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {events.slice(0, 4).map((event, index) => (
                <Reveal key={event.slug} delay={index * 70}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visit / contact strip */}
      <section className="border-y border-ink-900/10 bg-parchment py-14">
        <div className="container-x grid gap-8 md:grid-cols-3">
          {[
            {
              icon: "pin",
              title: "Visit the campus",
              lines: [...site.campus.lines],
              href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.campus.mapQuery)}`,
              hrefLabel: "Get directions",
            },
            {
              icon: "phone",
              title: "Talk to admissions",
              lines: ["+91 95551 00100", "+91 80539 80002 / 0003 / 0004", "admission@gitmgurgaon.com"],
              href: "tel:+919555100100",
              hrefLabel: "Call now",
            },
            {
              icon: "clock",
              title: "Office hours",
              lines: ["Monday – Saturday", "9:00 AM – 5:00 PM", "Campus visits welcome"],
              href: site.whatsapp,
              hrefLabel: "Message on WhatsApp",
            },
          ].map((block) => (
            <div key={block.title} className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold-500/40 bg-white text-gold-700">
                <Icon name={block.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-lg text-ink-900">{block.title}</h3>
                <div className="mt-2 space-y-0.5 text-[0.82rem] leading-relaxed text-ink-700/85">
                  {block.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <a
                  href={block.href}
                  target={block.href.startsWith("http") ? "_blank" : undefined}
                  rel={block.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-2 inline-flex items-center gap-1.5 text-[0.8rem] font-semibold text-gold-700 hover:text-gold-600"
                >
                  {block.hrefLabel}
                  <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
