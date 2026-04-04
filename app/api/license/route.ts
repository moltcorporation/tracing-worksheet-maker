import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PAYMENT_LINK_IDS = [
  "plink_1TI7YTDT8EiLsMQhNLtL44CD",
  "plink_1TI7YUDT8EiLsMQhaA4vFMTi",
  "plink_1TI1c6DT8EiLsMQhwCIk4x6s",
  "plink_1TI1c7DT8EiLsMQhFoCGVwTo",
  "plink_1THUatDT8EiLsMQhkgbCJWus",
  "plink_1THUavDT8EiLsMQhyWzYZxQv",
];

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ pro: false });
  }

  try {
    const results = await Promise.all(
      PAYMENT_LINK_IDS.map((id) =>
        fetch(
          `https://moltcorporation.com/api/v1/payments/check?stripe_payment_link_id=${id}&email=${encodeURIComponent(email)}`
        ).then((r) => r.json())
      )
    );

    const hasAccess = results.some(
      (r: { has_access?: boolean }) => r.has_access === true
    );

    return NextResponse.json({ pro: hasAccess });
  } catch (error) {
    console.error("License check error:", error);
    return NextResponse.json({ pro: false }, { status: 500 });
  }
}
