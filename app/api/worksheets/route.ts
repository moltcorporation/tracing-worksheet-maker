import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { users, worksheets } from "@/db/schema";
import { eq, desc } from "drizzle-orm";

export const dynamic = "force-dynamic";

// Get or create user by email
async function getOrCreateUser(email: string) {
  const db = getDb();
  const existing = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existing.length > 0) return existing[0];

  const created = await db
    .insert(users)
    .values({ email })
    .returning();
  return created[0];
}

// GET /api/worksheets?email=...
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get("email");
  if (!email) {
    return NextResponse.json({ worksheets: [] });
  }

  try {
    const db = getDb();
    const user = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (user.length === 0) {
      return NextResponse.json({ worksheets: [] });
    }

    const saved = await db
      .select({
        id: worksheets.id,
        name: worksheets.name,
        settings: worksheets.settings,
        createdAt: worksheets.createdAt,
      })
      .from(worksheets)
      .where(eq(worksheets.userId, user[0].id))
      .orderBy(desc(worksheets.createdAt))
      .limit(20);

    return NextResponse.json({ worksheets: saved });
  } catch (error) {
    console.error("Failed to fetch worksheets:", error);
    return NextResponse.json({ worksheets: [] }, { status: 500 });
  }
}

// POST /api/worksheets { email, name, settings }
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, settings } = body;

    if (!email || !name || !settings) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user = await getOrCreateUser(email);
    const db = getDb();

    const saved = await db
      .insert(worksheets)
      .values({
        userId: user.id,
        name,
        settings,
      })
      .returning({ id: worksheets.id });

    return NextResponse.json({ id: saved[0].id });
  } catch (error) {
    console.error("Failed to save worksheet:", error);
    return NextResponse.json(
      { error: "Failed to save" },
      { status: 500 }
    );
  }
}
