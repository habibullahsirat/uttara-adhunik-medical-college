"use client";

import Image from "next/image";
import { useState } from "react";

export default function SiteList({ sites, onEdit, onDelete, isDeleting }) {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (siteId) => {
    setImageErrors((prev) => ({
      ...prev,
      [siteId]: true,
    }));
  };

  if (!sites) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (sites.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-lg">
        <p className="text-gray-500 text-lg">
          No site settings found. Add your site settings.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sites.map((site) => (
        <div
          key={site._id}
          className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
        >
          {/* Image Section */}

          <div className="relative h-48 w-full bg-gray-100">
            {!imageErrors[site._id] && site.image ? (
              <Image
                src={site.image}
                alt={site.site_name || "Site image"}
                fill
                className="object-contain p-4"
                onError={() => handleImageError(site._id)}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>

                <p className="text-sm mt-2">Image not available</p>
              </div>
            )}

            {/* Cloudinary Badge */}

            {site.image?.includes("cloudinary") && (
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                Cloudinary
              </div>
            )}
          </div>

          {/* Content Section */}

          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-1 line-clamp-1">
              {site.site_name}
            </h3>

            <p className="text-sm text-gray-500 mb-3 line-clamp-2">
              {site.tagline}
            </p>

            {/* Contact Information */}

            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div>
                <span className="font-medium text-gray-800">Email:</span>{" "}
                {site.email}
              </div>

              <div>
                <span className="font-medium text-gray-800">Office Email:</span>{" "}
                {site.office_email}
              </div>

              <div>
                <span className="font-medium text-gray-800">Phone:</span>{" "}
                {site.phone}
              </div>

              <div className="line-clamp-2">
                <span className="font-medium text-gray-800">Address:</span>{" "}
                {site.address}
              </div>
            </div>

            {/* Office Status */}

            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">
                Office Status
              </span>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  site.opening_hour
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {site.opening_hour ? "Open" : "Closed"}
              </span>
            </div>

            {/* Closing Hour */}

            <div className="text-sm text-gray-600 mb-4">
              <span className="font-medium text-gray-800">Closing Hour:</span>{" "}
              {site.closing_hour}
            </div>

            {/* Social Links */}

            <div className="flex flex-wrap gap-2 mb-4">
              {site.facebook_link && (
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Facebook
                </span>
              )}

              {site.instagram_link && (
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  Instagram
                </span>
              )}

              {site.linkedin_link && (
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  LinkedIn
                </span>
              )}

              {site.youtube_link && (
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                  YouTube
                </span>
              )}
            </div>

            {/* Metadata */}

            <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
              <span>ID: {site._id?.slice(-6)}</span>

              <span>
                Updated:{" "}
                {site.updatedAt
                  ? new Date(site.updatedAt).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>

            {/* Action Buttons */}

            <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-gray-100">
              <button
                onClick={() => onEdit(site)}
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

              <button
                onClick={() => onDelete(site._id)}
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
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
