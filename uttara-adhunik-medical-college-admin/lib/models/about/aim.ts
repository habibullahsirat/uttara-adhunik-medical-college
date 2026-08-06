import mongoose, { Schema } from "mongoose";

// Banner section
const BannerSchema = new mongoose.Schema(
  {
    title1: { type: String, required: true, trim: true },
    title2: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

// Objective Section
const ObjectiveSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description1: { type: String, required: true, trim: true },
    description2: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

delete mongoose.models.BannerSchema;
delete mongoose.models.ObjectSchema;

export const BannerSection =
  mongoose.models.BannerSection ||
  mongoose.model("BannerSection", BannerSchema);

export const ObjectiveSection =
  mongoose.models.ObjectiveSection ||
  mongoose.model("ObjectiveSection", ObjectiveSchema);
