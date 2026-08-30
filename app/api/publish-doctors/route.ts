import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }
  const payload = await getPayload({ config });
  const { docs } = await payload.find({ collection: "doctors", limit: 100 });
  const results = [];
  for (const doc of docs) {
    await payload.update({ collection: "doctors", id: doc.id, data: { status: "published" } });
    results.push(`Published: ${doc.name}`);
  }
  return NextResponse.json({ success: true, results });
}