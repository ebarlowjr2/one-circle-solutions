import type { IconName } from "@/components/ui/icons";
import { articles } from "@/content/articles";
import { downloads } from "@/content/downloads";

// Badge colors for article types, shared across resource listing pages.
export const articleTypeStyles: Record<string, string> = {
  Guide: "bg-brand-50 text-brand-700",
  Checklist: "bg-sky-50 text-sky-700",
  Blog: "bg-amber-50 text-amber-700",
};

export type ResourceCategory = {
  slug: string; // routes to /resources/<slug>
  label: string;
  icon: IconName;
  description: string;
  count: number;
  countNoun: string;
};

const countByType = (type: string) =>
  articles.filter((a) => a.category === type).length;

// The four cards on the Resources hub. Counts are derived from content so
// they can never drift from what's actually published.
export const resourceCategories: ResourceCategory[] = [
  {
    slug: "tools",
    label: "Scripts & Tools",
    icon: "scan",
    description:
      "Free hardening scripts, secure baselines, and templates you can download and run today — each published with a SHA-256 checksum.",
    count: downloads.length,
    countNoun: "downloads",
  },
  {
    slug: "guides",
    label: "Guides",
    icon: "compass",
    description:
      "Step-by-step guides drawn from real engagements — from SOC 2 readiness to running a tabletop exercise your executives will thank you for.",
    count: countByType("Guide"),
    countNoun: "guides",
  },
  {
    slug: "checklists",
    label: "Checklists",
    icon: "check",
    description:
      "Actionable checklists for evaluating an MSSP, meeting cyber-insurance requirements, and getting audit-ready without overbuying.",
    count: countByType("Checklist"),
    countNoun: "checklists",
  },
  {
    slug: "blog",
    label: "Blog",
    icon: "layers",
    description:
      "Field notes and briefings on managed detection, cloud security, and the decisions behind a strong security program.",
    count: countByType("Blog"),
    countNoun: "posts",
  },
];
