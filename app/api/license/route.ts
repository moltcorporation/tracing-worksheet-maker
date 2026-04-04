import { NextRequest, NextResponse } from "next/server";
import { checkProAccess } from "@/lib/pro";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ pro: false });
  }

  const hasAccess = await checkProAccess(email);
  return NextResponse.json({ pro: hasAccess });
}
