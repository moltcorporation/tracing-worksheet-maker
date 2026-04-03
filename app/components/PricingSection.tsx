"use client";

import { useState } from "react";
import ProUpgradeModal from "./ProUpgradeModal";

const CheckIcon = ({ color }: { color: string }) => (
  <svg
    className={`w-4 h-4 ${color} shrink-0`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function PricingSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="pricing" className="py-12" style={{ background: "#fffbf7" }}>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-[#2d2235] text-center mb-2">
          Simple Pricing
        </h2>
        <p className="text-[#9889a8] text-center mb-8 text-sm">
          Start free, upgrade when you need more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Free Tier */}
          <div className="rounded-2xl border-2 border-[#e9ddf5] bg-white p-6">
            <h3 className="font-bold text-lg text-[#2d2235]">Free</h3>
            <p className="text-3xl font-extrabold text-[#2d2235] mt-2">
              $0
              <span className="text-base font-normal text-[#9889a8]">
                /forever
              </span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#6b5b7b]">
              <li className="flex items-center gap-2">
                <CheckIcon color="text-green-500" />
                Name tracing worksheets
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-green-500" />
                Letters A-Z &amp; Numbers 0-9
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-green-500" />
                Standard print style
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-green-500" />
                PDF download
              </li>
            </ul>
            <a
              href="#generator"
              className="block mt-6 text-center bg-[#faf5ff] text-[#7c3aed] py-2.5 px-4 rounded-xl font-bold text-sm hover:bg-[#f3e8ff] border border-[#e9ddf5] transition-colors"
            >
              Start Creating
            </a>
          </div>

          {/* Pro Tier */}
          <div className="rounded-2xl border-2 border-[#7c3aed] bg-white p-6 relative shadow-lg shadow-purple-100">
            <span className="absolute -top-3 left-4 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white text-xs font-bold px-3 py-0.5 rounded-full">
              POPULAR
            </span>
            <h3 className="font-bold text-lg text-[#2d2235]">Pro</h3>
            <p className="text-3xl font-extrabold text-[#2d2235] mt-2">
              $3.99
              <span className="text-base font-normal text-[#9889a8]">
                /month
              </span>
            </p>
            <p className="text-xs text-[#9889a8] mt-1">
              or $29.99/year (save 37%)
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[#6b5b7b]">
              <li className="flex items-center gap-2">
                <CheckIcon color="text-[#7c3aed]" />
                Everything in Free
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-[#7c3aed]" />
                Cursive &amp; D&apos;Nealian styles
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-[#7c3aed]" />
                Custom words &amp; sight words
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-[#7c3aed]" />
                Bulk class generation
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-[#7c3aed]" />
                Save &amp; organize worksheets
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-[#7c3aed]" />
                Multiple line styles
              </li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              className="block w-full mt-6 text-center bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white py-2.5 px-4 rounded-xl font-bold text-sm hover:shadow-lg hover:scale-[1.02] transition-all"
            >
              Get Pro
            </button>
          </div>
        </div>
      </div>

      <ProUpgradeModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </section>
  );
}
