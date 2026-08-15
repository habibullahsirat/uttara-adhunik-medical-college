// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import {
//   UserRound,
//   Mail,
//   Phone,
//   MapPin,
//   Lock,
//   IdCard,
//   Pencil,
//   Check,
//   X,
//   Loader2,
//   Eye,
//   EyeOff,
// } from "lucide-react";

// const DISPLAY_FONT =
//   "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

// const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// export default function StudentDashboardPage() {
//   const [student, setStudent] = useState(null);
//   const [studentName, setStudentName] = useState("");

//   const [studentImage, setStudentImage] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [loadError, setLoadError] = useState("");

//   const [editing, setEditing] = useState(false);
//   const [saving, setSaving] = useState(false);
//   const [saveError, setSaveError] = useState("");
//   const [saveSuccess, setSaveSuccess] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const [form, setForm] = useState({
//     email: "",
//     phone: "",
//     address: "",
//     password: "",
//   });

//   useEffect(() => {
//     setStudentImage(localStorage.getItem("studentImage") || "");
//     setStudentName(localStorage.getItem("studentName") || "");
//   }, []);

//   useEffect(() => {
//     async function loadStudent() {
//       const studentId = localStorage.getItem("studentId");
//       const mongoId = localStorage.getItem("studentMongoId");

//       if (!studentId) {
//         setLoadError("No student session found.");
//         setLoading(false);
//         return;
//       }

//       try {
//         // Prefer a direct lookup by Mongo _id if you have one; otherwise
//         // fall back to filtering the full list by studentId.
//         let record = null;

//         if (mongoId) {
//           const res = await fetch(
//             `${API_BASE}/api/student-profile/${mongoId}`,
//             {
//               cache: "no-store",
//             },
//           );
//           if (res.ok) record = await res.json();
//         }

//         if (!record) {
//           const res = await fetch(`${API_BASE}/api/student-profile`, {
//             cache: "no-store",
//           });
//           const list = await res.json();
//           record = list?.find(
//             (s) =>
//               String(s?.studentId ?? "").toLowerCase() ===
//               studentId.toLowerCase(),
//           );
//         }

//         if (!record) {
//           setLoadError("Couldn't find your student record.");
//         } else {
//           setStudent(record);
//           setForm({
//             email: record?.email ?? "",
//             phone: record?.phone ?? "",
//             address: record?.address ?? "",
//             password: "",
//           });
//         }
//       } catch (err) {
//         setLoadError("Something went wrong loading your profile.");
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadStudent();
//   }, []);

//   const handleChange = (field) => (e) => {
//     setForm((prev) => ({ ...prev, [field]: e.target.value }));
//   };

//   const handleCancel = () => {
//     setForm({
//       email: student?.email ?? "",
//       phone: student?.phone ?? "",
//       address: student?.address ?? "",
//       password: "",
//     });
//     setSaveError("");
//     setEditing(false);
//   };

//   const handleSave = async () => {
//     setSaveError("");
//     setSaveSuccess(false);

//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
//       setSaveError("Enter a valid email address.");
//       return;
//     }
//     if (form.phone && !/^[0-9+\-\s]{6,15}$/.test(form.phone)) {
//       setSaveError("Enter a valid phone number.");
//       return;
//     }

//     setSaving(true);
//     try {
//       const payload = {
//         email: form.email,
//         phone: form.phone,
//         address: form.address,
//       };
//       // Only send the password if the student actually typed a new one.
//       if (form.password.trim()) {
//         payload.password = form.password.trim();
//       }

//       const id = student?._id;
//       const res = await fetch(`${API_BASE}/api/student-profile/${id}`, {
//         method: "PATCH", // switch to PATCH if that's what your API expects
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) throw new Error("Update failed. Please try again.");

//       const updated = await res.json().catch(() => null);
//       setStudent((prev) => ({ ...prev, ...payload, ...(updated ?? {}) }));
//       setForm((prev) => ({ ...prev, password: "" }));
//       setSaveSuccess(true);
//       setEditing(false);
//     } catch (err) {
//       setSaveError(err?.message || "Something went wrong. Please try again.");
//     } finally {
//       setSaving(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center py-24">
//         <Loader2 className="w-6 h-6 text-[#E8A33D] animate-spin" />
//       </div>
//     );
//   }

