"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import Icon from "./Icon";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-ink-950 text-[0.78rem] text-white/70 lg:block">
        <div className="container-x flex h-10 items-center justify-between">
          <p className="flex items-center gap-2">
            <Icon name="award" className="h-3.5 w-3.5 text-gold-500" />
            AICTE approved · Affiliated to Gurugram University
          </p>
          <div className="flex items-center gap-6">
            <a href={`tel:${site.campus.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-gold-400">
              <Icon name="phone" className="h-3.5 w-3.5" />
              {site.campus.phone}
            </a>
            <a href={`mailto:${site.campus.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-400">
              <Icon name="mail" className="h-3.5 w-3.5" />
              {site.campus.email}
            </a>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <SocialLinks tone="dark" variant="plain" limit={2} />
            <a
              href={site.applyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-gold-400 transition-colors hover:text-gold-300"
            >
              Admissions 2026–27 open
              <Icon name="arrowUpRight" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-ink-900/10 bg-cream/90 py-1 shadow-[0_10px_30px_-24px_rgba(7,26,51,0.6)] backdrop-blur-xl"
            : "border-b border-transparent bg-cream py-2"
        }`}
      >
        <div className="container-x flex items-center justify-between gap-6">
          <Link href="/" aria-label="GITM Gurugram — home" className="py-2">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-full px-3 py-2 text-[0.86rem] font-medium transition-colors ${
                    isActive(item.href) ? "text-ink-900" : "text-ink-700/90 hover:text-ink-900"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                  {item.children && <Icon name="chevronDown" className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180" />}
                </Link>
                {isActive(item.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gold-500" />
                )}

                {item.children && (
                  <div className="invisible absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-2xl border border-ink-900/10 bg-white p-2 shadow-[0_30px_60px_-30px_rgba(7,26,51,0.4)]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-start justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-parchment"
                        >
                          <span>
                            <span className="block text-sm font-semibold text-ink-900">{child.label}</span>
                            {child.description && (
                              <span className="mt-0.5 block text-xs text-ink-600/85">{child.description}</span>
                            )}
                          </span>
                          <Icon name="arrowUpRight" className="mt-1 h-3.5 w-3.5 shrink-0 text-gold-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/admissions" className="btn btn-gold hidden sm:inline-flex">
              Apply now
              <Icon name="arrowUpRight" className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink-950/50 backdrop-blur-sm transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[min(22rem,88vw)] overflow-y-auto bg-cream px-5 pb-10 pt-24 transition-transform duration-400 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
        >
          <nav aria-label="Mobile" className="flex flex-col divide-y divide-ink-900/10">
            {nav.map((item) => (
              <div key={item.label} className="py-1">
                <div className="flex items-center justify-between">
                  <Link href={item.href} className="flex-1 py-3 font-serif text-lg text-ink-900">
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      onClick={() => setExpanded((value) => (value === item.label ? null : item.label))}
                      aria-expanded={expanded === item.label}
                      aria-label={`Toggle ${item.label} submenu`}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-900/10 text-ink-700"
                    >
                      <Icon
                        name="chevronDown"
                        className={`h-4 w-4 transition-transform ${expanded === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div className={`grid overflow-hidden transition-all duration-300 ${expanded === item.label ? "grid-rows-[1fr] pb-2" : "grid-rows-[0fr]"}`}>
                    <ul className="min-h-0 space-y-1 border-l border-gold-500/40 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block py-2 text-sm text-ink-700">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>
          <Link href="/admissions" className="btn btn-gold mt-6 w-full">
            Apply for 2026–27
            <Icon name="arrowUpRight" className="h-4 w-4" />
          </Link>
          <a href={site.whatsapp} className="btn btn-outline mt-3 w-full" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" className="h-4 w-4" />
            Talk to admissions
          </a>
          <div className="mt-6 space-y-2 text-sm text-ink-600">
            <a href={`tel:${site.campus.phone.replace(/\s/g, "")}`} className="flex items-center gap-2">
              <Icon name="phone" className="h-4 w-4 text-gold-600" /> {site.campus.phone}
            </a>
            <a href={`mailto:${site.campus.email}`} className="flex items-center gap-2">
              <Icon name="mail" className="h-4 w-4 text-gold-600" /> {site.campus.email}
            </a>
          </div>
          <div className="mt-6 border-t border-ink-900/10 pt-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-gold-700">Follow GITM</p>
            <SocialLinks tone="light" className="mt-3" />
          </div>
        </div>
      </div>
    </>
  );
}
