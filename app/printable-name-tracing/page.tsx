import type { Metadata } from "next";
import Link from "next/link";
import TracingWorksheet from "../components/TracingWorksheet";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Printable Name Tracing Worksheets — Ready to Print PDF",
  description:
    "Printable name tracing worksheets in PDF format. Create professional worksheets for any name, ready to print. Perfect for classrooms, homeschool, and one-on-one instruction.",
  alternates: {
    canonical: `${SITE_URL}/printable-name-tracing`,
  },
  openGraph: {
    title: "Printable Name Tracing Worksheets PDF",
    description:
      "High-quality printable name tracing worksheets. Generate professional PDF worksheets for any name in seconds.",
    type: "website",
    url: `${SITE_URL}/printable-name-tracing`,
    siteName: "Tracing Worksheet Maker",
  },
  twitter: {
    card: "summary_large_image",
    title: "Printable Name Tracing Worksheets",
    description:
      "Create professional printable name tracing worksheets. Print-ready PDF format.",
  },
};

export default function PrintableNameTracingPage() {
  return (
    <div className="min-h-screen bg-[#fef7f0]">
      {/* Hero */}
      <section className="bg-gradient-to-b from-amber-50 to-white py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <nav className="text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-[#7c3aed]">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">Printable Name Tracing</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] mb-4">
            Printable Name Tracing Worksheets
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional quality printable worksheets for name tracing. High-resolution PDF format that looks great on any printer. Perfect for schools, daycares, and home learning.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="py-10">
        <TracingWorksheet />
      </section>

      {/* Print Quality */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Print-Ready Quality</h2>
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-[#1e1b4b] mb-4">Professional Design</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed] font-bold">✓</span>
                  <span>Clear, readable fonts optimized for printing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed] font-bold">✓</span>
                  <span>Consistent line spacing for proper handwriting development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed] font-bold">✓</span>
                  <span>High-resolution PDF files that print sharp and clear</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed] font-bold">✓</span>
                  <span>Customizable fonts and layouts for different preferences</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#1e1b4b] mb-4">Classroom Ready</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed] font-bold">✓</span>
                  <span>Create worksheets for entire classes in seconds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed] font-bold">✓</span>
                  <span>Batch print multiple student names at once</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed] font-bold">✓</span>
                  <span>Email PDFs to parents, assistants, and substitute teachers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#7c3aed] font-bold">✓</span>
                  <span>No installation or software required — works online</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Who Uses Printable Name Tracing?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1e1b4b] mb-3">📚 Classroom Teachers</h3>
              <p className="text-gray-600">Quickly create worksheets for all students. Print during morning prep. Send home for weekend practice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1e1b4b] mb-3">👶 Preschool & Daycare</h3>
              <p className="text-gray-600">Developmentally appropriate practice. Customize difficulty for mixed-age groups. Parent-friendly take-home materials.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1e1b4b] mb-3">🏠 Homeschool Parents</h3>
              <p className="text-gray-600">Personalized worksheets for each child. Mix with other subjects. Print multiple copies for repeated practice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1e1b4b] mb-3">🎯 Tutors & Specialists</h3>
              <p className="text-gray-600">Targeted practice for individual students. Monitor progress with repeated worksheets. Professional materials for clients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1e1b4b] mb-3">🌍 ESL Teachers</h3>
              <p className="text-gray-600">English learners learn letter formation. Names are culturally relevant. Print for consistent daily practice.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-[#1e1b4b] mb-3">👨‍⚕️ Speech/OT Specialists</h3>
              <p className="text-gray-600">Fine motor development. Therapeutic practice materials. Personalized for each client.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Printing Tips */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Printing Tips for Best Results</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border-l-4 border-[#7c3aed] pl-4">
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Paper Quality</h3>
            <p className="text-gray-600 text-sm">Use standard copy or printer paper (20 lb). Thicker cardstock can be harder for young writers. Colored paper is fine too.</p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Printer Settings</h3>
            <p className="text-gray-600 text-sm">Print in grayscale to save ink. Use normal quality (not draft). Most printers default to correct settings for PDFs.</p>
          </div>
          <div className="border-l-4 border-indigo-500 pl-4">
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Batch Printing</h3>
            <p className="text-gray-600 text-sm">Create all worksheets, then open all PDFs at once. Print to file to batch print across multiple students.</p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-[#1e1b4b] mb-2">Storage & Distribution</h3>
            <p className="text-gray-600 text-sm">Keep PDFs organized by student name. Email directly to parents. Store in cloud for easy access from school or home.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-[#1e1b4b] mb-8 text-center">Printing Questions</h2>
        <div className="space-y-4">
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">What's the file format and will it print?</summary>
            <p className="text-gray-600 mt-3">All worksheets download as PDF files. PDFs print perfectly on any printer. Works on Windows, Mac, tablets, and mobile devices.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">Can I print multiple worksheets at once?</summary>
            <p className="text-gray-600 mt-3">Yes. Create each name, download the PDFs, then open multiple PDFs. Your printer dialog lets you print them all together.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">What if I don't have a color printer?</summary>
            <p className="text-gray-600 mt-3">All worksheets look great in black and white. In fact, grayscale printing saves on ink and is perfectly fine for practice.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">Can I email the PDFs to others?</summary>
            <p className="text-gray-600 mt-3">Yes! Download and share PDFs with parents, assistants, substitute teachers, or colleagues. Completely free to distribute.</p>
          </details>
          <details className="bg-white p-6 rounded-lg shadow-sm">
            <summary className="cursor-pointer font-semibold text-[#1e1b4b]">How big are the PDF files?</summary>
            <p className="text-gray-600 mt-3">Typically 50-200 KB per worksheet. Very small files that download instantly and email easily without size restrictions.</p>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Create Printable Name Tracing Worksheets Now</h2>
          <p className="mb-6">Generate professional PDF worksheets instantly. Print or email. No sign-up required.</p>
          <Link href="/printable-name-tracing#generator" className="inline-block bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
            Create Printable Worksheets
          </Link>
        </div>
      </section>
    </div>
  );
}
