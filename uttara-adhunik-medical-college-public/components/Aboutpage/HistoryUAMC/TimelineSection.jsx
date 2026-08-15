// "use client";

// const timelineRows = [
//   [
//     {
//       year: "1984",
//       title: "The Vision Begins",
//     },
//     {
//       year: "1986",
//       title: "The First Private Medical College",
//     },
//     {
//       year: "2003",
//       title: "Foundation of Uttara Adhunik Hospital",
//     },
//     {
//       year: "2005",
//       title: "Expansion of Indoor Services",
//     },
//   ],
//   [
//     {
//       year: "2007",
//       title: "Birth of Uttara Adhunik Medical College (UAMC)",
//       greenDot: true,
//     },
//     {
//       year: "2008",
//       title: "UAMC’s Academic Journey Begins",
//       greenDot: true,
//     },
//     {
//       year: "Present",
//       title: "Advancing Healthcare & Education",
//       greenDot: true,
//     },
//     {
//       year: "Future",
//       title: "Advancing Healthcare & Education",
//       greenDot: true,
//     },
//   ],
// ];

// function TimelineItem({ year, title, greenDot = false }) {
//   return (
//     <div className="relative flex min-h-[146px] w-full flex-col items-start gap-[10px]">
//       {/* Year */}
//       <div className="relative flex h-[78px] w-full items-center">
//         <h3
//           className="relative z-10 font-bold leading-[78px] text-[#018837]"
//           style={{
//             fontFamily: "Bitter, serif",
//             fontSize: "clamp(42px, 4vw, 65px)",
//           }}
//         >
//           {year}
//         </h3>

//         {/* Timeline dot */}
//         <span
//           className={`absolute left-[40px] top-[-61px] z-20 box-border h-[20px] w-[20px] rounded-full border-2 border-[#1F4E3D] bg-white`}
//         >
//           <span
//             className={`absolute left-1/2 top-1/2 h-[8px] w-[8px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
//               greenDot ? "bg-[#49A760]" : "bg-[#018837]"
//             }`}
//           />
//         </span>

//         {/* Vertical divider */}
//         <span className="absolute left-[49px] top-[-42px] z-10 h-[30px] w-[2px] bg-[#1F4E3D]" />
//       </div>

//       {/* Description */}
//       <h4
//         className="flex min-h-[58px] w-full items-center font-semibold leading-[29px] text-[#444444]"
//         style={{
//           fontFamily: "Inter, sans-serif",
//           fontSize: "24px",
//         }}
//       >
//         {title}
//       </h4>
//     </div>
//   );
// }

// export default function TimelineSection() {
//   return (
//     <section className="w-full bg-white">
//       {/* Main timeline section */}
//       <div
//         className="
//           flex w-full flex-col items-center
//           gap-[100px]
//           px-[80px] py-[150px]
//         "
//       >
//         {/* Heading area */}
//         <div
//           className="
//             flex w-full max-w-[1440px]
//             flex-col items-center
//             gap-[27px]
//           "
//         >
//           <h2
//             className="
//               flex max-w-[831px]
//               items-center justify-center
//               text-center font-bold
//               leading-[60px]
//               text-[#444444]
//             "
//             style={{
//               fontFamily: "Bitter, serif",
//               fontSize: "60px",
//             }}
//           >
//             Timeline of UAMC’s Evolution Since - 1984
//           </h2>

//           <div className="flex w-full max-w-[960px] items-center justify-center">
//             <p
//               className="
//                 w-full text-center
//                 font-medium leading-[27px]
//                 text-[#666666]
//               "
//               style={{
//                 fontFamily: "Outfit, sans-serif",
//                 fontSize: "16px",
//               }}
//             >
//               Founded in 2007, UAMC, under BMSRI, is a leading medical
//               institution affiliated with Dhaka University. With a 500-bed
//               hospital, it excels in medical education, research, and patient
//               care, shaping the future of healthcare in Bangladesh.
//             </p>
//           </div>
//         </div>

//         {/* Timeline */}
//         <div className="flex w-full max-w-[1440px] flex-col gap-[150px]">
//           {timelineRows.map((row, rowIndex) => (
//             <div
//               key={rowIndex}
//               className="
//                 flex w-full
//                 flex-col
//                 px-[80px] py-[10px]
//               "
//             >
//               {/* Top horizontal line */}
//               <div
//                 className="
//                   grid w-full
//                   grid-cols-4
//                   gap-[50px]
//                   border-t-2 border-[#1F4E3D]
//                   px-0 pt-[52px]
//                 "
//               >
//                 {row.map((item) => (
//                   <TimelineItem
//                     key={`${item.year}-${item.title}`}
//                     year={item.year}
//                     title={item.title}
//                     greenDot={item.greenDot}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

const API_BASE_URL = process.env.NEXT_PUBLIC_ADMIN_API;

