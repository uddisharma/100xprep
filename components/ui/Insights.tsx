import { IconUserShield } from "@tabler/icons-react";
import React from "react";

const Insights = () => {
  return (
    <div>
      {[...new Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="flex py-20 items-center justify-center antialiased"
        >
          <div>Next.js 14</div>
          <div className="flex justify-between items-end">
            <div>
              The power of full-stack to the frontend. Read the release notes.
            </div>
            <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
              <IconUserShield className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Insights;
