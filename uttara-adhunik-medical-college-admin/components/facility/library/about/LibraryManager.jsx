"use client";
import { useState } from "react";
import LibraryList from "@/components/facility/library/about/LibraryList";
import { useLibraryData } from "@/lib/DataFetch/Facility/Library/SWRDataFetch";
import LibraryForm from "@/components/facility/library/about/LibraryForm";
import Modal from "@/components/ui/Modal";
import { toast } from "sonner";

export default function LibraryManager() {
  const { data: library, mutate, isLoading } = useLibraryData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLibrary, setEditingLibrary] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAdd = () => {
    setEditingLibrary(null);
    setIsModalOpen(true);
  };

  const handleEdit = (library) => {
    setEditingLibrary(library);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this library section?"))
      return;

    setIsDeleting(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/facility/library/about/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) throw new Error("Failed to delete");

      toast.success("Library section deleted successfully!");
      mutate(); // Refresh the data
    } catch (error) {
      toast.error("Failed to delete section");
      console.error("Delete error:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleSubmit = async (formData) => {
    setIsSubmitting(true);
    try {
      const url = editingLibrary
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/facility/library/about/${editingLibrary._id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/facility/library/about`;

      const method = editingLibrary ? "PATCH" : "POST";

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
        editingLibrary
          ? "Library Hospital updated successfully!"
          : "Library Hospital added successfully!",
      );
      mutate(); // Refresh the data
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.message || "Failed to save section");
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
          <p className="text-gray-600">Loading library section...</p>
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
            Library Section Management
          </h1>
          <p className="text-gray-600 mt-1">
            Total Library Section:{" "}
            <span className="font-semibold">{library?.length || 0}</span>
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
          Add New Section
        </button>
      </div>

      {/* Library List */}
      <LibraryList
        library={library}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isDeleting={isDeleting}
      />

      {/* Modal for Add/Edit */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitting && setIsModalOpen(false)}
        title={
          editingLibrary ? "Edit library Section" : "Add New library Section"
        }
      >
        <LibraryForm
          initialData={editingLibrary}
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
