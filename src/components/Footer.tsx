import Link from "next/link";
import { departments, site } from "@/data/site";
import { programmes } from "@/data/programmes";
import Icon from "./Icon";
import Logo from "./Logo";

const quickLinks = [
  { label: "About GITM", href: "/about" },
  { label: "Leadership", href: "/leadership" },
  { label: "Admissions", href: "/admissions" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Events & News", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-950 text-white/70">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-ink-700/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gold-700/10 blur-3xl" />

      <div className="container-x relative">
        {/* CTA strip */}
        <div className="grid gap-6 border-b border-white/10 py-12 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <p className="eyebrow eyebrow-invert">Admissions open · 2026–27</p>
            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Come see the campus before you decide.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/60">
              Meet the faculty, walk the labs, talk to students. Campus visits run Monday to Saturday,
              9:00 AM – 5:00 PM. Applications for all programmes close on 15 November.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link href="/admissions" className="btn btn-gold">
              Apply now
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline-invert">
              <Icon name="whatsapp" className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              An AICTE-approved institute in Farrukhnagar, Gurugram, shaping engineers and managers since 2008.
              Approved by AICTE, recognised by DTE Haryana, affiliated to Gurugram University.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["AICTE", "Gurugram University", "DTE Haryana"].map((item) => (
                <span key={item} className="rounded-full border border-white/12 px-3 py-1 text-[0.68rem] uppercase tracking-[0.12em] text-white/60">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-400">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-400">Programmes</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {programmes.map((programme) => (
                <li key={programme.slug}>
                  <Link href={`/programmes/${programme.slug}`} className="transition-colors hover:text-white">
                    {programme.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-gold-400">Campus</h3>
            <address className="mt-4 space-y-1 text-sm not-italic text-white/55">
              {site.campus.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <div className="mt-4 space-y-2 text-sm">
              <a href={`tel:${site.campus.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Icon name="phone" className="h-4 w-4 text-gold-500" />
                {site.campus.phone}
              </a>
              <a href={`mailto:${site.campus.email}`} className="flex items-center gap-2 transition-colors hover:text-white">
                <Icon name="mail" className="h-4 w-4 text-gold-500" />
                {site.campus.email}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.campus.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-gold-400 transition-colors hover:text-gold-300"
              >
                <Icon name="pin" className="h-4 w-4" />
                Get directions
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="grid gap-x-8 gap-y-3 text-xs text-white/65 sm:grid-cols-2 lg:grid-cols-3">
              {departments.map((department) => (
                <p key={department.name}>
                  <span className="text-white/65">{department.name}:</span>{" "}
                  <a href={`tel:${department.phone.replace(/\s/g, "")}`} className="hover:text-white">
                    {department.phone}
                  </a>
                </p>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Global Institute of Technology &amp; Management, Gurugram. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-5">
              <Link href="/about#committees" className="hover:text-white">Anti-ragging</Link>
              <Link href="/about#committees" className="hover:text-white">Grievance redressal</Link>
              <Link href="/about#committees" className="hover:text-white">ICC</Link>
              <Link href="/contact" className="hover:text-white">Accessibility</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
