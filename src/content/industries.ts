export type Industry = {
  slug: string;
  name: string;
  headline: string;
  description: string;
  risks: string[];
  complianceConcerns: string[];
  services: { slug: string; reason: string }[];
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    headline: "Cybersecurity for healthcare organizations",
    description:
      "Clinics, practices, and healthcare technology companies hold some of the most targeted data there is — and run it on a mix of EHR platforms, connected devices, and legacy systems that were never designed to face the modern internet. We provide the monitoring, response, and HIPAA-aligned program support that keeps patient care running.",
    risks: [
      "Ransomware that halts scheduling, billing, and clinical systems",
      "Phishing against clinical and administrative staff with EHR access",
      "Legacy systems and connected medical devices that can't run modern endpoint protection",
      "Third-party and billing-vendor access into patient data environments",
    ],
    complianceConcerns: [
      "HIPAA Security Rule safeguards and risk analysis",
      "Breach notification obligations and OCR scrutiny",
      "Business associate agreements and vendor due diligence",
    ],
    services: [
      { slug: "managed-detection-response", reason: "24/7 monitoring across EHR access, endpoints, and identities — because care doesn't stop at 5 p.m." },
      { slug: "compliance", reason: "HIPAA-aligned risk analysis, policies, and evidence support." },
      { slug: "incident-response", reason: "A rehearsed plan for the day ransomware meets patient care." },
    ],
    outcomes: [
      "Around-the-clock coverage without hiring a security team",
      "A defensible, documented HIPAA security program",
      "Faster containment when something does get through",
    ],
  },
  {
    slug: "financial-services",
    name: "Financial Services & Insurance",
    headline: "Cybersecurity for financial services and insurance firms",
    description:
      "Advisory firms, lenders, and insurance organizations face attackers who follow the money and regulators who follow the attackers. We deliver the monitoring, vulnerability management, and audit-ready program support that examiners and carriers increasingly expect to see.",
    risks: [
      "Business email compromise targeting wire transfers and client funds",
      "Credential theft against client portals and remote access",
      "Data theft aimed at financial records and personally identifiable information",
      "Vendor and fintech integrations expanding the attack surface",
    ],
    complianceConcerns: [
      "GLBA Safeguards Rule and FTC expectations",
      "State insurance data security laws and examiner reviews",
      "PCI DSS where card data is handled",
    ],
    services: [
      { slug: "managed-detection-response", reason: "Detection and response tuned for account takeover and fraud-adjacent activity." },
      { slug: "vulnerability-management", reason: "Continuous scanning with remediation tracking examiners can audit." },
      { slug: "vciso", reason: "A named security leader for examiners, carriers, and your board." },
    ],
    outcomes: [
      "Security posture you can present to examiners and insurers with confidence",
      "Reduced exposure to wire fraud and account takeover",
      "Clear reporting for boards and audit committees",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    headline: "Cybersecurity for manufacturers",
    description:
      "Manufacturers are now a top ransomware target precisely because downtime is so expensive — and because plant-floor systems, ERP, and supply-chain connections create an attack surface most IT tools never see. We help manufacturers get visibility across IT and OT boundaries and keep production running.",
    risks: [
      "Ransomware engineered to halt production lines and logistics",
      "Flat networks where an office laptop can reach plant-floor systems",
      "Aging industrial systems that can't be patched on a normal cycle",
      "Supplier and customer EDI connections as an entry path",
    ],
    complianceConcerns: [
      "CMMC and DFARS requirements for defense supply-chain work",
      "Customer security requirements flowing down from OEMs",
      "Cyber insurance requirements tied to segmentation and monitoring",
    ],
    services: [
      { slug: "managed-detection-response", reason: "24/7 detection across the IT estate that fronts your production systems." },
      { slug: "vulnerability-management", reason: "Risk-based prioritization that respects maintenance windows and uptime." },
      { slug: "incident-response", reason: "Response planning that accounts for production impact, not just data." },
    ],
    outcomes: [
      "Visibility into the systems that keep production moving",
      "A pragmatic hardening path that doesn't demand impossible downtime",
      "Readiness for OEM and defense supply-chain security requirements",
    ],
  },
  {
    slug: "nonprofits",
    name: "Nonprofits",
    headline: "Cybersecurity for nonprofit organizations",
    description:
      "Nonprofits hold donor data, financial records, and sometimes sensitive client information — with lean teams and budgets that attackers know all about. We right-size enterprise-grade security operations so mission-driven organizations get real coverage without enterprise overhead.",
    risks: [
      "Phishing and gift-card fraud targeting staff and volunteers",
      "Donor and constituent data exposure from misconfigured cloud tools",
      "Account takeover of email and fundraising platforms",
      "Small IT teams stretched across every system with no security bandwidth",
    ],
    complianceConcerns: [
      "Donor privacy expectations and state data-breach laws",
      "Grant and funder security requirements",
      "PCI DSS obligations from donation processing",
    ],
    services: [
      { slug: "managed-detection-response", reason: "Someone watching around the clock, so a two-person IT team doesn't have to." },
      { slug: "cloud-security", reason: "Hardening for the Microsoft 365 / Google Workspace stack most nonprofits run on." },
      { slug: "vciso", reason: "Security leadership scaled to nonprofit budgets and board needs." },
    ],
    outcomes: [
      "Real 24/7 coverage at a nonprofit-realistic cost",
      "Donor data protected and grant requirements met",
      "A security story you can share with funders and your board",
    ],
  },
  {
    slug: "government-contractors",
    name: "Government Contractors",
    headline: "Cybersecurity for government contractors",
    description:
      "If you sell into federal or defense supply chains, security requirements are now contract requirements. We help contractors implement and evidence the controls behind CMMC and NIST SP 800-171 — and run the monitoring those frameworks assume you have.",
    risks: [
      "Targeted intrusion aimed at controlled unclassified information (CUI)",
      "Supply-chain attacks moving through smaller subcontractors",
      "Losing contract eligibility over unmet security requirements",
      "Self-attestation gaps surfacing during assessment",
    ],
    complianceConcerns: [
      "CMMC practice implementation and assessment readiness",
      "NIST SP 800-171 alignment and POA&M management",
      "DFARS clauses and incident reporting obligations",
    ],
    services: [
      { slug: "compliance", reason: "CMMC and NIST 800-171 gap assessment, implementation, and evidence support." },
      { slug: "managed-siem", reason: "The audit-ready logging and monitoring the frameworks assume you already run." },
      { slug: "managed-detection-response", reason: "Detection and response over the environments where CUI lives." },
    ],
    outcomes: [
      "A defensible path to CMMC assessment readiness",
      "Monitoring and logging that satisfy contract requirements",
      "Contract eligibility protected instead of at risk",
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
