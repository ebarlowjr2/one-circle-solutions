// Leadership profiles.
// PLACEHOLDERS: replace name/bio/credentials with the real team before
// launch, and drop headshots into /public/team (set `photo` to the path).
// Cards render an initials avatar when `photo` is undefined.

export type Leader = {
  name: string;
  title: string;
  bio: string;
  credentials: string[];
  photo?: string;
  linkedin?: string;
};

export const leadership: Leader[] = [
  {
    name: "Founder & CEO",
    title: "Chief Executive Officer",
    bio: "Sets the direction of the firm and stays hands-on with client engagements. Two decades across security operations, infrastructure, and consulting — and still reads every quarterly client report before it ships.",
    credentials: ["CISSP", "CISM"],
  },
  {
    name: "Head of Security Operations",
    title: "Director, Security Operations",
    bio: "Runs the 24/7 operation — analyst bench, detection engineering, and response playbooks. Built and led SOC teams for managed providers and in-house programs before joining One Circle.",
    credentials: ["GCIH", "GCIA", "CySA+"],
  },
  {
    name: "Head of Engineering",
    title: "Director, Security Engineering",
    bio: "Owns the platforms behind the service: SIEM architecture, cloud security tooling, and the automation that keeps analysts working on signal instead of plumbing.",
    credentials: ["OSCP", "AWS Security Specialty"],
  },
  {
    name: "Head of GRC",
    title: "Director, Governance, Risk & Compliance",
    bio: "Leads vCISO engagements and audit readiness. Has taken clients through SOC 2, HIPAA, PCI DSS, and CMMC — and believes a policy nobody follows is worse than no policy at all.",
    credentials: ["CISA", "ISO 27001 Lead Auditor"],
  },
];
