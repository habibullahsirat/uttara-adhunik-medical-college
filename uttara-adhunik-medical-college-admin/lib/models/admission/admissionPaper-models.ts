import mongoose from "mongoose";

// Admission Section
const AdmissionPaperSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    pdfUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.AdmissionPaperSection;

export const AdmissionPaperSection =
  mongoose.models.AdmissionPaperSection ||
  mongoose.model("AdmissionPaperSection", AdmissionPaperSchema);
