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

/* Pencil SVG icon */
function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect x="8" y="36" width="32" height="4" rx="2" fill="#FBBF24" opacity="0.3" />
      <path d="M12 34L34 8l4 4L16 38H12v-4z" fill="#FBBF24" stroke="#92400E" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M34 8l4 4 2-2-4-4-2 2z" fill="#F59E0B" stroke="#92400E" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 34l1.5-5.5L16 38H12v-4z" fill="#FDE68A" stroke="#92400E" strokeWidth="1" />
    </svg>
  );
}

/* Notebook SVG icon */
function NotebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect x="10" y="6" width="28" height="36" rx="3" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
      <line x1="16" y1="6" x2="16" y2="42" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3 2" />
      <line x1="20" y1="16" x2="34" y2="16" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="20" y1="22" x2="34" y2="22" stroke="#D1D5DB" strokeWidth="1" />
      <line x1="20" y1="28" x2="30" y2="28" stroke="#D1D5DB" strokeWidth="1" />
      <circle cx="13" cy="12" r="1.5" fill="#EF4444" />
      <circle cx="13" cy="20" r="1.5" fill="#EF4444" />
      <circle cx="13" cy="28" r="1.5" fill="#EF4444" />
    </svg>
  );
}

/* Star SVG icon */
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <path d="M24 6l5.5 11.5L42 19l-9 8.5L35 40 24 34l-11 6 2-12.5-9-8.5 12.5-1.5L24 6z" fill="#FDE68A" stroke="#D97706" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

/* ABC blocks icon */
function ABCIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none">
      <rect x="4" y="20" width="16" height="16" rx="2" fill="#FCA5A5" stroke="#DC2626" strokeWidth="1.2" />
      <text x="12" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#DC2626" fontFamily="sans-serif">A</text>
      <rect x="16" y="12" width="16" height="16" rx="2" fill="#93C5FD" stroke="#2563EB" strokeWidth="1.2" />
      <text x="24" y="24" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#2563EB" fontFamily="sans-serif">B</text>
      <rect x="28" y="20" width="16" height="16" rx="2" fill="#86EFAC" stroke="#16A34A" strokeWidth="1.2" />
      <text x="36" y="32" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#16A34A" fontFamily="sans-serif">C</text>
    </svg>
  );
}

