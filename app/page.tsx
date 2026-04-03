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

// Placeholder counter — can be seeded/incremented based on actual usage
const WORKSHEETS_CREATED = 8742;

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Hero Section — Warm, Inviting Design */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Create Beautiful Tracing Worksheets
              </h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Make custom printable tracing worksheets for names, letters, and numbers in seconds. Perfect for parents and teachers helping kids learn to write.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <span className="bg-white border-2 border-orange-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  ✨ 100% Free
                </span>
                <span className="bg-white border-2 border-green-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  💾 Download Instantly
                </span>
                <span className="bg-white border-2 border-pink-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700">
                  🎨 Fully Customizable
                </span>
              </div>
              {/* Worksheets Created Counter */}
              <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 inline-block">
                <div className="text-sm text-gray-600 mb-1">Worksheets Created</div>
                <div className="text-3xl font-bold text-purple-600">{WORKSHEETS_CREATED.toLocaleString()}+</div>
              </div>
            </div>
            {/* Hero Visual — Worksheet Example Preview */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-yellow-300">
                <div className="text-center">
                  <div className="mb-4 text-sm font-semibold text-gray-700">Instant Preview</div>
                  <svg className="w-full h-auto" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
                    {/* Paper background */}
                    <rect width="300" height="400" fill="white" stroke="#ddd" strokeWidth="1"/>

                    {/* Title */}
                    <text x="150" y="30" fontSize="16" fontWeight="bold" textAnchor="middle" fill="#333">
                      Name Tracing
                    </text>

                    {/* Example tracing line 1 */}
                    <line x1="20" y1="70" x2="280" y2="70" stroke="#e0e0e0" strokeWidth="1"/>
                    <text x="20" y="85" fontSize="32" fontFamily="cursive" fontWeight="bold" fill="#fb923c" opacity="0.4">
                      Sarah
                    </text>
                    <line x1="20" y1="100" x2="280" y2="100" stroke="#e0e0e0" strokeWidth="1"/>

                    {/* Dotted letters */}
                    <text x="20" y="130" fontSize="28" fontFamily="monospace" fill="#fb923c" letterSpacing="8">
                      • • • • •
                    </text>
                    <line x1="20" y1="145" x2="280" y2="145" stroke="#e0e0e0" strokeWidth="1"/>

                    {/* Example tracing line 2 */}
                    <line x1="20" y1="185" x2="280" y2="185" stroke="#e0e0e0" strokeWidth="1"/>
                    <text x="20" y="200" fontSize="32" fontFamily="cursive" fontWeight="bold" fill="#34d399" opacity="0.4">
                      Emily
                    </text>
                    <line x1="20" y1="215" x2="280" y2="215" stroke="#e0e0e0" strokeWidth="1"/>

                    {/* Dotted letters */}
                    <text x="20" y="245" fontSize="28" fontFamily="monospace" fill="#34d399" letterSpacing="8">
                      • • • • •
                    </text>
                    <line x1="20" y1="260" x2="280" y2="260" stroke="#e0e0e0" strokeWidth="1"/>

                    {/* Example line 3 */}
                    <line x1="20" y1="300" x2="280" y2="300" stroke="#e0e0e0" strokeWidth="1"/>
                    <text x="20" y="315" fontSize="32" fontFamily="cursive" fontWeight="bold" fill="#7c3aed" opacity="0.4">
                      James
                    </text>
                    <line x1="20" y1="330" x2="280" y2="330" stroke="#e0e0e0" strokeWidth="1"/>
                  </svg>
                </div>
              </div>
              {/* Decorative pencil icon */}
              <div className="absolute -top-4 -right-4 bg-orange-400 rounded-full p-3 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/>
                  <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="generator" className="py-8">
        <TracingWorksheet />
      </section>

      {/* Use Cases — Playful Hand-Drawn Icons */}
      <section className="py-16 bg-gradient-to-b from-white to-mint-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Worksheets for Every Learning Need
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Whether it's names, letters, or numbers — create custom worksheets in seconds
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Name Tracing Card */}
            <Link
              href="/name-tracing"
              className="group block bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 text-center hover:shadow-xl hover:border-orange-300 transition-all transform hover:-translate-y-2"
            >
              {/* Hand-drawn pencil icon */}
              <div className="w-16 h-16 bg-orange-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"/>
                  <path d="M20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                Name Tracing
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Type any name and instantly create a custom worksheet with dotted letters and writing guides.
              </p>
              <span className="inline-block text-orange-600 text-sm font-bold group-hover:translate-x-1 transition-transform">
                Create name worksheets →
              </span>
            </Link>

            {/* Letter Tracing Card */}
            <Link
              href="/letter-tracing"
              className="group block bg-gradient-to-br from-green-50 to-mint-100 border-2 border-green-300 rounded-2xl p-8 text-center hover:shadow-xl hover:border-green-400 transition-all transform hover:-translate-y-2"
            >
              {/* Hand-drawn letter icon */}
              <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                Letter Tracing
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                A-Z letter worksheets with stroke guides. Choose specific letters or practice the full alphabet.
              </p>
              <span className="inline-block text-green-700 text-sm font-bold group-hover:translate-x-1 transition-transform">
                Create letter worksheets →
              </span>
            </Link>

            {/* Number Tracing Card */}
            <Link
              href="/number-tracing"
              className="group block bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 rounded-2xl p-8 text-center hover:shadow-xl hover:border-purple-400 transition-all transform hover:-translate-y-2"
            >
              {/* Hand-drawn numbers icon */}
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-purple-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">
                Number Tracing
              </h3>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                Numbers 0-9 worksheets with formation guides. Build confidence with number writing practice.
              </p>
              <span className="inline-block text-purple-700 text-sm font-bold group-hover:translate-x-1 transition-transform">
                Create number worksheets →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features — Playful, Teacher-Centric */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
            Why Teachers & Parents Love It
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Built by educators, for educators — everything you need to make learning fun
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1: Instant */}
            <div className="text-center p-6 bg-yellow-50 rounded-2xl border-2 border-yellow-200">
              <div className="w-14 h-14 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Lightning Fast
              </h3>
              <p className="text-sm text-gray-700">
                Type a name and get a ready-to-print worksheet in seconds.
              </p>
            </div>

            {/* Feature 2: Print-Ready */}
            <div className="text-center p-6 bg-green-50 rounded-2xl border-2 border-green-200">
              <div className="w-14 h-14 bg-green-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🖨️
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Print-Ready PDFs
              </h3>
              <p className="text-sm text-gray-700">
                High-quality output optimized for crisp, clear printing.
              </p>
            </div>

            {/* Feature 3: Customize */}
            <div className="text-center p-6 bg-purple-50 rounded-2xl border-2 border-purple-200">
              <div className="w-14 h-14 bg-purple-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🎨
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Fully Customizable
              </h3>
              <p className="text-sm text-gray-700">
                Adjust size, rows, and spacing to match your lesson plan.
              </p>
            </div>

            {/* Feature 4: Free */}
            <div className="text-center p-6 bg-pink-50 rounded-2xl border-2 border-pink-200">
              <div className="w-14 h-14 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                💝
              </div>
              <h3 className="font-bold text-gray-900 mb-2">
                Always Free
              </h3>
              <p className="text-sm text-gray-700">
                No signup required. Create unlimited worksheets at no cost.
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
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
            More Free Teacher Tools
          </h2>
          <a
            href="https://classroomseatingchartmaker.com"
            className="block bg-white border-3 border-purple-300 rounded-2xl p-8 hover:shadow-xl hover:border-purple-400 transition-all transform hover:-translate-y-2"
          >
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-200 rounded-full flex items-center justify-center flex-shrink-0 text-2xl">
                🪑
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-xl">
                  Classroom Seating Chart Maker
                </h3>
                <p className="text-base text-gray-700 mt-2 leading-relaxed">
                  Create and manage classroom seating charts with drag-and-drop. Arrange desks, assign students, and print layouts — all free for teachers.
                </p>
                <span className="inline-block mt-3 text-purple-600 text-sm font-bold hover:translate-x-1 transition-transform">
                  Try it free →
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-xl mb-3">
                Tracing Worksheet Maker
              </h4>
              <p className="text-gray-300">
                Free printable tracing worksheets for names, letters, and numbers. Helping children learn to write.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Worksheets</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <Link
                    href="/name-tracing"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Name Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/letter-tracing"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Letter Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/number-tracing"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Number Tracing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/letter-tracing-worksheets"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Letter Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link
                    href="/cursive-name-tracing"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Cursive Name Tracing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-3">Teacher Tools</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>
                  <a
                    href="https://classroomseatingchartmaker.com"
                    className="hover:text-yellow-400 transition-colors"
                  >
                    Seating Chart Maker
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p className="mb-2">
              From the makers of{" "}
              <a
                href="https://classroomseatingchartmaker.com"
                className="text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                Classroom Seating Chart Maker
              </a>
            </p>
            <p>
              &copy; {new Date().getFullYear()} Tracing Worksheet Maker. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
