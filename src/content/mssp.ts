// Content for the /managed-security-services pillar page — the definitive
// "what is managed security / MSSP" resource that links out to every service.

export const mssp = {
  slug: "managed-security-services",
  metaTitle: "Managed Security Services & MSSP Solutions",
  metaDescription:
    "Build a complete managed security operation with 24/7 monitoring, detection engineering, incident response, vulnerability management, cloud security, and compliance support from One Circle Solutions.",

  heroTitle: "Managed Security Services",
  heroLede:
    "A managed security services provider (MSSP) runs your security operation for you — the people, process, and platforms that detect threats, respond to incidents, and keep your program audit-ready. One Circle Solutions delivers all of it as a single, transparent operation.",

  intro: [
    "Most mid-market and growing companies reach the same wall: they've bought security tools, but nobody is watching them around the clock, tuning them, or responding when something fires at 2 a.m. Hiring and retaining a 24/7 security team is expensive and slow. Managed security services close that gap.",
    "Rather than assembling detection, response, vulnerability management, cloud security, and compliance as separate projects and vendors, an MSSP gives you one team and one operational picture of your risk — so adding coverage never means adding another vendor to coordinate.",
  ],

  whatWeDo: {
    heading: "What a managed security services provider actually does",
    intro:
      "\"MSSP\" covers a lot of ground. In practice, ours delivers five things that work together:",
    items: [
      {
        title: "Watches your environment 24/7",
        description:
          "Senior analysts monitor your endpoints, identities, cloud accounts, and network telemetry every hour of every day, and investigate every credible signal — not just business hours.",
      },
      {
        title: "Engineers detections, not defaults",
        description:
          "Out-of-the-box rules produce out-of-the-box noise. We tune detections to your environment and retire the ones that stop earning their keep, so analysts chase real threats.",
      },
      {
        title: "Responds on agreed authority",
        description:
          "Containment actions — isolate a host, disable an account, revoke a session — are agreed with you up front and executed immediately, so incidents shrink instead of spreading.",
      },
      {
        title: "Reduces exposure over time",
        description:
          "Continuous vulnerability management and cloud posture work drive risk down quarter over quarter, with remediation tracked to closure in your own ticketing system.",
      },
      {
        title: "Produces evidence as a byproduct",
        description:
          "Reporting and audit evidence for SOC 2, HIPAA, PCI DSS, and CMMC fall out of daily operations, instead of becoming a quarterly scramble before an assessment.",
      },
    ],
  },

  comparison: {
    heading: "MSSP vs. building it yourself vs. buying a point tool",
    intro:
      "There are three common ways to cover security operations. Here's the honest tradeoff of each.",
    options: [
      {
        title: "Build an in-house SOC",
        body: "Full control and deep context — but sustaining 24/7 coverage typically takes five or more analysts, a SIEM, and the budget and hiring pipeline to keep them. It's the right call at real scale, and painful before that.",
        verdict: "Best for large enterprises",
      },
      {
        title: "Buy MDR or point tools",
        body: "Endpoint detection and response and similar tools are powerful, but a deployed tool without people watching it is not an operation. You still own tuning, correlation across identity/cloud, and the response decision at 2 a.m.",
        verdict: "A component, not a program",
      },
      {
        title: "Partner with an MSSP",
        body: "You get the people, process, and platform operation without hiring a team — and you keep your own tools and data. For most mid-market and growing companies, it's the fastest path to real 24/7 coverage at a sane cost.",
        verdict: "Best fit for mid-market",
      },
    ],
  },

  serviceLevels: {
    heading: "Service levels, reporting, and ownership",
    paragraphs: [
      "Response commitments are defined per engagement and documented before onboarding ends — including which actions we take on your behalf, the escalation path, and how fast we act on critical alerts. We agree these with you rather than hand you a one-size-fits-all SLA.",
      "You get shared dashboards, full investigation notes, and monthly operational reporting written for people who don't live in a SOC — plus quarterly reviews of detection coverage and exposure trends.",
      "Everything we build in your environment — detections, runbooks, documentation — is yours. We operate the tools you already own, and if we ever part ways, nothing is held hostage.",
    ],
  },

  faqs: [
    {
      q: "What's the difference between an MSSP and MDR?",
      a: "MDR (managed detection and response) is one capability — monitoring and responding to threats, usually centered on endpoints. An MSSP (managed security services provider) is the broader operation that can include MDR plus SIEM, vulnerability management, cloud security, incident response, and compliance support, run as one program. MDR is a component; an MSSP is the whole security operation.",
    },
    {
      q: "Do you replace our IT team, or work with them?",
      a: "We work with them. We handle the security operation — monitoring, detection, response, and program support — while your IT team keeps running IT. We plug into your existing tools and ticketing, and we're explicit about who does what before onboarding ends.",
    },
    {
      q: "Do we have to rip out our existing security tools?",
      a: "No. We operate the EDR, SIEM, and cloud tools you already own wherever possible. That avoids lock-in and rip-and-replace cost, and it means everything we build stays yours if we ever part ways.",
    },
    {
      q: "How quickly can you get us covered?",
      a: "Most clients are fully onboarded within about 30 days: a structured assessment in week one, telemetry connected and detections baselined over the following weeks, and response playbooks agreed and documented before we reach steady-state operations.",
    },
    {
      q: "What are your response SLAs?",
      a: "Response commitments are agreed per engagement and written down during onboarding — including which containment actions we take on your behalf and how fast we act on critical alerts — rather than a generic number that ignores your environment.",
    },
    {
      q: "How is managed security priced?",
      a: "Pricing depends on the size of your environment and which services you need — there's no one-size figure. The assessment week tells us the scope, and you get a clear, itemized proposal before committing. Every consultation ends with a written findings brief whether or not we work together.",
    },
    {
      q: "Is an MSSP worth it for a small or mid-sized company?",
      a: "Often more so than for large enterprises, because smaller teams can't sustain 24/7 coverage or a full security hire, yet face the same attackers, cyber-insurance requirements, and customer security questionnaires. An MSSP gives you enterprise-grade coverage at a size and cost that fits.",
    },
    {
      q: "Which compliance frameworks do you support?",
      a: "Our services map to SOC 2, ISO 27001, HIPAA, PCI DSS, and CMMC / NIST SP 800-171, with evidence generated as a byproduct of operations. See our Trust & Compliance page for how that works.",
    },
  ],
} as const;
