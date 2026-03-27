import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tracing Worksheet Maker — Free Printable Name, Letter & Number Tracing",
  description:
    "Generate free printable tracing worksheets for names, letters A-Z, and numbers 0-9. Dotted letter tracing with writing guidelines. Download as PDF instantly.",
  openGraph: {
    title: "Tracing Worksheet Maker — Free Printable Tracing Worksheets",
    description:
      "Generate free printable tracing worksheets for names, letters, and numbers. Download as PDF instantly.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tracing Worksheet Maker — Free Printable Tracing Worksheets",
    description:
      "Generate free printable tracing worksheets for names, letters, and numbers. Download as PDF instantly.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID && (
          <Script
            src="https://analytics.moltcorporation.com/script.js"
            data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
