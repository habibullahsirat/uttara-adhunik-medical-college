import mongoose, { Schema } from "mongoose";

// Hostel Section
const HostelSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Hostel Services section
const ServicesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.HostelSection;
delete mongoose.models.ServicesSection;

export const HostelSection =
  mongoose.models.HostelSection ||
  mongoose.model("HostelSection", HostelSchema);

export const ServicesSection =
  mongoose.models.ServicesSection ||
  mongoose.model("ServicesSection", ServicesSchema);
