import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      company,
      projectType,
      budgetRange,
      message,
      preferredContact,
      consent,
      _gotcha,
    } = body;

    // 1. Honeypot anti-spam defense
    if (_gotcha) {
      return NextResponse.json(
        { success: true, message: "Submission processed" },
        { status: 200 }
      );
    }

    // 2. Required fields validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your name (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address (e.g. name@domain.com)." },
        { status: 400 }
      );
    }

    if (!projectType || typeof projectType !== "string") {
      return NextResponse.json(
        { error: "Please select a project focus area." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your project description or requirements." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Please accept the privacy consent to proceed." },
        { status: 400 }
      );
    }

    // Generate unique inquiry reference code
    const referenceId = `KKV-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;

    // ALWAYS log the inquiry to terminal/server so no lead is ever lost
    console.log(`\n======================================================`);
    console.log(`📩 NEW PROJECT INQUIRY RECEIVED [${referenceId}]`);
    console.log(`======================================================`);
    console.log(`• Name:        ${name}`);
    console.log(`• Email:       ${email}`);
    console.log(`• Company:     ${company || "Not specified"}`);
    console.log(`• Focus:       ${projectType}`);
    console.log(`• Budget:      ${budgetRange || "Flexible"}`);
    console.log(`• Preference:  ${preferredContact}`);
    console.log(`• Scope:       ${message}`);
    console.log(`======================================================\n`);

    // 3. Email Dispatch Configuration
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || process.env.GMAIL_USER;
    const gmailUser = process.env.GMAIL_USER ? process.env.GMAIL_USER.trim() : "";
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
      ? process.env.GMAIL_APP_PASSWORD.replace(/\s+/g, "").trim()
      : "";
    const resendApiKey = process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.trim() : "";

    const emailSubject = `🚀 New Project Inquiry [${referenceId}] — ${name} (${projectType})`;

    const emailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${emailSubject}</title>
      </head>
      <body style="margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #0F172A;">
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #F1F5F9; padding: 32px 16px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #FFFFFF; border-radius: 12px; border: 1px solid #E2E8F0; box-shadow: 0 4px 16px rgba(15, 23, 42, 0.05); overflow: hidden;">
                
                <!-- Brand Top Accent Bar -->
                <tr>
                  <td style="height: 5px; background: linear-gradient(90deg, #0052FF 0%, #00D8F6 100%);"></td>
                </tr>

                <!-- Header -->
                <tr>
                  <td style="padding: 28px 32px 20px 32px; border-bottom: 1px solid #F1F5F9;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td>
                          <div style="font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: #0F172A;">
                            KKVEXA<span style="color: #00D8F6;">.</span>
                          </div>
                          <div style="font-size: 12px; color: #64748B; font-weight: 500; margin-top: 2px;">
                            AI &amp; Software Studio
                          </div>
                        </td>
                        <td align="right" valign="top">
                          <span style="display: inline-block; background-color: #EFF6FF; border: 1px solid #DBEAFE; color: #1E40AF; font-size: 11px; font-weight: 700; font-family: monospace; padding: 4px 10px; border-radius: 6px;">
                            ${referenceId}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Intro Title -->
                <tr>
                  <td style="padding: 24px 32px 12px 32px;">
                    <h1 style="margin: 0; font-size: 18px; font-weight: 700; color: #0F172A; letter-spacing: -0.3px;">
                      New Project Inquiry Received
                    </h1>
                    <p style="margin: 6px 0 0 0; font-size: 13px; color: #64748B; line-height: 1.5;">
                      A new client has submitted a project scope via the official KKVEXA website.
                    </p>
                  </td>
                </tr>

                <!-- Client Details Table -->
                <tr>
                  <td style="padding: 12px 32px 20px 32px;">
                    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="border: 1px solid #E2E8F0; border-radius: 8px; overflow: hidden; background-color: #FFFFFF;">
                      
                      <tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #64748B; width: 140px;">
                          Client Name
                        </td>
                        <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #0F172A;">
                          ${name}
                        </td>
                      </tr>

                      <tr style="border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #64748B;">
                          Client Email
                        </td>
                        <td style="padding: 12px 16px; font-size: 14px; font-weight: 600;">
                          <a href="mailto:${email}" style="color: #2563EB; text-decoration: none; font-weight: 600;">
                            ${email}
                          </a>
                        </td>
                      </tr>

                      <tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #64748B;">
                          Company
                        </td>
                        <td style="padding: 12px 16px; font-size: 14px; color: #334155; font-weight: 500;">
                          ${company || "Not specified"}
                        </td>
                      </tr>

                      <tr style="border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #64748B;">
                          Project Focus
                        </td>
                        <td style="padding: 12px 16px; font-size: 13px;">
                          <span style="display: inline-block; background-color: #F0FDF4; border: 1px solid #DCFCE7; color: #166534; font-weight: 700; padding: 3px 10px; border-radius: 6px;">
                            ${projectType}
                          </span>
                        </td>
                      </tr>

                      <tr style="background-color: #F8FAFC; border-bottom: 1px solid #E2E8F0;">
                        <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #64748B;">
                          Budget Scope
                        </td>
                        <td style="padding: 12px 16px; font-size: 14px; font-weight: 600; color: #0F172A;">
                          ${budgetRange || "Flexible / Scoping needed"}
                        </td>
                      </tr>

                      <tr>
                        <td style="padding: 12px 16px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #64748B;">
                          Preferred Mode
                        </td>
                        <td style="padding: 12px 16px; font-size: 14px; color: #334155; font-weight: 500;">
                          ${preferredContact}
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>

                <!-- Scope / Requirements Section -->
                <tr>
                  <td style="padding: 0 32px 24px 32px;">
                    <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.6px; color: #475569; margin-bottom: 8px;">
                      Project Scope &amp; Requirements
                    </div>
                    <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-left: 4px solid #0052FF; border-radius: 6px; padding: 16px; font-size: 14px; line-height: 1.6; color: #1E293B; white-space: pre-wrap;">
                      ${message}
                    </div>
                  </td>
                </tr>

                <!-- Action Button -->
                <tr>
                  <td style="padding: 0 32px 32px 32px;" align="center">
                    <table role="presentation" border="0" cellspacing="0" cellpadding="0">
                      <tr>
                        <td align="center" style="border-radius: 8px; background-color: #0F1724;">
                          <a href="mailto:${email}?subject=Re:%20KKVEXA%20Project%20Inquiry%20[${referenceId}]" target="_blank" style="display: inline-block; padding: 12px 28px; font-size: 14px; font-weight: 600; color: #FFFFFF; text-decoration: none; border-radius: 8px;">
                            Reply to ${name} &rarr;
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background-color: #F8FAFC; border-top: 1px solid #E2E8F0; padding: 20px 32px; text-align: center;">
                    <p style="margin: 0; font-size: 12px; color: #64748B; font-weight: 500;">
                      KKVEXA AI &amp; Software Studio • Official Client Dispatch
                    </p>
                    <p style="margin: 4px 0 0 0; font-size: 11px; color: #94A3B8;">
                      Confidential notification. Generated automatically via kkvexa.com
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    // Attempt email dispatch via Gmail SMTP or Resend
    let emailSent = false;
    let emailErrorDetail = "";

    if (gmailUser && gmailAppPassword && receiverEmail) {
      try {
        const transporter = nodemailer.createTransport({
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          connectionTimeout: 4000,
          greetingTimeout: 4000,
          socketTimeout: 5000,
          auth: {
            user: gmailUser,
            pass: gmailAppPassword,
          },
        });

        await transporter.sendMail({
          from: `"KKVEXA Inquiries" <${gmailUser}>`,
          to: receiverEmail,
          replyTo: email,
          subject: emailSubject,
          html: emailHtml,
        });
        emailSent = true;
        console.log(`[Email Sent] Forwarded successfully to ${receiverEmail}`);
      } catch (err: unknown) {
        emailErrorDetail = err instanceof Error ? err.message : String(err);
        console.error("Gmail SMTP dispatch error:", emailErrorDetail);
      }
    } else if (resendApiKey && receiverEmail) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.CONTACT_SENDER_EMAIL || "KKVEXA Studio <onboarding@resend.dev>",
            to: [receiverEmail],
            reply_to: email,
            subject: emailSubject,
            html: emailHtml,
          }),
        });
        if (res.ok) {
          emailSent = true;
          console.log(`[Resend Sent] Forwarded successfully to ${receiverEmail}`);
        } else {
          const resText = await res.text();
          console.error("Resend API error:", resText);
        }
      } catch (err: unknown) {
        console.error("Resend dispatch error:", err);
      }
    }

    return NextResponse.json({
      success: true,
      referenceId,
      emailDispatched: emailSent,
      message: "Your inquiry has been successfully received. A senior engineer will review your scope and follow up within 24 hours.",
    });
  } catch (err: unknown) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again." },
      { status: 500 }
    );
  }
}
