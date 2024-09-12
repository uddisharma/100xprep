import BottomGradient from "@/components/others/BottomGradient";
import { Spotlight } from "@/components/ui/Spotlight";
import { getJobById } from "@/lib/getDetails/jobs";
import { JobType } from "@/types/jobs";
import { IconBuilding, IconCash, IconMapPin } from "@tabler/icons-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ViewJob({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const jobId = searchParams['id'] ?? ''

    const job: JobType | null = await getJobById(jobId as string)

    if (!job) return notFound()

    return (
        <div className="h-full w-full ">
            <div className="h-full rounded-md flex flex-col items-left justify-center relative  mx-auto py-10 md:py-0 p-6  overflow-y-scroll w-full mb-10">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <h1
                    className="w-full text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-[400px] lg:mt-10"
                >
                    {job?.title}
                </h1>
                <div className="rounded-lg mt-5">
                    <p className="text-white mb-4 flex gap-2 items-center"> <IconBuilding className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        {job?.company}
                    </p>

                    <p className="text-white mb-4 flex gap-2 items-center"> <IconMapPin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        {job?.location}
                    </p>
                    <p className="text-white mb-4 flex gap-2 items-center"> <IconCash className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                        {job?.salary}
                    </p>


                    <div className="border-t pt-4">
                        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                        <p className="text-white">
                            {job?.description}
                        </p>
                    </div>
                    <div className="mt-6">
                        <h2 className="text-xl font-semibold mb-2">Requirements</h2>
                        <ul className="list-disc pl-5">
                            {job?.requirements.map((requirement, index) => (
                                <li key={index} className="text-white">{requirement}</li>
                            ))}

                        </ul>
                    </div>
                    <Link
                        target="_blank"
                        href={job?.link ?? ""}
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-5 lg:w-[200px] mt-5 mb-10 pt-2 text-center"

                    >
                        Apply
                        <BottomGradient />
                    </Link>
                </div>
            </div>
        </div>
    )
}