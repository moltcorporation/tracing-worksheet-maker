import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Printable Handwriting Worksheets — Kids & Adults | Print Now",
  description:
    "Free printable handwriting worksheets for kids and adults. Print practice sheets for letters, numbers, names, cursive, and sentences. No signup required.",
  alternates: {
    canonical: `${SITE_URL}/handwriting-worksheets`,
  },
  openGraph: {
    title: "Free Printable Handwriting Worksheets — Kids & Adults",
    description:
      "Free printable handwriting worksheets for kids and adults. Practice letters, numbers, names, cursive, and sentences.",
    type: "website",
    url: `${SITE_URL}/handwriting-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Printable Handwriting Worksheets — Kids & Adults",
    description:
      "Free printable handwriting worksheets for letters, numbers, names, cursive, and sentences.",
  },
  other: {
    "article:tag": [
      "handwriting worksheets",
      "handwriting practice",
      "printable handwriting sheets",
      "handwriting worksheets for adults",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Handwriting Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable handwriting worksheets for kids and adults. Create custom practice sheets for letters, names, cursive, and sentences.",
  url: `${SITE_URL}/handwriting-worksheets`,
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best handwriting worksheets for kids?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best handwriting worksheets for kids include dotted letter tracing for beginners (ages 3-5), alphabet practice sheets for kindergarten, and name tracing worksheets for personalized practice. Start with large letters and wide lines, then progress to standard-sized writing as skills develop.",
      },
    },
    {
      "@type": "Question",
      name: "How can adults improve their handwriting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adults can improve handwriting by practicing with lined worksheets daily for 10-15 minutes. Focus on consistent letter size and spacing. Practice individual letters first, then common words and sentences. Cursive practice sheets help develop fluid, connected writing. Use worksheets with guidelines (baseline, midline, cap line) to build muscle memory.",
      },
    },
    {
      "@type": "Question",
      name: "How do I print handwriting worksheets at home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use our free worksheet generator to create custom handwriting sheets, then click Print or download the PDF. Print on standard letter-size paper (8.5×11 inches). For best results, use a laser printer or set your inkjet to high quality. No signup or account required.",
      },
    },
    {
      "@type": "Question",
      name: "What age should children start handwriting practice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Children can start basic tracing activities at age 3-4 with large dotted letters and shapes. Formal letter formation typically begins in preschool (age 4-5) with uppercase letters, followed by lowercase in kindergarten (age 5-6). Cursive handwriting usually starts in 3rd grade (age 8-9).",
      },
    },
  ],
};

const worksheetTypes = [
  {
    title: "Name Tracing Worksheets",
    desc: "Personalized worksheets with your child's name in dotted letters. Children trace their own name — the most motivating first word to write.",
    href: "/name-tracing",
    audience: "Preschool & Kindergarten (ages 3-6)",
  },
  {
    title: "Alphabet Tracing Worksheets",
    desc: "Full A-Z uppercase and lowercase letter tracing with stroke guides. Each letter on its own line with dotted guides and writing practice space.",
    href: "/alphabet-tracing-worksheets",
    audience: "Pre-K through 1st Grade (ages 4-7)",
  },
  {
    title: "Number Tracing Worksheets",
    desc: "Number formation practice sheets for 0-9 with dotted tracing guides. Includes number words and counting exercises.",
    href: "/number-tracing-worksheets",
    audience: "Pre-K through 1st Grade (ages 4-7)",
  },
  {
    title: "Cursive Handwriting Worksheets",
    desc: "Connected cursive letter practice with dotted guides. Individual letters, common words, and full sentence practice in multiple cursive styles.",
    href: "/cursive-handwriting-worksheets",
    audience: "3rd Grade and up (ages 8+), Adults",
  },
  {
    title: "Sight Word Tracing",
    desc: "High-frequency sight words in dotted tracing format. Practice the most common words children encounter in early reading.",
    href: "/sight-word-tracing",
    audience: "Kindergarten through 2nd Grade (ages 5-8)",
  },
  {
    title: "Preschool Tracing Worksheets",
    desc: "Pre-writing shapes, lines, and simple letter tracing designed for the youngest learners. Large, clear guides for developing fine motor skills.",
    href: "/preschool-tracing-worksheets",
    audience: "Preschool (ages 3-5)",
  },
];

export default function HandwritingWorksheets() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold text-zinc-900 dark:text-white"
          >
            Tracing Worksheet Maker
          </Link>
          <Link
            href="/name-tracing"
            className="rounded-lg bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:bg-[var(--primary-dark)]"
          >
            Create Worksheet
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-16">
        <section className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            Free Printable Handwriting Worksheets
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Create and print custom handwriting practice worksheets for kids and
            adults. Letter tracing, name practice, cursive writing, and more —
            all free, no signup required.
          </p>
          <div className="mt-8">
            <Link
              href="/name-tracing"
              className="rounded-lg bg-[var(--primary)] px-6 py-3 text-base font-medium text-white hover:bg-[var(--primary-dark)]"
            >
              Create Your Worksheet
            </Link>
          </div>
          <p className="mt-3 text-sm text-zinc-500">
            Free to use. Print as many as you need.
          </p>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
            Handwriting Worksheet Types
          </h2>
          <p className="mt-2 text-center text-zinc-600 dark:text-zinc-400">
            Choose the right worksheet for your student&apos;s level and goals.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {worksheetTypes.map((type) => (
              <Link
                key={type.title}
                href={type.href}
                className="group rounded-xl border border-zinc-200 p-6 transition-colors hover:border-blue-300 dark:border-zinc-800 dark:hover:border-blue-700"
              >
                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-[var(--primary)] dark:text-white dark:group-hover:text-blue-400">
                  {type.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {type.desc}
                </p>
                <p className="mt-3 text-xs font-medium text-[var(--primary)] dark:text-blue-400">
                  {type.audience}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
            Handwriting Practice for Kids
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Good handwriting starts with the right practice materials.
              Children learn letter formation best through dotted tracing guides
              that show them exactly where to start and stop each stroke. Our
              worksheets use research-backed guidelines with a solid baseline,
              dashed midline, and dotted cap line to help children write
              consistently sized letters.
            </p>
            <p>
              Start with{" "}
              <Link
                href="/preschool-tracing-worksheets"
                className="text-[var(--primary)] underline hover:text-blue-700 dark:text-blue-400"
              >
                preschool tracing worksheets
              </Link>{" "}
              for pre-writing skills, then move to{" "}
              <Link
                href="/alphabet-tracing-worksheets"
                className="text-[var(--primary)] underline hover:text-blue-700 dark:text-blue-400"
              >
                alphabet tracing
              </Link>{" "}
              for letter formation. Personalize practice with{" "}
              <Link
                href="/name-tracing"
                className="text-[var(--primary)] underline hover:text-blue-700 dark:text-blue-400"
              >
                name tracing worksheets
              </Link>{" "}
              — children are more motivated when practicing their own name.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
            Handwriting Practice for Adults
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-zinc-600 dark:text-zinc-400">
            <p>
              Adult handwriting improvement is entirely achievable with
              consistent practice. Whether you want to clean up your print
              handwriting or learn cursive, 10-15 minutes of daily practice with
              guided worksheets makes a noticeable difference within a few weeks.
            </p>
            <p>
              Start with individual letter practice to build consistent
              letterforms, then progress to common words and full sentences. Our{" "}
              <Link
                href="/cursive-handwriting-worksheets"
                className="text-[var(--primary)] underline hover:text-blue-700 dark:text-blue-400"
              >
                cursive handwriting worksheets
              </Link>{" "}
              are especially popular with adults who want to develop an elegant,
              flowing writing style. Focus on slow, deliberate strokes rather
              than speed — legibility comes from muscle memory, which takes time
              to build.
            </p>
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
            Tips for Effective Handwriting Practice
          </h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
            {[
              {
                title: "Practice daily",
                desc: "Short daily sessions (10-15 minutes) are more effective than long occasional ones. Consistency builds the muscle memory that good handwriting requires.",
              },
              {
                title: "Use proper grip",
                desc: "Hold the pencil between thumb and index finger, resting on the middle finger. A relaxed grip reduces fatigue and improves control.",
              },
              {
                title: "Start with guided lines",
                desc: "Worksheets with baseline, midline, and cap line guides help maintain consistent letter height and spacing — the two biggest factors in legibility.",
              },
              {
                title: "Focus on problem letters",
                desc: "Identify the 3-5 letters that give you the most trouble and practice those specifically. Fixing a few problem letters improves your overall handwriting fast.",
              },
            ].map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-800"
              >
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <h2 className="text-center text-2xl font-bold text-zinc-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-4">
            {[
              {
                q: "What are the best handwriting worksheets for kids?",
                a: "The best handwriting worksheets for kids include dotted letter tracing for beginners (ages 3-5), alphabet practice sheets for kindergarten, and name tracing worksheets for personalized practice. Start with large letters and wide lines, then progress to standard-sized writing.",
              },
              {
                q: "How can adults improve their handwriting?",
                a: "Adults can improve handwriting by practicing with lined worksheets daily for 10-15 minutes. Focus on consistent letter size and spacing. Practice individual letters first, then common words and sentences. Cursive practice sheets help develop fluid, connected writing.",
              },
              {
                q: "How do I print handwriting worksheets at home?",
                a: "Use our free worksheet generator to create custom handwriting sheets, then click Print or download the PDF. Print on standard letter-size paper (8.5×11 inches). No signup or account required.",
              },
              {
                q: "What age should children start handwriting practice?",
                a: "Children can start basic tracing activities at age 3-4 with large dotted letters and shapes. Formal letter formation typically begins in preschool (age 4-5), followed by lowercase in kindergarten (age 5-6). Cursive handwriting usually starts in 3rd grade (age 8-9).",
              },
            ].map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-zinc-200 dark:border-zinc-800"
              >
                <summary className="cursor-pointer px-6 py-4 font-medium text-zinc-900 dark:text-white">
                  {item.q}
                </summary>
                <p className="px-6 pb-4 text-sm text-zinc-600 dark:text-zinc-400">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-xl border border-zinc-200 bg-zinc-50 p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Ready to practice?
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Create custom handwriting worksheets in seconds. Type any name,
            word, or sentence and print.
          </p>
          <Link
            href="/name-tracing"
            className="mt-6 inline-block rounded-lg bg-[var(--primary)] px-6 py-3 text-base font-medium text-white hover:bg-[var(--primary-dark)]"
          >
            Create Your Worksheet
          </Link>
        </section>
      </main>

      <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-5xl px-6 py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-500">
              Tracing Worksheet Maker — Free for teachers and parents.
            </p>
            <p className="text-xs text-zinc-400">
              From the makers of{" "}
              <a
                href="https://classroomseatingchartmaker.com"
                className="underline hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                Classroom Seating Chart Maker
              </a>
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <Link
              href="/"
              className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Home
            </Link>
            <Link
              href="/alphabet-tracing-worksheets"
              className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Alphabet Tracing
            </Link>
            <Link
              href="/cursive-handwriting-worksheets"
              className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Cursive Practice
            </Link>
            <Link
              href="/preschool-tracing-worksheets"
              className="text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
            >
              Preschool Tracing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
