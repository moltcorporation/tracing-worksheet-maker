import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Alphabet Tracing Worksheets — Printable ABC Practice Sheets",
  description:
    "Download free printable alphabet tracing worksheets. Full A-Z uppercase and lowercase sets with dotted letters and writing guides. Perfect for preschool and kindergarten alphabet practice.",
  alternates: {
    canonical: `${SITE_URL}/alphabet-tracing-worksheets`,
  },
  openGraph: {
    title: "Free Alphabet Tracing Worksheets — Printable ABC Sheets",
    description:
      "Download free printable alphabet tracing worksheets with uppercase and lowercase sets. Dotted letters with writing guides for preschool and kindergarten.",
    type: "website",
    url: `${SITE_URL}/alphabet-tracing-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Alphabet Tracing Worksheets — Printable ABC Sheets",
    description:
      "Download free printable alphabet tracing worksheets with uppercase and lowercase sets.",
  },
  other: {
    "article:tag": [
      "alphabet tracing",
      "ABC worksheets",
      "printable alphabet practice",
      "kindergarten worksheets",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Alphabet Tracing Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable alphabet tracing worksheets. Full A-Z sets with uppercase and lowercase options.",
  url: `${SITE_URL}/alphabet-tracing-worksheets`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tracing Worksheet Maker", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Alphabet Tracing Worksheets", item: `${SITE_URL}/alphabet-tracing-worksheets` },
  ],
};

export default function AlphabetTracingWorksheetsPage() {
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

      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-12 md:py-16">
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
            lowercase options. Dotted letters, multi-page bundles, and writing
            guides for early handwriting practice.
          </p>
          <Link
            href="/letter-tracing#generator"
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Alphabet Worksheets
          </Link>
        </div>
      </section>

      {/* Alphabet Sets */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Printable Alphabet Worksheet Sets
          </h2>
          <p className="text-gray-600 mb-8">
            Generate complete alphabet tracing worksheet bundles — all 26
            letters in a single PDF. Choose uppercase, or mix and match specific
            letters for targeted practice.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Uppercase Alphabet Set
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                All 26 uppercase letters A through Z. Each letter gets its own
                practice rows with dotted outlines and three-line writing guides.
                Ideal for preschool and pre-K students starting their
                handwriting journey.
              </p>
              <div className="text-xs text-gray-500 font-mono tracking-widest mb-3">
                A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
              </div>
              <Link
                href="/letter-tracing#generator"
                className="text-purple-600 font-medium text-sm hover:underline"
              >
                Generate uppercase set &rarr;
              </Link>
            </div>
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Custom Letter Selection
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Pick exactly which letters to practice. Focus on tricky letters
                your child struggles with, or create themed sets (child&apos;s
                name letters, sight word letters, or letter-of-the-week sets).
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Select any combination of A-Z for a custom worksheet
              </p>
              <Link
                href="/letter-tracing#generator"
                className="text-blue-600 font-medium text-sm hover:underline"
              >
                Build custom set &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            How to Use Alphabet Tracing Worksheets
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Alphabet tracing worksheets are most effective when used
              systematically. Rather than working through all 26 letters at once,
              break the alphabet into manageable groups and master each group
              before moving on.
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Start with the child&apos;s name</strong> — letters in
                their own name are the most motivating to learn
              </li>
              <li>
                <strong>Group by shape</strong> — practice straight-line letters
                (L, T, I, F) together, then curve letters (C, O, S), then
                combination letters (B, D, R)
              </li>
              <li>
                <strong>Print multiple copies</strong> — children need 3-5
                repetitions per letter for muscle memory to develop
              </li>
              <li>
                <strong>Track progress</strong> — keep a chart of mastered
                letters so children can see their progress through the alphabet
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Alphabet Learning Milestones
          </h2>
          <div className="space-y-4 text-gray-600">
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Ages 3-4 (Preschool):</strong> Recognize and name
                letters. Trace large uppercase letters with assistance. Focus on
                letters in their name.
              </li>
              <li>
                <strong>Ages 4-5 (Pre-K):</strong> Trace all 26 uppercase
                letters independently. Begin associating letters with sounds.
                Start exposure to lowercase.
              </li>
              <li>
                <strong>Ages 5-6 (Kindergarten):</strong> Write uppercase
                letters from memory. Trace lowercase letters. Begin writing
                simple words by copying.
              </li>
              <li>
                <strong>Ages 6-7 (1st Grade):</strong> Write both uppercase and
                lowercase from memory. Focus on consistent sizing, spacing, and
                neatness.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Why Multi-Page Alphabet Bundles Work
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              A complete alphabet worksheet bundle gives teachers and parents a
              ready-made resource for weeks of practice. Instead of generating
              one letter at a time, create a full A-Z set and work through it
              systematically.
            </p>
            <p>
              Our generator lets you select all 26 letters at once and downloads
              a multi-page PDF with each letter on its own practice rows. Print
              the whole bundle or just the pages you need for each session.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-purple-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Print Your Alphabet Worksheets
          </h2>
          <p className="text-gray-600 mb-4">
            Generate a full A-Z alphabet tracing bundle or pick specific letters.
            Free PDF download, no sign-up required.
          </p>
          <Link
            href="/letter-tracing#generator"
            className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Create Alphabet Worksheets &rarr;
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
                Individual A-Z letter tracing sheets with stroke guides.
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
