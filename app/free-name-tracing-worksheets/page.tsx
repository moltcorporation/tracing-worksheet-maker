import type { Metadata } from "next";
import Link from "next/link";
import TracingWorksheet from "../components/TracingWorksheet";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Free Printable Name Tracing Worksheets — No Sign-Up Required",
  description:
    "Download free printable name tracing worksheets instantly. No login, no sign-up — generate custom dotted letter tracing sheets for any name. Perfect for preschool and kindergarten.",
  alternates: {
    canonical: `${SITE_URL}/free-name-tracing-worksheets`,
  },
  openGraph: {
    title: "Free Printable Name Tracing Worksheets",
    description:
      "Generate free printable name tracing worksheets with no sign-up required. Instant PDF download for any name.",
    type: "website",
    url: `${SITE_URL}/free-name-tracing-worksheets`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Printable Name Tracing Worksheets",
    description:
      "Get free printable name tracing worksheets instantly. No sign-up, no login required.",
  },
};

export default function FreeNameTracingWorksheetsPage() {
  return (
    <div className="min-h-screen bg-[#fef7f0]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#7c3aed]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Free Name Tracing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
            Free Printable Name Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Create unlimited free name tracing worksheets instantly. Type any name and download as PDF — no sign-up, no login, completely free.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="py-10">
        <TracingWorksheet />
      </section>

      {/* Why Free? */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#1e1b4b] mb-6 text-center">Why Our Name Tracing Worksheets Are Free</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="font-semibold text-[#1e1b4b] mb-2">No Sign-Up Required</h3>
            <p className="text-gray-600">Generate and download worksheets immediately. No email, no password, no login.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">∞</div>
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Unlimited Downloads</h3>
            <p className="text-gray-600">Create as many custom worksheets as you need — names, letters, numbers, all free.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Instant PDF</h3>
            <p className="text-gray-600">Download and print immediately. Works on any device — desktop, tablet, or mobile.</p>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">How to Create Free Name Tracing Worksheets</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7c3aed] text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="font-semibold text-[#1e1b4b]">Type a Name</h3>
                <p className="text-gray-600">Enter any name in the worksheet generator above. Works with single or multiple names.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7c3aed] text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="font-semibold text-[#1e1b4b]">Customize (Optional)</h3>
                <p className="text-gray-600">Adjust lines, spacing, and style to match your student's level and preferences.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-[#7c3aed] text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="font-semibold text-[#1e1b4b]">Download as PDF</h3>
                <p className="text-gray-600">Click download to save the PDF. Print instantly or email to parents and staff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">Is this really free? Are there hidden charges?</summary>
            <p className="text-gray-600 mt-3">Yes, completely free. No hidden charges, no premium upsells, no sign-up. Generate and download as many worksheets as you need.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">Can I use these worksheets in my classroom?</summary>
            <p className="text-gray-600 mt-3">Yes. You can print and use these worksheets for personal and classroom use. Perfect for preschool, kindergarten, and early elementary.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">Can I create worksheets for multiple names at once?</summary>
            <p className="text-gray-600 mt-3">Yes. Type multiple names separated by commas and the generator creates sheets for each one. Great for classes with many students.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">What formats can I download?</summary>
            <p className="text-gray-600 mt-3">All worksheets download as PDF files. Print directly from your computer, tablet, or send to a printer or email.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#7c3aed] to-purple-600 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Create Free Name Tracing Worksheets?</h2>
          <p className="mb-6">Start generating custom worksheets for your classroom or home in seconds. Completely free, no sign-up required.</p>
          <Link href="/free-name-tracing-worksheets#generator" className="inline-block bg-white text-[#7c3aed] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Create Free Worksheets Now
          </Link>
        </div>
      </section>
    </div>
  );
}
