// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ShieldCheck,
//   LayoutDashboard,
//   Users,
//   FileText,
//   ChevronsLeft,
//   ChevronsRight,
//   ChevronDown,
//   ImageIcon,
//   Info,
//   Target,
//   Building2,
//   Trophy,
//   BriefcaseBusiness,
//   Images,
//   Sparkles,
//   FolderKanban,
//   MessageSquare,
//   Handshake,
//   Newspaper,
//   History,
// } from "lucide-react";

// const NAV_GROUPS = [
//   {
//     label: "Main",
//     items: [
//       {
//         name: "Dashboard",
//         href: "/admin",
//         icon: LayoutDashboard,
//       },
//     ],
//   },

//   {
//     label: "Home",
//     items: [
//       {
//         name: "Hero",
//         href: "/admin/home/hero",
//         icon: ImageIcon,
//       },
//       {
//         name: "About",
//         href: "/admin/home/about",
//         icon: FileText,
//       },
//     ],
//   },

//   {
//     label: "About Us",
//     items: [
//       {
//         name: "Overview",
//         icon: Info,
//         children: [
//           { name: "Hero", href: "/admin/about/overview/hero" },
//           {
//             name: "Admission & Aid",
//             href: "/admin/about/overview/admission-aid",
//           },
//         ],
//       },
//       {
//         name: "History",
//         icon: History,
//         children: [
//           { name: "History Section", href: "/admin/about/history/history" },
//           { name: "Years", href: "/admin/about/history/years" },
//         ],
//       },
//       {
//         name: "Vision & Mission",
//         icon: Target,
//         children: [
//           { name: "Vision", href: "/admin/about/vision-mission/vision" },
//           { name: "Mission", href: "/admin/about/vision-mission/mission" },
//         ],
//       },
//     ],
//   },

//   {
//     label: "Facilities",
//     items: [
//       {
//         name: "Department",
//         href: "/admin/facilities/department",
//         icon: Building2,
//       },
//       { name: "Sports", href: "/admin/facilities/sports", icon: Trophy },
//       { name: "Faculty", href: "/admin/facilities/faculty", icon: Users },
//     ],
//   },

//   {
//     label: "Content Management",
//     items: [
//       { name: "Services", href: "/admin/service", icon: BriefcaseBusiness },
//       { name: "Album", href: "/admin/album", icon: Images },
//       { name: "Features", href: "/admin/feature", icon: Sparkles },
//       { name: "Policies", href: "/admin/policy", icon: ShieldCheck },
//       { name: "Portfolio", href: "/admin/portfolio", icon: FolderKanban },
//       { name: "Feedback", href: "/admin/feedback", icon: MessageSquare },
//       { name: "Partners", href: "/admin/partner", icon: Handshake },
//       { name: "Blogs", href: "/admin/blog", icon: Newspaper },
//       {
//         name: "Instagram Strip",
//         href: "/admin/instagram-strip",
//         icon: Newspaper,
//       },
//     ],
//   },
// ];

// const DISPLAY_FONT =
//   "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

// // Is this item (or, for parents, any of its children) the active route?
// function isItemActive(item, pathname) {
//   if (item.children) {
//     return item.children.some(
//       (child) =>
//         pathname === child.href || pathname?.startsWith(child.href + "/"),
//     );
//   }
//   if (!item.href) return false;
//   return (
//     pathname === item.href ||
//     (item.href !== "/admin" && pathname?.startsWith(item.href + "/"))
//   );
// }

// export default function Sidebar({
//   collapsed,
//   setCollapsed,
//   mobileOpen,
//   setMobileOpen,
// }) {
//   const pathname = usePathname();
//   const [openItems, setOpenItems] = useState({});

//   // Auto-expand whichever parent contains the currently active route.
//   useEffect(() => {
//     const next = {};
//     NAV_GROUPS.forEach((group) => {
//       group.items.forEach((item) => {
//         if (item.children && isItemActive(item, pathname)) {
//           next[item.name] = true;
//         }
//       });
//     });
//     setOpenItems((prev) => ({ ...prev, ...next }));
//   }, [pathname]);

//   const toggleItem = (name) => {
//     setOpenItems((prev) => ({ ...prev, [name]: !prev[name] }));
//   };

//   return (
//     <>
//       {/* mobile overlay */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-30 lg:hidden"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//       <aside
//         className={`fixed lg:sticky top-0 left-0 h-screen z-40 bg-[#0E1116] flex flex-col shrink-0 transition-all duration-200 ${
//           collapsed ? "lg:w-[76px]" : "lg:w-[248px]"
//         } w-[248px] ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
//       >
//         {/* brand */}
//         <div className="flex items-center gap-3 h-16 px-5 border-b border-white/[0.06] shrink-0">
//           <div className="w-8 h-8 rounded-lg bg-[#E8A33D] flex items-center justify-center shrink-0">
//             <ShieldCheck className="w-4 h-4 text-[#0E1116]" strokeWidth={2.5} />
//           </div>
//           {!collapsed && (
//             <span
//               className="text-[#F7F5F2] text-[15px] tracking-tight whitespace-nowrap"
//               style={{ fontFamily: DISPLAY_FONT }}
//             >
//               Admin Panel
//             </span>
//           )}
//         </div>

