import mongoose, { Schema } from "mongoose";

// Seminar Section
const SeminarSchema = new mongoose.Schema(
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

// Training Facility section
const TrainingFacilitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.SeminarSection;
delete mongoose.models.TrainingFacilitySection;

export const SeminarSection =
  mongoose.models.SeminarSection ||
  mongoose.model("SeminarSection", SeminarSchema);

export const TrainingFacilitySection =
  mongoose.models.TrainingFacilitySection ||
  mongoose.model("TrainingFacilitySection", TrainingFacilitySchema);
