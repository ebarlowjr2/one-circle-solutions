import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { site } from "@/content/site";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  // Only the weights actually used (regular/medium/semibold) — keeps font
  // payload down. Add "700" back if font-bold is ever introduced.
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Base for canonical URLs, OG URLs, and sitemap — always the production
  // domain (see src/content/site.ts), never a Vercel preview URL.
  metadataBase: new URL(site.url),
  title: {
    default: `Managed Security Services & MSSP | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: `Managed Security Services & MSSP | ${site.name}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/logo.png", width: 1665, height: 752 }],
  },
  // TODO before launch, if desired:
  // verification: { google: "<Search Console verification token>" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        {/* TODO before launch, if desired: add GA4 via @next/third-parties
            (<GoogleAnalytics gaId="G-XXXXXXX" />) and update /legal/privacy. */}
      </body>
    </html>
  );
}
