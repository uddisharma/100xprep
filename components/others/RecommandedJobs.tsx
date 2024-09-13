import React from "react";
import { GlowingStarsDescription, GlowingStarsTitle } from "../ui/globalstars";

const RecommandedJobs = () => {
  return (
    <div className="h-[300px] bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4  max-h-[20rem] w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600">
      <div className="w-full mb-10">
        <GlowingStarsTitle>Recommended Jobs</GlowingStarsTitle>
        <GlowingStarsDescription className="text-[14px] font-normal w-full text-[#71717a]">
          Based on your skills and preferences
        </GlowingStarsDescription>
      </div>
      <div className="flex items-center justify-between cursor-pointer">
        <div>
          <div className="w-full mr-4">Senior Frontend Developer</div>
          <div className="w-full text-left text-[#71717a] text-[14px]">
            TechCorp
          </div>
        </div>

        <div className="text-right">Remote</div>
      </div>
      <div className="flex items-center justify-between mt-5 cursor-pointer">
        <div>
          <div className="w-full mr-4">Full Stack Engineer</div>
          <div className="w-full text-left text-[#71717a] text-[14px]">
            TechCorp
          </div>
        </div>

        <div className="text-right">Remote</div>
      </div>
      <div className="flex items-center justify-between mt-5 cursor-pointer">
        <div>
          <div className="w-full mr-4">DevOps Engineer</div>
          <div className="w-full text-left text-[#71717a] text-[14px]">
            TechCorp
          </div>
        </div>

        <div className="text-right">Remote</div>
      </div>
    </div>
  );
};

export default RecommandedJobs;
