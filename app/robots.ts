import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/privacy", "/terms", "/refund"],
    },
    sitemap: "https://slicvidia.com/sitemap.xml",
  };
}
