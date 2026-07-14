export type Resource = {
  slug: string;
  type: "Guide" | "Checklist" | "Briefing";
  title: string;
  description: string;
  readTime: string;
};

// Placeholder resource library — replace with real published content.
export const resources: Resource[] = [
  {
    slug: "mssp-evaluation-checklist",
    type: "Checklist",
    title: "12 questions to ask before signing with any MSSP",
    description:
      "The questions that separate a real security operation from a ticket-forwarding service — including the ones vendors hope you won't ask.",
    readTime: "8 min read",
  },
  {
    slug: "soc2-first-90-days",
    type: "Guide",
    title: "SOC 2 readiness: what the first 90 days actually look like",
    description:
      "A realistic sequencing of scoping, gap assessment, and evidence collection — and where teams most often lose a quarter.",
    readTime: "12 min read",
  },
  {
    slug: "edr-is-not-mdr",
    type: "Briefing",
    title: "You bought EDR. You don't have MDR.",
    description:
      "Why deployed tooling without 24/7 eyes on glass leaves the riskiest hours of the week uncovered, and what closing that gap requires.",
    readTime: "6 min read",
  },
  {
    slug: "tabletop-exercise-guide",
    type: "Guide",
    title: "Running a tabletop exercise your executives will thank you for",
    description:
      "How to design an incident scenario that surfaces real gaps in decision-making, communications, and authority — in under two hours.",
    readTime: "10 min read",
  },
  {
    slug: "cloud-misconfig-top10",
    type: "Briefing",
    title: "The 10 cloud misconfigurations we find in almost every assessment",
    description:
      "Public buckets are the least of it. The identity and network-path findings that show up in nearly every first-time cloud review.",
    readTime: "7 min read",
  },
  {
    slug: "cyber-insurance-requirements",
    type: "Checklist",
    title: "Meeting cyber insurance requirements without overbuying",
    description:
      "Mapping common underwriter requirements — MFA, EDR, monitoring, IR planning — to a pragmatic order of operations.",
    readTime: "9 min read",
  },
];
