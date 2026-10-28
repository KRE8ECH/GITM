import Link from "next/link";
import Icon from "@/components/Icon";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(200,164,92,0.18),transparent_50%)]" aria-hidden="true" />
      <div className="container-x relative max-w-2xl">
        <p className="eyebrow eyebrow-invert">Error 404</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">This page has moved or never existed.</h1>
        <p className="mt-4 text-white/60">
          The link may be from the old website. Try one of these instead — or call admissions on +91 95551 00100 and we
          will find it for you.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-gold">
            Back to home
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
          <Link href="/programmes" className="btn btn-outline-invert">Programmes</Link>
          <Link href="/admissions" className="btn btn-outline-invert">Admissions</Link>
        </div>
        <div className="mt-12 grid gap-2 border-t border-white/10 pt-8 text-sm sm:grid-cols-2">
          {[
            ["About GITM", "/about"],
            ["Leadership", "/leadership"],
            ["Placements", "/placements"],
            ["Campus Life", "/campus-life"],
            ["Events & News", "/events"],
            ["Contact", "/contact"],
          ].map(([label, href]) => (
            <Link key={href} href={href} className="flex items-center gap-2 py-1 text-white/55 transition-colors hover:text-gold-400">
              <Icon name="chevronRight" className="h-3.5 w-3.5" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
