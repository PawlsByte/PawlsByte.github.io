import { NextResponse } from "next/server";
import { assembleExamForm } from "@/lib/exam_assembly";

export async function GET() {
  const form = await assembleExamForm(150);
  return NextResponse.json(form);
}
