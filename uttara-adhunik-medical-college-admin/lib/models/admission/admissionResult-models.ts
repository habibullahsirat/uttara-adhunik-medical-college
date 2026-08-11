import mongoose from "mongoose";

// Admission Section
const AdmissionResultSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    pdfUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.AdmissionResultSection;

export const AdmissionResultSection =
  mongoose.models.AdmissionResultSection ||
  mongoose.model("AdmissionResultSection", AdmissionResultSchema);
