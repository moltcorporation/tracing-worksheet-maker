import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title:
    "Free Alphabet Tracing Worksheets — Printable A-Z Uppercase & Lowercase",
  description:
    "Download free printable alphabet tracing worksheets with full A-Z letter sets. Uppercase and lowercase dotted letters with writing guides. Multi-page bundles for complete alphabet practice. Instant PDF.",
  alternates: {
    canonical: `${SITE_URL}/alphabet-tracing-worksheets`,
  },
  openGraph: {
    title: "Free Alphabet Tracing Worksheets — Full A-Z Sets",
    description:
      "Download free printable alphabet tracing worksheets. Full A-Z uppercase and lowercase sets. Instant PDF download.",
    type: "website",
    url: `${SITE_URL}/alphabet-tracing-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Alphabet Tracing Worksheets — Full A-Z Sets",
    description:
      "Download free printable alphabet tracing worksheets. Full A-Z sets. Instant PDF.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Alphabet Tracing Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable alphabet tracing worksheets. Full A-Z sets with uppercase and lowercase options. Download as PDF.",
  url: `${SITE_URL}/alphabet-tracing-worksheets`,
};

export default function AlphabetTracingWorksheetsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Alphabet Tracing Worksheets</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Alphabet Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Complete A-Z alphabet tracing worksheet sets with uppercase and
            lowercase options. Dotted letters with stroke guides and writing
            lines. Download multi-page PDF bundles instantly — no sign-up
            required.
          </p>
          <Link
            href="/letter-tracing#generator"
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Alphabet Worksheets &rarr;
          </Link>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Complete Alphabet Tracing Sets
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Our alphabet tracing worksheets give children a complete A-Z
              practice set in a single downloadable PDF. Select all 26 letters in
              the generator and download a multi-page worksheet bundle that
              covers every letter of the alphabet.
            </p>
            <p>
              Each page features dotted letter outlines with three guide lines
              for proper letter height and proportion. The first row of each
              letter includes stroke start markers so children learn correct
              formation from the beginning.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Uppercase vs. Lowercase Alphabet Practice
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Most children learn uppercase letters first because they have
              simpler, more distinct shapes. Once uppercase is solid, introduce
              lowercase letters gradually.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Uppercase first (ages 3-5):</strong> Start with the full
                uppercase alphabet. Letters like A, B, C have distinct shapes
                that are easier to recognize and trace.
              </li>
              <li>
                <strong>Lowercase next (ages 5-6):</strong> Many lowercase
                letters share shapes (b/d, p/q). Practice them in pairs to build
                awareness of differences.
              </li>
              <li>
                <strong>Mixed practice (ages 6-7):</strong> Combine uppercase
                and lowercase to reinforce letter pairing (Aa, Bb, Cc).
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to Use Alphabet Worksheet Bundles
          </h2>
          <div className="space-y-4 text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Open the{" "}
                <Link
                  href="/letter-tracing#generator"
                  className="text-blue-600 hover:underline"
                >
                  letter tracing generator
                </Link>{" "}
                and select <strong>all 26 letters</strong>.
              </li>
              <li>
                Choose your preferred letter size — larger for beginners, smaller
                for advancing students.
              </li>
              <li>
                Download the PDF. You&apos;ll get a multi-page document with
                each letter on its own practice section.
              </li>
              <li>
                Print the full set or select individual pages for letters your
                child needs most.
              </li>
            </ol>
            <p>
              <strong>Pro tip:</strong> Print two copies — one for guided
              practice with an adult, and one for independent practice. Children
              learn faster when they can compare their work.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Teaching the Alphabet: Recommended Order
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Research suggests teaching letters in a strategic order rather than
              strictly A-Z. Group letters by stroke type for faster mastery:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Straight-line letters:</strong> L, I, T, H, E, F — start
                here for the easiest wins
              </li>
              <li>
                <strong>Diagonal letters:</strong> A, K, M, N, V, W, X, Y, Z —
                introduce after straight lines are solid
              </li>
              <li>
                <strong>Curved letters:</strong> C, O, Q, G, S — these require
                more fine motor control
              </li>
              <li>
                <strong>Mixed-stroke letters:</strong> B, D, J, P, R, U — save
                for last as they combine straight and curved strokes
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-purple-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Download Your Full Alphabet Tracing Set
          </h2>
          <p className="text-gray-600 mb-5">
            Select all 26 letters, choose your size, and download the complete
            A-Z bundle as a PDF. Free and instant.
          </p>
          <Link
            href="/letter-tracing#generator"
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Open the Alphabet Worksheet Generator &rarr;
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
                Individual letter practice sheets with stroke guides.
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
