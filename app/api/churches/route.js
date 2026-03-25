import { churches } from "@/lib/churches";

export async function GET() {
  return Response.json(churches);
}

export async function POST(request) {
  const body = await request.json();
  // In a real app, this would save to a database.
  // For now, we'll just return success to simulate the save.
  return Response.json({ success: true, church: body });
}
