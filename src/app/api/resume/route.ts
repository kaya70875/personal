// app/api/resume/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // Absolute path to your resume file in the public folder
    const filePath = path.join(
      process.cwd(),
      "public",
      "/files/ahmetkyResume.pdf"
    );

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ message: "File not found" }, { status: 404 });
    }

    // Read the file into a buffer
    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="ahmetkyResume.pdf"',
      },
    });
  } catch (e) {
    console.log(`error while downloading resume ${e}`);
  }
}
