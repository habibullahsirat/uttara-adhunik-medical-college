// // import React from "react";

// // const Academic = () => {
// //   const trainingItems = [
// //     {
// //       text: "Undergraduate & Postgraduate Programs: Structured programs tailored to nurture knowledge, skills, and professional growth across medical disciplines.",
// //       height: 130,
// //     },
// //     {
// //       text: "Clinical Training System: A well-organized system involving: Clinical Meetings; Ward Rounds; Hands-on Classes",
// //       height: 100,
// //     },
// //     {
// //       text: "Professional Roles Covered: Training is provided for: Indoor Medical Officers; Assistant Registrars; Registrars; Registrars in Training Positions",
// //       height: 130,
// //     },
// //   ];

// //   return (
// //     <section
// //       style={{
// //         width: "100%",
// //         minHeight: "590px",
// //         background: "#FFFFFF",
// //         padding: "80px",
// //         boxSizing: "border-box",
// //       }}
// //     >
// //       <div
// //         style={{
// //           width: "100%",
// //           maxWidth: "1440px",
// //           margin: "0 auto",
// //         }}
// //       >
// //         {/* Heading */}
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "80px",
// //             display: "flex",
// //             alignItems: "center",
// //             padding: "10px",
// //             boxSizing: "border-box",
// //             marginBottom: "30px",
// //           }}
// //         >
// //           <h2
// //             style={{
// //               margin: 0,
// //               fontFamily: '"Bitter", serif',
// //               fontStyle: "normal",
// //               fontWeight: 500,
// //               fontSize: "50px",
// //               lineHeight: "60px",
// //               letterSpacing: "0.01em",
// //               color: "#000000",
// //             }}
// //           >
// //             Academic &amp; Clinical Training
// //           </h2>
// //         </div>

// //         {/* Training Cards */}
// //         <div
// //           style={{
// //             width: "100%",
// //             display: "grid",
// //             gridTemplateColumns: "1fr 1fr",
// //             columnGap: "30px",
// //             rowGap: "30px",
// //             alignItems: "start",
// //           }}
// //         >
// //           {/* Left Column */}
// //           <div
// //             style={{
// //               display: "flex",
// //               flexDirection: "column",
// //               gap: "30px",
// //             }}
// //           >
// //             {[trainingItems[0], trainingItems[2]].map((item, index) => (
// //               <TrainingCard key={index} text={item.text} height={item.height} />
// //             ))}
// //           </div>

// //           {/* Right Column */}
// //           <div
// //             style={{
// //               display: "flex",
// //               flexDirection: "column",
// //             }}
// //           >
// //             <TrainingCard
// //               text={trainingItems[1].text}
// //               height={trainingItems[1].height}
// //             />
// //           </div>
// //         </div>

// //         {/* Bottom Description */}
// //         <div
// //           style={{
// //             width: "100%",
// //             height: "30px",
// //             marginTop: "30px",
// //             display: "flex",
// //             alignItems: "center",
// //             justifyContent: "center",
// //           }}
// //         >
// //           <p
// //             style={{
// //               width: "100%",
// //               margin: 0,
// //               fontFamily: '"Inter", sans-serif',
// //               fontStyle: "normal",
// //               fontWeight: 400,
// //               fontSize: "18px",
// //               lineHeight: "30px",
// //               letterSpacing: "0.01em",
// //               textAlign: "center",
// //               color: "#000000",
// //             }}
// //           >
// //             More detailed scopes and training outlines are available in the
// //             Academic Activities section.
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // const TrainingCard = ({ text, height }) => {
// //   return (
// //     <div
// //       style={{
// //         width: "100%",
// //         height: `${height}px`,
// //         padding: "20px",
// //         boxSizing: "border-box",
// //         background: "rgba(1, 136, 55, 0.1)",
// //         display: "flex",
// //         flexDirection: "row",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         gap: "10px",
// //       }}
// //     >
// //       <p
// //         style={{
// //           margin: 0,
// //           flex: 1,
// //           fontFamily: '"Inter", sans-serif',
// //           fontStyle: "normal",
// //           fontWeight: 700,
// //           fontSize: "18px",
// //           lineHeight: "30px",
// //           letterSpacing: "0.01em",
// //           color: "#444444",
// //           display: "flex",
// //           alignItems: "center",
// //         }}
// //       >
// //         {text}
// //       </p>

