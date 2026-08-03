// import { ArrowRight } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// function PhotoPlaceholder({ label, className = "" }) {
//   return (
//     <div
//       className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a3d1f] to-[#018837] ${className}`}
//     >
//       <span className="font-body text-[11px] uppercase tracking-widest text-white/60 text-center px-4">
//         {label}
//       </span>
//     </div>
//   );
// }

// export default function Hero() {
//   const slides = ["01", "02", "03", "04", "05"];
//   return (
//     <section
//       id="home"
//       className="relative flex flex-col justify-end px-6 md:px-20 py-10 md:py-14 text-white"
//       style={{
//         backgroundImage:
//           "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(1,136,55,0.75) 100%)",
//       }}
//     >
//       <PhotoPlaceholder
//         label="Doctors in the hospital corridor"
//         className="absolute inset-0 -z-10"
//       />

//       {/* slide counter */}
//       <div className="mx-auto mb-10 flex items-center gap-8 font-display text-xs font-bold uppercase tracking-widest">
//         <span>Prev</span>
//         <div className="flex items-center gap-4">
//           {slides.map((s, i) => (
//             <span key={s} className="flex items-center gap-4">
//               <span
//                 className={i === slides.length - 1 ? "" : "opacity-70"}
//                 style={i === slides.length - 1 ? { color: YELLOW } : {}}
//               >
//                 {s}
//               </span>
//               {i < slides.length - 1 && (
//                 <span className="h-4 w-px bg-white/40" />
//               )}
//             </span>
//           ))}
//         </div>
//         <span>Next</span>
//       </div>

//       <div className="mx-auto flex w-full max-w-6xl flex-col md:flex-row items-end justify-between gap-10 rounded-sm bg-black/10 p-6 md:p-10 backdrop-blur-sm">
//         <div className="flex flex-col gap-6 max-w-xl">
//           <span className="inline-flex items-center gap-2 border-l-2 border-white pl-3 font-body text-sm">
//             Shaping the Future of Healthcare, One Student at a Time
//           </span>
//           <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight">
//             Excellence in Medical Education,{" "}
//             <span style={{ color: YELLOW }}>Innovation</span> in Healthcare
//           </h1>
//           <button
//             className="flex w-fit items-center gap-2 bg-white px-6 py-3 font-body text-sm font-medium"
//             style={{ color: GREEN }}
//           >
//             View Our Program
//             <ArrowRight className="h-4 w-4" strokeWidth={2} />
//           </button>
//         </div>

//         <div className="flex flex-col gap-4">
//           <h3
//             className="font-display text-2xl font-bold"
//             style={{ color: YELLOW }}
//           >
//             MBBS Degrees
//           </h3>
//           {["Bachelor of Medicine", "Bachelor of Surgery"].map((item) => (
//             <a
//               key={item}
//               href="#"
//               className="flex items-center justify-between gap-6 border-b border-white/40 pb-2 font-body text-sm"
//             >
//               {item}
//               <ArrowRight className="h-4 w-4" strokeWidth={2} />
//             </a>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, GraduationCap } from "lucide-react";
// import { useHeroData } from "@/hooks/useHeroData";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function Hero() {
//   const { data, error, isLoading } = useHeroData();

//   const heroes = useMemo(() => data || [], [data]);

//   const [currentSlide, setCurrentSlide] = useState(0);

//   /**
//    * ----------------------------
//    * Auto Slide (2 seconds)
//    * ----------------------------
//    */
//   useEffect(() => {
//     if (heroes.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroes.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [heroes]);

//   /**
//    * ----------------------------
//    * Prevent invalid index
//    * ----------------------------
//    */
//   useEffect(() => {
//     if (currentSlide >= heroes.length) {
//       setCurrentSlide(0);
//     }
//   }, [heroes, currentSlide]);

//   /**
//    * ----------------------------
//    * Loading
//    * ----------------------------
//    */
//   if (isLoading) {
//     return (
//       <section className="relative flex h-[750px] items-center justify-center bg-neutral-900">
//         <div className="h-14 w-14 animate-spin rounded-full border-4 border-white/20 border-t-white" />
//       </section>
//     );
//   }

//   /**
//    * ----------------------------
//    * Error
//    * ----------------------------
//    */
//   if (error) {
//     return (
//       <section className="flex h-[500px] items-center justify-center">
//         <h2 className="text-red-500">Failed to load Hero Section.</h2>
//       </section>
//     );
//   }

