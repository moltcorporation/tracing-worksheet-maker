import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Number Tracing Worksheets — Printable 0-9 & 0-20 Practice Sheets",
  description:
    "Download free printable number tracing worksheets for 0-9 and 0-20. Dotted numbers with formation guides and writing lines. Perfect for preschool and kindergarten number writing practice.",
  alternates: {
    canonical: `${SITE_URL}/number-tracing-worksheets`,
  },
  openGraph: {
    title: "Free Number Tracing Worksheets — Printable 0-9 & 0-20 Sheets",
    description:
      "Download free printable number tracing worksheets for 0-9 and 0-20. Dotted numbers with formation guides for preschool and kindergarten.",
    type: "website",
    url: `${SITE_URL}/number-tracing-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Number Tracing Worksheets — Printable 0-9 & 0-20 Sheets",
    description:
      "Download free printable number tracing worksheets. Dotted numbers with formation guides.",
  },
  other: {
    "article:tag": [
      "number tracing",
      "number writing worksheets",
      "printable number practice",
      "preschool math worksheets",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Number Tracing Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable number tracing worksheets for 0-9 and 0-20. Dotted numbers with formation guides.",
  url: `${SITE_URL}/number-tracing-worksheets`,
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age should children start number tracing worksheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most children can begin tracing large numbers around age 3-4 with guidance. By age 4-5, they can independently trace numbers 0-9. Number tracing worksheets for 0-20 are typically appropriate for kindergarteners ages 5-6.",
      },
    },
    {
      "@type": "Question",
      name: "Should children learn letters or numbers first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most educators recommend starting with letters, since children encounter their name first. However, letters and numbers can be taught in parallel. The fine motor skills from letter tracing transfer directly to number formation — both use the same pencil control and stroke patterns.",
      },
    },
    {
      "@type": "Question",
      name: "How do I teach my child to write numbers correctly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with dotted number tracing worksheets that show the correct stroke direction. Always begin each number from the top. Practice 2-3 numbers per session in small groups (straight-line numbers like 1, 4, 7 first, then curved numbers). Short daily sessions of 5-10 minutes are more effective than longer weekly practice.",
      },
    },
    {
      "@type": "Question",
      name: "Are these number tracing worksheets free to print?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Generate and print number tracing worksheets for free with no sign-up required. Choose numbers 0-9, 0-20, or select specific numbers for targeted practice, then download as a PDF.",
      },
    },
  ],
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tracing Worksheet Maker", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Number Tracing Worksheets", item: `${SITE_URL}/number-tracing-worksheets` },
  ],
};

export default function NumberTracingWorksheetsPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Number Tracing Worksheets</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Number Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Printable number tracing worksheets for 0-9 and 0-20 with dotted
            numbers, formation guides, and writing lines. Build number writing
            confidence for preschool and kindergarten learners.
          </p>
          <Link
            href="/number-tracing#generator"
            className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Create Number Tracing Worksheets
          </Link>
        </div>
      </section>

      {/* Number Sets */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Number Tracing Worksheet Sets
          </h2>
          <p className="text-gray-600 mb-8">
            Choose from focused number sets designed for different skill levels.
            Each worksheet includes dotted number outlines with formation guides
            showing where to start each stroke.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-orange-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Numbers 0-9 Set
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                The essential single-digit number set. Each number gets
                dedicated practice rows with dotted outlines and three-line
                writing guides. Start here for children learning to write
                numbers for the first time.
              </p>
              <div className="flex gap-2 mb-3">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                  <span
                    key={n}
                    className="w-8 h-8 bg-white rounded flex items-center justify-center text-lg font-bold text-gray-800 border border-orange-200"
                  >
                    {n}
                  </span>
                ))}
              </div>
              <Link
                href="/number-tracing#generator"
                className="text-orange-600 font-medium text-sm hover:underline"
              >
                Generate 0-9 worksheets &rarr;
              </Link>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Numbers 0-20 Set
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Extended number set for children ready to practice teen numbers.
                Includes single digits plus 10-20 for complete early math
                readiness. Great for kindergarten students building number
                fluency.
              </p>
              <p className="text-xs text-gray-500 mb-3">
                0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                18, 19, 20
              </p>
              <Link
                href="/number-tracing#generator"
                className="text-blue-600 font-medium text-sm hover:underline"
              >
                Generate 0-20 worksheets &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Teaching Number Formation
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Correct number formation matters. Children who learn to write
              numbers with proper stroke order write faster and more legibly as
              they progress through school. Tracing worksheets build the muscle
              memory needed for automatic, correct number writing.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Straight-Line Numbers (Start Here)
                </h3>
                <p className="text-sm">
                  1, 4, 7 — formed with straight strokes only, easiest for
                  beginners to control
                </p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Curve Numbers
                </h3>
                <p className="text-sm">
                  0, 2, 3, 5, 6, 9 — require curved strokes with direction
                  changes
                </p>
              </div>
              <div className="bg-orange-50 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-1">
                  Complex Numbers
                </h3>
                <p className="text-sm">
                  8 — the most challenging single digit, requiring a continuous
                  S-curve motion
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            From Letters to Numbers
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Number tracing builds directly on letter tracing skills. Children
              who have practiced{" "}
              <Link
                href="/alphabet-tracing-worksheets"
                className="text-orange-600 hover:underline"
              >
                alphabet tracing worksheets
              </Link>{" "}
              already have the pencil control and stroke awareness needed for
              number formation. The curves in letters like C, O, and S transfer
              to numbers like 0, 6, and 9. Straight strokes from letters like L
              and T appear in numbers like 1, 4, and 7.
            </p>
            <p>
              If your child is comfortable tracing uppercase letters, they are
              ready for number tracing. Start with straight-line numbers (1, 4,
              7) to build confidence, then progress to curved numbers that use
              familiar letter strokes.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Number Writing Practice Tips
          </h2>
          <div className="space-y-4 text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Always start at the top</strong> — every single-digit
                number starts from the top, building a consistent habit
              </li>
              <li>
                <strong>Practice in small groups</strong> — focus on 2-3 numbers
                per session rather than all 10 at once
              </li>
              <li>
                <strong>Connect to counting</strong> — as children trace each
                number, count aloud to reinforce number recognition
              </li>
              <li>
                <strong>Use different sizes</strong> — start with larger numbers
                for beginners, then decrease size as control improves
              </li>
              <li>
                <strong>Daily practice</strong> — short 5-10 minute sessions
                every day are more effective than longer weekly sessions
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Number Writing Milestones by Age
          </h2>
          <div className="space-y-4 text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Ages 3-4:</strong> Recognize numbers 0-9. Trace large
                numbers with guided assistance. Count objects to 10.
              </li>
              <li>
                <strong>Ages 4-5:</strong> Independently trace numbers 0-9.
                Begin writing numbers from memory. Match numbers to quantities.
              </li>
              <li>
                <strong>Ages 5-6:</strong> Write numbers 0-20 from memory.
                Practice number sequences. Begin simple addition writing.
              </li>
              <li>
                <strong>Ages 6-7:</strong> Write numbers with consistent size
                and alignment. Write multi-digit numbers. Complete number
                patterns.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                What age should children start number tracing worksheets?
              </h3>
              <p className="text-gray-600 text-sm">
                Most children can begin tracing large numbers around age 3-4
                with guidance. By age 4-5, they can independently trace numbers
                0-9. Number tracing worksheets for 0-20 are typically
                appropriate for kindergarteners ages 5-6.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Should children learn letters or numbers first?
              </h3>
              <p className="text-gray-600 text-sm">
                Most educators recommend starting with letters, since children
                encounter their name first. However, letters and numbers can be
                taught in parallel. The fine motor skills from letter tracing
                transfer directly to number formation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                How do I teach my child to write numbers correctly?
              </h3>
              <p className="text-gray-600 text-sm">
                Start with dotted number tracing worksheets that show the
                correct stroke direction. Always begin each number from the top.
                Practice 2-3 numbers per session, starting with straight-line
                numbers (1, 4, 7) before curved numbers. Short daily sessions of
                5-10 minutes work best.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Are these number tracing worksheets free to print?
              </h3>
              <p className="text-gray-600 text-sm">
                Yes. Generate and print number tracing worksheets for free with
                no sign-up required. Choose numbers 0-9, 0-20, or select
                specific numbers for targeted practice, then download as a PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Ready to Print Number Worksheets?
          </h2>
          <p className="text-gray-600 mb-4">
            Generate custom number tracing worksheets in seconds. Choose 0-9 or
            select specific numbers for targeted practice.
          </p>
          <Link
            href="/number-tracing#generator"
            className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Create Number Worksheets &rarr;
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
              href="/letter-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Letter Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                A-Z letter tracing sheets with stroke guides.
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
                Full A-Z alphabet sets with uppercase and lowercase options.
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
