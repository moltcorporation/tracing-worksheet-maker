"use client";

import { useState } from "react";

// Style preview samples
const StylePreview = ({ style, label }: { style: "print" | "cursive" | "dnealian"; label: string }) => {
  const fontFamily = style === "cursive"
    ? "'Dancing Script', cursive"
    : style === "dnealian"
    ? "'Comic Sans MS', 'Comic Sans', cursive"
    : "'Arial', sans-serif";

  const sampleText = "Abc";
  const isPro = style !== "print";

  return (
    <div className="flex-1 text-center">
      <div className="mb-2 text-xs font-semibold text-gray-500">{label}</div>
      <div
        className={`p-4 rounded-lg border-2 ${
          isPro ? "border-purple-200 bg-purple-50" : "border-gray-200 bg-gray-50"
        } relative`}
      >
        <div
          style={{ fontFamily }}
          className="text-4xl font-bold text-gray-700"
        >
          {sampleText}
        </div>
        {isPro && (
          <div className="absolute top-1 right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs px-1.5 py-0.5 rounded-full font-semibold">
            PRO
          </div>
        )}
      </div>
    </div>
  );
};

const PAYMENT_LINKS = {
  monthly: {
    id: "plink_1THUatDT8EiLsMQhkgbCJWus",
    url: "https://buy.stripe.com/14AdR93lx1lTe1T8Qs3Nm0p",
    label: "$3.99/month",
    price: "$3.99",
    interval: "month",
  },
  yearly: {
    id: "plink_1THUavDT8EiLsMQhyWzYZxQv",
    url: "https://buy.stripe.com/dRmbJ12htc0x6zr7Mo3Nm0q",
    label: "$29.99/year",
    price: "$29.99",
    interval: "year",
    savings: "Save 37%",
  },
};

interface ProUpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
  featureName?: string;
  onProVerified?: (email: string) => void;
}

export default function ProUpgradeModal({
  isOpen,
  onClose,
  featureName,
  onProVerified,
}: ProUpgradeModalProps) {
  const [plan, setPlan] = useState<"monthly" | "yearly">("yearly");
  const [showVerify, setShowVerify] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  if (!isOpen) return null;

  const selectedPlan = PAYMENT_LINKS[plan];

  const handleVerifyAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    setVerifyError("");

    if (!verifyEmail || !verifyEmail.includes("@")) {
      setVerifyError("Please enter a valid email address.");
      return;
    }

    setVerifying(true);

    try {
      // Check both payment links
      const checks = await Promise.all(
        Object.values(PAYMENT_LINKS).map((link) =>
          fetch(
            `https://moltcorporation.com/api/v1/payments/check?stripe_payment_link_id=${link.id}&email=${encodeURIComponent(verifyEmail)}`
          ).then((r) => r.json())
        )
      );

      const hasAccess = checks.some((c) => c.has_access === true);

      if (hasAccess) {
        onProVerified?.(verifyEmail);
        onClose();
      } else {
        setVerifyError(
          "No active Pro subscription found for this email. Subscribe below to get started."
        );
        setShowVerify(false);
      }
    } catch {
      setVerifyError("Unable to verify. Please try again.");
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div className="relative bg-white rounded-xl shadow-2xl max-w-md w-full mx-4 p-6">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="text-center mb-5">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-[#7c3aed]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-extrabold text-[#2d2235]">Upgrade to Pro</h2>
          {featureName && (
            <p className="text-sm text-gray-500 mt-1">
              Unlock <span className="font-medium">{featureName}</span> and all
              Pro features
            </p>
          )}
        </div>

        {showVerify ? (
          /* Already Pro? Verify access */
          <form onSubmit={handleVerifyAccess}>
            <p className="text-sm text-gray-600 mb-3">
              Enter the email you used to subscribe:
            </p>
            <input
              type="email"
              value={verifyEmail}
              onChange={(e) => setVerifyEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-3"
              required
            />
            {verifyError && (
              <p className="text-sm text-red-600 mb-3">{verifyError}</p>
            )}
            <button
              type="submit"
              disabled={verifying}
              className="w-full bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white py-3 px-4 rounded-xl font-bold hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {verifying ? "Verifying..." : "Verify Access"}
            </button>
            <button
              type="button"
              onClick={() => {
                setShowVerify(false);
                setVerifyError("");
              }}
              className="w-full mt-2 text-sm text-gray-500 hover:text-gray-700"
            >
              Back to plans
            </button>
          </form>
        ) : (
          <>
            {/* Plan Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-5">
              <button
                onClick={() => setPlan("monthly")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  plan === "monthly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPlan("yearly")}
                className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                  plan === "yearly"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Yearly
                <span className="ml-1 text-xs text-green-600 font-semibold">
                  Save 37%
                </span>
              </button>
            </div>

            {/* Price */}
            <div className="text-center mb-5">
              <span className="text-3xl font-bold text-gray-900">
                {selectedPlan.price}
              </span>
              <span className="text-gray-500">/{selectedPlan.interval}</span>
            </div>

            {/* CTA - Direct to Stripe payment link */}
            <a
              href={selectedPlan.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white py-3 px-4 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Subscribe Now
            </a>

            {/* Already Pro? */}
            <button
              onClick={() => setShowVerify(true)}
              className="w-full mt-3 text-sm text-[#7c3aed] hover:text-[#6d28d9] font-semibold"
            >
              Already Pro? Verify access
            </button>

            {/* Handwriting Style Preview */}
            {!featureName || featureName.includes("D'Nealian") || featureName.includes("style") ? (
              <div className="mt-5 pt-4 border-t border-gray-100">
                <p className="text-xs font-medium text-gray-500 mb-3">
                  See the Difference:
                </p>
                <div className="flex gap-2 mb-4">
                  <StylePreview style="print" label="Free" />
                  <StylePreview style="cursive" label="Pro - Cursive" />
                  <StylePreview style="dnealian" label="Pro - D'Nealian" />
                </div>
              </div>
            ) : null}

            {/* Features list */}
            <div className="mt-5 pt-4 border-t border-gray-100">
              <p className="text-xs font-medium text-gray-500 mb-2">
                Includes:
              </p>
              <ul className="space-y-1.5 text-xs text-gray-500">
                {[
                  "Cursive & D'Nealian styles",
                  "Custom words & sight words",
                  "Bulk class generation",
                  "Save & organize worksheets",
                  "Multiple line styles",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-1.5">
                    <svg
                      className="w-3.5 h-3.5 text-[#7c3aed] shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
