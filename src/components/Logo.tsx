type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  showText?: boolean;
};

export default function Logo({ variant = "dark", className = "", showText = true }: LogoProps) {
  const isLight = variant === "light";
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 48 48"
        className="h-11 w-11 shrink-0"
        role="img"
        aria-label="GITM crest"
      >
        <defs>
          <linearGradient id="crestGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#E7D3A8" />
            <stop offset="55%" stopColor="#C8A45C" />
            <stop offset="100%" stopColor="#8D6B28" />
          </linearGradient>
        </defs>
        <path
          d="M24 2.5 41 9v17.5c0 9.4-7 15.8-17 19-10-3.2-17-9.6-17-19V9z"
          fill={isLight ? "rgba(255,255,255,0.06)" : "#071A33"}
          stroke="url(#crestGold)"
          strokeWidth="1.6"
        />
        <circle cx="24" cy="22" r="8.4" fill="none" stroke="url(#crestGold)" strokeWidth="1.2" />
        <ellipse cx="24" cy="22" rx="4" ry="8.4" fill="none" stroke="url(#crestGold)" strokeWidth="0.9" opacity="0.75" />
        <path d="M15.6 22h16.8M16.7 17.4h14.6M16.7 26.6h14.6" stroke="url(#crestGold)" strokeWidth="0.9" opacity="0.75" />
        <path d="M18 34.5c2-2.6 4-3.9 6-3.9s4 1.3 6 3.9" stroke="url(#crestGold)" strokeWidth="1.4" fill="none" strokeLinecap="round" />
        <path d="M24 6.5v3" stroke="url(#crestGold)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {showText && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-serif text-[1.35rem] font-semibold tracking-tight ${isLight ? "text-white" : "text-ink-900"}`}
          >
            GITM
          </span>
          <span
            className={`mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.16em] ${isLight ? "text-gold-300/85" : "text-ink-600/80"}`}
          >
            Gurugram · Est. 2008
          </span>
        </span>
      )}
    </span>
  );
}
