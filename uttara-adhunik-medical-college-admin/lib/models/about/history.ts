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

const YearSchema = new mongoose.Schema(
  {
    year: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
  },
  { timestamps: true },
);

delete mongoose.models.HistorySchema;
delete mongoose.models.YearSchema;

export const HistorySection =
  mongoose.models.HistorySection ||
  mongoose.model("HistorySection", HistorySchema);

export const YearSection =
  mongoose.models.YearSection || mongoose.model("YearSection", YearSchema);
