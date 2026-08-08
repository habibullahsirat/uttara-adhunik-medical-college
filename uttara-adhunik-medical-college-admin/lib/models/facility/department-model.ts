import mongoose, { Schema } from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    establishedDate: { type: Date, required: true },
    ctaText: { type: String, required: true, trim: true },
    ctaLink: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.departmentSection;

export const departmentSection =
  mongoose.models.departmentSection ||
  mongoose.model("departmentSection", departmentSchema);
