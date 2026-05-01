import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://leetcode-sub-endpoint.vercel.app/leetcode/SrishtiAgarwal",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch LeetCode data" }, { status: 502 });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
