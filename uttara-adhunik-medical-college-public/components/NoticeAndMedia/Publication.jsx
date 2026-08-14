// import React, { useState } from "react";

// function noticeRow() {
//   return {
//     day: "12",
//     month: "Mar 25",
//     title:
//       '"BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training"',
//     time: "3.40 PM",
//   };
// }

// function TabbedList({ heading, tabs, rowsPerTab, maxHeight = "820px" }) {
//   const [active, setActive] = useState(0);
//   const rows = rowsPerTab[active] || [];

//   return (
//     <section className="w-full bg-white py-20 px-8">
//       <div className="max-w-[1450px] mx-auto flex flex-col items-center gap-12">
//         <h2 className="font-serif font-bold text-[40px] text-[#018837]">
//           {heading}
//         </h2>

//         <div className="w-full">
//           {/* Tabs */}
//           <div className="flex bg-[#E8E8F4] p-2 gap-2 flex-wrap">
//             {tabs.map((t, i) => (
//               <button
//                 key={t}
//                 onClick={() => setActive(i)}
//                 className={
//                   "flex-1 min-w-[150px] text-center py-4 font-serif text-[15px] tracking-wide uppercase transition-colors " +
//                   (i === active
//                     ? "bg-white text-[#018837] border-b-2 border-[#018837] shadow"
//                     : "text-black hover:text-[#018837]")
//                 }
//               >
//                 {t}
//               </button>
//             ))}
//           </div>

//           {/* Rows */}
//           <div className="bg-white p-3 overflow-y-auto" style={{ maxHeight }}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
//               {rows.map((row, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-4 bg-[#E8E8F4] p-5"
//                 >
//                   <div className="flex flex-col shrink-0 w-[90px] text-center">
//                     <div className="bg-[#E8E8F4] text-[#444444] font-bold text-[22px] py-2">
//                       {row.day}
//                     </div>
//                     <div className="bg-[#018837] text-white font-semibold text-[15px] py-2">
//                       {row.month}
//                     </div>
//                   </div>
//                   <div className="flex flex-col justify-between gap-3 min-w-0">
//                     <p className="text-[16px] text-[#444444] leading-snug">
//                       {row.title}
//                     </p>
//                     <span className="flex items-center gap-2 text-[13px] text-[#444444] font-semibold">
//                       🕒 {row.time}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function Publication() {
//   const journal = Array.from({ length: 7 }, noticeRow);
//   const tenders = Array.from({ length: 4 }, noticeRow);
//   return (
//     <TabbedList
//       heading="Publication"
//       tabs={["Journal", "Tenders"]}
//       rowsPerTab={[journal, tenders]}
//       maxHeight="960px"
//     />
//   );
// }

