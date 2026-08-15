"use client";

import { useState } from "react";
import Image from "next/image";

export default function StudentList({
  students,
  onEdit,
  onDelete,
  isDeleting,
}) {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = async (id) => {
    setDeletingId(id);

    try {
      await onDelete(id);
    } finally {
      setDeletingId(null);
    }
  };

  if (!students || students.length === 0) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-10 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
          <svg
            className="h-7 w-7 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">
          No students found
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Students added from the admin panel will appear here.
        </p>
      </div>
    );
  }

  const getCgpaClasses = (cgpa) => {
    if (cgpa === null || cgpa === undefined) return "bg-gray-100 text-gray-600";
    if (cgpa >= 3.5) return "bg-green-100 text-green-700";
    if (cgpa >= 3.0) return "bg-blue-100 text-blue-700";
    if (cgpa >= 2.5) return "bg-yellow-100 text-yellow-700";
    return "bg-red-100 text-red-700";
  };

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Date(date).toLocaleString("en-BD", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <>
      <div className="space-y-4">
        {students.map((student) => (
          <div
            key={student._id}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* Top section */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex min-w-0 flex-1 gap-4">
                {/* Avatar */}
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  {student.image ? (
                    <Image
                      src={student.image}
                      alt={student.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <svg
                        className="h-6 w-6 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {student.name}
                    </h3>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                      {student.studentId}
                    </span>

                    {student.cgpa !== null && student.cgpa !== undefined && (
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getCgpaClasses(
                          student.cgpa,
                        )}`}
                      >
                        CGPA {student.cgpa.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm font-medium text-gray-600">
                    {student.department}
                  </p>

                  {/* Contact information */}
                  <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                    <a
                      href={`mailto:${student.email}`}
                      className="flex items-center gap-2 hover:text-blue-600"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      {student.email}
                    </a>

                    <a
                      href={`tel:${student.phone}`}
                      className="flex items-center gap-2 hover:text-blue-600"
                    >
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.515l.58 2.32a2 2 0 01-.45 1.91L8.5 10.5a16 16 0 005 5l1.755-1.85a2 2 0 011.91-.45l2.32.58A2 2 0 0121 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>

                      {student.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-500 lg:text-right">
                <p className="font-medium text-gray-700">Added</p>
                <p>{formatDate(student.createdAt)}</p>
              </div>
            </div>

            {/* Bottom actions */}
            <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <span className="rounded-full bg-gray-50 px-3 py-1">
                  {student.gender}
                </span>
                <span className="rounded-full bg-gray-50 px-3 py-1">
                  {student.quota} quota
                </span>
                <span className="rounded-full bg-gray-50 px-3 py-1">
                  {student.nationality}
                </span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedStudent(student)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  View Details
                </button>

                <button
                  type="button"
                  onClick={() => onEdit(student)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  Edit
                </button>

                <button
                  type="button"
                  onClick={() => handleDelete(student._id)}
                  disabled={isDeleting && deletingId === student._id}
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isDeleting && deletingId === student._id
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Student Details Modal */}
      {selectedStudent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedStudent(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-gray-100">
                  {selectedStudent.image ? (
                    <Image
                      src={selectedStudent.image}
                      alt={selectedStudent.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {selectedStudent.name}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {selectedStudent.studentId} · Added{" "}
                    {formatDate(selectedStudent.createdAt)}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
                className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="space-y-5 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Email
                  </p>

                  <a
                    href={`mailto:${selectedStudent.email}`}
                    className="mt-1 block break-all text-sm text-blue-600 hover:underline"
                  >
                    {selectedStudent.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Phone
                  </p>

                  <a
                    href={`tel:${selectedStudent.phone}`}
                    className="mt-1 block text-sm text-blue-600 hover:underline"
                  >
                    {selectedStudent.phone}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Department
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedStudent.department}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    CGPA
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedStudent.cgpa !== null &&
                    selectedStudent.cgpa !== undefined
                      ? selectedStudent.cgpa.toFixed(2)
                      : "Not available"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Gender
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    {selectedStudent.gender}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Quota
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    {selectedStudent.quota}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Nationality
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    {selectedStudent.nationality}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Country
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    {selectedStudent.country}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    NID
                  </p>

                  <p className="mt-1 text-sm text-gray-700">
                    {selectedStudent.nid || "Not provided"}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase text-gray-500">
                  Guardian
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  Father: {selectedStudent.fatherName}
                </p>
                <p className="text-sm text-gray-700">
                  Mother: {selectedStudent.motherName}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Present Address
                  </p>

                  <p className="mt-1 whitespace-pre-wrap break-words text-sm text-gray-700">
                    {selectedStudent.presentAddress}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Permanent Address
                  </p>

                  <p className="mt-1 whitespace-pre-wrap break-words text-sm text-gray-700">
                    {selectedStudent.permanentAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex justify-end gap-3 border-t border-gray-200 px-6 py-4">
              <button
                type="button"
                onClick={() => {
                  onEdit(selectedStudent);
                  setSelectedStudent(null);
                }}
                className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Edit
              </button>

              <button
                type="button"
                onClick={() => setSelectedStudent(null)}
                className="rounded-md bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
