import { site, professional, contact, faq, whatsappUrl } from "../content/site";

export function buildStructuredData() {
  const psychologist = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: professional.fullName,
    image: new URL("/og-image.jpg", site.url).toString(),
    description: site.meta.description,
    telephone: contact.whatsappNumber,
    email: contact.email,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: contact.address.state,
      postalCode: contact.address.zip,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contact.address.lat,
      longitude: contact.address.lng,
    },
    areaServed: [
      { "@type": "City", name: `${professional.city}, ${professional.state}` },
      { "@type": "AdministrativeArea", name: professional.region },
      { "@type": "Country", name: "Brasil" },
    ],
    medicalSpecialty: "Psychiatric",
    sameAs: [contact.instagram.url].filter((url) => url && url !== "[PREENCHER]"),
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: professional.fullName,
    jobTitle: professional.role,
    url: site.url,
    sameAs: [contact.instagram.url].filter((url) => url && url !== "[PREENCHER]"),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return [psychologist, person, faqPage];
}

export { whatsappUrl };
