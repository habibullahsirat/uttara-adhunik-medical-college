"use client";

import ContactList from "@/components/message/ContactList";
import { useContactData } from "@/lib/DataFetch/Message/SWRDataFetch";
import { toast } from "sonner";
import { useState } from "react";

export default function ContactManager() {
  const { data: contacts, mutate, isLoading, error } = useContactData();

  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);

  const handleStatusChange = async (id, status) => {
    setIsUpdatingStatus(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status,
          }),
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to update status");
      }

      toast.success("Message status updated successfully!");

      // Refresh the SWR data
      mutate();
    } catch (error) {
      console.error("Status update error:", error);

      toast.error(error.message || "Failed to update message status");
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this message?",
    );

    if (!confirmed) return;

    setIsDeleting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message/${id}`,
        {
          method: "DELETE",
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to delete message");
      }

      toast.success("Message deleted successfully!");

      // Refresh the SWR data
      mutate();
    } catch (error) {
      console.error("Delete error:", error);

      toast.error(error.message || "Failed to delete message");
    } finally {
      setIsDeleting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />

          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-6 text-center">
        <h2 className="text-lg font-semibold text-red-700">
          Failed to load messages
        </h2>

        <p className="mt-2 text-sm text-red-600">
          Please check your API connection and try again.
        </p>

        <button
          type="button"
          onClick={() => mutate()}
          className="mt-4 rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contact Messages</h1>

          <p className="mt-1 text-gray-600">
            View and manage messages submitted through the contact form.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white px-5 py-3 shadow-sm">
          <p className="text-sm text-gray-500">Total Messages</p>

          <p className="text-2xl font-bold text-gray-900">
            {contacts?.length || 0}
          </p>
        </div>
      </div>

      {/* Message List */}
      <ContactList
        contacts={contacts || []}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
        isDeleting={isDeleting}
        isUpdatingStatus={isUpdatingStatus}
      />
    </div>
  );
}
