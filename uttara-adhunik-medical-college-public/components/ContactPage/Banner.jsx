import React from "react";

export default function Banner() {
  return (
    <section
      className="relative flex min-h-[350px] items-end bg-cover bg-center px-5 py-10 lg:min-h-[500px] lg:px-20 lg:py-20"
      style={{
        backgroundImage: "url('/assets/contact-banner.png')",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-end justify-between gap-8 bg-[rgba(1,136,55,0.3)] px-6 py-8 shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[1px] lg:min-h-[327px] lg:px-[50px] lg:py-5">
        <div className="flex flex-col justify-end">
          {/* Breadcrumb */}
          <div className="mb-3 text-sm font-medium text-black lg:text-xl">
            <span>HOME</span>
            <span className="mx-1">&gt;</span>
            <span className="text-[#018837]">Contact Us</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl font-light leading-none text-[#262626] sm:text-5xl lg:text-[70px] lg:leading-[62px]">
            Contact with <span className="font-bold text-[#018837]">UAMC</span>
          </h1>
        </div>

        {/* Logo */}
        <img
          src="/assets/uamc-logo.png"
          alt="UAMC"
          className="hidden h-[180px] w-[180px] object-contain lg:block"
        />
      </div>
    </section>
  );
}
