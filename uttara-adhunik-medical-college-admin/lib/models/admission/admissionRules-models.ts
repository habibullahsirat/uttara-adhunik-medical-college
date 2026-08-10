import mongoose, { Schema } from "mongoose";

// Admission Section
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

// Eligibility For national student
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

// Monthly section
const MonthlyFeeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Eligibility For foreign student
const EligibilityForeignStudentSchema = new mongoose.Schema(
  {
    description: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

//Required documents for foreign students
const RequiredDocumentsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  },
);

// Fee Structure for foreign students
const FeeStructureForeignSchema = new mongoose.Schema(
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
delete mongoose.models.MonthlyFeeSection;
delete mongoose.models.EligibilityForeignStudentSection;
delete mongoose.models.RequiredDocumentsSection;
delete mongoose.models.FeeStructureForeignSection;

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

export const MonthlyFeeSection =
  mongoose.models.MonthlyFeeSection ||
  mongoose.model("MonthlyFeeSection", MonthlyFeeSchema);

export const EligibilityForeignStudentSection =
  mongoose.models.EligibilityForeignStudentSection ||
  mongoose.model(
    "EligibilityForeignStudentSection",
    EligibilityForeignStudentSchema,
  );

export const RequiredDocumentsSection =
  mongoose.models.RequiredDocumentsSection ||
  mongoose.model("RequiredDocumentsSection", RequiredDocumentsSchema);

export const FeeStructureForeignSection =
  mongoose.models.FeeStructureForeignSection ||
  mongoose.model("FeeStructureForeignSection", FeeStructureForeignSchema);
