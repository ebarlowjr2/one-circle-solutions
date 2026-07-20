export const site = {
  name: "One Circle Solutions",
  legalName: "One Circle Solutions LLC",
  tagline: "Managed security, run like it matters.",
  description:
    "One Circle Solutions delivers managed security services, 24/7 monitoring and response, vulnerability management, cloud security, incident response, and compliance support for growing teams.",
  // Production base URL — the single source of truth for canonical URLs,
  // sitemap, robots, Open Graph, and JSON-LD. Never point this at a
  // preview deployment.
  url: "https://www.onecs.net",
  email: "info@OneCS.net",
  phone: "1-877-539-7380",
  address: "United States",
  cta: {
    primary: { label: "Book a security consultation", href: "/contact" },
    secondary: { label: "Explore services", href: "/services" },
  },
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Trust & Compliance", href: "/trust" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  services: [
    { label: "Managed Detection & Response", href: "/services/managed-detection-response" },
    { label: "Managed SIEM & Security Monitoring", href: "/services/managed-siem" },
    { label: "Vulnerability Management", href: "/services/vulnerability-management" },
    { label: "Cloud Security", href: "/services/cloud-security" },
    { label: "Incident Response & Readiness", href: "/services/incident-response" },
    { label: "vCISO Services", href: "/services/vciso" },
    { label: "Compliance & Audit Readiness", href: "/services/compliance" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Leadership & Team", href: "/about/leadership" },
    { label: "Certifications", href: "/about/certifications" },
    { label: "Trust & Compliance", href: "/trust" },
    { label: "Industries", href: "/industries" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
  ],
} as const;
