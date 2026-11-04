import { MetadataRoute } from "next";
import { cities, services } from "@/lib/landing-pages";
import { ruCities, ruServices } from "@/lib/landing-pages-ru";
import { blogPosts } from "@/lib/blog-posts";
import { blogPostsEn } from "@/lib/blog-posts-en";

const BASE = "https://like-swim.com";

// Static anchor date for pages without a real tracked modification date.
// Bump this by hand when you make a substantive content change across
// the site — don't switch it back to `new Date()`, which would mark
// every page "changed" on every single deploy and erode Google's trust
// in this field.
const SITE_UPDATED = new Date("2026-11-04");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    // ── Homepages ────────────────────────────────────────────────────
    {
      url: BASE,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE}/ru`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE}/he`,
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    // ── Blog ─────────────────────────────────────────────────────────
    {
      url: `${BASE}/ru/blog`,
      lastModified: SITE_UPDATED,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts.map((post) => ({
      url: `${BASE}/ru/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    // ── EN Blog ───────────────────────────────────────────────────────
    ...blogPostsEn.map((post) => ({
      url: `${BASE}/en/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  // ── EN landing pages ──────────────────────────────────────────────
  for (const city of cities) {
    for (const service of services) {
      entries.push({
        url: `${BASE}/en/${city.slug}/${service.slug}`,
        lastModified: SITE_UPDATED,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // ── RU landing pages ──────────────────────────────────────────────
  for (const city of ruCities) {
    for (const service of ruServices) {
      entries.push({
        url: `${BASE}/ru/${city.slug}/${service.slug}`,
        lastModified: SITE_UPDATED,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // ── HE landing pages ──────────────────────────────────────────────
  for (const city of cities) {
    for (const service of services) {
      entries.push({
        url: `${BASE}/he/${city.slug}/${service.slug}`,
        lastModified: SITE_UPDATED,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
