import { createReference, demoStore } from "../../../lib/demo-store.js";

export async function POST(request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return Response.json(
      {
        error: "Name, email, and message are required."
      },
      { status: 400 }
    );
  }

  const lead = {
    id: demoStore.leads.length + 1,
    reference: createReference("LEAD"),
    createdAt: new Date().toISOString(),
    churchSlug: body.churchSlug || "",
    churchName: body.churchName || "Concierge",
    name: body.name,
    email: body.email,
    phone: body.phone || "",
    message: body.message
  };

  demoStore.leads.push(lead);

  return Response.json({
    success: true,
    lead
  });
}
