"use client";

import { useState } from "react";

export default function PaperList({ about, onEdit, onDelete, isDeleting }) {
  const [pdfErrors, setPdfErrors] = useState({});

  const handlePdfError = (aboutId) => {
    setPdfErrors((prev) => ({
      ...prev,
      [aboutId]: true,
    }));
  };

  if (!about) {
    return (
      <div className="flex justify-center items-center h-64">
        {" "}
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>{" "}
      </div>
    );
  }

  if (about.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        {" "}
        <p className="text-gray-500 text-lg">
          No PDF document found. Add your first PDF document.{" "}
        </p>{" "}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {about.map((item) => (
        <div
          key={item._id}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
        >
          {/* PDF Preview Section */}{" "}
          <div className="relative h-48 w-full bg-gray-100 flex items-center justify-center">
            {!pdfErrors[item._id] && item.pdfUrl ? (
              <div className="flex flex-col items-center justify-center">
                {/* PDF Icon */}{" "}
                <div className="flex items-center justify-center w-20 h-20 rounded-xl bg-red-100">
                  {" "}
                  <svg
                    className="w-12 h-12 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 18V6a2 2 0 012-2h6l4 4v10a2 2 0 01-2 2H9a2 2 0 01-2-2z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 4v4h4"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 13h4M10 16h4"
                    />
                  </svg>
                </div>
                <p className="mt-3 text-sm font-medium text-gray-700">
                  PDF Document
                </p>
                {/* View PDF */}
                <a
                  href={item.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="mt-2 text-sm text-blue-600 hover:text-blue-700 underline"
                >
                  View PDF
                </a>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-400">
                <svg
                  className="w-14 h-14"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 18V6a2 2 0 012-2h6l4 4v10a2 2 0 01-2 2H9a2 2 0 01-2-2z"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 4v4h4"
                  />
                </svg>

                <p className="text-sm mt-2">PDF not available</p>
              </div>
            )}

            {/* Cloudinary Badge */}
            {item.pdfUrl?.includes("cloudinary") && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Cloudinary
              </div>
            )}
          </div>
          {/* Content Section */}
          <div className="p-4">
            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-1">
              {item.title}
            </h3>

            {/* PDF URL */}
            {item.pdfUrl && (
              <p
                className="text-xs text-gray-500 truncate mb-4"
                title={item.pdfUrl}
              >
                {item.pdfUrl}
              </p>
            )}

            {/* Metadata */}
            <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
              <span>ID: {item._id?.slice(-6)}</span>

              <span>
                Updated:{" "}
                {item.updatedAt
                  ? new Date(item.updatedAt).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
              {/* Edit */}
              <button
                type="button"
                onClick={() => onEdit(item)}
                className="px-3 py-1.5 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors flex items-center gap-1 text-sm"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
                Edit
              </button>

              {/* Delete */}
              <button
                type="button"
                onClick={() => onDelete(item._id)}
                disabled={isDeleting}
                className="px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors flex items-center gap-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>

                {isDeleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
