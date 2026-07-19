// Downloadable tools & resources served from /public/downloads.
// To publish a new file: drop it in public/downloads/ and add an entry
// here — size and SHA-256 are computed automatically at build time.

export type DownloadItem = {
  file: string; // filename inside public/downloads
  title: string;
  description: string;
  category: "Hardening" | "Incident Response" | "Template";
  format: string;
  requires: string;
  version: string;
  updated: string; // YYYY-MM-DD
};

export const downloads: DownloadItem[] = [
  {
    file: "OneCircle-Win11-Hardening.ps1",
    title: "Windows 11 Hardening Script",
    description:
      "Applies a conservative CIS-subset baseline to standalone Windows 11 machines: UAC, SmartScreen, SMB signing, LSA protection, Defender ASR rules, PowerShell logging, and audit policy. Includes a -ReportOnly audit mode and creates a restore point before changing anything.",
    category: "Hardening",
    format: "PowerShell",
    requires: "Windows 11, elevated PowerShell",
    version: "1.0.0",
    updated: "2026-07-18",
  },
  {
    file: "onecircle-linux-hardening.sh",
    title: "Linux Server Hardening Script",
    description:
      "Baseline hardening for Debian/Ubuntu servers: SSH daemon lockdown, UFW default-deny firewall, kernel and network sysctls, auditd with starter rules, and unattended security updates. Includes a --report-only audit mode and validates the SSH config before reloading.",
    category: "Hardening",
    format: "Bash",
    requires: "Debian/Ubuntu, root",
    version: "1.0.0",
    updated: "2026-07-18",
  },
  {
    file: "onecircle-incident-response-plan-template.md",
    title: "Incident Response Plan Template",
    description:
      "A fill-in-the-blanks IR plan: severity matrix, roles and 24/7 contacts, phase-by-phase checklists, a notification obligations table to complete with counsel, communication templates, and a blameless post-incident review agenda.",
    category: "Incident Response",
    format: "Markdown",
    requires: "A quiet hour and your leadership team",
    version: "1.0.0",
    updated: "2026-07-18",
  },
];
