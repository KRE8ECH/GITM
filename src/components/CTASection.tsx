import Link from "next/link";
import Icon from "./Icon";
import Reveal from "./Reveal";

export default function CTASection({
  title = "The next intake starts soon. Let's get your application right.",
  body = "Talk to our admissions team about eligibility, scholarships, hostel and transport — before you commit to anything.",
  primaryLabel = "Apply for 2026–27",
  primaryHref = "/admissions",
  secondaryLabel = "Book a campus visit",
  secondaryHref = "/contact",
}: {
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-900 py-16 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]" aria-hidden="true">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/images/campus-front.webp)" }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-900/95 to-ink-900/70" aria-hidden="true" />
      <div className="pointer-events-none absolute right-10 top-10 hidden h-40 w-40 rounded-full border border-gold-500/20 lg:block" aria-hidden="true" />

      <div className="container-x relative">
        <Reveal className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="eyebrow eyebrow-invert">Admissions office</p>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/60">{body}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href={primaryHref} className="btn btn-gold w-full justify-center px-6 py-3.5 md:w-auto">
              {primaryLabel}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href={secondaryHref} className="btn btn-outline-invert w-full justify-center px-6 py-3.5 md:w-auto">
              {secondaryLabel}
            </Link>
            <a
              href="tel:+919555100100"
              className="mt-1 flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-white md:justify-end"
            >
              <Icon name="phone" className="h-4 w-4 text-gold-500" />
              +91 95551 00100
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
