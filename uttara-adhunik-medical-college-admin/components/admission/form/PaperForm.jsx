"use client";

import { useState } from "react";
import PDFUpload from "@/components/ui/PDFUpload";

export default function PaperForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    pdfUrl: initialData?.pdfUrl || "",
  });

  const [errors, setErrors] = useState({});

  // ============================
  // Normal Fields
  // ============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ============================
  // PDF
  // ============================

  const handlePdfChange = (pdfUrl) => {
    setFormData((prev) => ({
      ...prev,
      pdfUrl,
    }));

    setErrors((prev) => ({
      ...prev,
      pdfUrl: "",
    }));
  };

  // ============================
  // Validation
  // ============================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.pdfUrl) {
      newErrors.pdfUrl = "PDF is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ============================
  // Submit
  // ============================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formData);
  };

  // ============================
  // UI
  // ============================

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}

      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={errors.title}
        placeholder="Enter PDF title"
      />

      {/* PDF */}

      <PDFUpload
        name="pdf"
        label="PDF Document"
        required
        value={formData.pdfUrl}
        onChange={handlePdfChange}
        error={errors.pdfUrl}
      />

      {/* Buttons */}

      <div className="flex justify-end gap-3 pt-6 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-md"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          {initialData ? "Update" : "Create"} PDF
        </button>
      </div>
    </form>
  );
}

// =========================================
// Input Component
// =========================================

function Input({ label, error, ...props }) {
  return (
    <div>
      {" "}
      <label className="block text-sm font-medium mb-1">{label} </label>
      <input
        {...props}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
