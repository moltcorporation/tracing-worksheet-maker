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
    <section id="pricing" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
          Simple Pricing
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Start free, upgrade when you need more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Free Tier */}
          <div className="border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-lg text-gray-900">Free</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              $0
              <span className="text-base font-normal text-gray-500">
                /forever
              </span>
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
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
              className="block mt-6 text-center bg-gray-100 text-gray-800 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Start Creating
            </a>
          </div>

          {/* Pro Tier */}
          <div className="border-2 border-blue-500 rounded-xl p-6 relative">
            <span className="absolute -top-3 left-4 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              POPULAR
            </span>
            <h3 className="font-bold text-lg text-gray-900">Pro</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">
              $3.99
              <span className="text-base font-normal text-gray-500">
                /month
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-1">
              or $29.99/year (save 37%)
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <CheckIcon color="text-blue-500" />
                Everything in Free
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-blue-500" />
                Cursive &amp; D&apos;Nealian styles
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-blue-500" />
                Custom words &amp; sight words
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-blue-500" />
                Bulk class generation
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-blue-500" />
                Save &amp; organize worksheets
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-blue-500" />
                Multiple line styles
              </li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              className="block w-full mt-6 text-center bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
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
