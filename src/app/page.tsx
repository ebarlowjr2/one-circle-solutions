import type { Metadata } from "next";
import { JsonLd, organizationSchema } from "@/lib/seo";
import { Hero } from "@/components/sections/hero";
import {
  BuyerPaths,
  Differentiators,
  EcosystemStrip,
  OperatingModel,
  Outcomes,
  StatsRow,
  TrustSection,
} from "@/components/sections/home-sections";
import { ServicesGrid } from "@/components/sections/services-grid";
import { EngagementModel } from "@/components/sections/engagement";
import { CtaSection } from "@/components/sections/cta";
import { PromoBanner } from "@/components/sections/promo-banner";

// Title and description inherit the root-layout defaults; this adds the
// self-referencing canonical for the homepage.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />
      <PromoBanner />
      <Hero />
      <StatsRow />
      <EcosystemStrip />
      <Outcomes />
      <OperatingModel />
      <Differentiators />
      <BuyerPaths />
      <ServicesGrid background="white" />
      <EngagementModel background="slate" />
      <TrustSection />
      <CtaSection />
    </>
  );
}