//         {/* nav */}
//         <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-6">
//           {NAV_GROUPS.map((group) => (
//             <div key={group.label}>
//               {!collapsed && (
//                 <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B616E]">
//                   {group.label}
//                 </p>
//               )}
//               <div className="space-y-0.5">
//                 {group.items.map((item) => {
//                   const Icon = item.icon;
//                   const active = isItemActive(item, pathname);

//                   // --- Item with a submenu ---
//                   if (item.children) {
//                     const isOpen = collapsed ? false : !!openItems[item.name];
//                     return (
//                       <div key={`${group.label}-${item.name}`}>
//                         <button
//                           type="button"
//                           onClick={() => !collapsed && toggleItem(item.name)}
//                           title={collapsed ? item.name : undefined}
//                           className={`w-full group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors relative ${
//                             active
//                               ? "bg-[#E8A33D]/10 text-[#E8A33D]"
//                               : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
//                           }`}
//                         >
//                           {active && (
//                             <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
//                           )}
//                           <Icon
//                             className="w-[18px] h-[18px] shrink-0"
//                             strokeWidth={2}
//                           />
//                           {!collapsed && (
//                             <>
//                               <span className="truncate flex-1 text-left">
//                                 {item.name}
//                               </span>
//                               <ChevronDown
//                                 className={`w-3.5 h-3.5 shrink-0 transition-transform ${
//                                   isOpen ? "rotate-180" : ""
//                                 }`}
//                               />
//                             </>
//                           )}
//                         </button>

//                         {!collapsed && isOpen && (
//                           <div className="mt-0.5 ml-[34px] pl-3 border-l border-white/[0.08] space-y-0.5">
//                             {item.children.map((child) => {
//                               const childActive = pathname === child.href;
//                               return (
//                                 <Link
//                                   key={child.href}
//                                   href={child.href}
//                                   onClick={() => setMobileOpen(false)}
//                                   className={`block px-3 py-2 rounded-lg text-[13px] truncate transition-colors ${
//                                     childActive
//                                       ? "text-[#E8A33D] bg-[#E8A33D]/10"
//                                       : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
//                                   }`}
//                                 >
//                                   {child.name}
//                                 </Link>
//                               );
//                             })}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   }

//                   // --- Regular link item ---
//                   return (
//                     <Link
//                       key={`${group.label}-${item.name}`}
//                       href={item.href}
//                       onClick={() => setMobileOpen(false)}
//                       title={collapsed ? item.name : undefined}
//                       className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors relative ${
//                         active
//                           ? "bg-[#E8A33D]/10 text-[#E8A33D]"
//                           : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
//                       }`}
//                     >
//                       {active && (
//                         <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
//                       )}
//                       <Icon
//                         className="w-[18px] h-[18px] shrink-0"
//                         strokeWidth={2}
//                       />
//                       {!collapsed && (
//                         <span className="truncate">{item.name}</span>
//                       )}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </nav>

//         {/* collapse toggle */}
//         <div className="hidden lg:flex items-center justify-center border-t border-white/[0.06] py-3">
//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="flex items-center justify-center w-8 h-8 rounded-lg text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.06] transition-colors"
//           >
//             {collapsed ? (
//               <ChevronsRight className="w-4 h-4" />
//             ) : (
//               <ChevronsLeft className="w-4 h-4" />
//             )}
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }

// Version 2
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   ShieldCheck,
//   LayoutDashboard,
//   ChevronDown,
//   ChevronsLeft,
//   ChevronsRight,
//   ImageIcon,
//   Bell,
//   Newspaper,
//   FileText,
//   BarChart3,
//   Building2,
//   GraduationCap,
//   Landmark,
//   HeartPulse,
//   MessageSquare,
//   History,
//   Target,
//   Crosshair,
//   Users,
//   UserRound,
//   Handshake,
//   BriefcaseBusiness,
//   Stethoscope,
//   Ambulance,
//   Activity,
//   Microscope,
//   PlusCircle,
//   Info,
//   Clock3,
//   Sparkles,
//   School,
// } from "lucide-react";

// const NAV_GROUPS = [
//   // ============================================================
//   // MAIN
//   // ============================================================
//   {
//     label: "Main",
//     items: [
//       {
//         name: "Dashboard",
//         href: "/admin",
//         icon: LayoutDashboard,
//       },
//     ],
//   },

