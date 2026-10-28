import { socials, type Social } from "@/data/site";

const brandPaths: Record<Social["brand"], string> = {
  instagram:
    "M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.55.21.95.47 1.36.88.41.41.67.8.88 1.36.17.44.36 1.07.42 2.24.06 1.27.07 1.65.07 4.83s0 3.56-.07 4.83c-.06 1.17-.25 1.8-.42 2.24-.21.55-.47.95-.88 1.36-.41.41-.8.67-1.36.88-.44.17-1.07.36-2.24.42-1.27.06-1.65.07-4.83.07s-3.56 0-4.83-.07c-1.17-.06-1.8-.25-2.24-.42a3.9 3.9 0 0 1-1.36-.88 3.9 3.9 0 0 1-.88-1.36c-.17-.44-.36-1.07-.42-2.24C2.2 15.56 2.2 15.18 2.2 12s0-3.56.07-4.83c.06-1.17.25-1.8.42-2.24.21-.55.47-.95.88-1.36.41-.41.8-.67 1.36-.88.44-.17 1.07-.36 2.24-.42C8.44 2.2 8.82 2.2 12 2.2Zm0 1.8c-3.13 0-3.5.01-4.74.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.74s.01 3.5.07 4.74c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.74.07s3.5-.01 4.74-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.74s-.01-3.5-.07-4.74c-.04-.9-.19-1.39-.32-1.71a2.1 2.1 0 0 0-.69-1.06 2.1 2.1 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.74-.07Zm0 3.06a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.75V21H18.6v-5.9c0-1.4-.03-3.2-1.98-3.2-1.98 0-2.28 1.52-2.28 3.1V21H10V9Z",
  facebook:
    "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z",
  x: "M17.53 3h3.02l-6.6 7.55L21.75 21h-5.9l-4.62-6.04L5.95 21H2.92l7.06-8.07L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.6 4.7H5.8l10.67 14.5Z",
  youtube:
    "M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.82.42A2.5 2.5 0 0 0 2.42 7.2C2 8.77 2 12 2 12s0 3.23.42 4.81a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77C22 15.23 22 12 22 12s0-3.23-.42-4.81ZM10 15.5v-7l6 3.5-6 3.5Z",
};

export default function SocialLinks({
  tone = "dark",
  variant = "icon",
  className = "",
  limit,
}: {
  tone?: "dark" | "light";
  variant?: "icon" | "labelled" | "plain";
  className?: string;
  limit?: number;
}) {
  const list = limit ? socials.slice(0, limit) : socials;
  const isLight = tone === "light";

  return (
    <ul className={`flex flex-wrap items-center gap-2 ${className}`}>
      {list.map((social) => (
        <li key={social.brand}>
          <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.name} — ${social.handle} (opens in a new tab)`}
            title={`${social.name} · ${social.handle}`}
            className={
              variant === "labelled"
                ? `group inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[0.8rem] font-medium transition-colors ${
                    isLight
                      ? "border-ink-900/15 text-ink-800 hover:border-gold-500 hover:bg-gold-500/10"
                      : "border-white/15 text-white/75 hover:border-gold-500/50 hover:bg-white/[0.06] hover:text-white"
                  }`
                : variant === "plain"
                  ? `group flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
                      isLight ? "text-ink-600 hover:text-gold-700" : "text-white/55 hover:text-gold-400"
                    }`
                  : `group flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300 ${
                      isLight
                        ? "border-ink-900/15 text-ink-700 hover:-translate-y-0.5 hover:border-gold-500 hover:bg-gold-500 hover:text-ink-950"
                        : "border-white/15 text-white/60 hover:-translate-y-0.5 hover:border-gold-500/60 hover:bg-gold-500 hover:text-ink-950"
                    }`
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className={variant === "labelled" ? "h-4 w-4 shrink-0" : variant === "plain" ? "h-3.5 w-3.5" : "h-[1.05rem] w-[1.05rem]"}
              aria-hidden="true"
            >
              <path d={brandPaths[social.brand]} />
            </svg>
            {variant === "labelled" && <span>{social.name}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}
