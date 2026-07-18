import { site } from "@/content/site";
import { ButtonLink, Container } from "@/components/ui/primitives";

export function CtaSection({
  title = "Find out what your environment looks like to an attacker",
  description = "Start with a no-obligation consultation. We'll review your current coverage, obligations, and exposure — and you'll leave with a written findings brief whether or not we work together.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="bg-gradient-to-br from-brand-700 via-brand-blue to-brand-purple py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            {description}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <ButtonLink href={site.cta.primary.href} variant="light">
              {site.cta.primary.label}
            </ButtonLink>
            <ButtonLink href="/services" variant="outlineDark">
              Explore services
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
