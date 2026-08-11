// // "use client";
// // import { useState } from "react";
// // import PaperList from "@/components/admission/paper/PaperList";
// // import { AdmissionPaperSection } from "@/lib/DataFetch/Admission/Papers/SWRDataFetch";
// // import PaperForm from "@/components/admission/paper/PaperList";
// // import Modal from "@/components/ui/Modal";
// // import { toast } from "sonner";

// "use client";

// import { useState } from "react";
// import PaperList from "@/components/admission/paper/PaperList";
// import { usePaperData } from "@/lib/DataFetch/Admission/Papers/SWRDataFetch";
// import PaperForm from "@/components/admission/paper/PaperList";
// import Modal from "@/components/ui/Modal";
// import { toast } from "sonner";

// export default function PaperManager() {
//   const { data: about, mutate, isLoading } = usePaperData();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingAbout, setEditingAbout] = useState(null);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // ============================
//   // Add
//   // ============================

//   const handleAdd = () => {
//     setEditingAbout(null);
//     setIsModalOpen(true);
//   };

//   // ============================
//   // Edit
//   // ============================

//   const handleEdit = (about) => {
//     setEditingAbout(about);
//     setIsModalOpen(true);
//   };

//   // ============================
//   // Delete
//   // ============================

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure you want to delete this PDF section?")) {
//       return;
//     }

//     setIsDeleting(true);

//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/admission/paper/${id}`,
//         {
//           method: "DELETE",
//         },
//       );

//       if (!response.ok) {
//         const error = await response.json();

//         throw new Error(error.message || "Failed to delete PDF section");
//       }

//       toast.success("PDF section deleted successfully!");

//       mutate();
//     } catch (error) {
//       console.error("Delete error:", error);

//       toast.error(error.message || "Failed to delete PDF section");
//     } finally {
//       setIsDeleting(false);
//     }
//   };

//   // ============================
//   // Submit
//   // ============================

//   const handleSubmit = async (formData) => {
//     setIsSubmitting(true);

//     try {
//       const url = editingAbout
//         ? `${process.env.NEXT_PUBLIC_API_URL}/api/admission/paper/${editingAbout._id}`
//         : `${process.env.NEXT_PUBLIC_API_URL}/api/admission/paper`;

//       const method = editingAbout ? "PATCH" : "POST";

//       const response = await fetch(url, {
//         method,
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         const error = await response.json();

//         throw new Error(error.message || "Failed to save PDF section");
//       }

//       toast.success(
//         editingAbout
//           ? "PDF section updated successfully!"
//           : "PDF section added successfully!",
//       );

//       mutate();

//       setIsModalOpen(false);
//       setEditingAbout(null);
//     } catch (error) {
//       console.error("Save error:", error);

//       toast.error(error.message || "Failed to save PDF section");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // ============================
//   // Loading
//   // ============================

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         {" "}
//         <div className="text-center">
//           {" "}
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-gray-600">Loading PDF sections...</p>
//         </div>
//       </div>
//     );
//   }

//   // ============================
//   // UI
//   // ============================

//   return (
//     <div>
//       {/* Header */}

//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//         <div>
//           <h1 className="text-3xl font-bold text-gray-900">
//             About Section Management
//           </h1>

//           <p className="text-gray-600 mt-1">
//             Total PDF sections:{" "}
//             <span className="font-semibold">{about?.length || 0}</span>
//           </p>
//         </div>

//         {/* Add Button */}

//         <button
//           type="button"
//           onClick={handleAdd}
//           className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-sm"
//         >
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M12 4v16m8-8H4"
//             />
//           </svg>
//           Add New Section
//         </button>
//       </div>

//       {/* About List */}

//       <PaperList
//         about={about}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//         isDeleting={isDeleting}
//       />

//       {/* Add/Edit Modal */}

//       <Modal
//         isOpen={isModalOpen}
//         onClose={() => !isSubmitting && setIsModalOpen(false)}
//         title={editingAbout ? "Edit About Section" : "Add New About Section"}
//       >
//         <PaperForm
//           initialData={editingAbout}
//           onSubmit={handleSubmit}
//           onCancel={() => !isSubmitting && setIsModalOpen(false)}
//         />

//         {/* Saving Overlay */}

//         {isSubmitting && (
//           <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
//             <div className="text-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>

//               <p className="text-gray-600">Saving PDF section...</p>
//             </div>
//           </div>
//         )}
//       </Modal>
//     </div>
//   );
// }

// Version 2
"use client";

import { useState } from "react";
import ResultList from "@/components/admission/form/PaperList";
import ResultForm from "@/components/admission/form/PaperForm";
import { useResultData } from "@/lib/DataFetch/Admission/Results/SWRDataFetch";
import Modal from "@/components/ui/Modal";
import { toast } from "sonner";

export default function ResultManager() {
  const { data: about, mutate, isLoading } = useResultData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAbout, setEditingAbout] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ============================
  // Add
  // ============================

  const handleAdd = () => {
    setEditingAbout(null);
    setIsModalOpen(true);
  };

  // ============================
  // Edit
  // ============================

  const handleEdit = (about) => {
    setEditingAbout(about);
    setIsModalOpen(true);
  };

  // ============================
  // Delete
  // ============================

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this PDF section?")) {
      return;
    }

    setIsDeleting(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/admission/result/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) {
        const error = await response.json();

        throw new Error(error.message || "Failed to delete PDF section");
      }

      toast.success("PDF section deleted successfully!");

      mutate();
    } catch (error) {
      console.error("Delete error:", error);

      toast.error(error.message || "Failed to delete PDF section");
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
      const url = editingAbout
        ? `${process.env.NEXT_PUBLIC_API_URL}/api/admission/result/${editingAbout._id}`
        : `${process.env.NEXT_PUBLIC_API_URL}/api/admission/result`;

      const method = editingAbout ? "PATCH" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();

        throw new Error(error.message || "Failed to save PDF section");
      }

      toast.success(
        editingAbout
          ? "PDF section updated successfully!"
          : "PDF section added successfully!",
      );

      mutate();

      setIsModalOpen(false);
      setEditingAbout(null);
    } catch (error) {
      console.error("Save error:", error);

      toast.error(error.message || "Failed to save PDF section");
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
          <p className="text-gray-600">Loading PDF sections...</p>
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
          <h1 className="text-3xl font-bold text-gray-900">
            Result Section Management
          </h1>

          <p className="text-gray-600 mt-1">
            Total PDF sections:{" "}
            <span className="font-semibold">{about?.length || 0}</span>
          </p>
        </div>

        {/* Add Button */}

        <button
          type="button"
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

      {/* About List */}

      <ResultList
        about={about}
        onEdit={handleEdit}
        onDelete={handleDelete}
        isDeleting={isDeleting}
      />

      {/* Add/Edit Modal */}

      <Modal
        isOpen={isModalOpen}
        onClose={() => !isSubmitting && setIsModalOpen(false)}
        title={editingAbout ? "Edit About Section" : "Add New About Section"}
      >
        <ResultForm
          initialData={editingAbout}
          onSubmit={handleSubmit}
          onCancel={() => !isSubmitting && setIsModalOpen(false)}
        />

        {/* Saving Overlay */}

        {isSubmitting && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center rounded-lg">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>

              <p className="text-gray-600">Saving PDF section...</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
