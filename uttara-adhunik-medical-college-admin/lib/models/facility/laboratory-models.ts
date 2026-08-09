import mongoose, { Schema } from "mongoose";

const LaboratorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// Training Facility section
const LaboratoryFacilitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.LaboratorySection;
delete mongoose.models.TrainingFacilitySection;

export const LaboratorySection =
  mongoose.models.LaboratorySection ||
  mongoose.model("LaboratorySection", LaboratorySchema);

export const LaboratoryFacilitySection =
  mongoose.models.LaboratoryFacilitySection ||
  mongoose.model("LaboratoryFacilitySection", LaboratoryFacilitySchema);
