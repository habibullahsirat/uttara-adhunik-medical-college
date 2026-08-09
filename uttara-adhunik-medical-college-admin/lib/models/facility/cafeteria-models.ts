import mongoose, { Schema } from "mongoose";

// Seminar Section
const CafeteriaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const CafeteriaFacilitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.CafeteriaSection;
delete mongoose.models.CafeteriaFacilitySection;

export const CafeteriaSection =
  mongoose.models.CafeteriaSection ||
  mongoose.model("CafeteriaSection", CafeteriaSchema);

export const CafeteriaFacilitySection =
  mongoose.models.CafeteriaFacilitySection ||
  mongoose.model("CafeteriaFacilitySection", CafeteriaFacilitySchema);
