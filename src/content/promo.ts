import type { IconName } from "@/components/ui/icons";

// Pathway to Protection — limited-time launch promotion (managed EDR + SOC).
// Flip `active` to false when the sale ends to hide the homepage banner.
// The landing page stays reachable either way.

export const promo = {
  active: true,
  slug: "pathway-to-protection",
  name: "Pathway to Protection",
  eyebrow: "Pathway to Protection · Launch promotion",
  tagline: "Empowering small businesses to become cyber secure",
  price: 100,
  priceLabel: "$100",
  priceUnit: "per system",
  windowLabel: "90-day launch offer",
  // Optional hard end date for a "ends <date>" line — leave empty to just
  // say "limited-time". Format: YYYY-MM-DD.
  endDate: "",

  banner: {
    kicker: "Launch offer",
    text: "Pathway to Protection — managed EDR + SOC for small business",
    highlight: "$100 / system",
    cta: "See the offer",
  },

  hero: {
    headline: "Enterprise-grade cybersecurity, priced for small business",
    intro: [
      "At One Circle Solutions, we believe every business — no matter the size — deserves enterprise-level cybersecurity.",
      "Pathway to Protection is an affordable, all-inclusive program that hardens your systems, automates protection, and builds your foundation for compliance. For a limited time, complete protection is just $100 per system.",
    ],
  },

  includes: [
    {
      icon: "shield" as IconName,
      title: "SentinelOne Endpoint Defense",
      description:
        "Next-generation, AI-powered protection that stops ransomware, malware, and zero-day threats in real time.",
      items: [
        "Autonomous threat detection and remediation — no human required",
        "Rollback recovery for ransomware attacks",
        "Real-time behavioral AI that prevents compromise",
        "Centralized management and reporting for every endpoint",
      ],
    },
    {
      icon: "chart" as IconName,
      title: "Syslog & Monitoring Integration",
      description:
        "Syslog forwarding and centralized monitoring give you visibility into security events across all your systems.",
      items: [
        "Log aggregation from Windows, Linux, firewalls, and endpoints",
        "Correlation rules for suspicious activity",
        "Optional integration with Wazuh or SIEM dashboards",
      ],
    },
    {
      icon: "scan" as IconName,
      title: "Virus & Threat Protection",
      description:
        "Continuous scanning and automatic removal of malicious files using a layered defense approach.",
      items: [],
    },
    {
      icon: "layers" as IconName,
      title: "OS Hardening",
      description:
        "DISA STIG-aligned security settings and removal of unnecessary services to shrink your attack surface.",
      items: [
        "Local account controls",
        "PowerShell and script-execution restrictions",
        "Secure baseline configurations",
      ],
    },
    {
      icon: "bolt" as IconName,
      title: "Patch Management",
      description: "We keep your systems up to date automatically.",
      items: [
        "Regular Windows and third-party patch deployment",
        "Critical update verification",
        "Patch compliance reporting",
      ],
    },
    {
      icon: "radar" as IconName,
      title: "Automated Cyber Services",
      description:
        "Backend scripts and AI-driven tools continuously monitor and maintain your security baseline — freeing you from manual maintenance. Additional services may include:",
      items: [
        "Local admin privilege removal",
        "Backup configuration",
        "MFA and secure login setup",
        "Vulnerability scans",
      ],
    },
  ],

  whyChoose: [
    "Low-cost, high-impact cybersecurity built for small businesses",
    "Automated setup — protection starts immediately",
    "Compliance-ready configuration aligned to CMMC, NIST SP 800-171, and HIPAA",
    "Backed by One Circle Solutions, your trusted MSSP",
  ],

  launchOffer: {
    price: "$100 per system",
    priceNote: "limited-time launch pricing",
    includes: [
      "Setup and deployment",
      "Endpoint, monitoring, hardening, and patching configuration",
      "A 30-day monitoring report",
    ],
  },

  complianceBadges: ["CMMC", "NIST SP 800-171", "HIPAA"],

  relatedIndustry: { slug: "small-business", label: "Small Business" },
} as const;
