import BottomGradient from "@/components/others/BottomGradient";
import HandbookEditForm from "@/components/others/hanbook/EditForm";
import UserEditForm from "@/components/others/user/UserEditForm";
import { Cover } from "@/components/ui/cover";
import { getHandbookById } from "@/lib/getDetails/handbooks";
import { getUserById } from "@/lib/getDetails/user";
import { HandbookType } from "@/types";
import { UserProfile } from "@/types/user";
import { IconNotes } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

export default async function EditHandBook({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const id = searchParams["id"] || "";

  const user: UserProfile | null = await getUserById(id as string);

  if (!user) return notFound();

  return (
    <div className="w-full">
      <div className=" p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
        <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
          <h2 className="text-3xl font-bold text-white">
            <Cover>Update User</Cover>
          </h2>
          <div className="w-full md:w-[200px]">
            <Link href="/admin/users">
              <div className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-2 w-full mt-5 lg:mt-0 flex items-center justify-center gap-2 cursor-pointer">
                <IconNotes className="w-4 h-4" />
                <span className="flex-shrink-0">All Users</span>
                <BottomGradient />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/5 space-y-4 p-4 rounded-lg  w-full animate-shimmer items-center justify-between bg-[linear-gradient(110deg,#333_0.6%,#222)] border border-[#eaeaea] dark:border-[#71717a]">
            <div className="rounded-lg overflow-hidden">
              <Image
                height={300}
                width={300}
                loading="lazy"
                src={user?.photo ?? "/user.png?height=200&width=200"}
                alt="Deepak"
                className="w-full h-auto object-cover"
              />
            </div>

            <a target="_blank" href={user?.resume ?? ""}>
              <button
                className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] mt-5"
                type="button"
              >
                <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                  View Resume
                </span>
                <BottomGradient />
              </button>
            </a>
          </div>
          <div className="md:w-2/3 space-y-6  p-4 rounded-lg  w-full animate-shimmer items-center justify-between  bg-[linear-gradient(110deg,#333_0.6%,#222)]    border border-[#eaeaea] dark:border-[#71717a]">
            <form className="my-8">
              <UserEditForm user={user} />
              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
