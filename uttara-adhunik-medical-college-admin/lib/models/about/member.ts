import mongoose, { Schema } from "mongoose";

const MemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

delete mongoose.models.MemberSchema;

export const MemberSection =
  mongoose.models.MemberSection ||
  mongoose.model("MemberSection", MemberSchema);
