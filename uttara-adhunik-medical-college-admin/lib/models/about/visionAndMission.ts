import mongoose, { Schema } from "mongoose";

const VisionAndMissionSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

delete mongoose.models.VisionAndMissionSchema;

export const VisionAndMissionSection =
  mongoose.models.VisionAndMissionSection ||
  mongoose.model("VisionAndMissionSection", VisionAndMissionSchema);
