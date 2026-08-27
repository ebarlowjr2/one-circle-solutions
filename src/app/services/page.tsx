import Link from "next/link";
import { breadcrumbSchema, JsonLd, pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/ui/primitives";
import { ServicesGrid } from "@/components/sections/services-grid";
import { EngagementModel } from "@/components/sections/engagement";
import { CtaSection } from "@/components/sections/cta";

export const metadata = pageMetadata({
  title: "Managed Security & Cybersecurity Services",
  description:
    "Explore managed detection and response, managed SIEM, vulnerability management, cloud security, incident response, vCISO, and compliance services — delivered as one operation.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <PageHero
        eyebrow="Services"
        title="Managed security services, delivered as one operation"
        description="Every service below can start on its own — most engagements do. But each one feeds the same operational picture of your environment, so adding coverage never means adding another vendor to coordinate."
      >
        <p className="mt-6 text-sm text-slate-600">
          New to managed security? Start with our overview of{" "}
          <Link
            href="/managed-security-services"
            className="font-semibold text-brand-700 hover:text-brand-500"
          >
            managed security services and how an MSSP works
          </Link>
          .
        </p>
      </PageHero>
      <ServicesGrid
        eyebrow="What we run"
        heading="Choose a starting point"
        description="Not sure where to begin? Most first engagements start with MDR or a compliance-driven vCISO scope — and the assessment week tells us which fits."
      />
      <EngagementModel />
      <CtaSection
        title="Not sure which service fits?"
        description="That's what the assessment week is for. Tell us your situation and we'll recommend the smallest engagement that actually moves your risk."
      />
    </>
  );
}
