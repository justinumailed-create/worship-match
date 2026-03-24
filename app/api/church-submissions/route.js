import { createReference, demoStore, slugify } from "../../../lib/demo-store.js";

export async function POST(request) {
  const body = await request.json();

  if (!body.name || !body.city || !body.state || !body.zip || !body.email) {
    return Response.json(
      {
        error: "Church name, city, state, ZIP, and email are required."
      },
      { status: 400 }
    );
  }

  const submission = {
    id: demoStore.submissions.length + 1,
    reference: createReference("CHURCH"),
    slug: slugify(`${body.name}-${body.city}-${body.state}`),
    status: "pending",
    approved: false,
    createdAt: new Date().toISOString(),
    ...body,
    serviceTimes: String(body.serviceTimes || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  };

  demoStore.submissions.push(submission);

  return Response.json({
    success: true,
    submission
  });
}
