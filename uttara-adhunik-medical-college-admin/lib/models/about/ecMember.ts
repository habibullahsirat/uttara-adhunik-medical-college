import mongoose, { Schema } from "mongoose";

const ECMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

delete mongoose.models.ECMemberSection;

export const ECMemberSection =
  mongoose.models.ECMemberSection ||
  mongoose.model("ECMemberSection", ECMemberSchema);
