"use client";

import { useState } from "react";

export default function FeeForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    particulars: initialData?.particulars || "",
    amount: initialData?.amount ?? "",
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

    if (!formData.particulars.trim()) {
      newErrors.particulars = "Particulars is required";
    }

    if (formData.amount === "") {
      newErrors.amount = "Amount is required";
    } else if (Number(formData.amount) < 0) {
      newErrors.amount = "Amount cannot be negative";
    } else if (isNaN(Number(formData.amount))) {
      newErrors.amount = "Amount must be a valid number";
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

    onSubmit({
      ...formData,
      amount: Number(formData.amount),
    });
  };

  // ============================
  // UI
  // ============================

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {" "}
      <Input
        label="Particulars"
        name="particulars"
        value={formData.particulars}
        onChange={handleChange}
        error={errors.particulars}
        placeholder="Enter fee particulars"
      />
      <Input
        label="Amount"
        name="amount"
        type="number"
        min="0"
        step="0.01"
        value={formData.amount}
        onChange={handleChange}
        error={errors.amount}
        placeholder="Enter amount"
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
          {initialData ? "Update" : "Create"} Fee
        </button>
      </div>
    </form>
  );
}

// =========================================

function Input({ label, error, ...props }) {
  return (
    <div>
      {" "}
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
