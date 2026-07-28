// Long-form "pillar" guides — checklist/reference pages with a sticky
// table of contents and a downloadable PDF. Distinct from the short
// articles in articles.ts. Add a new entry here plus a route folder under
// app/resources/<slug> that renders <LongFormGuide>.

export type GuideSection = {
  id: string; // anchor + ToC target
  heading: string;
  intro?: string;
  paragraphs?: string[];
  items?: string[]; // rendered as a checklist
};

export type LongGuide = {
  slug: string;
  title: string; // H1
  metaTitle: string;
  description: string;
  category: string;
  datePublished: string;
  dateModified: string;
  readTime: string;
  pdf: string; // filename in /public/downloads
  lead: string[]; // intro paragraphs above the first section
  sections: GuideSection[];
  relatedServices: string[];
  relatedIndustry?: { slug: string; label: string };
};

export const cmmcChecklist: LongGuide = {
  slug: "cmmc-checklist",
  title: "CMMC Compliance Checklist",
  metaTitle: "CMMC Compliance Checklist (2.0) — Readiness Guide",
  description:
    "A practical CMMC 2.0 readiness checklist for defense contractors — the levels, scoping steps, and a family-by-family walkthrough of the NIST SP 800-171 controls behind Level 2. Read online or download the PDF.",
  category: "Checklist",
  datePublished: "2026-07-20",
  dateModified: "2026-07-20",
  readTime: "18 min read",
  pdf: "OneCircle-CMMC-Readiness-Checklist.pdf",
  lead: [
    "If your company handles Federal Contract Information (FCI) or Controlled Unclassified Information (CUI) for the Department of Defense, the Cybersecurity Maturity Model Certification (CMMC) program is becoming a condition of doing business — not a nice-to-have. This checklist walks through what CMMC 2.0 requires, how to scope your environment, and the controls behind each level, so you can find your gaps before an assessor does.",
    "Use it as a self-assessment starting point. It is a readiness aid, not a substitute for the official CMMC and NIST SP 800-171 documentation or a certified assessment. Work from the authoritative source documents when you make formal attestations.",
  ],
  relatedServices: ["compliance", "managed-siem", "managed-detection-response"],
  relatedIndustry: {
    slug: "government-contractors",
    label: "Government Contractors",
  },
  sections: [
    {
      id: "what-is-cmmc",
      heading: "What CMMC is and why it exists",
      paragraphs: [
        "CMMC is the Department of Defense's framework for verifying that companies in the Defense Industrial Base (DIB) protect sensitive government information. It exists because self-attestation alone proved unreliable: contractors certified compliance they hadn't actually achieved, and adversaries exploited the gap by targeting smaller, less-defended suppliers.",
        "CMMC 2.0 ties assessment rigor to the sensitivity of the information you handle. Lower-risk work allows self-assessment; work involving CUI critical to national security requires an independent, third-party assessment. The goal is a verifiable, consistent baseline across every tier of the supply chain.",
      ],
    },
    {
      id: "who-needs-it",
      heading: "Who needs to comply",
      intro:
        "If any of the following is true, CMMC almost certainly applies to you:",
      items: [
        "You are a prime contractor or subcontractor anywhere in the DoD supply chain.",
        "Your contracts include DFARS 252.204-7012 (safeguarding covered defense information and cyber incident reporting).",
        "You receive, store, process, or transmit Federal Contract Information (FCI) — information not intended for public release, provided under a contract.",
        "You handle Controlled Unclassified Information (CUI) — the higher-sensitivity category that triggers Level 2 or above.",
        "You have submitted, or are required to submit, a NIST SP 800-171 self-assessment score to the Supplier Performance Risk System (SPRS) under DFARS 252.204-7019 and 7020.",
      ],
    },
    {
      id: "levels",
      heading: "The three CMMC levels",
      intro:
        "CMMC 2.0 has three levels. Determine which one your contracts require before assessing anything — the level defines the control set and who assesses you.",
      items: [
        "Level 1 (Foundational): 17 practices protecting FCI, based on the 15 basic safeguarding requirements in FAR 52.204-21. Annual self-assessment and annual affirmation in SPRS.",
        "Level 2 (Advanced): 110 practices aligned with NIST SP 800-171 Rev 2, protecting CUI. Either a self-assessment or a triennial third-party assessment by a Certified Third-Party Assessment Organization (C3PAO), depending on the contract.",
        "Level 3 (Expert): the Level 2 controls plus a subset of NIST SP 800-172 enhancements, assessed by the government (DIBCAC). Reserved for the highest-priority programs.",
        "Not sure which applies? Most DIB companies handling CUI are targeting Level 2. Confirm with your contracting officer rather than guessing.",
      ],
    },
    {
      id: "before-you-start",
      heading: "Before you start: scope your environment",
      intro:
        "Scoping is where most CMMC efforts succeed or fail. Narrow, well-defined scope reduces cost and risk; a vague boundary drags your whole company into the assessment.",
      items: [
        "Identify exactly where FCI and CUI are received, stored, processed, and transmitted — including email, file shares, endpoints, cloud tenants, and backups.",
        "Define the assessment boundary and separate in-scope systems from out-of-scope ones, using network segmentation where practical.",
        "Categorize assets: CUI assets, Security Protection Assets, Contractor Risk Managed Assets, and Out-of-Scope Assets.",
        "Write your System Security Plan (SSP) — a required artifact describing your boundary, systems, and how each control is met.",
        "Stand up a Plan of Action and Milestones (POA&M) to track open gaps with owners and dates.",
        "Confirm your current NIST SP 800-171 score in SPRS and how it was calculated (start at 110, subtract weighted points per unmet control).",
      ],
    },
    {
      id: "access-control",
      heading: "Access Control (AC)",
      intro:
        "Limit system access to authorized users, processes, and devices — and to the functions they're permitted to perform.",
      items: [
        "Are accounts unique per user, with role-based permissions following least privilege?",
        "Is privileged (admin) access separated from day-to-day accounts and tightly limited?",
        "Do you control and log remote access, and route it through managed, encrypted channels?",
        "Is CUI flow controlled between systems, and is access to it restricted on a need-to-know basis?",
        "Are session locks, automatic logoff, and control of mobile/portable devices enforced?",
      ],
    },
    {
      id: "awareness-training",
      heading: "Awareness and Training (AT)",
      intro:
        "Make sure the people using your systems understand the risks and their responsibilities.",
      items: [
        "Do all users receive security awareness training aligned to their roles?",
        "Are staff trained to recognize and report phishing, social engineering, and insider-threat indicators?",
        "Do privileged users and security staff get role-specific training beyond the baseline?",
        "Is training completion tracked and refreshed on a defined schedule?",
      ],
    },
    {
      id: "audit-accountability",
      heading: "Audit and Accountability (AU)",
      intro:
        "Create and retain the logs you need to detect, investigate, and prove what happened.",
      items: [
        "Are audit logs generated across systems that handle CUI, capturing the events you'd need in an investigation?",
        "Can every logged action be traced to a specific user (individual accountability)?",
        "Are logs protected from unauthorized access, modification, and deletion?",
        "Is time synchronized across systems so events can be correlated?",
        "Are logs reviewed regularly, with alerting on the events that matter, and retained per requirements?",
      ],
    },
    {
      id: "configuration-management",
      heading: "Configuration Management (CM)",
      intro:
        "Establish and maintain secure baselines for your systems, and control changes to them.",
      items: [
        "Do you maintain documented, secure baseline configurations for hardware and software?",
        "Are changes reviewed, approved, and tracked through a change-control process?",
        "Do you enforce least-functionality — disabling unnecessary ports, protocols, services, and software?",
        "Do you maintain an inventory of authorized software and restrict or block unauthorized applications?",
        "Are security-relevant settings enforced and monitored for drift?",
      ],
    },
    {
      id: "identification-authentication",
      heading: "Identification and Authentication (IA)",
      intro:
        "Verify the identity of users and devices before granting access.",
      items: [
        "Is multi-factor authentication enforced for privileged accounts and for network/remote access?",
        "Are password/authenticator policies (complexity, reuse, storage) enforced and cryptographically protected?",
        "Are shared or generic accounts eliminated, or tightly controlled where unavoidable?",
        "Are devices identified and authenticated before connecting to in-scope systems?",
        "Are temporary and default credentials changed before systems go into use?",
      ],
    },
    {
      id: "incident-response",
      heading: "Incident Response (IR)",
      intro:
        "Be ready to detect, respond to, and report incidents — including the DoD's 72-hour reporting obligation.",
      items: [
        "Do you have a documented incident response plan with defined roles and escalation paths?",
        "Can you report cyber incidents to DoD within 72 hours as required by DFARS 252.204-7012?",
        "Do you test the plan (for example, tabletop exercises) and update it from lessons learned?",
        "Are detection and monitoring in place to identify incidents in the first place?",
        "Is there a process to preserve evidence and support forensic analysis after an incident?",
      ],
    },
    {
      id: "maintenance",
      heading: "Maintenance (MA)",
      intro:
        "Perform system maintenance in a controlled way that doesn't create new exposure.",
      items: [
        "Is maintenance — including remote maintenance — scheduled, controlled, and logged?",
        "Are maintenance tools and media checked for malicious code before use?",
        "Is media sanitized of CUI before equipment leaves your control for repair or disposal?",
        "Are maintenance personnel supervised, and their access appropriately restricted?",
      ],
    },
    {
      id: "media-protection",
      heading: "Media Protection (MP)",
      intro:
        "Protect CUI on digital and physical media, in use, in storage, and in disposal.",
      items: [
        "Is media containing CUI marked, and access to it limited to authorized users?",
        "Is CUI encrypted on portable devices and removable media?",
        "Is media sanitized or destroyed before disposal or reuse, using approved methods?",
        "Is the use of removable media controlled, and prohibited where it isn't needed?",
        "Is CUI protected during transport outside controlled areas?",
      ],
    },
    {
      id: "personnel-security",
      heading: "Personnel Security (PS)",
      intro:
        "Manage the risk that comes with the people who have access to your systems.",
      items: [
        "Are individuals screened before being granted access to systems containing CUI?",
        "Is access promptly revoked on termination or role change (same-day for departures)?",
        "Are CUI systems and information protected during personnel transfers and reassignments?",
      ],
    },
    {
      id: "physical-protection",
      heading: "Physical Protection (PE)",
      intro:
        "Control physical access to the systems, equipment, and environments that hold CUI.",
      items: [
        "Is physical access to facilities and equipment limited to authorized individuals?",
        "Are visitors escorted, logged, and their activity monitored?",
        "Are physical access devices (keys, badges) managed and audited?",
        "Is CUI protected at alternate and remote work sites, including home offices?",
      ],
    },
    {
      id: "risk-assessment",
      heading: "Risk Assessment (RA)",
      intro:
        "Understand your risks and vulnerabilities so you can prioritize the right fixes.",
      items: [
        "Do you assess risk to operations and assets from systems that handle CUI, on a defined cadence?",
        "Do you scan for vulnerabilities regularly and when new ones are announced?",
        "Are identified vulnerabilities remediated based on risk, and tracked to closure?",
        "Do risk assessments inform your POA&M and security roadmap?",
      ],
    },
    {
      id: "security-assessment",
      heading: "Security Assessment (CA)",
      intro:
        "Verify that your controls actually work, and manage the gaps that remain.",
      items: [
        "Do you periodically assess your security controls to confirm they're effective?",
        "Is your System Security Plan current and reflective of the real environment?",
        "Is your POA&M actively managed, with realistic milestones and owners?",
        "Do you monitor controls on an ongoing basis rather than only at assessment time?",
      ],
    },
    {
      id: "system-communications-protection",
      heading: "System and Communications Protection (SC)",
      intro:
        "Protect information in transit and at the boundaries of your systems.",
      items: [
        "Is CUI encrypted in transit using FIPS-validated cryptography?",
        "Are network boundaries monitored and controlled, with a deny-by-default posture at perimeters?",
        "Is your network architected to separate CUI systems from general-purpose and public-facing ones?",
        "Are cryptographic keys managed securely, and mobile code and collaboration tools controlled?",
        "Is CUI encrypted at rest where required?",
      ],
    },
    {
      id: "system-information-integrity",
      heading: "System and Information Integrity (SI)",
      intro:
        "Find and fix flaws, and detect malicious activity, in a timely way.",
      items: [
        "Are flaws and vulnerabilities identified and patched within defined timeframes?",
        "Is malicious-code protection deployed, updated, and monitored across endpoints?",
        "Do you monitor systems and network traffic for attacks and indicators of compromise?",
        "Do you act on security alerts and advisories relevant to your environment?",
        "Is 24/7 monitoring in place, or is there a gap outside business hours?",
      ],
    },
    {
      id: "common-gaps",
      heading: "Common gaps we see",
      intro:
        "In first-time CMMC readiness reviews, the same shortfalls come up again and again:",
      items: [
        "No clear CUI boundary — the whole company is treated as in-scope, ballooning cost and effort.",
        "MFA deployed for email but not for all remote and privileged access.",
        "Logging enabled but never reviewed — no monitoring, no alerting, no one watching after hours.",
        "An SSP that describes an idealized environment, not the one that actually exists.",
        "A POA&M that hasn't been touched since it was created.",
        "Encryption in place, but not FIPS-validated where the requirement demands it.",
      ],
    },
    {
      id: "next-steps",
      heading: "From checklist to certification",
      paragraphs: [
        "Working through this checklist tells you roughly where you stand. Turning that into a defensible assessment result means closing gaps in a deliberate order, generating the evidence assessors expect, and keeping the controls operating — not just implemented once.",
        "One Circle Solutions helps defense contractors get there: a scoped gap assessment against NIST SP 800-171, a prioritized remediation roadmap, the monitoring and logging the framework assumes you run, and support through the assessment itself. If you'd rather not navigate CMMC alone, that's exactly the work we do.",
      ],
    },
  ],
};

export const longGuides: LongGuide[] = [cmmcChecklist];

export function getLongGuide(slug: string): LongGuide | undefined {
  return longGuides.find((g) => g.slug === slug);
}
