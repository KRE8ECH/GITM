"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";

const slides = [
  {
    image: "/images/campus-hero.webp",
    kicker: "Established 2008 · Farrukhnagar, Gurugram",
    title: "An engineering education built for the Delhi NCR workplace.",
    body: "AICTE-approved programmes, 18 acres of campus, and a curriculum designed around what industry actually hires for.",
    alt: "GITM Gurugram main academic block with its distinctive dome",
  },
  {
    image: "/images/lab.webp",
    kicker: "Ten labs · 500+ workstations",
    title: "Where the code, circuits and concrete get built.",
    body: "Computer science, AI, electronics, mechanical and civil laboratories open to students well beyond scheduled hours.",
    alt: "Students working in a GITM computer laboratory",
  },
  {
    image: "/images/students.webp",
    kicker: "Placements · Centre for Corporate Relations",
    title: "Employability starts in the first year, not the last.",
    body: "Aptitude training, mock interviews and campus drives with recruiters across IT, banking, analytics and manufacturing.",
    alt: "GITM students walking together on campus",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setIndex((value) => (value + 1) % slides.length), 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[index];

  return (
    <section
      className="relative isolate overflow-hidden bg-ink-950"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Campus highlights"
    >
      {slides.map((item, itemIndex) => (
        <div
          key={item.image}
          aria-hidden={itemIndex !== index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1400ms] ease-out ${
            itemIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${item.image})`, transform: itemIndex === index ? "scale(1.02)" : "scale(1)" }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/25" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" aria-hidden="true" />

      <div className="container-x relative flex min-h-[clamp(34rem,86vh,46rem)] flex-col justify-center py-20">
        <div className="max-w-3xl">
          <div key={`kicker-${index}`} className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-400">
            <span className="h-px w-8 bg-gold-500/70" />
            {slide.kicker}
          </div>

          <h1
            key={`title-${index}`}
            className="mt-6 font-serif text-[clamp(2.3rem,5.4vw,4.35rem)] leading-[1.02] tracking-[-0.02em] text-white"
            style={{ animation: "heroIn 900ms cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {slide.title}
          </h1>

          <p
            key={`body-${index}`}
            className="mt-6 max-w-xl text-[1.02rem] leading-relaxed text-white/70"
            style={{ animation: "heroIn 900ms 120ms cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {slide.body}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/admissions" className="btn btn-gold px-6 py-3.5">
              Start your application
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/programmes" className="btn btn-outline-invert px-6 py-3.5">
              Explore programmes
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[0.78rem] text-white/55">
            <span className="inline-flex items-center gap-2">
              <Icon name="shield" className="h-4 w-4 text-gold-500" />
              AICTE approved
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="cap" className="h-4 w-4 text-gold-500" />
              Gurugram University affiliated
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="pin" className="h-4 w-4 text-gold-500" />
              18-acre residential campus
            </span>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between gap-6">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {slides.map((item, itemIndex) => (
              <button
                key={item.image}
                type="button"
                role="tab"
                aria-selected={itemIndex === index}
                aria-label={`Slide ${itemIndex + 1}`}
                onClick={() => setIndex(itemIndex)}
                className="group relative h-1 overflow-hidden rounded-full bg-white/20 transition-all"
                style={{ width: itemIndex === index ? "3.5rem" : "1.5rem" }}
              >
                <span
                  className={`absolute inset-0 origin-left rounded-full bg-gold-400 transition-transform duration-500 ${
                    itemIndex === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="hidden text-right text-[0.7rem] uppercase tracking-[0.18em] text-white/60 sm:block">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
