import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/content";

// ─────────────────────────────────────────────────────────────────
//  Update BASE_URL to your custom domain once you have one.
//  Example: "https://ammarayaz.dev"
// ─────────────────────────────────────────────────────────────────
const BASE_URL = "https://ammar-portfolio-rust-five.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Core pages ────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },

    // ── Project detail pages ──────────────────────────────────
    ...projects.map((p) => ({
      url: `${BASE_URL}/work/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),

    // ── Service / solution detail pages ───────────────────────
    ...services.map((s) => ({
      url: `${BASE_URL}/solutions/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