/* Dotted letter preview — simulates what a worksheet looks like */
function WorksheetPreview() {
  return (
    <div className="worksheet-preview mx-auto max-w-sm rounded-xl border-2 border-amber-200 bg-white p-5 shadow-lg rotate-[-1deg]">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2 h-2 rounded-full bg-red-400" />
        <div className="w-2 h-2 rounded-full bg-amber-400" />
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <span className="text-[10px] text-amber-700 ml-auto font-medium tracking-wide">WORKSHEET PREVIEW</span>
      </div>
      {/* Simulated tracing lines */}
      <div className="space-y-3">
        <div className="border-b-2 border-dashed border-gray-200 pb-2">
          <span className="text-2xl font-bold tracking-[0.3em] text-gray-200" style={{ fontFamily: "serif" }}>
            E m m a
          </span>
        </div>
        <div className="border-b-2 border-dashed border-gray-200 pb-2">
          <span className="text-2xl font-bold tracking-[0.3em] text-gray-200" style={{ fontFamily: "serif" }}>
            E m m a
          </span>
        </div>
        <div className="border-b-2 border-dashed border-gray-200 pb-2">
          <span className="text-2xl font-bold tracking-[0.3em] text-gray-150" style={{ fontFamily: "serif", opacity: 0.4 }}>
            E m m a
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3 text-[9px] text-amber-600">
        <span>nametracingmaker.com</span>
        <span>Page 1 of 1</span>
      </div>
    </div>
  );
}

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

      {/* Hero Section — warm, playful, education-focused */}
      <section className="relative overflow-hidden pb-12 pt-10 md:pt-14 md:pb-16">
        {/* Decorative floating shapes */}
        <div className="absolute top-10 left-[8%] w-12 h-12 rounded-full bg-pink-200 opacity-40 blur-sm" />
        <div className="absolute top-24 right-[12%] w-8 h-8 rounded-full bg-sky-200 opacity-50 blur-sm" />
        <div className="absolute bottom-16 left-[15%] w-6 h-6 rounded-full bg-[var(--mint)] opacity-40 blur-sm" />
        <div className="absolute top-16 right-[30%] w-10 h-10 rounded-full bg-amber-200 opacity-30 blur-sm" />

        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left — copy */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 border border-amber-200 px-3 py-1 text-xs font-semibold text-amber-800 mb-4">
                <StarIcon className="w-4 h-4" />
                Loved by parents &amp; teachers
              </div>
              <h1 className="text-3xl md:text-[2.6rem] md:leading-tight font-extrabold text-[#2d2235] mb-4">
                Free Tracing<br />Worksheet Maker
              </h1>
              <p className="text-base md:text-lg text-[#6b5b7b] max-w-md mb-6">
                Create custom printable tracing worksheets for <strong>names</strong>,{" "}
                <strong>letters A-Z</strong>, and <strong>numbers 0-9</strong>.
                Dotted letters with writing guides — download as PDF instantly.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 text-xs font-medium mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1.5 text-green-800">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  100% Free
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-50 border border-purple-200 px-3 py-1.5 text-purple-800">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  No Sign-up
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3 py-1.5 text-amber-800">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Instant PDF
                </span>
              </div>
              <a
                href="#generator"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white font-bold px-6 py-3 text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
              >
                <PencilIcon className="w-5 h-5" />
                Start Creating Worksheets
              </a>
            </div>

            {/* Right — worksheet preview */}
            <div className="hidden md:block">
              <WorksheetPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="generator" className="py-8">
        <TracingWorksheet />
      </section>

      {/* Worksheet Types — with custom icons */}
      <section className="py-12" style={{ background: "#fffbf7" }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-[#2d2235] text-center mb-2">
            Tracing Worksheets for Every Learning Need
          </h2>
          <p className="text-sm text-[#9889a8] text-center mb-8">
            Pick a worksheet type and start creating in seconds
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/name-tracing"
              className="group block rounded-2xl border-2 border-[#e9ddf5] bg-white p-6 text-center hover:border-[#7c3aed] hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PencilIcon className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-[#2d2235] text-lg">
                Name Tracing
              </h3>
              <p className="text-sm text-[#6b5b7b] mt-2">
                Type any name and generate a custom tracing worksheet with dotted
                letters and writing guides.
              </p>
              <span className="inline-block mt-3 text-[#7c3aed] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Create name worksheets &rarr;
              </span>
            </Link>
            <Link
              href="/letter-tracing"
              className="group block rounded-2xl border-2 border-[#e9ddf5] bg-white p-6 text-center hover:border-[#7c3aed] hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ABCIcon className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-[#2d2235] text-lg">
                Letter Tracing
              </h3>
              <p className="text-sm text-[#6b5b7b] mt-2">
                A-Z letter tracing worksheets with stroke guides. Choose specific
                letters or practice the full alphabet.
              </p>
              <span className="inline-block mt-3 text-[#7c3aed] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Create letter worksheets &rarr;
              </span>
            </Link>
            <Link
              href="/number-tracing"
              className="group block rounded-2xl border-2 border-[#e9ddf5] bg-white p-6 text-center hover:border-[#7c3aed] hover:shadow-lg transition-all"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <NotebookIcon className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-[#2d2235] text-lg">
                Number Tracing
              </h3>
              <p className="text-sm text-[#6b5b7b] mt-2">
                Numbers 0-9 tracing worksheets with formation guides. Build
                confidence with number writing practice.
              </p>
              <span className="inline-block mt-3 text-[#7c3aed] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                Create number worksheets &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Parents & Teachers Love It */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-[#2d2235] text-center mb-8">
            Why Parents &amp; Teachers Love Our Worksheets
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-7 h-7 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2d2235] text-sm">
                Instant Generation
              </h3>
              <p className="text-xs text-[#9889a8] mt-1">
                Type, customize, and download in seconds. No waiting.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2d2235] text-sm">
                Print-Ready PDFs
              </h3>
              <p className="text-xs text-[#9889a8] mt-1">
                US Letter size, crisp output that prints beautifully.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-7 h-7 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2d2235] text-sm">
                Fully Customizable
              </h3>
              <p className="text-xs text-[#9889a8] mt-1">
                Adjust letter size, rows, and writing guides to fit any level.
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center mx-auto mb-3 shadow-sm">
                <svg className="w-7 h-7 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-[#2d2235] text-sm">
                Made for Kids
              </h3>
              <p className="text-xs text-[#9889a8] mt-1">
                Designed for ages 3-7 with proper letter formation guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-6 bg-gradient-to-r from-[#7c3aed]/5 via-[#ec4899]/5 to-[#f59e0b]/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-[#6b5b7b]">
            Trusted by <span className="text-[#7c3aed] font-extrabold">thousands</span> of parents, teachers, and homeschoolers to create tracing worksheets every week
          </p>
        </div>
      </section>

      {/* Pricing */}
      <PricingSection />

      {/* FAQ / SEO Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-[#2d2235] text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "How do I print a name tracing worksheet?",
                a: "Type a name in the generator above, customize the layout, and click \"Download PDF.\" Open the PDF and print it on standard US Letter paper. The worksheet is optimized for clear, clean printing.",
              },
              {
                q: "What ages are these worksheets for?",
                a: "Our tracing worksheets are designed for children ages 3-7, including preschool, pre-K, and kindergarten students. The adjustable letter size makes them suitable for different skill levels.",
              },
              {
                q: "Can I create letter tracing worksheets for the whole alphabet?",
                a: "Yes! Switch to \"Letters\" mode and select all 26 letters or choose specific ones your child needs to practice. Each letter gets its own practice row with stroke guides.",
              },
              {
                q: "Are number tracing worksheets included?",
                a: "Absolutely. Switch to \"Numbers\" mode to create tracing worksheets for numbers 0-9. Each number includes formation guides to help children learn proper number writing.",
              },
              {
                q: "Is this really free?",
                a: "Yes, the core worksheet generator is completely free with no account required. Create unlimited name, letter, and number tracing worksheets and download them as PDFs.",
              },
            ].map((faq) => (
              <details key={faq.q} className="group rounded-xl border-2 border-[#e9ddf5] bg-white overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-bold text-[#2d2235] text-sm hover:bg-[#faf5ff] transition-colors">
                  {faq.q}
                  <svg className="w-4 h-4 text-[#9889a8] group-open:rotate-180 transition-transform shrink-0 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-sm text-[#6b5b7b] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* More Teacher Tools */}
      <section className="py-12" style={{ background: "#fffbf7" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-[#2d2235] text-center mb-6">
            More Free Teacher Tools
          </h2>
          <a
            href="https://classroomseatingchartmaker.com"
            className="group block rounded-2xl border-2 border-[#e9ddf5] bg-white p-6 hover:shadow-lg hover:border-[#7c3aed] transition-all"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                <svg
                  className="w-7 h-7 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[#2d2235] text-lg">
                  Classroom Seating Chart Maker
                </h3>
                <p className="text-sm text-[#6b5b7b] mt-1">
                  Create and manage classroom seating charts with drag-and-drop.
                  Arrange desks, assign students, and print layouts — free for
                  teachers.
                </p>
                <span className="inline-block mt-2 text-[#7c3aed] text-sm font-semibold group-hover:translate-x-1 transition-transform">
                  Try it free &rarr;
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#e9ddf5]" style={{ background: "#faf5ff" }}>
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="font-bold text-[#2d2235] mb-2 flex items-center gap-2">
                <PencilIcon className="w-5 h-5" />
                Tracing Worksheet Maker
              </h4>
              <p className="text-[#9889a8]">
                Free printable tracing worksheets for names, letters, and
                numbers. Helping children learn to write.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[#2d2235] mb-2">Worksheets</h4>
              <ul className="space-y-1 text-[#9889a8]">
                <li>
                  <Link href="/name-tracing" className="hover:text-[#7c3aed] transition-colors">
                    Name Tracing
                  </Link>
                </li>
                <li>
                  <Link href="/letter-tracing" className="hover:text-[#7c3aed] transition-colors">
                    Letter Tracing
                  </Link>
                </li>
                <li>
                  <Link href="/number-tracing" className="hover:text-[#7c3aed] transition-colors">
                    Number Tracing
                  </Link>
                </li>
                <li>
                  <Link href="/letter-tracing-worksheets" className="hover:text-[#7c3aed] transition-colors">
                    Letter Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link href="/alphabet-tracing-worksheets" className="hover:text-[#7c3aed] transition-colors">
                    Alphabet Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link href="/number-tracing-worksheets" className="hover:text-[#7c3aed] transition-colors">
                    Number Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link href="/cursive-name-tracing" className="hover:text-[#7c3aed] transition-colors">
                    Cursive Name Tracing
                  </Link>
                </li>
                <li>
                  <Link href="/preschool-tracing-worksheets" className="hover:text-[#7c3aed] transition-colors">
                    Preschool Tracing Worksheets
                  </Link>
                </li>
                <li>
                  <Link href="/sight-word-tracing" className="hover:text-[#7c3aed] transition-colors">
                    Sight Word Tracing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#2d2235] mb-2">Teacher Tools</h4>
              <ul className="space-y-1 text-[#9889a8]">
                <li>
                  <a href="https://classroomseatingchartmaker.com" className="hover:text-[#7c3aed] transition-colors">
                    Seating Chart Maker
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-[#e9ddf5] text-center text-xs text-[#9889a8]">
            <p className="mb-2">
              From the makers of{" "}
              <a
                href="https://classroomseatingchartmaker.com"
                className="text-[#7c3aed] hover:underline transition-colors"
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