// //       {/* Arrow Button */}
// //       <div
// //         style={{
// //           width: "36.4px",
// //           height: "36.4px",
// //           minWidth: "36.4px",
// //           background: "#FFFFFF",
// //           borderRadius: "2.07972px",
// //           display: "flex",
// //           alignItems: "center",
// //           justifyContent: "center",
// //         }}
// //       >
// //         <span
// //           style={{
// //             color: "#018837",
// //             fontFamily: "Arial, sans-serif",
// //             fontSize: "27px",
// //             fontWeight: 400,
// //             lineHeight: 1,
// //             display: "block",
// //             transform: "translateY(-1px)",
// //           }}
// //         >
// //           →
// //         </span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Academic;

// import React from "react";

// const Academic = () => {
//   const trainingItems = [
//     {
//       heading: "Undergraduate & Postgraduate Programs",
//       text: "Structured programs tailored to nurture knowledge, skills, and professional growth across medical disciplines.",
//       height: 130,
//     },
//     {
//       heading: "Clinical Training System",
//       text: "A well-organized system involving: Clinical Meetings; Ward Rounds; Hands-on Classes",
//       height: 100,
//     },
//     {
//       heading: "Professional Roles Covered",
//       text: "Training is provided for: Indoor Medical Officers; Assistant Registrars; Registrars; Registrars in Training Positions",
//       height: 130,
//     },
//   ];

//   return (
//     <section
//       style={{
//         width: "100%",
//         minHeight: "590px",
//         background: "#FFFFFF",
//         padding: "80px",
//         boxSizing: "border-box",
//       }}
//     >
//       <div
//         style={{
//           width: "100%",
//           maxWidth: "1440px",
//           margin: "0 auto",
//         }}
//       >
//         {/* Heading */}
//         <div
//           style={{
//             width: "100%",
//             height: "80px",
//             display: "flex",
//             alignItems: "center",
//             padding: "10px",
//             boxSizing: "border-box",
//             marginBottom: "30px",
//           }}
//         >
//           <h2
//             style={{
//               margin: 0,
//               fontFamily: '"Bitter", serif',
//               fontStyle: "normal",
//               fontWeight: 500,
//               fontSize: "50px",
//               lineHeight: "60px",
//               letterSpacing: "0.01em",
//               color: "#000000",
//             }}
//           >
//             Academic &amp; Clinical Training
//           </h2>
//         </div>

//         {/* Training Cards */}
//         <div
//           style={{
//             width: "100%",
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             columnGap: "30px",
//             rowGap: "30px",
//             alignItems: "start",
//           }}
//         >
//           {/* Left Column */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               gap: "30px",
//             }}
//           >
//             {[trainingItems[0], trainingItems[2]].map((item, index) => (
//               <TrainingCard
//                 key={index}
//                 heading={item.heading}
//                 text={item.text}
//                 height={item.height}
//               />
//             ))}
//           </div>

//           {/* Right Column */}
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <TrainingCard
//               heading={trainingItems[1].heading}
//               text={trainingItems[1].text}
//               height={trainingItems[1].height}
//             />
//           </div>
//         </div>

//         {/* Bottom Description */}
//         <div
//           style={{
//             width: "100%",
//             height: "30px",
//             marginTop: "30px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <p
//             style={{
//               width: "100%",
//               margin: 0,
//               fontFamily: '"Inter", sans-serif',
//               fontStyle: "normal",
//               fontWeight: 400,
//               fontSize: "18px",
//               lineHeight: "30px",
//               letterSpacing: "0.01em",
//               textAlign: "center",
//               color: "#000000",
//             }}
//           >
//             More detailed scopes and training outlines are available in the
//             Academic Activities section.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// const TrainingCard = ({ heading, text, height }) => {
//   return (
//     <div
//       style={{
//         width: "100%",
//         height: `${height}px`,
//         padding: "20px",
//         boxSizing: "border-box",
//         background: "rgba(1, 136, 55, 0.1)",
//         display: "flex",
//         flexDirection: "row",
//         justifyContent: "space-between",
//         alignItems: "center",
//         gap: "10px",
//       }}
//     >
//       <p
//         style={{
//           margin: 0,
//           flex: 1,
//           fontFamily: '"Inter", sans-serif',
//           fontStyle: "normal",
//           fontWeight: 400,
//           fontSize: "18px",
//           lineHeight: "30px",
//           letterSpacing: "0.01em",
//           color: "#444444",
//         }}
//       >
//         <span
//           style={{
//             fontWeight: 700,
//             whiteSpace: "nowrap",
//           }}
//         >
//           {heading}:
//         </span>{" "}
//         {text}
//       </p>

