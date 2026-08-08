import mongoose, { Schema } from "mongoose";

const TrainingSchema = new mongoose.Schema(
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
const TrainingFacilitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.TrainingSection;
delete mongoose.models.TrainingFacilitySection;

export const TrainingSection =
  mongoose.models.TrainingSection ||
  mongoose.model("TrainingSection", TrainingSchema);

export const TrainingFacilitySection =
  mongoose.models.TrainingFacilitySection ||
  mongoose.model("TrainingFacilitySection", TrainingFacilitySchema);
