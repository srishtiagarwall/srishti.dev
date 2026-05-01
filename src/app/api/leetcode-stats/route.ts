import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://alfa-leetcode-api.onrender.com/SrishtiAgarwal/solved",
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) return NextResponse.json({ error: "Failed" }, { status: 502 });
  const data = await res.json();
  return NextResponse.json(data);
}
