import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title:
    "Free Letter Tracing Worksheets — Printable A-Z for Preschool & Kindergarten",
  description:
    "Download free printable letter tracing worksheets for A-Z. Dotted uppercase and lowercase letters with writing guides. Instant PDF — perfect for preschool, pre-K, and kindergarten handwriting practice.",
  alternates: {
    canonical: `${SITE_URL}/letter-tracing-worksheets`,
  },
  openGraph: {
    title: "Free Letter Tracing Worksheets — Printable A-Z",
    description:
      "Download free printable letter tracing worksheets for A-Z. Dotted letters with writing guides. Instant PDF download.",
    type: "website",
    url: `${SITE_URL}/letter-tracing-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Letter Tracing Worksheets — Printable A-Z",
    description:
      "Download free printable letter tracing worksheets for A-Z. Instant PDF download.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Letter Tracing Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable letter tracing worksheets for A-Z. Dotted letters with stroke guides and writing lines. Download as PDF.",
  url: `${SITE_URL}/letter-tracing-worksheets`,
};

export default function LetterTracingWorksheetsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Letter Tracing Worksheets</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Letter Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Printable A-Z letter tracing worksheets with dotted letters, stroke
            guides, and three-line writing practice. Choose individual letters or
            download the full set. Instant PDF — no sign-up required.
          </p>
          <Link
            href="/letter-tracing#generator"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Create Letter Worksheets &rarr;
          </Link>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What&apos;s Included in Each Letter Tracing Worksheet
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Every letter tracing worksheet features dotted uppercase letters
              sized for small hands, with three guide lines (baseline, midline,
              and top line) that teach correct letter proportions. The first row
              includes stroke start indicators so children know exactly where to
              begin each letter.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Dotted letter outlines</strong> — trace directly over
                each letter to build muscle memory
              </li>
              <li>
                <strong>Three-line writing guides</strong> — baseline, midline,
                and top line for proper proportions
              </li>
              <li>
                <strong>Stroke start markers</strong> — arrows show where to
                begin forming each letter
              </li>
              <li>
                <strong>Multiple practice rows</strong> — enough repetition per
                letter for meaningful practice
              </li>
              <li>
                <strong>Adjustable letter size</strong> — larger for beginners,
                smaller as skills improve
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Letter Tracing Worksheets by Skill Level
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Not all children are at the same stage. Our generator lets you
              create worksheets matched to your child&apos;s current ability:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Beginners (ages 3-4):</strong> Start with large letters
                and straight-line letters like L, I, T, H. Use the maximum
                letter size setting.
              </li>
              <li>
                <strong>Developing (ages 4-5):</strong> Introduce curved letters
                like C, O, S. Mix uppercase sets of 5-6 letters at a time.
              </li>
              <li>
                <strong>Advancing (ages 5-6):</strong> Full A-Z practice with
                medium letter sizes. Begin introducing lowercase letters.
              </li>
              <li>
                <strong>Refining (ages 6-7):</strong> Smaller letter sizes for
                standard handwriting practice. Focus on consistency and spacing.
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            Tips for Teaching Letter Formation
          </h2>
          <div className="space-y-4 text-gray-600">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Top-to-bottom, left-to-right.</strong> Most uppercase
                letters start at the top. Establish this habit early.
              </li>
              <li>
                <strong>One letter at a time.</strong> Master each letter before
                moving on. Rushing through the alphabet builds bad habits.
              </li>
              <li>
                <strong>Short daily sessions.</strong> 5-10 minutes of focused
                tracing beats 30 minutes of unfocused practice.
              </li>
              <li>
                <strong>Pair with letter sounds.</strong> Say the letter sound
                while tracing to reinforce letter-sound connections.
              </li>
              <li>
                <strong>Celebrate progress.</strong> Keep earlier worksheets so
                children can see their improvement over time.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Ready to Create Your Letter Tracing Worksheets?
          </h2>
          <p className="text-gray-600 mb-5">
            Choose your letters, adjust the size, and download your PDF in
            seconds. Completely free.
          </p>
          <Link
            href="/letter-tracing#generator"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Open the Letter Worksheet Generator &rarr;
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