//   // ============================================================
//   // HOMEPAGE
//   // ============================================================
//   {
//     label: "Homepage",
//     items: [
//       {
//         name: "Hero",
//         href: "/admin/home/hero",
//         icon: ImageIcon,
//       },
//       {
//         name: "Notice Board",
//         href: "/admin/home/notice-board",
//         icon: Bell,
//       },
//       {
//         name: "Publication",
//         href: "/admin/home/publication",
//         icon: Newspaper,
//       },
//       {
//         name: "About",
//         href: "/admin/home/about",
//         icon: FileText,
//       },
//       {
//         name: "Stats",
//         href: "/admin/home/stats",
//         icon: BarChart3,
//       },
//       {
//         name: "Find Department",
//         href: "/admin/home/find-department",
//         icon: Building2,
//       },
//       {
//         name: "Admission",
//         href: "/admin/home/admission",
//         icon: GraduationCap,
//       },
//       {
//         name: "Facility",
//         href: "/admin/home/facility",
//         icon: Landmark,
//       },
//       {
//         name: "Principle Message",
//         href: "/admin/home/principle-message",
//         icon: UserRound,
//       },
//       {
//         name: "Campus Life",
//         href: "/admin/home/campus-life",
//         icon: School,
//       },
//       {
//         name: "Alumni Event",
//         href: "/admin/home/alumni-event",
//         icon: Handshake,
//       },
//       {
//         name: "Latest News",
//         href: "/admin/home/latest-news",
//         icon: Newspaper,
//       },
//       {
//         name: "Students Feedback",
//         href: "/admin/home/students-feedback",
//         icon: MessageSquare,
//       },
//     ],
//   },

//   // ============================================================
//   // ABOUT PAGE
//   // ============================================================
//   {
//     label: "About Page",
//     items: [
//       {
//         name: "Overview",
//         icon: Info,
//         children: [
//           {
//             name: "Visit",
//             href: "/admin/about/overview/visit",
//           },
//           {
//             name: "Admission and Aid",
//             href: "/admin/about/overview/admission-and-aid",
//           },
//           {
//             name: "Sustainability",
//             href: "/admin/about/overview/sustainability",
//           },
//         ],
//       },

//       {
//         name: "History",
//         icon: History,
//         children: [
//           {
//             name: "History",
//             href: "/admin/about/history/history",
//           },
//           {
//             name: "Time Line",
//             href: "/admin/about/history/time-line",
//           },
//         ],
//       },

//       {
//         name: "Vision and Mission",
//         icon: Target,
//         children: [
//           {
//             name: "Vision",
//             href: "/admin/about/vision-mission/vision",
//           },
//         ],
//       },

//       {
//         name: "Aim and Objective",
//         icon: Crosshair,
//         children: [
//           {
//             name: "Aim",
//             href: "/admin/about/aim-objective/aim",
//           },
//           {
//             name: "Objective",
//             href: "/admin/about/aim-objective/objective",
//           },
//         ],
//       },

//       {
//         name: "Founder Members",
//         icon: Users,
//         children: [
//           {
//             name: "Members",
//             href: "/admin/about/founder-members/members",
//           },
//         ],
//       },

//       {
//         name: "EC Member",
//         icon: UserRound,
//         children: [
//           {
//             name: "Members",
//             href: "/admin/about/ec-member/members",
//           },
//         ],
//       },

//       {
//         name: "GB Member",
//         icon: Users,
//         children: [
//           {
//             name: "Members",
//             href: "/admin/about/gb-member/members",
//           },
//         ],
//       },
//     ],
//   },

//   // ============================================================
//   // HOSPITAL SERVICE PAGE
//   // ============================================================
//   {
//     label: "Hospital Service Page",
//     items: [
//       {
//         name: "About",
//         icon: HeartPulse,
//         children: [
//           {
//             name: "About",
//             href: "/admin/hospital-service/about/about",
//           },
//           {
//             name: "Facilities and Services",
//             href: "/admin/hospital-service/about/facilities-and-services",
//           },
//           {
//             name: "Facilities",
//             href: "/admin/hospital-service/about/facilities",
//           },
//           {
//             name: "Services",
//             href: "/admin/hospital-service/about/services",
//           },
//           {
//             name: "Emergency",
//             href: "/admin/hospital-service/about/emergency",
//           },
//           {
//             name: "Diagnostic",
//             href: "/admin/hospital-service/about/diagnostic",
//           },
//           {
//             name: "Additional Services",
//             href: "/admin/hospital-service/about/additional-services",
//           },
//         ],
//       },

//       {
//         name: "History",
//         icon: History,
//         children: [
//           {
//             name: "History",
//             href: "/admin/hospital-service/history/history",
//           },
//           {
//             name: "Time Line",
//             href: "/admin/hospital-service/history/time-line",
//           },
//         ],
//       },

//       {
//         name: "Vision and Mission",
//         icon: Target,
//         children: [
//           {
//             name: "Vision",
//             href: "/admin/hospital-service/vision-mission/vision",
//           },
//         ],
//       },

//       {
//         name: "Aim and Objective",
//         icon: Crosshair,
//         children: [
//           {
//             name: "Aim",
//             href: "/admin/hospital-service/aim-objective/aim",
//           },
//           {
//             name: "Objective",
//             href: "/admin/hospital-service/aim-objective/objective",
//           },
//         ],
//       },

