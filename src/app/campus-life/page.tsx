import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";
import CTASection from "@/components/CTASection";
import { campusPillars, facilities, studentLife } from "@/data/campus";

export const metadata: Metadata = {
  title: "Campus Life — hostels, library, labs, sports and transport",
  description:
    "Life on GITM Gurugram's 18-acre residential campus: hostels for boys and girls, a 20,000-volume library, ten computer labs, sports facilities, transport and student clubs.",
};

const gallery = [
  { src: "/images/campus-hero.jpg", alt: "GITM Gurugram academic block", span: "lg:col-span-2 lg:row-span-2", label: "Academic block" },
  { src: "/images/lab.jpg", alt: "Computer laboratory with students at workstations", span: "", label: "Computer labs" },
  { src: "/images/students.jpg", alt: "Students walking on campus", span: "", label: "Campus walks" },
  { src: "/images/classroom.jpg", alt: "Classroom session in progress", span: "", label: "Classrooms" },
  { src: "/images/campus-2.jpg", alt: "Campus building and lawns", span: "", label: "Green campus" },
];

export default function CampusLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Campus life"
        title="Eighteen acres, three lakh square feet, and a calendar that never stays quiet."
        description="A residential campus in Farrukhnagar where laboratories, hostels, sports grounds and student clubs sit within a few minutes of each other."
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Campus Life" }]}
        image="/images/campus-2.jpg"
      />

      {/* Gallery */}
      <section className="py-14 md:py-20">
        <div className="container-x">
          <Reveal className="grid auto-rows-[11rem] grid-cols-2 gap-3 lg:grid-cols-4">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className={`group relative overflow-hidden rounded-xl ${item.span}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-3 left-4 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {item.label}
                </figcaption>
              </figure>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Facilities */}
      <section className="border-y border-ink-900/10 bg-parchment py-20 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Facilities</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.7rem)] leading-tight text-ink-900">
              Everything needed for four years of serious study.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {facilities.map((facility, index) => (
              <Reveal key={facility.title} delay={(index % 3) * 70}>
                <article className="h-full rounded-2xl border border-ink-900/10 bg-white p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900/5 text-ink-800">
                    <Icon name={facility.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 font-serif text-lg text-ink-900">{facility.title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-ink-700/85">{facility.body}</p>
                  <p className="mt-4 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-gold-700">{facility.stat}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Student life */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">Beyond the syllabus</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight text-ink-900">
              Where character gets built
            </h2>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-700/90">
              The fast-changing world of work requires more than a degree. We provide personality development
              programmes, aptitude and reasoning classes, co-curricular activities, seminars, webinars and industry
              visits to build competitive acumen and make students corporate-ready.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/students.jpg" alt="GITM students walking through campus between sessions" className="aspect-[16/10] w-full object-cover" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-3 sm:grid-cols-2">
              {studentLife.map((item) => (
                <div key={item.title} className="rounded-xl border border-ink-900/10 bg-white p-5">
                  <h3 className="font-serif text-base leading-snug text-ink-900">{item.title}</h3>
                  <p className="mt-1.5 text-[0.8rem] leading-relaxed text-ink-700/85">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Centres */}
      <section className="bg-ink-950 py-20 text-white md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="eyebrow eyebrow-invert">Centres at GITM</p>
            <h2 className="mt-4 font-serif text-[clamp(1.9rem,3.4vw,2.6rem)] leading-tight">
              Four centres that connect the classroom to the world outside it.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {campusPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={(index % 2) * 80}>
                <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                  <span className="font-serif text-sm text-gold-400">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 font-serif text-xl text-white">{pillar.title}</h3>
                  <p className="mt-2 text-[0.86rem] leading-relaxed text-white/60">{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Hostel & transport detail */}
      <section className="py-20 md:py-24">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Hostel",
              icon: "home",
              points: [
                "Separate hostels for boys and girls",
                "Air-conditioned and non-air-conditioned rooms",
                "Mess with vegetarian and non-vegetarian options",
                "Resident wardens and 24×7 security",
                "Wi-Fi connectivity in hostel blocks",
              ],
              href: "mailto:hostelwarden@gitmgurgaon.com",
              hrefLabel: "hostelwarden@gitmgurgaon.com",
            },
            {
              title: "Transport",
              icon: "bus",
              points: [
                "Bus fleet covering Gurugram and Delhi routes",
                "Farrukhnagar and Haily Mandi connectivity",
                "Route planning by the transport in-charge",
                "Optional — day scholars may use own transport",
                "Fee based on route distance",
              ],
              href: "mailto:tptincharge@gitmgurgaon.com",
              hrefLabel: "tptincharge@gitmgurgaon.com",
            },
            {
              title: "Health & safety",
              icon: "shield",
              points: [
                "Medical room with first-aid support",
                "Anti-ragging committee with direct contact",
                "Internal Complaints Committee under POSH",
                "Campus-wide CCTV and security staff",
                "Fire safety equipment in all blocks",
              ],
              href: "/about#committees",
              hrefLabel: "View statutory committees",
            },
          ].map((block, index) => (
            <Reveal key={block.title} delay={index * 80}>
              <div className="h-full rounded-2xl border border-ink-900/10 bg-white p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-700">
                  <Icon name={block.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-serif text-xl text-ink-900">{block.title}</h2>
                <ul className="mt-3 space-y-2">
                  {block.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[0.83rem] leading-relaxed text-ink-700/88">
                      <Icon name="check" className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href={block.href} className="link-underline mt-4 text-[0.8rem]">
                  {block.hrefLabel}
                  <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Visit on a weekday and see the campus in session."
        body="Campus visits run Monday to Saturday, 9:00 AM to 5:00 PM. We will show you the labs, library, hostels and cafeteria."
        primaryLabel="Book a visit"
        primaryHref="/contact"
        secondaryLabel="See programmes"
        secondaryHref="/programmes"
      />
    </>
  );
}
