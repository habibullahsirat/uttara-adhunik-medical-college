// import { MapPin, Mail, Phone } from "lucide-react";
// import Link from "next/link";

// export default function TopHeader() {
//   return (
//     <div
//       className="w-full border-b border-dashed"
//       style={{
//         backgroundColor: "#FCFBFB",
//         borderColor: "rgba(0,0,0,0.2)",
//       }}
//     >
//       <div className="mx-auto flex min-h-[42px] w-full max-w-[1440px] items-center justify-between px-5 lg:px-10 xl:px-[60px]">
//         {/* LEFT INFORMATION */}
//         <div className="flex items-center gap-5">
//           {/* Location */}
//           <div className="flex items-center gap-[10px]">
//             <MapPin
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model
//               Town
//             </span>
//           </div>

//           {/* Email */}
//           <div className="hidden items-center gap-[10px] md:flex">
//             <Mail
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               info@uamc.com
//             </span>
//           </div>

//           {/* Phone */}
//           <div className="hidden items-center gap-[10px] lg:flex">
//             <Phone
//               className="h-5 w-5 shrink-0"
//               strokeWidth={1.67}
//               style={{ color: "rgba(0,0,0,0.5)" }}
//             />

//             <span className="font-body text-[12px] font-medium leading-[15px] text-black/50">
//               +880 1700-220000
//             </span>
//           </div>
//         </div>

//         {/* RIGHT PORTAL LINKS */}
//         <div className="hidden items-center gap-1 lg:flex">
//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Student Portal
//           </Link>

//           <Link
//             href="#"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Faculty Portal
//           </Link>

//           <Link
//             href="/notice"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Notice
//           </Link>

//           <Link
//             href="/career"
//             className="flex items-center justify-center rounded-[5px] px-[15px] py-[10px] font-body text-[15px] font-medium leading-[18px] text-[#444444] transition-colors hover:text-[#018837]"
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// Version 2
import { MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

const contactItems = [
  {
    icon: MapPin,
    text: "House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara Model Town",
    className: "min-w-0 flex-1 lg:max-w-[285px]",
  },
  {
    icon: Mail,
    text: "info@uamc.com",
    className: "shrink-0",
  },
  {
    icon: Phone,
    text: "+880 1700-220000",
    className: "shrink-0",
  },
];

const portalLinks = [
  {
    label: "Student Portal",
    href: "#",
  },
  {
    label: "Faculty Portal",
    href: "#",
  },
  {
    label: "Notice",
    href: "/notice",
  },
  {
    label: "Contact",
    href: "/career",
  },
];

export default function TopHeader() {
  return (
    <header
      className="w-full border-b border-dashed"
      style={{
        backgroundColor: "#FCFBFB",
        borderColor: "rgba(0,0,0,0.2)",
      }}
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-20">
        <div
          className="
            flex
            min-h-[58px]
            w-full
            flex-col
            justify-center
            gap-2.5
            py-2.5
            lg:flex-row
            lg:items-center
            lg:justify-between
            lg:gap-6
          "
        >
          {/* ================= CONTACT INFORMATION ================= */}
          <div
            className="
              flex
              min-w-0
              flex-1
              flex-wrap
              items-center
              justify-center
              gap-x-4
              gap-y-2
              lg:justify-start
              xl:gap-x-5
            "
          >
            {/* Location */}
            <div
              className="
                flex
                min-w-0
                items-center
                gap-2.5
                lg:max-w-[285px]
                xl:max-w-[285px]
              "
            >
              <MapPin
                className="h-5 w-5 shrink-0"
                strokeWidth={1.67}
                style={{ color: "rgba(0,0,0,0.5)" }}
              />

              <span
                className="
                  font-body
                  text-[11px]
                  font-medium
                  leading-[15px]
                  text-black/50
                  sm:text-[12px]
                "
              >
                House - 34, Road - 4, Sector - 9, Sonargaon Janapath, Uttara
                Model Town
              </span>
            </div>

            {/* Email */}
            <div className="flex shrink-0 items-center gap-2.5">
              <Mail
                className="h-5 w-5 shrink-0"
                strokeWidth={1.67}
                style={{ color: "rgba(0,0,0,0.5)" }}
              />

              <span className="font-body text-[11px] font-medium leading-[15px] text-black/50 sm:text-[12px]">
                info@uamc.com
              </span>
            </div>

            {/* Phone */}
            <div className="flex shrink-0 items-center gap-2.5">
              <Phone
                className="h-5 w-5 shrink-0"
                strokeWidth={1.67}
                style={{ color: "rgba(0,0,0,0.5)" }}
              />

              <span className="font-body text-[11px] font-medium leading-[15px] text-black/50 sm:text-[12px]">
                +880 1700-220000
              </span>
            </div>
          </div>

          {/* ================= PORTAL LINKS ================= */}
          <nav
            className="
              flex
              w-full
              shrink-0
              items-center
              justify-start
              gap-1
              overflow-x-auto
              pb-0.5
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
              lg:w-auto
              lg:justify-end
            "
          >
            {portalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="
                  flex
                  h-[38px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[5px]
                  px-3
                  font-body
                  text-[13px]
                  font-medium
                  leading-[18px]
                  text-[#444444]
                  transition-colors
                  hover:text-[#018837]
                  sm:px-[15px]
                  sm:text-[15px]
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
