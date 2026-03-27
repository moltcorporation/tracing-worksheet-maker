import type { Metadata } from "next";
import Link from "next/link";
import TracingWorksheet from "../components/TracingWorksheet";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title:
    "Free Letter Tracing Worksheets — Printable A-Z Alphabet Tracing Sheets",
  description:
    "Generate free printable letter tracing worksheets for the alphabet A-Z. Dotted letters with stroke guides and writing lines. Download as PDF — ideal for preschool and kindergarten handwriting practice.",
  alternates: {
    canonical: `${SITE_URL}/letter-tracing`,
  },
  openGraph: {
    title: "Free Letter Tracing Worksheets — A-Z Alphabet Practice",
    description:
      "Generate free printable letter tracing worksheets for A-Z. Dotted letters with stroke guides. Download as PDF instantly.",
    type: "website",
    url: `${SITE_URL}/letter-tracing`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Letter Tracing Worksheets — A-Z Alphabet Practice",
    description:
      "Generate free printable letter tracing worksheets for A-Z. Download as PDF instantly.",
  },
};

export default function LetterTracingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Letter Tracing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Letter Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create printable A-Z letter tracing worksheets with dotted letters
            and stroke guides. Choose specific letters or practice the full
            alphabet. Download as PDF instantly.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section id="generator" className="py-8">
        <TracingWorksheet />
      </section>

      {/* Content */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Printable Alphabet Tracing Worksheets
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Letter tracing is a foundational skill for early literacy. Our free
              worksheet generator creates custom A-Z tracing sheets that help
              children learn proper letter formation through guided practice.
            </p>
            <p>
              Each worksheet features dotted letters with three guide lines —
              baseline, midline, and top line — that teach children correct
              letter proportions. The first row includes stroke start indicators
              so children know where to begin forming each letter.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            How to Use Letter Tracing Worksheets
          </h2>
          <div className="space-y-4 text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Select <strong>&quot;Letters&quot;</strong> mode in the generator
                above.
              </li>
              <li>
                Pick the letters your child needs to practice, or select all 26.
              </li>
              <li>
                Adjust letter size — larger for beginners, smaller for advancing
                students.
              </li>
              <li>
                Download the PDF and print on standard US Letter paper.
              </li>
            </ol>
            <p>
              For best results, start with letters that have simple strokes (like
              L, I, T) before progressing to more complex letters (like S, G,
              Q). Focus on a few letters at a time rather than the entire
              alphabet at once.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Teaching the Alphabet: Age Guidelines
          </h2>
          <div className="space-y-4 text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Ages 3-4 (Preschool):</strong> Focus on letter
                recognition and tracing with large letters. Start with uppercase.
              </li>
              <li>
                <strong>Ages 4-5 (Pre-K):</strong> Practice all uppercase
                letters. Begin introducing letter sounds alongside tracing.
              </li>
              <li>
                <strong>Ages 5-6 (Kindergarten):</strong> Transition to smaller
                letters. Introduce lowercase tracing.
              </li>
              <li>
                <strong>Ages 6-7 (1st Grade):</strong> Refine letter formation.
                Focus on consistency and writing speed.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
            More Tracing Worksheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              href="/number-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Number Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Numbers 0-9 tracing practice with formation guides.
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
