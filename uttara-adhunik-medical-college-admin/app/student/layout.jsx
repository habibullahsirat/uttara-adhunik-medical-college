"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/student/Sidebar";
import Topbar from "@/components/student/Topbar";

export default function StudentLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginRoute = pathname === "/student/login";

  const [checked, setChecked] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // The login page manages its own state — don't guard it, or you get
    // an instant redirect loop (layout wraps /student/login too).
    if (isLoginRoute) return;

    const isAuthed = localStorage.getItem("studentAuth") === "true";
    if (!isAuthed) {
      router.replace("/student/login");
    } else {
      setChecked(true);
    }
  }, [router, isLoginRoute]);

  // Login page renders standalone, no sidebar/topbar chrome.
  if (isLoginRoute) return children;

  // Avoid flashing the dashboard before the auth check resolves.
  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F7F5F2]">
        <div className="w-6 h-6 rounded-full border-2 border-[#E8A33D] border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#F7F5F2]">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />
      <div className="flex-1 min-w-0 flex flex-col">
        <Topbar setMobileOpen={setMobileOpen} />
        <main className="flex-1 p-5 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
