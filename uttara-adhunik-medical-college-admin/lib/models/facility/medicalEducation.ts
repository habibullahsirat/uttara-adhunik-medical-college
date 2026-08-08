import mongoose, { Schema } from "mongoose";

const AboutMedicalEducationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// MedicalEducation Facility section
const MedicalEducationFacilitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Academic Database Section
const AcademicDataBaseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Medical Education features
const MEUFeatureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.AboutMedicalEducationSection;
delete mongoose.models.MedicalEducationFacilitySection;
delete mongoose.models.AcademicDataBaseSection;
delete mongoose.models.MEUFeatureSection;

export const AboutMedicalEducationSection =
  mongoose.models.AboutMedicalEducationSection ||
  mongoose.model("AboutMedicalEducationSection", AboutMedicalEducationSchema);

export const MedicalEducationFacilitySection =
  mongoose.models.MedicalEducationFacilitySection ||
  mongoose.model(
    "MedicalEducationFacilitySection",
    MedicalEducationFacilitySchema,
  );

export const AcademicDataBaseSection =
  mongoose.models.AcademicDataBaseSection ||
  mongoose.model("AcademicDataBaseSection", AcademicDataBaseSchema);

export const MEUFeatureSection =
  mongoose.models.MEUFeatureSection ||
  mongoose.model("MEUFeatureSection", MEUFeatureSchema);
