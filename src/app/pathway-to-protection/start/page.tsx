import type { Metadata } from "next";
import Link from "next/link";
import { promo } from "@/content/promo";
import { site } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icons";
import { PathwayForm } from "@/components/pathway-form";

// Reachable only via the promo's "Get on the Pathway" buttons — noindex and
// intentionally left out of the sitemap, nav, and footer.
export const metadata: Metadata = {
  title: { absolute: "Get Started — Pathway to Protection" },
  description:
    "Start your Pathway to Protection — tell us how many systems you're protecting and we'll follow up with setup and a quote.",
  robots: { index: false, follow: false },
};

export default function PathwayStartPage() {
  return (
    <section className="bg-gradient-to-b from-brand-50 to-white py-16 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow>{promo.name}</Eyebrow>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
              Get on the Pathway
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              You&apos;re one short form from enterprise-grade protection. Tell
              us a little about your environment and we&apos;ll set you up and
              send a quote — {promo.priceLabel} {promo.priceUnit}.
            </p>

            <div className="mt-8 rounded-xl border border-brand-100 bg-brand-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-700">
                {promo.windowLabel} · {promo.priceLabel} {promo.priceUnit}
              </p>
              <ul className="mt-4 space-y-2.5">
                {promo.launchOffer.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Prefer email?{" "}
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Pathway to Protection")}`}
                className="font-semibold text-brand-700 hover:text-brand-500"
              >
                {site.email}
              </a>
              {" · "}
              <Link href={`/${promo.slug}`} className="font-semibold text-brand-700 hover:text-brand-500">
                Back to the offer
              </Link>
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-lg shadow-brand-500/5 sm:p-9">
            <PathwayForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
