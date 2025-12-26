import React from "react";

export default function JsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Slicvidia",
    image: "https://slicvidia.com/slicvidialogo.jpeg",
    "@id": "https://slicvidia.com",
    url: "https://slicvidia.com",
    telephone: "+917207831604",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "India",
      addressRegion: "",
      postalCode: "",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 20.5937,
      longitude: 78.9629,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: ["https://www.linkedin.com/company/slicvidia/"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
