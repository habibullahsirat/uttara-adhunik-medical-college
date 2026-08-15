import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
  {
    studentId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    presentAddress: {
      type: String,
      required: true,
      trim: true,
    },
    permanentAddress: {
      type: String,
      required: true,
      trim: true,
    },
    fatherName: {
      type: String,
      required: true,
      trim: true,
    },
    motherName: {
      type: String,
      required: true,
      trim: true,
    },
    nid: {
      type: String,
      default: null,
      trim: true,
    },
    passport: {
      type: String,
      default: null,
      trim: true,
    },
    password: {
      type: String,
      default: null,
    },
    image: {
      type: String, // Cloudinary URL
      default: "",
    },
    department: {
      type: String,
      required: true,
    },
    cgpa: {
      type: Number,
      default: null,
      min: 0,
      max: 4,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Other"],
    },
    quota: {
      type: String,
      default: "General",
      trim: true,
    },
    nationality: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
