import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Preschool Tracing Worksheets — Printable Letters, Numbers & Shapes",
  description:
    "Download free printable preschool tracing worksheets. Letters, numbers, shapes, and lines designed for ages 3-5. Dotted outlines with writing guides for early handwriting development.",
  alternates: {
    canonical: `${SITE_URL}/preschool-tracing-worksheets`,
  },
  openGraph: {
    title: "Free Preschool Tracing Worksheets — Letters, Numbers & Shapes",
    description:
      "Download free printable preschool tracing worksheets with letters, numbers, and shapes. Age-appropriate dotted outlines for early handwriting practice.",
    type: "website",
    url: `${SITE_URL}/preschool-tracing-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Preschool Tracing Worksheets — Letters, Numbers & Shapes",
    description:
      "Download free printable preschool tracing worksheets with letters, numbers, and shapes.",
  },
  other: {
    "article:tag": [
      "preschool tracing",
      "tracing worksheets for preschool",
      "preschool handwriting",
      "pre-K worksheets",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Preschool Tracing Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable preschool tracing worksheets. Letters, numbers, shapes, and lines for ages 3-5.",
  url: `${SITE_URL}/preschool-tracing-worksheets`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tracing Worksheet Maker", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Preschool Tracing Worksheets", item: `${SITE_URL}/preschool-tracing-worksheets` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What tracing worksheets are best for preschoolers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with line tracing (straight lines, curves, zigzags) to build pencil control. Then move to shapes (circles, squares, triangles), uppercase letters in their name, and numbers 0-5. Keep sessions short — 5-10 minutes for ages 3-4.",
      },
    },
    {
      "@type": "Question",
      name: "At what age should a child start tracing worksheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most children are ready for basic line tracing around age 3. By age 4, they can trace simple shapes and large letters. Every child develops differently — if they can hold a crayon and follow a path with their finger, they're ready to start tracing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make tracing worksheets for preschool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use our free tracing worksheet generator. Type any name, word, or select letters and numbers. The tool creates dotted outlines with writing guides sized for young learners. Download as a PDF and print — no account required.",
      },
    },
  ],
};

export default function PreschoolTracingWorksheetsPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
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
      <section className="bg-gradient-to-b from-green-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-[var(--muted-light)] mb-4">
            <Link href="/" className="hover:text-[var(--primary)]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--foreground)]">Preschool Tracing Worksheets</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            Free Preschool Tracing Worksheets
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-6">
            Printable tracing worksheets designed for preschoolers ages 3-5.
            Letters, numbers, shapes, and lines with dotted outlines and writing
            guides to build early handwriting skills.
          </p>
          <Link
            href="/name-tracing#generator"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Create Preschool Worksheets
          </Link>
        </div>
      </section>

      {/* Worksheet Types for Preschool */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-6">
            Tracing Worksheets for Preschool
          </h2>
          <p className="text-[var(--muted)] mb-8">
            Preschoolers learn best when activities match their developmental
            stage. Our worksheets progress from simple line tracing to letters
            and numbers, building fine motor skills at each step.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Link
              href="/letter-tracing#generator"
              className="block bg-green-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-[var(--foreground)] text-lg mb-2">
                Letter Tracing for Preschool
              </h3>
              <p className="text-sm text-[var(--muted)] mb-3">
                Start with uppercase letters — they use simpler strokes than
                lowercase. Focus on letters in the child&apos;s name first, then
                expand to the full alphabet. Large dotted outlines with
                three-line writing guides.
              </p>
              <span className="text-green-600 font-medium text-sm">
                Create letter worksheets &rarr;
              </span>
            </Link>
            <Link
              href="/number-tracing#generator"
              className="block bg-[var(--primary-light)] rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-[var(--foreground)] text-lg mb-2">
                Number Tracing for Preschool
              </h3>
              <p className="text-sm text-[var(--muted)] mb-3">
                Numbers 0-9 with formation guides showing stroke direction.
                Start with 0-5 for younger preschoolers, then add 6-9 as
                confidence builds. Pairs naturally with counting activities.
              </p>
              <span className="text-[var(--primary)] font-medium text-sm">
                Create number worksheets &rarr;
              </span>
            </Link>
            <Link
              href="/name-tracing#generator"
              className="block bg-purple-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-[var(--foreground)] text-lg mb-2">
                Name Tracing for Preschool
              </h3>
              <p className="text-sm text-[var(--muted)] mb-3">
                The most motivating first tracing activity — their own name.
                Type any name to generate custom dotted-letter worksheets.
                Children learn letter shapes while practicing something
                personally meaningful.
              </p>
              <span className="text-purple-600 font-medium text-sm">
                Create name worksheets &rarr;
              </span>
            </Link>
            <Link
              href="/alphabet-tracing-worksheets"
              className="block bg-orange-50 rounded-xl p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="font-bold text-[var(--foreground)] text-lg mb-2">
                Shape &amp; Line Tracing
              </h3>
              <p className="text-sm text-[var(--muted)] mb-3">
                Before letters come shapes. Circles, squares, triangles, and
                zigzag lines build the pencil control preschoolers need for
                letter formation. The foundation of all handwriting.
              </p>
              <span className="text-orange-600 font-medium text-sm">
                Browse tracing worksheets &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Developmental Guide */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--foreground)] mb-4">
            Preschool Tracing by Age
          </h2>
          <div className="space-y-6 text-[var(--muted)]">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[var(--foreground)] text-lg mb-2">
                Ages 3-3.5: Pre-Writing Skills
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Vertical and horizontal line tracing</li>
                <li>Large circle tracing</li>
                <li>Scribbling within boundaries</li>
                <li>Finger tracing before pencil tracing</li>
              </ul>
              <p className="text-sm mt-2">
                At this stage, focus on grip and control rather than accuracy.
                Thick crayons or jumbo pencils work best.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[var(--foreground)] text-lg mb-2">
                Ages 3.5-4: Shape &amp; Letter Introduction
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Basic shapes: circles, squares, triangles</li>
                <li>Letters in their name (uppercase)</li>
                <li>Numbers 1-5</li>
                <li>Zigzag and wavy line patterns</li>
              </ul>
              <p className="text-sm mt-2">
                Children can now follow dotted outlines with increasing
                accuracy. Keep worksheets to 4-5 items per page to avoid
                frustration.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-[var(--foreground)] text-lg mb-2">
                Ages 4-5: Letter &amp; Number Mastery
              </h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>All 26 uppercase letters A-Z</li>
                <li>Numbers 0-9 with formation guides</li>
                <li>Beginning lowercase letter exposure</li>
                <li>Simple sight words (the, and, is)</li>
              </ul>
              <p className="text-sm mt-2">
                By pre-K, most children can trace all uppercase letters and
                numbers. This is the ideal time for daily 10-minute practice
                sessions.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-10 mb-4">
            Tips for Preschool Tracing Success
          </h2>
          <div className="space-y-4 text-[var(--muted)]">
            <ol className="list-decimal list-inside space-y-2">
              <li>
                <strong>Start with their name</strong> — it&apos;s the most
                motivating word for any preschooler to learn to write
              </li>
              <li>
                <strong>Keep sessions short</strong> — 5-10 minutes for ages
                3-4, up to 15 minutes for ages 4-5
              </li>
              <li>
                <strong>Use proper grip</strong> — encourage a tripod grip
                (thumb, index, and middle finger) from the start
              </li>
              <li>
                <strong>Celebrate progress</strong> — praise effort over
                perfection. &quot;You stayed on the dots!&quot; beats &quot;That
                doesn&apos;t look right.&quot;
              </li>
              <li>
                <strong>Print fresh copies</strong> — repetition builds muscle
                memory. Print 3-5 copies of each worksheet for multiple practice
                sessions
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-[var(--foreground)] mt-10 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                What tracing worksheets are best for preschoolers?
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                Start with line tracing (straight lines, curves, zigzags) to
                build pencil control. Then move to shapes (circles, squares,
                triangles), uppercase letters in their name, and numbers 0-5.
                Keep sessions short — 5-10 minutes for ages 3-4.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                At what age should a child start tracing worksheets?
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                Most children are ready for basic line tracing around age 3. By
                age 4, they can trace simple shapes and large letters. Every
                child develops differently — if they can hold a crayon and follow
                a path with their finger, they&apos;re ready to start tracing.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                How do I make tracing worksheets for preschool?
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                Use our free tracing worksheet generator. Type any name, word,
                or select letters and numbers. The tool creates dotted outlines
                with writing guides sized for young learners. Download as a PDF
                and print — no account required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-green-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-[var(--foreground)] mb-3">
            Print Preschool Tracing Worksheets
          </h2>
          <p className="text-[var(--muted)] mb-4">
            Create custom tracing worksheets for your preschooler — names,
            letters, and numbers with age-appropriate dotted outlines. Free PDF
            download, no sign-up required.
          </p>
          <Link
            href="/name-tracing#generator"
            className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Create Preschool Worksheets &rarr;
          </Link>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[var(--foreground)] text-center mb-6">
            More Tracing Worksheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/letter-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[var(--foreground)]">
                Letter Tracing Worksheets
              </h3>
              <p className="text-sm text-[var(--muted-light)] mt-1">
                Individual A-Z letter tracing sheets with stroke guides.
              </p>
            </Link>
            <Link
              href="/alphabet-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[var(--foreground)]">
                Alphabet Tracing Worksheets
              </h3>
              <p className="text-sm text-[var(--muted-light)] mt-1">
                Complete A-Z alphabet sets for systematic practice.
              </p>
            </Link>
            <Link
              href="/number-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[var(--foreground)]">
                Number Tracing Worksheets
              </h3>
              <p className="text-sm text-[var(--muted-light)] mt-1">
                Numbers 0-9 and 0-20 tracing with formation guides.
              </p>
            </Link>
            <Link
              href="/name-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[var(--foreground)]">
                Name Tracing Worksheets
              </h3>
              <p className="text-sm text-[var(--muted-light)] mt-1">
                Create personalized name tracing sheets for your child.
              </p>
            </Link>
            <Link
              href="/cursive-name-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[var(--foreground)]">
                Cursive Name Tracing
              </h3>
              <p className="text-sm text-[var(--muted-light)] mt-1">
                Cursive handwriting practice with connected letter tracing.
              </p>
            </Link>
            <Link
              href="/sight-word-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-[var(--foreground)]">
                Sight Word Tracing
              </h3>
              <p className="text-sm text-[var(--muted-light)] mt-1">
                Dolch and Fry sight word tracing for kindergarten and first grade.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--border)] bg-white">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-xs text-[var(--muted-light)]">
          <Link href="/" className="hover:text-[var(--primary)]">
            Tracing Worksheet Maker
          </Link>{" "}
          &mdash; Free printable tracing worksheets
          <span className="mx-2">&middot;</span>
          From the makers of{" "}
          <a href="https://classroomseatingchartmaker.com" className="hover:text-[var(--primary)]">Classroom Seating Chart Maker</a>
        </div>
      </footer>
    </div>
  );
}
