import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title:
    "Free Cursive Handwriting Worksheet Generator — Printable Cursive Practice Sheets",
  description:
    "Generate free printable cursive handwriting worksheets. Create cursive letter tracing, name tracing, and handwriting practice sheets with connected letters and writing guides. Download as PDF.",
  alternates: {
    canonical: `${SITE_URL}/cursive-handwriting-worksheets`,
  },
  openGraph: {
    title: "Free Cursive Handwriting Worksheet Generator",
    description:
      "Generate free printable cursive handwriting worksheets with connected letters, writing guides, and multiple practice modes. Download as PDF instantly.",
    type: "website",
    url: `${SITE_URL}/cursive-handwriting-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Cursive Handwriting Worksheet Generator",
    description:
      "Generate free printable cursive handwriting worksheets with connected letters and writing guides.",
  },
  other: {
    "article:tag": [
      "cursive handwriting worksheet generator",
      "cursive letter tracing worksheets",
      "cursive writing practice sheets",
      "cursive handwriting practice",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cursive Handwriting Worksheet Generator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable cursive handwriting worksheets. Cursive letter tracing, name tracing, and handwriting practice with connected letters and writing guides.",
  url: `${SITE_URL}/cursive-handwriting-worksheets`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Tracing Worksheet Maker",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Cursive Handwriting Worksheets",
      item: `${SITE_URL}/cursive-handwriting-worksheets`,
    },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I generate cursive handwriting worksheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use our free cursive worksheet generator: select cursive handwriting style, type a name or choose letters to trace, adjust size and rows, then download as a print-ready PDF. No account or sign-up required.",
      },
    },
    {
      "@type": "Question",
      name: "What cursive styles are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our generator offers a connected cursive style with flowing letterforms ideal for handwriting practice. Letters connect naturally just like real cursive writing, with dotted outlines for tracing.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create cursive letter tracing worksheets for specific letters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Switch to letter tracing mode and select any combination of A-Z letters. Each letter gets its own practice row with dotted cursive outlines, writing guidelines, and stroke guides.",
      },
    },
    {
      "@type": "Question",
      name: "What grade level are these cursive worksheets for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our cursive worksheets work for all levels — from 2nd graders just learning cursive to older students refining their handwriting. Adjust the letter size and rows per page to match the student's ability.",
      },
    },
    {
      "@type": "Question",
      name: "Are the cursive handwriting worksheets free to download?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the cursive handwriting worksheet generator is completely free. Generate unlimited worksheets with cursive name tracing, letter tracing, and number tracing, then download as high-quality PDFs.",
      },
    },
  ],
};

export default function CursiveHandwritingWorksheetsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">
              Cursive Handwriting Worksheets
            </span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Cursive Handwriting Worksheet Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Create printable cursive handwriting practice sheets with connected
            letters, writing guides, and dotted tracing outlines. Name tracing,
            letter tracing, and more — all free.
          </p>
          <Link
            href="/name-tracing?style=cursive#generator"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Create Cursive Worksheets
          </Link>
        </div>
      </section>

      {/* Worksheet Types */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Cursive Worksheet Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">
                Cursive Name Tracing
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Type any name and generate a personalized cursive tracing
                worksheet. Children practice writing their own name in connected
                cursive letters with dotted guides.
              </p>
              <Link
                href="/cursive-name-tracing"
                className="text-sm text-indigo-600 font-medium hover:underline"
              >
                Cursive name tracing &rarr;
              </Link>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">
                Cursive Letter Tracing
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Practice individual cursive letters A-Z. Select specific letters
                to focus on or generate a full alphabet sheet. Each letter
                includes writing guidelines and stroke start markers.
              </p>
              <Link
                href="/letter-tracing?style=cursive#generator"
                className="text-sm text-indigo-600 font-medium hover:underline"
              >
                Cursive letter tracing &rarr;
              </Link>
            </div>
            <div className="bg-indigo-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">
                Cursive Number Practice
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Generate cursive-style number tracing worksheets for 0-9.
                Combine with letter practice for comprehensive cursive
                handwriting development.
              </p>
              <Link
                href="/number-tracing?style=cursive#generator"
                className="text-sm text-indigo-600 font-medium hover:underline"
              >
                Cursive number tracing &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Makes Our Cursive Worksheets Effective
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Connected Cursive Letters
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Letters flow together naturally, teaching proper cursive
                  connections from the start. Not just italic print — real
                  connected cursive forms.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Three-Line Writing Guides
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Baseline, midline, and top line guides teach consistent letter
                  height and spacing — essential for readable cursive.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-indigo-600"
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
              <div>
                <h3 className="font-semibold text-gray-800">
                  Adjustable Size &amp; Rows
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Customize letter size from large (beginners) to small
                  (advanced). Set 3-10 practice rows per page to match student
                  level and attention span.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  High-Quality PDF Download
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Download worksheets as crisp, print-ready PDFs on standard US
                  Letter paper. Print as many copies as you need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Create Cursive Handwriting Worksheets
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Choose your mode
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Select name tracing for personalized worksheets, letter
                  tracing for A-Z practice, or number tracing for 0-9.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Select Cursive style
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Switch from Print to Cursive handwriting style. The preview
                  updates instantly so you can see connected cursive letters
                  before downloading.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Customize and download
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Adjust letter size and rows per page, then download as a
                  high-quality PDF. Print and distribute to your class or child.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/name-tracing?style=cursive#generator"
              className="inline-block text-indigo-600 font-medium hover:underline"
            >
              Try the cursive worksheet generator &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Teaching Tips */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Teaching Cursive Handwriting: Best Practices
          </h2>
          <div className="space-y-4 text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Start with name tracing</strong> — children connect
                personally with their own name, making cursive practice
                meaningful
              </li>
              <li>
                <strong>Group letters by stroke pattern</strong> — teach
                letters with similar strokes together (c, a, d, o share the
                oval stroke)
              </li>
              <li>
                <strong>Focus on connections</strong> — the flow between
                letters is what makes cursive cursive. Practice connecting two
                letters before writing full words
              </li>
              <li>
                <strong>Use large letters first</strong> — set letter size to
                maximum for beginners, then gradually decrease as motor skills
                develop
              </li>
              <li>
                <strong>Daily practice, short sessions</strong> — 10-15
                minutes of cursive practice daily beats one long weekly session
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800">
                How do I generate cursive handwriting worksheets?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Use our free cursive worksheet generator: select cursive
                handwriting style, type a name or choose letters to trace,
                adjust size and rows, then download as a print-ready PDF. No
                account or sign-up required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                What cursive styles are available?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Our generator offers a connected cursive style with flowing
                letterforms ideal for handwriting practice. Letters connect
                naturally just like real cursive writing, with dotted outlines
                for tracing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Can I create cursive letter tracing worksheets for specific
                letters?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Yes! Switch to letter tracing mode and select any combination of
                A-Z letters. Each letter gets its own practice row with dotted
                cursive outlines, writing guidelines, and stroke guides.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                What grade level are these cursive worksheets for?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Our cursive worksheets work for all levels — from 2nd graders
                just learning cursive to older students refining their
                handwriting. Adjust the letter size and rows per page to match
                the student&apos;s ability.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Are the cursive handwriting worksheets free to download?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Yes, the cursive handwriting worksheet generator is completely
                free. Generate unlimited worksheets with cursive name tracing,
                letter tracing, and number tracing, then download as
                high-quality PDFs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Start Creating Cursive Worksheets
          </h2>
          <p className="text-gray-600 mb-4">
            Generate custom cursive handwriting practice sheets in seconds.
            Names, letters, numbers — all with connected cursive letterforms.
          </p>
          <Link
            href="/name-tracing?style=cursive#generator"
            className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Create Cursive Worksheets &rarr;
          </Link>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
            More Tracing Worksheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/cursive-name-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Cursive Name Tracing
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Personalized cursive name tracing worksheets for any name.
              </p>
            </Link>
            <Link
              href="/letter-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Letter Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Printable A-Z letter tracing with stroke guides and writing
                lines.
              </p>
            </Link>
            <Link
              href="/name-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Name Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Create personalized name tracing sheets in print or cursive
                style.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
          <Link href="/" className="hover:text-blue-600">
            Tracing Worksheet Maker
          </Link>{" "}
          &mdash; Free printable tracing worksheets
          <span className="mx-2">&middot;</span>
          From the makers of{" "}
          <a
            href="https://classroomseatingchartmaker.com"
            className="hover:text-blue-600"
          >
            Classroom Seating Chart Maker
          </a>
        </div>
      </footer>
    </div>
  );
}
