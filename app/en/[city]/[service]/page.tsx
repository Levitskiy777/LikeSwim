import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  cities,
  services,
  getCityBySlug,
  getServiceBySlug,
  buildMetaTitle,
  buildMetaDescription,
} from "@/lib/landing-pages";
import { LandingPageContent } from "@/components/landing/LandingPageContent";

// Only serve the 120 pre-defined city × service combinations
export const dynamicParams = false;

type Params = Promise<{ city: string; service: string }>;

export async function generateStaticParams() {
  const params: { city: string; service: string }[] = [];
  for (const city of cities) {
    for (const service of services) {
      params.push({ city: city.slug, service: service.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) return {};

  const title = buildMetaTitle(city, service);
  const description = buildMetaDescription(city, service);

  return {
    title,
    description,
    alternates: {
      canonical: `/en/${city.slug}/${service.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
    },
  };
}

export default async function Page({ params }: { params: Params }) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) notFound();

  return <LandingPageContent city={city} service={service} />;
}
