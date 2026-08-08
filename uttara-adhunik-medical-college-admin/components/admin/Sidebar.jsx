"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  LayoutDashboard,
  Users,
  FileText,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  ImageIcon,
  Info,
  Target,
  Building2,
  Trophy,
  BriefcaseBusiness,
  Images,
  Sparkles,
  FolderKanban,
  MessageSquare,
  Handshake,
  Newspaper,
  History,
} from "lucide-react";

const NAV_GROUPS = [
  {
    label: "Main",
    items: [
      {
        name: "Dashboard",
        href: "/admin",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    label: "Home",
    items: [
      {
        name: "Hero",
        href: "/admin/home/hero",
        icon: ImageIcon,
      },
      {
        name: "About",
        href: "/admin/home/about",
        icon: FileText,
      },
    ],
  },

  {
    label: "About Us",
    items: [
      {
        name: "Overview",
        icon: Info,
        children: [
          { name: "Hero", href: "/admin/about/overview/hero" },
          {
            name: "Admission & Aid",
            href: "/admin/about/overview/admission-aid",
          },
        ],
      },
      {
        name: "History",
        icon: History,
        children: [
          { name: "History Section", href: "/admin/about/history/history" },
          { name: "Years", href: "/admin/about/history/years" },
        ],
      },
      {
        name: "Vision & Mission",
        icon: Target,
        children: [
          { name: "Vision", href: "/admin/about/vision-mission/vision" },
          { name: "Mission", href: "/admin/about/vision-mission/mission" },
        ],
      },
    ],
  },

  {
    label: "Facilities",
    items: [
      {
        name: "Department",
        href: "/admin/facilities/department",
        icon: Building2,
      },
      { name: "Sports", href: "/admin/facilities/sports", icon: Trophy },
      { name: "Faculty", href: "/admin/facilities/faculty", icon: Users },
    ],
  },

  {
    label: "Content Management",
    items: [
      { name: "Services", href: "/admin/service", icon: BriefcaseBusiness },
      { name: "Album", href: "/admin/album", icon: Images },
      { name: "Features", href: "/admin/feature", icon: Sparkles },
      { name: "Policies", href: "/admin/policy", icon: ShieldCheck },
      { name: "Portfolio", href: "/admin/portfolio", icon: FolderKanban },
      { name: "Feedback", href: "/admin/feedback", icon: MessageSquare },
      { name: "Partners", href: "/admin/partner", icon: Handshake },
      { name: "Blogs", href: "/admin/blog", icon: Newspaper },
      {
        name: "Instagram Strip",
        href: "/admin/instagram-strip",
        icon: Newspaper,
      },
    ],
  },
];

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

// Is this item (or, for parents, any of its children) the active route?
function isItemActive(item, pathname) {
  if (item.children) {
    return item.children.some(
      (child) =>
        pathname === child.href || pathname?.startsWith(child.href + "/"),
    );
  }
  if (!item.href) return false;
  return (
    pathname === item.href ||
    (item.href !== "/admin" && pathname?.startsWith(item.href + "/"))
  );
}

export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const pathname = usePathname();
  const [openItems, setOpenItems] = useState({});

  // Auto-expand whichever parent contains the currently active route.
  useEffect(() => {
    const next = {};
    NAV_GROUPS.forEach((group) => {
      group.items.forEach((item) => {
        if (item.children && isItemActive(item, pathname)) {
          next[item.name] = true;
        }
      });
    });
    setOpenItems((prev) => ({ ...prev, ...next }));
  }, [pathname]);

  const toggleItem = (name) => {
    setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      {/* mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen z-40 bg-[#0E1116] flex flex-col shrink-0 transition-all duration-200 ${
          collapsed ? "lg:w-[76px]" : "lg:w-[248px]"
        } w-[248px] ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* brand */}
        <div className="flex items-center gap-3 h-16 px-5 border-b border-white/[0.06] shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#E8A33D] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#0E1116]" strokeWidth={2.5} />
          </div>
          {!collapsed && (
            <span
              className="text-[#F7F5F2] text-[15px] tracking-tight whitespace-nowrap"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Admin Panel
            </span>
          )}
        </div>

        {/* nav */}
        <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-6">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              {!collapsed && (
                <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B616E]">
                  {group.label}
                </p>
              )}
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const active = isItemActive(item, pathname);

                  // --- Item with a submenu ---
                  if (item.children) {
                    const isOpen = collapsed ? false : !!openItems[item.name];
                    return (
                      <div key={`${group.label}-${item.name}`}>
                        <button
                          type="button"
                          onClick={() => !collapsed && toggleItem(item.name)}
                          title={collapsed ? item.name : undefined}
                          className={`w-full group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors relative ${
                            active
                              ? "bg-[#E8A33D]/10 text-[#E8A33D]"
                              : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
                          }`}
                        >
                          {active && (
                            <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
                          )}
                          <Icon
                            className="w-[18px] h-[18px] shrink-0"
                            strokeWidth={2}
                          />
                          {!collapsed && (
                            <>
                              <span className="truncate flex-1 text-left">
                                {item.name}
                              </span>
                              <ChevronDown
                                className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </>
                          )}
                        </button>

                        {!collapsed && isOpen && (
                          <div className="mt-0.5 ml-[34px] pl-3 border-l border-white/[0.08] space-y-0.5">
                            {item.children.map((child) => {
                              const childActive = pathname === child.href;
                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={`block px-3 py-2 rounded-lg text-[13px] truncate transition-colors ${
                                    childActive
                                      ? "text-[#E8A33D] bg-[#E8A33D]/10"
                                      : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
                                  }`}
                                >
                                  {child.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  // --- Regular link item ---
                  return (
                    <Link
                      key={`${group.label}-${item.name}`}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      title={collapsed ? item.name : undefined}
                      className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors relative ${
                        active
                          ? "bg-[#E8A33D]/10 text-[#E8A33D]"
                          : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
                      }`}
                    >
                      {active && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
                      )}
                      <Icon
                        className="w-[18px] h-[18px] shrink-0"
                        strokeWidth={2}
                      />
                      {!collapsed && (
                        <span className="truncate">{item.name}</span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* collapse toggle */}
        <div className="hidden lg:flex items-center justify-center border-t border-white/[0.06] py-3">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="flex items-center justify-center w-8 h-8 rounded-lg text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.06] transition-colors"
          >
            {collapsed ? (
              <ChevronsRight className="w-4 h-4" />
            ) : (
              <ChevronsLeft className="w-4 h-4" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