//   /**
//    * ----------------------------
//    * Empty
//    * ----------------------------
//    */
//   if (!heroes.length) {
//     return (
//       <section className="flex h-[500px] items-center justify-center">
//         <h2>No Hero Found.</h2>
//       </section>
//     );
//   }

//   const currentHero = heroes[currentSlide];

//   /**
//    * ----------------------------
//    * Navigation
//    * ----------------------------
//    */

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroes.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? heroes.length - 1 : prev - 1));
//   };

//   /**
//    * ----------------------------
//    * Title Highlight
//    *
//    * Yellow color for Education
//    * ----------------------------
//    */

//   const renderTitle = (title) => {
//     return title.split("Education").map((part, index, array) => (
//       <span key={index}>
//         {part}

//         {index !== array.length - 1 && (
//           <span style={{ color: YELLOW }}>Education</span>
//         )}
//       </span>
//     ));
//   };

//   return (
//     <section id="home" className="relative overflow-hidden">
//       {/* Background Image */}

//       <div className="absolute inset-0 -z-20">
//         <Image
//           src={currentHero.image}
//           alt={currentHero.title}
//           fill
//           priority
//           sizes="100vw"
//           className="object-cover transition-all duration-700"
//         />
//       </div>

//       {/* Overlay */}

//       <div
//         className="absolute inset-0 -z-10"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0,0,0,.20) 0%, rgba(1,136,55,.70) 100%)",
//         }}
//       />

//       {/* Main Wrapper */}

//       <div className="mx-auto flex min-h-[650px] w-full max-w-[1600px] flex-col justify-between px-5 py-10 sm:px-8 md:min-h-[700px] md:px-10 lg:min-h-[750px] lg:px-20 lg:py-[50px]">
//         {/* ===========================
//             Top Navigation
//         =========================== */}

//         <div className="flex items-center justify-center gap-4 text-white">
//           <button
//             onClick={prevSlide}
//             className="text-xs font-bold uppercase tracking-widest transition hover:text-yellow-400"
//           >
//             Prev
//           </button>

//           <div className="hidden h-px w-20 bg-white/30 lg:block" />

