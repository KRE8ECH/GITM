import Link from "next/link";
import Icon from "./Icon";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image = "/images/campus-front.webp",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
  image?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/92 to-ink-900/70" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full border border-gold-500/20" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-10 top-16 h-40 w-40 rounded-full border border-gold-500/10" aria-hidden="true" />

      <div className="container-x relative py-14 md:py-20">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] uppercase tracking-[0.14em] text-white/65">
            {breadcrumb.map((crumb, index) => (
              <li key={crumb.label} className="flex items-center gap-2">
                {index > 0 && <span className="text-gold-500/60">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="transition-colors hover:text-gold-400">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/75">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <p className="eyebrow eyebrow-invert">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl leading-[1.06] sm:text-5xl lg:text-[3.4rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-white/65">{description}</p>
        )}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/admissions" className="btn btn-gold">
            Apply for 2026–27
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/contact" className="btn btn-outline-invert">
            Book a campus visit
          </Link>
        </div>
      </div>
    </section>
  );
}
