import type { Metadata } from "next";
import { PageHero } from "@/components/ui/primitives";
import { ServicesGrid } from "@/components/sections/services-grid";
import { EngagementModel } from "@/components/sections/engagement";
import { CtaSection } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Managed detection and response, managed SIEM, vulnerability management, cloud security, incident response, and vCISO compliance advisory — delivered as one operation.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Managed security, delivered as one operation"
        description="Every service below can start on its own — most engagements do. But each one feeds the same operational picture of your environment, so adding coverage never means adding another vendor to coordinate."
      />
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