//           <div className="flex items-center gap-3 md:gap-4">
//             {heroes.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className="flex items-center gap-3"
//               >
//                 <span
//                   className={`text-base font-bold transition-all md:text-lg ${
//                     currentSlide === index ? "" : "text-white"
//                   }`}
//                   style={currentSlide === index ? { color: YELLOW } : {}}
//                 >
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 {index !== heroes.length - 1 && (
//                   <span className="h-5 w-px bg-white/40" />
//                 )}
//               </button>
//             ))}
//           </div>

//           <div className="hidden h-px w-20 bg-white/30 lg:block" />

//           <button
//             onClick={nextSlide}
//             className="text-xs font-bold uppercase tracking-widest transition hover:text-yellow-400"
//           >
//             Next
//           </button>
//         </div>

//         {/* =====================================================
//             Content Area starts here
//             (Left + Right Card)
//             Continue in Part 2...
//         ===================================================== */}
//         {/* ============================================
//     Hero Content
// ============================================ */}

//         <div className="mt-10 rounded-sm bg-black/10 p-5 backdrop-blur-[2.5px] sm:p-8 lg:mt-0 lg:p-5 xl:p-8">
//           <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
//             {/* ================= Left Content ================= */}

//             <div className="max-w-3xl">
//               {/* Subtitle */}

//               <div className="mb-6 flex items-center gap-3">
//                 <GraduationCap
//                   size={22}
//                   className="text-white"
//                   strokeWidth={1.8}
//                 />

//                 <p className="text-sm text-white md:text-[15px]">
//                   {currentHero.subtitle}
//                 </p>
//               </div>

//               {/* Title */}

//               <h1 className="max-w-[760px] whitespace-pre-line font-display text-[38px] font-bold leading-[1.15] text-white sm:text-5xl md:text-6xl xl:text-[60px] xl:leading-[75px]">
//                 {renderTitle(currentHero.title)}
//               </h1>

//               {/* CTA */}

//               <Link
//                 href={currentHero.cta.href}
//                 className="group mt-8 inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-medium transition-all duration-300 hover:scale-[1.03]"
//                 style={{
//                   color: GREEN,
//                 }}
//               >
//                 {currentHero.cta.text}

//                 <ArrowRight
//                   size={18}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </div>

//             {/* ================= Right Card ================= */}

//             <div className="w-full max-w-[320px] flex-shrink-0">
//               <h2
//                 className="mb-6 font-display text-[28px] font-bold md:text-[30px]"
//                 style={{
//                   color: YELLOW,
//                 }}
//               >
//                 {currentHero.programHeading}
//               </h2>

//               <div className="space-y-5">
//                 {currentHero.programs?.map((program, index) => (
//                   <Link
//                     key={index}
//                     href={program.href}
//                     className="group block border-b border-white/20 pb-5 last:border-none"
//                   >
//                     {/* Program Title */}

//                     <div className="mb-3 flex items-center justify-between gap-4">
//                       <h3 className="font-display text-lg text-white transition-colors duration-300 group-hover:text-yellow-300">
//                         {program.programTitle}
//                       </h3>

//                       <ArrowRight
//                         size={22}
//                         className="flex-shrink-0 text-white transition-transform duration-300 group-hover:translate-x-1"
//                       />
//                     </div>

//                     {/* Description */}

//                     <p className="text-justify text-xs leading-5 text-white/55 md:text-[13px]">
//                       {program.programDescription}
//                     </p>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Version 2
// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight, GraduationCap } from "lucide-react";

// const GREEN = "#018837";
// const YELLOW = "#FECD2F";

// export default function Hero() {
//   const [heroes, setHeroes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const fetchHero = async () => {
//       try {
//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_ADMIN_API}/api/homepage/hero`
//         );

//         const data = await res.json();

//         setHeroes(data || []);
//       } catch (error) {
//         console.error("Failed to fetch hero:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchHero();
//   }, []);

//   useEffect(() => {
//     if (heroes.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroes.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [heroes]);

//   if (loading) {
//     return (
//       <section className="flex h-[750px] items-center justify-center bg-neutral-900">
//         <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
//       </section>
//     );
//   }

//   if (!heroes.length) return null;

//   const hero = heroes[currentSlide];

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroes.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) =>
//       prev === 0 ? heroes.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section
//       id="home"
//       className="relative overflow-hidden"
//     >
//       {/* Background */}

//       <Image
//         src={hero.image}
//         alt={hero.title}
//         fill
//         priority
//         sizes="100vw"
//         className="object-cover"
//       />

//       {/* Overlay */}

//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "linear-gradient(180deg, rgba(0,0,0,.20) 0%, rgba(1,136,55,.70) 100%)",
//         }}
//       />

//       {/* Main Container */}

//       <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1600px] flex-col justify-between px-5 py-8 sm:px-8 md:min-h-[700px] lg:min-h-[750px] lg:px-20 lg:py-[50px]">

//         {/* ===========================
//             Slider Navigation
//         =========================== */}

//         <div className="flex items-center justify-center gap-5 text-white lg:gap-16">

//           <button
//             onClick={prevSlide}
//             className="text-[13px] font-bold uppercase tracking-wider transition hover:text-yellow-300"
//           >
//             Prev
//           </button>

//           <div className="hidden h-px w-28 bg-white/30 lg:block" />

//           <div className="flex items-center gap-3 md:gap-5">

//             {heroes.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className="flex items-center gap-3"
//               >
//                 <span
//                   className={`font-display text-lg font-bold ${
//                     currentSlide === index
//                       ? ""
//                       : "text-white"
//                   }`}
//                   style={
//                     currentSlide === index
//                       ? { color: YELLOW }
//                       : {}
//                   }
//                 >
//                   {String(index + 1).padStart(2, "0")}
//                 </span>

//                 {index !== heroes.length - 1 && (
//                   <span className="h-5 w-px bg-white/40" />
//                 )}
//               </button>
//             ))}

//           </div>

//           <div className="hidden h-px w-28 bg-white/30 lg:block" />

//           <button
//             onClick={nextSlide}
//             className="text-[13px] font-bold uppercase tracking-wider transition hover:text-yellow-300"
//           >
//             Next
//           </button>

//         </div>

//         {/* ===========================
//             Hero Content
//             (Continue in Part 2)
//         =========================== */}
//                     {/* ================= Right Content ================= */}

//             <div className="w-full lg:w-[272px] lg:flex-shrink-0">
//               <h2
//                 className="mb-6 font-display text-2xl md:text-[30px] font-bold"
//                 style={{ color: YELLOW }}
//               >
//                 {hero.programHeading}
//               </h2>

//               <div className="space-y-5">
//                 {hero.programs?.map((program, index) => (
//                   <Link
//                     key={index}
//                     href={program.href || "#"}
//                     className="block border-b border-white/20 pb-5 last:border-none group"
//                   >
//                     {/* Program Title */}

//                     <div className="flex items-center justify-between gap-4">
//                       <h3 className="font-display text-base text-white transition group-hover:text-yellow-300">
//                         {program.programTitle}
//                       </h3>

//                       <ArrowRight
//                         className="w-5 h-5 text-white transition-transform duration-300 group-hover:translate-x-1"
//                         strokeWidth={2}
//                       />
//                     </div>

//                     {/* Description */}

//                     <p className="mt-3 text-xs leading-5 text-white/60 text-justify">
//                       {program.programDescription}
//                     </p>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic version 3
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

export default function Hero() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_ADMIN_API}/api/homepage/hero`,
        );

        const data = await res.json();

        setHeroes(data || []);
      } catch (error) {
        console.error("Failed to fetch hero:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  useEffect(() => {
    if (heroes.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroes]);

  if (loading) {
    return (
      <section className="flex h-[750px] items-center justify-center bg-neutral-900">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
      </section>
    );
  }

  if (!heroes.length) return null;

  const hero = heroes[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroes.length - 1 : prev - 1));
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Background Image */}

      <Image
        src={hero.image}
        alt={hero.title}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Overlay */}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,.20) 0%, rgba(1,136,55,.70) 100%)",
        }}
      />

      {/* Main Wrapper */}

      <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1600px] flex-col justify-between px-5 py-8 sm:px-8 md:min-h-[700px] lg:min-h-[750px] lg:px-20 lg:py-[50px]">
        {/* ==========================
            Slider Navigation
        ========================== */}

        <div className="flex items-center justify-center gap-5 text-white lg:gap-16">
          <button
            onClick={prevSlide}
            className="text-[13px] font-bold uppercase tracking-wider transition hover:text-yellow-300"
          >
            Prev
          </button>

          <div className="hidden h-px w-28 bg-white/30 lg:block" />

          <div className="flex items-center gap-3 md:gap-5">
            {heroes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="flex items-center gap-3"
              >
                <span
                  className={`font-display text-lg font-bold ${
                    currentSlide === index ? "" : "text-white"
                  }`}
                  style={currentSlide === index ? { color: YELLOW } : {}}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {index !== heroes.length - 1 && (
                  <span className="h-5 w-px bg-white/40" />
                )}
              </button>
            ))}
          </div>

          <div className="hidden h-px w-28 bg-white/30 lg:block" />

          <button
            onClick={nextSlide}
            className="text-[13px] font-bold uppercase tracking-wider transition hover:text-yellow-300"
          >
            Next
          </button>
        </div>

        {/* ==========================
            Hero Content Card
        ========================== */}

        <div className="mt-10 rounded-sm bg-black/10 p-5 backdrop-blur-[2.5px] sm:p-8 lg:mt-0 lg:p-5 xl:p-8">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            {/* ================= Left Content ================= */}

            <div className="max-w-[700px]">
              {/* Subtitle */}

              <div className="mb-6 flex items-center gap-3">
                <GraduationCap className="text-white" size={22} />

                <p className="text-sm text-white md:text-[14px]">
                  {hero.subtitle}
                </p>
              </div>

              {/* Title */}

              <h1 className="whitespace-pre-line font-display text-[36px] font-bold leading-tight text-white sm:text-5xl md:text-6xl xl:text-[60px] xl:leading-[75px]">
                {hero.title}
              </h1>

              {/* CTA Button */}

              <Link
                href={hero.cta?.href || "#"}
                className="mt-8 inline-flex items-center gap-3 bg-white px-6 py-4 text-sm font-medium transition hover:opacity-90"
                style={{
                  color: GREEN,
                }}
              >
                {hero.cta?.text}

                <ArrowRight size={18} strokeWidth={2} />
              </Link>
            </div>
            {/* ================= Right Content ================= */}

            <div className="w-full lg:w-[272px] lg:flex-shrink-0">
              <h2
                className="mb-6 font-display text-2xl font-bold md:text-[30px]"
                style={{ color: YELLOW }}
              >
                {hero.programHeading}
              </h2>

              <div className="space-y-5">
                {hero.programs?.map((program, index) => (
                  <Link
                    key={index}
                    href={program.href || "#"}
                    className="group block border-b border-white/20 pb-5 last:border-none"
                  >
                    {/* Program Title */}

                    <div className="flex items-center justify-between gap-4">
                      <h3 className="font-display text-base text-white transition group-hover:text-yellow-300">
                        {program.programTitle}
                      </h3>

                      <ArrowRight
                        className="h-5 w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Program Description */}

                    <p className="mt-3 text-justify text-xs leading-5 text-white/60">
                      {program.programDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
