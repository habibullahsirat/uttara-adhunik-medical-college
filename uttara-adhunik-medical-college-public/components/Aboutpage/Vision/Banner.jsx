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
//           1440px × 327.29px
//       ========================================== */}
//       <div
//         style={{
//           width: "100%",
//           height: "327.29px",

//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "space-between",
//           alignItems: "flex-end",

//           padding: "20px 50px",
//           gap: "20px",

//           boxSizing: "border-box",

//           background: "rgba(1, 136, 55, 0.3)",
//         }}
//       >
//         {/* =========================================
//             FRAME 1261155626
//             LEFT CONTENT
//         ========================================== */}
//         <div
//           style={{
//             flex: "1 1 0%",
//             width: "1090px",
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

//             <span>ABOUT UAMC</span>

//             <span style={{ margin: "0 6px" }}>&gt;&gt;</span>

//             <span style={{ color: GREEN }}>Vision & Mission</span>
//           </div>

//           {/* =========================================
//               FRAME 51
//           ========================================== */}
//           <div
//             style={{
//               width: "1090px",
//               height: "84.67px",

//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",

//               padding: "10.8332px 0",
//               gap: "10.83px",

//               boxSizing: "border-box",
//             }}
//           >
//             {/* Heading 2 → Facilities UAMC */}
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
//               ABOUT{" "}
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
//             250px × 287.29px
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
// "use client";

// const GREEN = "#018837";

// export default function Banner() {
//   return (
//     <section
//       className="
//         w-full
//         min-h-[400px]
//         h-[420px]

//         sm:h-[440px]
//         md:h-[460px]
//         lg:h-[480px]
//         xl:h-[500px]

//         flex
//         flex-col
//         justify-end
//         items-start

//         px-4
//         sm:px-6
//         md:px-10
//         lg:px-12
//         xl:px-20

//         pb-5
//         sm:pb-6
//         md:pb-8
//         lg:pb-10
//         xl:pb-20

//         gap-2.5

//         box-border

//         bg-[url('/bg.png')]
//         bg-cover
//         bg-center
//         bg-no-repeat
//       "
//     >
//       {/* =========================================
//           FRAME 1261155625
//       ========================================== */}
//       <div
//         className="
//           w-full

//           h-[280px]
//           sm:h-[290px]
//           md:h-[300px]
//           lg:h-[315px]
//           xl:h-[327.29px]

//           flex
//           flex-row
//           justify-between
//           items-end

//           px-4
//           sm:px-5
//           md:px-7
//           lg:px-10
//           xl:px-[50px]

//           py-4
//           sm:py-5

//           gap-3
//           sm:gap-4
//           lg:gap-5

//           box-border

//           bg-[rgba(1,136,55,0.3)]
//         "
//       >
//         {/* =========================================
//             FRAME 1261155626
//             LEFT CONTENT
//         ========================================== */}
//         <div
//           className="
//             flex
//             flex-1
//             flex-col
//             justify-end
//             items-start

//             min-w-0
//             w-full

//             h-auto
//             lg:h-[118.67px]

//             gap-2.5

//             overflow-hidden
//           "
//         >
//           {/* =========================================
//               BREADCRUMB
//           ========================================== */}
//           <div
//             className="
//               w-full
//               h-auto
//               min-h-[24px]

//               flex
//               items-center

//               font-['Inter',sans-serif]
//               font-medium

//               text-[11px]
//               sm:text-xs
//               md:text-sm
//               lg:text-base
//               xl:text-[20px]

//               leading-6

//               text-black

//               whitespace-nowrap
//               overflow-hidden
//               text-ellipsis
//             "
//           >
//             <span>HOME</span>

//             <span className="mx-1 sm:mx-1.5">&gt;</span>

//             <span>ABOUT UAMC</span>

//             <span className="mx-1 sm:mx-1.5">&gt;&gt;</span>

//             <span className="text-[#018837]">Vision &amp; Mission</span>
//           </div>

