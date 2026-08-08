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

// Weekly Presentation section
const WeeklyPresentationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Guest Speakers & Collaboration Section
const CollaborationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Academic Activities
const ActivitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.SeminarSection;
delete mongoose.models.WeeklyPresentationSection;
delete mongoose.models.CollaborationSection;
delete mongoose.models.ActivitySection;

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
