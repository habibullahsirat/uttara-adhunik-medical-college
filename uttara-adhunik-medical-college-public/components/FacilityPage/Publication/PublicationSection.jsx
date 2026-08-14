// "use client";

// import { useState } from "react";
// import { Clock3 } from "lucide-react";

// const GREEN = "#018837";
// const LIGHT_PURPLE = "#E8E8F4";
// const TEXT = "#444444";

// const publications = Array.from({ length: 10 }, (_, index) => ({
//   day: "12",
//   month: "Mar 25",
//   title:
//     '"BCPS e-Logbook: Modernizing the Monitoring of FCPS 1st Phase Training"',
//   time: "3.40 PM",
// }));

// export default function PublicationSection() {
//   const [activeTab, setActiveTab] = useState("Journal");

//   return (
//     <section
//       className="
//         w-full
//         bg-white
//         flex
//         flex-col
//         items-center
//         justify-center
//         px-5
//         py-20
//         gap-[50px]
//       "
//     >
//       {/* Main content */}
//       <div
//         className="
//           w-full
//           max-w-[1440px]
//           flex
//           flex-col
//           items-start
//           gap-[45px]
//         "
//       >
//         {/* Section title */}
//         <div className="flex items-center justify-center h-[80px] px-0 py-[10px]">
//           <h2
//             className="
//               text-[50px]
//               leading-[60px]
//               font-bold
//               text-[#018837]
//             "
//             style={{
//               fontFamily: "'Bitter', serif",
//             }}
//           >
//             Publication
//           </h2>
//         </div>

//         {/* Publication content */}
//         <div className="w-full flex flex-col items-start">
//           {/* Tabs */}
//           <div
//             className="
//               w-full
//               h-[84px]
//               bg-[#E8E8F4]
//               p-[10px]
//               flex
//               items-center
//               justify-between
//               gap-[10px]
//             "
//           >
//             {/* Journal */}
//             <button
//               type="button"
//               onClick={() => setActiveTab("Journal")}
//               className={`
//                 h-[64px]
//                 flex-1
//                 flex
//                 items-center
//                 justify-center
//                 px-0
//                 py-[15px]
//                 bg-white
//                 transition-all
//                 duration-200
//                 ${
//                   activeTab === "Journal"
//                     ? "border-b-2 border-[#018837] shadow-[1px_1px_10px_rgba(0,0,0,0.25)]"
//                     : ""
//                 }
//               `}
//             >
//               <span
//                 className={`
//                   text-[15px]
//                   leading-[34px]
//                   ${
//                     activeTab === "Journal"
//                       ? "font-bold text-[#018837]"
//                       : "font-normal text-black"
//                   }
//                 `}
//                 style={{
//                   fontFamily: "'Bitter', serif",
//                 }}
//               >
//                 Journal
//               </span>
//             </button>

//             {/* Tenders */}
//             <button
//               type="button"
//               onClick={() => setActiveTab("Tenders")}
//               className={`
//                 h-[64px]
//                 flex-1
//                 flex
//                 items-center
//                 justify-center
//                 px-0
//                 py-[15px]
//                 transition-all
//                 duration-200
//                 ${
//                   activeTab === "Tenders"
//                     ? "bg-white border-b-2 border-[#018837] shadow-[1px_1px_10px_rgba(0,0,0,0.25)]"
//                     : "bg-transparent"
//                 }
//               `}
//             >
//               <span
//                 className={`
//                   text-[15px]
//                   leading-[34px]
//                   ${
//                     activeTab === "Tenders"
//                       ? "font-bold text-[#018837]"
//                       : "font-normal text-black"
//                   }
//                 `}
//                 style={{
//                   fontFamily: "'Bitter', serif",
//                 }}
//               >
//                 Tenders
//               </span>
//             </button>
//           </div>

