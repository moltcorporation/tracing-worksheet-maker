import type { Metadata } from "next";
import Link from "next/link";
import PricingSection from "../components/PricingSection";

const SITE_URL = "https://nametracingmaker.com";

export const metadata: Metadata = {
  title: "Pricing — Tracing Worksheet Maker",
  description:
    "Upgrade to Pro for unlimited custom worksheets, cursive styles, and advanced features. Start free, upgrade when you need more.",
  alternates: {
    canonical: `${SITE_URL}/pricing`,
  },
  openGraph: {
    title: "Pricing — Tracing Worksheet Maker",
    description:
      "Upgrade to Pro for unlimited custom worksheets, cursive styles, and advanced features.",
    type: "website",
    url: `${SITE_URL}/pricing`,
  },
};

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b-2 border-[#e9ddf5]" style={{ background: "#faf5ff" }}>
        <div className="max-w-5xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#7c3aed] hover:text-[#6d28d9] font-semibold text-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <div className="absolute top-10 left-[8%] w-12 h-12 rounded-full bg-pink-200 opacity-40 blur-sm" />
        <div className="absolute top-24 right-[12%] w-8 h-8 rounded-full bg-sky-200 opacity-50 blur-sm" />
        <div className="absolute bottom-16 left-[15%] w-6 h-6 rounded-full bg-[var(--mint)] opacity-40 blur-sm" />

        <div className="max-w-3xl mx-auto px-4 text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#2d2235] mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-[#6b5b7b] max-w-2xl mx-auto">
            Start free with all the core features. Upgrade to Pro when you need advanced tools like cursive styles, bulk generation, and worksheet organization.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-extrabold text-[#2d2235] text-center mb-8">
            Questions About Pricing?
          </h2>
          <div className="space-y-5">
            {[
              {
                q: "Is the Free plan really unlimited?",
                a: "Yes! The Free plan gives you unlimited access to name tracing, letters A-Z, and numbers 0-9 with standard print styles. No hidden limits or paywalls.",
              },
              {
                q: "What features do I get with Pro?",
                a: "Pro unlocks Cursive and D'Nealian writing styles, the ability to create custom words and sight words, bulk class generation for multiple students, worksheet organization and saving, and multiple line style options.",
              },
              {
                q: "Can I cancel my Pro subscription anytime?",
                a: "Yes. You can manage your subscription directly through Stripe at any time. There's no long-term commitment required.",
              },
              {
                q: "What's the difference between monthly and yearly?",
                a: "Both plans include the same Pro features. The yearly plan costs $29.99 (save 37% vs monthly), while the monthly plan is $3.99. Choose yearly if you plan to use it long-term.",
              },
              {
                q: "Do you offer refunds?",
                a: "We process refunds through Stripe according to their standard refund policy. Contact us if you have questions about your subscription.",
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border-2 border-[#e9ddf5] bg-white overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-bold text-[#2d2235] text-sm hover:bg-[#faf5ff] transition-colors">
                  {faq.q}
                  <svg
                    className="w-4 h-4 text-[#9889a8] group-open:rotate-180 transition-transform shrink-0 ml-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="px-5 pb-4 text-sm text-[#6b5b7b] leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12" style={{ background: "#fffbf7" }}>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-[#2d2235] mb-4">
            Ready to get started?
          </h2>
          <p className="text-[#6b5b7b] mb-6">
            Create unlimited tracing worksheets for free. No credit card required.
          </p>
          <Link
            href="/#generator"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white font-bold px-8 py-3 text-sm shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9-7-9-7-9 7 9 7z"
              />
            </svg>
            Start Creating Worksheets
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#e9ddf5]" style={{ background: "#faf5ff" }}>
        <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-[#9889a8]">
          <p>
            &copy; {new Date().getFullYear()} Tracing Worksheet Maker. All
            rights reserved.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <Link
              href="/"
              className="hover:text-[#7c3aed] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className="hover:text-[#7c3aed] transition-colors font-semibold text-[#2d2235]"
            >
              Pricing
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
