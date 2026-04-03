import type { Metadata } from "next";
import Link from "next/link";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Sight Word Tracing Worksheets — Printable Practice for Kindergarten",
  description:
    "Create free printable sight word tracing worksheets. Dolch and Fry sight word lists with dotted letter tracing for kindergarten and first grade. Download as PDF instantly.",
  alternates: {
    canonical: `${SITE_URL}/sight-word-tracing`,
  },
  openGraph: {
    title: "Free Sight Word Tracing Worksheets — Kindergarten & 1st Grade",
    description:
      "Create free printable sight word tracing worksheets with Dolch and Fry word lists. Dotted letter tracing for kindergarten and first grade.",
    type: "website",
    url: `${SITE_URL}/sight-word-tracing`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Sight Word Tracing Worksheets — Kindergarten & 1st Grade",
    description:
      "Create free printable sight word tracing worksheets with Dolch and Fry word lists.",
  },
  other: {
    "article:tag": [
      "sight word tracing",
      "sight word tracing worksheets",
      "kindergarten sight words",
      "sight word practice",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Sight Word Tracing Worksheet Maker",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free online tool to generate printable sight word tracing worksheets. Dolch and Fry word lists for kindergarten and first grade.",
  url: `${SITE_URL}/sight-word-tracing`,
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Tracing Worksheet Maker", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Sight Word Tracing", item: `${SITE_URL}/sight-word-tracing` },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are sight words?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sight words are common words that children are encouraged to recognize instantly without sounding out. They include high-frequency words like 'the,' 'and,' 'is,' 'was,' and 'you.' The two most widely used sight word lists are Dolch (220 words) and Fry (1,000 words, organized by frequency).",
      },
    },
    {
      "@type": "Question",
      name: "How do tracing worksheets help with sight words?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tracing sight words combines visual recognition with muscle memory. When children trace a word repeatedly, they internalize its letter sequence and shape. This multi-sensory approach — seeing the word, saying it, and writing it — reinforces recognition far more effectively than flashcards alone.",
      },
    },
    {
      "@type": "Question",
      name: "What sight words should kindergarteners learn first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start with the Dolch Pre-Primer list: a, and, away, big, blue, can, come, down, find, for, funny, go, help, here, I, in, is, it, jump, little, look, make, me, my, not, one, play, red, run, said, see, the, three, to, two, up, we, where, yellow, you. These 40 words appear most frequently in early reading materials.",
      },
    },
    {
      "@type": "Question",
      name: "How many sight words should a child practice per week?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most teachers introduce 3-5 new sight words per week for kindergarteners and 5-8 for first graders. Review previously learned words daily. Use tracing worksheets for 5-10 minutes per session — short, frequent practice is more effective than long sessions.",
      },
    },
  ],
};

