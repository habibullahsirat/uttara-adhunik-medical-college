import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Contact from "@/lib/models/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { first_name, last_name, email, phone, message, privacy } = body;

    if (!first_name || !last_name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 },
      );
    }

    if (!privacy) {
      return NextResponse.json(
        {
          success: false,
          message: "You must accept the privacy notice.",
        },
        { status: 400 },
      );
    }

    await connectToDB();

    const contact = await Contact.create({
      first_name,
      last_name,
      email,
      phone,
      message,
      privacy,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Contact message saved successfully.",
        data: contact,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to save contact message.",
      },
      { status: 500 },
    );
  }
}
