import type { IconName } from "@/components/ui/icons";

// NOTE: Stats below are placeholder marketing figures — replace with real
// operational metrics before launch.
export const stats = [
  { value: "24/7/365", label: "SOC coverage, staffed by analysts" },
  { value: "15 min", label: "Median time to triage a critical alert" },
  { value: "97%", label: "Client retention, year over year" },
  { value: "40+", label: "Environments under active management" },
] as const;

// Placeholder ecosystem strip — the platforms our team operates daily.
// Swap for real partner logos when partnership agreements are in place.
export const ecosystem = [
  "Microsoft Sentinel",
  "CrowdStrike",
  "SentinelOne",
  "Splunk",
  "AWS",
  "Azure",
  "Okta",
  "Palo Alto Networks",
] as const;

export const outcomes = [
  {
    icon: "eye" as IconName,
    title: "Someone is always watching",
    description:
      "Every credible alert is investigated by an analyst — nights, weekends, holidays. Coverage gaps stop being your problem.",
  },
  {
    icon: "bolt" as IconName,
    title: "Response in minutes, not meetings",
    description:
      "Containment actions are agreed up front and executed immediately, so incidents shrink instead of spreading.",
  },
  {
    icon: "chart" as IconName,
    title: "Risk you can show going down",
    description:
      "Exposure trends, response metrics, and audit evidence delivered in language your board and auditors understand.",
  },
] as const;

export const operatingModel = {
  heading: "One operating model behind every service",
  description:
    "Everything we run — detection, vulnerability management, cloud posture, compliance — feeds a single operational picture of your environment. One team, one escalation path, one view of risk.",
  pillars: [
    {
      title: "Visibility first",
      description:
        "We start by instrumenting what you have: endpoints, identities, cloud accounts, and the assets nobody remembered to inventory.",
    },
    {
      title: "Detection engineered, not defaulted",
      description:
        "Out-of-the-box rules get you out-of-the-box noise. Detections are tuned to your environment and retired when they stop earning their keep.",
    },
    {
      title: "Response agreed in advance",
      description:
        "Playbooks, authority levels, and escalation paths are documented before onboarding ends — so response never waits on a phone tree.",
    },
    {
      title: "Evidence as a byproduct",
      description:
        "Reporting and audit evidence fall out of daily operations automatically, instead of becoming a quarterly scramble.",
    },
  ],
} as const;

export const differentiators = [
  {
    title: "Senior analysts, not a ticket queue",
    description:
      "Your alerts are handled by experienced analysts who know your environment — not routed through tiers of script-readers.",
  },
  {
    title: "Your stack, not our lock-in",
    description:
      "We operate the tools you already own across EDR, SIEM, and cloud. If we ever part ways, everything we built stays yours.",
  },
  {
    title: "Transparent operations",
    description:
      "You see what we see: shared dashboards, full investigation notes, and honest reporting — including the misses.",
  },
  {
    title: "Right-sized engagements",
    description:
      "Scoped to what you actually need now, with room to grow. No three-year contracts to get a first conversation.",
  },
] as const;

export const buyerPaths = [
  {
    title: "We need 24/7 coverage",
    description:
      "You have tooling but no one watching it overnight, and insurance or customers are asking hard questions.",
    href: "/services/managed-detection-response",
    linkLabel: "Start with MDR",
  },
  {
    title: "We have a compliance deadline",
    description:
      "SOC 2, HIPAA, PCI DSS, or CMMC is standing between you and a signed deal, and the gap list keeps growing.",
    href: "/services/vciso-compliance",
    linkLabel: "Start with vCISO & Compliance",
  },
  {
    title: "We just had an incident",
    description:
      "Something happened — or nearly did — and you need experienced hands now, plus a plan so it never surprises you again.",
    href: "/services/incident-response",
    linkLabel: "Start with Incident Response",
  },
  {
    title: "We're scaling faster than security",
    description:
      "Cloud accounts, endpoints, and vendors are multiplying and nobody owns the full picture of what's exposed.",
    href: "/services/vulnerability-management",
    linkLabel: "Start with Vulnerability Management",
  },
] as const;

export const engagementModel = {
  heading: "How an engagement runs",
  description:
    "A predictable path from first conversation to steady-state operations — most clients are fully onboarded within 30 days.",
  steps: [
    {
      step: "01",
      title: "Assess",
      duration: "Week 1",
      description:
        "A structured review of your environment, tooling, obligations, and the risks that actually keep you up at night. You get a written findings brief whether or not we work together.",
    },
    {
      step: "02",
      title: "Onboard",
      duration: "Weeks 2–4",
      description:
        "Telemetry connected, detections baselined, response playbooks and escalation paths agreed and documented with your team.",
    },
    {
      step: "03",
      title: "Operate",
      duration: "Ongoing",
      description:
        "24/7 monitoring, monthly operational reviews, and a named lead who knows your environment — not a rotating cast.",
    },
    {
      step: "04",
      title: "Improve",
      duration: "Quarterly",
      description:
        "Detection coverage reviews, exposure trending, and roadmap updates so the program compounds instead of stagnating.",
    },
  ],
} as const;

export const trustHighlights = [
  {
    title: "Compliance-aligned operations",
    description:
      "Our services map to SOC 2, ISO 27001, HIPAA, PCI DSS, and CMMC control families — evidence is generated as we operate.",
  },
  {
    title: "Least-privilege access",
    description:
      "Scoped, audited, MFA-enforced access to your environment, reviewed quarterly and revoked the day an engagement ends.",
  },
  {
    title: "Your data stays yours",
    description:
      "Telemetry, detections, and documentation live in tenants you control wherever possible. No hostage data, ever.",
  },
] as const;
