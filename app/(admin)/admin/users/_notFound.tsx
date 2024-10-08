import BottomGradient from "@/components/others/BottomGradient";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="mt-10 w-full flex justify-center items-center">
      <div>
        <p className="mb-4 text-md dark:text-white">Users not found.</p>
        <Link href="/admin/handbooks">
          <button className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]">
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              Go Back
            </span>
            <BottomGradient />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
