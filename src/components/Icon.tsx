type IconProps = {
  name: string;
  className?: string;
  strokeWidth?: number;
};

const paths: Record<string, string> = {
  arrow: "M5 12h14M13 6l6 6-6 6",
  arrowUpRight: "M7 17 17 7M8 7h9v9",
  chevronDown: "m6 9 6 6 6-6",
  chevronRight: "m9 6 6 6-6 6",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  phone:
    "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z",
  mail: "M4 4h16v16H4zM4 6l8 6 8-6",
  pin: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  clock: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",
  check: "m4 12 5 5L20 6",
  book: "M4 4h7a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H4zM20 4h-3a3 3 0 0 0-3 3v13a2.5 2.5 0 0 1 2.5-2.5H20z",
  lab: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3",
  home: "M4 11l8-7 8 7v9H4z M9 20v-6h6v6",
  ball: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.5 9.5c5 1 12 1 17 0M8 4.5c3 3.5 3 12 0 15M16 4.5c-3 3.5-3 12 0 15",
  bus: "M5 4h14v11H5zM5 9h14M8 19v-4M16 19v-4M8 12h.01M16 12h.01",
  cup: "M5 8h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4zM16 9h2a2 2 0 1 1 0 4h-2M4 21h14",
  users: "M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 10a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM17 4a3.5 3.5 0 0 1 0 7M21 20v-2a4 4 0 0 0-3-3.87",
  award: "M12 3a6 6 0 1 0 0 12 6 6 0 0 0 0-12zM8.2 14 7 22l5-3 5 3-1.2-8",
  briefcase: "M4 8h16v12H4zM9 8V5h6v3M4 13h16",
  cap: "M2 8l10-4 10 4-10 4zM6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5",
  globe: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z M9 12l2 2 4-4",
  sparkle: "M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8",
  download: "M12 3v12M7 11l5 5 5-5M4 21h16",
  calendar: "M4 5h16v16H4zM4 10h16M8 3v4M16 3v4",
  whatsapp:
    "M20.5 11.6a8.4 8.4 0 0 1-12.4 7.4L3.5 20.5l1.5-4.5A8.4 8.4 0 1 1 20.5 11.6zM8.5 8.8c0 3 2.5 5.5 5.5 5.6.6 0 1.4-.6 1.4-1.2s-1-1-1.4-1.2c-.4-.2-.8.6-1.2.4-.8-.4-1.6-1.2-2-2-.2-.4.6-.8.4-1.2-.2-.4-.6-1.4-1.2-1.4s-1.5.4-1.5 1z",
  star: "M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2-5.5-2.9-5.5 2.9 1-6.2L3 9.6l6.2-.9z",
  quote: "M9 6H5v6h4c0 3-1 4-3 5M19 6h-4v6h4c0 3-1 4-3 5",
};

export default function Icon({ name, className = "h-5 w-5", strokeWidth = 1.6 }: IconProps) {
  const d = paths[name] ?? paths.arrow;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {d.split(" M").map((segment, index) => (
        <path key={index} d={index === 0 ? segment : `M${segment}`} />
      ))}
    </svg>
  );
}
