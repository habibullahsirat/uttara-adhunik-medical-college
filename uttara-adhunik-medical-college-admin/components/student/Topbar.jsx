// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Menu, LogOut, UserRound } from "lucide-react";

// export default function Topbar({ setMobileOpen }) {
//   const router = useRouter();
//   const [studentId, setStudentId] = useState("");

//   useEffect(() => {
//     setStudentId(localStorage.getItem("studentId") || "");
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("studentAuth");
//     localStorage.removeItem("studentId");
//     localStorage.removeItem("studentMongoId");
//     router.push("/student/login");
//   };

//   return (
//     <header className="h-16 flex items-center justify-between px-5 lg:px-8 border-b border-[#E5E3DE] bg-[#F7F5F2] sticky top-0 z-30">
//       <div className="flex items-center gap-3">
//         <button
//           type="button"
//           onClick={() => setMobileOpen(true)}
//           className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#374151] hover:bg-[#EFEDE8] transition-colors"
//         >
//           <Menu className="w-5 h-5" />
//         </button>
//         <span className="text-[#0E1116] text-sm font-medium">
//           Student Dashboard
//         </span>
//       </div>

//       <div className="flex items-center gap-3">
//         <div className="hidden sm:flex items-center gap-2 pl-3 pr-1 py-1 rounded-full border border-[#E5E3DE] bg-white">
//           <div className="w-6 h-6 rounded-full bg-[#0E1116] flex items-center justify-center">
//             <UserRound
//               className="w-3.5 h-3.5 text-[#E8A33D]"
//               strokeWidth={2.5}
//             />
//           </div>
//           <span className="text-xs text-[#374151] pr-1">
//             {studentId || "—"}
//           </span>
//         </div>

//         <button
//           type="button"
//           onClick={handleLogout}
//           className="w-9 h-9 rounded-lg flex items-center justify-center text-[#9CA3AF] hover:bg-[#EFEDE8] hover:text-[#DC2626] transition-colors"
//           title="Log out"
//         >
//           <LogOut className="w-[18px] h-[18px]" strokeWidth={2} />
//         </button>
//       </div>
//     </header>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Menu, LogOut, UserRound } from "lucide-react";

export default function Topbar({ setMobileOpen }) {
  const router = useRouter();
  const [studentName, setStudentName] = useState("");
  const [studentImage, setStudentImage] = useState("");

  useEffect(() => {
    setStudentName(localStorage.getItem("studentName") || "");
    setStudentImage(localStorage.getItem("studentImage") || "");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("studentAuth");
    localStorage.removeItem("studentId");
    localStorage.removeItem("studentMongoId");
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentImage");
    router.push("/student/login");
  };

  return (
    <header className="h-16 flex items-center justify-between px-5 lg:px-8 border-b border-[#E5E3DE] bg-[#F7F5F2] sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-[#374151] hover:bg-[#EFEDE8] transition-colors"
        >
          <Menu className="w-5 h-5" />
        </button>
        <span className="text-[#0E1116] text-sm font-medium">
          Student Dashboard
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 pl-1.5 pr-3.5 py-1 rounded-full border border-[#E5E3DE] bg-white">
          <div className="relative w-6 h-6 rounded-full overflow-hidden bg-[#0E1116] flex items-center justify-center shrink-0">
            {studentImage ? (
              <Image
                src={studentImage}
                alt={studentName || "Student"}
                fill
                sizes="24px"
                className="object-cover"
              />
            ) : (
              <UserRound
                className="w-3.5 h-3.5 text-[#E8A33D]"
                strokeWidth={2.5}
              />
            )}
          </div>
          <span className="text-xs text-[#374151]">
            {studentName || "Student"}
          </span>
        </div>

        <button
          type="button"
          onClick={handleLogout}
          className="w-9 h-9 rounded-lg flex items-center justify-center text-[#9CA3AF] hover:bg-[#EFEDE8] hover:text-[#DC2626] transition-colors"
          title="Log out"
        >
          <LogOut className="w-[18px] h-[18px]" strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}
