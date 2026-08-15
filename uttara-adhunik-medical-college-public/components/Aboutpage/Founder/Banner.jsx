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

//             <span style={{ color: GREEN }}>Founder Members</span>
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
        relative
        w-full
        min-h-[420px]
        h-auto
        flex
        flex-col
        justify-end
        items-start
        box-border
        px-3
        py-5
        sm:min-h-[450px]
        sm:px-5
        sm:py-7
        md:min-h-[480px]
        md:px-8
        md:py-10
        lg:h-[500px]
        lg:min-h-0
        lg:px-[60px]
        lg:py-[60px]
        xl:px-20
        xl:py-20
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{
        backgroundImage: 'url("/bg.png")',
      }}
    >
      {/* Green overlay/content frame */}
      <div
        className="
          w-full
          min-h-[270px]
          flex
          flex-col
          justify-end
          box-border
          p-4
          sm:min-h-[290px]
          sm:p-5
          md:min-h-[300px]
          md:p-7
          lg:h-[327.29px]
          lg:min-h-0
          lg:px-10
          lg:py-6
          xl:px-[50px]
          xl:py-5
        "
        style={{
          background: "rgba(1, 136, 55, 0.3)",
        }}
      >
        {/* Main content */}
        <div
          className="
            w-full
            flex
            flex-col
            gap-5
            sm:gap-6
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-5
          "
        >
          {/* Left content */}
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
            {/* Breadcrumb */}
            <div
              className="
                w-full
                flex
                flex-wrap
                items-center
                gap-x-1
                gap-y-1
                font-['Inter',sans-serif]
                font-medium
                text-xs
                leading-5
                sm:text-sm
                sm:leading-5
                md:text-base
                md:leading-6
                lg:text-lg
                xl:text-xl
                whitespace-normal
                lg:whitespace-nowrap
                text-black
              "
            >
              <span>HOME</span>

              <span>&gt;</span>

              <span>ABOUT UAMC</span>

              <span>&gt;&gt;</span>

              <span className="text-[#018837]" style={{ color: GREEN }}>
                Founder Members
              </span>
            </div>

            {/* Heading */}
            <div
              className="
                w-full
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
                  text-[38px]
                  leading-[40px]
                  sm:text-[46px]
                  sm:leading-[46px]
                  md:text-[54px]
                  md:leading-[54px]
                  lg:text-[64px]
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

          {/* Logo */}
          <div
            className="
              w-[100px]
              h-[115px]
              sm:w-[125px]
              sm:h-[144px]
              md:w-[155px]
              md:h-[178px]
              lg:w-[200px]
              lg:h-[230px]
              xl:w-[250px]
              xl:h-[287.29px]
              flex
              items-end
              justify-center
              flex-shrink-0
              self-center
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
