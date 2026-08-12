import mongoose from "mongoose";

const SiteSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },

    site_name: {
      type: String,
      required: true,
      trim: true,
    },

    tagline: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    office_email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    facebook_link: {
      type: String,
      trim: true,
    },
    instagram_link: {
      type: String,
      trim: true,
    },
    linkedin_link: {
      type: String,
      trim: true,
    },
    youtube_link: {
      type: String,
      trim: true,
    },

    opening_hour: {
      type: String,
      required: true,
      trim: true,
    },

    closing_hour: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Site || mongoose.model("Site", SiteSchema);
