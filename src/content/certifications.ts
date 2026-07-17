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
      { abbr: "CRISC", name: "Certified in Risk and Information Systems Control", issuer: "ISACA" },
      { abbr: "ISO 27001 LA", name: "ISO/IEC 27001 Lead Auditor", issuer: "PECB" },
      { abbr: "PCI ISA", name: "PCI Internal Security Assessor", issuer: "PCI SSC" },
      { abbr: "SecurityX", name: "CompTIA SecurityX (formerly CASP+)", issuer: "CompTIA" },
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
      { abbr: "CHFI", name: "Computer Hacking Forensic Investigator", issuer: "EC-Council" },
      { abbr: "SSCP", name: "Systems Security Certified Practitioner", issuer: "ISC2" },
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
      { abbr: "PenTest+", name: "CompTIA PenTest+", issuer: "CompTIA" },
    ],
  },
  {
    category: "Cloud security & platforms",
    description:
      "Platform-specific depth across AWS, Microsoft Azure, and Oracle Cloud — the environments our clients actually run on.",
    certs: [
      { abbr: "AWS SCS", name: "AWS Certified Security – Specialty", issuer: "Amazon Web Services" },
      { abbr: "AWS SAA", name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services" },
      { abbr: "AZ-500", name: "Azure Security Engineer Associate", issuer: "Microsoft" },
      { abbr: "SC-200", name: "Security Operations Analyst Associate", issuer: "Microsoft" },
      { abbr: "AZ-104", name: "Azure Administrator Associate", issuer: "Microsoft" },
      { abbr: "OCI Security", name: "Oracle Cloud Infrastructure Security Professional", issuer: "Oracle" },
      { abbr: "OCI Architect", name: "Oracle Cloud Infrastructure Architect Associate", issuer: "Oracle" },
      { abbr: "CCSP", name: "Certified Cloud Security Professional", issuer: "ISC2" },
    ],
  },
  {
    category: "Infrastructure & networking",
    description:
      "The systems and network depth that managed security is built on.",
    certs: [
      { abbr: "CCNP Security", name: "Cisco Certified Network Professional – Security", issuer: "Cisco" },
      { abbr: "CCNA", name: "Cisco Certified Network Associate", issuer: "Cisco" },
      { abbr: "VCP", name: "VMware Certified Professional", issuer: "VMware (Broadcom)" },
      { abbr: "NSE 4", name: "Fortinet Network Security Professional", issuer: "Fortinet" },
      { abbr: "Network+", name: "CompTIA Network+", issuer: "CompTIA" },
      { abbr: "A+", name: "CompTIA A+", issuer: "CompTIA" },
    ],
  },
  {
    category: "Service management & delivery",
    description:
      "The operational discipline that keeps managed services predictable.",
    certs: [
      { abbr: "ITIL 4", name: "ITIL 4 Foundation", issuer: "PeopleCert" },
      { abbr: "PMP", name: "Project Management Professional", issuer: "PMI" },
      { abbr: "MS-102", name: "Microsoft 365 Administrator Expert", issuer: "Microsoft" },
    ],
  },
];

export const certificationStats = {
  certifications: certificationGroups.reduce((n, g) => n + g.certs.length, 0),
  disciplines: certificationGroups.length,
  issuers: new Set(
    certificationGroups.flatMap((g) => g.certs.map((c) => c.issuer)),
  ).size,
};
