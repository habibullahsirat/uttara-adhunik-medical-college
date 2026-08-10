import mongoose, { Schema } from "mongoose";

// Seminar Section
const AdmissionProcedureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const EligibilityNationalStudentSchema = new mongoose.Schema(
  {
    description: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// National Student Selection
const NationalStudentSelectionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// National Student Quota
const NationalStudentQuotaSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Fee Structure
const FeeStructureSchema = new mongoose.Schema(
  {
    particulars: {
      type: String,
      required: true,
      trim: true,
    },
    amount: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  },
);

delete mongoose.models.AdmissionProcedureSection;
delete mongoose.models.EligibilityNationalStudentSection;
delete mongoose.models.NationalStudentSelectionSection;
delete mongoose.models.NationalStudentQuotaSection;
delete mongoose.models.FeeStructureSection;

export const AdmissionProcedureSection =
  mongoose.models.AdmissionProcedureSection ||
  mongoose.model("AdmissionProcedureSection", AdmissionProcedureSchema);

export const EligibilityNationalStudentSection =
  mongoose.models.EligibilityNationalStudentSection ||
  mongoose.model(
    "EligibilityNationalStudentSection",
    EligibilityNationalStudentSchema,
  );

export const NationalStudentSelectionSection =
  mongoose.models.NationalStudentSelectionSection ||
  mongoose.model(
    "NationalStudentSelectionSection",
    NationalStudentSelectionSchema,
  );

export const NationalStudentQuotaSection =
  mongoose.models.NationalStudentQuotaSection ||
  mongoose.model("NationalStudentQuotaSection", NationalStudentQuotaSchema);

export const FeeStructureSection =
  mongoose.models.FeeStructureSection ||
  mongoose.model("FeeStructureSection", FeeStructureSchema);
