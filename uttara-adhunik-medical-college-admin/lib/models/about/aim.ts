import mongoose, { Schema } from "mongoose";

const BannerSchema = new mongoose.Schema(
  {
    title1: { type: String, required: true, trim: true },
    title2: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

delete mongoose.models.BannerSchema;

export const BannerSection =
  mongoose.models.BannerSection ||
  mongoose.model("BannerSection", BannerSchema);
