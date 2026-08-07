import mongoose, { Schema } from "mongoose";

const GBMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    designation: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

delete mongoose.models.GBMemberSection;

export const GBMemberSection =
  mongoose.models.GBMemberSection ||
  mongoose.model("GBMemberSection", GBMemberSchema);
