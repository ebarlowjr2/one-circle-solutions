import type { IconName } from "@/components/ui/icons";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  icon: IconName;
  tagline: string;
  summary: string;
  outcomes: string[];
  capabilities: { title: string; description: string }[];
  goodFit: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "managed-detection-response",
    name: "Managed Detection & Response",
    shortName: "MDR",
    icon: "radar",
    tagline: "24/7 monitoring, triage, and response across endpoint, identity, and network.",
    summary:
      "Our security operations team watches your environment around the clock, investigates every credible signal, and responds with pre-agreed containment actions — so a 2 a.m. alert becomes a resolved ticket, not a Monday-morning crisis.",
    outcomes: [
      "Around-the-clock coverage without building an internal SOC",
      "Median triage measured in minutes, not business days",
      "Containment actions pre-approved with your team, executed on your behalf",
      "Monthly reporting your leadership can actually read",
    ],
    capabilities: [
      {
        title: "24/7 monitoring & triage",
        description:
          "Analysts review and classify every credible alert from your EDR, identity provider, and network telemetry — every hour of every day.",
      },
      {
        title: "Threat hunting",
        description:
          "Scheduled hypothesis-driven hunts across your telemetry to surface activity that never fired an alert.",
      },
      {
        title: "Guided & active response",
        description:
          "From isolating a host to disabling a compromised account, response playbooks are agreed with you up front and executed fast.",
      },
      {
        title: "Detection engineering",
        description:
          "Custom detections tuned to your environment, with noisy rules retired and gaps closed as your stack changes.",
      },
    ],
    goodFit: [
      "You have EDR deployed but nobody watching it overnight",
      "Your IT team is doing security 'on the side'",
      "Cyber insurance or customers now require 24/7 monitoring",
    ],
    deliverables: [
      "24/7/365 monitored coverage with defined response SLAs",
      "Agreed response playbooks and escalation paths",
      "Monthly operational report and quarterly detection review",
    ],
  },
  {
    slug: "managed-siem",
    name: "Managed SIEM & Log Management",
    shortName: "Managed SIEM",
    icon: "layers",
    tagline: "Your SIEM designed, tuned, and operated — without the alert fatigue.",
    summary:
      "A SIEM is only as good as the sources feeding it and the people tuning it. We design, deploy, and run your SIEM — onboarding the log sources that matter, engineering high-signal detections, and keeping costs predictable.",
    outcomes: [
      "Log sources prioritized by risk, not by what was easy to connect",
      "Detections tuned so analysts chase real threats, not noise",
      "Retention and searchability aligned to your compliance obligations",
      "Predictable ingest costs instead of surprise invoices",
    ],
    capabilities: [
      {
        title: "Architecture & onboarding",
        description:
          "Source prioritization, parsing, and normalization across cloud, identity, endpoint, and network telemetry.",
      },
      {
        title: "Detection content",
        description:
          "A managed rule set mapped to MITRE ATT&CK, tuned continuously against your environment's baseline.",
      },
      {
        title: "Cost & health management",
        description:
          "Ingest monitoring, source health alerts, and retention tiering so the platform stays fast and affordable.",
      },
      {
        title: "Compliance-ready reporting",
        description:
          "Log retention and audit evidence aligned to frameworks like SOC 2, HIPAA, and PCI DSS.",
      },
    ],
    goodFit: [
      "You bought a SIEM and it became an expensive log bucket",
      "Auditors keep asking for log evidence you can't produce quickly",
      "Your team spends more time tuning rules than investigating",
    ],
    deliverables: [
      "Deployed and documented SIEM architecture",
      "Managed detection rule set with monthly tuning",
      "Quarterly source coverage and cost review",
    ],
  },
  {
    slug: "vulnerability-management",
    name: "Vulnerability Management",
    shortName: "Vulnerability Mgmt",
    icon: "scan",
    tagline: "Continuous scanning with prioritization your engineers will act on.",
    summary:
      "Scanning is the easy part — the value is in what happens next. We run continuous discovery and scanning across your estate, prioritize by real-world exploitability, and drive remediation through your existing ticketing workflow.",
    outcomes: [
      "A living inventory of what you actually have exposed",
      "Fix lists ranked by exploitability and business impact, not raw CVSS",
      "Remediation tracked to closure inside your ticketing system",
      "Trend reporting that shows risk going down quarter over quarter",
    ],
    capabilities: [
      {
        title: "Continuous discovery & scanning",
        description:
          "Authenticated internal and external scanning, plus attack-surface discovery for the assets nobody remembered.",
      },
      {
        title: "Risk-based prioritization",
        description:
          "Findings ranked by known exploitation, exposure, and asset criticality — so the top ten actually matter.",
      },
      {
        title: "Remediation coordination",
        description:
          "Findings routed into Jira, ServiceNow, or your tool of choice, with owners, due dates, and verification rescans.",
      },
      {
        title: "Executive reporting",
        description:
          "Board-ready trending on exposure, mean time to remediate, and coverage.",
      },
    ],
    goodFit: [
      "Scan reports pile up with no owner and no follow-through",
      "A customer or auditor asked for your vulnerability management program",
      "You can't confidently list your internet-facing assets",
    ],
    deliverables: [
      "Continuous scan coverage across agreed scope",
      "Monthly prioritized remediation plan",
      "Quarterly exposure trend report",
    ],
  },
  {
    slug: "cloud-security",
    name: "Cloud Security",
    shortName: "Cloud Security",
    icon: "cloud",
    tagline: "Posture management and threat detection for AWS, Azure, and Google Cloud.",
    summary:
      "Cloud moves faster than quarterly reviews. We continuously monitor your cloud accounts for risky configurations, over-privileged identities, and active threats — then help your engineers fix root causes, not just findings.",
    outcomes: [
      "Misconfigurations caught before they become incidents",
      "Identity and access risk mapped and reduced",
      "Cloud-native threat detection wired into 24/7 operations",
      "Guardrails that let engineering keep shipping",
    ],
    capabilities: [
      {
        title: "Posture management (CSPM)",
        description:
          "Continuous configuration assessment against CIS benchmarks and your own policy baselines.",
      },
      {
        title: "Identity & entitlement review",
        description:
          "Analysis of roles, keys, and service accounts to shrink the blast radius of any single compromise.",
      },
      {
        title: "Cloud threat detection",
        description:
          "Control-plane and workload telemetry monitored alongside the rest of your environment.",
      },
      {
        title: "IaC & guardrail advisory",
        description:
          "Policy-as-code and landing-zone recommendations so fixes stay fixed.",
      },
    ],
    goodFit: [
      "Multiple teams create cloud resources with no security review",
      "You've inherited cloud accounts nobody fully understands",
      "Compliance requires evidence of cloud configuration monitoring",
    ],
    deliverables: [
      "Baseline posture assessment with prioritized fixes",
      "Continuous posture monitoring and drift alerts",
      "Quarterly identity and entitlement review",
    ],
  },
  {
    slug: "incident-response",
    name: "Incident Response & Readiness",
    shortName: "Incident Response",
    icon: "siren",
    tagline: "A tested plan before the incident, an experienced team during it.",
    summary:
      "The worst time to meet your incident response team is during the incident. We build and test your response capability — plans, runbooks, and tabletop exercises — and stand ready with retainer-backed responders when something real happens.",
    outcomes: [
      "A response plan your team has actually rehearsed",
      "Defined roles, communications, and legal touchpoints before you need them",
      "Retainer-backed access to experienced responders",
      "Post-incident reviews that harden the environment, not assign blame",
    ],
    capabilities: [
      {
        title: "IR planning & runbooks",
        description:
          "Response plans and scenario runbooks written for your environment, your tooling, and your obligations.",
      },
      {
        title: "Tabletop exercises",
        description:
          "Facilitated executive and technical exercises that find the gaps on a Tuesday afternoon instead of during a breach.",
      },
      {
        title: "Retainer response",
        description:
          "Priority access to responders for containment, investigation, and recovery when an incident is live.",
      },
      {
        title: "Post-incident review",
        description:
          "Root-cause analysis and a concrete hardening plan after every engagement.",
      },
    ],
    goodFit: [
      "Your IR plan is a document nobody has opened since it was written",
      "Cyber insurance requires a named response capability",
      "You've had a near miss and want to be ready for the real thing",
    ],
    deliverables: [
      "Incident response plan and scenario runbooks",
      "Annual tabletop exercise with findings report",
      "Retainer with defined activation SLAs",
    ],
  },
  {
    slug: "vciso-compliance",
    name: "vCISO & Compliance Advisory",
    shortName: "vCISO & Compliance",
    icon: "compass",
    tagline: "Security leadership and audit readiness without the executive hire.",
    summary:
      "Frameworks don't secure companies — programs do. Our virtual CISO service gives you an experienced security leader who builds your roadmap, owns your risk register, and gets you through SOC 2, HIPAA, PCI DSS, or CMMC without derailing the business.",
    outcomes: [
      "A security roadmap tied to business risk, not checkbox anxiety",
      "Audit readiness with evidence collection built into operations",
      "A named security leader for customers, auditors, and your board",
      "Policies people can follow instead of binders nobody reads",
    ],
    capabilities: [
      {
        title: "Program leadership",
        description:
          "Fractional CISO ownership of strategy, budget guidance, risk register, and board reporting.",
      },
      {
        title: "Framework readiness",
        description:
          "Gap assessment and remediation roadmaps for SOC 2, ISO 27001, HIPAA, PCI DSS, and CMMC.",
      },
      {
        title: "Policy & process",
        description:
          "Right-sized policies mapped to controls, with ownership and review cycles that stick.",
      },
      {
        title: "Vendor & customer diligence",
        description:
          "Security questionnaire responses, vendor risk reviews, and customer audit support.",
      },
    ],
    goodFit: [
      "A big customer just sent a 300-question security review",
      "You need SOC 2 to close deals but don't know where to start",
      "You need executive-level security judgment a few days a month",
    ],
    deliverables: [
      "Security program roadmap with quarterly milestones",
      "Maintained policy set and risk register",
      "Audit and customer-diligence support",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
