import React from 'react'
import BottomGradient from "@/components/others/BottomGradient"
import Image from "next/image";
import Inputs from './Inputs'
import { UserProfile } from '@/types/user';

const Profile = ({ user }: { user: UserProfile }) => {

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/5 space-y-4 p-4 rounded-lg  w-full animate-shimmer items-center justify-between bg-[linear-gradient(110deg,#333_0.6%,#222)] border border-[#eaeaea] dark:border-[#71717a]">
                <div className="rounded-lg overflow-hidden">
                    <Image
                        height={300}
                        width={300}
                        loading='lazy'
                        src={user?.photo ?? "/logo.jpg?height=200&width=200"}
                        alt="Deepak"
                        className="w-full h-auto object-cover"
                    />
                </div>

                <a target='_blank' href={user?.resume ?? ""}>
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] mt-5"
                        type="button"
                    >
                        <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                            Download Resume
                        </span>
                        <BottomGradient />
                    </button>
                </a>
            </div>
            <div className="md:w-2/3 space-y-6  p-4 rounded-lg  w-full animate-shimmer items-center justify-between  bg-[linear-gradient(110deg,#333_0.6%,#222)]    border border-[#eaeaea] dark:border-[#71717a]">
                <form className="my-8" >
                    <Inputs user={user} />
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                </form>
            </div>
        </div>
    )
}

export default Profile