import { connectToDB } from "@/lib/connectToDB";
import { NoticeSection } from "@/lib/models/home-models";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const data = await req.json();

  await connectToDB();

  try {
    const updated = await NoticeSection.findByIdAndUpdate(id, data, {
      new: true, // Returns the updated document
      runValidators: true, // Ensures model validation
    });

    if (!updated) {
      return NextResponse.json(
        { message: "Notice not found" },
        { status: 404 },
      );
    }

    return NextResponse.json(
      { message: "Notice Successfully Updated", data: updated },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to update notice:", error);
    return NextResponse.json(
      { message: "Failed to update notice" },
      { status: 500 },
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  try {
    await connectToDB();
    const deleted = await NoticeSection.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { message: "Notice not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({ message: "Notice deleted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to delete notice" },
      { status: 500 },
    );
  }
}
