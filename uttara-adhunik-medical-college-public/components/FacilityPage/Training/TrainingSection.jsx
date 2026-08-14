// export default function TrainingSection() {
//   return (
//     <section className="w-full bg-[#E6F4EB]">
//       <div
//         className="
//           w-full
//           max-w-[1600px]
//           mx-auto
//           min-h-[805px]
//           flex
//           flex-col
//           items-center
//           gap-[50px]
//           px-[80px]
//           py-[80px]
//           box-border
//         "
//       >
//         {/* ================= TOP CONTENT ================= */}
//         <div
//           className="
//             w-full
//             max-w-[1440px]
//             h-[140px]
//             flex
//             flex-row
//             justify-center
//             items-start
//             gap-[50px]
//           "
//         >
//           {/* LEFT SIDE */}
//           <div
//             className="
//               w-[707px]
//               h-[120px]
//               flex
//               flex-row
//               items-center
//               flex-1
//             "
//           >
//             {/* Icon + Text */}
//             <div
//               className="
//                 w-[438px]
//                 h-[120px]
//                 flex
//                 flex-row
//                 items-center
//                 gap-[20px]
//               "
//             >
//               {/* Laboratory / Training Icon */}
//               <img
//                 src="/fil.png"
//                 alt=""
//                 className="
//                   w-[120px]
//                   h-[120px]
//                   object-contain
//                   shrink-0
//                 "
//               />

//               {/* Training Facilities Text */}
//               <div
//                 className="
//                   w-[298px]
//                   h-[120px]
//                   flex
//                   flex-col
//                   justify-center
//                   items-start
//                 "
//               >
//                 <h2
//                   className="
//                     m-0
//                     p-0
//                     text-[#018837]
//                     font-bold
//                     text-[50px]
//                     leading-[60px]
//                     tracking-[0.01em]
//                   "
//                   style={{
//                     fontFamily: "'Bitter', serif",
//                   }}
//                 >
//                   Training
//                 </h2>

//                 <h2
//                   className="
//                     m-0
//                     p-0
//                     text-[#444444]
//                     font-bold
//                     text-[50px]
//                     leading-[60px]
//                     tracking-[0.01em]
//                   "
//                   style={{
//                     fontFamily: "'Bitter', serif",
//                   }}
//                 >
//                   Services
//                 </h2>
//               </div>
//             </div>
//           </div>

//           {/* DESCRIPTION */}

//           <div
//             className="flex w-full flex-1"
//             style={{
//               width: "683px",
//               height: "140px",
//               padding: "10px",
//               justifyContent: "center",
//               alignItems: "center",
//               boxSizing: "border-box",
//             }}
//           >
//             <p
//               style={{
//                 width: "663px",
//                 height: "120px",
//                 margin: 0,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "flex-start",
//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 400,
//                 fontSize: "20px",
//                 lineHeight: "30px",
//                 letterSpacing: "0.01em",
//                 textAlign: "justify",
//                 color: "#444444",
//               }}
//             >
//               <span style={{ display: "block", whiteSpace: "nowrap" }}>
//                 <strong>Building Future Healthcare Professionals</strong>
//               </span>

//               <span style={{ display: "block" }}>
//                 <strong style={{ fontWeight: 700 }}>
//                   Uttara Adhunik Medical College & Hospital(UAMCH),
//                 </strong>{" "}
//                 is a proud institution under Bangladesh Medical Studies and
//                 Research Institute (BMSRI), offering high-standard training and
//                 learning opportunities for both undergraduate and postgraduate
//                 medical students.
//               </span>
//             </p>
//           </div>
//         </div>

