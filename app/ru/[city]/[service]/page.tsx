import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ruCities,
  ruServices,
  getRuCityBySlug,
  getRuServiceBySlug,
  buildRuMetaTitle,
  buildRuMetaDescription,
} from "@/lib/landing-pages-ru";
import { LandingPageContentRu } from "@/components/landing/LandingPageContentRu";

export const dynamicParams = false;

type Params = Promise<{ city: string; service: string }>;

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of ruCities) {
    for (const service of ruServices) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getRuCityBySlug(citySlug);
  const service = getRuServiceBySlug(serviceSlug);

  if (!city || !service) return {};

  const title = buildRuMetaTitle(city, service);
  const description = buildRuMetaDescription(city, service);

  return {
    title,
    description,
    alternates: {
      canonical: `/ru/${city.slug}/${service.slug}`,
      languages: {
        "en": `/en/${city.slug}/${service.slug}`,
        "ru": `/ru/${city.slug}/${service.slug}`,
        "he": `/he/${city.slug}/${service.slug}`,
        "x-default": `/en/${city.slug}/${service.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "ru_RU",
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getRuCityBySlug(citySlug);
  const service = getRuServiceBySlug(serviceSlug);

  if (!city || !service) notFound();

  return <LandingPageContentRu city={city} service={service} />;
}
