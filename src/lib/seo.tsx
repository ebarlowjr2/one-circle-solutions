import type { Metadata } from "next";
import { site } from "@/content/site";

// Central helpers for canonical URLs, Open Graph, and JSON-LD.
// `metadataBase` in the root layout resolves relative paths against
// site.url (https://www.onecs.net), so pass paths like "/services".

export function pageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata {
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: absoluteTitle ? title : `${title} | ${site.name}`,
      description,
      url: path,
      siteName: site.name,
      type: "website",
      images: [{ url: "/logo.png", width: 1665, height: 752 }],
    },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.legalName,
  url: site.url,
  logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
  description: site.description,
  email: site.email,
  telephone: site.phone,
  areaServed: { "@type": "Country", name: "United States" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phone,
      areaServed: "US",
      availableLanguage: ["en"],
    },
  ],
  // TODO: confirm the exact LinkedIn (and any other) profile URLs, then add
  // them here so search engines can tie the entity together. Only add
  // profiles One Circle Solutions actually controls.
  sameAs: [] as string[],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
}: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished,
    dateModified,
    mainEntityOfPage: `${site.url}${path}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
  };
}

export function jobPostingSchema({
  title,
  description,
  path,
  datePosted,
  employmentType,
  salary,
  hiringOrganizationName,
  remote = true,
}: {
  title: string;
  description: string;
  path: string;
  datePosted: string;
  employmentType: string;
  salary?: { value: number; unit: string };
  // Defaults to One Circle Solutions; set for partner-posted roles so the
  // hiring organization is represented accurately.
  hiringOrganizationName?: string;
  // Remote roles use TELECOMMUTE; on-site roles get a US jobLocation.
  remote?: boolean;
}) {
  const isOwn = !hiringOrganizationName || hiringOrganizationName === site.name;
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    datePosted,
    employmentType,
    url: `${site.url}${path}`,
    directApply: false,
    hiringOrganization: isOwn
      ? {
          "@type": "Organization",
          name: site.name,
          sameAs: site.url,
          logo: `${site.url}/logo.png`,
        }
      : { "@type": "Organization", name: hiringOrganizationName },
    ...(remote
      ? {
          jobLocationType: "TELECOMMUTE",
          applicantLocationRequirements: { "@type": "Country", name: "USA" },
        }
      : {
          jobLocation: {
            "@type": "Place",
            address: { "@type": "PostalAddress", addressCountry: "US" },
          },
        }),
    ...(salary
      ? {
          baseSalary: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: {
              "@type": "QuantitativeValue",
              value: salary.value,
              unitText: salary.unit,
            },
          },
        }
      : {}),
  };
}
