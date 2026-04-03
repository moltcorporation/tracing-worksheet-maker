"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="max-w-md mx-auto px-4 pt-16 pb-12">
        <div className="text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-[var(--mint)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-[var(--mint)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-[var(--foreground)] mb-2 font-heading">
            Welcome to Pro!
          </h1>
          <p className="text-[var(--muted)] mb-6">
            Your subscription is now active. You have access to all Pro
            features including cursive &amp; D&apos;Nealian styles, custom words,
            bulk class generation, and saved worksheets.
          </p>

          {sessionId && (
            <p className="text-xs text-[var(--muted-light)] mb-4">
              Session: {sessionId.slice(0, 20)}...
            </p>
          )}
        </div>

        {/* Pro Features Summary */}
        <div className="bg-[var(--surface)] rounded-xl border border-[var(--border)] p-6 mb-6">
          <h2 className="font-semibold text-[var(--foreground)] mb-3 text-sm font-heading">
            Your Pro Features
          </h2>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            {[
              "Cursive & D'Nealian handwriting styles",
              "Custom words & sight word input",
              "Bulk class generation",
              "Save & organize worksheets",
              "Multiple line styles (wide-ruled, narrow, blank)",
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[var(--primary)] shrink-0"
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

        <div className="space-y-3">
          <p className="text-sm text-[var(--muted)] text-center">
            To activate Pro in your browser, verify your email:
          </p>
          <Link
            href="/pro/verify"
            className="block w-full bg-[var(--primary)] text-white py-3 px-4 rounded-lg font-semibold hover:bg-[var(--primary-dark)] transition-colors text-center"
          >
            Verify Pro Access
          </Link>
          <Link
            href="/#generator"
            className="block w-full border border-[var(--border)] text-[var(--foreground)] py-3 px-4 rounded-lg font-semibold hover:bg-[var(--surface)] transition-colors text-center"
          >
            Start Creating Pro Worksheets
          </Link>
          <Link
            href="/"
            className="block text-sm text-[var(--muted-light)] hover:text-[var(--primary)] transition-colors text-center"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ProSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
          <div className="text-[var(--muted)]">Loading...</div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
