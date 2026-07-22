import Link from "next/link";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { Container, PageHero } from "@/components/ui/primitives";
import { DownloadsSection } from "@/components/sections/downloads";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Scripts & Tools",
  description:
    "Free security scripts, hardening baselines, and templates from One Circle Solutions — Windows and Linux hardening scripts and an incident response plan template, each published with a SHA-256 checksum.",
  path: "/resources/tools",
});

export default function ToolsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: "Scripts & Tools", path: "/resources/tools" },
        ])}
      />
      <PageHero
        eyebrow="Resources · Scripts & Tools"
        title="Free tooling from our bench"
        description="The same baselines and templates we use in engagements, free to download and use. Every file lists its SHA-256 checksum — verify before you run, exactly as you'd expect a security firm to tell you."
      />

      <DownloadsSection showHeading={false} />

      <section className="border-t border-slate-200 bg-white pb-16">
        <Container className="pt-8">
          <p className="text-sm text-slate-500">
            Looking for guides and checklists instead?{" "}
            <Link href="/resources" className="font-semibold text-brand-700 hover:text-brand-500">
              Back to all resources
            </Link>
            .
          </p>
        </Container>
      </section>

      <CtaSection
        title="Want a reviewed, managed rollout instead of DIY?"
        description="These scripts apply conservative defaults, but every environment is different. We can assess, tailor, and operate hardening across your fleet — talk to us."
      />
    </>
  );
}
