import type { Metadata } from "next";
import Link from "next/link";
import TracingWorksheet from "../components/TracingWorksheet";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title:
    "Free Number Tracing Worksheets — Printable 0-9 Number Writing Practice",
  description:
    "Generate free printable number tracing worksheets for 0-9. Dotted numbers with formation guides and writing lines. Download as PDF — perfect for preschool and kindergarten math readiness.",
  alternates: {
    canonical: `${SITE_URL}/number-tracing`,
  },
  openGraph: {
    title: "Free Number Tracing Worksheets — 0-9 Practice Sheets",
    description:
      "Generate free printable number tracing worksheets for 0-9. Dotted numbers with formation guides. Download as PDF instantly.",
    type: "website",
    url: `${SITE_URL}/number-tracing`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Number Tracing Worksheets — 0-9 Practice Sheets",
    description:
      "Generate free printable number tracing worksheets for 0-9. Download as PDF instantly.",
  },
};

export default function NumberTracingPage() {
  return (
    <div className="min-h-screen bg-[#fef7f0]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#7c3aed]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Number Tracing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
            Free Number Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create printable number tracing worksheets for 0-9 with dotted
            numbers and formation guides. Build number writing confidence with
            guided practice sheets. Download as PDF instantly.
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
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-4">
            Printable Number Writing Practice Sheets
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Number tracing worksheets help children learn to write numbers
              correctly from the very beginning. Our free generator creates
              custom 0-9 tracing sheets with dotted numbers and writing guide
              lines for structured practice.
            </p>
            <p>
              Each worksheet includes formation guides showing where to start
              each number, helping children develop proper number writing habits.
              The three-line writing guides (baseline, midline, top line) teach
              correct proportions and placement.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">
            How to Use Number Tracing Worksheets
          </h2>
          <div className="space-y-4 text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Select <strong>&quot;Numbers&quot;</strong> mode in the generator
                above.
              </li>
              <li>
                Pick the numbers your child needs to practice, or select all 10.
              </li>
              <li>
                Adjust the size — larger numbers are easier for beginners.
              </li>
              <li>
                Download the PDF and print on standard US Letter paper.
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">
            Number Writing Tips for Young Learners
          </h2>
          <div className="space-y-4 text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Start with 1, then progress:</strong> Begin with numbers
                that have simple strokes (1, 7, 4) before tackling curved
                numbers (8, 6, 9).
              </li>
              <li>
                <strong>Top-to-bottom formation:</strong> Most numbers start at
                the top. Reinforce this habit early.
              </li>
              <li>
                <strong>Connect to counting:</strong> Practice writing numbers
                alongside counting activities to reinforce number recognition.
              </li>
              <li>
                <strong>Short, daily sessions:</strong> 5-10 minutes of practice
                per day is more effective than longer occasional sessions.
              </li>
              <li>
                <strong>Celebrate progress:</strong> Let children see their
                improvement by keeping earlier worksheets for comparison.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">
            When Should Children Learn to Write Numbers?
          </h2>
          <div className="space-y-4 text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Ages 3-4:</strong> Number recognition and tracing with
                large, guided numbers.
              </li>
              <li>
                <strong>Ages 4-5:</strong> Independent tracing of numbers 0-9.
                Begin connecting written numbers to quantities.
              </li>
              <li>
                <strong>Ages 5-6:</strong> Write numbers from memory. Practice
                writing numbers in sequence and out of order.
              </li>
              <li>
                <strong>Ages 6-7:</strong> Write multi-digit numbers. Focus on
                consistent sizing and alignment.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1e1b4b] text-center mb-6">
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
              href="/letter-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Letter Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                A-Z alphabet tracing with stroke guides for handwriting practice.
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