//   if (loadError) {
//     return (
//       <div className="max-w-md mx-auto text-center py-24">
//         <p className="text-[#DC2626] text-sm bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-4 py-3">
//           {loadError}
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-3xl">
//       <h2
//         className="text-[#0E1116] text-2xl tracking-tight mb-1"
//         style={{ fontFamily: DISPLAY_FONT }}
//       >
//         My Profile
//       </h2>
//       <p className="text-[#6B7280] text-sm mb-8">
//         View your details below. Contact info and password can be updated by you
//         at any time.
//       </p>

//       {saveSuccess && (
//         <div className="flex items-center gap-2 text-[13px] text-[#16A34A] bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg px-3.5 py-2.5 mb-5">
//           <Check className="w-4 h-4" />
//           Your profile was updated.
//         </div>
//       )}

//       <div className="bg-white rounded-2xl border border-[#E5E3DE] overflow-hidden">
//         {/* Header strip */}
//         <div className="px-6 py-5 flex items-center justify-between border-b border-[#E5E3DE]">
//           <div className="flex items-center gap-4">
//             <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#0E1116] flex items-center justify-center shrink-0">
//               {studentImage ? (
//                 <Image
//                   src={studentImage}
//                   alt={studentName || "Student"}
//                   fill
//                   sizes="48px"
//                   className="object-cover"
//                 />
//               ) : (
//                 <UserRound className="w-6 h-6 text-[#E8A33D]" strokeWidth={2} />
//               )}
//             </div>
//             <div>
//               <p className="text-[#0E1116] text-sm font-semibold">
//                 {student?.name || "—"}
//               </p>
//               <p className="text-[#9CA3AF] text-xs flex items-center gap-1">
//                 <IdCard className="w-3 h-3" /> {student?.studentId || "—"}
//               </p>
//             </div>
//           </div>

//           {!editing && (
//             <button
//               type="button"
//               onClick={() => setEditing(true)}
//               className="flex items-center gap-1.5 text-xs font-medium text-[#0E1116] border border-[#E5E3DE] rounded-lg px-3 py-2 hover:bg-[#F7F5F2] transition-colors"
//             >
//               <Pencil className="w-3.5 h-3.5" />
//               Edit details
//             </button>
//           )}
//         </div>

//         <div className="p-6 space-y-5">
//           {/* Read-only info */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             {student?.department && (
//               <ReadOnlyField label="Department" value={student.department} />
//             )}
//             {student?.session && (
//               <ReadOnlyField label="Session" value={student.session} />
//             )}
//           </div>

//           <div className="h-px bg-[#F0EEE9]" />

//           {/* Editable fields */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//             <div className="sm:col-span-1">
//               <label className="block text-xs font-medium text-[#374151] mb-2">
//                 Email
//               </label>
//               {editing ? (
//                 <div className="relative">
//                   <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
//                   <input
//                     type="email"
//                     value={form.email}
//                     onChange={handleChange("email")}
//                     className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E3DE] bg-white text-sm text-[#0E1116] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
//                   />
//                 </div>
//               ) : (
//                 <ReadOnlyValue icon={Mail} value={student?.email} />
//               )}
//             </div>

//             <div className="sm:col-span-1">
//               <label className="block text-xs font-medium text-[#374151] mb-2">
//                 Phone
//               </label>
//               {editing ? (
//                 <div className="relative">
//                   <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
//                   <input
//                     type="tel"
//                     value={form.phone}
//                     onChange={handleChange("phone")}
//                     className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E3DE] bg-white text-sm text-[#0E1116] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
//                   />
//                 </div>
//               ) : (
//                 <ReadOnlyValue icon={Phone} value={student?.phone} />
//               )}
//             </div>

//             <div className="sm:col-span-2">
//               <label className="block text-xs font-medium text-[#374151] mb-2">
//                 Address
//               </label>
//               {editing ? (
//                 <div className="relative">
//                   <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-[#9CA3AF]" />
//                   <textarea
//                     rows={2}
//                     value={form.address}
//                     onChange={handleChange("address")}
//                     className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E3DE] bg-white text-sm text-[#0E1116] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all resize-none"
//                   />
//                 </div>
//               ) : (
//                 <ReadOnlyValue icon={MapPin} value={student?.address} />
//               )}
//             </div>

