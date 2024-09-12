import { IconBriefcase } from '@tabler/icons-react'
import { Cover } from '@/components/ui/cover'
import BottomGradient from '@/components/others/BottomGradient'
import Link from 'next/link'
import JobEditForm from '@/components/others/jobs.tsx/JobEditForm'
import { JobType } from '@/types/jobs'
import { getJobById } from '@/lib/getDetails/jobs'
import { notFound } from 'next/navigation'

export default async function EditJob({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const jobId = searchParams['id'] ?? ''

    const job: JobType | null = await getJobById(jobId as string)

    if (!job) return notFound()

    return (
        <div className='w-full'>
            <div className=' p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] '>
                <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
                    <h2 className="text-3xl font-bold text-white">
                        <Cover>
                            Edit Post
                        </Cover>
                    </h2>
                    <div className="w-full md:w-[200px]">
                        <Link href="/admin/jobs">
                            <div
                                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-2 w-full mt-5 lg:mt-0 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <IconBriefcase className="w-4 h-4" />
                                <span className="flex-shrink-0">All Jobs</span>
                                <BottomGradient />
                            </div>
                        </Link>
                    </div>
                </div>
                <JobEditForm job={job} />
            </div>
        </div>
    )
}