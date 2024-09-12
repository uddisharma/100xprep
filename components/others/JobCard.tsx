import React from 'react'
import BottomGradient from './BottomGradient'
import Link from 'next/link'
import { JobType } from '@/types/jobs'

function daysUntil(targetDate: string): number {
    const target = new Date(targetDate);
    const today = new Date();

    const diffInMs = target.getTime() - today.getTime();

    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));

    return diffInDays;
}

const JobCard = ({ job }: { job: JobType }) => {
    return (
        <Link href={`/dashboard/jobs/view?id=${job?.id}`} className={`w-full`} key={job?.id}>
            <div className={`inline-flex h-full w-full animate-shimmer items-center justify-between  bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4  max-h-[20rem] rounded-xl border border-[#eaeaea] dark:border-[#71717a] `}>
                <div>
                    <div className="text-black dark:text-white font-bold text-[16px] mb-1">{job?.title}</div>
                    <div className="text-[#71717a] text-[14px] mb-1">{job?.company}</div>
                    <div className="text-[#71717a] text-[14px]">{job?.location}</div>
                    <div className="text-[#71717a] text-[14px]">{job?.salary}</div>
                </div>
                <div className="flex flex-col items-end">
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-5 "
                    >
                        Apply
                        <BottomGradient />
                    </button>
                    <div className="text-[#71717a] text-[14px] mt-5">-{daysUntil(job?.endDate ? new Date(job.endDate).toISOString().split('T')[0] : 'N/A') === 0 ? "Closed" : daysUntil(job?.endDate ? new Date(job.endDate).toISOString().split('T')[0] : 'N/A')} days</div>
                </div>
            </div>
        </Link>
    )
}

export default JobCard


