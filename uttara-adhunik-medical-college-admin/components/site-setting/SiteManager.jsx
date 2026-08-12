"use client";

import { useState } from "react";
import SiteList from "@/components/site-setting/SiteList";
import SiteForm from "@/components/site-setting/SiteForm";
import Modal from "@/components/ui/Modal";
import { useSiteData } from "@/lib/DataFetch/Site/SWRDataFetch";
import { toast } from "sonner";

export default function SiteManager() {
  const { data: sites, mutate, isLoading } = useSiteData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSite, setEditingSite] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================
  // Add
  // ============================

  const handleAdd = () => {
    setEditingSite(null);
    setIsModalOpen(true);
  };

  // ============================
  // Edit
  // ============================

  const handleEdit = (site) => {
    setEditingSite(site);
    setIsModalOpen(true);
  };

  // ============================
  // Delete
  // ============================

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this site setting?")) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/site-setting/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));

        throw new Error(error.message || "Failed to delete site setting");
      }

      toast.success("Site setting deleted successfully!");

      mutate();
    } catch (error) {
      toast.error(error.message || "Failed to delete site setting");

      console.error("Delete error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  // ============================
  // Submit
  // ============================

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const url = editingSite
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/site-setting/${editingSite._id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/site-setting`;

      const method = editingSite ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));

        throw new Error(error.message || "Failed to save site setting");
      }

      toast.success(
        editingSite
          ? "Site setting updated successfully!"
          : "Site setting added successfully!",
      );

      mutate();

      setIsModalOpen(false);
      setEditingSite(null);
    } catch (error) {
      toast.error(error.message || "Failed to save site setting");

      console.error("Save error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ============================
  // Loading
  // ============================

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>

          <p className="text-gray-600">Loading Site Settings...</p>
        </div>
      </div>
    );
  }

  // ============================
  // UI
  // ============================

  return (
    <div>
      {/* Header */}

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Site Settings</h1>

          <p className="text-gray-600 mt-1">
            Total Sites:{" "}
            <span className="font-semibold">{sites?.length || 0}</span>
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
          Add Site Setting
        </button>
      </div>

      {/* Site List */}

      <SiteList
        sites={sites}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isDeleting={isDeleting}
      />

      {/* Add/Edit Modal */}

      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitting && setIsModalOpen(false)}
        title={editingSite ? "Edit Site Settings" : "Add Site Settings"}
      >
        <SiteForm
          initialData={editingSite}
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
