import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const payload = await req.json();
  // TODO: score, persist, compute metrics
  return NextResponse.json({ status: "ok", results: { score: 0.0, submitted: !!payload } });
}
