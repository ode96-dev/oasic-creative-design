import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "OASIC — Visionary Design & Creative Agency",
  description:
    "Oasic is a visionary design agency that breathes life into ideas and transforms them into extraordinary realities.",
  openGraph: {
    title: "OASIC — Visionary Design & Creative Agency",
    description:
      "Oasic is a visionary design agency that breathes life into ideas and transforms them into extraordinary realities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OASIC — Visionary Design & Creative Agency",
    description:
      "Oasic is a visionary design agency that breathes life into ideas and transforms them into extraordinary realities.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className="font-sans antialiased bg-[#F7F6F2] text-[#111111] selection:bg-[#FF3E1D] selection:text-white"
        suppressHydrationWarning
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
