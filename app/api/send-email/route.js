import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { type, churchName, email, seekerName, seekerEmail, message } = body;

    let subject, html;

    if (type === 'registration-confirmation') {
      subject = `Your church is now live on Worship Match`;
      html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2E2242;">Welcome to the Registry, ${churchName}</h2>
          <p>This is a confirmation that your sanctuary is now live and discoverable on Worship Match.</p>
          <p>We are honored to help seekers find their way to your community.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Next Steps:</strong></p>
          <ul>
            <li>Your profile is now appearing in search results for your ZIP code.</li>
            <li>Seekers can contact you directly through the platform.</li>
          </ul>
          <p style="font-size: 12px; color: #666; margin-top: 30px;">Thank you for partnering with Worship Match.</p>
        </div>
      `;
    } else {
      // Default to visitor connection
      subject = `New Visitor Connection for ${churchName}`;
      html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2E2242;">New Connection Request</h2>
          <p>A seeker has matched with your sanctuary and would like to connect.</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p><strong>Seeker Name:</strong> ${seekerName}</p>
          <p><strong>Seeker Email:</strong> ${seekerEmail}</p>
          <p><strong>Message:</strong><br />${message || 'No message provided.'}</p>
          <hr style="border: 0; border-top: 1px solid #eee;" />
          <p style="font-size: 12px; color: #666;">This connection was made through Worship Match.</p>
        </div>
      `;
    }

    const { data, error } = await resend.emails.send({
      from: 'Worship Match <onboarding@resend.dev>',
      to: email,
      subject: subject,
      reply_to: type === 'registration-confirmation' ? 'support@aplaceformetoworship.com' : seekerEmail,
      html: html,
    });

    if (error) {
      console.error('Resend Error:', error);
      return new Response(JSON.stringify({ success: false, error }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Email API error:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}
