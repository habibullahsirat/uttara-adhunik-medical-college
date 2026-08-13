// "use client";

// import React from "react";

// const members = [
//   {
//     image: "/images/1168b98e-1460-45bc-867b-47bab20dc363.jpg",
//     name: "Late Prof. Mohammad Yousuf Ali",
//     role: "Ex-Chairman, EC, BMSRI",
//   },
//   {
//     image: "/images/b8af5a03-d623-4e42-bb1d-8846aa628952.jpg",
//     name: "Late Prof. Mohammad Yousuf Ali",
//     role: "Ex-Chairman, EC, BMSRI",
//   },
//   {
//     image: "/images/a3097940-6216-4256-ab70-df93bc1d700c.jpg",
//     name: "Late Prof. Mohammad Yousuf Ali",
//     role: "Ex-Chairman, EC, BMSRI",
//   },
// ];

// const MemberCard = ({ image, name, role }) => {
//   return (
//     <div className="flex h-[632px] w-[447px] flex-col items-start gap-[10px] bg-[#CFE8D9] p-[20px]">
//       {/* Member Image */}
//       <div className="relative h-[500px] w-full overflow-hidden">
//         <img src={image} alt={name} className="h-full w-full object-cover" />
//       </div>

//       {/* Member Information */}
//       <div className="flex h-[82px] w-full flex-col items-start">
//         {/* Name */}
//         <div className="flex h-[50px] w-full items-center gap-[10px] px-[10px] py-[10px]">
//           <h3 className="font-[Bitter] text-[25px] font-bold leading-[30px] text-black">
//             {name}
//           </h3>
//         </div>

//         {/* Role */}
//         <div className="flex h-[32px] items-center justify-center gap-[10px] px-[10px] py-[5px]">
//           <p className="font-[Inter] text-[18px] font-medium leading-[22px] text-[#018837]">
//             {role}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function ECSection() {
//   return (
//     <section className="flex w-full flex-col items-start gap-[50px] bg-white pb-[100px] pt-[50px]">
//       {/* Heading */}
//       <div className="flex h-[80px] w-full items-center gap-[10px] px-[80px] py-[10px]">
//         <h2 className="font-[Bitter] text-[50px] font-medium leading-[60px] text-black">
//           EC Members
//         </h2>
//       </div>

//       {/* Members */}
//       <div className="flex w-full flex-row items-start gap-[50px] px-[80px]">
//         {members.map((member, index) => (
//           <MemberCard
//             key={index}
//             image={member.image}
//             name={member.name}
//             role={member.role}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

const API_URL = `${process.env.NEXT_PUBLIC_ADMIN_API}/api/about/ec-member`;

async function getECMembers() {
  try {
    const response = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch EC members: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching EC members:", error);
    return [];
  }
}

function MemberCard({ member }) {
  return (
    <article className="flex w-full flex-col gap-[10px] bg-[#CFE8D9] p-5">
      {/* Member Image */}
      <div className="relative aspect-[407/500] w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="
            (max-width: 639px) 100vw,
            (max-width: 1023px) 50vw,
            407px
          "
          className="object-cover"
        />
      </div>

      {/* Member Information */}
      <div className="flex min-h-[82px] w-full flex-col items-start">
        {/* Name */}
        <div className="flex min-h-[50px] w-full items-center px-[10px] py-[10px]">
          <h3 className="font-[Bitter] text-[clamp(20px,2vw,25px)] font-bold leading-[30px] text-black">
            {member.name}
          </h3>
        </div>

        {/* Designation */}
        <div className="flex min-h-[32px] items-center justify-center px-[10px] py-[5px]">
          <p className="font-[Inter] text-[clamp(15px,1.5vw,18px)] font-medium leading-[22px] text-[#018837]">
            {member.designation}
          </p>
        </div>
      </div>
    </article>
  );
}

export default async function ECSection() {
  const members = await getECMembers();

  return (
    <section className="flex w-full flex-col gap-[50px] bg-white px-4 pb-[100px] pt-[50px] sm:px-6 lg:px-20">
      {/* Heading */}
      <div className="flex w-full items-center px-0 py-[10px]">
        <h2 className="font-[Bitter] text-[clamp(32px,4vw,50px)] font-medium leading-[1.2] text-black">
          EC Members
        </h2>
      </div>

      {/* Members */}
      {members.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[50px]">
          {members.map((member) => (
            <MemberCard key={member._id} member={member} />
          ))}
        </div>
      ) : (
        <p className="font-[Inter] text-base text-gray-500">
          No EC members available.
        </p>
      )}
    </section>
  );
}
