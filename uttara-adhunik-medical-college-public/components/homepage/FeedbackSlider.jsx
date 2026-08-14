"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const GREEN = "#018837";
const YELLOW = "#FECD2F";

function getItemsPerView(width) {
  if (width < 768) return 1; // mobile
  if (width < 1024) return 2; // tablet
  return 3; // desktop
}

export default function FeedbackSlider({ reviews }) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [page, setPage] = useState(0);
  const autoplayRef = useRef(null);

  // Track viewport size to decide how many cards show per slide
  useEffect(() => {
    function handleResize() {
      setItemsPerView(getItemsPerView(window.innerWidth));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.max(1, Math.ceil(reviews.length / itemsPerView));

  // Keep page in range whenever itemsPerView changes (e.g. resize)
  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const goToPage = useCallback(
    (index) => {
      const next = ((index % totalPages) + totalPages) % totalPages;
      setPage(next);
    },
    [totalPages],
  );

  const nextSlide = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  // Auto-advance, right to left, every 5s
  useEffect(() => {
    if (totalPages <= 1) return;
    autoplayRef.current = setInterval(nextSlide, 2000);
    return () => clearInterval(autoplayRef.current);
  }, [nextSlide, totalPages]);

  return (
    <div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${page * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div
              key={pageIndex}
              className="grid w-full shrink-0 grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
              {reviews
                .slice(
                  pageIndex * itemsPerView,
                  pageIndex * itemsPerView + itemsPerView,
                )
                .map((review) => (
                  <FeedbackCard key={review._id} review={review} />
                ))}
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          SLIDER DOTS
      ========================================== */}
      {totalPages > 1 && (
        <div className="mt-[48px] flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => goToPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === page ? "w-6 bg-[#FECD2F]" : "w-2 bg-[#444444]/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FeedbackCard({ review }) {
  const rating = Math.min(5, Math.max(0, Number(review.rating) || 0));

  return (
    <article
      className="
        relative
        flex
        min-h-[317px]
        flex-col
        bg-white
        px-6
        py-10
        sm:px-8
        md:px-10
      "
    >
      {/* RATING */}
      <div
        className="flex items-center gap-[4px]"
        aria-label={`${rating} out of 5 stars`}
      >
        {Array.from({ length: 5 }).map((_, index) => {
          const filled = index < rating;

          return (
            <Star
              key={index}
              className="h-[16px] w-[16px]"
              strokeWidth={1.5}
              fill={filled ? YELLOW : "transparent"}
              color={YELLOW}
            />
          );
        })}
      </div>

      {/* REVIEW */}
      <p
        className="
          mt-[21px]
          max-w-[340px]
          whitespace-pre-line
          text-[16px]
          leading-[26px]
          sm:text-[17px]
          sm:leading-[28px]
          md:text-[18px]
        "
        style={{
          color: "#444444",
          fontFamily: "var(--font-inter)",
        }}
      >
        {review.review}
      </p>

      {/* AUTHOR */}
      <div className="mt-auto flex items-center pt-8">
        <div className="relative h-[50px] w-[50px] shrink-0 overflow-hidden rounded-full bg-[#eeeeee]">
          {review.image ? (
            <Image
              src={review.image}
              alt={review.name || "Student"}
              fill
              sizes="50px"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#018837] text-sm font-semibold text-white">
              {review.name?.charAt(0)?.toUpperCase() || "S"}
            </div>
          )}
        </div>

        <div className="ml-[10px] min-w-0">
          <p
            className="
              truncate
              text-[16px]
              font-bold
              leading-5
              sm:text-[17.8px]
            "
            style={{
              color: GREEN,
              fontFamily: "var(--font-bitter)",
            }}
          >
            {review.name}
          </p>

          <p
            className="
              mt-[6px]
              truncate
              text-[14px]
              leading-[24px]
              sm:text-[15px]
              sm:leading-[27px]
            "
            style={{
              color: "#444444",
              fontFamily: "var(--font-inter)",
            }}
          >
            {review.designation}
          </p>
        </div>
      </div>

      {/* QUOTE */}
      <div
        aria-hidden="true"
        className="
          absolute
          bottom-[25px]
          right-[25px]
          select-none
          text-[64px]
          leading-none
          sm:bottom-[30px]
          sm:right-[30px]
          sm:text-[70px]
        "
        style={{
          color: GREEN,
          fontFamily: "var(--font-bitter)",
        }}
      >
        ”
      </div>
    </article>
  );
}
