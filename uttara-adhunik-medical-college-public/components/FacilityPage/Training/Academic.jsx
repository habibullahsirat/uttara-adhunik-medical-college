// import React from "react";

// const Academic = () => {
//   const trainingItems = [
//     {
//       text: "Undergraduate & Postgraduate Programs: Structured programs tailored to nurture knowledge, skills, and professional growth across medical disciplines.",
//       height: 130,
//     },
//     {
//       text: "Clinical Training System: A well-organized system involving: Clinical Meetings; Ward Rounds; Hands-on Classes",
//       height: 100,
//     },
//     {
//       text: "Professional Roles Covered: Training is provided for: Indoor Medical Officers; Assistant Registrars; Registrars; Registrars in Training Positions",
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
//               <TrainingCard key={index} text={item.text} height={item.height} />
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

// const TrainingCard = ({ text, height }) => {
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
//           fontWeight: 700,
//           fontSize: "18px",
//           lineHeight: "30px",
//           letterSpacing: "0.01em",
//           color: "#444444",
//           display: "flex",
//           alignItems: "center",
//         }}
//       >
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

import React from "react";

const Academic = () => {
  const trainingItems = [
    {
      heading: "Undergraduate & Postgraduate Programs",
      text: "Structured programs tailored to nurture knowledge, skills, and professional growth across medical disciplines.",
      height: 130,
    },
    {
      heading: "Clinical Training System",
      text: "A well-organized system involving: Clinical Meetings; Ward Rounds; Hands-on Classes",
      height: 100,
    },
    {
      heading: "Professional Roles Covered",
      text: "Training is provided for: Indoor Medical Officers; Assistant Registrars; Registrars; Registrars in Training Positions",
      height: 130,
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        minHeight: "590px",
        background: "#FFFFFF",
        padding: "80px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1440px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}
        <div
          style={{
            width: "100%",
            height: "80px",
            display: "flex",
            alignItems: "center",
            padding: "10px",
            boxSizing: "border-box",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: '"Bitter", serif',
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: "50px",
              lineHeight: "60px",
              letterSpacing: "0.01em",
              color: "#000000",
            }}
          >
            Academic &amp; Clinical Training
          </h2>
        </div>

        {/* Training Cards */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "30px",
            rowGap: "30px",
            alignItems: "start",
          }}
        >
          {/* Left Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            {[trainingItems[0], trainingItems[2]].map((item, index) => (
              <TrainingCard
                key={index}
                heading={item.heading}
                text={item.text}
                height={item.height}
              />
            ))}
          </div>

          {/* Right Column */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TrainingCard
              heading={trainingItems[1].heading}
              text={trainingItems[1].text}
              height={trainingItems[1].height}
            />
          </div>
        </div>

        {/* Bottom Description */}
        <div
          style={{
            width: "100%",
            height: "30px",
            marginTop: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              width: "100%",
              margin: 0,
              fontFamily: '"Inter", sans-serif',
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "30px",
              letterSpacing: "0.01em",
              textAlign: "center",
              color: "#000000",
            }}
          >
            More detailed scopes and training outlines are available in the
            Academic Activities section.
          </p>
        </div>
      </div>
    </section>
  );
};

const TrainingCard = ({ heading, text, height }) => {
  return (
    <div
      style={{
        width: "100%",
        height: `${height}px`,
        padding: "20px",
        boxSizing: "border-box",
        background: "rgba(1, 136, 55, 0.1)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <p
        style={{
          margin: 0,
          flex: 1,
          fontFamily: '"Inter", sans-serif',
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: "18px",
          lineHeight: "30px",
          letterSpacing: "0.01em",
          color: "#444444",
        }}
      >
        <span
          style={{
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          {heading}:
        </span>{" "}
        {text}
      </p>

      {/* Arrow Button */}
      <div
        style={{
          width: "36.4px",
          height: "36.4px",
          minWidth: "36.4px",
          background: "#FFFFFF",
          borderRadius: "2.07972px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#018837",
            fontFamily: "Arial, sans-serif",
            fontSize: "27px",
            fontWeight: 400,
            lineHeight: 1,
            display: "block",
            transform: "translateY(-1px)",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
};

export default Academic;
