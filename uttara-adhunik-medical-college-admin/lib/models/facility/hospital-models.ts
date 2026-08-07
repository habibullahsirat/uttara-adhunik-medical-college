import mongoose, { Schema } from "mongoose";

const hospitalBannerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// About Hospital Section
const AboutHospitalSchema = new mongoose.Schema(
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

delete mongoose.models.hospitalBannerSection;
delete mongoose.models.AboutHospitalSection;

export const hospitalBannerSection =
  mongoose.models.hospitalBannerSection ||
  mongoose.model("hospitalBannerSection", hospitalBannerSchema);

export const AboutHospitalSection =
  mongoose.models.AboutHospitalSection ||
  mongoose.model("AboutHospitalSection", AboutHospitalSchema);