//           {/* Scrollable publication list */}
//           <div
//             className="
//               w-full
//               h-[610px]
//               overflow-y-auto
//               bg-white
//               p-[10px]
//               flex
//               flex-col
//               items-start
//               gap-[10px]
//             "
//           >
//             {publications.map((publication, index) => (
//               <article
//                 key={index}
//                 className="
//                   w-full
//                   min-h-[126px]
//                   shrink-0
//                   bg-[#E8E8F4]
//                   p-[20px]
//                   flex
//                   flex-row
//                   items-center
//                   gap-[16px]
//                 "
//               >
//                 {/* Date */}
//                 <div className="w-[90px] h-[86px] shrink-0 flex flex-col items-center">
//                   {/* Day */}
//                   <div
//                     className="
//                       w-[90px]
//                       h-[43px]
//                       bg-[#E8E8F4]
//                       flex
//                       items-center
//                       justify-center
//                     "
//                   >
//                     <span
//                       className="
//                         w-[65px]
//                         h-[43px]
//                         flex
//                         items-center
//                         justify-center
//                         text-center
//                         text-[25px]
//                         leading-[42px]
//                         font-bold
//                         text-[#444444]
//                       "
//                       style={{
//                         fontFamily: "'Inter', sans-serif",
//                       }}
//                     >
//                       {publication.day}
//                     </span>
//                   </div>

//                   {/* Month */}
//                   <div
//                     className="
//                       w-[90px]
//                       h-[43px]
//                       bg-[#018837]
//                       flex
//                       items-center
//                       justify-center
//                     "
//                   >
//                     <span
//                       className="
//                         w-[64px]
//                         h-[43px]
//                         flex
//                         items-center
//                         justify-center
//                         text-center
//                         text-[18.75px]
//                         leading-[42px]
//                         font-semibold
//                         text-white
//                       "
//                       style={{
//                         fontFamily: "'Inter', sans-serif",
//                       }}
//                     >
//                       {publication.month}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Publication information */}
//                 <div
//                   className="
//                     flex-1
//                     self-stretch
//                     min-w-0
//                     h-[86px]
//                     py-[5px]
//                     flex
//                     flex-col
//                     items-start
//                     justify-between
//                   "
//                 >
//                   {/* Title */}
//                   <p
//                     className="
//                       w-full
//                       m-0
//                       text-[18px]
//                       leading-[22px]
//                       font-medium
//                       text-[#444444]
//                     "
//                     style={{
//                       fontFamily: "'Inter', sans-serif",
//                     }}
//                   >
//                     {publication.title}
//                   </p>

//                   {/* Time */}
//                   <div
//                     className="
//                       h-[18px]
//                       flex
//                       flex-row
//                       items-end
//                       gap-[14px]
//                     "
//                   >
//                     <Clock3 size={15} strokeWidth={1.25} color={TEXT} />

//                     <span
//                       className="
//                         text-[15px]
//                         leading-[18px]
//                         font-semibold
//                         text-[#444444]
//                       "
//                       style={{
//                         fontFamily: "'Inter', sans-serif",
//                       }}
//                     >
//                       {publication.time}
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic version
"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3 } from "lucide-react";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/homepage/publication`;

const GREEN = "#018837";
const LIGHT_PURPLE = "#E8E8F4";
const TEXT = "#444444";

/**
 * Clean titles coming from the API.
 *
 * Handles values such as:
 * \"BCPS e-Logbook: Modernizing...\"
 *
 * and:
 * "BCPS e-Logbook: Modernizing..."
 */
