"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactList({
  contacts,
  onStatusChange,
  onDelete,
  isDeleting,
}) {
  const [selectedContact, setSelectedContact] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const handleStatusChange = async (id, status) => {
    setUpdatingId(id);

    try {
      await onStatusChange(id, status);
    } finally {
      setUpdatingId(null);
    }
  };

  if (!contacts || contacts.length === 0) {
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
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>

        <h3 className="text-lg font-semibold text-gray-900">
          No messages found
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          Contact messages submitted from the website will appear here.
        </p>
      </div>
    );
  }

  const getStatusClasses = (status) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-700";

      case "read":
        return "bg-yellow-100 text-yellow-700";

      case "replied":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
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
        {contacts.map((contact) => (
          <div
            key={contact._id}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md"
          >
            {/* Top section */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {contact.first_name} {contact.last_name}
                  </h3>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClasses(
                      contact.status,
                    )}`}
                  >
                    {contact.status}
                  </span>
                </div>

                {/* Contact information */}
                <div className="mt-3 flex flex-col gap-2 text-sm text-gray-600 sm:flex-row sm:flex-wrap sm:gap-x-6">
                  <a
                    href={`mailto:${contact.email}`}
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

                    {contact.email}
                  </a>

                  <a
                    href={`tel:${contact.phone}`}
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

                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-500 lg:text-right">
                <p className="font-medium text-gray-700">Received</p>
                <p>{formatDate(contact.createdAt)}</p>
              </div>
            </div>

            {/* Message */}
            <div className="mt-5 rounded-md bg-gray-50 p-4">
              <p className="mb-2 text-sm font-semibold text-gray-700">
                Message
              </p>

              <p className="whitespace-pre-wrap break-words text-sm leading-6 text-gray-600">
                {contact.message || "No message provided."}
              </p>
            </div>

            {/* Bottom actions */}
            <div className="mt-5 flex flex-col gap-3 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Status */}
              <div className="flex items-center gap-3">
                <label
                  htmlFor={`status-${contact._id}`}
                  className="text-sm font-medium text-gray-700"
                >
                  Status:
                </label>

                <select
                  id={`status-${contact._id}`}
                  value={contact.status}
                  disabled={updatingId === contact._id}
                  onChange={(e) =>
                    handleStatusChange(contact._id, e.target.value)
                  }
                  className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>

                {updatingId === contact._id && (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-blue-600" />
                )}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedContact(contact)}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
                >
                  View Details
                </button>

                <button
                  type="button"
                  onClick={() => onDelete(contact._id)}
                  disabled={isDeleting}
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Message Details Modal */}
      {selectedContact && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={() => setSelectedContact(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Contact Message
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {formatDate(selectedContact.createdAt)}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedContact(null)}
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
                    Name
                  </p>

                  <p className="mt-1 text-sm font-medium text-gray-900">
                    {selectedContact.first_name} {selectedContact.last_name}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Status
                  </p>

                  <span
                    className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold capitalize ${getStatusClasses(
                      selectedContact.status,
                    )}`}
                  >
                    {selectedContact.status}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Email
                  </p>

                  <a
                    href={`mailto:${selectedContact.email}`}
                    className="mt-1 block break-all text-sm text-blue-600 hover:underline"
                  >
                    {selectedContact.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase text-gray-500">
                    Phone
                  </p>

                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="mt-1 block text-sm text-blue-600 hover:underline"
                  >
                    {selectedContact.phone}
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase text-gray-500">
                  Privacy Agreement
                </p>

                <p className="mt-1 text-sm text-gray-700">
                  {selectedContact.privacy ? "Accepted" : "Not accepted"}
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase text-gray-500">
                  Message
                </p>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="whitespace-pre-wrap break-words text-sm leading-6 text-gray-700">
                    {selectedContact.message || "No message provided."}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex justify-end border-t border-gray-200 px-6 py-4">
              <button
                type="button"
                onClick={() => setSelectedContact(null)}
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
