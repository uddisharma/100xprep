import React from 'react'
import BottomGradient from './BottomGradient'
import Link from 'next/link'

const InterviewTaken = () => {
    return (
        <Link href="/dashboard/interviews/view">
            <div className={`inline-flex h-full w-full animate-shimmer items-center justify-between  bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4  max-h-[20rem] rounded-xl border border-[#eaeaea] dark:border-[#71717a] cursor-pointer mt-5`}>
                <div>
                    <div className="text-black dark:text-white font-bold text-[16px] mb-1">JavaScript , TypeScript , React.js</div>
                    <div className="text-[#71717a] text-[14px] mb-1">Himanshu</div>
                    <div className="text-[#71717a] text-[14px]">Google meet</div>
                    <div className="text-[#71717a] text-[14px]">Rating : 7.8</div>
                </div>
                <div className="flex flex-col items-end">
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-5 text-[10px] lg:text-[16px]"

                    >
                        Mark as Completed
                        <BottomGradient />
                    </button>
                    <div className="text-[#71717a] text-[14px] mt-5">6d</div>
                </div>
            </div>
        </Link>
    )
}
export default InterviewTaken


