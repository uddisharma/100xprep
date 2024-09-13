"use client";
import React from "react";
import {
  GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle,
} from "@/components/ui/globalstars";

export function GlowingStarsBackgroundCardPreview() {
  return (
    <div className="flex items-center justify-center antialiased">
      <GlowingStarsBackgroundCard>
        <div className="flex gap-5 items-center justify-start">
          <GlowingStarsDescription className="text-[14px] font-normal">
            Total Interview
          </GlowingStarsDescription>
          <GlowingStarsTitle>12</GlowingStarsTitle>
        </div>

        <div className="flex justify-between items-end">
          <GlowingStarsDescription className="text-[#71717a]">
            Total Interview in this week
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );
};
