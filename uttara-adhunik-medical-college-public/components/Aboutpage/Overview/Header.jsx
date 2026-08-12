"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Search, Menu, ChevronDown } from "lucide-react";

import { GREEN, NAV_ITEMS } from "./constants";
const GREEN = "#018837";
const YELLOW = "#FECD2F";

function TopBar() {
  return (
    <div className="hidden md:flex items-center justify-between px-20 py-2.5 bg-[#FCFBFB] border-b border-dashed border-black/20 text-xs font-medium text-black/50">
      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <MapPin size={14} strokeWidth={1.7} />
          <span>
            House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
            Town
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} strokeWidth={1.7} />
          <span>info@uamc.com</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={14} strokeWidth={1.7} />
          <span>+880 1700-220000</span>
        </div>
      </div>

      <div className="flex items-center gap-3 text-[#444444] font-medium text-sm">
        <button className="hover:text-[#018837] transition-colors">
          Student Portal
        </button>

        <button className="hover:text-[#018837] transition-colors">
          Teachers Portal
        </button>

        <button className="hover:text-[#018837] transition-colors">
          Alumni
        </button>

        <span className="w-px h-4 bg-[#444444]" />

        <button className="hover:text-[#018837] transition-colors">
          Events
        </button>

        <span className="w-px h-4 bg-[#444444]" />

        <button className="hover:text-[#018837] transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white">
      <TopBar />

      <div className="flex items-center justify-between px-6 md:px-20 py-3">
        <div className="flex items-center gap-2">
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white font-bold text-lg shrink-0"
            style={{ background: GREEN }}
          >
            UA
          </div>

          <div className="leading-tight">
            <div
              className="font-bold text-black"
              style={{ fontFamily: "'Bitter', serif" }}
            >
              Uttara Adhunik
            </div>

            <div className="text-sm text-[#444444]">Medical College (UAMC)</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8 uppercase tracking-wide text-sm text-black">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className="flex items-center gap-1 hover:text-[#018837] transition-colors"
              style={{ fontFamily: "'Bitter', serif" }}
            >
              {item.label}

              {item.hasChevron && <ChevronDown size={16} strokeWidth={2} />}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <Search size={20} strokeWidth={2} className="cursor-pointer" />
          <Menu size={20} strokeWidth={2} className="cursor-pointer" />
        </div>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-4 flex flex-col gap-3 uppercase text-sm">
          {NAV_ITEMS.map((item) => (
            <button key={item.label} className="text-left">
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
