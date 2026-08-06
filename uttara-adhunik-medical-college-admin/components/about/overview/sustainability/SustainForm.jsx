"use client";

import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function SustainForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    feature1: initialData?.feature1 || "",
    feature2: initialData?.feature2 || "",
    feature3: initialData?.feature3 || "",

    image1: initialData?.image1 || "",
    image2: initialData?.image2 || "",
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

    if (!formData.feature1.trim()) newErrors.feature1 = "Feature 1 is required";

    if (!formData.feature2.trim()) newErrors.feature2 = "Feature 2 is required";

    if (!formData.feature3.trim()) newErrors.feature3 = "Feature 3 required";

    if (!formData.image1) newErrors.image1 = "Image 1 is required";
    if (!formData.image2) newErrors.image2 = "Image 2 is required";

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
        label="Feature 1"
        name="feature1"
        value={formData.feature1}
        onChange={handleChange}
        error={errors.feature1}
      />

      <Input
        label="FFeature 2"
        name="feature2"
        value={formData.feature2}
        onChange={handleChange}
        error={errors.feature2}
      />

      <Input
        label="Feature 3"
        name="feature3"
        value={formData.feature3}
        onChange={handleChange}
        error={errors.feature3}
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
          {initialData ? "Update" : "Create"} Sustainability Section
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
