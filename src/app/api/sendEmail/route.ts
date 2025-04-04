import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log(process.env.EMAIL_USER);
  console.log(process.env.EMAIL_PASS);
  const { name, email, message } = await req.json();
  console.log("email", email);

  if (!name || !email || !message) {
    return NextResponse.json(
      {
        error: "All fields are required",
      },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Message from ${email}`,
    text: message,
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: `Failed to send message ${e}` },
      { status: 500 }
    );
  }
}
