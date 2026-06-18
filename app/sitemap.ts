import { MetadataRoute } from "next";
import { cities, services } from "@/lib/landing-pages";
import { ruCities, ruServices } from "@/lib/landing-pages-ru";

const BASE = "https://like-swim.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];

  for (const city of cities) {
    for (const service of services) {
      entries.push({
        url: `${BASE}/en/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  for (const city of ruCities) {
    for (const service of ruServices) {
      entries.push({
        url: `${BASE}/ru/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  // HE pages share the same city/service slugs as EN
  for (const city of cities) {
    for (const service of services) {
      entries.push({
        url: `${BASE}/he/${city.slug}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
