import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  heCities,
  heServices,
  getHeCityBySlug,
  getHeServiceBySlug,
  buildHeMetaTitle,
  buildHeMetaDescription,
} from "@/lib/landing-pages-he";
import { LandingPageContentHe } from "@/components/landing/LandingPageContentHe";

export const dynamicParams = false;

type Params = Promise<{ city: string; service: string }>;

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of heCities) {
    for (const service of heServices) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getHeCityBySlug(citySlug);
  const service = getHeServiceBySlug(serviceSlug);

  if (!city || !service) return {};

  const title = buildHeMetaTitle(city, service);
  const description = buildHeMetaDescription(city, service);

  return {
    title,
    description,
    alternates: {
      canonical: `/he/${city.slug}/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "he_IL",
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getHeCityBySlug(citySlug);
  const service = getHeServiceBySlug(serviceSlug);

  if (!city || !service) notFound();

  return <LandingPageContentHe city={city} service={service} />;
}
