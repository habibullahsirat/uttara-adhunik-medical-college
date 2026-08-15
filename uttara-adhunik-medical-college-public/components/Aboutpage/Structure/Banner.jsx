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

//             <span style={{ color: GREEN }}>Organizational Structure</span>
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
"use client";

const GREEN = "#018837";

export default function Banner() {
  return (
    <section
      className="
        w-full
        h-[500px]
        flex flex-col justify-end items-start
        gap-[10px]
        box-border
        px-4 py-8
        sm:px-6 sm:py-10
        md:px-10 md:py-12
        lg:px-[60px] lg:py-[60px]
        xl:px-20 xl:py-20
        bg-cover bg-center bg-no-repeat
      "
      style={{
        backgroundImage: 'url("/bg.png")',
      }}
    >
      {/* Green overlay/content frame */}
      <div
        className="
          w-full
          min-h-[260px]
          h-auto
          flex flex-col
          justify-end
          items-stretch
          gap-6
          box-border
          p-5
          sm:p-6
          md:p-8
          lg:px-10 lg:py-6
          xl:px-[50px] xl:py-5
        "
        style={{
          background: "rgba(1, 136, 55, 0.3)",
        }}
      >
        {/* Main content + logo */}
        <div
          className="
            w-full
            flex flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-6
            lg:gap-5
          "
        >
          {/* Left content */}
          <div
            className="
              w-full
              flex-1
              flex flex-col
              justify-end
              items-start
              gap-3
              lg:gap-[10px]
              min-w-0
            "
          >
            {/* Breadcrumb */}
            <div
              className="
                w-full
                flex flex-wrap
                items-center
                gap-x-1.5
                gap-y-1
                font-['Inter',sans-serif]
                font-medium
                text-sm
                sm:text-base
                md:text-lg
                lg:text-xl
                leading-6
                text-black
              "
            >
              <span>HOME</span>
              <span>&gt;</span>
              <span>ABOUT UAMC</span>
              <span>&gt;&gt;</span>
              <span className="text-[#018837]" style={{ color: GREEN }}>
                Organizational Structure
              </span>
            </div>

            {/* Heading */}
            <div
              className="
                w-full
                flex items-center
                py-1
                sm:py-2
              "
            >
              <h1
                className="
                  m-0
                  p-0
                  flex items-center
                  font-['Bitter',serif]
                  font-light
                  text-[42px]
                  leading-[42px]
                  sm:text-[50px]
                  sm:leading-[50px]
                  md:text-[58px]
                  md:leading-[56px]
                  lg:text-[64px]
                  lg:leading-[60px]
                  xl:text-[70px]
                  xl:leading-[62px]
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
                    text-[#018837]
                  "
                  style={{ color: GREEN }}
                >
                  UAMC
                </span>
              </h1>
            </div>
          </div>

          {/* Logo */}
          <div
            className="
              w-[120px]
              h-[138px]
              sm:w-[140px]
              sm:h-[161px]
              md:w-[170px]
              md:h-[195px]
              lg:w-[200px]
              lg:h-[230px]
              xl:w-[250px]
              xl:h-[287.29px]
              flex
              items-end
              justify-center
              flex-shrink-0
              self-end
              lg:self-auto
              mx-auto
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
