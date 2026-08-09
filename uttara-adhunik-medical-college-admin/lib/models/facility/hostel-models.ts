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

delete mongoose.models.SeminarSection;
delete mongoose.models.WeeklyPresentationSection;

export const SeminarSection =
  mongoose.models.SeminarSection ||
  mongoose.model("SeminarSection", SeminarSchema);

export const WeeklyPresentationSection =
  mongoose.models.WeeklyPresentationSection ||
  mongoose.model("WeeklyPresentationSection", WeeklyPresentationSchema);

export const CollaborationSection =
  mongoose.models.CollaborationSection ||
  mongoose.model("CollaborationSection", CollaborationSchema);

export const ActivitySection =
  mongoose.models.ActivitySection ||
  mongoose.model("ActivitySection", ActivitySchema);
