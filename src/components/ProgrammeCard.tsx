import { programmes } from "@/data/programmes";
import Link from "next/link";
import Icon from "./Icon";

export default function ProgrammeCard({ slug }: { slug: string }) {
  const programme = programmes.find((item) => item.slug === slug);
  if (!programme) return null;

  return (
    <Link
      href={`/programmes/${programme.slug}`}
      className="card group flex h-full flex-col overflow-hidden"
    >
      <div className="relative h-44 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={programme.image}
          alt={`${programme.shortName} at GITM Gurugram`}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.66rem] font-semibold uppercase tracking-[0.12em] text-ink-900">
          {programme.degree}
        </span>
        <div className="absolute inset-x-4 bottom-3 flex items-end justify-between gap-3">
          <h3 className="font-serif text-xl leading-tight text-white">{programme.shortName}</h3>
          <span className="mb-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
            <Icon name="arrowUpRight" className="h-4 w-4" strokeWidth={2} />
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-gold-600">{programme.duration}</p>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-700/88">{programme.blurb}</p>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4 text-[0.72rem] text-ink-600/85">
          <span className="inline-flex items-center gap-1.5">
            <Icon name="cap" className="h-3.5 w-3.5 text-gold-600" />
            {programme.department}
          </span>
        </div>
      </div>
    </Link>
  );
}
