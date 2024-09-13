import React from "react";
import { GlowingStarsDescription, GlowingStarsTitle } from "../ui/globalstars";
import { Progress } from "../ui/progress";

const InterviewProgress = () => {
  return (
    <div className="h-[300px] bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4  max-h-[20rem] w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600">
      <div className="w-full mb-10">
        <GlowingStarsTitle>Interview Progress</GlowingStarsTitle>
        <GlowingStarsDescription className="text-[14px] font-normal w-full text-[#71717a]">
          Your mock interview rating
        </GlowingStarsDescription>
      </div>
      <div className="flex items-center">
        <div className="w-40 mr-4">Technical Skills</div>
        <Progress value={90} className="flex-grow" />
        <div className="ml-4 w-10 text-right">90%</div>
      </div>
      <div className="flex items-center mt-5">
        <div className="w-40 mr-4">Behavioral</div>
        <Progress value={80} className="flex-grow" />
        <div className="ml-4 w-10 text-right">90%</div>
      </div>
      <div className="flex items-center mt-5">
        <div className="w-40 mr-4">System Design</div>
        <Progress value={70} className="flex-grow" />
        <div className="ml-4 w-10 text-right">90%</div>
      </div>
    </div>
  );
};

export default InterviewProgress;
