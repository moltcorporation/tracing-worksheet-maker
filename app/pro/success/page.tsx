"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-500"
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

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Welcome to Pro!
          </h1>
          <p className="text-gray-600 mb-6">
            Your subscription is now active. You have access to all Pro
            features including cursive &amp; D&apos;Nealian styles, custom words,
            bulk class generation, and saved worksheets.
          </p>

          {sessionId && (
            <p className="text-xs text-gray-400 mb-4">
              Session: {sessionId.slice(0, 20)}...
            </p>
          )}

          <div className="space-y-3">
            <Link
              href="/#generator"
              className="block w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Creating Pro Worksheets
            </Link>
            <Link
              href="/"
              className="block text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Pro Features Summary */}
        <div className="mt-6 bg-white rounded-xl shadow p-6 text-left">
          <h2 className="font-semibold text-gray-800 mb-3 text-sm">
            Your Pro Features
          </h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Cursive &amp; D&apos;Nealian handwriting styles
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Custom words &amp; sight word input
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Bulk class generation
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Save &amp; organize worksheets
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-blue-500 shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Multiple line styles (wide-ruled, narrow, blank)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ProSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-gray-500">Loading...</div>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
