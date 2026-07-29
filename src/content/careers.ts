// Open positions. Content sourced from the official position descriptions.
// Add a role here and it appears on /careers and gets its own /careers/<slug>
// page with JobPosting structured data.

export type JobSection = {
  heading: string;
  intro?: string;
  items?: string[];
  paragraphs?: string[];
};

export type Job = {
  slug: string;
  title: string;
  employmentType: "PART_TIME" | "FULL_TIME" | "CONTRACTOR";
  employmentLabel: string;
  locationLabel: string;
  workplace: string;
  compensationLabel: string;
  salary?: { value: number; unit: "HOUR" | "YEAR" };
  reportsTo: string;
  flsa: string;
  datePosted: string; // YYYY-MM-DD
  summary: string;
  sections: JobSection[];
};

export const adminAssistant: Job = {
  slug: "administrative-assistant",
  title: "Administrative Assistant",
  employmentType: "PART_TIME",
  employmentLabel: "Part-time · ~20 hrs/week",
  locationLabel: "100% Remote (United States)",
  workplace: "Remote",
  compensationLabel: "$18.00 / hour",
  salary: { value: 18, unit: "HOUR" },
  reportsTo: "Company Leadership / Operations Manager",
  flsa: "Hourly, Non-Exempt",
  datePosted: "2026-07-28",
  summary:
    "One Circle Solutions is hiring a part-time, fully remote Administrative Assistant to support day-to-day operations for a growing cybersecurity firm and Managed Security Service Provider — coordinating communications, marketing outreach, procurement monitoring, and proposal work alongside company leadership.",
  sections: [
    {
      heading: "What you'll do",
      intro:
        "Working closely with company leadership, you'll provide administrative and coordination support across:",
      items: [
        "Customer and partner communications",
        "Internal meetings and scheduling",
        "Marketing and outreach activities",
        "State and local procurement monitoring",
        "Proposal coordination and deadline management",
        "General administrative support",
      ],
    },
    {
      heading: "Remote work environment",
      intro:
        "This is a fully remote role. You'll work from an approved remote location and maintain:",
      items: [
        "Reliable high-speed internet access",
        "A professional, distraction-controlled workspace suitable for customer, partner, and team communications",
        "Reliable availability during agreed-upon working hours",
        "The ability to join video meetings, phone calls, and online collaboration sessions",
        "Appropriate safeguards to prevent unauthorized individuals from viewing or accessing company or customer information",
      ],
      paragraphs: [
        "Occasional participation in virtual customer meetings, vendor demos, training, procurement meetings, and networking may be required. Any in-person attendance or travel would be rare, discussed in advance, and subject to prior approval.",
      ],
    },
    {
      heading: "Bring Your Own Device (BYOD)",
      intro:
        "This position follows a Bring Your Own Device model — you'll provide and maintain a reliable computer that:",
      items: [
        "Runs a currently supported version of Windows or macOS",
        "Reliably runs Microsoft 365, Google Workspace, video conferencing, web-based business apps, and approved security tools",
        "Has a working webcam, microphone, and speakers or headset",
        "Stays current on operating system and application security updates",
        "Uses password protection, automatic screen locking, and full-disk encryption",
        "Supports multi-factor authentication and company-approved endpoint security or monitoring software",
        "Is free of unlicensed software and not shared with others while company information is accessible",
      ],
      paragraphs: [
        "Unsupported operating systems, jailbroken or rooted devices, and public computers are not permitted. Personal devices remain your property; access to company systems is conditional on meeting these security requirements, and company accounts and data may be removed from the device when employment ends or access is no longer needed.",
      ],
    },
    {
      heading: "Information security & acceptable use",
      intro:
        "Because One Circle Solutions is a cybersecurity firm and MSSP, this role may involve access to confidential company, customer, partner, procurement, pricing, and business-development information. You'll be expected to:",
      items: [
        "Follow all company cybersecurity and acceptable-use policies and complete required security awareness training",
        "Use company-approved accounts and applications, with multi-factor authentication where available",
        "Store company information only in approved cloud platforms — never on unapproved local folders, personal cloud storage, or removable media",
        "Avoid company systems over unsecured public Wi-Fi unless using an approved secure connection",
        "Immediately report suspected phishing, malware, unauthorized access, device loss, or account compromise",
        "Keep business and personal accounts separated, and protect customer and company information from unauthorized disclosure",
      ],
    },
    {
      heading: "Additional requirements",
      items: [
        "Provide a reliable computer, internet connection, webcam, microphone, and headset suitable for professional remote work",
        "Ability to install and use company-approved security and productivity applications on your device",
        "Able to pass professional reference checks and any required background screening",
        "Willing to sign confidentiality, acceptable-use, intellectual-property, and equipment-access agreements",
        "Legally authorized to work in the United States",
      ],
    },
    {
      heading: "Schedule & compensation",
      paragraphs: [
        "This is a 100% remote, part-time position — approximately 20 hours per week at $18.00 per hour. The specific schedule is set with company leadership; some flexibility may be available, but you'll need reliable availability during agreed-upon business hours for customer and partner communications, meetings, marketing and outreach, procurement monitoring, proposal coordination, and deadline management.",
        "You'll accurately record working hours using the company's approved timekeeping process. Any work beyond the approved weekly schedule requires advance authorization.",
      ],
    },
  ],
};

export const jobs: Job[] = [adminAssistant];

export function getJob(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}

// Where applications go. No dedicated careers inbox exists yet, so route to
// the general inbox with a clear subject.
export const applyEmail = "info@OneCS.net";
export function applyMailto(job: Job): string {
  const subject = encodeURIComponent(`Application — ${job.title}`);
  const body = encodeURIComponent(
    `Hi One Circle Solutions team,\n\nI'd like to apply for the ${job.title} position. My résumé is attached.\n\nThank you,\n`,
  );
  return `mailto:${applyEmail}?subject=${subject}&body=${body}`;
}
