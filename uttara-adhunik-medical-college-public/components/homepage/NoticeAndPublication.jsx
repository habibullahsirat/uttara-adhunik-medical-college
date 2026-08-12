"use client";

import { useEffect, useState } from "react";
import { Clock, ArrowRight } from "lucide-react";

const GREEN = "#018837";
const LIGHT_BG = "#E8E8F4";
const TEXT = "#444444";

/* =========================================================
   RESPONSIVE HOOK
========================================================= */

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMatch = () => {
      setMatches(media.matches);
    };

    updateMatch();

    media.addEventListener("change", updateMatch);

    return () => {
      media.removeEventListener("change", updateMatch);
    };
  }, [query]);

  return matches;
}

/* =========================================================
   SAMPLE DATA
========================================================= */

const noticeSample = Array.from({ length: 10 }, (_, i) => ({
  id: i,

  day: "12",

  month: "Mar 25",

  time: "3:40 PM",

  title:
    "BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training",
}));

/* =========================================================
   NOTICE CARD
========================================================= */

function NoticeCard({ item, mobile }) {
  return (
    <article
      style={{
        width: "100%",
        minHeight: mobile ? "108px" : "126px",

        display: "flex",
        alignItems: "center",

        gap: mobile ? "10px" : "16px",

        padding: mobile ? "12px" : "20px",

        backgroundColor: LIGHT_BG,

        boxSizing: "border-box",

        flexShrink: 0,
      }}
    >
      {/* ================================================
          DATE
      ================================================= */}

      <div
        style={{
          width: mobile ? "65px" : "90px",

          height: mobile ? "76px" : "86px",

          display: "flex",
          flexDirection: "column",

          alignItems: "center",

          flexShrink: 0,
        }}
      >
        {/* DAY */}

        <div
          style={{
            width: mobile ? "65px" : "90px",

            height: mobile ? "38px" : "43px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: LIGHT_BG,

            color: TEXT,

            fontFamily: "Inter, sans-serif",

            fontSize: mobile ? "20px" : "25px",

            lineHeight: mobile ? "38px" : "42px",

            fontWeight: 700,

            boxSizing: "border-box",
          }}
        >
          {item.day}
        </div>

        {/* MONTH */}

        <div
          style={{
            width: mobile ? "65px" : "90px",

            height: mobile ? "38px" : "43px",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            backgroundColor: GREEN,

            color: "#FFFFFF",

            fontFamily: "Inter, sans-serif",

            fontSize: mobile ? "14px" : "18px",

            lineHeight: mobile ? "38px" : "42px",

            fontWeight: 600,

            boxSizing: "border-box",
          }}
        >
          {item.month}
        </div>
      </div>

      {/* ================================================
          CONTENT
      ================================================= */}

      <div
        style={{
          minWidth: 0,

          flex: 1,

          height: mobile ? "76px" : "86px",

          display: "flex",
          flexDirection: "column",

          justifyContent: "space-between",

          alignItems: "flex-start",

          padding: mobile ? "3px 0" : "5px 0",

          boxSizing: "border-box",
        }}
      >
        {/* TITLE */}

        <p
          style={{
            width: "100%",

            margin: 0,

            color: TEXT,

            fontFamily: "Inter, sans-serif",

            fontSize: mobile ? "13px" : "18px",

            lineHeight: mobile ? "18px" : "22px",

            fontWeight: 500,

            display: "-webkit-box",

            WebkitBoxOrient: "vertical",

            WebkitLineClamp: 2,

            overflow: "hidden",
          }}
        >
          {item.title}
        </p>

        {/* TIME */}

        <div
          style={{
            display: "flex",

            alignItems: "center",

            gap: mobile ? "7px" : "14px",

            color: TEXT,

            fontFamily: "Inter, sans-serif",

            fontSize: mobile ? "12px" : "15px",

            lineHeight: mobile ? "16px" : "18px",

            fontWeight: 600,
          }}
        >
          <Clock size={mobile ? 13 : 15} strokeWidth={1.8} />

          <span>{item.time}</span>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   TABBED LIST
========================================================= */

function TabbedList({ title, tabs, items, mobile, tablet }) {
  const [active, setActive] = useState(0);

  return (
    <div
      style={{
        width: "100%",

        maxWidth: "720px",

        display: "flex",

        flexDirection: "column",

        gap: mobile ? "25px" : tablet ? "30px" : "45px",

        boxSizing: "border-box",
      }}
    >
      {/* ===================================================
          HEADER
      =================================================== */}

      <div
        style={{
          width: "100%",

          height: mobile ? "55px" : tablet ? "70px" : "80px",

          display: "flex",

          alignItems: mobile ? "center" : "flex-end",

          justifyContent: "space-between",

          gap: mobile ? "15px" : "30px",

          padding: mobile ? "0" : tablet ? "0 10px" : "0 20px",

          boxSizing: "border-box",
        }}
      >
        {/* TITLE */}

        <h2
          style={{
            margin: 0,

            color: GREEN,

            fontFamily: "Bitter, serif",

            fontSize: mobile ? "32px" : tablet ? "40px" : "50px",

            lineHeight: mobile ? "40px" : tablet ? "48px" : "60px",

            fontWeight: 700,

            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h2>

        {/* VIEW ALL */}

        <a
          href="#"
          style={{
            display: "inline-flex",

            alignItems: "center",

            justifyContent: "center",

            gap: "5px",

            marginBottom: mobile ? 0 : "7px",

            color: GREEN,

            fontFamily: "Inter, sans-serif",

            fontSize: mobile ? "14px" : "16px",

            lineHeight: mobile ? "22px" : "26px",

            fontWeight: 500,

            textDecoration: "none",

            whiteSpace: "nowrap",
          }}
        >
          <span>View All</span>

          <ArrowRight size={mobile ? 14 : 16} strokeWidth={1.8} />
        </a>
      </div>

      {/* ===================================================
          BOARD
      =================================================== */}

      <div
        style={{
          width: "100%",

          display: "flex",

          flexDirection: "column",

          boxSizing: "border-box",
        }}
      >
        {/* =================================================
            TABS
        ================================================= */}

        <div
          style={{
            width: "100%",

            minHeight: mobile ? "64px" : "84px",

            display: "flex",

            alignItems: "center",

            padding: mobile ? "6px" : "10px",

            backgroundColor: LIGHT_BG,

            boxSizing: "border-box",

            overflowX: "auto",

            scrollbarWidth: "none",
          }}
        >
          {tabs.map((tab, index) => {
            const isActive = active === index;

            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(index)}
                style={{
                  flex: mobile ? "0 0 auto" : "1 1 0",

                  minWidth: mobile ? "135px" : tablet ? "130px" : "150px",

                  height: mobile ? "50px" : "64px",

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  padding: mobile ? "8px 12px" : "10px 12px",

                  border: "none",

                  borderBottom: isActive
                    ? `2px solid ${GREEN}`
                    : "2px solid transparent",

                  backgroundColor: isActive ? "#FFFFFF" : "transparent",

                  color: isActive ? GREEN : "#000000",

                  fontFamily: "Bitter, serif",

                  fontSize: mobile ? "13px" : tablet ? "13px" : "15px",

                  lineHeight: mobile ? "20px" : "24px",

                  fontWeight: isActive ? 700 : 400,

                  cursor: "pointer",

                  whiteSpace: "nowrap",

                  boxSizing: "border-box",

                  boxShadow: isActive
                    ? "1px 1px 10px rgba(0,0,0,0.20)"
                    : "none",

                  transition: "all 0.2s ease",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* =================================================
            LIST
        ================================================= */}

        <div
          style={{
            width: "100%",

            height: mobile ? "500px" : tablet ? "550px" : "610px",

            display: "flex",

            flexDirection: "column",

            gap: mobile ? "8px" : "10px",

            padding: mobile ? "8px" : "10px",

            backgroundColor: "#FFFFFF",

            boxSizing: "border-box",

            overflowY: "auto",

            overflowX: "hidden",

            scrollbarWidth: "thin",

            scrollbarColor: `${GREEN} ${LIGHT_BG}`,
          }}
        >
          {items.map((item) => (
            <NoticeCard key={item.id} item={item} mobile={mobile} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function NoticeAndPublication() {
  const mobile = useMediaQuery("(max-width: 600px)");

  const tablet = useMediaQuery("(min-width: 601px) and (max-width: 900px)");

  return (
    <section
      style={{
        width: "100%",

        backgroundColor: "#FFFFFF",

        padding: mobile ? "45px 16px" : tablet ? "60px 24px" : "80px",

        boxSizing: "border-box",
      }}
    >
      {/* ===================================================
          MAIN CONTAINER
      =================================================== */}

      <div
        style={{
          width: "100%",

          maxWidth: "1450px",

          margin: "0 auto",

          display: "grid",

          gridTemplateColumns:
            mobile || tablet ? "1fr" : "repeat(2, minmax(0, 1fr))",

          columnGap: mobile || tablet ? "0" : "10px",

          rowGap: mobile ? "55px" : tablet ? "70px" : "0",

          alignItems: "start",

          boxSizing: "border-box",
        }}
      >
        {/* =================================================
            NOTICE BOARD
        ================================================= */}

        <TabbedList
          title="Notice Board"
          tabs={[
            "General Notice",
            "Admission Notice",
            "Reports",
            "Job Circular",
          ]}
          items={noticeSample}
          mobile={mobile}
          tablet={tablet}
        />

        {/* =================================================
            PUBLICATION
        ================================================= */}

        <TabbedList
          title="Publication"
          tabs={["Journal", "Tenders"]}
          items={noticeSample}
          mobile={mobile}
          tablet={tablet}
        />
      </div>
    </section>
  );
}
