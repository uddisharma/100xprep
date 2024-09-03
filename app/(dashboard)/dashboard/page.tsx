import { GlowingStarsBackgroundCardPreview } from '@/components/others/Card'
import InterviewProgress from '@/components/others/InterviewProgress'
import RecommandedJobs from '@/components/others/RecommandedJobs'
import UpcomingInterviews from '@/components/others/UpcomingInterviews'
import React from 'react'

const Page = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 lg:mt-0 md:mt-0">
                    {[...new Array(3)].map((i) => (
                        <GlowingStarsBackgroundCardPreview key={i} />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
                    <InterviewProgress />
                    <RecommandedJobs />
                </div>
                <div className="w-full mt-5">
                    <div
                        className="h-[300px] bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4  max-h-[20rem] w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600"
                    >
                        <UpcomingInterviews />
                    </div>
                </div>
                <div className="w-full mt-5 md:hidden lg:hidden">
                    <div
                        className="h-[50px] "
                    >
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Page