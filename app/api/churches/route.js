import { churches } from "@/lib/churches";

export async function GET() {
  return Response.json(churches);
}