export default function SightWordTracingPage() {
  return (
    <div className="min-h-screen bg-[#fef7f0]">
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
      <section className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#7c3aed]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Sight Word Tracing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
            Free Sight Word Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Printable sight word tracing worksheets for kindergarten and first
            grade. Dolch and Fry word lists with dotted letter outlines and
            writing guides to build reading fluency.
          </p>
          <Link
            href="/name-tracing#generator"
            className="inline-block bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Create Sight Word Worksheets
          </Link>
        </div>
      </section>

      {/* Sight Word Lists by Grade */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-6">
            Sight Word Tracing by Grade Level
          </h2>
          <p className="text-gray-600 mb-8">
            Sight words are the most common words in English reading. Children
            who recognize them instantly read faster and with better
            comprehension. Tracing builds the muscle memory that turns
            recognition into automatic recall.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Pre-K Sight Words (40 words)
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                The Dolch Pre-Primer list — the first sight words most children
                learn. Short, high-frequency words that appear on nearly every
                page of early readers: <em>the, and, I, is, it, to, a, in, my, we</em>.
              </p>
              <Link
                href="/name-tracing#generator"
                className="text-amber-600 font-medium text-sm"
              >
                Trace Pre-K sight words &rarr;
              </Link>
            </div>
            <div className="bg-[#f5f3ff] rounded-xl p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Kindergarten Sight Words (52 words)
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Dolch Primer list builds on Pre-Primer with words like{" "}
                <em>all, am, are, at, ate, be, black, brown, but, came, did,
                do, eat, four, get, good, have, he, into, like</em>.
              </p>
              <Link
                href="/name-tracing#generator"
                className="text-[#7c3aed] font-medium text-sm"
              >
                Trace kindergarten sight words &rarr;
              </Link>
            </div>
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                First Grade Sight Words (41 words)
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Dolch First Grade list introduces longer words:{" "}
                <em>after, again, could, every, fly, from, going, has, her,
                him, just, know, let, live, may, old, once, open, over</em>.
              </p>
              <Link
                href="/name-tracing#generator"
                className="text-green-600 font-medium text-sm"
              >
                Trace first grade sight words &rarr;
              </Link>
            </div>
            <div className="bg-purple-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Fry First 100 Words
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                The Fry list organizes the 1,000 most common English words by
                frequency. The first 100 Fry words account for about 50% of all
                written material children encounter in early grades.
              </p>
              <Link
                href="/name-tracing#generator"
                className="text-purple-600 font-medium text-sm"
              >
                Trace Fry 100 sight words &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-4">
            How to Use Sight Word Tracing Worksheets
          </h2>
          <div className="space-y-6 text-gray-600">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                1. Choose Your Word List
              </h3>
              <p className="text-sm">
                Start with the Dolch Pre-Primer list for preschoolers or the
                Primer list for kindergarteners. Type each word into our
                generator to create a custom tracing worksheet. Focus on 3-5
                words at a time.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                2. Trace, Read, Repeat
              </h3>
              <p className="text-sm">
                Have the child say each word aloud before tracing it. Saying the
                word while tracing connects the visual shape to the spoken word.
                After tracing, ask them to read the word without help. This
                three-step process — say, trace, read — is the foundation of
                multi-sensory sight word instruction.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                3. Review and Build
              </h3>
              <p className="text-sm">
                Review previously learned words at the start of each session
                before introducing new ones. When a child can read a word
                instantly without sounding it out, it&apos;s mastered. Move it
                to a &quot;known&quot; pile and add a new word. Aim for mastery
                of 3-5 words per week.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">
            Why Tracing Works for Sight Words
          </h2>
          <div className="space-y-4 text-gray-600">
            <p>
              Sight words are difficult to sound out because many break standard
              phonics rules — words like &quot;the,&quot; &quot;said,&quot; and
              &quot;was&quot; don&apos;t follow predictable letter-sound
              patterns. Children must memorize them as whole units.
            </p>
            <p>
              Tracing engages multiple learning pathways simultaneously. The
              child sees the word (visual), says it aloud (auditory), and
              physically forms each letter (kinesthetic). This multi-sensory
              approach creates stronger memory traces than any single method
              alone.
            </p>
            <p>
              Research shows that handwriting practice — including tracing —
              activates brain regions associated with reading in ways that typing
              or passive viewing does not. For struggling readers, tracing
              worksheets provide the repetition needed to build automatic
              recognition.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1e1b4b] mt-10 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800">
                What are sight words?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Sight words are common words that children are encouraged to
                recognize instantly without sounding out. They include
                high-frequency words like &quot;the,&quot; &quot;and,&quot;
                &quot;is,&quot; &quot;was,&quot; and &quot;you.&quot; The two
                most widely used sight word lists are Dolch (220 words) and Fry
                (1,000 words, organized by frequency).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                How do tracing worksheets help with sight words?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Tracing sight words combines visual recognition with muscle
                memory. When children trace a word repeatedly, they internalize
                its letter sequence and shape. This multi-sensory approach —
                seeing the word, saying it, and writing it — reinforces
                recognition far more effectively than flashcards alone.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                What sight words should kindergarteners learn first?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Start with the Dolch Pre-Primer list: a, and, away, big, blue,
                can, come, down, find, for, funny, go, help, here, I, in, is,
                it, jump, little, look, make, me, my, not, one, play, red, run,
                said, see, the, three, to, two, up, we, where, yellow, you.
                These 40 words appear most frequently in early reading
                materials.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                How many sight words should a child practice per week?
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                Most teachers introduce 3-5 new sight words per week for
                kindergarteners and 5-8 for first graders. Review previously
                learned words daily. Use tracing worksheets for 5-10 minutes per
                session — short, frequent practice is more effective than long
                sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-amber-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-[#1e1b4b] mb-3">
            Create Sight Word Tracing Worksheets
          </h2>
          <p className="text-gray-600 mb-4">
            Type any sight word into our generator to create custom dotted-letter
            tracing worksheets. Print as many copies as you need — free, no
            sign-up required.
          </p>
          <Link
            href="/name-tracing#generator"
            className="inline-block bg-amber-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors"
          >
            Create Sight Word Worksheets &rarr;
          </Link>
        </div>
      </section>

      {/* Cross-links */}
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1e1b4b] text-center mb-6">
            More Tracing Worksheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
              href="/preschool-tracing-worksheets"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Preschool Tracing Worksheets
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Age-appropriate tracing for children ages 3-5.
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
                Complete A-Z alphabet sets for systematic practice.
              </p>
            </Link>
            <Link
              href="/cursive-name-tracing"
              className="block bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-800">
                Cursive Name Tracing
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Cursive handwriting practice with connected letter tracing.
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
