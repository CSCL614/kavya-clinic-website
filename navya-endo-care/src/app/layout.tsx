import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageTransition } from "@/components/PageTransition";
import { CursorGlow } from "@/components/BackgroundEffects";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Dr. Navya's Endo Care | Premium Endocrinology Clinic",
    template: "%s | Dr. Navya's Endo Care",
  },
  description:
    "World-class endocrinology care by Dr. Navya — diabetes, thyroid, PCOD, hormone therapy, and metabolic wellness. Book your appointment in Hyderabad today.",
  keywords:
    "endocrinologist hyderabad, diabetes specialist, thyroid doctor, PCOD treatment, hormone therapy, Navya Endo Care",
  openGraph: {
    title: "Dr. Navya's Endo Care | Premium Endocrinology",
    description: "Expert endocrinology care with cutting-edge diagnostics.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ position: "relative" }}>
        <ThemeProvider>
          {/* ── Global ambient effects ─────────────────── */}
          <CursorGlow />

          <SmoothScroll>
            <Navbar />
            <main className="page-wrapper">
              <PageTransition>{children}</PageTransition>
            </main>
            <Footer />
            <WhatsAppButton />
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
