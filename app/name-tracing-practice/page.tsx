import type { Metadata } from "next";
import Link from "next/link";
import TracingWorksheet from "../components/TracingWorksheet";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Name Tracing Practice Sheets — Handwriting Skills for Kids",
  description:
    "Printable name tracing practice sheets to build handwriting skills. Custom worksheets with dotted letters help kids learn fine motor control. Download free PDF practice sheets.",
  alternates: {
    canonical: `${SITE_URL}/name-tracing-practice`,
  },
  openGraph: {
    title: "Name Tracing Practice Sheets for Kids",
    description:
      "Custom name tracing practice sheets to develop handwriting and fine motor skills. Create worksheets for any name and difficulty level.",
    type: "website",
    url: `${SITE_URL}/name-tracing-practice`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Name Tracing Practice Sheets",
    description:
      "Printable practice sheets to help kids learn to write their name. Customizable difficulty levels.",
  },
};

export default function NameTracingPracticePage() {
  return (
    <div className="min-h-screen bg-[#fef7f0]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#7c3aed]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Name Tracing Practice</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
            Name Tracing Practice Sheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Help children develop handwriting and fine motor skills with customized name tracing practice sheets. Create worksheets matching your child's ability level.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="py-10">
        <TracingWorksheet />
      </section>

      {/* Why Practice? */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Why Name Tracing Practice Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-[#1e1b4b] mb-3">Builds Fine Motor Skills</h3>
              <p className="text-gray-700">Tracing helps children develop hand strength and coordination. Name tracing is personal and motivating — kids love writing their own name.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1e1b4b] mb-3">Letter Recognition</h3>
              <p className="text-gray-700">While tracing, children learn letter shapes, which strengthens the connection between recognition and writing. Practice leads to independence.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1e1b4b] mb-3">Confidence Building</h3>
              <p className="text-gray-700">Writing their own name is a major milestone. These practice sheets celebrate that achievement and build confidence in writing.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1e1b4b] mb-3">Self-Directed Learning</h3>
              <p className="text-gray-700">Children can practice independently at their own pace. Perfect for home learning, screen-free practice, and building writing habits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Progression */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Progressive Practice Levels</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-[#7c3aed] pl-4">
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Level 1: Dotted Letters (Ages 3-4)</h3>
            <p className="text-gray-600">Thick dotted letters with wide guide lines. Children follow the dots to learn letter formation. Great for first attempts.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Level 2: Dashed Letters (Ages 4-5)</h3>
            <p className="text-gray-600">Thinner dashed lines with tighter spacing. Children develop better control and precision. Standard for preschool practice.</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Level 3: Faded Letters (Ages 5-6)</h3>
            <p className="text-gray-600">Light gray letters with fine lines. Children practice with less visual support, building muscle memory and independence.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Level 4: Blank Lines (Ages 6+)</h3>
            <p className="text-gray-600">Blank lines with writing guides. Children write independently. Ideal for reinforcing skills and building fluency.</p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Tips for Name Tracing Practice Success</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#1e1b4b] mb-2">Keep Sessions Short</h3>
              <p className="text-gray-600 text-sm">5-10 minute sessions work best. It's better to practice consistently than do long, frustrating sessions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#1e1b4b] mb-2">Celebrate Progress</h3>
              <p className="text-gray-600 text-sm">Focus on effort, not perfection. Praise the attempt and practice. Confidence matters more than precision at first.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#1e1b4b] mb-2">Start Easy, Progress Gradually</h3>
              <p className="text-gray-600 text-sm">Use Level 1 first, then move to harder levels as skills improve. Don't rush to harder difficulty levels.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-[#1e1b4b] mb-2">Use Quality Pencils</h3>
              <p className="text-gray-600 text-sm">Ergonomic crayons or pencils sized for small hands make practice easier and more comfortable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Practice Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">What's the best age to start name tracing?</summary>
            <p className="text-gray-600 mt-3">Ages 3-4 is typical, when children show interest in writing. Every child is different — start when they're ready and interested, not by age alone.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">How long should each practice session be?</summary>
            <p className="text-gray-600 mt-3">5-10 minutes is ideal for young children. Short, consistent practice is more effective than long, frustrating sessions. Quality over quantity.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">How often should we practice?</summary>
            <p className="text-gray-600 mt-3">3-4 times per week is great for building skills without pressure. Daily practice is fine if the child enjoys it, but consistency matters more than frequency.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">My child is struggling — what should I do?</summary>
            <p className="text-gray-600 mt-3">Go back to an easier level. Use thicker pencils. Keep sessions shorter and more playful. Some kids develop fine motor skills later — that's completely normal.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-500 to-teal-600 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Start Name Tracing Practice Today</h2>
          <p className="mb-6">Create custom practice sheets matched to your child's level. Free, instant, and personalized.</p>
          <Link href="/name-tracing-practice#generator" className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Create Practice Sheets
          </Link>
        </div>
      </section>
    </div>
  );
}
