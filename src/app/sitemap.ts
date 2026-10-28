import type { MetadataRoute } from "next";
import { programmes } from "@/data/programmes";
import { events } from "@/data/events";

const base = "https://gitmgurgaon.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/leadership", "/programmes", "/admissions", "/placements", "/campus-life", "/events", "/contact"];
  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${base}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...programmes.map((programme) => ({
      url: `${base}/programmes/${programme.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...events.map((event) => ({
      url: `${base}/events/${event.slug}`,
      lastModified: new Date(event.date),
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
