import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const required = ["name", "email", "phone", "address", "state"];
    for (const k of required) {
      if (!body?.[k]) return NextResponse.json({ error: `${k} required` }, { status: 400 });
    }
    console.log("New lead:", body);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
} 