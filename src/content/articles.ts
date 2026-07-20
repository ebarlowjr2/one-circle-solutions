export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "Guide" | "Checklist" | "Briefing";
  datePublished: string;
  dateModified: string;
  readTime: string;
  relatedServices: string[]; // service slugs
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    slug: "questions-to-ask-before-signing-with-an-mssp",
    title: "12 questions to ask before signing with any MSSP",
    description:
      "The questions that separate a real security operation from a ticket-forwarding service — including the ones vendors hope you won't ask.",
    category: "Checklist",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    readTime: "8 min read",
    relatedServices: ["managed-detection-response", "managed-siem"],
    sections: [
      {
        paragraphs: [
          "Most MSSP disappointment traces back to questions nobody asked before signing. The glossy deck looks the same from every provider; the operational reality does not. These twelve questions surface the difference — and any provider worth hiring will answer them without flinching.",
        ],
      },
      {
        heading: "Coverage and people",
        list: [
          "1. Who actually looks at my alerts at 3 a.m. — your employees, or a subcontracted SOC? Where are they?",
          "2. What is your analyst-to-client ratio, and how many alerts does one analyst triage per shift?",
          "3. Will a named person know my environment, or does every ticket start from zero?",
          "4. What happens to my coverage when your best analyst quits?",
        ],
      },
      {
        heading: "Response and authority",
        list: [
          "5. What actions will you take on my behalf without waking me up — and where is that agreed in writing?",
          "6. What is your actual median time from alert to human triage? Show me last quarter's numbers.",
          "7. Walk me through your last real incident (redacted). What did the first hour look like?",
          "8. If we part ways, what do I keep — detections, runbooks, historical data?",
        ],
      },
      {
        heading: "Operations and honesty",
        list: [
          "9. Which of my alerts will you NOT handle? Every provider has a scope boundary — find it now, not during an incident.",
          "10. How do you tune out noise, and how often do detections get reviewed or retired?",
          "11. Can I see the same dashboards your analysts see?",
          "12. Tell me about a miss. If a provider claims they've never missed anything, they're either new or not being straight with you.",
        ],
      },
      {
        heading: "What good answers sound like",
        paragraphs: [
          "Good providers answer with specifics: named people, real numbers, written playbooks, and at least one honest story about something that went wrong and what changed afterward. Evasive answers on questions 5, 6, and 12 are the strongest predictor of regret twelve months in.",
          "Ask every provider the same twelve questions and take notes. The comparison usually makes the decision for you.",
        ],
      },
    ],
  },
  {
    slug: "soc-2-readiness-first-90-days",
    title: "SOC 2 readiness: what the first 90 days actually look like",
    description:
      "A realistic sequencing of scoping, gap assessment, and evidence collection — and where teams most often lose a quarter.",
    category: "Guide",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    readTime: "12 min read",
    relatedServices: ["compliance", "vciso"],
    sections: [
      {
        paragraphs: [
          "SOC 2 timelines slip for predictable reasons: scope creep, policies written before anyone knows what they should cover, and evidence collection left for the month before the audit. Here's the sequencing that actually works, based on taking real companies through it.",
        ],
      },
      {
        heading: "Days 1–30: scope before anything else",
        paragraphs: [
          "The single biggest cost driver in SOC 2 is scope. Before writing a single policy, decide: which product or platform is in scope, which Trust Services Criteria you're pursuing (start with Security alone unless customers demand more), and which systems actually touch customer data.",
        ],
        list: [
          "Inventory the systems in the audit boundary — production, CI/CD, identity, ticketing",
          "Choose Type I vs Type II deliberately: Type I proves design at a point in time; Type II proves operation over a window",
          "Run a gap assessment against the criteria — this becomes your entire roadmap",
          "Pick your audit firm now; good ones book out months ahead",
        ],
      },
      {
        heading: "Days 31–60: close the gaps that take calendar time",
        paragraphs: [
          "Some controls can be implemented in an afternoon; others need weeks of runway before an auditor can observe them operating. Start the slow ones first.",
        ],
        list: [
          "Access reviews: run the first one now — a Type II needs evidence of them happening on schedule",
          "Onboarding/offboarding checklists with evidence they're followed",
          "Vendor risk review process, applied to your critical vendors",
          "Monitoring and alerting with response records — auditors ask what fired and what you did",
          "Policies written to match reality, not templates describing a company you aren't",
        ],
      },
      {
        heading: "Days 61–90: make evidence automatic",
        paragraphs: [
          "Teams that suffer during audits are the ones collecting evidence by hand in the final month. Wire evidence into the tools you already use: tickets for access requests, PRs for change management, alert records for monitoring. If a control operates without leaving a trail, fix the trail now.",
          "By day 90 you should have: a signed audit engagement, every gap either closed or scheduled, and evidence accumulating automatically. That's what 'ready' means — not a binder, but an operation that produces proof as it runs.",
        ],
      },
      {
        heading: "Where the quarter gets lost",
        list: [
          "Writing policies before scoping (they'll all be rewritten)",
          "Buying a compliance platform and assuming it closes gaps by existing",
          "Letting engineering treat audit tickets as optional until the deadline panic",
          "Starting the Type II observation window before controls are actually operating",
        ],
      },
    ],
  },
  {
    slug: "edr-vs-mdr",
    title: "You bought EDR. You don't have MDR.",
    description:
      "Why deployed tooling without 24/7 eyes on glass leaves the riskiest hours of the week uncovered, and what closing that gap requires.",
    category: "Briefing",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    readTime: "6 min read",
    relatedServices: ["managed-detection-response", "managed-siem"],
    sections: [
      {
        paragraphs: [
          "EDR (endpoint detection and response) is software: an agent that watches endpoints and raises alerts. MDR (managed detection and response) is an operation: people who investigate those alerts, decide what's real, and act — at 3 a.m. on a holiday weekend, not just during business hours.",
          "The confusion matters because attackers know the difference. Ransomware crews deliberately detonate on Friday nights and holidays, precisely when a deployed-but-unwatched EDR console fills with alerts nobody reads until Monday.",
        ],
      },
      {
        heading: "What EDR alone gives you",
        list: [
          "Telemetry and detections on covered endpoints",
          "Alerts — often hundreds per week, most benign",
          "Response capability that sits unused unless someone drives it",
          "A false sense of coverage that shows up in incident post-mortems",
        ],
      },
      {
        heading: "What turns EDR into MDR",
        list: [
          "24/7 human triage of every credible alert, with real accountability for time-to-triage",
          "Pre-agreed response authority: isolate the host, disable the account, revoke the session — without a phone tree",
          "Tuning, so detections improve instead of drowning the console",
          "Coverage beyond the endpoint: identity, email, and cloud signals correlated together",
        ],
      },
      {
        heading: "The honest self-test",
        paragraphs: [
          "Ask one question: if a credible alert fired at 2 a.m. Saturday, who would look at it, and when? If the answer is 'Monday' or 'whoever checks the console first,' you have EDR — and an uncovered window that includes the hours attackers prefer most.",
          "Closing the gap means either staffing an around-the-clock rotation (typically five-plus analysts to cover 24/7/365 sustainably) or putting a managed operation on top of the tooling you already own. Either answer is respectable. Assuming the software covers the night shift is not.",
        ],
      },
    ],
  },
  {
    slug: "tabletop-exercise-guide",
    title: "Running a tabletop exercise your executives will thank you for",
    description:
      "How to design an incident scenario that surfaces real gaps in decision-making, communications, and authority — in under two hours.",
    category: "Guide",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    readTime: "10 min read",
    relatedServices: ["incident-response", "vciso"],
    sections: [
      {
        paragraphs: [
          "A good tabletop exercise finds the gaps in your incident response on a calm Tuesday afternoon instead of during a breach. A bad one is a compliance checkbox that teaches everyone tabletops are a waste of time. The difference is design.",
        ],
      },
      {
        heading: "Design principles",
        list: [
          "Two hours maximum — decision fatigue kills the second half of longer sessions",
          "One scenario, drip-fed in stages ('injects'), not revealed all at once",
          "Decisions, not technology: the exercise tests who decides, who communicates, and who has authority — the technical details are scenery",
          "Include the people who'd really be in the room: an executive, legal or counsel's proxy, communications, IT lead — not just the security team",
        ],
      },
      {
        heading: "A scenario structure that works",
        paragraphs: [
          "Start ambiguous, escalate concretely. A strong four-inject arc: (1) the help desk reports a handful of users locked out and an odd email from a vendor; (2) file shares are found encrypted and a ransom note appears; (3) the attacker claims to have exfiltrated data and posts a proof sample; (4) a reporter emails asking for comment.",
          "Each inject gets 15–20 minutes of discussion driven by the same questions: What do we do right now? Who decides? Who needs to know? What are we NOT going to do?",
        ],
      },
      {
        heading: "The questions that expose real gaps",
        list: [
          "Who can authorize taking a production system offline — and are they reachable on a Saturday?",
          "At what point do we call insurance, counsel, law enforcement? Who makes that call?",
          "Do we pay? Who is even allowed to have that conversation?",
          "What do we tell employees, and when — before or after they read about it online?",
          "Where is the incident channel, and does it work if email and Teams are compromised?",
        ],
      },
      {
        heading: "Capturing value",
        paragraphs: [
          "Assign a scribe who records every 'we'd have to figure that out' moment — each one is a finding. End with fifteen minutes of honest debrief, then publish three to five action items with owners and dates. Re-run the exercise annually with a new scenario; if the same gaps show up twice, the problem isn't awareness anymore.",
        ],
      },
    ],
  },
  {
    slug: "cloud-misconfigurations-security-teams-miss",
    title: "The cloud misconfigurations we find in almost every assessment",
    description:
      "Public buckets are the least of it. The identity and network-path findings that show up in nearly every first-time cloud review.",
    category: "Briefing",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    readTime: "7 min read",
    relatedServices: ["cloud-security", "vulnerability-management"],
    sections: [
      {
        paragraphs: [
          "Everyone checks for public storage buckets now. The findings that actually worry us in first-time cloud assessments are quieter — identity and network-path issues that turn one small compromise into full-environment access.",
        ],
      },
      {
        heading: "Identity findings (the ones that matter most)",
        list: [
          "Long-lived access keys for human users, years old, often for people who left",
          "Service accounts and roles with wildcard permissions 'temporarily' granted during an incident or migration — never revoked",
          "No MFA on cloud console access outside the core engineering team",
          "Cross-account trust relationships nobody can explain, inherited from a contractor or acquisition",
          "CI/CD pipelines holding production-admin credentials that any developer commit can exercise",
        ],
      },
      {
        heading: "Network and exposure findings",
        list: [
          "Security groups open to 0.0.0.0/0 on management ports — usually SSH or RDP 'just for troubleshooting'",
          "Databases and caches reachable from the whole VPC when one application needs them",
          "Forgotten dev/staging environments running production data with none of production's controls",
          "Snapshots and machine images shared more broadly than the resources they came from",
        ],
      },
      {
        heading: "Logging findings",
        list: [
          "Control-plane audit logging (CloudTrail and equivalents) enabled in one region, silent in the rest",
          "Logs collected but nothing watching them — indistinguishable from no logs during an incident",
          "No alerting on the events that matter most: new admin principals, disabled logging, auth failures from new geographies",
        ],
      },
      {
        heading: "Why these persist",
        paragraphs: [
          "None of these misconfigurations breaks anything. The application runs fine with a wildcard role and an open security group — until credentials leak, and then the blast radius is everything that trust could reach. That's why point-in-time cleanups don't hold: the next migration recreates the same shortcuts. Continuous posture monitoring exists to catch the drift, not just the snapshot.",
        ],
      },
    ],
  },
  {
    slug: "cyber-insurance-security-requirements",
    title: "Meeting cyber insurance requirements without overbuying",
    description:
      "Mapping common underwriter requirements — MFA, EDR, monitoring, IR planning — to a pragmatic order of operations.",
    category: "Checklist",
    datePublished: "2026-07-19",
    dateModified: "2026-07-19",
    readTime: "9 min read",
    relatedServices: ["managed-detection-response", "incident-response", "vciso"],
    sections: [
      {
        paragraphs: [
          "Cyber insurance applications have quietly become the most common reason mid-market companies improve their security. The requirements are real, but the panic-buying they trigger often isn't. Here's what underwriters actually ask for, in the order it makes sense to build it.",
        ],
      },
      {
        heading: "The near-universal requirements",
        list: [
          "MFA — on email, remote access, and privileged accounts; the single most common declination reason",
          "EDR on endpoints and servers, with something answering 'who monitors it?'",
          "Tested, offline-capable backups the ransomware can't encrypt alongside production",
          "An incident response plan that names people, not just phases",
          "Email security beyond defaults, and security awareness training",
          "Patching cadence you can describe with a straight face",
        ],
      },
      {
        heading: "A pragmatic order of operations",
        paragraphs: [
          "If you're starting from gaps, sequence by risk reduction per dollar rather than by questionnaire order:",
        ],
        list: [
          "1. MFA everywhere that matters — days of work, biggest single premium and risk impact",
          "2. Backups verified restorable and isolated — the difference between an incident and an extinction event",
          "3. EDR deployed with monitoring answered honestly (see: EDR vs MDR)",
          "4. IR plan written and contact sheet current — hours of work, heavily weighted by underwriters",
          "5. Email hardening and awareness training",
          "6. Vulnerability management as an ongoing program, not an annual scan",
        ],
      },
      {
        heading: "Where companies overbuy",
        paragraphs: [
          "The questionnaire says 'monitoring' and companies buy a SIEM they'll never staff. It says 'testing' and they buy an annual pentest before fixing the findings from the last one. Match the spend to the control's intent: underwriters want detection with response behind it, backups that restore, and a plan someone has rehearsed — not shelfware.",
          "One honest caution: answer applications accurately. Misstating controls on a cyber application has voided coverage exactly when companies needed it most. If you can't check a box yet, fix the control — don't finesse the answer.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