//         {/* ================= LARGE IMAGE ================= */}
//         <div
//           className="
//             w-full
//             max-w-[1440px]
//             h-[455px]
//             flex
//             flex-col
//             justify-center
//             items-start
//             gap-[10px]
//           "
//         >
//           <div
//             className="
//               w-full
//               h-[457.35px]
//               flex
//               flex-row
//               items-start
//               gap-[10px]
//             "
//           >
//             <img
//               src="/assets/eb3eef03-816e-45c5-8b6f-695bc5f3b6eb.jpg"
//               alt="Training Services"
//               className="
//                 w-full
//                 h-[457.35px]
//                 object-cover
//                 flex-1
//               "
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

async function getTrainingData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/training/about`,
      {
        next: {
          revalidate: 60,
        },
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch training data");
    }

    const data = await res.json();

    return data?.[0] ?? null;
  } catch (error) {
    console.error("Training API Error:", error);
    return null;
  }
}

export default async function TrainingSection() {
  const training = await getTrainingData();

  if (!training) {
    return null;
  }

  return (
    <section className="w-full bg-[#E6F4EB]">
      <div
        className="
          mx-auto flex w-full max-w-[1600px]
          flex-col items-center
          gap-8 px-4 py-12
          sm:gap-10 sm:px-6 sm:py-14
          lg:gap-[50px] lg:px-10 lg:py-16
          xl:px-20 xl:py-20
        "
      >
        {/* ================= TOP CONTENT ================= */}
        <div
          className="
            flex w-full max-w-[1440px]
            flex-col items-center justify-center
            gap-8
            lg:flex-row lg:items-start lg:gap-10
            xl:gap-[50px]
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              flex w-full
              flex-1 flex-row
              items-center justify-center
              lg:justify-start
            "
          >
            <div
              className="
                flex w-full
                flex-row items-center
                justify-center gap-4
                sm:gap-5
                lg:justify-start
              "
            >
              {/* Icon */}
              <div
                className="
                  relative h-20 w-20
                  shrink-0
                  sm:h-24 sm:w-24
                  lg:h-[120px] lg:w-[120px]
                "
              >
                <Image
                  src="/fil.png"
                  alt="Training facilities"
                  fill
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 96px, 120px"
                  className="object-contain"
                />
              </div>

              {/* Dynamic Title */}
              <div
                className="
                  flex flex-col
                  justify-center
                  items-start
                "
              >
                <h2
                  className="
                    m-0 p-0
                    text-3xl font-bold
                    leading-tight tracking-[0.01em]
                    text-[#018837]
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[50px] lg:leading-[60px]
                  "
                  style={{
                    fontFamily: "'Bitter', serif",
                  }}
                >
                  {training.title.split(" ")[0]}
                </h2>

                <h2
                  className="
                    m-0 p-0
                    text-3xl font-bold
                    leading-tight tracking-[0.01em]
                    text-[#444444]
                    sm:text-4xl
                    md:text-5xl
                    lg:text-[50px] lg:leading-[60px]
                  "
                  style={{
                    fontFamily: "'Bitter', serif",
                  }}
                >
                  {training.title.split(" ").slice(1).join(" ")}
                </h2>
              </div>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div
            className="
              flex w-full flex-1
              items-center justify-center
              p-0
              lg:p-2.5
            "
          >
            <p
              className="
                m-0 w-full
                text-left
                text-base leading-7
                tracking-[0.01em]
                text-[#444444]
                sm:text-lg sm:leading-7
                lg:text-[20px] lg:leading-[30px]
                lg:text-justify
              "
              style={{
                fontFamily: "'Bitter', serif",
              }}
            >
              {training.description}
            </p>
          </div>
        </div>

        {/* ================= LARGE IMAGE ================= */}
        <div
          className="
            relative w-full max-w-[1440px]
            overflow-hidden
            rounded-none
            aspect-[16/9]
            sm:aspect-[16/8]
            lg:aspect-[1440/457]
          "
        >
          <Image
            src={training.image}
            alt={training.title}
            fill
            priority
            sizes="
              (max-width: 640px) 100vw,
              (max-width: 1024px) 100vw,
              1440px
            "
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
