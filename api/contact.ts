/**
 * Vercel Serverless Function: /api/contact
 * Handles contact form submissions and forwards them to Francis Vernard Yap via Resend.
 * 
 * Environment Variables required in Vercel Project Settings:
 * - RESEND_API_KEY: Your Resend API key (starts with "re_...")
 * - CONTACT_RECIPIENT_EMAIL: (Optional) Defaults to yapfrancis555@gmail.com
 */

export const config = {
  runtime: 'edge', // Edge runtime for fast worldwide execution
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validation checks
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return new Response(
        JSON.stringify({ error: 'Name must be at least 2 characters' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'A valid email address is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: 'Message must be at least 10 characters' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || 'yapfrancis555@gmail.com';

    // If Resend API key is not configured (e.g. initial dev preview), log and return helpful instructions
    if (!resendApiKey) {
      console.warn(
        '[Contact API] RESEND_API_KEY is not configured in environment variables. ' +
        'Message received:', { name, email, messageLength: message.length }
      );
      
      return new Response(
        JSON.stringify({
          success: true,
          notice: 'RESEND_API_KEY not configured. Set RESEND_API_KEY in Vercel to receive real emails.',
          data: { name, email },
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Dispatch email via Resend HTTP API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [recipientEmail],
        reply_to: email,
        subject: `[Portfolio Inquiry] Message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #06090A; color: #F2F5F3; border-radius: 12px; border: 1px solid rgba(120,255,170,0.2);">
            <h2 style="color: #39FF88; margin-top: 0;">New Portfolio Message</h2>
            <p><strong>Name:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color: #39FF88;">${escapeHtml(email)}</a></p>
            <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.03); border-radius: 8px; border-left: 3px solid #39FF88;">
              <p style="white-space: pre-wrap; margin: 0;">${escapeHtml(message)}</p>
            </div>
            <p style="margin-top: 24px; font-size: 12px; color: rgba(242,245,243,0.6);">
              Sent from Francis Vernard Yap Portfolio Landing Page
            </p>
          </div>
        `,
      }),
    });

    if (!resendResponse.ok) {
      const errorText = await resendResponse.text();
      console.error('[Resend Error]', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to send email via Resend' }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const resendData = await resendResponse.json();
    return new Response(
      JSON.stringify({ success: true, id: resendData.id }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error: any) {
    console.error('[Contact Handler Error]', error);
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