//       {
//         name: "Founder Members",
//         icon: Users,
//         children: [
//           {
//             name: "Members",
//             href: "/admin/hospital-service/founder-members/members",
//           },
//         ],
//       },

//       {
//         name: "EC Member",
//         icon: UserRound,
//         children: [
//           {
//             name: "Members",
//             href: "/admin/hospital-service/ec-member/members",
//           },
//         ],
//       },

//       {
//         name: "GB Member",
//         icon: Users,
//         children: [
//           {
//             name: "Members",
//             href: "/admin/hospital-service/gb-member/members",
//           },
//         ],
//       },
//     ],
//   },
// ];

// const DISPLAY_FONT =
//   "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

// // ============================================================
// // Check whether an item or one of its children is active
// // ============================================================
// function isItemActive(item, pathname) {
//   if (item.children) {
//     return item.children.some(
//       (child) =>
//         pathname === child.href || pathname?.startsWith(child.href + "/"),
//     );
//   }

//   if (!item.href) return false;

//   return (
//     pathname === item.href ||
//     (item.href !== "/admin" && pathname?.startsWith(item.href + "/"))
//   );
// }

// export default function Sidebar({
//   collapsed,
//   setCollapsed,
//   mobileOpen,
//   setMobileOpen,
// }) {
//   const pathname = usePathname();

//   const [openItems, setOpenItems] = useState({});

//   // ============================================================
//   // Auto-expand parent when one of its children is active
//   // ============================================================
//   useEffect(() => {
//     const next = {};

//     NAV_GROUPS.forEach((group) => {
//       group.items.forEach((item) => {
//         if (item.children && isItemActive(item, pathname)) {
//           next[item.name] = true;
//         }
//       });
//     });

//     setOpenItems((prev) => ({
//       ...prev,
//       ...next,
//     }));
//   }, [pathname]);

//   // ============================================================
//   // Toggle submenu
//   // ============================================================
//   const toggleItem = (name) => {
//     setOpenItems((prev) => ({
//       ...prev,
//       [name]: !prev[name],
//     }));
//   };

//   return (
//     <>
//       {/* ======================================================
//           Mobile overlay
//       ====================================================== */}
//       {mobileOpen && (
//         <div
//           className="fixed inset-0 bg-black/40 z-30 lg:hidden"
//           onClick={() => setMobileOpen(false)}
//         />
//       )}

//       {/* ======================================================
//           Sidebar
//       ====================================================== */}
//       <aside
//         className={`fixed lg:sticky top-0 left-0 h-screen z-40 bg-[#0E1116] flex flex-col shrink-0 transition-all duration-200 ${
//           collapsed ? "lg:w-[76px]" : "lg:w-[248px]"
//         } w-[248px] ${
//           mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
//         }`}
//       >
//         {/* ==================================================
//             Brand
//         ================================================== */}
//         <div className="flex items-center gap-3 h-16 px-5 border-b border-white/[0.06] shrink-0">
//           <div className="w-8 h-8 rounded-lg bg-[#E8A33D] flex items-center justify-center shrink-0">
//             <ShieldCheck className="w-4 h-4 text-[#0E1116]" strokeWidth={2.5} />
//           </div>

//           {!collapsed && (
//             <span
//               className="text-[#F7F5F2] text-[15px] tracking-tight whitespace-nowrap"
//               style={{ fontFamily: DISPLAY_FONT }}
//             >
//               Admin Panel
//             </span>
//           )}
//         </div>

//         {/* ==================================================
//             Navigation
//         ================================================== */}
//         <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-6">
//           {NAV_GROUPS.map((group) => (
//             <div key={group.label}>
//               {/* Group label */}
//               {!collapsed && (
//                 <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B616E]">
//                   {group.label}
//                 </p>
//               )}

//               <div className="space-y-0.5">
//                 {group.items.map((item) => {
//                   const Icon = item.icon;
//                   const active = isItemActive(item, pathname);

//                   // ==================================================
//                   // Item with submenu
//                   // ==================================================
//                   if (item.children) {
//                     const isOpen = collapsed ? false : !!openItems[item.name];

//                     return (
//                       <div key={`${group.label}-${item.name}`}>
//                         <button
//                           type="button"
//                           onClick={() => !collapsed && toggleItem(item.name)}
//                           title={collapsed ? item.name : undefined}
//                           className={`w-full group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors relative ${
//                             active
//                               ? "bg-[#E8A33D]/10 text-[#E8A33D]"
//                               : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
//                           }`}
//                         >
//                           {/* Active indicator */}
//                           {active && (
//                             <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
//                           )}

//                           <Icon
//                             className="w-[18px] h-[18px] shrink-0"
//                             strokeWidth={2}
//                           />

//                           {!collapsed && (
//                             <>
//                               <span className="truncate flex-1 text-left">
//                                 {item.name}
//                               </span>

//                               <ChevronDown
//                                 className={`w-3.5 h-3.5 shrink-0 transition-transform ${
//                                   isOpen ? "rotate-180" : ""
//                                 }`}
//                               />
//                             </>
//                           )}
//                         </button>

