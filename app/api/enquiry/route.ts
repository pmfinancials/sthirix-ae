import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type EnquiryPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
};

function normaliseValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as EnquiryPayload;

    const firstName = normaliseValue(payload.firstName);
    const lastName = normaliseValue(payload.lastName);
    const email = normaliseValue(payload.email);
    const phone = normaliseValue(payload.phone);
    const enquiryType = normaliseValue(payload.enquiryType);
    const message = normaliseValue(payload.message);

    if (!firstName || !lastName || !email || !phone || !enquiryType || !message) {
      return NextResponse.json(
        { error: "Please complete all enquiry form fields before submitting." },
        { status: 400 },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM ?? smtpUser;
    const smtpTo = process.env.SMTP_TO ?? "compliance@sthirix.ae";
    const smtpPort = Number.parseInt(process.env.SMTP_PORT ?? "587", 10);
    const smtpSecure =
      process.env.SMTP_SECURE === "true" || smtpPort === 465;

    if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom) {
      console.error("SMTP configuration is incomplete.");

      return NextResponse.json(
        { error: "Mail service is not configured yet. Please try again later." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submittedAt = new Date().toLocaleString("en-AE", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Dubai",
    });
    const safeSubmittedAt = escapeHtml(submittedAt);
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeEnquiryType = escapeHtml(enquiryType);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      replyTo: email,
      subject: `New Sthirix enquiry: ${enquiryType}`,
      text: [
        "A new enquiry was submitted from the Sthirix website.",
        "",
        `Submitted: ${submittedAt}`,
        `First Name: ${firstName}`,
        `Last Name: ${lastName}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Enquiry Type: ${enquiryType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111111; line-height: 1.6;">
          <h2 style="margin-bottom: 12px;">New Sthirix enquiry received</h2>
          <p style="margin: 0 0 16px;">A website visitor submitted the enquiry form.</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 720px;">
            <tbody>
              <tr><td style="padding: 8px 12px; border: 1px solid #dddddd;"><strong>Submitted</strong></td><td style="padding: 8px 12px; border: 1px solid #dddddd;">${safeSubmittedAt}</td></tr>
              <tr><td style="padding: 8px 12px; border: 1px solid #dddddd;"><strong>First Name</strong></td><td style="padding: 8px 12px; border: 1px solid #dddddd;">${safeFirstName}</td></tr>
              <tr><td style="padding: 8px 12px; border: 1px solid #dddddd;"><strong>Last Name</strong></td><td style="padding: 8px 12px; border: 1px solid #dddddd;">${safeLastName}</td></tr>
              <tr><td style="padding: 8px 12px; border: 1px solid #dddddd;"><strong>Email</strong></td><td style="padding: 8px 12px; border: 1px solid #dddddd;">${safeEmail}</td></tr>
              <tr><td style="padding: 8px 12px; border: 1px solid #dddddd;"><strong>Phone</strong></td><td style="padding: 8px 12px; border: 1px solid #dddddd;">${safePhone}</td></tr>
              <tr><td style="padding: 8px 12px; border: 1px solid #dddddd;"><strong>Enquiry Type</strong></td><td style="padding: 8px 12px; border: 1px solid #dddddd;">${safeEnquiryType}</td></tr>
            </tbody>
          </table>
          <div style="margin-top: 16px;">
            <strong>Message</strong>
            <p style="margin-top: 8px; white-space: pre-wrap;">${safeMessage}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Failed to send enquiry email.", error);

    return NextResponse.json(
      { error: "Unable to submit your enquiry right now. Please try again later." },
      { status: 500 },
    );
  }
}
