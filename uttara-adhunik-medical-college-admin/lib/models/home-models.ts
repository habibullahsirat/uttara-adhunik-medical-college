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
// Program Item
const programSchema = new Schema(
  {
    programTitle: {
      type: String,
      required: true,
      trim: true,
    },

    programDescription: {
      type: String,
      required: true,
      trim: true,
    },

    href: {
      type: String,
      trim: true,
      default: "#",
    },
  },
  { _id: false },
);

// Hero Section
const heroSectionSchema = new Schema(
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

    image: {
      type: String,
      required: true,
    },

    cta: {
      type: ctaSchema,
      required: true,
    },

    // Right Side Heading
    programHeading: {
      type: String,
      required: true,
      trim: true,
    },

    // Dynamic Programs
    programs: {
      type: [programSchema],
    },
  },
  {
    timestamps: true,
  },
);

// Notice Section
const NoticeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    noticeType: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
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
const AboutSchema = new Schema({
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
});

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

// //how we work section
// const WeWorkSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   image: {
//     type: String,
//     trim: true,
//   },
// });

// // Buying House Services
// const BuyingHouseSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   image: {
//     type: String,
//     required: true,
//     trim: true,
//   },
// });

// // Catalog Section
// const catalogCategorySchema = new Schema(
//   {
//     id: { type: Number, required: true },
//     title: { type: String, required: true, trim: true },
//     description: { type: String, required: true, trim: true },
//     icon: { type: String, required: true, trim: true },
//   },
//   { _id: false },
// );

// const catalogSchema = new Schema(
//   {
//     label: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     heading: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     cta: {
//       type: ctaSchema,
//     },
//     image: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     categories: [catalogCategorySchema],
//   },
//   {
//     timestamps: true,
//   },
// );

// // Services Section
// const servicesFeatureSchema = new Schema(
//   {
//     title: { type: String, required: true, trim: true },
//     description: { type: String, required: true, trim: true },
//   },
//   { _id: false },
// );

// const servicesSchema = new Schema(
//   {
//     title: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     description: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     image: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     imageAlt: {
//       type: String,
//       required: false,
//       trim: true,
//     },
//     imagePosition: {
//       type: String,
//       enum: ["left", "right"],
//       default: "left",
//     },
//     features: [servicesFeatureSchema],
//   },
//   {
//     timestamps: true,
//   },
// );

// Prevent mongoose from returning cached models with old schemas during Next.js HMR
delete mongoose.models.HeroSection;
delete mongoose.models.NoticeSection;
delete mongoose.models.PublicationSection;
delete mongoose.models.AboutSchema;
delete mongoose.models.FeatureSchema;

// delete mongoose.models.WeWork;
// delete mongoose.models.BuyingHouse;
// delete mongoose.models.Catalog;
// delete mongoose.models.ServicesSection;

export const HeroSection =
  mongoose.models.HeroSection ||
  mongoose.model("HeroSection", heroSectionSchema);
export const NoticeSection =
  mongoose.models.NoticeSection ||
  mongoose.model("NoticeSection", NoticeSchema);
export const PublicationSection =
  mongoose.models.PublicationSection ||
  mongoose.model("PublicationSection", PublicationSchema);
export const AboutSection =
  mongoose.models.AboutSection || mongoose.model("AboutSection", AboutSchema);
export const Feature =
  mongoose.models.Feature || mongoose.model("Feature", FeatureSchema);

// export const WeWork =
//   mongoose.models.WeWork || mongoose.model("WeWork", WeWorkSchema);
// export const BuyingHouse =
//   mongoose.models.BuyingHouse ||
//   mongoose.model("BuyingHouse", BuyingHouseSchema);
// export const Catalog =
//   mongoose.models.Catalog || mongoose.model("Catalog", catalogSchema);
// export const ServicesSection =
//   mongoose.models.ServicesSection ||
//   mongoose.model("ServicesSection", servicesSchema);