//       {/* Arrow Button */}
//       <div
//         style={{
//           width: "36.4px",
//           height: "36.4px",
//           minWidth: "36.4px",
//           background: "#FFFFFF",
//           borderRadius: "2.07972px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <span
//           style={{
//             color: "#018837",
//             fontFamily: "Arial, sans-serif",
//             fontSize: "27px",
//             fontWeight: 400,
//             lineHeight: 1,
//             display: "block",
//             transform: "translateY(-1px)",
//           }}
//         >
//           →
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Academic;

// Dynamic version
const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/facility/training/facility`;

const getTrainingItems = async () => {
  try {
    const response = await fetch(API_URL, {
      // Change/remove this depending on whether you want caching.
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch training data");
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Training API error:", error);
    return [];
  }
};

const parseTrainingTitle = (title = "") => {
  const [heading, ...description] = title.split(":");

  return {
    heading: heading.trim(),
    text: description.join(":").trim(),
  };
};

const Academic = async () => {
  const trainingItems = await getTrainingItems();

  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Heading */}
        <div className="mb-8 flex w-full items-center px-0 sm:mb-10 sm:px-2">
          <h2 className="m-0 font-['Bitter',serif] text-[32px] font-medium leading-[42px] tracking-[0.01em] text-black sm:text-[38px] sm:leading-[48px] md:text-[44px] md:leading-[54px] lg:text-[50px] lg:leading-[60px]">
            Academic &amp; Clinical Training
          </h2>
        </div>

        {/* Training Cards */}
        {trainingItems.length > 0 ? (
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-[30px]">
            {trainingItems.map((item) => {
              const { heading, text } = parseTrainingTitle(item.title);

              return (
                <TrainingCard key={item._id} heading={heading} text={text} />
              );
            })}
          </div>
        ) : (
          <div className="flex min-h-[150px] items-center justify-center bg-[rgba(1,136,55,0.1)] px-5 text-center">
            <p className="font-['Inter',sans-serif] text-base text-[#444444] sm:text-lg">
              No training information is currently available.
            </p>
          </div>
        )}

        {/* Bottom Description */}
        <div className="mt-8 flex w-full items-center justify-center sm:mt-10">
          <p className="m-0 w-full text-center font-['Inter',sans-serif] text-sm font-normal leading-6 tracking-[0.01em] text-black sm:text-base sm:leading-7 md:text-lg md:leading-[30px]">
            More detailed scopes and training outlines are available in the
            Academic Activities section.
          </p>
        </div>
      </div>
    </section>
  );
};

const TrainingCard = ({ heading, text }) => {
  return (
    <div className="flex min-h-[150px] w-full items-center justify-between gap-4 bg-[rgba(1,136,55,0.1)] p-5 sm:min-h-[160px] sm:p-6 md:min-h-[170px] lg:min-h-[130px]">
      {/* Content */}
      <p className="m-0 min-w-0 flex-1 font-['Inter',sans-serif] text-base font-normal leading-7 tracking-[0.01em] text-[#444444] sm:text-[17px] sm:leading-7 md:text-lg md:leading-[30px]">
        <span className="font-bold">
          {heading}
          {heading && ":"}
        </span>{" "}
        {text}
      </p>

      {/* Arrow Button */}
      <div className="flex h-9 w-9 min-w-9 shrink-0 items-center justify-center rounded-[2px] bg-white sm:h-10 sm:w-10 sm:min-w-10">
        <span className="block -translate-y-px font-['Arial',sans-serif] text-[25px] font-normal leading-none text-[#018837] sm:text-[27px]">
          →
        </span>
      </div>
    </div>
  );
};

export default Academic;
