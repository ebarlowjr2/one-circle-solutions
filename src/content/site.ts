export const site = {
  name: "One Circle Solutions",
  legalName: "One Circle Solutions LLC",
  tagline: "Managed security, run like it matters.",
  description:
    "One Circle Solutions is a managed security services provider (MSSP) delivering 24/7 detection and response, managed SIEM, vulnerability management, cloud security, and compliance advisory for mid-market and enterprise teams.",
  url: "https://onecs.net",
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
  { label: "About", href: "/about" },
  { label: "Trust & Compliance", href: "/trust" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  services: [
    { label: "Managed Detection & Response", href: "/services/managed-detection-response" },
    { label: "Managed SIEM", href: "/services/managed-siem" },
    { label: "Vulnerability Management", href: "/services/vulnerability-management" },
    { label: "Cloud Security", href: "/services/cloud-security" },
    { label: "Incident Response & Readiness", href: "/services/incident-response" },
    { label: "vCISO & Compliance", href: "/services/vciso-compliance" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Leadership", href: "/about/leadership" },
    { label: "Certifications", href: "/about/certifications" },
    { label: "Trust & Compliance", href: "/trust" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