// Dynamic version
"use client";
import React, { useEffect, useMemo, useState } from "react";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/homepage/publication`;

function formatPublicationDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return {
      day: "--",
      month: "---",
      time: "--:--",
    };
  }

  return {
    day: date.toLocaleDateString("en-US", {
      day: "2-digit",
    }),

    month: date.toLocaleDateString("en-US", {
      month: "short",
      year: "2-digit",
    }),

    time: date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }),
  };
}

function PublicationCard({ publication }) {
  const { day, month, time } = formatPublicationDate(publication.createdAt);

  return (
    <article
      className="
        group
        flex
        w-full
        items-center
        gap-3
        rounded-md
        bg-[#E8E8F4]
        p-3
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:shadow-md
        sm:gap-4
        sm:p-4
        md:p-5
      "
    >
      {/* Date */}
      <div
        className="
          flex
          w-[65px]
          min-w-[65px]
          shrink-0
          flex-col
          overflow-hidden
          rounded
          text-center
          sm:w-[75px]
          sm:min-w-[75px]
          md:w-[90px]
          md:min-w-[90px]
        "
      >
        {/* Day */}
        <div
          className="
            bg-[#F3F3F8]
            px-1
            py-2
            text-lg
            font-bold
            leading-none
            text-[#444444]
            sm:text-xl
            md:py-2.5
            md:text-[22px]
          "
        >
          {day}
        </div>

        {/* Month + Year */}
        <div
          className="
            bg-[#018837]
            px-1
            py-1.5
            text-xs
            font-semibold
            leading-tight
            text-white
            sm:text-sm
            md:py-2
            md:text-[15px]
          "
        >
          {month}
        </div>
      </div>

      {/* Publication information */}
      <div className="min-w-0 flex-1">
        <p
          title={publication.title}
          className="
            line-clamp-3
            text-sm
            leading-relaxed
            text-[#444444]
            sm:text-[15px]
            md:text-base
          "
        >
          {publication.title}
        </p>

        {/* Time */}
        <span
          className="
            mt-2
            flex
            items-center
            gap-1.5
            text-xs
            font-semibold
            text-[#555555]
            sm:text-[13px]
          "
        >
          <span aria-hidden="true">🕒</span>
          <span>{time}</span>
        </span>
      </div>
    </article>
  );
}

function EmptyState({ type }) {
  return (
    <div
      className="
        flex
        min-h-[180px]
        items-center
        justify-center
        rounded-md
        bg-[#F7F7FA]
        px-4
        text-center
      "
    >
      <div>
        <p className="text-base font-semibold text-[#555555]">
          No publications available
        </p>

        <p className="mt-1 text-sm text-gray-400">
          There are currently no {type.toLowerCase()} publications.
        </p>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto flex max-w-[1450px] flex-col items-center">
        <h2
          className="
            text-center
            font-serif
            text-3xl
            font-bold
            text-[#018837]
            sm:text-4xl
            md:text-[40px]
          "
        >
          Publication
        </h2>

        {/* Skeleton */}
        <div className="mt-10 grid w-full grid-cols-1 gap-3 md:grid-cols-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="
                flex
                animate-pulse
                gap-4
                rounded-md
                bg-[#E8E8F4]
                p-4
                sm:p-5
              "
            >
              <div className="h-[70px] w-[65px] shrink-0 rounded bg-gray-300 sm:w-[75px]" />

              <div className="flex flex-1 flex-col gap-3">
                <div className="h-4 w-11/12 rounded bg-gray-300" />
                <div className="h-4 w-8/12 rounded bg-gray-300" />
                <div className="h-3 w-20 rounded bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ErrorState({ error, onRetry }) {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 md:py-20">
      <div className="mx-auto max-w-[1450px]">
        <div
          className="
            rounded-lg
            border
            border-red-200
            bg-red-50
            p-6
            text-center
          "
        >
          <h2
            className="
              font-serif
              text-3xl
              font-bold
              text-[#018837]
              sm:text-4xl
            "
          >
            Publication
          </h2>

          <p className="mt-4 text-sm text-red-600 sm:text-base">{error}</p>

          <button
            type="button"
            onClick={onRetry}
            className="
              mt-5
              rounded
              bg-[#018837]
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-colors
              hover:bg-[#016f2d]
              focus:outline-none
              focus:ring-2
              focus:ring-[#018837]
              focus:ring-offset-2
            "
          >
            Try Again
          </button>
        </div>
      </div>
    </section>
  );
}

function TabbedList({
  heading,
  tabs,
  publicationsByType,
  maxHeight = "960px",
}) {
  const [active, setActive] = useState(0);

  const activeTab = tabs[active];

  const publications = publicationsByType[activeTab] || [];

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1450px]
          flex-col
          items-center
          gap-7
          sm:gap-9
          md:gap-12
        "
      >
        {/* Heading */}
        <h2
          className="
            text-center
            font-serif
            text-3xl
            font-bold
            text-[#018837]
            sm:text-4xl
            md:text-[40px]
          "
        >
          {heading}
        </h2>

        <div className="w-full">
          {/* Tabs */}
          <div
            className="
              flex
              w-full
              gap-1
              overflow-x-auto
              rounded-md
              bg-[#E8E8F4]
              p-1.5
              scrollbar-thin
              sm:gap-2
              sm:p-2
              md:overflow-visible
            "
            role="tablist"
            aria-label={`${heading} categories`}
          >
            {tabs.map((tab, index) => {
              const isActive = index === active;
              const count = publicationsByType[tab]?.length || 0;

              return (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(index)}
                  className={`
                    flex
                    min-w-[140px]
                    shrink-0
                    items-center
                    justify-center
                    gap-2
                    whitespace-nowrap
                    px-4
                    py-3
                    text-xs
                    font-serif
                    tracking-wide
                    transition-all
                    duration-200

                    sm:min-w-[160px]
                    sm:py-4
                    sm:text-[13px]

                    md:flex-1
                    md:text-[15px]

                    ${
                      isActive
                        ? `
                          rounded
                          bg-white
                          text-[#018837]
                          shadow-sm
                          md:border-b-2
                          md:border-[#018837]
                        `
                        : `
                          text-black
                          hover:bg-white/60
                          hover:text-[#018837]
                        `
                    }
                  `}
                >
                  <span>{tab}</span>

                  {/* Dynamic count */}
                  <span
                    className={`
                      rounded-full
                      px-1.5
                      py-0.5
                      text-[10px]
                      font-sans
                      font-bold
                      ${
                        isActive
                          ? "bg-[#018837] text-white"
                          : "bg-white/70 text-gray-600"
                      }
                    `}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Publication list */}
          <div
            className="
              mt-3
              overflow-y-auto
              rounded-md
              bg-white
              p-1
              sm:p-2
              md:p-3
            "
            style={{
              maxHeight,
            }}
          >
            {publications.length === 0 ? (
              <EmptyState type={activeTab} />
            ) : (
              <div
                className="
                  grid
                  grid-cols-1
                  gap-2.5
                  md:grid-cols-2
                "
              >
                {publications.map((publication) => (
                  <PublicationCard
                    key={publication._id}
                    publication={publication}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Publication() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPublications = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(
          `Failed to fetch publications. Status: ${response.status}`,
        );
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid publication API response.");
      }

      setPublications(data);
    } catch (err) {
      console.error("Publication API Error:", err);

      setError(
        err.message || "Something went wrong while loading publications.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublications();
  }, []);

  /*
   * Convert:
   *
   * [
   *   {
   *     publicationType: "Journal",
   *     ...
   *   },
   *   {
   *     publicationType: "Tenders",
   *     ...
   *   }
   * ]
   *
   * into:
   *
   * {
   *   Journal: [...],
   *   Tenders: [...]
   * }
   */
  const publicationsByType = useMemo(() => {
    const grouped = {};

    publications.forEach((publication) => {
      const type = publication?.publicationType;

      if (!type) return;

      if (!grouped[type]) {
        grouped[type] = [];
      }

      grouped[type].push(publication);
    });

    /*
     * Newest publications first
     */
    Object.keys(grouped).forEach((type) => {
      grouped[type].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    });

    return grouped;
  }, [publications]);

  /*
   * Generate tabs dynamically from API.
   *
   * Example:
   * ["Journal", "Tenders"]
   *
   * If backend later returns:
   *
   * "Books"
   * "Research"
   *
   * those tabs will automatically appear.
   */
  const tabs = useMemo(() => {
    return Object.keys(publicationsByType);
  }, [publicationsByType]);

  if (loading) {
    return <LoadingState />;
  }

  if (error) {
    return <ErrorState error={error} onRetry={fetchPublications} />;
  }

  if (tabs.length === 0) {
    return (
      <section className="w-full bg-white px-4 py-12 sm:px-6 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1450px] text-center">
          <h2 className="font-serif text-3xl font-bold text-[#018837] sm:text-4xl md:text-[40px]">
            Publication
          </h2>

          <div className="mt-8 rounded-md bg-[#F7F7FA] p-10">
            <p className="text-[#555555]">No publications available.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <TabbedList
      heading="Publication"
      tabs={tabs}
      publicationsByType={publicationsByType}
      maxHeight="960px"
    />
  );
}
