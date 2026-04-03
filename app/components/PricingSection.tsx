"use client";

import { useState } from "react";
import ProUpgradeModal from "./ProUpgradeModal";

const CheckIcon = ({ color }: { color: string }) => {
  const colorMap: { [key: string]: string } = {
    "text-mint": "var(--mint)",
    "text-primary": "var(--primary)",
  };

  return (
    <svg
      className="w-4 h-4 shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      style={{ color: colorMap[color] || color }}
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default function PricingSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="pricing" className="py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-3xl font-black text-center mb-3 leading-tight"
          style={{ color: "var(--foreground)" }}
        >
          Simple, Fair Pricing
        </h2>
        <p
          className="text-center mb-10"
          style={{ color: "var(--muted)" }}
        >
          Free forever. Upgrade only if you need advanced features.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Free Tier */}
          <div
            className="rounded-2xl p-7 border"
            style={{
              borderColor: "var(--border)",
              background: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <h3 className="font-bold text-lg" style={{ color: "var(--foreground)" }}>
              Free
            </h3>
            <p className="text-4xl font-black mt-3" style={{ color: "var(--foreground)" }}>
              $0
              <span className="text-base font-normal ml-2" style={{ color: "var(--muted)" }}>
                forever
              </span>
            </p>
            <ul className="mt-6 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-mint" />
                <span>Name tracing worksheets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-mint" />
                <span>Letters A-Z &amp; Numbers 0-9</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-mint" />
                <span>Standard print style</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-mint" />
                <span>Unlimited PDF downloads</span>
              </li>
            </ul>
            <a
              href="#generator"
              className="block mt-6 text-center font-bold py-3 px-4 rounded-lg transition-all hover:translate-y-[-2px]"
              style={{
                background: "var(--surface)",
                color: "var(--foreground)",
                border: "1px solid var(--border)",
              }}
            >
              Start Creating Free
            </a>
          </div>

          {/* Pro Tier */}
          <div
            className="rounded-2xl p-7 border-2 relative"
            style={{
              borderColor: "var(--primary)",
              background: "rgba(124, 58, 237, 0.05)",
            }}
          >
            <span
              className="absolute -top-4 left-6 text-xs font-bold px-3 py-1 rounded-full text-white"
              style={{ background: "var(--primary)" }}
            >
              🚀 MOST POPULAR
            </span>
            <h3 className="font-bold text-lg mt-1" style={{ color: "var(--foreground)" }}>
              Pro
            </h3>
            <p className="text-4xl font-black mt-3" style={{ color: "var(--foreground)" }}>
              $3.99
              <span className="text-base font-normal ml-2" style={{ color: "var(--muted)" }}>
                /month
              </span>
            </p>
            <p className="text-xs font-semibold mt-2" style={{ color: "var(--primary)" }}>
              or $29.99/year (save 37%)
            </p>
            <ul className="mt-6 space-y-3 text-sm" style={{ color: "var(--muted)" }}>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-primary" />
                <span>Everything in Free</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-primary" />
                <span>Cursive &amp; D&apos;Nealian styles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-primary" />
                <span>Custom words &amp; sight words</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-primary" />
                <span>Bulk class generation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-primary" />
                <span>Save &amp; organize worksheets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckIcon color="text-primary" />
                <span>Multiple line styles</span>
              </li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              className="block w-full mt-6 text-center font-bold py-3 px-4 rounded-lg text-white transition-all hover:translate-y-[-2px] hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, var(--primary), var(--pink))",
              }}
            >
              Upgrade to Pro
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
