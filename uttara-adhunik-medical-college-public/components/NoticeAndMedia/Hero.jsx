// export default function Hero() {
//   return (
//     <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#DCEEE1] to-[#EAF5EC]">
//       <div className="relative mx-auto max-w-[1440px] px-8 py-14">
//         <div className="relative flex flex-wrap items-end justify-between gap-6 bg-[#018837]/10 px-10 py-10 backdrop-blur-sm">
//           {/* Left Content */}
//           <div>
//             <p className="flex items-center gap-1 text-[16px] font-medium text-black">
//               HOME <span className="text-black/50">›</span>{" "}
//               <span className="text-[#018837]">Notice &amp; Media</span>
//             </p>

//             <h1 className="mt-2 font-serif text-[44px] font-light leading-none text-[#262626] md:text-[64px]">
//               Notice <span className="font-bold text-[#018837]">UAMC</span>
//             </h1>
//           </div>

//           {/* Right Side Image */}
//           <img
//             src="/logo2.png"
//             alt="UAMC"
//             className="
//               h-24
//               w-24
//               shrink-0
//               rounded-full
//               object-cover
//               md:h-32
//               md:w-32
//             "
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// Dynamic Version
import Image from "next/image";

const GREEN = "#018837";

async function getHeroData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/notice-media/hero`,
    { cache: "no-store" },
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] || null;
}

async function getSiteSetting() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_ADMIN_API}/api/site-setting`,
    { cache: "no-store" },
  );

  if (!res.ok) return null;

  const data = await res.json();
  return data?.[0] || null;
}

export default async function Hero() {
  const [hero, siteSetting] = await Promise.all([
    getHeroData(),
    getSiteSetting(),
  ]);

  // Dynamic title
  // Example: "Notice UAMC"
  const titleWords = hero?.title?.trim().split(/\s+/) || ["Notice", "UAMC"];

  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(" ");

  return (
    <section
      className="
        relative
        isolate
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
      "
    >
      {/* =========================================
          BACKGROUND IMAGE
      ========================================== */}
      {hero?.image ? (
        <Image
          src={hero.image}
          alt={hero?.title || "Notice UAMC"}
          fill
          priority
          sizes="100vw"
          className="
            -z-10
            object-cover
            object-center
          "
        />
      ) : (
        <div
          className="
            absolute
            inset-0
            -z-10
            bg-gradient-to-br
            from-[#DCEEE1]
            to-[#EAF5EC]
          "
        />
      )}

      {/* Optional light overlay for better readability */}
      <div
        className="
          absolute
          inset-0
          -z-10
          bg-white/10
        "
      />

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
        "
        style={{
          backgroundColor: "rgba(1, 136, 55, 0.3)",
        }}
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

              <span>NOTICE &amp; MEDIA</span>

              <span>&gt;&gt;</span>

              <span className="text-[#018837]" style={{ color: GREEN }}>
                Notice
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
                <span>{firstWord?.toUpperCase()}</span>

                {restWords && (
                  <span
                    className="
                      ml-2

                      sm:ml-2.5

                      font-bold
                      text-[#018837]
                    "
                    style={{ color: GREEN }}
                  >
                    {restWords.toUpperCase()}
                  </span>
                )}
              </h1>
            </div>
          </div>

          {/* =========================================
              RIGHT LOGO
          ========================================== */}
          {siteSetting?.image && (
            <div
              className="
                relative

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
              <Image
                src={siteSetting.image}
                alt={siteSetting?.site_name || "UAMC Logo"}
                fill
                sizes="
                  (max-width: 639px) 75px,
                  (max-width: 767px) 95px,
                  (max-width: 1023px) 120px,
                  (max-width: 1279px) 190px,
                  250px
                "
                className="
                  object-contain
                  object-bottom
                "
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
