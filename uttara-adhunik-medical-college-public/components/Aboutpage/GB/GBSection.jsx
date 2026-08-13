// "use client";

// const members = [
//   {
//     image: "/images/gb-member-1.jpg",
//     name: "Late Prof. Mohammad Yousuf Ali",
//     designation: "Ex-Chairman, EC, BMSRI",
//   },
// ];

// export default function GBSection() {
//   return (
//     <section className="w-full flex flex-col items-start pt-[50px] pb-[100px] gap-[50px]">
//       {/* Heading */}
//       <div className="w-full h-[80px] flex flex-row items-center px-[80px] py-[10px]">
//         <h2 className="font-['Bitter'] font-medium text-[50px] leading-[60px] text-black">
//           GB Members
//         </h2>
//       </div>

//       {/* Members */}
//       <div className="w-full flex flex-row items-center px-[80px] gap-[50px]">
//         {members.map((member, index) => (
//           <div
//             key={index}
//             className="w-[447px] h-[632px] bg-[#CFE8D9] p-[20px] flex flex-col items-start gap-[10px]"
//           >
//             {/* Image */}
//             <div className="w-[407px] h-[500px] overflow-hidden">
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Member information */}
//             <div className="w-[373px] h-[82px] flex flex-col items-start">
//               {/* Name */}
//               <div className="w-full h-[50px] flex flex-row items-center px-[10px]">
//                 <h3 className="font-['Bitter'] font-bold text-[25px] leading-[30px] text-black whitespace-nowrap">
//                   {member.name}
//                 </h3>
//               </div>

//               {/* Designation */}
//               <div className="h-[32px] flex flex-row justify-center items-center px-[10px] py-[5px]">
//                 <p className="font-['Inter'] font-medium text-[18px] leading-[22px] text-[#018837] whitespace-nowrap">
//                   {member.designation}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

async function getGBMembers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/gb-member`,
    {
      next: {
        revalidate: 60,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GB members");
  }

  return response.json();
}

export default async function GBMemberSection() {
  const members = await getGBMembers();

  return (
    <section className="w-full flex flex-col items-start pt-10 sm:pt-12 lg:pt-[50px] pb-16 sm:pb-20 lg:pb-[100px] gap-8 sm:gap-10 lg:gap-[50px]">
      {/* Heading */}
      <div className="w-full flex items-center px-5 sm:px-8 md:px-12 lg:px-[80px]">
        <h2 className="font-['Bitter'] font-medium text-3xl sm:text-4xl md:text-[42px] lg:text-[50px] leading-tight lg:leading-[60px] text-black">
          GB Members
        </h2>
      </div>

      {/* Members */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-[50px] px-5 sm:px-8 md:px-12 lg:px-[80px]">
        {members?.map((member) => (
          <div
            key={member._id}
            className="w-full max-w-[447px] mx-auto lg:mx-0 bg-[#CFE8D9] p-4 sm:p-5 flex flex-col items-start gap-3 sm:gap-[10px]"
          >
            {/* Image */}
            <div className="relative w-full aspect-[407/500] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 447px"
                className="object-cover"
              />
            </div>

            {/* Member information */}
            <div className="w-full flex flex-col items-start">
              {/* Name */}
              <div className="w-full min-h-[50px] flex items-center px-2 sm:px-[10px]">
                <h3 className="font-['Bitter'] font-bold text-lg sm:text-xl lg:text-[25px] leading-tight lg:leading-[30px] text-black">
                  {member.name}
                </h3>
              </div>

              {/* Designation */}
              <div className="w-full flex items-center px-2 sm:px-[10px] py-1">
                <p className="font-['Inter'] font-medium text-sm sm:text-base lg:text-[18px] leading-snug lg:leading-[22px] text-[#018837]">
                  {member.designation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
