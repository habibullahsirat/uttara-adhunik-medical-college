import mongoose from "mongoose";

// Admission Section
const AdmissionFormSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    pdfUrl: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.AdmissionFormSection;

export const AdmissionFormSection =
  mongoose.models.AdmissionFormSection ||
  mongoose.model("AdmissionFormSection", AdmissionFormSchema);
