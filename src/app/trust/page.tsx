import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import {
  ButtonLink,
  CheckItem,
  Container,
  PageHero,
  SectionHeading,
} from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icons";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Trust & Compliance",
  description:
    "How One Circle Solutions handles access, data, and its own security posture — and the compliance frameworks our services map to.",
  path: "/trust",
});

const frameworks = [
  {
    name: "SOC 2",
    description: "Readiness, evidence collection, and control operation for Type I and Type II audits.",
  },
  {
    name: "ISO 27001",
    description: "ISMS design and control mapping for organizations pursuing or maintaining certification.",
  },
  {
    name: "HIPAA",
    description: "Security Rule safeguards and monitoring for covered entities and business associates.",
  },
  {
    name: "PCI DSS",
    description: "Logging, monitoring, and vulnerability management aligned to cardholder data requirements.",
  },
  {
    name: "CMMC",
    description: "Practice implementation and evidence support for defense supply-chain requirements.",
  },
  {
    name: "CIS Controls",
    description: "Our default baseline for pragmatic, prioritized hardening when no framework mandates one.",
  },
];

const accessPractices = [
  "Access is scoped per engagement to the minimum required, documented, and approved by you before onboarding completes",
  "Multi-factor authentication and hardware-backed credentials are enforced for every analyst, everywhere",
  "All access to client environments is logged and reviewable by the client at any time",
  "Access reviews run quarterly; departures and role changes trigger same-day revocation",
  "Engagement end means access end — verified removal, confirmed in writing",
];

const dataPractices = [
  "Telemetry and detections live in tenants you control wherever the platform allows it",
  "We collect the minimum client data needed to operate the service — no resale, no secondary use, ever",
  "Client data is encrypted in transit and at rest, segregated per client",
  "Documentation, runbooks, and detection content we build for you are your property",
  "Offboarding includes complete handover and certified deletion of residual data",
];

const internalPosture = [
  "We run our own security program on the same operating model we sell — monitored, tested, and reviewed",
  "Annual third-party penetration testing of our infrastructure",
  "Background checks and security training for every employee",
  "Documented incident response plan with defined client-notification commitments",
  "Vendor risk reviews for every tool in our own stack",
];

export default function TrustPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Trust & Compliance", path: "/trust" },
        ])}
      />
      <PageHero
        eyebrow="Trust & Compliance"
        title="Demanding vendors is good security. Start with us."
        description="An MSSP holds some of the most privileged access in your environment. You should scrutinize ours harder than any other vendor's. This page is the standing answer to that scrutiny — and we'll put all of it in writing during diligence."
      />

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Frameworks"
            title="Compliance frameworks our services map to"
            description="We operate services so that evidence for these frameworks is generated as a byproduct of daily operations — not reconstructed before an audit."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((fw) => (
              <div
                key={fw.name}
                className="rounded-xl border border-slate-200 p-7"
              >
                <div className="flex items-center gap-3">
                  <Icon name="shield" className="h-5 w-5 text-brand-700" />
                  <h3 className="font-semibold text-slate-900">{fw.name}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/about/certifications" variant="outline">
              See the team certifications behind this work
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Access"
                title="How we handle access to your environment"
              />
              <ul className="mt-8 space-y-4">
                {accessPractices.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="Data"
                title="How we handle your data"
              />
              <ul className="mt-8 space-y-4">
                {dataPractices.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <SectionHeading
              eyebrow="Our own posture"
              title="We eat our own cooking"
              description="Every control we recommend, we run internally first. If a practice is too burdensome for us to follow, we won't ask your team to follow it either."
            />
            <ul className="space-y-4 self-center">
              {internalPosture.map((item) => (
                <CheckItem key={item}>{item}</CheckItem>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Put us through your security review"
        description="Send us your diligence questionnaire — we answer every question directly, in writing, without a sales filter."
      />
    </>
  );
}
