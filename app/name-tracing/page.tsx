import type { Metadata } from "next";
import Link from "next/link";
import TracingWorksheet from "../components/TracingWorksheet";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Name Tracing Worksheet Generator — Print Name Tracing Sheets",
  description:
    "Generate free printable name tracing worksheets. Type any name and create custom dotted letter tracing sheets with writing guides. Download as PDF instantly — perfect for preschool and kindergarten.",
  alternates: {
    canonical: `${SITE_URL}/name-tracing`,
  },
  openGraph: {
    title: "Free Name Tracing Worksheet Generator",
    description:
      "Type any name and generate a custom tracing worksheet with dotted letters and writing guides. Download as PDF instantly.",
    type: "website",
    url: `${SITE_URL}/name-tracing`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Name Tracing Worksheet Generator",
    description:
      "Type any name and generate a custom tracing worksheet with dotted letters. Download as PDF instantly.",
  },
};

export default function NameTracingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Name Tracing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Name Tracing Worksheet Generator
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Type any name and instantly create a printable tracing worksheet with
            dotted letters and writing guide lines. Perfect for helping children
            learn to write their name.
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
            How to Create a Name Tracing Worksheet
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Name tracing worksheets are one of the best ways to help young
              children learn to write their own name. Our free generator makes it
              easy to create personalized tracing sheets in seconds.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                Select <strong>&quot;Name&quot;</strong> mode in the worksheet
                type selector above.
              </li>
              <li>
                Type the child&apos;s name (up to 20 characters).
              </li>
              <li>
                Adjust the letter size and number of practice rows.
              </li>
              <li>
                Click <strong>&quot;Download PDF&quot;</strong> and print.
              </li>
            </ol>
            <p>
              Each worksheet includes dotted letters with baseline, midline, and
              top guide lines to help children develop proper letter formation.
              The first row includes stroke start indicators so children know
              where to begin each letter.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Tips for Teaching Name Writing
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Learning to write their name is a major milestone for young
              children. Here are some tips to make practice more effective:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Start with just the first letter, then add one letter at a time.
              </li>
              <li>
                Use larger letter sizes for beginners and decrease as they
                improve.
              </li>
              <li>
                Practice daily for short sessions (5-10 minutes) rather than long
                sessions.
              </li>
              <li>
                Encourage proper pencil grip from the start.
              </li>
              <li>
                Print multiple copies so there&apos;s always a fresh worksheet
                ready.
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
              href="/letter-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Letter Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                A-Z alphabet tracing with stroke guides for preschool and
                kindergarten.
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
          <span className="mx-2">&middot;</span>
          From the makers of{" "}
          <a href="https://classroomseatingchartmaker.com" className="hover:text-blue-600">Classroom Seating Chart Maker</a>
        </div>
      </footer>
    </div>
  );
}
