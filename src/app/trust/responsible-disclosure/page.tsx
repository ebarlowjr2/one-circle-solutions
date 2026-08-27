import { site } from "@/content/site";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";

export const metadata = pageMetadata({
  title: "Responsible Disclosure Policy",
  description:
    "How to report a security vulnerability to One Circle Solutions — our responsible-disclosure policy, scope, safe-harbor commitment, and what to expect.",
  path: "/trust/responsible-disclosure",
});

const sections = [
  {
    heading: "Our commitment",
    body: [
      "We're a security firm, so we hold ourselves to the standard we ask of others: if you find a vulnerability in a system we operate, we want to hear about it, and we'll treat your report seriously and professionally.",
      "This policy explains how to report a vulnerability, what's in scope, and what you can expect from us in return.",
    ],
  },
  {
    heading: "How to report",
    body: [
      `Email your findings to ${site.email} with enough detail for us to reproduce and validate the issue: affected URL or system, a clear description, reproduction steps, and any supporting proof-of-concept, logs, or screenshots.`,
      "Our machine-readable security contact is published at https://www.onecs.net/.well-known/security.txt.",
      "Please report promptly after discovery, and give us a reasonable opportunity to investigate and remediate before any public disclosure.",
    ],
  },
  {
    heading: "Safe harbor",
    body: [
      "We will not pursue or support legal action against researchers who, in good faith, discover and report vulnerabilities in accordance with this policy. Good faith means: you avoid privacy violations, data destruction, and service disruption; you only interact with accounts you own or have explicit permission to test; and you do not access, modify, or retain data beyond the minimum needed to demonstrate the issue.",
      "If legal action is initiated by a third party against you for activities conducted under this policy, we will make it known that your actions were authorized.",
    ],
  },
  {
    heading: "What to expect from us",
    body: [
      "We aim to acknowledge your report within three business days, keep you reasonably informed as we investigate, and let you know when the issue is resolved. We're happy to credit reporters who wish to be recognized once a fix is in place.",
      "We don't currently operate a paid bug-bounty program, but we genuinely appreciate responsible reports and the researchers who make them.",
    ],
  },
  {
    heading: "Out of scope",
    body: [
      "The following are generally not eligible: findings from automated scanners without a demonstrated, exploitable impact; volumetric denial-of-service; social engineering of our staff or customers; physical attacks; reports about missing best-practice headers or configuration with no real security impact; and issues affecting systems we do not own or operate.",
      "If you're unsure whether something is in scope, report it anyway and we'll let you know.",
    ],
  },
];

export default function ResponsibleDisclosurePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust & Compliance", path: "/trust" },
          { name: "Responsible Disclosure", path: "/trust/responsible-disclosure" },
        ])}
      />
      <PageHero
        eyebrow="Trust & Compliance"
        title="Responsible Disclosure Policy"
        description="Found a security issue in something we run? Here's how to tell us, what's in scope, and what we'll do about it."
      />
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {sections.map((section) => (
              <section key={section.heading} className="mt-10 first:mt-0">
                <h2 className="text-xl font-semibold tracking-tight text-slate-900">
                  {section.heading}
                </h2>
                {section.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-3 leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
