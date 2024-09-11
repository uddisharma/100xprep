import BottomGradient from "@/components/others/BottomGradient";
import JobCard from "@/components/others/JobCard";
import Searchbar from "@/components/others/Searchbar";
import Sorting from "@/components/others/Sorting";
import { Cover } from "@/components/ui/cover";
import { GlowingStarsDescription, GlowingStarsTitle } from "@/components/ui/globalstars";
import { getJobs } from "@/lib/getDetails/jobs";
import { JobType } from "@/types/jobs";
import Link from "next/link";
import NotFound from "./_notFound";
import { PaginationDemo } from "@/components/others/Pagination";

export default async function Jobs({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '1'
    const query = searchParams['query']?.toString() ?? '';
    const sort = searchParams['sort']?.toString() ?? '';
    const salary = sort?.split("-")[0] == "salary" ? sort?.split('-')[1] : 'desc';
    const date = sort?.split("-")[0] == "date" ? sort?.split('-')[1] : 'desc';

    const result = await getJobs({ page: Number(page), limit: Number(per_page), searchQuery: query, salaryOrder: salary, dateOrder: date });
    const { jobs, count }: { jobs: JobType[], count: number } = result ?? { jobs: [], count: 0 };

    const fields = [
        {
            name: 'Newest',
            value: 'date-desc'
        },
        {
            name: 'Oldest',
            value: 'date-asc'
        }
    ]
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
                    <Cover >
                        <GlowingStarsTitle>
                            Recommended Jobs
                        </GlowingStarsTitle>
                        <GlowingStarsDescription className="text-[14px] font-normal w-full text-[#71717a]">
                            Based on your skills and preferences
                        </GlowingStarsDescription>
                    </Cover>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-5 mt-5 md:mt-0">
                    <div className="md:justify-self-start">
                        <Searchbar />
                    </div>
                    <div className="md:justify-self-end">
                        <Sorting fields={fields} />
                    </div>
                </div>

                {jobs?.length
                    ? jobs?.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))
                    :
                    <NotFound />}

                {jobs?.length
                    ? <PaginationDemo count={count} />
                    : null
                }

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



