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

//             <span>ABOUT UAMC</span>

//             <span style={{ margin: "0 6px" }}>&gt;&gt;</span>

//             <span style={{ color: GREEN }}>Aim & Objective</span>
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
        w-full
        h-[420px]
        sm:h-[450px]
        md:h-[480px]
        lg:h-[500px]
        flex flex-col justify-end items-start
        px-4 py-6
        sm:px-6 sm:py-8
        md:px-10 md:py-12
        lg:px-16 lg:py-16
        xl:px-20 xl:py-20
        box-border
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: 'url("/bg.png")',
      }}
    >
      {/* =========================================
          FRAME 1261155625
      ========================================== */}
      <div
        className="
          w-full
          max-w-[1440px]
          min-h-[270px]
          sm:min-h-[285px]
          md:min-h-[300px]
          lg:h-[327.29px]
          mx-auto

          flex flex-col
          md:flex-row
          justify-end
          md:justify-between
          items-stretch
          md:items-end

          gap-6
          md:gap-5

          px-5 py-6
          sm:px-7 sm:py-6
          md:px-8
          lg:px-[50px]
          box-border

          bg-[rgba(1,136,55,0.3)]
        "
      >
        {/* =========================================
            FRAME 1261155626
            LEFT CONTENT
        ========================================== */}
        <div
          className="
            flex-1
            w-full
            max-w-[1090px]
            min-h-0
            md:h-[118.67px]

            flex flex-col
            justify-end
            items-start

            gap-2.5
            mx-auto
          "
        >
          {/* Breadcrumb */}
          <div
            className="
              w-full
              h-auto
              min-h-[24px]

              flex flex-wrap
              items-center

              font-['Inter',sans-serif]
              font-medium
              text-[12px]
              leading-[18px]
              sm:text-sm
              sm:leading-5
              md:text-base
              md:leading-6
              lg:text-xl
              lg:leading-6

              text-black
            "
          >
            <span>HOME</span>

            <span className="mx-1 sm:mx-1.5">&gt;</span>

            <span>ABOUT UAMC</span>

            <span className="mx-1 sm:mx-1.5">&gt;&gt;</span>

            <span style={{ color: GREEN }}>Aim &amp; Objective</span>
          </div>

          {/* =========================================
              FRAME 51
          ========================================== */}
          <div
            className="
              w-full
              h-auto
              min-h-[60px]
              md:h-[84.67px]

              flex flex-row
              items-center

              py-2
              md:py-[10.8332px]

              gap-2.5
              box-border
            "
          >
            {/* Heading */}
            <h1
              className="
                w-full

                flex
                items-center

                p-0 m-0

                font-['Bitter',serif]
                font-light

                text-[40px]
                leading-[42px]

                sm:text-[46px]
                sm:leading-[48px]

                md:text-[56px]
                md:leading-[55px]

                lg:text-[70px]
                lg:leading-[62px]

                text-[#262626]
                whitespace-nowrap
              "
            >
              ABOUT{" "}
              <span
                className="
                  ml-2
                  sm:ml-2.5
                  font-bold
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
            w-full
            md:w-[190px]
            lg:w-[220px]
            xl:w-[250px]

            h-[140px]
            sm:h-[160px]
            md:h-[200px]
            lg:h-[250px]
            xl:h-[287.29px]

            flex
            items-end
            justify-center

            p-0
            mx-auto

            shrink-0
          "
        >
          <img
            src="/logo2.png"
            alt="Uttara Adhunik Medical College"
            className="
              w-auto
              max-w-full
              h-full

              block
              object-contain
              object-center
            "
          />
        </div>
      </div>
    </section>
  );
}
