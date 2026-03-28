import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Cursive Name Tracing Generator — Printable Cursive Handwriting Worksheets",
  description:
    "Generate free printable cursive name tracing worksheets. Type any name and create cursive handwriting practice sheets with connected letters and writing guides. Download as PDF instantly.",
  alternates: {
    canonical: `${SITE_URL}/cursive-name-tracing`,
  },
  openGraph: {
    title: "Free Cursive Name Tracing Generator — Printable Worksheets",
    description:
      "Generate free printable cursive name tracing worksheets. Connected cursive letters with writing guides for handwriting practice.",
    type: "website",
    url: `${SITE_URL}/cursive-name-tracing`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Cursive Name Tracing Generator — Printable Worksheets",
    description:
      "Generate free printable cursive name tracing worksheets with connected cursive letters and writing guides.",
  },
  other: {
    "article:tag": [
      "cursive name tracing",
      "cursive name tracing generator",
      "cursive handwriting practice worksheets",
      "cursive writing worksheets",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Cursive Name Tracing Generator",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable cursive name tracing worksheets. Connected cursive letters with writing guides for handwriting practice.",
  url: `${SITE_URL}/cursive-name-tracing`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tracing Worksheet Maker", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Cursive Name Tracing", item: `${SITE_URL}/cursive-name-tracing` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is cursive name tracing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cursive name tracing worksheets let children practice writing their name in connected cursive letters. Each worksheet shows the name in dotted cursive with writing guidelines so children can trace over the letters to build muscle memory for cursive handwriting.",
      },
    },
    {
      "@type": "Question",
      name: "What age should children start cursive handwriting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most children begin learning cursive in 2nd or 3rd grade (ages 7-9), after mastering print handwriting. However, some programs introduce cursive earlier. Our worksheets work for any age learning cursive writing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a cursive name tracing worksheet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use our name tracing generator — type any name, select the cursive font style, customize the size and number of practice rows, then download as a print-ready PDF. No account required.",
      },
    },
    {
      "@type": "Question",
      name: "Can I trace full sentences in cursive?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our generator supports names, words, and short phrases. Type any text you want children to practice in cursive and generate a tracing worksheet instantly.",
      },
    },
    {
      "@type": "Question",
      name: "Are cursive tracing worksheets really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the core cursive name tracing generator is completely free with no sign-up required. Generate unlimited cursive worksheets and download them as PDFs.",
      },
    },
  ],
};

export default function CursiveNameTracingPage() {
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
      <section className="bg-gradient-to-b from-purple-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Cursive Name Tracing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Cursive Name Tracing Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Create printable cursive name tracing worksheets with connected
            letters and writing guides. Type any name and download a
            practice sheet as PDF instantly.
          </p>
          <Link
            href="/name-tracing?style=cursive#generator"
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Cursive Tracing Worksheets
          </Link>
        </div>
      </section>

      {/* Why Cursive */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Practice Cursive Name Tracing?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Personal Connection</h3>
              <p className="text-sm text-gray-600">
                Children are naturally motivated to write their own name.
                Starting cursive practice with their name builds confidence
                and gives them a personal reason to learn connected letter forms.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Motor Skill Development</h3>
              <p className="text-sm text-gray-600">
                Cursive writing develops fine motor control and hand-eye
                coordination. The flowing, connected strokes build muscle
                memory that improves overall handwriting fluency.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Brain Benefits</h3>
              <p className="text-sm text-gray-600">
                Research shows cursive writing activates different brain
                regions than print. It supports reading comprehension, memory
                retention, and cognitive development in young learners.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-2">Practical Skill</h3>
              <p className="text-sm text-gray-600">
                A cursive signature remains essential for legal documents,
                checks, and official forms. Learning cursive early gives
                children a skill they will use throughout their lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            How to Create Cursive Name Tracing Worksheets
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Type a name or word</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Enter any name, word, or short phrase you want children to
                  practice in cursive. Our generator handles uppercase and
                  lowercase letters.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Choose your cursive style</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Select from dotted cursive letters with connected strokes.
                  Adjust the size and number of practice rows to match your
                  student&apos;s level.
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Download and print</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Download your worksheet as a print-ready PDF on US Letter
                  paper. Print as many copies as you need for repeated practice.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/name-tracing?style=cursive#generator"
              className="inline-block text-purple-600 font-medium hover:underline"
            >
              Try the cursive name tracing generator &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tips for Teaching Cursive Handwriting
          </h2>
          <div className="space-y-4 text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Start with their name</strong> — children are most
                motivated to write something personally meaningful
              </li>
              <li>
                <strong>Focus on letter connections</strong> — the transition
                between letters matters more than perfecting individual forms
              </li>
              <li>
                <strong>Use writing guidelines</strong> — baseline, midline,
                and top line teach consistent letter heights and spacing
              </li>
              <li>
                <strong>Practice in short sessions</strong> — 10-15 minutes
                of focused cursive practice beats long, tiring sessions
              </li>
              <li>
                <strong>Print multiple copies</strong> — repetition across
                several days builds lasting muscle memory
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Cursive Letter Groups by Difficulty
          </h2>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-1">
                Easiest Cursive Letters
              </h3>
              <p className="text-sm">
                c, a, d, o, g, q — these letters use the same basic oval
                stroke, making them natural starting points
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-1">
                Intermediate Cursive Letters
              </h3>
              <p className="text-sm">
                i, t, u, w, e, l, h, k, b — introduce upstrokes, loops,
                and combinations of curved and straight movements
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-1">
                Advanced Cursive Letters
              </h3>
              <p className="text-sm">
                f, z, s, r, j, p — complex stroke patterns with below-line
                loops and directional changes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800">
                What is cursive name tracing?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Cursive name tracing worksheets let children practice writing
                their name in connected cursive letters. Each worksheet shows
                the name in dotted cursive with writing guidelines so children
                can trace over the letters to build muscle memory for cursive
                handwriting.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                What age should children start cursive handwriting?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Most children begin learning cursive in 2nd or 3rd grade (ages
                7-9), after mastering print handwriting. However, some programs
                introduce cursive earlier. Our worksheets work for any age
                learning cursive writing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                How do I create a cursive name tracing worksheet?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Use our name tracing generator &mdash; type any name, select
                the cursive font style, customize the size and number of
                practice rows, then download as a print-ready PDF. No account
                required.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Can I trace full sentences in cursive?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Yes! Our generator supports names, words, and short phrases.
                Type any text you want children to practice in cursive and
                generate a tracing worksheet instantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Are cursive tracing worksheets really free?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Yes, the core cursive name tracing generator is completely free
                with no sign-up required. Generate unlimited cursive worksheets
                and download them as PDFs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-purple-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Ready to Practice Cursive?
          </h2>
          <p className="text-gray-600 mb-4">
            Generate custom cursive name tracing worksheets in seconds. Type
            any name, download as PDF, and print.
          </p>
          <Link
            href="/name-tracing?style=cursive#generator"
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Your Worksheets &rarr;
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
              href="/name-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Name Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Create personalized name tracing sheets in print or cursive.
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
                Printable A-Z letter tracing with stroke guides and writing lines.
              </p>
            </Link>
            <Link
              href="/alphabet-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Alphabet Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Full alphabet sets with uppercase and lowercase options.
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
          <a href="https://classroomseatingchartmaker.com" className="hover:text-blue-600">Classroom Seating Chart Maker</a>
        </div>
      </footer>
    </div>
  );
}
