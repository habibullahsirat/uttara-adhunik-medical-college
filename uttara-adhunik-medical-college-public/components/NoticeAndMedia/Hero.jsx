export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#DCEEE1] to-[#EAF5EC]">
      <div className="relative mx-auto max-w-[1440px] px-8 py-14">
        <div className="relative flex flex-wrap items-end justify-between gap-6 bg-[#018837]/10 px-10 py-10 backdrop-blur-sm">
          {/* Left Content */}
          <div>
            <p className="flex items-center gap-1 text-[16px] font-medium text-black">
              HOME <span className="text-black/50">›</span>{" "}
              <span className="text-[#018837]">Notice &amp; Media</span>
            </p>

            <h1 className="mt-2 font-serif text-[44px] font-light leading-none text-[#262626] md:text-[64px]">
              Notice <span className="font-bold text-[#018837]">UAMC</span>
            </h1>
          </div>

          {/* Right Side Image */}
          <img
            src="/logo2.png"
            alt="UAMC"
            className="
              h-24
              w-24
              shrink-0
              rounded-full
              object-cover
              md:h-32
              md:w-32
            "
          />
        </div>
      </div>
    </section>
  );
}
