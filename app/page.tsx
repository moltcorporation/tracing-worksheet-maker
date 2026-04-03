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
function StarIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 48 48" fill="none">
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

      {/* Hero Section — vibrant, playful, education-focused */}
      <section className="relative overflow-hidden pb-16 pt-12 md:pt-20 md:pb-20" style={{ background: "linear-gradient(135deg, #fef3f0 0%, #f0f9ff 50%, #fef3c7 100%)" }}>
        {/* Decorative floating shapes with more vibrant colors */}
        <div className="absolute top-8 left-[5%] w-16 h-16 rounded-full bg-gradient-to-br from-pink-300 to-rose-200 opacity-50 blur-md animate-bounce" style={{ animationDuration: "4s" }} />
        <div className="absolute top-32 right-[10%] w-12 h-12 rounded-full bg-gradient-to-br from-cyan-300 to-blue-300 opacity-60 blur-md animate-bounce" style={{ animationDuration: "5s", animationDelay: "0.5s" }} />
        <div className="absolute bottom-20 left-[10%] w-14 h-14 rounded-full bg-gradient-to-br from-yellow-300 to-amber-300 opacity-50 blur-md" style={{ animation: "float 6s ease-in-out infinite" }} />
        <div className="absolute top-20 right-[25%] w-10 h-10 rounded-full bg-gradient-to-br from-teal-300 to-green-300 opacity-40 blur-md animate-bounce" style={{ animationDuration: "6s", animationDelay: "1s" }} />

        {/* Animated background pattern */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
        `}</style>

        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left — copy with stronger visual hierarchy */}
            <div className="text-center md:text-left order-2 md:order-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-300 px-4 py-2 text-xs font-bold text-yellow-900 mb-5">
                <StarIcon className="w-4 h-4 animate-spin" style={{ animationDuration: "3s" }} />
                Loved by 1000s of parents &amp; teachers
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 mb-5 leading-tight">
                Free Tracing<br />Worksheets for<br />Kids
              </h1>
              <p className="text-base md:text-lg text-gray-700 max-w-lg mb-7 leading-relaxed font-medium">
                Create custom printable tracing worksheets in seconds. Perfect for <strong className="text-pink-600">names</strong>, <strong className="text-purple-600">letters A-Z</strong>, and <strong className="text-blue-600">numbers 0-9</strong>. Dotted letters with writing guides — download as PDF instantly.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-xs font-bold mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-400 px-4 py-2 text-green-900">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  100% Free
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-400 px-4 py-2 text-purple-900">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  No Sign-up
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border-2 border-blue-400 px-4 py-2 text-blue-900">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  Instant PDF
                </span>
              </div>
              <a
                href="#generator"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-black px-7 py-4 text-base shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200 hover:-translate-y-1"
              >
                <PencilIcon className="w-6 h-6" />
                Start Creating Worksheets Now
              </a>
            </div>

            {/* Right — enhanced worksheet preview */}
            <div className="hidden md:flex justify-center order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 rounded-3xl blur-2xl opacity-30" />
                <div className="relative">
                  <WorksheetPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tool Section */}
      <section id="generator" className="py-8">
        <TracingWorksheet />
      </section>

      {/* Worksheet Types — with vibrant, distinctive cards */}
      <section className="py-16" style={{ background: "linear-gradient(to bottom, #ffffff, #faf5ff)" }}>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 mb-3">
            Choose Your Worksheet Type
          </h2>
          <p className="text-base text-gray-600 text-center mb-12 font-medium">
            Pick any type and create unlimited worksheets in seconds
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <Link
              href="/name-tracing"
              className="group relative block rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-3xl border-3 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 p-8 text-center hover:border-yellow-400 transition-colors">
                <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-yellow-200 to-orange-200 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg">
                  <PencilIcon className="w-11 h-11" />
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-2">
                  Name Tracing
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Type any name and create a custom tracing worksheet. Perfect for personalizing practice.
                </p>
                <span className="inline-block text-yellow-700 text-sm font-black group-hover:translate-x-2 transition-transform">
                  Start Now &rarr;
                </span>
              </div>
            </Link>
            <Link
              href="/letter-tracing"
              className="group relative block rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-300 via-pink-300 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-3xl border-3 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 text-center hover:border-purple-400 transition-colors">
                <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg">
                  <ABCIcon className="w-11 h-11" />
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-2">
                  Letter Tracing
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  A-Z letter practice with stroke guides. Full alphabet or pick specific letters.
                </p>
                <span className="inline-block text-purple-700 text-sm font-black group-hover:translate-x-2 transition-transform">
                  Start Now &rarr;
                </span>
              </div>
            </Link>
            <Link
              href="/number-tracing"
              className="group relative block rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-300 via-blue-300 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative rounded-3xl border-3 border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50 p-8 text-center hover:border-blue-400 transition-colors">
                <div className="w-20 h-20 mx-auto mb-5 rounded-3xl bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg">
                  <NotebookIcon className="w-11 h-11" />
                </div>
                <h3 className="font-black text-2xl text-gray-900 mb-2">
                  Number Tracing
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Numbers 0-9 with formation guides. Build number writing confidence.
                </p>
                <span className="inline-block text-blue-700 text-sm font-black group-hover:translate-x-2 transition-transform">
                  Start Now &rarr;
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Parents & Teachers Love It */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 mb-3">
            Why Teachers Love It
          </h2>
          <p className="text-center text-gray-600 mb-12 font-medium">Everything you need to support early learners</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-3xl bg-gradient-to-br from-amber-100 to-amber-50 border-3 border-amber-300 p-6 text-center hover:shadow-xl transition-shadow hover:scale-105 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-300 to-orange-300 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-black text-gray-900 text-base mb-2">
                Instant Generation
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Type, customize, and download in seconds. No complex steps.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-green-100 to-emerald-50 border-3 border-green-300 p-6 text-center hover:shadow-xl transition-shadow hover:scale-105 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-black text-gray-900 text-base mb-2">
                Print-Ready PDFs
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                US Letter size, crisp output that prints perfectly every time.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-purple-100 to-pink-50 border-3 border-purple-300 p-6 text-center hover:shadow-xl transition-shadow hover:scale-105 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-black text-gray-900 text-base mb-2">
                Fully Customizable
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Adjust letter size, rows, and guides for any skill level.
              </p>
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-pink-100 to-rose-50 border-3 border-pink-300 p-6 text-center hover:shadow-xl transition-shadow hover:scale-105 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 flex items-center justify-center mx-auto mb-4 shadow-md">
                <svg className="w-8 h-8 text-white font-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-black text-gray-900 text-base mb-2">
                Made for Kids
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Designed for ages 3-7 with proper letter formation guides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Banner */}
      <section className="py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-lg font-black text-white drop-shadow-lg">
            Trusted by <span className="text-yellow-200">thousands</span> of parents, teachers, and homeschoolers
          </p>
          <p className="text-white text-sm font-bold mt-2 opacity-95">Creating custom tracing worksheets every single week</p>
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
      <section className="py-16" style={{ background: "linear-gradient(135deg, #fef3c7 0%, #fef9e7 100%)" }}>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black text-center text-gray-900 mb-10">
            Explore More Teacher Tools
          </h2>
          <a
            href="https://classroomseatingchartmaker.com"
            className="group block rounded-3xl border-4 border-yellow-400 bg-white p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-300 to-indigo-200 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white font-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-black text-2xl text-gray-900 mb-2">
                  Classroom Seating Chart Maker
                </h3>
                <p className="text-base text-gray-700 mb-3 leading-relaxed font-medium">
                  Create and manage classroom seating charts with drag-and-drop. Arrange desks, assign students, and print layouts — completely free for teachers.
                </p>
                <span className="inline-block text-indigo-600 text-base font-black group-hover:translate-x-2 transition-transform">
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