//                         {/* ==================================================
//                             Submenu
//                         ================================================== */}
//                         {!collapsed && isOpen && (
//                           <div className="mt-0.5 ml-[34px] pl-3 border-l border-white/[0.08] space-y-0.5">
//                             {item.children.map((child) => {
//                               const childActive =
//                                 pathname === child.href ||
//                                 pathname?.startsWith(child.href + "/");

//                               return (
//                                 <Link
//                                   key={child.href}
//                                   href={child.href}
//                                   onClick={() => setMobileOpen(false)}
//                                   className={`block px-3 py-2 rounded-lg text-[13px] truncate transition-colors ${
//                                     childActive
//                                       ? "text-[#E8A33D] bg-[#E8A33D]/10"
//                                       : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
//                                   }`}
//                                 >
//                                   {child.name}
//                                 </Link>
//                               );
//                             })}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   }

//                   // ==================================================
//                   // Regular link item
//                   // ==================================================
//                   return (
//                     <Link
//                       key={`${group.label}-${item.name}`}
//                       href={item.href}
//                       onClick={() => setMobileOpen(false)}
//                       title={collapsed ? item.name : undefined}
//                       className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-[13.5px] transition-colors relative ${
//                         active
//                           ? "bg-[#E8A33D]/10 text-[#E8A33D]"
//                           : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
//                       }`}
//                     >
//                       {/* Active indicator */}
//                       {active && (
//                         <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
//                       )}

//                       <Icon
//                         className="w-[18px] h-[18px] shrink-0"
//                         strokeWidth={2}
//                       />

//                       {!collapsed && (
//                         <span className="truncate">{item.name}</span>
//                       )}
//                     </Link>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </nav>

//         {/* ==================================================
//             Collapse toggle
//         ================================================== */}
//         <div className="hidden lg:flex items-center justify-center border-t border-white/[0.06] py-3">
//           <button
//             type="button"
//             onClick={() => setCollapsed(!collapsed)}
//             aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
//             className="flex items-center justify-center w-8 h-8 rounded-lg text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.06] transition-colors"
//           >
//             {collapsed ? (
//               <ChevronsRight className="w-4 h-4" />
//             ) : (
//               <ChevronsLeft className="w-4 h-4" />
//             )}
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// }

//Version 3
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  LayoutDashboard,
  ChevronsLeft,
  ChevronsRight,
  ChevronDown,
  ImageIcon,
  Bell,
  Newspaper,
  FileText,
  BarChart3,
  Building2,
  GraduationCap,
  Landmark,
  UserRound,
  Handshake,
  MessageSquare,
  History,
  Target,
  Crosshair,
  Users,
  HeartPulse,
  School,
  Stethoscope,
  Ambulance,
  Activity,
  Microscope,
  PlusCircle,
  Info,
  Clock3,
  Sparkles,
} from "lucide-react";

