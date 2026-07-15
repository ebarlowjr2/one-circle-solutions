// Team certifications, grouped by discipline.
// NOTE: verify this list reflects credentials the team actually holds
// before launch — trim or extend in place; the page renders whatever
// is here.

export type CertGroup = {
  category: string;
  description: string;
  certs: { abbr: string; name: string; issuer: string }[];
};

export const certificationGroups: CertGroup[] = [
  {
    category: "Security leadership & audit",
    description:
      "The credentials behind our program leadership, risk management, and audit work.",
    certs: [
      { abbr: "CISSP", name: "Certified Information Systems Security Professional", issuer: "ISC2" },
      { abbr: "CISM", name: "Certified Information Security Manager", issuer: "ISACA" },
      { abbr: "CISA", name: "Certified Information Systems Auditor", issuer: "ISACA" },
      { abbr: "ISO 27001 LA", name: "ISO/IEC 27001 Lead Auditor", issuer: "PECB" },
    ],
  },
  {
    category: "Security operations & incident response",
    description:
      "What the analysts watching your environment train and test against.",
    certs: [
      { abbr: "GCIH", name: "GIAC Certified Incident Handler", issuer: "GIAC" },
      { abbr: "GCIA", name: "GIAC Certified Intrusion Analyst", issuer: "GIAC" },
      { abbr: "CySA+", name: "CompTIA Cybersecurity Analyst", issuer: "CompTIA" },
      { abbr: "Security+", name: "CompTIA Security+", issuer: "CompTIA" },
    ],
  },
  {
    category: "Offensive security",
    description:
      "Attacker tradecraft that sharpens our detections and validates our clients' defenses.",
    certs: [
      { abbr: "OSCP", name: "Offensive Security Certified Professional", issuer: "OffSec" },
      { abbr: "CEH", name: "Certified Ethical Hacker", issuer: "EC-Council" },
      { abbr: "GPEN", name: "GIAC Penetration Tester", issuer: "GIAC" },
    ],
  },
  {
    category: "Cloud security",
    description:
      "Platform-specific depth across the clouds our clients actually run on.",
    certs: [
      { abbr: "AWS SCS", name: "AWS Certified Security – Specialty", issuer: "Amazon Web Services" },
      { abbr: "AZ-500", name: "Azure Security Engineer Associate", issuer: "Microsoft" },
      { abbr: "CCSP", name: "Certified Cloud Security Professional", issuer: "ISC2" },
    ],
  },
  {
    category: "Infrastructure & service management",
    description:
      "The networking and operational discipline that keeps managed services predictable.",
    certs: [
      { abbr: "CCNA", name: "Cisco Certified Network Associate", issuer: "Cisco" },
      { abbr: "Network+", name: "CompTIA Network+", issuer: "CompTIA" },
      { abbr: "ITIL 4", name: "ITIL 4 Foundation", issuer: "PeopleCert" },
      { abbr: "PMP", name: "Project Management Professional", issuer: "PMI" },
    ],
  },
];