//           {/* =========================================
//               FRAME 51
//           ========================================== */}
//           <div
//             className="
//               w-full

//               h-auto
//               min-h-[55px]
//               sm:min-h-[60px]
//               md:min-h-[65px]
//               lg:h-[84.67px]

//               flex
//               flex-row
//               items-center

//               py-2
//               lg:py-[10.8332px]

//               gap-2
//               lg:gap-[10.83px]

//               box-border
//             "
//           >
//             {/* =========================================
//                 HEADING
//             ========================================== */}
//             <h1
//               className="
//                 m-0
//                 p-0

//                 flex
//                 items-center

//                 font-['Bitter',serif]
//                 font-light

//                 text-[32px]
//                 leading-[36px]

//                 sm:text-[38px]
//                 sm:leading-[42px]

//                 md:text-[46px]
//                 md:leading-[50px]

//                 lg:text-[58px]
//                 lg:leading-[56px]

//                 xl:text-[70px]
//                 xl:leading-[62px]

//                 text-[#262626]

//                 whitespace-nowrap
//               "
//             >
//               ABOUT
//               <span
//                 className="
//                   ml-1.5
//                   sm:ml-2
//                   lg:ml-2.5

//                   font-bold
//                   text-[#018837]
//                 "
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
//           className="
//             flex
//             items-end
//             justify-center

//             flex-shrink-0

//             w-[75px]
//             h-[125px]

//             sm:w-[90px]
//             sm:h-[145px]

//             md:w-[115px]
//             md:h-[175px]

//             lg:w-[170px]
//             lg:h-[225px]

//             xl:w-[250px]
//             xl:h-[287.29px]
//           "
//         >
//           <img
//             src="/logo2.png"
//             alt="Uttara Adhunik Medical College"
//             className="
//               block

//               w-full
//               h-full

//               object-contain
//               object-center
//               object-bottom
//             "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// Version 3
"use client";

const GREEN = "#018837";

export default function Banner() {
  return (
    <section
      className="
        relative
        w-full

        min-h-[400px]

        flex
        flex-col
        justify-end

        box-border
        overflow-hidden

        px-3
        py-4

        sm:min-h-[420px]
        sm:px-4
        sm:py-5

        md:min-h-[450px]
        md:px-6
        md:py-7

        lg:h-[500px]
        lg:min-h-0
        lg:px-[60px]
        lg:py-[60px]

        xl:px-20
        xl:py-20

        bg-[url('/bg.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* =========================================
          GREEN CONTENT FRAME
      ========================================== */}
      <div
        className="
          relative
          w-full
          box-border

          flex
          flex-col
          justify-end

          min-h-[290px]

          px-4
          py-5

          sm:min-h-[300px]
          sm:px-5
          sm:py-5

          md:min-h-[315px]
          md:px-7
          md:py-6

          lg:h-[327.29px]
          lg:min-h-0
          lg:px-10
          lg:py-5

          xl:px-[50px]
          xl:py-5

          bg-[rgba(1,136,55,0.3)]
        "
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

            gap-6

            sm:gap-7

            md:gap-8

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

              <span>&gt;</span>

              <span>ABOUT UAMC</span>

              <span>&gt;&gt;</span>

              <span className="text-[#018837]" style={{ color: GREEN }}>
                Vision &amp; Mission
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

                  font-['Bitter',serif]
                  font-light

                  text-[34px]
                  leading-[38px]

                  sm:text-[42px]
                  sm:leading-[44px]

                  md:text-[52px]
                  md:leading-[52px]

                  lg:text-[62px]
                  lg:leading-[60px]

                  xl:text-[70px]
                  xl:leading-[62px]

                  text-[#262626]
                "
              >
                <span>ABOUT</span>

                <span
                  className="
                    ml-2

                    sm:ml-2.5

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
              flex
              items-end
              justify-center

              flex-shrink-0

              self-center
              mx-auto

              w-[75px]
              h-[86px]

              sm:w-[95px]
              sm:h-[109px]

              md:w-[120px]
              md:h-[138px]

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