const NAV_GROUPS = [
  // ============================================================
  // MAIN
  // ============================================================
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

  // ============================================================
  // HOMEPAGE
  // Page -> Sections
  // ============================================================
  {
    label: "Website",
    items: [
      {
        name: "Homepage",
        icon: ImageIcon,
        children: [
          {
            name: "Hero",
            href: "/admin/homepage/hero",
            icon: ImageIcon,
          },
          {
            name: "Notice Board",
            href: "/admin/homepage/notice",
            icon: Bell,
          },
          {
            name: "Publication",
            href: "/admin/homepage/publication",
            icon: Newspaper,
          },
          {
            name: "About",
            href: "/admin/homepage/about",
            icon: FileText,
          },
          {
            name: "Stats",
            href: "/admin/homepage/stat",
            icon: BarChart3,
          },
          {
            name: "Find Department Section",
            href: "/admin/homepage/find-department-left",
            icon: Building2,
          },
          {
            name: "Find Department Banner",
            href: "/admin/homepage/find-department-right",
            icon: Building2,
          },
          {
            name: "Admission",
            href: "/admin/homepage/admission",
            icon: GraduationCap,
          },
          {
            name: "Facility",
            href: "/admin/homepage/feature",
            icon: Landmark,
          },
          {
            name: "Principle Message",
            href: "/admin/homepage/principle-message",
            icon: UserRound,
          },
          {
            name: "Campus Life",
            href: "/admin/homepage/campus-life",
            icon: School,
          },
          {
            name: "Alumni Event Section",
            href: "/admin/homepage/alumni-events",
            icon: Handshake,
          },
          {
            name: "Alumni Event Banner",
            href: "/admin/homepage/alumni-events-image",
            icon: Handshake,
          },
          {
            name: "Latest News",
            href: "/admin/homepage/news",
            icon: Newspaper,
          },
          {
            name: "Students Feedback",
            href: "/admin/homepage/feedback",
            icon: MessageSquare,
          },
        ],
      },

      // ========================================================
      // ABOUT PAGE
      // Page -> Sub Page -> Sections
      // ========================================================
      {
        name: "About Page",
        icon: Info,
        children: [
          {
            name: "Overview",
            icon: Info,
            children: [
              {
                name: "Visit",
                href: "/admin/about/overview/visit",
                icon: Building2,
              },
              {
                name: "Admission and Aid",
                href: "/admin/about/overview/admission-aid",
                icon: GraduationCap,
              },
              {
                name: "Sustainability",
                href: "/admin/about/overview/sustainability",
                icon: Sparkles,
              },
            ],
          },

          {
            name: "History",
            icon: History,
            children: [
              {
                name: "History",
                href: "/admin/about/history/history",
                icon: History,
              },
              {
                name: "Time Line",
                href: "/admin/about/history/time-line",
                icon: Clock3,
              },
            ],
          },

          {
            name: "Vision and Mission",
            icon: Target,
            children: [
              {
                name: "Vision",
                href: "/admin/about/vision-mission/vision",
                icon: Target,
              },
            ],
          },

          {
            name: "Aim and Objective",
            icon: Crosshair,
            children: [
              {
                name: "Aim",
                href: "/admin/about/aim-objective/aim",
                icon: Crosshair,
              },
              {
                name: "Objective",
                href: "/admin/about/aim-objective/objective",
                icon: Target,
              },
            ],
          },

          {
            name: "Founder Members",
            icon: Users,
            children: [
              {
                name: "Members",
                href: "/admin/about/founder-members/members",
                icon: Users,
              },
            ],
          },

          {
            name: "EC Member",
            icon: UserRound,
            children: [
              {
                name: "Members",
                href: "/admin/about/ec-member/members",
                icon: UserRound,
              },
            ],
          },

          {
            name: "GB Member",
            icon: Users,
            children: [
              {
                name: "Members",
                href: "/admin/about/gb-member/members",
                icon: Users,
              },
            ],
          },
        ],
      },

      // ========================================================
      // HOSPITAL SERVICE PAGE
      // Page -> Sub Page -> Sections
      // ========================================================
      {
        name: "Hospital Service Page",
        icon: HeartPulse,
        children: [
          {
            name: "About",
            icon: Info,
            children: [
              {
                name: "About",
                href: "/admin/hospital-service/about/about",
                icon: Info,
              },
              {
                name: "Facilities and Services",
                href: "/admin/hospital-service/about/facilities-and-services",
                icon: Building2,
              },
              {
                name: "Facilities",
                href: "/admin/hospital-service/about/facilities",
                icon: Landmark,
              },
              {
                name: "Services",
                href: "/admin/hospital-service/about/services",
                icon: Stethoscope,
              },
              {
                name: "Emergency",
                href: "/admin/hospital-service/about/emergency",
                icon: Ambulance,
              },
              {
                name: "Diagnostic",
                href: "/admin/hospital-service/about/diagnostic",
                icon: Microscope,
              },
              {
                name: "Additional Services",
                href: "/admin/hospital-service/about/additional-services",
                icon: PlusCircle,
              },
            ],
          },

          {
            name: "History",
            icon: History,
            children: [
              {
                name: "History",
                href: "/admin/hospital-service/history/history",
                icon: History,
              },
              {
                name: "Time Line",
                href: "/admin/hospital-service/history/time-line",
                icon: Clock3,
              },
            ],
          },

          {
            name: "Vision and Mission",
            icon: Target,
            children: [
              {
                name: "Vision",
                href: "/admin/hospital-service/vision-mission/vision",
                icon: Target,
              },
            ],
          },

          {
            name: "Aim and Objective",
            icon: Crosshair,
            children: [
              {
                name: "Aim",
                href: "/admin/hospital-service/aim-objective/aim",
                icon: Crosshair,
              },
              {
                name: "Objective",
                href: "/admin/hospital-service/aim-objective/objective",
                icon: Target,
              },
            ],
          },

          {
            name: "Founder Members",
            icon: Users,
            children: [
              {
                name: "Members",
                href: "/admin/hospital-service/founder-members/members",
                icon: Users,
              },
            ],
          },

          {
            name: "EC Member",
            icon: UserRound,
            children: [
              {
                name: "Members",
                href: "/admin/hospital-service/ec-member/members",
                icon: UserRound,
              },
            ],
          },

          {
            name: "GB Member",
            icon: Users,
            children: [
              {
                name: "Members",
                href: "/admin/hospital-service/gb-member/members",
                icon: Users,
              },
            ],
          },
        ],
      },
      // --------------------
      // Admission Page
      // -------------------
      {
        name: "Admission Page",
        icon: Info,
        children: [
          {
            name: "Admission Procedure & Fees",
            icon: Info,
            children: [
              {
                name: "Banner",
                href: "/admin/admission/procedure-and-fee/about",
                icon: Building2,
              },
              {
                name: "Admission and Aid",
                href: "/admin/admission/procedure-and-fee/eligibility-national-student",
                icon: GraduationCap,
              },
              {
                name: "Selection Criteria",
                href: "/admin/admission/procedure-and-fee/selection",
                icon: Sparkles,
              },
              {
                name: "Student Quotas",
                href: "/admin/admission/procedure-and-fee/quota",
                icon: Sparkles,
              },
              {
                name: "Fees for National Student",
                href: "/admin/admission/procedure-and-fee/fee-national",
                icon: Sparkles,
              },
              {
                name: "Monthly fee for National Student",
                href: "/admin/admission/procedure-and-fee/monthly-fee",
                icon: Sparkles,
              },
              {
                name: "Eligibility for Foreign Students",
                href: "/admin/admission/procedure-and-fee/eligibility-foreign-student",
                icon: Sparkles,
              },
              {
                name: "Required Documents for Foreign Student",
                href: "/admin/admission/procedure-and-fee/document",
                icon: Sparkles,
              },
              {
                name: "Fees for Foreign Students",
                href: "/admin/admission/procedure-and-fee/fee-foreign",
                icon: Sparkles,
              },
            ],
          },

          {
            name: "Admission Papers",
            icon: Info,
            children: [
              {
                name: "Admission Papers & Notices",
                href: "/admin/admission/paper",
                icon: Building2,
              },
            ],
          },

          {
            name: "Admission Forms",
            icon: Info,
            children: [
              {
                name: "Admission Papers & Notices",
                href: "/admin/admission/form",
                icon: Building2,
              },
            ],
          },

          {
            name: "Admission Result",
            icon: Info,
            children: [
              {
                name: "Admission Papers & Notices",
                href: "/admin/admission/result",
                icon: Building2,
              },
            ],
          },

          {
            name: "History",
            icon: History,
            children: [
              {
                name: "History",
                href: "/admin/about/history/history",
                icon: History,
              },
              {
                name: "Time Line",
                href: "/admin/about/history/time-line",
                icon: Clock3,
              },
            ],
          },

          {
            name: "Vision and Mission",
            icon: Target,
            children: [
              {
                name: "Vision",
                href: "/admin/about/vision-mission/vision",
                icon: Target,
              },
            ],
          },

          {
            name: "Aim and Objective",
            icon: Crosshair,
            children: [
              {
                name: "Aim",
                href: "/admin/about/aim-objective/aim",
                icon: Crosshair,
              },
              {
                name: "Objective",
                href: "/admin/about/aim-objective/objective",
                icon: Target,
              },
            ],
          },

          {
            name: "Founder Members",
            icon: Users,
            children: [
              {
                name: "Members",
                href: "/admin/about/founder-members/members",
                icon: Users,
              },
            ],
          },

          {
            name: "EC Member",
            icon: UserRound,
            children: [
              {
                name: "Members",
                href: "/admin/about/ec-member/members",
                icon: UserRound,
              },
            ],
          },

          {
            name: "GB Member",
            icon: Users,
            children: [
              {
                name: "Members",
                href: "/admin/about/gb-member/members",
                icon: Users,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "Public Message",
    items: [
      {
        name: "Public Message",
        href: "/admin/public-message",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    label: "Site Setting",
    items: [
      {
        name: "Site Setting",
        href: "/admin/site-setting",
        icon: LayoutDashboard,
      },
    ],
  },
];

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";

// ============================================================
// Check if item or any nested child is active
// ============================================================
function isItemActive(item, pathname) {
  if (item.href) {
    return pathname === item.href || pathname?.startsWith(item.href + "/");
  }

  if (item.children) {
    return item.children.some((child) => isItemActive(child, pathname));
  }

  return false;
}

// ============================================================
// Sidebar
// ============================================================
export default function Sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
}) {
  const pathname = usePathname();

  // Use href/path-based keys instead of item names.
  // This prevents duplicate names such as "History" and "Members"
  // from opening/closing each other.
  const [openItems, setOpenItems] = useState({});

  // ==========================================================
  // Get a unique key for each navigation item
  // ==========================================================
  const getItemKey = (item, parentKey = "") => {
    if (item.href) {
      return item.href;
    }

    return parentKey ? `${parentKey}/${item.name}` : item.name;
  };

  // ==========================================================
  // Automatically open all parents containing active route
  // ==========================================================
  useEffect(() => {
    const next = {};

    const walkItems = (items, parentKey = "") => {
      items.forEach((item) => {
        const key = getItemKey(item, parentKey);

        if (item.children) {
          if (isItemActive(item, pathname)) {
            next[key] = true;
          }

          walkItems(item.children, key);
        }
      });
    };

    NAV_GROUPS.forEach((group) => {
      walkItems(group.items, group.label);
    });

    setOpenItems((prev) => ({
      ...prev,
      ...next,
    }));
  }, [pathname]);

  // ==========================================================
  // Toggle item
  // ==========================================================
  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // ==========================================================
  // Close mobile sidebar
  // ==========================================================
  const handleMobileClose = () => {
    setMobileOpen(false);
  };

  // ==========================================================
  // Recursive navigation renderer
  //
  // Level 1 = Page
  // Level 2 = Sub Page
  // Level 3 = Section
  // ==========================================================
  const renderNavItem = (item, level = 0, parentKey = "") => {
    const Icon = item.icon;
    const itemKey = getItemKey(item, parentKey);

    const active = isItemActive(item, pathname);
    const isOpen = collapsed ? false : !!openItems[itemKey];

    // ========================================================
    // Item with children = dropdown
    // ========================================================
    if (item.children) {
      return (
        <div key={itemKey}>
          <button
            type="button"
            onClick={() => {
              if (!collapsed) {
                toggleItem(itemKey);
              }
            }}
            title={collapsed ? item.name : undefined}
            className={`
              w-full group flex items-center gap-3
              rounded-lg text-[13.5px]
              transition-colors relative
              ${
                level === 0
                  ? "px-3 py-2.5"
                  : level === 1
                    ? "px-3 py-2.5"
                    : "px-3 py-2"
              }
              ${
                active
                  ? "bg-[#E8A33D]/10 text-[#E8A33D]"
                  : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
              }
            `}
          >
            {/* Active indicator */}
            {active && (
              <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
            )}

            {Icon && (
              <Icon
                className={`
                  shrink-0
                  ${level === 0 ? "w-[18px] h-[18px]" : "w-[17px] h-[17px]"}
                `}
                strokeWidth={2}
              />
            )}

            {!collapsed && (
              <>
                <span className="truncate flex-1 text-left">{item.name}</span>

                <ChevronDown
                  className={`
                    w-3.5 h-3.5 shrink-0
                    transition-transform duration-200
                    ${isOpen ? "rotate-180" : ""}
                  `}
                />
              </>
            )}
          </button>

          {/* ==================================================
              Children
          ================================================== */}
          {!collapsed && isOpen && (
            <div
              className={`
                mt-0.5 space-y-0.5
                ${
                  level === 0
                    ? "ml-[20px] pl-3 border-l border-white/[0.08]"
                    : "ml-[20px] pl-3 border-l border-white/[0.08]"
                }
              `}
            >
              {item.children.map((child) =>
                renderNavItem(child, level + 1, itemKey),
              )}
            </div>
          )}
        </div>
      );
    }

    // ========================================================
    // Final item = actual page/section link
    // ========================================================
    return (
      <Link
        key={itemKey}
        href={item.href}
        onClick={handleMobileClose}
        title={collapsed ? item.name : undefined}
        className={`
          group flex items-center gap-3
          rounded-lg text-[13px]
          transition-colors relative
          px-3 py-2
          ${
            active
              ? "text-[#E8A33D] bg-[#E8A33D]/10"
              : "text-[#9CA3AF] hover:text-[#F7F5F2] hover:bg-white/[0.04]"
          }
        `}
      >
        {active && (
          <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-[#E8A33D]" />
        )}

        {item.icon && (
          <item.icon className="w-[16px] h-[16px] shrink-0" strokeWidth={2} />
        )}

        {!collapsed && <span className="truncate">{item.name}</span>}
      </Link>
    );
  };

  return (
    <>
      {/* ======================================================
          Mobile overlay
      ====================================================== */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={handleMobileClose}
        />
      )}

      {/* ======================================================
          Sidebar
      ====================================================== */}
      <aside
        className={`
          fixed lg:sticky
          top-0 left-0
          h-screen
          z-40
          bg-[#0E1116]
          flex flex-col
          shrink-0
          transition-all duration-200
          ${collapsed ? "lg:w-[76px]" : "lg:w-[350px]"}
          w-[248px]
          ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
      >
        {/* ==================================================
            Brand
        ================================================== */}
        <div className="flex items-center gap-3 h-16 px-5 border-b border-white/[0.06] shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#E8A33D] flex items-center justify-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-[#0E1116]" strokeWidth={2.5} />
          </div>

          {!collapsed && (
            <span
              className="text-[#F7F5F2] text-[15px] tracking-tight whitespace-nowrap"
              style={{
                fontFamily: DISPLAY_FONT,
              }}
            >
              Admin Panel
            </span>
          )}
        </div>

        {/* ==================================================
            Navigation
        ================================================== */}
        <nav className="flex-1 overflow-y-auto py-5 px-3 space-y-6">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              {/* Group title */}
              {!collapsed && (
                <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5B616E]">
                  {group.label}
                </p>
              )}

              <div className="space-y-0.5">
                {group.items.map((item) => renderNavItem(item, 0, group.label))}
              </div>
            </div>
          ))}
        </nav>

        {/* ==================================================
            Collapse toggle
        ================================================== */}
        <div className="hidden lg:flex items-center justify-center border-t border-white/[0.06] py-3">
          <button
            type="button"
            onClick={() => setCollapsed(!collapsed)}
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="
              flex items-center justify-center
              w-8 h-8
              rounded-lg
              text-[#9CA3AF]
              hover:text-[#F7F5F2]
              hover:bg-white/[0.06]
              transition-colors
            "
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
