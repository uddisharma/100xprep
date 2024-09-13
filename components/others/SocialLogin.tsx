"use client";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import React from "react";
import BottomGradient from "./BottomGradient";
import { signIn } from "next-auth/react";

const SocialLogin = () => {
  const [loading, setLoading] = React.useState<{
    github: boolean;
    google: boolean;
  }>({
    github: false,
    google: false,
  });
  return (
    <div className="flex flex-col space-y-4">
      <button
        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        onClick={async () => {
          setLoading({ ...loading, github: true });
          await signIn("github");
          setLoading({ ...loading, github: false });
        }}
      >
        <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
          {loading.github ? "Loading..." : "GitHub"}
        </span>
        <BottomGradient />
      </button>
      <button
        className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
        onClick={async () => {
          setLoading({ ...loading, google: true });
          await signIn("google");
          setLoading({ ...loading, google: false });
        }}
      >
        <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
          {loading.google ? "Loading..." : "Google"}
        </span>
        <BottomGradient />
      </button>
    </div>
  );
};

export default SocialLogin;
