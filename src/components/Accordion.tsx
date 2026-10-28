"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink-900/10 border-y border-ink-900/10">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className={`font-serif text-lg transition-colors ${isOpen ? "text-ink-900" : "text-ink-800/85"}`}>
                  {item.q}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen ? "border-gold-500 bg-gold-500 text-ink-950" : "border-ink-900/15 text-ink-700"
                  }`}
                >
                  <Icon name="chevronDown" className={`h-4 w-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                </span>
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              className={`grid overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <p className="min-h-0 max-w-3xl pr-10 text-sm leading-relaxed text-ink-700/88">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