function cleanTitle(title) {
  if (!title) return "";

  return title.replace(/\\"/g, '"').replace(/^"+|"+$/g, "");
}

/**
 * Convert API UTC date into Bangladesh time.
 *
 * Example:
 * 2026-08-12T15:31:02.057Z
 *
 * => day: 12
 * => month: Aug 26
 * => time: 9.01 PM
 */
function formatPublicationDate(dateString) {
  const date = new Date(dateString);

  if (Number.isNaN(date.getTime())) {
    return {
      day: "--",
      month: "--- --",
      time: "--:-- --",
    };
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Dhaka",
    day: "2-digit",
    month: "short",
    year: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  const parts = formatter.formatToParts(date);

  const getPart = (type) =>
    parts.find((part) => part.type === type)?.value || "";

  const day = getPart("day");
  const month = getPart("month");
  const year = getPart("year");
  const hour = getPart("hour");
  const minute = getPart("minute");
  const dayPeriod = getPart("dayPeriod");

  return {
    day,
    month: `${month} ${year}`,
    time: `${hour}.${minute} ${dayPeriod}`,
  };
}

export default function PublicationSection() {
  const [activeTab, setActiveTab] = useState("Journal");

  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchPublications() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL, {
          method: "GET",
          signal: controller.signal,
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch publications (${response.status})`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid publication API response.");
        }

        setPublications(data);
      } catch (err) {
        if (err?.name === "AbortError") {
          return;
        }

        console.error("Publication fetch error:", err);

        setError(
          err instanceof Error ? err.message : "Unable to load publications.",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchPublications();

    return () => controller.abort();
  }, []);

  /**
   * Filter according to active tab.
   */
  const filteredPublications = useMemo(() => {
    return publications
      .filter((publication) => publication.publicationType === activeTab)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .map((publication) => ({
        ...publication,
        title: cleanTitle(publication.title),
        ...formatPublicationDate(publication.createdAt),
      }));
  }, [publications, activeTab]);

  return (
    <section
      className="
        w-full
        bg-white
        flex
        flex-col
        items-center
        justify-center
        px-4
        py-12
        sm:px-6
        sm:py-16
        lg:px-10
        lg:py-20
      "
    >
      <div
        className="
          w-full
          max-w-[1440px]
          flex
          flex-col
          items-start
          gap-8
          sm:gap-10
          lg:gap-[45px]
        "
      >
        {/* Section title */}
        <div
          className="
            flex
            items-center
            justify-center
            min-h-[60px]
            px-0
            py-2.5
          "
        >
          <h2
            className="
              m-0
              text-[36px]
              leading-[44px]
              sm:text-[42px]
              sm:leading-[52px]
              lg:text-[50px]
              lg:leading-[60px]
              font-bold
              text-[#018837]
            "
            style={{
              fontFamily: "'Bitter', serif",
            }}
          >
            Publication
          </h2>
        </div>

        {/* Publication content */}
        <div className="w-full flex flex-col items-start">
          {/* Tabs */}
          <div
            className="
              w-full
              min-h-[72px]
              sm:h-[84px]
              bg-[#E8E8F4]
              p-2.5
              flex
              items-center
              justify-between
              gap-2.5
            "
          >
            {/* Journal */}
            <button
              type="button"
              onClick={() => setActiveTab("Journal")}
              className={`
                h-[52px]
                sm:h-[64px]
                flex-1
                flex
                items-center
                justify-center
                px-2
                py-[15px]
                transition-all
                duration-200
                ${
                  activeTab === "Journal"
                    ? "bg-white border-b-2 border-[#018837] shadow-[1px_1px_10px_rgba(0,0,0,0.25)]"
                    : "bg-transparent"
                }
              `}
            >
              <span
                className={`
                  text-[14px]
                  sm:text-[15px]
                  leading-[34px]
                  ${
                    activeTab === "Journal"
                      ? "font-bold text-[#018837]"
                      : "font-normal text-black"
                  }
                `}
                style={{
                  fontFamily: "'Bitter', serif",
                }}
              >
                Journal
              </span>
            </button>

            {/* Tenders */}
            <button
              type="button"
              onClick={() => setActiveTab("Tenders")}
              className={`
                h-[52px]
                sm:h-[64px]
                flex-1
                flex
                items-center
                justify-center
                px-2
                py-[15px]
                transition-all
                duration-200
                ${
                  activeTab === "Tenders"
                    ? "bg-white border-b-2 border-[#018837] shadow-[1px_1px_10px_rgba(0,0,0,0.25)]"
                    : "bg-transparent"
                }
              `}
            >
              <span
                className={`
                  text-[14px]
                  sm:text-[15px]
                  leading-[34px]
                  ${
                    activeTab === "Tenders"
                      ? "font-bold text-[#018837]"
                      : "font-normal text-black"
                  }
                `}
                style={{
                  fontFamily: "'Bitter', serif",
                }}
              >
                Tenders
              </span>
            </button>
          </div>

          {/* Publication list */}
          <div
            className="
              w-full
              h-[55vh]
              min-h-[400px]
              max-h-[610px]
              overflow-y-auto
              bg-white
              p-2.5
              flex
              flex-col
              items-start
              gap-2.5
            "
          >
            {/* Loading */}
            {loading && (
              <div
                className="
                  w-full
                  min-h-[200px]
                  flex
                  items-center
                  justify-center
                  text-[#444444]
                  text-sm
                "
              >
                Loading publications...
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div
                className="
                  w-full
                  min-h-[200px]
                  flex
                  items-center
                  justify-center
                  text-red-600
                  text-sm
                  text-center
                  px-4
                "
              >
                {error}
              </div>
            )}

            {/* Empty */}
            {!loading && !error && filteredPublications.length === 0 && (
              <div
                className="
                    w-full
                    min-h-[200px]
                    flex
                    items-center
                    justify-center
                    text-[#444444]
                    text-sm
                    text-center
                  "
              >
                No {activeTab.toLowerCase()} publications available.
              </div>
            )}

            {/* Publications */}
            {!loading &&
              !error &&
              filteredPublications.map((publication) => (
                <article
                  key={publication._id}
                  className="
                    w-full
                    min-h-[126px]
                    shrink-0
                    bg-[#E8E8F4]
                    p-4
                    sm:p-5
                    flex
                    flex-row
                    items-center
                    gap-3
                    sm:gap-4
                  "
                >
                  {/* Date */}
                  <div
                    className="
                      w-[70px]
                      sm:w-[90px]
                      h-[76px]
                      sm:h-[86px]
                      shrink-0
                      flex
                      flex-col
                      items-center
                    "
                  >
                    {/* Day */}
                    <div
                      className="
                        w-full
                        h-[38px]
                        sm:h-[43px]
                        bg-[#E8E8F4]
                        flex
                        items-center
                        justify-center
                      "
                    >
                      <span
                        className="
                          w-full
                          h-full
                          flex
                          items-center
                          justify-center
                          text-center
                          text-[22px]
                          sm:text-[25px]
                          leading-[42px]
                          font-bold
                          text-[#444444]
                        "
                        style={{
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {publication.day}
                      </span>
                    </div>

                    {/* Month */}
                    <div
                      className="
                        w-full
                        h-[38px]
                        sm:h-[43px]
                        bg-[#018837]
                        flex
                        items-center
                        justify-center
                        overflow-hidden
                      "
                    >
                      <span
                        className="
                          w-full
                          h-full
                          flex
                          items-center
                          justify-center
                          text-center
                          text-[14px]
                          sm:text-[18.75px]
                          leading-[42px]
                          font-semibold
                          text-white
                          whitespace-nowrap
                        "
                        style={{
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {publication.month}
                      </span>
                    </div>
                  </div>

                  {/* Publication information */}
                  <div
                    className="
                      flex-1
                      self-stretch
                      min-w-0
                      min-h-[76px]
                      sm:h-[86px]
                      py-1
                      sm:py-[5px]
                      flex
                      flex-col
                      items-start
                      justify-between
                      gap-3
                    "
                  >
                    {/* Title */}
                    <p
                      className="
                        w-full
                        m-0
                        text-[15px]
                        sm:text-[18px]
                        leading-[20px]
                        sm:leading-[22px]
                        font-medium
                        text-[#444444]
                        break-words
                      "
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {publication.title}
                    </p>

                    {/* Time */}
                    <div
                      className="
                        min-h-[18px]
                        flex
                        flex-row
                        items-center
                        gap-2.5
                        sm:gap-[14px]
                        shrink-0
                      "
                    >
                      <Clock3
                        size={15}
                        strokeWidth={1.25}
                        color={TEXT}
                        className="shrink-0"
                      />

                      <span
                        className="
                          text-[13px]
                          sm:text-[15px]
                          leading-[18px]
                          font-semibold
                          text-[#444444]
                          whitespace-nowrap
                        "
                        style={{
                          fontFamily: "'Inter', sans-serif",
                        }}
                      >
                        {publication.time}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
