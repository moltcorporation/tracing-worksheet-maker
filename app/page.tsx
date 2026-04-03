import type { Metadata } from "next";
import Link from "next/link";
import TracingWorksheet from "./components/TracingWorksheet";
import PricingSection from "./components/PricingSection";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title:
    "Free Tracing Worksheet Maker — Name, Letter & Number Tracing Generator",
  description:
    "Create free printable tracing worksheets for names, letters A-Z, and numbers 0-9. Dotted letter tracing with writing guidelines. Download as PDF instantly. Perfect for preschool and kindergarten.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Free Tracing Worksheet Maker — Printable Name & Letter Tracing",
    description:
      "Generate free printable tracing worksheets for names, letters, and numbers. Download as PDF instantly.",
    type: "website",
    url: SITE_URL,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Tracing Worksheet Maker — Printable Name & Letter Tracing",
    description:
      "Generate free printable tracing worksheets for names, letters, and numbers. Download as PDF instantly.",
  },
  other: {
    "article:tag": [
      "name tracing",
      "letter tracing",
      "number tracing",
      "printable worksheets",
      "preschool worksheets",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Tracing Worksheet Maker",
  url: "https://nametracingmaker.com",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "0",
    highPrice: "29.99",
    priceCurrency: "USD",
  },
  description:
    "Free online tracing worksheet generator. Create printable name, letter, alphabet, and number tracing worksheets for preschool and kindergarten.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I print a name tracing worksheet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'Type a name in the generator above, customize the layout, and click "Download PDF." Open the PDF and print it on standard US Letter paper. The worksheet is optimized for clear, clean printing.',
      },
    },
    {
      "@type": "Question",
      name: "What ages are these worksheets for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tracing worksheets are designed for children ages 3-7, including preschool, pre-K, and kindergarten students. The adjustable letter size makes them suitable for different skill levels.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create letter tracing worksheets for the whole alphabet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Switch to \"Letters\" mode and select all 26 letters or choose specific ones your child needs to practice. Each letter gets its own practice row with stroke guides.",
      },
    },
    {
      "@type": "Question",
      name: "Are number tracing worksheets included?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Switch to \"Numbers\" mode to create tracing worksheets for numbers 0-9. Each number includes formation guides to help children learn proper number writing.",
      },
    },
    {
      "@type": "Question",
      name: "Is this really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the core worksheet generator is completely free with no account required. Create unlimited name, letter, and number tracing worksheets and download them as PDFs.",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, var(--primary) 0%, transparent 50%), radial-gradient(circle at 80% 80%, var(--pink) 0%, transparent 50%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span
            className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
            style={{
              background: "var(--primary-light)",
              color: "var(--primary)",
            }}
          >
            ✨ Handwriting practice made easy
          </span>
          <h1
            className="text-4xl md:text-5xl font-black mb-4 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Your Free Tracing Worksheet Maker
          </h1>
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            Teachers and parents love our tool. Create custom printable tracing
            worksheets for names, letters, and numbers in seconds. No ads, no
            sign-up needed.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span
              className="px-3 py-1 rounded-full font-medium"
              style={{ background: "var(--sky-light)", color: "var(--sky)" }}
            >
              💯 100% Free
            </span>
            <span
              className="px-3 py-1 rounded-full font-medium"
              style={{ background: "var(--pink-light)", color: "var(--pink)" }}
            >
              🚀 No Sign-up
            </span>
            <span
              className="px-3 py-1 rounded-full font-medium"
              style={{
                background: "var(--primary-light)",
                color: "var(--primary)",
              }}
            >
              📥 Instant PDF
            </span>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="generator" className="py-8">
        <TracingWorksheet />
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-black text-center mb-12 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Choose Your Worksheet Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/name-tracing"
              className="group rounded-2xl p-7 transition-all duration-200 hover:shadow-lg"
              style={{
                background: "rgba(236, 72, 153, 0.08)",
                borderLeft: "4px solid var(--pink)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: "var(--pink-light)" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: "var(--pink)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0V4a2 2 0 11-4 0V4zm6 2a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 11-2 0 1 1 0 012 0zm0 4a1 1 0 11-2 0 1 1 0 012 0zm-6 4a1 1 0 100-2 1 1 0 000 2z"
                  />
                </svg>
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Name Tracing
              </h3>
              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Type any name and generate a personalized tracing worksheet.
                Perfect for helping kids learn to write their own name.
              </p>
              <span
                className="inline-block text-sm font-semibold"
                style={{ color: "var(--pink)" }}
              >
                Get started &rarr;
              </span>
            </Link>

            <Link
              href="/letter-tracing"
              className="group rounded-2xl p-7 transition-all duration-200 hover:shadow-lg"
              style={{
                background: "rgba(56, 189, 248, 0.08)",
                borderLeft: "4px solid var(--sky)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: "var(--sky-light)" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: "var(--sky)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 19h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Letter Tracing
              </h3>
              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                A-Z worksheets with stroke guides. Practice individual letters or
                the whole alphabet. Ideal for all ages and skill levels.
              </p>
              <span
                className="inline-block text-sm font-semibold"
                style={{ color: "var(--sky)" }}
              >
                Get started &rarr;
              </span>
            </Link>

            <Link
              href="/number-tracing"
              className="group rounded-2xl p-7 transition-all duration-200 hover:shadow-lg"
              style={{
                background: "rgba(52, 211, 153, 0.08)",
                borderLeft: "4px solid var(--mint)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: "linear-gradient(135deg, rgba(52, 211, 153, 0.2), rgba(251, 146, 60, 0.2))" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: "var(--mint)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "var(--foreground)" }}
              >
                Number Tracing
              </h3>
              <p
                className="text-sm mb-4 leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Numbers 0-9 with formation guides. Build number recognition and
                writing confidence with structured practice.
              </p>
              <span
                className="inline-block text-sm font-semibold"
                style={{ color: "var(--mint)" }}
              >
                Get started &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="text-3xl font-black text-center mb-12 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Why Teachers & Parents Love This
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              className="p-6 rounded-xl text-center"
              style={{
                background: "rgba(124, 58, 237, 0.05)",
                border: "1px solid rgba(124, 58, 237, 0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{
                  background: "var(--primary-light)",
                  color: "var(--primary)",
                }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3
                className="font-bold text-sm mb-1"
                style={{ color: "var(--foreground)" }}
              >
                Instant Creation
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Type, customize, download. Done in seconds.
              </p>
            </div>
            <div
              className="p-6 rounded-xl text-center"
              style={{
                background: "rgba(236, 72, 153, 0.05)",
                border: "1px solid rgba(236, 72, 153, 0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "var(--pink-light)", color: "var(--pink)" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3
                className="font-bold text-sm mb-1"
                style={{ color: "var(--foreground)" }}
              >
                Print-Ready PDFs
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                High-quality output, perfect for printing.
              </p>
            </div>
            <div
              className="p-6 rounded-xl text-center"
              style={{
                background: "rgba(56, 189, 248, 0.05)",
                border: "1px solid rgba(56, 189, 248, 0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "var(--sky-light)", color: "var(--sky)" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3
                className="font-bold text-sm mb-1"
                style={{ color: "var(--foreground)" }}
              >
                Fully Customizable
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Adjust size, rows, and writing guides.
              </p>
            </div>
            <div
              className="p-6 rounded-xl text-center"
              style={{
                background: "rgba(251, 146, 60, 0.05)",
                border: "1px solid rgba(251, 146, 60, 0.1)",
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                style={{ background: "linear-gradient(135deg, var(--peach), var(--mint))", color: "white" }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13.876 4.314a2 2 0 00-3.752 0l-.5 1.5a2 2 0 01-1.898 1.384H6.75a2 2 0 00-2 2.121l.159 1.906a2 2 0 01-1.987 2.16H3a2 2 0 00-1.983 2.25l.221 2.653a2 2 0 001.967 1.75h1.923a2 2 0 001.983-2.25l-.221-2.653a2 2 0 01-.08-.813v-.023a2 2 0 01.016-.216l.159-1.906H8.75a2 2 0 001.898-1.384l.5-1.5zM3 23a1 1 0 011-1h8a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1v-1zm8-3H3v2h8v-2z" />
                </svg>
              </div>
              <h3
                className="font-bold text-sm mb-1"
                style={{ color: "var(--foreground)" }}
              >
                Completely Free
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                No account, no paywall, no limitations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ / SEO Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-black text-center mb-12 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Questions? We've Got Answers
          </h2>
          <div className="space-y-6">
            <div
              className="p-5 rounded-xl"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="font-bold text-sm mb-2"
                style={{ color: "var(--foreground)" }}
              >
                🎨 How do I print a name tracing worksheet?
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Type a name, customize the layout, and click "Download PDF." Open
                the PDF and print on US Letter paper. Optimized for crystal-clear
                printing.
              </p>
            </div>
            <div
              className="p-5 rounded-xl"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="font-bold text-sm mb-2"
                style={{ color: "var(--foreground)" }}
              >
                👧 What ages are these worksheets for?
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Designed for ages 3-7 (preschool, pre-K, kindergarten). Adjustable
                letter sizes work for all skill levels, from early writers to
                advanced.
              </p>
            </div>
            <div
              className="p-5 rounded-xl"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="font-bold text-sm mb-2"
                style={{ color: "var(--foreground)" }}
              >
                🔤 Can I create letter worksheets for the whole alphabet?
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Yes! Switch to "Letters" mode and choose specific letters or all
                26. Each letter includes stroke guides to teach proper formation.
              </p>
            </div>
            <div
              className="p-5 rounded-xl"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="font-bold text-sm mb-2"
                style={{ color: "var(--foreground)" }}
              >
                🔢 Are number worksheets included?
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                Absolutely. "Numbers" mode creates worksheets for 0-9 with
                formation guides. Great for building number recognition and
                writing.
              </p>
            </div>
            <div
              className="p-5 rounded-xl"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <h3
                className="font-bold text-sm mb-2"
                style={{ color: "var(--foreground)" }}
              >
                ✨ Is this really free?
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                100% free. Create unlimited worksheets, no sign-up, no ads, no
                account required. Just pure worksheet-making goodness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Teacher Tools */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2
            className="text-3xl font-black text-center mb-8 leading-tight"
            style={{ color: "var(--foreground)" }}
          >
            Part of Our Teacher Toolkit
          </h2>
          <a
            href="https://classroomseatingchartmaker.com"
            className="block rounded-xl p-6 hover:shadow-xl transition-all group"
            style={{
              border: "2px solid var(--border)",
              background: "rgba(124, 58, 237, 0.02)",
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                style={{
                  background: "var(--primary-light)",
                  color: "var(--primary)",
                }}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17V7m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 0V7a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2m0 0V7a2 2 0 00-2-2H9a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "var(--foreground)" }}
                >
                  Classroom Seating Chart Maker
                </h3>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--muted)" }}
                >
                  The #2 tool teachers use. Create seating charts with drag-and-drop,
                  assign students, print instantly. Free for all teachers.
                </p>
                <span
                  className="inline-block text-sm font-semibold group-hover:translate-x-1 transition-transform"
                  style={{ color: "var(--primary)" }}
                >
                  Try it free &rarr;
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t"
        style={{
          borderColor: "var(--border)",
          background: "var(--surface)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm mb-8">
            <div>
              <h4
                className="font-bold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Tracing Worksheet Maker
              </h4>
              <p style={{ color: "var(--muted)" }}>
                Free worksheets for names, letters, and numbers. Helping children
                learn to write since 2024.
              </p>
            </div>
            <div>
              <h4
                className="font-bold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                Worksheet Types
              </h4>
              <ul className="space-y-2" style={{ color: "var(--muted)" }}>
                <li>
                  <Link
                    href="/name-tracing"
                    className="hover:font-semibold transition-all"
                    style={{ color: "var(--primary)" }}
                  >
                    Name Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/letter-tracing"
                    className="hover:font-semibold transition-all"
                    style={{ color: "var(--primary)" }}
                  >
                    Letter Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/number-tracing"
                    className="hover:font-semibold transition-all"
                    style={{ color: "var(--primary)" }}
                  >
                    Number Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/alphabet-tracing-worksheets"
                    className="hover:font-semibold transition-all"
                    style={{ color: "var(--primary)" }}
                  >
                    Alphabet Worksheets
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4
                className="font-bold mb-3"
                style={{ color: "var(--foreground)" }}
              >
                More Teacher Tools
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://classroomseatingchartmaker.com"
                    className="hover:font-semibold transition-all"
                    style={{ color: "var(--primary)" }}
                  >
                    Seating Chart Maker
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="pt-6 border-t text-center text-xs"
            style={{
              borderColor: "var(--border)",
              color: "var(--muted-light)",
            }}
          >
            <p className="mb-1">
              From the makers of{" "}
              <a
                href="https://classroomseatingchartmaker.com"
                className="font-semibold hover:underline"
                style={{ color: "var(--primary)" }}
              >
                Classroom Seating Chart Maker
              </a>
            </p>
            <p>
              &copy; {new Date().getFullYear()} Tracing Worksheet Maker. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
