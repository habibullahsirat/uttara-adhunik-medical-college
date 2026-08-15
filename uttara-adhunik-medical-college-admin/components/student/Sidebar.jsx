"use client";

import { useRouter } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Bell,
  IdCard,
  LogOut,
  ChevronsLeft,
  ChevronsRight,
  X,
  GraduationCap,
} from "lucide-react";

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

// Only "Dashboard" is wired up. The rest are placeholders — remove
// `disabled` and give them real routes once those pages exist.
const NAV_ITEMS = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/student" },
  { label: "Results", icon: FileText, disabled: true },
  { label: "ID Card", icon: IdCard, disabled: true },
  { label: "Notices", icon: Bell, disabled: true },
];

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("studentAuth");
    localStorage.removeItem("studentId");
    localStorage.removeItem("studentMongoId");
    localStorage.removeItem("studentName");
    localStorage.removeItem("studentImage");
    router.push("/student/login");
  };

  const NavList = () => (
    <nav className="flex-1 px-3 space-y-1">
      {NAV_ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.label}
            type="button"
            disabled={item.disabled}
            onClick={() => {
              if (item.disabled) return;
              router.push(item.href);
              setMobileOpen?.(false);
            }}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all ${
              item.disabled
                ? "text-[#5B616E] cursor-not-allowed opacity-50"
                : "text-[#D1D5DB] hover:bg-[#1A1D24] hover:text-[#F7F5F2]"
            } ${collapsed ? "justify-center" : ""}`}
            title={collapsed ? item.label : undefined}
          >
            <Icon className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
            {!collapsed && (
              <span className="flex-1 text-left">{item.label}</span>
            )}
            {!collapsed && item.disabled && (
              <span className="text-[10px] uppercase tracking-wide text-[#5B616E]">
                Soon
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-[#0E1116] shrink-0 transition-all duration-200 ${
          collapsed ? "w-[76px]" : "w-[248px]"
        }`}
      >
        <div
          className={`flex items-center gap-3 px-4 h-16 ${collapsed ? "justify-center" : ""}`}
        >
          <div className="w-9 h-9 rounded-xl bg-[#E8A33D] flex items-center justify-center shrink-0">
            <GraduationCap
              className="w-4 h-4 text-[#0E1116]"
              strokeWidth={2.5}
            />
          </div>
          {!collapsed && (
            <span
              className="text-[#F7F5F2] text-sm tracking-tight"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Student Portal
            </span>
          )}
        </div>

        <div className="pt-2 pb-4 flex-1 flex flex-col">
          <NavList />
        </div>

        <div className="px-3 pb-4 space-y-1 border-t border-[#1A1D24] pt-3">
          <button
            type="button"
            onClick={handleLogout}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#D1D5DB] hover:bg-[#1A1D24] hover:text-[#F7F5F2] transition-all ${
              collapsed ? "justify-center" : ""
            }`}
            title={collapsed ? "Log out" : undefined}
          >
            <LogOut className="w-[18px] h-[18px] shrink-0" strokeWidth={2} />
            {!collapsed && <span>Log out</span>}
          </button>

          <button
            type="button"
            onClick={() => setCollapsed((v) => !v)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#9CA3AF] hover:bg-[#1A1D24] hover:text-[#F7F5F2] transition-all justify-center"
          >
            {collapsed ? (
              <ChevronsRight className="w-[18px] h-[18px]" strokeWidth={2} />
            ) : (
              <>
                <ChevronsLeft className="w-[18px] h-[18px]" strokeWidth={2} />
                <span>Collapse</span>
              </>
            )}
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 z-50 w-[260px] bg-[#0E1116] flex flex-col transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E8A33D] flex items-center justify-center">
              <GraduationCap
                className="w-4 h-4 text-[#0E1116]"
                strokeWidth={2.5}
              />
            </div>
            <span
              className="text-[#F7F5F2] text-sm tracking-tight"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Student Portal
            </span>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="text-[#9CA3AF] hover:text-[#F7F5F2] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="pt-2 pb-4 flex-1 flex flex-col">
          <NavList />
        </div>

        <div className="px-3 pb-6 border-t border-[#1A1D24] pt-3">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[#D1D5DB] hover:bg-[#1A1D24] hover:text-[#F7F5F2] transition-all"
          >
            <LogOut className="w-[18px] h-[18px]" strokeWidth={2} />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
