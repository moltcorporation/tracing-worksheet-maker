import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title:
    "Free Number Tracing Worksheets — Printable 0-9 & 0-20 Practice Sheets",
  description:
    "Download free printable number tracing worksheets for 0-9 and 0-20. Dotted numbers with formation guides and writing lines. Instant PDF — perfect for preschool and kindergarten math readiness.",
  alternates: {
    canonical: `${SITE_URL}/number-tracing-worksheets`,
  },
  openGraph: {
    title: "Free Number Tracing Worksheets — Printable 0-9 & 0-20",
    description:
      "Download free printable number tracing worksheets. Dotted numbers with formation guides. Instant PDF download.",
    type: "website",
    url: `${SITE_URL}/number-tracing-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Number Tracing Worksheets — Printable 0-9 & 0-20",
    description:
      "Download free printable number tracing worksheets. Instant PDF download.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Number Tracing Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable number tracing worksheets for 0-9 and 0-20. Dotted numbers with formation guides. Download as PDF.",
  url: `${SITE_URL}/number-tracing-worksheets`,
};

export default function NumberTracingWorksheetsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-10 md:py-14">
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
            confidence before math class. Instant PDF — no sign-up required.
          </p>
          <Link
            href="/number-tracing#generator"
            className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Create Number Worksheets &rarr;
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Number Tracing Sets: 0-9 and 0-20
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Our number tracing worksheets cover two essential ranges.{" "}
              <strong>0-9 sets</strong> teach individual digit formation — the
              building blocks for all number writing.{" "}
              <strong>0-20 sets</strong> introduce multi-digit numbers and help
              children connect number writing with counting and early math.
            </p>
            <p>
              Each worksheet features dotted number outlines with formation
              guides showing where to start each stroke. Three writing guide
              lines (baseline, midline, top line) teach proper number
              proportions and placement.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Number Tracing Matters for Math Readiness
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Children who can write numbers fluently have a significant
              advantage in early math. When number writing is automatic, children
              can focus their attention on the math concepts — addition,
              subtraction, counting — rather than struggling with how to form
              each digit.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Number recognition:</strong> Tracing reinforces the
                visual shape of each number, building faster recognition
              </li>
              <li>
                <strong>Fine motor development:</strong> The curves and strokes
                in numbers (especially 2, 3, 5, 8) develop hand control
              </li>
              <li>
                <strong>Counting connection:</strong> Writing numbers in sequence
                reinforces counting skills and number order
              </li>
              <li>
                <strong>Math fluency:</strong> Automatic number writing frees
                cognitive resources for problem-solving
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Best Order for Teaching Number Writing
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Not all numbers are equally easy to write. Teach them in order of
              difficulty for faster mastery:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>1, 7, 4</strong> — straight lines only, the easiest
                starting point
              </li>
              <li>
                <strong>0, 6, 9</strong> — simple curves, one main stroke each
              </li>
              <li>
                <strong>2, 3, 5</strong> — mixed strokes with direction changes
              </li>
              <li>
                <strong>8</strong> — the most complex single digit, save for
                last
              </li>
            </ol>
            <p>
              Once 0-9 is solid, introduce teen numbers (10-19) and then 20.
              Multi-digit numbers teach spacing and left-to-right sequencing.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Age Guidelines for Number Tracing
          </h2>
          <div className="space-y-4 text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Ages 3-4 (Preschool):</strong> Number recognition and
                tracing 1-5 with large, guided numbers.
              </li>
              <li>
                <strong>Ages 4-5 (Pre-K):</strong> Tracing all single digits
                0-9. Connect written numbers to counting objects.
              </li>
              <li>
                <strong>Ages 5-6 (Kindergarten):</strong> Write numbers 0-20
                from memory. Practice correct formation and sizing.
              </li>
              <li>
                <strong>Ages 6-7 (1st Grade):</strong> Write numbers fluently to
                100. Focus on consistent size and alignment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-orange-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Ready to Create Your Number Tracing Worksheets?
          </h2>
          <p className="text-gray-600 mb-5">
            Choose numbers 0-9 or build custom sets. Adjust size and download
            your PDF in seconds. Completely free.
          </p>
          <Link
            href="/number-tracing#generator"
            className="inline-block bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
          >
            Open the Number Worksheet Generator &rarr;
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
                A-Z letter tracing with stroke guides for handwriting practice.
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
                Full A-Z sets with uppercase and lowercase options.
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
                Personalized name tracing sheets for your child.
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
        </div>
      </footer>
    </div>
  );
}
