import InterviewTaken from "@/components/others/InterviewTakenCard";
import { RequestInterview } from "@/components/others/RequestInterview";
import { GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/globalstars";

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
                    <div>
                        <GlowingStarsTitle>
                            Interviews Taken
                        </GlowingStarsTitle>
                        <GlowingStarsDescription className="text-[14px] font-normal w-full text-[#71717a]">
                            Interviews you have taken
                        </GlowingStarsDescription>
                    </div>
                    <RequestInterview />
                </div>

                {[...new Array(10)].map((i) => (
                    <InterviewTaken key={i} />
                ))}

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


