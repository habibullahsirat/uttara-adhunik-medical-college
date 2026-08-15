"use client";

import { useState } from "react";
import StudentList from "@/components/student-profile/StudentList";
import StudentAddForm from "@/components/student-profile/StudentAddForm";
import Modal from "@/components/ui/Modal";
import { useStudentData } from "@/lib/DataFetch/Student/SWRDataFetch";
import { toast } from "sonner";

export default function StudentManager() {
  const { data: students, mutate, isLoading } = useStudentData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================
  // Add
  // ============================

  const handleAdd = () => {
    setEditingStudent(null);
    setIsModalOpen(true);
  };

  // ============================
  // Edit
  // ============================

  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  // ============================
  // Delete
  // ============================

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this student?")) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/student-profile/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));

        throw new Error(error.message || "Failed to delete student");
      }

      toast.success("Student deleted successfully!");

      mutate();
    } catch (error) {
      toast.error(error.message || "Failed to delete student");

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
      const url = editingStudent
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/student-profile/${editingStudent._id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/student-profile`;

      const method = editingStudent ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({}));

        throw new Error(error.message || "Failed to save student");
      }

      toast.success(
        editingStudent
          ? "Student updated successfully!"
          : "Student added successfully!",
      );

      mutate();

      setIsModalOpen(false);
      setEditingStudent(null);
    } catch (error) {
      toast.error(error.message || "Failed to save student");

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

          <p className="text-gray-600">Loading Students...</p>
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
          <h1 className="text-3xl font-bold text-gray-900">Students</h1>

          <p className="text-gray-600 mt-1">
            Total Students:{" "}
            <span className="font-semibold">{students?.length || 0}</span>
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
          Add Student
        </button>
      </div>

      {/* Student List */}

      <StudentList
        students={students}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isDeleting={isDeleting}
      />

      {/* Add/Edit Modal */}

      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitting && setIsModalOpen(false)}
        title={editingStudent ? "Edit Student" : "Add Student"}
      >
        <StudentAddForm
          initialData={editingStudent}
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
