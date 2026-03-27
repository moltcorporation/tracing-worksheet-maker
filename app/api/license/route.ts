import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { users, subscriptions } from "@/db/schema";
import { eq, and } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");

  if (!email) {
    return NextResponse.json({ pro: false });
  }

  try {
    const [user] = await getDb()
      .select()
      .from(users)
      .where(eq(users.email, email));

    if (!user) {
      return NextResponse.json({ pro: false });
    }

    const [subscription] = await getDb()
      .select()
      .from(subscriptions)
      .where(
        and(
          eq(subscriptions.userId, user.id),
          eq(subscriptions.status, "active")
        )
      );

    if (!subscription) {
      return NextResponse.json({ pro: false, userId: user.id });
    }

    return NextResponse.json({
      pro: true,
      userId: user.id,
      subscription: {
        status: subscription.status,
        currentPeriodEnd: subscription.currentPeriodEnd,
        cancelAtPeriodEnd: subscription.cancelAtPeriodEnd,
      },
    });
  } catch (error) {
    console.error("License check error:", error);
    return NextResponse.json({ pro: false }, { status: 500 });
  }
}
