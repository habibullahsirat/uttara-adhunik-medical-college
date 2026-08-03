"use client";
import React, { useState } from "react";
import { AlignJustify, ChevronDown, Menu, Search, X } from "lucide-react";
import TopBar from "./Topbar";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

function MainNav() {
  const [open, setOpen] = useState(false);
  const links = [
    "Home",
    "About UAMC",
    "Facilities",
    "Admission",
    "Notice & Media",
    "Career",
  ];

  return (
    <div className="flex items-center justify-between gap-6 px-6 md:px-20 py-4 bg-white">
      {/* Logo lockup */}
      <a href="#home" className="flex items-center gap-3 shrink-0">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full text-white font-display font-bold text-lg"
          style={{ backgroundColor: GREEN }}
        >
          U
        </div>
        <span className="font-display text-lg font-bold leading-tight text-black">
          Uttara Adhunik
          <br />
          Medical College (UAMC)
        </span>
      </a>

      {/* Desktop links */}
      <nav className="hidden lg:flex items-center gap-1 font-display text-sm uppercase tracking-wide">
        {links.map((label, i) => (
          <a
            key={label}
            href="#"
            className={`flex items-center gap-1.5 px-4 py-2.5 ${
              i === 0
                ? "border-b-2 font-normal"
                : "text-black hover:text-[#018837]"
            }`}
            style={i === 0 ? { borderColor: GREEN, color: GREEN } : {}}
          >
            {label}
            {i > 0 && i < 4 && (
              <ChevronDown className="h-4 w-4" strokeWidth={2} />
            )}
          </a>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-4 text-black shrink-0">
        <Search className="h-5 w-5 cursor-pointer" strokeWidth={2} />
        <AlignJustify className="h-5 w-5 cursor-pointer" strokeWidth={2} />
      </div>

      <button
        className="lg:hidden text-black"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-30 flex flex-col gap-1 bg-white px-6 py-4 shadow-lg lg:hidden font-display text-sm uppercase">
          {links.map((label) => (
            <a key={label} href="#" className="py-2 border-b border-black/10">
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <header className="relative w-full">
      <TopBar />
      <MainNav />
    </header>
  );
}
