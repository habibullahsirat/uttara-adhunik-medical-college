import { connectToDB } from "@/lib/connectToDB";
import Contact from "@/lib/models/contact";
import { NextResponse } from "next/server";

const PUBLIC_URL = process.env.PUBLIC_URL || "";

export async function GET() {
  await connectToDB();
  const hero = await Contact.find();
  const response = NextResponse.json(hero);
  // response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set("Access-Control-Allow-Origin", PUBLIC_URL);
  return response;
}
