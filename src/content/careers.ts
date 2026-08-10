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
  // Set for roles posted on behalf of a partner company (used for display
  // and as the hiring organization in JobPosting structured data).
  partner?: string;
  employmentType: "PART_TIME" | "FULL_TIME" | "CONTRACTOR";
  employmentLabel: string;
  locationLabel: string;
  workplace: string;
  // Remote controls the JobPosting location type; defaults to workplace check.
  remote?: boolean;
  compensationLabel?: string;
  salary?: { value: number; unit: "HOUR" | "YEAR" };
  reportsTo?: string;
  flsa?: string;
  datePosted: string; // YYYY-MM-DD
  summary: string;
  // Optional explicit "At a glance" rows; otherwise derived from the fields
  // above. Provide this for roles whose facts don't map to the defaults.
  facts?: { label: string; value: string }[];
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

export const softwareDeveloperNet: Job = {
  slug: "software-developer-net",
  title: "Software Developer (.NET / ASP.NET Full Stack)",
  partner: "3 Squared Technology Group",
  employmentType: "FULL_TIME",
  employmentLabel: "Full-time",
  locationLabel: "On-site · United States (government contract)",
  workplace: "On-site",
  remote: false,
  datePosted: "2026-07-28",
  summary:
    "3 Squared Technology Group is seeking a motivated Junior to Mid-Level Software Developer with experience in .NET, ASP.NET, and full-stack development to support mission-critical applications for government customers. An active Secret clearance and a current CompTIA Security+ certification are required.",
  facts: [
    { label: "Employment", value: "Full-time" },
    { label: "Level", value: "Junior to Mid-Level" },
    { label: "Company", value: "3 Squared Technology Group" },
    { label: "Position type", value: "Government contract support" },
    { label: "Clearance", value: "Active Secret — required" },
    { label: "Certification", value: "CompTIA Security+ — required" },
    { label: "Citizenship", value: "U.S. citizenship required" },
  ],
  sections: [
    {
      heading: "About the role",
      paragraphs: [
        "3 Squared Technology Group is seeking a motivated Junior to Mid-Level Software Developer with experience in .NET, ASP.NET, and full-stack application development. You'll support the development, enhancement, integration, testing, and maintenance of mission-critical applications and information systems supporting government customers.",
        "The ideal candidate has a solid foundation in software development and is comfortable across both front-end and back-end technologies. This position suits a developer who can work independently on assigned tasks while collaborating with senior developers, system administrators, cybersecurity personnel, database administrators, and government stakeholders.",
        "Candidates must possess an active Secret security clearance and a current CompTIA Security+ certification at the time of hire.",
      ],
    },
    {
      heading: "Key responsibilities",
      items: [
        "Design, develop, test, troubleshoot, and maintain applications using C#, .NET, .NET Core, and ASP.NET technologies.",
        "Develop and maintain web applications using ASP.NET MVC, Web API, Razor, HTML, CSS, JavaScript, and related technologies.",
        "Develop and maintain backend application logic, APIs, services, and database integrations.",
        "Support full-stack development across presentation, business logic, and data layers.",
        "Create, modify, and optimize SQL queries, stored procedures, and database interactions in Microsoft SQL Server.",
        "Troubleshoot application defects and perform root-cause analysis.",
        "Support modernization and enhancement of existing and legacy applications.",
        "Participate in testing, debugging, code reviews, configuration management, and deployment.",
        "Develop and maintain technical documentation for applications, software changes, interfaces, and configurations.",
        "Work within established Agile/Scrum and/or DevSecOps development processes.",
        "Use source-control and development tools such as Git, Azure DevOps, and Visual Studio.",
        "Collaborate with cybersecurity personnel to meet DoD security requirements and secure-coding practices.",
        "Assist with vulnerability remediation, STIG findings, and security-related software updates.",
        "Participate in requirements discussions with technical and functional stakeholders, and support production applications.",
      ],
    },
    {
      heading: "Mandatory qualifications",
      intro: "Candidates must meet all of the following requirements:",
      items: [
        "Active DoD Secret security clearance.",
        "Current CompTIA Security+ certification.",
        "U.S. citizenship.",
        "Bachelor's degree in Computer Science, Software Engineering, Information Technology, Information Systems, or a related technical discipline; equivalent relevant experience may be considered if permitted by contract requirements.",
        "Approximately 1–5 years of professional software development experience.",
        "Experience developing applications using C# and .NET / .NET Core.",
        "Experience with ASP.NET, ASP.NET MVC, and/or ASP.NET Web API.",
        "Working knowledge of front-end technologies such as HTML, CSS, JavaScript, Bootstrap, or similar frameworks.",
        "Experience with Microsoft SQL Server or a comparable relational database.",
        "Understanding of object-oriented programming principles and software development best practices.",
        "Familiarity with RESTful APIs and application integration.",
        "Experience using source-control tools such as Git.",
        "Strong troubleshooting, analytical, and problem-solving skills, and the ability to communicate with technical and non-technical team members.",
      ],
    },
    {
      heading: "Preferred qualifications",
      items: [
        "Experience supporting Department of Defense, U.S. Air Force, or other federal government systems.",
        "Experience modernizing or maintaining legacy .NET applications.",
        "Experience with Azure DevOps, CI/CD pipelines, DevSecOps, or automated deployment.",
        "Experience with JavaScript frameworks such as Angular or React.",
        "Experience developing or integrating REST APIs and web services.",
        "Familiarity with application security, vulnerability remediation, and secure-coding standards.",
        "Experience in Agile/Scrum development environments.",
        "Familiarity with DoD RMF, STIGs, and cybersecurity requirements.",
      ],
    },
    {
      heading: "Desired technical skills",
      items: [
        "Primary — C#, .NET, .NET Core, ASP.NET, ASP.NET MVC, Web API, SQL Server",
        "Front end — HTML, CSS, JavaScript, Bootstrap, Razor, Angular / React",
        "Development & DevOps — Visual Studio, Git, Azure DevOps, CI/CD, Agile / Scrum",
        "Security — CompTIA Security+, DoD cybersecurity, RMF, STIG, secure coding, vulnerability remediation",
      ],
    },
    {
      heading: "Candidate profile",
      paragraphs: [
        "The successful candidate will be a technically capable developer eager to grow into increased responsibility while supporting applications in a structured DoD environment.",
        "Junior candidates should demonstrate strong technical fundamentals and the ability to learn quickly. Mid-level candidates should be able to independently develop, troubleshoot, and deliver software components while assisting less-experienced team members as needed.",
      ],
    },
    {
      heading: "Clearance & certification are mandatory",
      paragraphs: [
        "An active Secret security clearance and a current CompTIA Security+ certification are mandatory for this position. Candidates who do not currently meet both requirements will not be considered.",
      ],
    },
  ],
};

export const jobs: Job[] = [softwareDeveloperNet, adminAssistant];

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
