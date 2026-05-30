import { NextResponse } from "next/server";
import { Resend } from "resend";

// 🔐 Secret API Key initialized from .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, service, subject, message } = body;

    // Required fields check
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { success: false, error: "Missing mandatory fields inside the payload." },
        { status: 400 }
      );
    }

    // Dispatching email via Resend
    const emailResponse = await resend.emails.send({
      from: "High Rise Contact <onboarding@resend.dev>", 
      to: "info@highrisedigital.io",
      subject: subject || `New Intake Hook: ${service}`,
      html: `
        <div style="font-family: sans-serif; background-color: #020617; color: #ffffff; padding: 30px; border-radius: 20px; max-width: 600px; border: 1px solid rgba(255,255,255,0.05)">
          <h2 style="color: #3b82f6; border-b: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-bottom: 20px; text-transform: uppercase; font-size: 18px; letter-spacing: 1px;">New Business Proposal Request</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 130px; font-weight: bold;">Full Name:</td>
              <td style="padding: 8px 0; color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #00f2ff; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0; color: #ffffff;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Service Needed:</td>
              <td style="padding: 8px 0; color: #3b82f6; font-weight: bold;">${service}</td>
            </tr>
          </table>
          <div style="margin-top: 25px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="color: #64748b; font-weight: bold; margin-bottom: 5px; font-size: 14px; text-transform: uppercase;">Project Blueprint & Goals:</p>
            <p style="color: #cbd5e1; background-color: rgba(255,255,255,0.02); padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05); line-height: 1.6; margin: 0; font-size: 14px; white-space: pre-wrap;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data: emailResponse }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Internal server pipeline collapse." },
      { status: 500 }
    );
  }
}