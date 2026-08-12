import {
  MapPin,
  Mail,
  Phone,
  Search,
  ChevronDown,
  AlignJustify,
  Clock,
  ArrowRight,
  Star,
  Menu,
  // Facebook,
  // Youtube,
  // Linkedin,
  // Instagram,
  X,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden md:flex items-center justify-center gap-14 border-b border-dashed border-black/20 bg-[#FCFBFB] px-20 py-2.5 font-body text-xs font-medium text-black/50">
      <span className="flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
        House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model Town
      </span>
      <span className="flex items-center gap-1.5">
        <Mail className="h-3.5 w-3.5" strokeWidth={1.7} />
        info@uamc.com
      </span>
      <span className="flex items-center gap-1.5">
        <Phone className="h-3.5 w-3.5" strokeWidth={1.7} />
        +880 1700-220000
      </span>
      <span className="ml-auto ..." />
      <nav className="ml-auto flex items-center gap-0 text-[#444444]">
        {["Student Portal", "Teachers Portal", "Alumni", "Events"].map(
          (label, i) => (
            <span key={label} className="flex items-center">
              <a href="#" className="px-4 py-1 hover:text-[#018837]">
                {label}
              </a>
              {i < 3 && <span className="h-4 w-px bg-[#444444]" />}
            </span>
          ),
        )}
      </nav>
    </div>
  );
}
