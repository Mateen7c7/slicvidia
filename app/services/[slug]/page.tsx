import { services } from "@/app/lib/services-data";
import { notFound } from "next/navigation";
import ServiceContent from "./ServiceContent";
import { Metadata } from "next";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Slicvidia`,
      description: service.shortDesc,
      url: `https://slicvidia.com/services/${service.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Slicvidia`,
      description: service.shortDesc,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceContent service={service} />;
}
