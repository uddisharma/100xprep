import dynamic from "next/dynamic";
import { RequestInterview } from "@/components/others/RequestInterview";
import { Cover } from "@/components/ui/cover";
import { GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/globalstars";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

const InterviewsGiven = dynamic(() => import('@/components/others/interview/Given'), { ssr: true })
const InterviewsTaken = dynamic(() => import('@/components/others/interview/Taken'), { ssr: true })

const Page = () => {
    return (
        <div className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-5 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
                <div className="w-full md:hidden lg:hidden">
                    <div
                        className="h-[5px] "
                    >
                    </div>
                </div>

                <div className="w-full flex justify-between flex-wrap items-center">
                    <Cover>
                        <GlowingStarsTitle>
                            Your Past Interviews
                        </GlowingStarsTitle>
                        <GlowingStarsDescription className="text-[14px] font-normal w-full text-[#71717a]">
                            Your past practice sessions
                        </GlowingStarsDescription>
                    </Cover>
                    <div className="w-full md:w-[270px]">
                        <RequestInterview />
                    </div>
                </div>

                <Tabs defaultValue="given" className="w-full">
                    <TabsList className="grid grid-cols-2 bg-[#2b2b2b] min-h-[45px] w-full md:w-[400px]">
                        <TabsTrigger value="given">Given</TabsTrigger>
                        <TabsTrigger value="taken">Taken</TabsTrigger>
                    </TabsList>
                    <TabsContent value="given">
                        <InterviewsGiven />
                    </TabsContent>
                    <TabsContent value="taken">
                        <InterviewsTaken />
                    </TabsContent>
                </Tabs>

                <div className="w-full mt-5 md:hidden lg:hidden">
                    <div
                        className="h-[50px] "
                    >
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Page;


