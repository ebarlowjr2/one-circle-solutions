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

export default function HomePage() {
  return (
    <>
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
