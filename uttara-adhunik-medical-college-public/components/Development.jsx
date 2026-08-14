"use client";

import { useEffect, useState } from "react";

export default function UnderDevelopment() {
  const targetDate = new Date("2026-12-31T23:59:59").getTime();

  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-800">
      {/* Background Decoration */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#5A0C3D]/5 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />

      {/* Header */}
      <header className="relative z-10 border-b border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5A0C3D] shadow-lg shadow-[#5A0C3D]/20">
              <span className="text-2xl font-bold text-white">U</span>
            </div>

            <div>
              <h1 className="text-base font-bold leading-tight text-[#5A0C3D] sm:text-lg">
                Uttara Adhunik
              </h1>

              <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-500">
                Medical College
              </p>
            </div>
          </div>

          {/* Header Button */}
          <a
            href="mailto:info@uamc.edu.bd"
            className="hidden rounded-full border border-[#5A0C3D]/20 px-5 py-2.5 text-sm font-semibold text-[#5A0C3D] transition hover:bg-[#5A0C3D] hover:text-white sm:inline-flex"
          >
            Contact Us
          </a>
        </div>
      </header>

      {/* Main */}
      <section className="relative z-10 flex min-h-[calc(100vh-81px)] items-center px-5 py-14 sm:px-8 lg:px-10">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5A0C3D]/10 bg-[#5A0C3D]/5 px-4 py-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5A0C3D]/50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#5A0C3D]" />
              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#5A0C3D]">
                Website Under Development
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Excellence in
              <span className="block text-[#5A0C3D]">Medical Education</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg lg:mx-0">
              We are creating a new digital experience for Uttara Adhunik
              Medical College. Our new website will provide students, faculty,
              patients, and visitors with easier access to information and
              services.
            </p>

            {/* Progress */}
            <div className="mx-auto mt-8 max-w-xl lg:mx-0">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-700">
                  Website Progress
                </span>

                <span className="font-bold text-[#5A0C3D]">75%</span>
              </div>

              <div className="h-2.5 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-[#5A0C3D] transition-all duration-700"
                  style={{ width: "75%" }}
                />
              </div>
            </div>

            {/* Countdown */}
            <div className="mt-10 grid max-w-xl grid-cols-4 gap-2 sm:gap-4">
              {[
                ["Days", timeLeft.days],
                ["Hours", timeLeft.hours],
                ["Minutes", timeLeft.minutes],
                ["Seconds", timeLeft.seconds],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-5"
                >
                  <div className="text-2xl font-extrabold text-[#5A0C3D] sm:text-3xl">
                    {String(value).padStart(2, "0")}
                  </div>

                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400 sm:text-xs">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <a
                href="mailto:info@uamc.edu.bd"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#5A0C3D] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#5A0C3D]/20 transition hover:-translate-y-0.5 hover:bg-[#46082f] sm:w-auto"
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                Get in Touch
              </a>

              <a
                href="#"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-[#5A0C3D]/30 hover:text-[#5A0C3D] sm:w-auto"
              >
                Visit Us
              </a>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            {/* Main Card */}
            <div className="relative mx-auto max-w-lg">
              {/* Decorative Circle */}
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[18px] border-[#5A0C3D]/5" />

              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full border-[25px] border-blue-500/5" />

              {/* Medical Illustration Card */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white bg-white p-8 shadow-2xl shadow-slate-300/40">
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#5A0C3D] to-[#7d1859] p-8">
                  {/* Medical Cross */}
                  <div className="flex justify-center">
                    <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-sm">
                      <div className="relative h-16 w-16">
                        <div className="absolute left-1/2 top-0 h-16 w-5 -translate-x-1/2 rounded-md bg-white" />
                        <div className="absolute left-0 top-1/2 h-5 w-16 -translate-y-1/2 rounded-md bg-white" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-white">
                      A New Digital Experience
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      Designed to connect our academic community with better
                      information, services, and opportunities.
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {[
                      {
                        icon: "🎓",
                        text: "Education",
                      },
                      {
                        icon: "🏥",
                        text: "Healthcare",
                      },
                      {
                        icon: "🔬",
                        text: "Research",
                      },
                    ].map((item) => (
                      <div
                        key={item.text}
                        className="rounded-xl bg-white/10 p-3 text-center backdrop-blur-sm"
                      >
                        <div className="text-xl">{item.icon}</div>

                        <p className="mt-1 text-[10px] font-semibold text-white/80">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Info */}
                <div className="mt-5 flex items-center justify-between rounded-xl bg-slate-50 px-5 py-4">
                  <div>
                    <p className="text-xs font-medium text-slate-400">
                      Coming Soon
                    </p>

                    <p className="mt-1 text-sm font-bold text-slate-800">
                      uamc.edu.bd
                    </p>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5A0C3D]/10">
                    <svg
                      className="h-5 w-5 text-[#5A0C3D]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-8 lg:px-10 sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Uttara Adhunik Medical College. All
            rights reserved.
          </p>

          <p className="text-xs text-slate-400">
            Excellence in Medical Education & Healthcare
          </p>
        </div>
      </footer>
    </main>
  );
}
