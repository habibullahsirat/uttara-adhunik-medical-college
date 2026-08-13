// "use client";

// import React, { useState } from "react";
// import { CalendarDays, Clock3 } from "lucide-react";
// import {
//   MapPin,
//   Mail,
//   Phone,
//   Search,
//   ChevronDown,
//   AlignJustify,
//   Clock,
//   ArrowRight,
//   ArrowUpRight,
//   Star,
//   Menu,
//   // Facebook,
//   // Youtube,
//   // Linkedin,
//   // Instagram,
//   X,
// } from "lucide-react";

// export default function AlumniEvents() {
//   const events = [
//     {
//       num: "01",
//       title: "Bridging Cultures: Global Perspectives in Medicine",
//       date: "August 20, 2024",
//       time: "4:27 am",
//       place: "Yarra Park, UK",
//     },
//     {
//       num: "02",
//       title: "Literary Voices: Celebrating Diverse Narratives",
//       date: "August 20, 2024",
//       time: "4:27 am",
//       place: "Yarra Park, UK",
//     },
//     {
//       num: "03",
//       title: "Cultural Exchange: Building Global Connections",
//       date: "August 20, 2024",
//       time: "4:27 am",
//       place: "Yarra Park, UK",
//     },
//   ];

//   return (
//     <section className="w-full bg-[#E6F3EB] px-6 py-20 md:px-20 md:py-[100px]">
//       {/* Header */}
//       <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
//         <h2 className="font-display text-[43px] font-bold leading-[48px] text-[#018837]">
//           Alumni Event
//         </h2>

//         <a
//           href="#"
//           className="flex items-center gap-1 font-body text-base font-medium text-[#018837]"
//         >
//           View All
//           <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
//         </a>
//       </div>

//       {/* Content */}
//       <div className="mx-auto mt-[50px] flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-[90px]">
//         {/* Events */}
//         <div className="flex w-full flex-col gap-0 lg:w-[722px]">
//           {events.map((event) => (
//             <div
//               key={event.num}
//               className="flex min-h-[190px] w-full items-center bg-[#F6F6F6] px-[18px]"
//             >
//               {/* Number */}
//               <div
//                 className="
//                   flex h-[108px] w-[108px]
//                   shrink-0 items-center justify-center
//                   border border-[#018837]
//                   font-display text-[90px]
//                   font-normal leading-[108px]
//                   text-black
//                 "
//               >
//                 {event.num}
//               </div>

//               {/* Event information */}
//               <div className="ml-[30px] flex min-w-0 flex-1 flex-col justify-center gap-[9px]">
//                 <p className="font-body text-[19px] font-normal leading-[31px] text-[#018837]">
//                   {event.title}
//                 </p>

//                 <div className="flex flex-wrap items-center gap-[18px] font-body text-[14px] leading-[26px] text-[#444444]">
//                   <span className="flex items-center gap-[9px]">
//                     <CalendarDays className="h-[15px] w-[15px]" />
//                     {event.date}
//                   </span>

//                   <span className="flex items-center gap-[9px]">
//                     <Clock3 className="h-[17px] w-[17px]" />
//                     {event.time}
//                   </span>

//                   <span className="flex items-center gap-[9px]">
//                     <MapPin className="h-[15px] w-[15px]" />
//                     {event.place}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Image */}
//         <div className="w-full lg:w-[627px] lg:shrink-0">
//           <img
//             src="/alumni.png"
//             alt="Alumni gathered on campus lawn"
//             className="h-[607px] w-full"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";
import { ArrowUpRight, CalendarDays, Clock3, MapPin } from "lucide-react";

const baseUrl = process.env.NEXT_PUBLIC_ADMIN_API;

const EVENTS_API = `${baseUrl}/api/homepage/events`;

const EVENT_IMAGE_API = `${baseUrl}/api/homepage/event-image`;

async function getEvents() {
  const response = await fetch(EVENTS_API, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch alumni events");
  }

  return response.json();
}

async function getEventImage() {
  const response = await fetch(EVENT_IMAGE_API, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch alumni event image");
  }

  return response.json();
}

function formatDate(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}

function formatTime(dateString) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(new Date(dateString));
}

export default async function AlumniEvents() {
  const [events, eventImages] = await Promise.all([
    getEvents(),
    getEventImage(),
  ]);

  const imageUrl = eventImages?.[0]?.image;

  return (
    <section className="w-full bg-[#E6F3EB] px-4 py-14 sm:px-6 sm:py-16 md:px-10 md:py-20 lg:px-16 lg:py-[100px] xl:px-20">
      <div className="mx-auto w-full max-w-[1440px]">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <h2 className="font-display text-[32px] font-bold leading-[40px] text-[#018837] sm:text-[38px] sm:leading-[46px] md:text-[43px] md:leading-[48px]">
            Alumni Event
          </h2>

          <a
            href="#"
            className="flex shrink-0 items-center gap-1 font-body text-sm font-medium text-[#018837] sm:text-base"
          >
            <span>View All</span>
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        {/* Content */}
        <div className="mt-10 flex flex-col gap-8 sm:mt-12 lg:mt-[50px] lg:flex-row lg:items-stretch lg:gap-10 xl:gap-[90px]">
          {/* Events */}
          <div className="flex w-full flex-col gap-[18px] lg:w-[calc(50%-20px)] xl:w-[722.7px]">
            {events?.map((event, index) => {
              const number = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={event._id}
                  className="flex min-h-[190px] w-full items-center bg-[#F6F6F6] px-[18px] py-6 sm:py-8 lg:min-h-[190px] lg:py-0"
                >
                  {/* Number */}
                  <div
                    className="flex h-[80px] w-[80px] shrink-0 items-center justify-center  font-display text-[52px] font-[family-name:var(--font-bitter)] font-normal leading-none text-white sm:h-[96px] sm:w-[96px] sm:text-[70px] lg:h-[108px] lg:w-[94px] lg:text-[90px]"
                    style={{
                      WebkitTextStroke: "1px #018837",
                    }}
                  >
                    {number}
                  </div>

                  {/* Event information */}
                  <div className="ml-5 flex min-w-0 flex-1 flex-col justify-center gap-[9px] sm:ml-7 lg:ml-[45px]">
                    <p className="font-body text-base font-normal leading-6 text-[#018837] sm:text-[18px] sm:leading-7 lg:text-[19.2375px] lg:leading-[31px]">
                      {event.title}
                    </p>

                    <div className="flex flex-col gap-2 font-body text-[13px] leading-6 text-[#444444] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-[18px] sm:gap-y-1 sm:text-[14.4px]">
                      <span className="flex items-center gap-[9px]">
                        <CalendarDays className="h-[15px] w-[15px] shrink-0" />
                        <span>{formatDate(event.createdAt)}</span>
                      </span>

                      <span className="flex items-center gap-[9px]">
                        <Clock3 className="h-[17px] w-[17px] shrink-0" />
                        <span>{formatTime(event.createdAt)}</span>
                      </span>

                      <span className="flex min-w-0 items-start gap-[9px]">
                        <MapPin className="mt-1 h-[15px] w-[15px] shrink-0" />
                        <span className="break-words">{event.location}</span>
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Event image */}
          {imageUrl && (
            <div className="relative aspect-[627/607] w-full overflow-hidden lg:w-[calc(50%-20px)] xl:h-[606.6px] xl:w-[627.3px] xl:aspect-auto">
              <Image
                src={imageUrl}
                alt="Alumni gathered on campus lawn"
                fill
                priority
                sizes="
                  (max-width: 1023px) 100vw,
                  (max-width: 1279px) 50vw,
                  627px
                "
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
