import { GlowingStarsBackgroundCardPreview } from '@/components/others/Card'
import InterviewProgress from '@/components/others/InterviewProgress'
import RecommandedJobs from '@/components/others/RecommandedJobs'
import { RequestInterview } from '@/components/others/RequestInterview'
import UpcomingInterviews from '@/components/others/UpcomingInterviews'
import { GlowingStarsDescription, GlowingStarsTitle } from '@/components/ui/globalstars'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import React from 'react'

export function getGreeting() {
    const now = new Date();
    const hours = now.getHours();
    const morningEnd = 12;
    const afternoonEnd = 17;
    const eveningEnd = 19;
    if (hours < morningEnd) {
        return 'Good Morning';
    } else if (hours < afternoonEnd) {
        return 'Good Afternoon';
    } else if (hours < eveningEnd) {
        return 'Good Evening';
    } else {
        return 'Good Night';
    }
}

const Page = async () => {

    const sessions = await getServerSession()

  return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
                <div
                    className='relative flex items-center justify-between h-[300px] bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4  max-h-[20rem] w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 mb-0 lg:mb-3 md:mb-3 mt-3 lg:mt-0 md:mt-0'
                >
                    <div className="">
                        <div className='mt-4'>
                            <GlowingStarsTitle>
                                {getGreeting() + '👋 ' + sessions?.user?.name}
                            </GlowingStarsTitle>

                            <GlowingStarsDescription className="text-[14px] font-normal w-full text-[#71717a]">
                                The only way to do great work is to love what you do.
                            </GlowingStarsDescription>
                        </div>

                        <div className='w-full md:w-9/12 mt-3'>
                            <RequestInterview />
                        </div>
                    </div>
                    <div className="hidden lg:block md:block">
                        <div className="relative">
                            <Image
                                src="/remote.png"
                                alt="Remote"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-2 lg:mt-0 md:mt-0">
                    {[...new Array(3)].map((i) => (
                        <GlowingStarsBackgroundCardPreview key={i} />
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
                    <InterviewProgress />
                    <RecommandedJobs />
                </div>
                <div className="w-full mt-3">
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