"use client";

import { usePathname } from "next/navigation";

const GREEN = "#018837";

const breadcrumbMenus = {
  "About UAMC": [
    {
      label: "Overview",
      href: "/about/overview",
    },
    {
      label: "History of UAMC",
      href: "/about/historyofuamc",
    },
    {
      label: "Vision & Mission",
      href: "/about/vision",
    },
    {
      label: "Aim & Objective",
      href: "/about/aim",
    },
    {
      label: "Organizational Structure",
      href: "/about/structure",
    },
    {
      label: "Founder Members",
      href: "/about/founder",
    },
    {
      label: "EC Members",
      href: "/about/ec",
    },
    {
      label: "GB Members",
      href: "/about/gb",
    },
  ],

  Facilities: [
    {
      label: "Hospital Service",
      href: "/facility/hospitalservice",
    },
    {
      label: "Departments",
      href: "/facility/department",
    },
    {
      label: "Library",
      href: "/facility/libraryuamc",
    },
    {
      label: "Medical Education Unit",
      href: "/facility/medical",
    },
    {
      label: "Training",
      href: "/facility/training",
    },
    {
      label: "Publications",
      href: "/facility/publication",
    },
    {
      label: "Seminar",
      href: "/facility/seminar",
    },
    {
      label: "Hostel",
      href: "/facility/hostel",
    },
    {
      label: "Laboratory",
      href: "/facility/lab",
    },
    {
      label: "Cafeteria",
      href: "/facility/cafeteria",
    },
  ],

  Admission: [
    {
      label: "Admission Procedure & Fees",
      href: "/admission/procedure",
    },
    {
      label: "Admission Papers",
      href: "/admission/paper",
    },
    {
      label: "Application Form",
      href: "/admission/applicationform",
    },
    {
      label: "Admission Results",
      href: "/admission/result",
    },
    {
      label: "Online Registration",
      href: "/admission/registration",
    },
  ],

  Career: [
    {
      label: "Career",
      href: "/career",
    },
  ],
};

function getBreadcrumb(pathname) {
  for (const [section, items] of Object.entries(breadcrumbMenus)) {
    const matchedItem = items.find(
      (item) => pathname === item.href || pathname.startsWith(`${item.href}/`),
    );

    if (matchedItem) {
      return {
        section,
        item: matchedItem.label,
      };
    }
  }

  if (pathname.startsWith("/notice")) {
    return {
      section: null,
      item: "Notice & Media",
    };
  }

  if (pathname === "/career" || pathname.startsWith("/career/")) {
    return {
      section: null,
      item: "Career",
    };
  }

  return {
    section: null,
    item: "Home",
  };
}

export default function BannerBreadcrumb() {
  const pathname = usePathname();

  const { section, item } = getBreadcrumb(pathname);

  return (
    <div
      className="
        w-full
        min-w-0

        flex
        flex-wrap
        items-center

        gap-x-1
        gap-y-1

        font-['Inter',sans-serif]
        font-medium

        text-[10px]
        leading-4

        sm:text-xs
        sm:leading-5

        md:text-sm
        md:leading-5

        lg:text-lg
        lg:leading-6

        xl:text-xl

        text-black
      "
    >
      <span>HOME</span>

      {section && (
        <>
          <span>&gt;</span>

          <span>{section.toUpperCase()}</span>
        </>
      )}

      <span>&gt;&gt;</span>

      <span className="text-[#018837]" style={{ color: GREEN }}>
        {item}
      </span>
    </div>
  );
}
