"use client";

import { useState } from "react";

export default function VisitForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    description: initialData?.description || "",
    phone: initialData?.phone || "",
    phoneTitle: initialData?.phoneTitle || "",

    cta: {
      text: initialData?.cta?.text || "",
      href: initialData?.cta?.href || "",
    },
  });

  const [errors, setErrors] = useState({});

  // ============================
  // Normal Fields
  // ============================

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("cta.")) {
      const field = name.split(".")[1];

      setFormData((prev) => ({
        ...prev,
        cta: {
          ...prev.cta,
          [field]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

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

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.phoneTitle.trim())
      newErrors.phoneTitle = "Phone number title is required";

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
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        error={errors.phone}
      />

      <Input
        label="Phone Title"
        name="phoneTitle"
        value={formData.phoneTitle}
        onChange={handleChange}
        error={errors.phoneTitle}
      />

      {/* CTA */}

      <div className="border-t pt-6">
        <h2 className="font-semibold mb-4">CTA Button</h2>

        <Input
          label="Button Text"
          name="cta.text"
          value={formData.cta.text}
          onChange={handleChange}
        />

        <div className="mt-4">
          <Input
            label="Button Link"
            name="cta.href"
            value={formData.cta.href}
            onChange={handleChange}
          />
        </div>
      </div>

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
          {initialData ? "Update" : "Create"} Visit Section
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
