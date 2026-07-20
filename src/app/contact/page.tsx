import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";
import {
  CheckItem,
  Container,
  Eyebrow,
} from "@/components/ui/primitives";
import { ContactForm } from "@/components/contact-form";

export const metadata = pageMetadata({
  title: "Contact One Circle Solutions",
  description:
    "Book a security consultation with One Circle Solutions. Every conversation ends with a written findings brief — no obligation.",
  path: "/contact",
  absoluteTitle: true,
});

const expectations = [
  "A reply from a practitioner (not a sales sequence) within one business day",
  "A 30-minute conversation about your environment, obligations, and gaps",
  "A written findings brief with pragmatic next steps — yours either way",
  "A clear scope and price if there's a fit; a straight answer if there isn't",
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-brand-50 to-white py-20 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
                Start the conversation
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Tell us where you are — tooling with no coverage, a compliance
                deadline, a recent scare, or growth outpacing security. We&apos;ll
                tell you the smallest engagement that actually moves your risk.
              </p>
              <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.15em] text-slate-500">
                What to expect
              </h2>
              <ul className="mt-5 space-y-3.5">
                {expectations.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
              <p className="mt-10 text-sm text-slate-500">
                Prefer email?{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="font-semibold text-brand-700 hover:text-brand-500"
                >
                  {site.email}
                </a>
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-lg shadow-brand-500/5 sm:p-9">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
