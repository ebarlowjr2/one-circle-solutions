// Leadership, presented role-first (no individual names by design —
// clients meet their named leads during onboarding).

import type { IconName } from "@/components/ui/icons";

export type LeadershipRole = {
  role: string;
  focus: string;
  icon: IconName;
  mandate: string;
  owns: string[];
  credentials: string[];
};

export const leadership: LeadershipRole[] = [
  {
    role: "Chief Executive Officer",
    focus: "Direction & accountability",
    icon: "compass",
    mandate:
      "Sets the direction of the firm and stays hands-on with client engagements. Two decades across security operations, infrastructure, and consulting — and still reads every quarterly client report before it ships.",
    owns: [
      "Client relationships and escalation of last resort",
      "Service quality and engagement standards",
      "The promises this website makes",
    ],
    credentials: ["CISSP", "CISM", "PMP"],
  },
  {
    role: "Chief Information Security Officer",
    focus: "Security strategy",
    icon: "shield",
    mandate:
      "Owns our internal security program and the standards every client engagement inherits. The same controls we sell are the controls we run — this desk makes sure of it.",
    owns: [
      "Internal security program and risk register",
      "Client-facing security architecture standards",
      "Vendor and tooling due diligence",
    ],
    credentials: ["CISSP", "CCSP", "CRISC"],
  },
  {
    role: "Director of Security Operations",
    focus: "24/7 SOC",
    icon: "radar",
    mandate:
      "Runs the around-the-clock operation — analyst bench, detection engineering, and response playbooks. Built and led SOC teams for managed providers and in-house programs alike.",
    owns: [
      "24/7 monitoring, triage, and response",
      "Detection engineering and threat hunting",
      "Response SLAs and escalation paths",
    ],
    credentials: ["GCIH", "GCIA", "CySA+"],
  },
  {
    role: "Director of Security Engineering",
    focus: "Platforms & automation",
    icon: "layers",
    mandate:
      "Owns the platforms behind the service: SIEM architecture, cloud security tooling, and the automation that keeps analysts working on signal instead of plumbing.",
    owns: [
      "SIEM and telemetry architecture",
      "Cloud security tooling across AWS, Azure, and OCI",
      "Integration and automation pipelines",
    ],
    credentials: ["OSCP", "AWS Security Specialty", "AZ-500"],
  },
  {
    role: "Director of GRC",
    focus: "Compliance & advisory",
    icon: "scan",
    mandate:
      "Leads vCISO engagements and audit readiness. Has taken clients through SOC 2, HIPAA, PCI DSS, and CMMC — and believes a policy nobody follows is worse than no policy at all.",
    owns: [
      "vCISO engagements and security roadmaps",
      "Framework readiness and audit support",
      "Policy programs and customer diligence",
    ],
    credentials: ["CISA", "ISO 27001 Lead Auditor"],
  },
  {
    role: "Director of Client Delivery",
    focus: "Engagement success",
    icon: "eye",
    mandate:
      "Makes sure every engagement runs the way the proposal said it would — onboarding on schedule, reporting on time, and a named lead who actually knows your environment.",
    owns: [
      "Onboarding and steady-state delivery",
      "Monthly and quarterly reporting cadence",
      "Client satisfaction and renewals",
    ],
    credentials: ["ITIL 4", "PMP"],
  },
];
