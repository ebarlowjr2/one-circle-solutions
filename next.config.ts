import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Permanent 301 redirects preserving search intent from the old
    // Squarespace site (onecs.net) plus retired internal paths.
    // statusCode 301 is used explicitly (Next's `permanent: true` emits 308).
    return [
      // TODO: point at a dedicated /services/managed-security-services page
      // if one is ever split out from the services index.
      { source: "/mssp", destination: "/services", statusCode: 301 },
      {
        source: "/managed-detection-and-response",
        destination: "/services/managed-detection-response",
        statusCode: 301,
      },
      { source: "/vciso", destination: "/services/vciso", statusCode: 301 },
      {
        source: "/vulnerability-management-solutions-1",
        destination: "/services/vulnerability-management",
        statusCode: 301,
      },
      {
        source: "/vulnerability-management-solutions",
        destination: "/services/vulnerability-management",
        statusCode: 301,
      },
      {
        source: "/compliance-as-a-service",
        destination: "/services/compliance",
        statusCode: 301,
      },
      {
        source: "/cybersecurity-automation-solutions",
        destination: "/services",
        statusCode: 301,
      },
      {
        // Legacy managed-cloud page; we position cloud work as security-led.
        source: "/managed-cloud-services",
        destination: "/services/cloud-security",
        statusCode: 301,
      },
      {
        // ISSM/ISSO work maps closest to our vCISO / security-leadership scope.
        source: "/issm-isso-services",
        destination: "/services/vciso",
        statusCode: 301,
      },
      { source: "/blog", destination: "/resources/blog", statusCode: 301 },
      { source: "/contact-us", destination: "/contact", statusCode: 301 },
      {
        source: "/privacy-statement",
        destination: "/legal/privacy",
        statusCode: 301,
      },
      {
        source: "/terms-conditions",
        destination: "/legal/terms",
        statusCode: 301,
      },
      {
        source: "/career-opportunities",
        destination: "/careers",
        statusCode: 301,
      },
      // TODO: point at /services/managed-it if Managed IT is ever added to
      // the service catalog; today the services index is the best match.
      {
        source: "/manageditservices",
        destination: "/services",
        statusCode: 301,
      },
      {
        source: "/healthcare",
        destination: "/industries/healthcare",
        statusCode: 301,
      },
      {
        source: "/financial-and-insurance",
        destination: "/industries/financial-services",
        statusCode: 301,
      },
      {
        source: "/manufacturing",
        destination: "/industries/manufacturing",
        statusCode: 301,
      },
      {
        source: "/nonprofits",
        destination: "/industries/nonprofits",
        statusCode: 301,
      },
      // Retired internal route: the combined service was split in two.
      {
        source: "/services/vciso-compliance",
        destination: "/services/vciso",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
