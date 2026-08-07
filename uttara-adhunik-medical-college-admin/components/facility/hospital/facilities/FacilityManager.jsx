"use client";
import { useState } from "react";
import FacilityList from "@/components/facility/hospital/facilities/FacilityList";
import { useFacilitiesData } from "@/lib/DataFetch/Facility/Hospital/SWRDataFetch";
import FacilityForm from "@/components/facility/hospital/facilities/FacilityForm";
import Modal from "@/components/ui/Modal";
import { toast } from "sonner";

export default function FacilityManager() {
  const { data: facility, mutate, isLoading } = useFacilitiesData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFacility, setEditingFacility] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAdd = () => {
    setEditingFacility(null);
    setIsModalOpen(true);
  };

  const handleEdit = (facility) => {
    setEditingFacility(facility);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this facility section?"))
      return;

    setIsDeleting(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/facility/hospital/facilities/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) throw new Error("Failed to delete");

      toast.success("Facility section deleted successfully!");
      mutate(); // Refresh the data
    } catch (error) {
      toast.error("Failed to delete facility section");
      console.error("Delete error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const url = editingFacility
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/facility/hospital/facilities/${editingFacility._id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/facility/hospital/facilities`;

      const method = editingFacility ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to save");
      }

      toast.success(
        editingFacility
          ? "Facility section updated successfully!"
          : "Facility section added successfully!",
      );
      mutate(); // Refresh the data
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.message || "Failed to save facility section");
      console.error("Save error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading facilities...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Facility Management
          </h1>
          <p className="text-gray-600 mt-1">
            Total Facilities:{" "}
            <span className="font-semibold">{facility?.length || 0}</span>
          </p>
        </div>

        <button
          onClick={handleAdd}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add New Facility
        </button>
      </div>

      {/* Facility List */}
      <FacilityList
        facility={facility}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isDeleting={isDeleting}
      />

      {/* Modal for Add/Edit */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitting && setIsModalOpen(false)}
        title={editingFacility ? "Edit facility" : "Add New facility"}
      >
        <FacilityForm
          initialData={editingFacility}
          onSubmit={handleSubmit}
          onCancel={() => !isSubmitting && setIsModalOpen(false)}
        />
        {isSubmitting && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Saving...</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
