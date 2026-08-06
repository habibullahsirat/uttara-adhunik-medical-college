import mongoose, { Schema } from "mongoose";

// CTA Button
const ctaSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
    href: {
      type: String,
      trim: true,
    },
  },
  { _id: false },
);

//Hero Section
const heroSectionSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Visit Section
const VisitSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    phoneTitle: {
      type: String,
      required: true,
      trim: true,
    },
    cta: {
      title: ctaSchema,
    },
  },
  {
    timestamps: true,
  },
);

// Admission & Aid Section
const AdmissionAidSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    step1: {
      type: String,
      required: true,
      trim: true,
    },
    step2: {
      type: String,
      required: true,
      trim: true,
    },
    step3: {
      type: String,
      required: true,
      trim: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    image3: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Sustainability Section
const SustainabilitySchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: { type: String, required: true, trim: true },
    feature1: { type: String, required: true, trim: true },
    feature2: { type: String, required: true, trim: true },
    feature3: { type: String, required: true, trim: true },
    image1: {
      type: String,
      required: true,
    },
    image2: { type: String, required: true },
  },
  { timestamps: true },
);

// Publication Section
const PublicationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    publicationType: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// About section
const AboutSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    mission: {
      type: String,
      required: true,
      trim: true,
    },
    vision: {
      type: String,
      required: true,
      trim: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    cta: {
      type: ctaSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

//Statistics Section
const StatSchema = new mongoose.Schema(
  {
    stat1: {
      type: String,
      required: true,
      trim: true,
    },
    stat2: {
      type: String,
      required: true,
      trim: true,
    },
    stat3: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Find Department section
const FindDepartmentSchemaLeft = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    popularProgramTitle: {
      type: String,
      required: true,
      trim: true,
    },
    popularSearchTitle: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    cta: {
      type: ctaSchema,
    },
  },
  {
    timestamps: true,
  },
);

const FindDepartmentSchemaRight = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    image1: {
      type: String,
      required: true,
      trim: true,
    },

    image2: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Admission
const AdmissionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Features Section
const FeatureSchema = new mongoose.Schema(
  {
    featureName: {
      type: String,
      required: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    cta: {
      type: ctaSchema,
    },
  },
  {
    timestamps: true,
  },
);

// Principle Message
const PrincipleMessageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      required: true,
      trim: true,
    },
    principleName: {
      type: String,
      required: true,
      trim: true,
    },
    designation: {
      type: String,
      required: true,
      trim: true,
    },
    responsibility: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image1: {
      type: String,
      required: true,
    },
    image2: {
      type: String,
      required: true,
    },
    cta: {
      type: ctaSchema,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Campus Life Section
const CampusLifeSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    cta: ctaSchema,
  },
  {
    timestamps: true,
  },
);

// Alumni Event Section
const AlumniEventImageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const AlumniEventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// News section
const NewsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

//Feedback Section
const feedbackSectionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
      trim: true,
    },

    review: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Prevent mongoose from returning cached models with old schemas during Next.js HMR
delete mongoose.models.AboutOverviewHeroSection;
delete mongoose.models.VisitSection;
delete mongoose.models.AdmissionAidSchema;
delete mongoose.models.SustainabilitySchema;

// Other page
delete mongoose.models.PublicationSection;
delete mongoose.models.AboutSchema;
delete mongoose.models.StatSchema;
delete mongoose.models.FeatureSchema;
delete mongoose.models.FindDepartmentSchemaLeft;
delete mongoose.models.FindDepartmentSchemaRight;
delete mongoose.models.AdmissionSchema;
delete mongoose.models.PrincipleMessageSchema;
delete mongoose.models.CampusLifeSchema;
delete mongoose.models.AlumniEventImageSchema;
delete mongoose.models.AlumniEventSchema;
delete mongoose.models.NewsSchema;
delete mongoose.models.FeedbackSection;

export const AboutOverviewHeroSection =
  mongoose.models.AboutOverviewHeroSection ||
  mongoose.model("AboutOverviewHeroSection", heroSectionSchema);

export const VisitSection =
  mongoose.models.VisitSection || mongoose.model("VisitSection", VisitSchema);

export const AdmissionAidSection =
  mongoose.models.AdmissionAidSection ||
  mongoose.model("AdmissionAidSection", AdmissionAidSchema);

export const SustainabilitySection =
  mongoose.models.SustainabilitySection ||
  mongoose.model("SustainabilitySection", SustainabilitySchema);

// Other page
export const PublicationSection =
  mongoose.models.PublicationSection ||
  mongoose.model("PublicationSection", PublicationSchema);

export const AboutSection =
  mongoose.models.AboutSection || mongoose.model("AboutSection", AboutSchema);

export const StatSection =
  mongoose.models.StatSection || mongoose.model("StatSection", StatSchema);

export const FindDepartmentLeft =
  mongoose.models.FindDepartmentLeft ||
  mongoose.model("FindDepartmentLeft", FindDepartmentSchemaLeft);

export const FindDepartmentRight =
  mongoose.models.FindDepartmentRight ||
  mongoose.model("FindDepartmentRight", FindDepartmentSchemaRight);

export const AdmissionSection =
  mongoose.models.AdmissionSection ||
  mongoose.model("AdmissionSection", AdmissionSchema);

export const Feature =
  mongoose.models.Feature || mongoose.model("Feature", FeatureSchema);

export const PrincipleMessage =
  mongoose.models.PrincipleMessage ||
  mongoose.model("PrincipleMessage", PrincipleMessageSchema);

export const CampusLifeSection =
  mongoose.models.CampusLifeSection ||
  mongoose.model("CampusLifeSection", CampusLifeSchema);

export const AlumniEventImage =
  mongoose.models.AlumniEventImage ||
  mongoose.model("AlumniEventImage", AlumniEventImageSchema);

export const AlumniEvent =
  mongoose.models.AlumniEvent ||
  mongoose.model("AlumniEvent", AlumniEventSchema);

export const NewsSection =
  mongoose.models.NewsSection || mongoose.model("NewsSection", NewsSchema);

export const FeedbackSection =
  mongoose.models.FeedbackSection ||
  mongoose.model("FeedbackSection", feedbackSectionSchema);