//             {editing && (
//               <div className="sm:col-span-2">
//                 <label className="block text-xs font-medium text-[#374151] mb-2">
//                   New password{" "}
//                   <span className="text-[#9CA3AF] font-normal">
//                     (leave blank to keep current)
//                   </span>
//                 </label>
//                 <div className="relative">
//                   <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={form.password}
//                     onChange={handleChange("password")}
//                     placeholder="••••••••"
//                     className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-[#E5E3DE] bg-white text-sm text-[#0E1116] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((v) => !v)}
//                     className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] transition-colors"
//                     tabIndex={-1}
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>

//           {saveError && (
//             <p className="text-[13px] text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-3.5 py-2.5">
//               {saveError}
//             </p>
//           )}

//           {editing && (
//             <div className="flex items-center gap-3 pt-2">
//               <button
//                 type="button"
//                 onClick={handleSave}
//                 disabled={saving}
//                 className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E1116] text-[#F7F5F2] text-sm font-medium hover:bg-[#1A1D24] transition-all disabled:opacity-50"
//               >
//                 {saving ? (
//                   <Loader2 className="w-4 h-4 animate-spin" />
//                 ) : (
//                   <Check className="w-4 h-4" />
//                 )}
//                 Save changes
//               </button>
//               <button
//                 type="button"
//                 onClick={handleCancel}
//                 disabled={saving}
//                 className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E5E3DE] text-[#374151] text-sm font-medium hover:bg-[#F7F5F2] transition-all disabled:opacity-50"
//               >
//                 <X className="w-4 h-4" />
//                 Cancel
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ReadOnlyField({ label, value }) {
//   return (
//     <div>
//       <p className="text-xs font-medium text-[#374151] mb-2">{label}</p>
//       <p className="text-sm text-[#0E1116] bg-[#F7F5F2] rounded-xl px-3.5 py-2.5">
//         {value}
//       </p>
//     </div>
//   );
// }

// function ReadOnlyValue({ icon: Icon, value }) {
//   return (
//     <div className="flex items-center gap-2 text-sm text-[#0E1116] bg-[#F7F5F2] rounded-xl px-3.5 py-2.5">
//       <Icon className="w-4 h-4 text-[#9CA3AF] shrink-0" />
//       <span className="truncate">{value || "—"}</span>
//     </div>
//   );
// }

// Version 2
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  Lock,
  IdCard,
  Pencil,
  Check,
  X,
  Loader2,
  Eye,
  EyeOff,
} from "lucide-react";

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function StudentDashboardPage() {
  const [student, setStudent] = useState(null);
  const [studentName, setStudentName] = useState("");

  const [studentImage, setStudentImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState("");

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    phone: "",
    presentAddress: "",
    password: "",
  });

  useEffect(() => {
    setStudentImage(localStorage.getItem("studentImage") || "");
    setStudentName(localStorage.getItem("studentName") || "");
  }, []);

  useEffect(() => {
    async function loadStudent() {
      const studentId = localStorage.getItem("studentId");
      const mongoId = localStorage.getItem("studentMongoId");

      if (!studentId) {
        setLoadError("No student session found.");
        setLoading(false);
        return;
      }

      try {
        // Prefer a direct lookup by Mongo _id if you have one;
        // otherwise fall back to filtering the full student list.
        let record = null;

        if (mongoId) {
          const res = await fetch(
            `${API_BASE}/api/student-profile/${mongoId}`,
            {
              cache: "no-store",
            },
          );

          if (res.ok) {
            record = await res.json();
          }
        }

        if (!record) {
          const res = await fetch(`${API_BASE}/api/student-profile`, {
            cache: "no-store",
          });

          if (!res.ok) {
            throw new Error("Failed to load students.");
          }

          const list = await res.json();

          record = list?.find(
            (s) =>
              String(s?.studentId ?? "").toLowerCase() ===
              String(studentId).toLowerCase(),
          );
        }

        if (!record) {
          setLoadError("Couldn't find your student record.");
        } else {
          setStudent(record);

          // Keep localStorage image/name synchronized with API data
          if (record?.image) {
            setStudentImage(record.image);
            localStorage.setItem("studentImage", record.image);
          }

          if (record?.name) {
            setStudentName(record.name);
            localStorage.setItem("studentName", record.name);
          }

          setForm({
            email: record?.email ?? "",
            phone: record?.phone ?? "",
            presentAddress: record?.presentAddress ?? "",
            password: "",
          });
        }
      } catch (err) {
        setLoadError("Something went wrong loading your profile.");
      } finally {
        setLoading(false);
      }
    }

    loadStudent();
  }, []);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleCancel = () => {
    setForm({
      email: student?.email ?? "",
      phone: student?.phone ?? "",
      presentAddress: student?.presentAddress ?? "",
      password: "",
    });

    setSaveError("");
    setShowPassword(false);
    setEditing(false);
  };

  const handleSave = async () => {
    setSaveError("");
    setSaveSuccess(false);

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setSaveError("Enter a valid email address.");
      return;
    }

    if (form.phone && !/^[0-9+\-\s]{6,15}$/.test(form.phone)) {
      setSaveError("Enter a valid phone number.");
      return;
    }

    setSaving(true);

    try {
      const payload = {
        email: form.email,
        phone: form.phone,
        presentAddress: form.presentAddress,
      };

      // Only send password if the student entered a new password.
      if (form.password.trim()) {
        payload.password = form.password.trim();
      }

      const id = student?._id;

      if (!id) {
        throw new Error("Student ID is missing.");
      }

      const res = await fetch(`${API_BASE}/api/student-profile/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Update failed. Please try again.");
      }

      const updated = await res.json().catch(() => null);

      setStudent((prev) => ({
        ...prev,
        ...payload,
        ...(updated ?? {}),
      }));

      setForm((prev) => ({
        ...prev,
        password: "",
      }));

      setSaveSuccess(true);
      setShowPassword(false);
      setEditing(false);
    } catch (err) {
      setSaveError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-6 h-6 text-[#E8A33D] animate-spin" />
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="max-w-md mx-auto text-center py-24">
        <p className="text-[#DC2626] text-sm bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-4 py-3">
          {loadError}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl">
      <h2
        className="text-[#0E1116] text-2xl tracking-tight mb-1"
        style={{ fontFamily: DISPLAY_FONT }}
      >
        My Profile
      </h2>

      <p className="text-[#6B7280] text-sm mb-8">
        View your details below. Contact info and password can be updated by you
        at any time.
      </p>

      {saveSuccess && (
        <div className="flex items-center gap-2 text-[13px] text-[#16A34A] bg-[#F0FDF4] border border-[#BBF7D0] rounded-lg px-3.5 py-2.5 mb-5">
          <Check className="w-4 h-4" />
          Your profile was updated.
        </div>
      )}

      <div className="bg-white rounded-2xl border border-[#E5E3DE] overflow-hidden">
        {/* Header strip */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-[#E5E3DE]">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#0E1116] flex items-center justify-center shrink-0">
              {studentImage ? (
                <Image
                  src={studentImage}
                  alt={studentName || "Student"}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <UserRound className="w-6 h-6 text-[#E8A33D]" strokeWidth={2} />
              )}
            </div>

            <div>
              <p className="text-[#0E1116] text-sm font-semibold">
                {student?.name || "—"}
              </p>

              <p className="text-[#9CA3AF] text-xs flex items-center gap-1">
                <IdCard className="w-3 h-3" />
                {student?.studentId || "—"}
              </p>
            </div>
          </div>

          {!editing && (
            <button
              type="button"
              onClick={() => {
                setSaveError("");
                setSaveSuccess(false);

                setForm({
                  email: student?.email ?? "",
                  phone: student?.phone ?? "",
                  presentAddress: student?.presentAddress ?? "",
                  password: "",
                });

                setEditing(true);
              }}
              className="flex items-center gap-1.5 text-xs font-medium text-[#0E1116] border border-[#E5E3DE] rounded-lg px-3 py-2 hover:bg-[#F7F5F2] transition-colors"
            >
              <Pencil className="w-3.5 h-3.5" />
              Edit details
            </button>
          )}
        </div>

        <div className="p-6 space-y-5">
          {/* Student basic information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ReadOnlyField label="Student ID" value={student?.studentId} />

            <ReadOnlyField label="Department" value={student?.department} />

            <ReadOnlyField
              label="CGPA"
              value={
                student?.cgpa !== undefined && student?.cgpa !== null
                  ? student.cgpa
                  : "—"
              }
            />

            <ReadOnlyField label="Gender" value={student?.gender} />

            <ReadOnlyField label="Quota" value={student?.quota} />

            <ReadOnlyField label="Nationality" value={student?.nationality} />

            <ReadOnlyField label="Country" value={student?.country} />
          </div>

          <div className="h-px bg-[#F0EEE9]" />

          {/* Family information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ReadOnlyField label="Father's Name" value={student?.fatherName} />

            <ReadOnlyField label="Mother's Name" value={student?.motherName} />
          </div>

          <div className="h-px bg-[#F0EEE9]" />

          {/* Identification information */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ReadOnlyField label="NID" value={student?.nid} />

            <ReadOnlyField label="Passport" value={student?.passport} />
          </div>

          <div className="h-px bg-[#F0EEE9]" />

          {/* Editable fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Email */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-[#374151] mb-2">
                Email
              </label>

              {editing ? (
                <div className="relative">
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />

                  <input
                    type="email"
                    value={form.email}
                    onChange={handleChange("email")}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E3DE] bg-white text-sm text-[#0E1116] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
                  />
                </div>
              ) : (
                <ReadOnlyValue icon={Mail} value={student?.email} />
              )}
            </div>

            {/* Phone */}
            <div className="sm:col-span-1">
              <label className="block text-xs font-medium text-[#374151] mb-2">
                Phone
              </label>

              {editing ? (
                <div className="relative">
                  <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />

                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleChange("phone")}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E3DE] bg-white text-sm text-[#0E1116] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
                  />
                </div>
              ) : (
                <ReadOnlyValue icon={Phone} value={student?.phone} />
              )}
            </div>

            {/* Present Address */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#374151] mb-2">
                Present Address
              </label>

              {editing ? (
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-[#9CA3AF]" />

                  <textarea
                    rows={2}
                    value={form.presentAddress}
                    onChange={handleChange("presentAddress")}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E5E3DE] bg-white text-sm text-[#0E1116] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all resize-none"
                  />
                </div>
              ) : (
                <ReadOnlyValue icon={MapPin} value={student?.presentAddress} />
              )}
            </div>

            {/* Permanent Address - Always Read Only */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-medium text-[#374151] mb-2">
                Permanent Address
              </label>

              <ReadOnlyValue icon={MapPin} value={student?.permanentAddress} />
            </div>

            {/* Password */}
            {editing && (
              <div className="sm:col-span-2">
                <label className="block text-xs font-medium text-[#374151] mb-2">
                  New password{" "}
                  <span className="text-[#9CA3AF] font-normal">
                    (leave blank to keep current)
                  </span>
                </label>

                <div className="relative">
                  <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />

                  <input
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={handleChange("password")}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-11 py-2.5 rounded-xl border border-[#E5E3DE] bg-white text-sm text-[#0E1116] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] transition-colors"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {saveError && (
            <p className="text-[13px] text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-3.5 py-2.5">
              {saveError}
            </p>
          )}

          {editing && (
            <div className="flex items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0E1116] text-[#F7F5F2] text-sm font-medium hover:bg-[#1A1D24] transition-all disabled:opacity-50"
              >
                {saving ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Check className="w-4 h-4" />
                )}
                Save changes
              </button>

              <button
                type="button"
                onClick={handleCancel}
                disabled={saving}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E5E3DE] text-[#374151] text-sm font-medium hover:bg-[#F7F5F2] transition-all disabled:opacity-50"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReadOnlyField({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-[#374151] mb-2">{label}</p>

      <p className="text-sm text-[#0E1116] bg-[#F7F5F2] rounded-xl px-3.5 py-2.5">
        {value !== undefined && value !== null && value !== "" ? value : "—"}
      </p>
    </div>
  );
}

function ReadOnlyValue({ icon: Icon, value }) {
  return (
    <div className="flex items-center gap-2 text-sm text-[#0E1116] bg-[#F7F5F2] rounded-xl px-3.5 py-2.5">
      <Icon className="w-4 h-4 text-[#9CA3AF] shrink-0" />

      <span className="truncate">{value || "—"}</span>
    </div>
  );
}
