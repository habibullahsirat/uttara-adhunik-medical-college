"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  ArrowRight,
  Loader2,
  IdCard,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

const DISPLAY_FONT =
  "var(--font-display), 'Space Grotesk', system-ui, sans-serif";
const BODY_FONT = "var(--font-body), 'Inter', system-ui, sans-serif";

// Adjust to match your real API base / endpoint.
const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export default function StudentLoginPage() {
  const router = useRouter();
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const canSubmit =
    studentId.trim() !== "" && password.trim() !== "" && !loading;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!canSubmit) {
      setError("Enter both your student ID and password.");
      return;
    }

    setLoading(true);
    try {
      // Prototype lookup: fetch the student list and match by ID.
      // Swap for `${API_BASE}/student/${studentId}` once your backend
      // supports a direct lookup — cheaper than fetching everyone.
      const res = await fetch(`${API_BASE}/api/student-profile`, {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Unable to reach the student directory.");
      const students = await res.json();
      console.log(students);

      const match = students?.find(
        (s) =>
          String(s?.studentId ?? "")
            .trim()
            .toLowerCase() === studentId.trim().toLowerCase(),
      );

      if (!match) {
        setError("No student found with that ID.");
        setLoading(false);
        return;
      }

      // Prototype only — password is not verified against the backend yet.
      localStorage.setItem("studentAuth", "true");
      localStorage.setItem("studentId", match?.studentId ?? studentId);
      localStorage.setItem("studentMongoId", match?._id ?? "");
      localStorage.setItem("studentName", match?.name ?? "");
      localStorage.setItem("studentImage", match?.image ?? "");
      router.push("/student");
    } catch (err) {
      setError(err?.message || "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex bg-[#F7F5F2]"
      style={{ fontFamily: BODY_FONT }}
    >
      {/* LEFT — brand panel */}
      <div className="hidden lg:flex lg:w-[46%] relative overflow-hidden bg-[#0E1116]">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #2A2E38 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px]">
          <span className="absolute inset-0 rounded-full border border-[#E8A33D]/20" />
          <span className="absolute inset-8 rounded-full border border-[#E8A33D]/25" />
          <span className="absolute inset-16 rounded-full border border-[#E8A33D]/30" />
          <span className="pulse-ring absolute inset-8 rounded-full border border-[#E8A33D]/40" />
          <span className="absolute inset-[172px] w-3 h-3 rounded-full bg-[#E8A33D]" />
        </div>

        <div className="relative z-10 flex flex-col justify-between p-12 w-full">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E8A33D] flex items-center justify-center">
              <GraduationCap
                className="w-5 h-5 text-[#0E1116]"
                strokeWidth={2.5}
              />
            </div>
            <span
              className="text-[#F7F5F2] text-lg tracking-tight"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Student Portal
            </span>
          </div>

          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4ADE80] animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#9CA3AF]">
                Portal online
              </span>
            </div>
            <h1
              className="text-[#F7F5F2] text-[2.6rem] leading-[1.08] tracking-tight mb-4"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Your student
              <br />
              record, in one
              <br />
              place.
            </h1>
            <p className="text-[#9CA3AF] text-[15px] leading-relaxed">
              Sign in with your student ID and password to view and update your
              profile details.
            </p>
          </div>

          <p className="text-[#5B616E] text-xs">
            © {new Date().getFullYear()} Student Portal. For enrolled students
            only.
          </p>
        </div>
      </div>

      {/* RIGHT — form panel */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">
          <div className="lg:hidden flex items-center gap-3 mb-10">
            <div className="w-9 h-9 rounded-xl bg-[#0E1116] flex items-center justify-center">
              <GraduationCap
                className="w-4 h-4 text-[#E8A33D]"
                strokeWidth={2.5}
              />
            </div>
            <span
              className="text-[#0E1116] text-base tracking-tight"
              style={{ fontFamily: DISPLAY_FONT }}
            >
              Student Portal
            </span>
          </div>

          <h2
            className="text-[#0E1116] text-2xl mb-1.5 tracking-tight"
            style={{ fontFamily: DISPLAY_FONT }}
          >
            Welcome, student
          </h2>
          <p className="text-[#6B7280] text-sm mb-8">
            Enter your student ID and password to continue.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Student ID */}
            <div>
              <label
                htmlFor="studentId"
                className="block text-xs font-medium text-[#374151] mb-2"
              >
                Student ID
              </label>
              <div className="relative">
                <IdCard className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  id="studentId"
                  type="text"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  placeholder="e.g. UAMC-2024-118"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E5E3DE] bg-white text-[#0E1116] text-sm placeholder:text-[#9CA3AF] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium text-[#374151] mb-2"
              >
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-3 rounded-xl border border-[#E5E3DE] bg-white text-[#0E1116] text-sm placeholder:text-[#9CA3AF] outline-none focus:border-[#E8A33D] focus:ring-4 focus:ring-[#E8A33D]/12 transition-all"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] transition-colors"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <p className="text-[13px] text-[#DC2626] bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-3.5 py-2.5">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0E1116] text-[#F7F5F2] text-sm font-medium tracking-wide transition-all hover:bg-[#1A1D24] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Checking your ID...
                </>
              ) : (
                <>
                  Sign in to my portal
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-xs text-[#9CA3AF] mt-8">
            For demo purposes, any password is accepted — only your student ID
            needs to match our records.
          </p>
        </div>
      </div>

      <style jsx>{`
        .pulse-ring {
          animation: pulse-ring 2.8s cubic-bezier(0.2, 0.6, 0.4, 1) infinite;
        }
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          80% {
            transform: scale(1.4);
            opacity: 0;
          }
          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
