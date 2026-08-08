import mongoose, { Schema } from "mongoose";

const AboutLibrarySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    data1: { type: String, required: true, trim: true },
    data2: { type: String, required: true, trim: true },
    data3: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.AboutLibrarySection;

export const AboutLibrarySection =
  mongoose.models.AboutLibrarySection ||
  mongoose.model("AboutLibrarySection", AboutLibrarySchema);
