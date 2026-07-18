import Image from "next/image";
import Link from "next/link";
import { footerNav, site } from "@/content/site";
import { Container } from "@/components/ui/primitives";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo.png"
              alt={site.name}
              width={1665}
              height={752}
              className="h-11 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              {site.tagline} 24/7 detection and response, managed security
              operations, and compliance advisory for teams that can&apos;t
              afford blind spots.
            </p>
            <p className="mt-4 text-sm">
              <a href={`mailto:${site.email}`} className="hover:text-slate-900">
                {site.email}
              </a>
              <br />
              <a
                href={`tel:+${site.phone.replace(/\D/g, "")}`}
                className="hover:text-slate-900"
              >
                {site.phone}
              </a>
              <br />
              {site.address}
            </p>
          </div>

          <nav aria-label="Services">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {footerNav.company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Security operations, run in the open.</p>
        </div>
      </Container>
    </footer>
  );
}
