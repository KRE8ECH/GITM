import { recruiters } from "@/data/recruiters";

export default function RecruiterMarquee({
  tone = "light",
  reverse = false,
}: {
  tone?: "light" | "dark";
  reverse?: boolean;
}) {
  const isDark = tone === "dark";
  const list = reverse ? [...recruiters].reverse().slice(0, 24) : recruiters.slice(0, 24);

  const Group = () => (
    <div className="flex shrink-0 gap-3 pr-3" aria-hidden="true">
      {list.map((recruiter) => (
        <span
          key={recruiter.name}
          className={`flex shrink-0 flex-col rounded-xl border px-5 py-3 ${
            isDark
              ? "border-white/10 bg-white/[0.04]"
              : "border-ink-900/10 bg-white"
          }`}
        >
          <span className={`whitespace-nowrap font-serif text-[1.05rem] leading-tight ${isDark ? "text-white/90" : "text-ink-900"}`}>
            {recruiter.name}
          </span>
          <span className={`mt-0.5 whitespace-nowrap text-[0.62rem] uppercase tracking-[0.14em] ${isDark ? "text-white/55" : "text-ink-600/80"}`}>
            {recruiter.sector}
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className="group relative overflow-hidden py-1"
      style={{
        maskImage: "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
      }}
    >
      <div
        className="marquee-track"
        style={{
          animationDirection: reverse ? "reverse" : "normal",
          animationDuration: reverse ? "58s" : "46s",
        }}
      >
        <Group />
        <Group />
      </div>
      <span className="sr-only">
        Recruiters include {recruiters.slice(0, 12).map((item) => item.name).join(", ")} and others.
      </span>
    </div>
  );
}
