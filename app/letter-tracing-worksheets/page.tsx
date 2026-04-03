import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Letter Tracing Worksheets — Printable A-Z for Preschool & Kindergarten",
  description:
    "Download free printable letter tracing worksheets for A-Z. Dotted letters with stroke guides and writing lines for preschool, pre-K, and kindergarten. Uppercase and lowercase practice sheets.",
  alternates: {
    canonical: `${SITE_URL}/letter-tracing-worksheets`,
  },
  openGraph: {
    title: "Free Letter Tracing Worksheets — A-Z Printable Sheets",
    description:
      "Download free printable letter tracing worksheets for A-Z. Dotted letters with stroke guides for preschool and kindergarten handwriting practice.",
    type: "website",
    url: `${SITE_URL}/letter-tracing-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Letter Tracing Worksheets — A-Z Printable Sheets",
    description:
      "Download free printable letter tracing worksheets for A-Z. Dotted letters with stroke guides.",
  },
  other: {
    "article:tag": [
      "letter tracing",
      "letter tracing worksheets",
      "printable letter practice",
      "preschool handwriting",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Letter Tracing Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable letter tracing worksheets for A-Z. Dotted letters with stroke guides and writing lines.",
  url: `${SITE_URL}/letter-tracing-worksheets`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tracing Worksheet Maker", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Letter Tracing Worksheets", item: `${SITE_URL}/letter-tracing-worksheets` },
  ],
};

export default function LetterTracingWorksheetsPage() {
  return (
    <div className="min-h-screen bg-[#fef7f0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#7c3aed]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Letter Tracing Worksheets</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
            Free Letter Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Printable A-Z letter tracing worksheets with dotted letters, stroke
            guides, and writing lines. Perfect for preschool, pre-K, and
            kindergarten handwriting practice.
          </p>
          <Link
            href="/letter-tracing#generator"
            className="inline-block bg-[#7c3aed] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#6d28d9] transition-colors"
          >
            Create Letter Tracing Worksheets
          </Link>
        </div>
      </section>

      {/* Letter Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-6">
            A-Z Letter Tracing Worksheets Overview
          </h2>
          <p className="text-gray-600 mb-6">
            Our letter tracing worksheets cover every letter of the alphabet.
            Each worksheet features dotted outlines with three-line writing
            guides (baseline, midline, and top line) so children learn correct
            letter proportions from the start.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-8">
            {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => (
              <div
                key={letter}
                className="bg-[#fef7f0] rounded-lg p-3 text-center border border-[#e9d5ff]"
              >
                <span className="text-2xl font-bold text-gray-800 tracking-wider">
                  {letter}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/letter-tracing#generator"
              className="inline-block text-[#7c3aed] font-medium hover:underline"
            >
              Generate worksheets for any letter combination &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-4">
            What Makes Good Letter Tracing Worksheets?
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Effective letter tracing worksheets provide more than just outlines
              to follow. They include stroke direction indicators, properly
              spaced writing guidelines, and progressive difficulty levels.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Dotted letter outlines</strong> — clear, large traceable
                letters that guide pencil movement
              </li>
              <li>
                <strong>Three-line writing guides</strong> — baseline, midline,
                and top line teach proper letter proportions
              </li>
              <li>
                <strong>Stroke start indicators</strong> — numbered arrows show
                children where to begin each letter
              </li>
              <li>
                <strong>Multiple practice rows</strong> — repetition builds
                muscle memory for each letter form
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">
            Letter Tracing by Difficulty Level
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Not all letters are equally easy to write. Start children with
              simple straight-line letters before progressing to curves and
              complex forms.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Beginner Letters
                </h3>
                <p className="text-sm">
                  L, I, T, F, E, H — straight lines only, easiest for small
                  hands to control
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Intermediate Letters
                </h3>
                <p className="text-sm">
                  C, O, D, P, B, R, U, J — introduce curves and combinations of
                  straight and curved strokes
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Advanced Letters
                </h3>
                <p className="text-sm">
                  S, G, Q, K, W, M, N, Z — complex stroke patterns requiring
                  more hand control
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">
            Tips for Teaching Letter Formation
          </h2>
          <div className="space-y-4 text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Start with uppercase</strong> — uppercase letters are
                simpler and more distinct, reducing confusion
              </li>
              <li>
                <strong>Focus on 2-3 letters per session</strong> — mastery of a
                few letters beats rushed exposure to many
              </li>
              <li>
                <strong>Use verbal cues</strong> — describe strokes aloud
                (&quot;big line down, little line across&quot;)
              </li>
              <li>
                <strong>Practice in context</strong> — after tracing, have
                children write letters in their name or familiar words
              </li>
              <li>
                <strong>Print multiple copies</strong> — children benefit from
                repeating the same worksheet over several days
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-[#f5f3ff]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-3">
            Ready to Print?
          </h2>
          <p className="text-gray-600 mb-4">
            Generate custom letter tracing worksheets in seconds. Choose any
            letters, adjust size, and download as PDF.
          </p>
          <Link
            href="/letter-tracing#generator"
            className="inline-block bg-[#7c3aed] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#6d28d9] transition-colors"
          >
            Create Your Worksheets &rarr;
          </Link>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1e1b4b] text-center mb-6">
            More Tracing Worksheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <Link
              href="/number-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Number Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Numbers 0-9 and 0-20 tracing with formation guides.
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
                Create personalized name tracing sheets for your child.
              </p>
            </Link>
            <Link
              href="/cursive-name-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Cursive Name Tracing
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Printable cursive handwriting worksheets with connected letters.
              </p>
            </Link>
            <Link
              href="/preschool-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Preschool Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Age-appropriate tracing for preschoolers ages 3-5.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#e9d5ff] bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-gray-400">
          <Link href="/" className="hover:text-[#7c3aed]">
            Tracing Worksheet Maker
          </Link>{" "}
          &mdash; Free printable tracing worksheets
          <span className="mx-2">&middot;</span>
          From the makers of{" "}
          <a href="https://classroomseatingchartmaker.com" className="hover:text-[#7c3aed]">Classroom Seating Chart Maker</a>
        </div>
      </footer>
    </div>
  );
}
