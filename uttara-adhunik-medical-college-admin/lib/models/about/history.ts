import mongoose, { Schema } from "mongoose";

// History Section
const HistorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

delete mongoose.models.HistorySchema;

export const HistorySection =
  mongoose.models.HistorySection ||
  mongoose.model("HistorySection", HistorySchema);
