"use client";

import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function AdmissionAidForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    step1: initialData?.step1 || "",
    step2: initialData?.step2 || "",
    step3: initialData?.step3 || "",

    image1: initialData?.image1 || "",
    image2: initialData?.image2 || "",
    image3: initialData?.image3 || "",
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
  // Validation
  // ============================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = "Title is required";

    if (!formData.description.trim())
      newErrors.description = "Description is required";

    if (!formData.step1.trim())
      newErrors.step1 = "Process Overview is required";

    if (!formData.step2.trim())
      newErrors.step2 = "Fees & Financial Information is required";

    if (!formData.step3.trim()) newErrors.step3 = "How To Apply is required";

    if (!formData.image1) newErrors.image1 = "Image 1 is required";
    if (!formData.image2) newErrors.image2 = "Image 2 is required";
    if (!formData.image3) newErrors.image2 = "Image 3 is required";

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
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        error={errors.title}
      />

      <Input
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        error={errors.description}
      />

      <Input
        label="Process Overview "
        name="step1"
        value={formData.step1}
        onChange={handleChange}
        error={errors.step1}
      />

      <Input
        label="Fees & Financial Information "
        name="step2"
        value={formData.step2}
        onChange={handleChange}
        error={errors.step2}
      />

      <Input
        label="How To Apply "
        name="step3"
        value={formData.step3}
        onChange={handleChange}
        error={errors.step3}
      />

      {/* Image */}
      <PhotoUpload
        name="image1"
        value={formData.image1}
        onChange={(image) => {
          setFormData((prev) => ({
            ...prev,
            image1: image,
          }));

          setErrors((prev) => ({
            ...prev,
            image1: "",
          }));
        }}
      />

      <PhotoUpload
        name="image2"
        value={formData.image2}
        onChange={(image) => {
          setFormData((prev) => ({
            ...prev,
            image2: image,
          }));

          setErrors((prev) => ({
            ...prev,
            image2: "",
          }));
        }}
      />

      <PhotoUpload
        name="image3"
        value={formData.image3}
        onChange={(image) => {
          setFormData((prev) => ({
            ...prev,
            image3: image,
          }));

          setErrors((prev) => ({
            ...prev,
            image3: "",
          }));
        }}
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
          {initialData ? "Update" : "Create"} Admission & Aid
        </button>
      </div>
    </form>
  );
}

// =========================================

function Input({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>

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
