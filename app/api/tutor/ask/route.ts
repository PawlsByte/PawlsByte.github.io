import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const { question } = await req.json();
  return NextResponse.json({
    answer: `Here’s a guided explanation for: ${question}`,
    citations: [],
  });
}
