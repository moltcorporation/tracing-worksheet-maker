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
    highPrice: "39",
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
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Tracing Worksheet Maker
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Create custom printable tracing worksheets for names, letters A-Z,
            and numbers 0-9. Dotted letters with writing guides — download as
            PDF instantly.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500">
            <span className="bg-white border border-gray-200 rounded-full px-3 py-1">
              100% Free
            </span>
            <span className="bg-white border border-gray-200 rounded-full px-3 py-1">
              No Sign-up Required
            </span>
            <span className="bg-white border border-gray-200 rounded-full px-3 py-1">
              Instant PDF Download
            </span>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="generator" className="py-8">
        <TracingWorksheet />
      </section>

      {/* Use Cases */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Tracing Worksheets for Every Learning Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link
              href="/name-tracing"
              className="block bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">&#9997;</div>
              <h3 className="font-semibold text-gray-800 text-lg">
                Name Tracing
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Type any name and generate a custom tracing worksheet with dotted
                letters and writing guides. Perfect for helping children learn to
                write their name.
              </p>
              <span className="inline-block mt-3 text-blue-600 text-sm font-medium">
                Create name worksheets &rarr;
              </span>
            </Link>
            <Link
              href="/letter-tracing"
              className="block bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">&#127312;</div>
              <h3 className="font-semibold text-gray-800 text-lg">
                Letter Tracing
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                A-Z letter tracing worksheets with stroke guides. Choose specific
                letters or practice the full alphabet. Great for preschool and
                kindergarten.
              </p>
              <span className="inline-block mt-3 text-blue-600 text-sm font-medium">
                Create letter worksheets &rarr;
              </span>
            </Link>
            <Link
              href="/number-tracing"
              className="block bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">&#128290;</div>
              <h3 className="font-semibold text-gray-800 text-lg">
                Number Tracing
              </h3>
              <p className="text-sm text-gray-500 mt-2">
                Numbers 0-9 tracing worksheets with formation guides. Build
                confidence with number writing practice for early learners.
              </p>
              <span className="inline-block mt-3 text-blue-600 text-sm font-medium">
                Create number worksheets &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Teachers and Parents Love Our Worksheets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Instant Generation
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Type, customize, and download. No waiting.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Print-Ready PDFs
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                US Letter size, high-quality output for clear printing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Fully Customizable
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Adjust letter size, rows, and writing guides.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm">
                Completely Free
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                No account, no paywall. Just worksheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ / SEO Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800">
                How do I print a name tracing worksheet?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Type a name in the generator above, customize the layout, and
                click &quot;Download PDF.&quot; Open the PDF and print it on
                standard US Letter paper. The worksheet is optimized for clear,
                clean printing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                What ages are these worksheets for?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Our tracing worksheets are designed for children ages 3-7,
                including preschool, pre-K, and kindergarten students. The
                adjustable letter size makes them suitable for different skill
                levels.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Can I create letter tracing worksheets for the whole alphabet?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Yes! Switch to &quot;Letters&quot; mode and select all 26 letters
                or choose specific ones your child needs to practice. Each letter
                gets its own practice row with stroke guides.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Are number tracing worksheets included?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Absolutely. Switch to &quot;Numbers&quot; mode to create tracing
                worksheets for numbers 0-9. Each number includes formation guides
                to help children learn proper number writing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Is this really free?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Yes, the core worksheet generator is completely free with no
                account required. Create unlimited name, letter, and number
                tracing worksheets and download them as PDFs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Teacher Tools */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            More Free Teacher Tools
          </h2>
          <a
            href="https://classroomseatingchartmaker.com"
            className="block border border-gray-200 rounded-xl p-6 hover:shadow-md hover:border-blue-200 transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  Classroom Seating Chart Maker
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Create and manage classroom seating charts with drag-and-drop.
                  Arrange desks, assign students, and print layouts — free for
                  teachers.
                </p>
                <span className="inline-block mt-2 text-indigo-600 text-sm font-medium">
                  Try it free &rarr;
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Tracing Worksheet Maker
              </h4>
              <p className="text-gray-500">
                Free printable tracing worksheets for names, letters, and
                numbers. Helping children learn to write.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Worksheets</h4>
              <ul className="space-y-1 text-gray-500">
                <li>
                  <Link
                    href="/name-tracing"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Name Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/letter-tracing"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Letter Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/number-tracing"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Number Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/letter-tracing-worksheets"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Letter Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/alphabet-tracing-worksheets"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Alphabet Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/number-tracing-worksheets"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Number Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cursive-name-tracing"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Cursive Name Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/preschool-tracing-worksheets"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Preschool Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sight-word-tracing"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Sight Word Tracing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                Teacher Tools
              </h4>
              <ul className="space-y-1 text-gray-500">
                <li>
                  <a
                    href="https://classroomseatingchartmaker.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Seating Chart Maker
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
            <p className="mb-2">
              From the makers of{" "}
              <a
                href="https://classroomseatingchartmaker.com"
                className="text-blue-500 hover:text-blue-600 transition-colors"
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
