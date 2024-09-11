import BottomGradient from '@/components/others/BottomGradient'
import HandbookEditForm from '@/components/others/hanbook/EditForm'
import { Cover } from '@/components/ui/cover'
import { getHandbookById } from '@/lib/getDetails/handbooks'
import { HandbookType } from '@/types'
import { IconNotes } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

export default async function Home({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const notionId = searchParams['notionId'] ?? '1'
    
    const handbook: HandbookType | null = await getHandbookById(notionId as string)

    if (!handbook) return (
        <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
            <div>
                <p className="mb-4 text-md dark:text-white">Handbook not found.</p>
                <Link href="/admin/handbooks">
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    >

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                            Go Back
                        </span>
                        <BottomGradient />
                    </button>
                </Link>
            </div>
        </div>
    )

    return (
        <div className='w-full'>
            <div className=' p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] '>
                <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
                    <h2 className="text-3xl font-bold text-white">
                        <Cover>
                            Update Handbook
                        </Cover>
                    </h2>
                    <div className="w-full md:w-[200px]">
                        <Link href="/admin/handbooks">
                            <div
                                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-2 w-full mt-5 lg:mt-0 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <IconNotes className="w-4 h-4" />
                                <span className="flex-shrink-0">All Handbooks</span>
                                <BottomGradient />
                            </div>
                        </Link>
                    </div>
                </div>
                <HandbookEditForm handbook={handbook} />
            </div>
        </div>
    )
}