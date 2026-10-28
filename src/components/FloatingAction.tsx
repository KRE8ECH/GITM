"use client";

import { useEffect, useState } from "react";
import Icon from "./Icon";
import { site } from "@/data/site";

export default function FloatingAction() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-4 z-40 flex flex-col items-end gap-2 transition-all duration-500 sm:bottom-7 sm:right-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <a
        href={site.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 rounded-full bg-[#1f8f4e] py-2.5 pl-2.5 pr-4 text-sm font-semibold text-white shadow-[0_16px_32px_-16px_rgba(7,26,51,0.6)] transition-transform hover:-translate-y-0.5"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
          <Icon name="whatsapp" className="h-5 w-5" strokeWidth={1.4} />
        </span>
        <span className="hidden sm:inline">Ask on WhatsApp</span>
        <span className="sr-only sm:hidden">Ask on WhatsApp</span>
      </a>
      <a
        href="tel:+919555100100"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-900/10 bg-white text-ink-900 shadow-[0_12px_24px_-16px_rgba(7,26,51,0.6)] transition-transform hover:-translate-y-0.5"
        aria-label="Call admissions on +91 95551 00100"
      >
        <Icon name="phone" className="h-4.5 w-4.5" />
      </a>
    </div>
  );
}
