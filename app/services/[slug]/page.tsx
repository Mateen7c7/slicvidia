import { services } from "@/app/lib/services-data";
import { notFound } from "next/navigation";
import ServiceContent from "./ServiceContent";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
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
