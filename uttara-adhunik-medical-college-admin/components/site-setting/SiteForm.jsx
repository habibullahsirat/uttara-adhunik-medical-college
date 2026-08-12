"use client";

import { useState } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function SiteForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    site_name: initialData?.site_name || "",
    tagline: initialData?.tagline || "",
    address: initialData?.address || "",
    email: initialData?.email || "",
    office_email: initialData?.office_email || "",
    phone: initialData?.phone || "",
    facebook_link: initialData?.facebook_link || "",
    instagram_link: initialData?.instagram_link || "",
    linkedin_link: initialData?.linkedin_link || "",
    youtube_link: initialData?.youtube_link || "",
    opening_hour: initialData?.opening_hour || "",
    closing_hour: initialData?.closing_hour || "",
    image: initialData?.image || "",
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
  // Image
  // ============================

  const handleImageChange = (image) => {
    setFormData((prev) => ({
      ...prev,
      image,
    }));

    setErrors((prev) => ({
      ...prev,
      image: "",
    }));
  };

  // ============================
  // Validation
  // ============================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.site_name.trim()) {
      newErrors.site_name = "Site name is required";
    }

    if (!formData.tagline.trim()) {
      newErrors.tagline = "Tagline is required";
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.office_email.trim()) {
      newErrors.office_email = "Office email is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.opening_hour.trim()) {
      newErrors.opening_hour = "Opening hour is required";
    }

    if (!formData.closing_hour.trim()) {
      newErrors.closing_hour = "Closing hour is required";
    }

    if (!formData.image) {
      newErrors.image = "Image is required";
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
      {/* ============================
          Image
      ============================ */}

      <PhotoUpload
        name="image"
        label="Site Logo / Image"
        required
        value={formData.image}
        onChange={handleImageChange}
        error={errors.image}
      />

      {/* ============================
          Site Information
      ============================ */}

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Site Information
        </h3>

        {/* Site Name */}

        <Input
          label="Site Name"
          name="site_name"
          value={formData.site_name}
          onChange={handleChange}
          error={errors.site_name}
          placeholder="Enter site name"
        />

        {/* Tagline */}

        <Input
          label="Tagline"
          name="tagline"
          value={formData.tagline}
          onChange={handleChange}
          error={errors.tagline}
          placeholder="Enter site tagline"
        />

        {/* Address */}

        <Textarea
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={errors.address}
          placeholder="Enter office address"
        />
      </div>

      {/* ============================
          Contact Information
      ============================ */}

      <div className="border-t pt-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Contact Information
        </h3>

        {/* Email */}

        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="Enter email address"
        />

        {/* Office Email */}

        <Input
          label="Office Email"
          type="email"
          name="office_email"
          value={formData.office_email}
          onChange={handleChange}
          error={errors.office_email}
          placeholder="Enter office email"
        />

        {/* Phone */}

        <Input
          label="Phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="Enter phone number"
        />
      </div>

      {/* ============================
          Social Media Links
      ============================ */}

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Social Media Links
        </h3>

        <div className="space-y-4">
          {/* Facebook */}

          <Input
            label="Facebook Link"
            type="url"
            name="facebook_link"
            value={formData.facebook_link}
            onChange={handleChange}
            error={errors.facebook_link}
            placeholder="https://facebook.com/..."
          />

          {/* Instagram */}

          <Input
            label="Instagram Link"
            type="url"
            name="instagram_link"
            value={formData.instagram_link}
            onChange={handleChange}
            error={errors.instagram_link}
            placeholder="https://instagram.com/..."
          />

          {/* LinkedIn */}

          <Input
            label="LinkedIn Link"
            type="url"
            name="linkedin_link"
            value={formData.linkedin_link}
            onChange={handleChange}
            error={errors.linkedin_link}
            placeholder="https://linkedin.com/..."
          />

          {/* YouTube */}

          <Input
            label="YouTube Link"
            type="url"
            name="youtube_link"
            value={formData.youtube_link}
            onChange={handleChange}
            error={errors.youtube_link}
            placeholder="https://youtube.com/..."
          />
        </div>
      </div>

      {/* ============================
          Office Hours
      ============================ */}

      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Office Hours
        </h3>

        <div className="space-y-4">
          {/* Opening Hour */}

          <Input
            label="Opening Hour"
            type="text"
            name="opening_hour"
            value={formData.opening_hour}
            onChange={handleChange}
            error={errors.opening_hour}
            placeholder="e.g. 09:00 AM"
          />

          {/* Closing Hour */}

          <Input
            label="Closing Hour"
            type="text"
            name="closing_hour"
            value={formData.closing_hour}
            onChange={handleChange}
            error={errors.closing_hour}
            placeholder="e.g. 06:00 PM"
          />
        </div>
      </div>

      {/* ============================
          Buttons
      ============================ */}

      <div className="flex justify-end gap-3 pt-6 border-t">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          {initialData ? "Update" : "Create"} Site
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
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>

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

// =========================================
// Textarea Component
// =========================================

function Textarea({ label, error, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label}
      </label>

      <textarea
        {...props}
        rows={3}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
