"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { events, eventCategories, type EventItem } from "@/data/events";
import Icon from "./Icon";

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function EventsExplorer({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<(typeof eventCategories)[number]>("All");

  const filtered = useMemo(() => {
    const list = category === "All" ? events : events.filter((event) => event.category === category);
    return limit ? list.slice(0, limit) : list;
  }, [category, limit]);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter events by category">
        {eventCategories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            aria-pressed={category === item}
            className={`rounded-full border px-4 py-2 text-[0.78rem] font-medium transition-all ${
              category === item
                ? "border-ink-900 bg-ink-900 text-white"
                : "border-ink-900/15 text-ink-700 hover:border-ink-900/40"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((event) => (
          <EventCard key={event.slug} event={event} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 rounded-xl border border-dashed border-ink-900/20 p-8 text-center text-sm text-ink-600">
          No updates in this category yet. Check back soon.
        </p>
      )}
    </div>
  );
}

export function EventCard({ event }: { event: EventItem }) {
  return (
    <Link href={`/events/${event.slug}`} className="card group flex h-full flex-col overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={event.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.12em] text-ink-800">
          {event.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.1em] text-ink-600/80">
          <Icon name="calendar" className="h-3.5 w-3.5 text-gold-600" />
          {formatDate(event.date)}
        </p>
        <h3 className="mt-2 font-serif text-lg leading-snug text-ink-900 transition-colors group-hover:text-ink-700">
          {event.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-700/85">{event.excerpt}</p>
        <span className="mt-auto flex items-center gap-1.5 pt-4 text-[0.78rem] font-semibold text-gold-700">
          Read update
          <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
