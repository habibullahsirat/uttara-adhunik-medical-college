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

// Facilities Section
const FacilitiesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    ctaText: { type: String, required: true, trim: true },
    ctaLink: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// Medical Service Section
const MedicalServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// Clinical Service section
const ClinicalServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

//Surgical Service Section
const SurgicalServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// Emergency Service
const EmergencyServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Diagnostic Service Section
const DiagnosticServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Additional Service
const AdditionalServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.hospitalBannerSection;
delete mongoose.models.AboutHospitalSection;
delete mongoose.models.FacilitiesSection;
delete mongoose.models.MedicalServiceSection;
delete mongoose.models.ClinicalServiceSection;
delete mongoose.models.SurgicalServiceSection;
delete mongoose.models.EmergencyServiceSection;
delete mongoose.models.DiagnosticServiceSection;
delete mongoose.models.AdditionalServiceSection;

export const hospitalBannerSection =
  mongoose.models.hospitalBannerSection ||
  mongoose.model("hospitalBannerSection", hospitalBannerSchema);

export const AboutHospitalSection =
  mongoose.models.AboutHospitalSection ||
  mongoose.model("AboutHospitalSection", AboutHospitalSchema);

export const FacilitiesSection =
  mongoose.models.FacilitiesSection ||
  mongoose.model("FacilitiesSection", FacilitiesSchema);

export const MedicalServiceSection =
  mongoose.models.MedicalServiceSection ||
  mongoose.model("MedicalServiceSection", MedicalServiceSchema);

export const ClinicalServiceSection =
  mongoose.models.ClinicalServiceSection ||
  mongoose.model("ClinicalServiceSection", ClinicalServiceSchema);

export const SurgicalServiceSection =
  mongoose.models.SurgicalServiceSection ||
  mongoose.model("SurgicalServiceSection", SurgicalServiceSchema);

export const EmergencyServiceSection =
  mongoose.models.EmergencyServiceSection ||
  mongoose.model("EmergencyServiceSection", EmergencyServiceSchema);

export const DiagnosticServiceSection =
  mongoose.models.DiagnosticServiceSection ||
  mongoose.model("DiagnosticServiceSection", DiagnosticServiceSchema);

export const AdditionalServiceSection =
  mongoose.models.AdditionalServiceSection ||
  mongoose.model("AdditionalServiceSection", AdditionalServiceSchema);