async function getTimelineData() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/about/history/year`, {
      method: "GET",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch timeline data: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      return [];
    }

    return data;
  } catch (error) {
    console.error("Timeline API error:", error);
    return [];
  }
}

function TimelineItem({ item, index }) {
  // Figma shows the first 4 dots as dark green
  // and the remaining/current/future dots as light green.
  const greenDot = index >= 4;

  return (
    <article className="relative flex min-h-[146px] w-full flex-col gap-[10px]">
      {/* Year */}
      <div className="relative flex h-[78px] w-full items-center">
        <h3
          className="
            relative z-10
            font-bold
            leading-[78px]
            text-[#018837]
            tracking-[-1.5px]
          "
          style={{
            fontFamily: "Bitter, serif",
            fontSize: "clamp(42px, 4.05vw, 65px)",
          }}
        >
          {item.year}
        </h3>

        {/* Timeline dot */}
        <span
          aria-hidden="true"
          className="
            absolute
            left-[40px]
            top-[-61px]
            z-20
            box-border
            h-[20px]
            w-[20px]
            rounded-full
            border-2
            border-[#1F4E3D]
            bg-white
          "
        >
          <span
            className={`
              absolute
              left-1/2
              top-1/2
              h-[8px]
              w-[8px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              ${greenDot ? "bg-[#49A760]" : "bg-[#018837]"}
            `}
          />
        </span>

        {/* Vertical divider */}
        <span
          aria-hidden="true"
          className="
            absolute
            left-[49px]
            top-[-42px]
            z-10
            h-[30px]
            w-[2px]
            bg-[#1F4E3D]
          "
        />
      </div>

      {/* Description */}
      <h4
        className="
          flex
          min-h-[58px]
          w-full
          items-center
          font-semibold
          leading-[29px]
          text-[#444444]
        "
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: "24px",
        }}
      >
        {item.title}
      </h4>
    </article>
  );
}

function TimelineRow({ items, startIndex }) {
  return (
    <div className="w-full px-0 md:px-10">
      <div
        className="
          grid
          w-full
          grid-cols-1
          gap-y-12
          border-t-2
          border-[#1F4E3D]
          px-0
          pt-[52px]

          sm:grid-cols-2
          sm:gap-x-8
          sm:gap-y-12

          lg:grid-cols-4
          lg:gap-x-[50px]
          lg:gap-y-0
        "
      >
        {items.map((item, index) => (
          <TimelineItem key={item._id} item={item} index={startIndex + index} />
        ))}
      </div>
    </div>
  );
}

export default async function TimelineSection() {
  const timelineData = await getTimelineData();

  /*
   * API:
   * 1984
   * 1986
   * 2003
   * 2005
   * 2007
   * 2008
   * Present
   * Future
   *
   * Convert dynamically into rows of 4.
   */
  const timelineRows = [];

  for (let i = 0; i < timelineData.length; i += 4) {
    timelineRows.push(timelineData.slice(i, i + 4));
  }

  return (
    <section className="w-full bg-white">
      <div
        className="
          mx-auto
          flex
          w-full
          max-w-[1600px]
          flex-col
          items-center
          gap-[70px]
          px-5
          py-20

          sm:px-8
          sm:py-24

          lg:gap-[100px]
          lg:px-20
          lg:py-[150px]
        "
      >
        {/* Heading area */}
        <div
          className="
            flex
            w-full
            max-w-[1440px]
            flex-col
            items-center
            gap-[27px]
          "
        >
          <h2
            className="
              flex
              w-full
              max-w-[831px]
              items-center
              justify-center
              text-center
              font-bold
              leading-[1]
              text-[#444444]
            "
            style={{
              fontFamily: "Bitter, serif",
              fontSize: "clamp(36px, 4vw, 60px)",
            }}
          >
            Timeline of UAMC’s Evolution Since - 1984
          </h2>

          <div className="flex w-full max-w-[960px] items-center justify-center">
            <p
              className="
                w-full
                text-center
                font-medium
                leading-[27px]
                text-[#666666]
              "
              style={{
                fontFamily: "Outfit, sans-serif",
                fontSize: "16px",
              }}
            >
              Founded in 2007, UAMC, under BMSRI, is a leading medical
              institution affiliated with Dhaka University. With a 500-bed
              hospital, it excels in medical education, research, and patient
              care, shaping the future of healthcare in Bangladesh.
            </p>
          </div>
        </div>

        {/* Timeline */}
        {timelineData.length > 0 ? (
          <div
            className="
              flex
              w-full
              max-w-[1440px]
              flex-col
              gap-[80px]

              lg:gap-[150px]
            "
          >
            {timelineRows.map((row, rowIndex) => (
              <TimelineRow
                key={`timeline-row-${rowIndex}`}
                items={row}
                startIndex={rowIndex * 4}
              />
            ))}
          </div>
        ) : (
          <div className="w-full py-10 text-center text-[#666666]">
            No timeline history available.
          </div>
        )}
      </div>
    </section>
  );
}
