// "use client";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function Banner() {
//   return (
//     <section
//       style={{
//         width: "100%",
//         height: "500px",

//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "flex-end",
//         alignItems: "flex-start",

//         padding: "80px",
//         gap: "10px",

//         boxSizing: "border-box",

//         backgroundImage: `url("/bg.png")`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* =========================================
//           FRAME 1261155625
//           PREVIOUS BANNER SIZE
//       ========================================== */}
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1440px",
//           height: "327.29px",

//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "flex-end",

//           padding: "20px 50px",
//           gap: "20px",

//           boxSizing: "border-box",

//           background: "rgba(1, 136, 55, 0.3)",

//           margin: "0 auto",
//         }}
//       >
//         {/* =========================================
//             FRAME 1261155626
//             LEFT CONTENT
//         ========================================== */}
//         <div
//           style={{
//             flex: "1 1 0%",
//             width: "100%",
//             maxWidth: "1090px",
//             height: "118.67px",

//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "flex-end",
//             alignItems: "flex-start",

//             padding: 0,
//             margin: "0 auto",

//             gap: "10px",

//             boxSizing: "border-box",
//           }}
//         >
//           {/* Breadcrumb */}
//           <div
//             style={{
//               width: "396px",
//               height: "24px",

//               display: "flex",
//               alignItems: "center",

//               padding: 0,
//               margin: 0,

//               fontFamily: "'Inter', sans-serif",
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "20px",
//               lineHeight: "24px",

//               color: "#000000",
//               whiteSpace: "nowrap",
//             }}
//           >
//             <span>HOME</span>

//             <span style={{ margin: "0 6px" }}>&gt;</span>

//             <span>ADMISSION UAMC</span>

//             <span style={{ margin: "0 6px" }}>&gt;&gt;</span>

//             <span style={{ color: GREEN }}>Admission Procedure & Fees</span>
//           </div>

//           {/* =========================================
//               FRAME 51
//           ========================================== */}
//           <div
//             style={{
//               width: "100%",
//               maxWidth: "1090px",
//               height: "84.67px",

//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",

//               padding: "10.8332px 0",
//               gap: "10.83px",

//               boxSizing: "border-box",
//             }}
//           >
//             {/* Heading → ABOUT UAMC */}
//             <h1
//               style={{
//                 width: "564px",
//                 height: "63px",

//                 display: "flex",
//                 alignItems: "center",

//                 padding: 0,
//                 margin: 0,

//                 fontFamily: "'Bitter', serif",
//                 fontStyle: "normal",
//                 fontWeight: 300,
//                 fontSize: "70px",
//                 lineHeight: "62px",

//                 color: "#262626",

//                 whiteSpace: "nowrap",
//               }}
//             >
//               ADMISSION{" "}
//               <span
//                 style={{
//                   marginLeft: "10px",
//                   fontWeight: 700,
//                   color: GREEN,
//                 }}
//               >
//                 UAMC
//               </span>
//             </h1>
//           </div>
//         </div>

//         {/* =========================================
//             RIGHT LOGO
//         ========================================== */}
//         <div
//           style={{
//             width: "250px",
//             height: "287.29px",

//             display: "flex",
//             alignItems: "flex-end",
//             justifyContent: "center",

//             padding: 0,
//             margin: "0 auto",

//             flexShrink: 0,
//           }}
//         >
//           <img
//             src="/logo2.png"
//             alt="Uttara Adhunik Medical College"
//             style={{
//               width: "250px",
//               height: "287.29px",

//               display: "block",

//               objectFit: "contain",
//               objectPosition: "center bottom",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// Version 2
"use client";

const GREEN = "#018837";

export default function Banner() {
  return (
    <section
      className="
        relative isolate
        w-full
        min-h-[360px]

        flex flex-col justify-end

        overflow-hidden
        box-border

        px-3 py-4

        sm:min-h-[400px]
        sm:px-4 sm:py-5

        md:min-h-[440px]
        md:px-6 md:py-7

        lg:h-[500px]
        lg:min-h-0
        lg:px-[60px] lg:py-[60px]

        xl:px-20 xl:py-20
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      <img
        src="/bg.png"
        alt="Admission UAMC banner"
        className="
          absolute
          inset-0
          -z-10

          w-full
          h-full

          object-cover
          object-center
        "
      />

      {/* =========================================
          GREEN CONTENT FRAME
      ========================================== */}
      <div
        className="
          relative
          w-full
          min-w-0
          box-border

          flex
          flex-col
          justify-end

          min-h-[270px]

          px-4
          py-5

          sm:min-h-[285px]
          sm:px-5
          sm:py-5

          md:min-h-[305px]
          md:px-7
          md:py-6

          lg:h-[327.29px]
          lg:min-h-0
          lg:px-10
          lg:py-5

          xl:px-[50px]
          xl:py-5
        "
        style={{
          backgroundColor: "rgba(1, 136, 55, 0.3)",
        }}
      >
        {/* =========================================
            MAIN CONTENT
        ========================================== */}
        <div
          className="
            w-full
            min-w-0

            flex
            flex-col

            justify-end

            gap-5

            sm:gap-6

            md:gap-7

            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-6
          "
        >
          {/* =========================================
              LEFT CONTENT
          ========================================== */}
          <div
            className="
              w-full
              min-w-0
              flex-1

              flex
              flex-col
              justify-end
              items-start

              gap-2

              sm:gap-3

              lg:gap-[10px]
            "
          >
            {/* =========================================
                BREADCRUMB
            ========================================== */}
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

                text-[9px]
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

              <span>&gt;</span>

              <span>ADMISSION UAMC</span>

              <span>&gt;&gt;</span>

              <span className="text-[#018837]" style={{ color: GREEN }}>
                Admission Procedure & Fees
              </span>
            </div>

            {/* =========================================
                HEADING
            ========================================== */}
            <div
              className="
                w-full
                min-w-0

                flex
                items-center

                py-1

                sm:py-2
              "
            >
              <h1
                className="
                  m-0
                  p-0

                  flex
                  flex-wrap
                  items-center

                  max-w-full

                  font-['Bitter',serif]
                  font-light

                  text-[30px]
                  leading-[34px]

                  sm:text-[38px]
                  sm:leading-[42px]

                  md:text-[50px]
                  md:leading-[52px]

                  lg:text-[62px]
                  lg:leading-[60px]

                  xl:text-[70px]
                  xl:leading-[62px]

                  text-[#262626]
                "
              >
                <span>ADMISSION</span>

                <span
                  className="
                    ml-1.5

                    sm:ml-2
                    md:ml-2.5

                    font-bold
                    text-[#018837]
                  "
                  style={{ color: GREEN }}
                >
                  UAMC
                </span>
              </h1>
            </div>
          </div>

          {/* =========================================
              RIGHT LOGO
          ========================================== */}
          <div
            className="
              relative

              flex
              items-end
              justify-center

              flex-shrink-0

              self-center
              mx-auto

              w-[60px]
              h-[69px]

              sm:w-[80px]
              sm:h-[92px]

              md:w-[105px]
              md:h-[121px]

              lg:w-[190px]
              lg:h-[219px]

              xl:w-[250px]
              xl:h-[287.29px]

              lg:self-auto
              lg:mx-0
            "
          >
            <img
              src="/logo2.png"
              alt="Uttara Adhunik Medical College"
              className="
                block

                w-full
                h-full

                object-contain
                object-bottom
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
