import React from "react";
import { GlowingStarsDescription, GlowingStarsTitle } from "../ui/globalstars";

const UpcomingInterviews = () => {
  return (
    <div>
      <div className="w-full mb-10">
        <GlowingStarsTitle>Upcoming Mock Interviews</GlowingStarsTitle>
        <GlowingStarsDescription className="text-[14px] font-normal w-full text-[#71717a]">
          Your scheduled practice sessions
        </GlowingStarsDescription>
      </div>
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <div className="w-full mr-4">System Design Interview</div>
          <div className="w-full text-left text-[#71717a] text-[14px]">
            2023-06-15
          </div>
        </div>
        <div className="text-right">10:00 AM</div>
      </div>
      <div className="flex items-center justify-between mt-5 cursor-pointer">
        <div>
          <div className="w-full mr-4">Algorithms and Data Structures</div>
          <div className="w-full text-left text-[#71717a] text-[14px]">
            2023-06-15
          </div>
        </div>

        <div className="text-right">10:00 AM</div>
      </div>
      <div className="flex items-center justify-between mt-5 cursor-pointer">
        <div>
          <div className="w-full mr-4">Behavioral Interview</div>
          <div className="w-full text-left text-[#71717a] text-[14px]">
            2023-06-15
          </div>
        </div>

        <div className="text-right">10:00 AM</div>
      </div>
    </div>
  );
};

export default UpcomingInterviews;
