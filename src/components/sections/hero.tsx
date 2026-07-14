import { site } from "@/content/site";
import { ButtonLink, Container, Eyebrow } from "@/components/ui/primitives";
import { Icon } from "@/components/ui/icons";

const heroSignals = [
  { label: "Critical alert · triaged", detail: "Analyst assigned in 4m" },
  { label: "Suspicious sign-in · contained", detail: "Session revoked, MFA reset" },
  { label: "Exposed service · remediated", detail: "Ticketed and verified closed" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Subtle grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(30 41 59 / 0.6) 1px, transparent 1px), linear-gradient(to bottom, rgb(30 41 59 / 0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
        aria-hidden="true"
      />
      <Container className="relative py-24 sm:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow tone="dark">Managed Security Services</Eyebrow>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              Around-the-clock security operations for teams who can&apos;t
              afford blind spots
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              One Circle Solutions runs your detection, response, and
              compliance program as a single operation — senior analysts on
              your environment 24/7, response agreed before it&apos;s needed,
              and reporting your board can read.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <ButtonLink href={site.cta.primary.href}>
                {site.cta.primary.label}
              </ButtonLink>
              <ButtonLink href={site.cta.secondary.href} variant="outlineDark">
                {site.cta.secondary.label}
              </ButtonLink>
            </div>
            <p className="mt-6 text-sm text-slate-400">
              No obligation. Every consultation ends with a written findings
              brief — yours to keep either way.
            </p>
          </div>

          {/* Ops panel visual */}
          <div className="hidden lg:block" aria-hidden="true">
            <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 shadow-2xl shadow-brand-500/5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-sm font-medium text-slate-200">
                  <Icon name="shield" className="h-4.5 w-4.5 text-brand-400" />
                  Security operations · live
                </div>
                <span className="flex items-center gap-1.5 rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                  All systems monitored
                </span>
              </div>
              <ul className="divide-y divide-slate-800/80">
                {heroSignals.map((s) => (
                  <li key={s.label} className="flex items-start gap-3 py-4">
                    <Icon name="check" className="mt-0.5 h-4 w-4 text-brand-400" />
                    <div>
                      <p className="text-sm font-medium text-slate-100">{s.label}</p>
                      <p className="mt-0.5 text-xs text-slate-400">{s.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-1 grid grid-cols-3 gap-3 border-t border-slate-800 pt-4">
                {[
                  ["Coverage", "24/7"],
                  ["Triage median", "15 min"],
                  ["Escalations", "1 path"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-lg bg-slate-950/60 px-3 py-2.5">
                    <p className="text-[11px] uppercase tracking-wide text-slate-500">{k}</p>
                    <p className="mt-0.5 text-sm font-semibold text-white">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
