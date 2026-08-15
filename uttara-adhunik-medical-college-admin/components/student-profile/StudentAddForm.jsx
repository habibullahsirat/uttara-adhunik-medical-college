"use client";

import { useState, useEffect } from "react";
import PhotoUpload from "@/components/ui/PhotoUpload";

export default function StudentAddForm({ initialData, onSubmit, onCancel }) {
  const [formData, setFormData] = useState({
    studentId: initialData?.studentId || "",
    name: initialData?.name || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",

    presentAddress: initialData?.presentAddress || "",
    permanentAddress: initialData?.permanentAddress || "",

    fatherName: initialData?.fatherName || "",
    motherName: initialData?.motherName || "",

    nid: initialData?.nid || "",
    passport: initialData?.passport || "",
    password: initialData?.password || "",

    image: initialData?.image || "",

    department: initialData?.department || "",
    cgpa: initialData?.cgpa ?? "",

    gender: initialData?.gender || "",
    quota: initialData?.quota || "General",

    nationality: initialData?.nationality || "",
    country: initialData?.country || "",
  });

  const [sameAsPresent, setSameAsPresent] = useState(false);
  const [errors, setErrors] = useState({});
  const [departments, setDepartments] = useState([]);
  const [departmentsLoading, setDepartmentsLoading] = useState(true);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        setDepartmentsLoading(true);

        const response = await fetch("/api/facility/department");

        if (!response.ok) {
          throw new Error("Failed to fetch departments");
        }

        const data = await response.json();

        setDepartments(data);
      } catch (error) {
        console.error("Error fetching departments:", error);
        setDepartments([]);
      } finally {
        setDepartmentsLoading(false);
      }
    };

    fetchDepartments();
  }, []);

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
  // Present / Permanent address sync
  // ============================

  const handleSameAsPresentToggle = (e) => {
    const checked = e.target.checked;
    setSameAsPresent(checked);

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        permanentAddress: prev.presentAddress,
      }));

      setErrors((prev) => ({
        ...prev,
        permanentAddress: "",
      }));
    }
  };

  const handlePresentAddressChange = (e) => {
    const { value } = e.target;

    setFormData((prev) => ({
      ...prev,
      presentAddress: value,
      permanentAddress: sameAsPresent ? value : prev.permanentAddress,
    }));

    setErrors((prev) => ({
      ...prev,
      presentAddress: "",
      ...(sameAsPresent ? { permanentAddress: "" } : {}),
    }));
  };

  // ============================
  // Validation
  // ============================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.studentId.trim())
      newErrors.studentId = "Student ID is required";

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";

    if (!formData.presentAddress.trim())
      newErrors.presentAddress = "Present address is required";

    if (!formData.permanentAddress.trim())
      newErrors.permanentAddress = "Permanent address is required";

    if (!formData.fatherName.trim())
      newErrors.fatherName = "Father's name is required";

    if (!formData.motherName.trim())
      newErrors.motherName = "Mother's name is required";

    if (!formData.image) newErrors.image = "Photo is required";

    if (!formData.department.trim())
      newErrors.department = "Department is required";

    if (!formData.gender) newErrors.gender = "Gender is required";

    if (!formData.nationality.trim())
      newErrors.nationality = "Nationality is required";

    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (
      formData.cgpa !== "" &&
      (isNaN(Number(formData.cgpa)) ||
        Number(formData.cgpa) < 0 ||
        Number(formData.cgpa) > 4)
    ) {
      newErrors.cgpa = "CGPA must be a number between 0 and 4";
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

    // nid / password / cgpa can be null per the model — send null
    // instead of an empty string when left blank.
    const payload = {
      ...formData,
      nid: formData.nid.trim() ? formData.nid.trim() : null,
      passport: formData.passport.trim() ? formData.passport.trim() : null,
      password: formData.password.trim() ? formData.password.trim() : null,
      cgpa: formData.cgpa === "" ? null : Number(formData.cgpa),
    };

    onSubmit(payload);
  };

  // ============================
  // UI
  // ============================

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Identity */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Student ID"
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          error={errors.studentId}
        />

        <Input
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <Input
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
        />
      </div>

      {/* Photo */}

      <PhotoUpload
        name="image"
        label="Student Photo"
        required
        value={formData.image}
        onChange={handleImageChange}
        error={errors.image}
      />

      {/* Address */}

      <div className="border-t pt-6">
        <h2 className="font-semibold mb-4">Address</h2>

        <Input
          label="Present Address"
          name="presentAddress"
          value={formData.presentAddress}
          onChange={handlePresentAddressChange}
          error={errors.presentAddress}
        />

        <label className="flex items-center gap-2 mt-3 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={sameAsPresent}
            onChange={handleSameAsPresentToggle}
            className="rounded border-gray-300"
          />
          Permanent address same as present address
        </label>

        <div className="mt-4">
          <Input
            label="Permanent Address"
            name="permanentAddress"
            value={formData.permanentAddress}
            onChange={handleChange}
            error={errors.permanentAddress}
            disabled={sameAsPresent}
          />
        </div>
      </div>

      {/* Guardian info */}

      <div className="border-t pt-6">
        <h2 className="font-semibold mb-4">Guardian Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Father's Name"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            error={errors.fatherName}
          />

          <Input
            label="Mother's Name"
            name="motherName"
            value={formData.motherName}
            onChange={handleChange}
            error={errors.motherName}
          />
        </div>
      </div>

      {/* Academic info */}

      <div className="border-t pt-6">
        <h2 className="font-semibold mb-4">Academic Information</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* <Input
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            error={errors.department}
          /> */}

          {/* <Select
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            error={errors.department}
            options={[
              // If need any change must be changed to model
              { value: "", label: "Select Department" },
              { value: "EYE", label: "EYE" },
              { value: "Medicine", label: "Medicine" },
              { value: "Gastrology", label: "Gastrology" },
              { value: "ENT", label: "ENT" },
              { value: "Dermatology", label: "Dermatology" },
              { value: "Orthopedic", label: "Orthopedic" },
              { value: "Surgeon", label: "Surgeon" },
            ]}
          /> */}

          <Select
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            error={errors.department}
            options={[
              {
                value: "",
                label: departmentsLoading
                  ? "Loading departments..."
                  : "Select Department",
              },
              ...departments.map((department) => ({
                value: department.title,
                label: department.title,
              })),
            ]}
          />

          <Input
            label="CGPA"
            name="cgpa"
            type="number"
            step="0.01"
            min="0"
            max="4"
            placeholder="Leave blank if not applicable"
            value={formData.cgpa}
            onChange={handleChange}
            error={errors.cgpa}
          />
        </div>
      </div>

      {/* Personal / identity details */}

      <div className="border-t pt-6">
        <h2 className="font-semibold mb-4">Personal Details</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            error={errors.gender}
            options={[
              { value: "", label: "Select gender" },
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Other", label: "Other" },
            ]}
          />

          <Input
            label="Quota"
            name="quota"
            value={formData.quota}
            onChange={handleChange}
            error={errors.quota}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <Input
            label="Nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            error={errors.nationality}
          />

          <Input
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            error={errors.country}
          />
        </div>

        <div className="mt-4">
          <Input
            label="NID"
            name="nid"
            placeholder="Optional"
            value={formData.nid}
            onChange={handleChange}
            error={errors.nid}
          />
        </div>

        <div className="mt-4">
          <Input
            label="Passport"
            name="passport"
            placeholder="Optional"
            value={formData.passport}
            onChange={handleChange}
            error={errors.passport}
          />
        </div>
      </div>

      {/* Login credential */}

      <div className="border-t pt-6">
        <h2 className="font-semibold mb-4">Login Credential</h2>

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Optional — leave blank if not set yet"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
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
          {initialData ? "Update" : "Create"} Student
        </button>
      </div>
    </form>
  );
}

// =========================================

function Input({ label, error, disabled, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>

      <input
        {...props}
        disabled={disabled}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? "border-red-500" : "border-gray-300"
        } ${disabled ? "bg-gray-100 text-gray-500 cursor-not-allowed" : ""}`}
      />

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}

function Select({ label, error, options, ...props }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>

      <select
        {...props}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>

      {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
    </div>
  );
}
