'use client'
import { JobType } from '@/types/jobs'
import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'

const JobActions = ({ job }: { job: JobType }) => {

    const handledelete = async () => {
        try {
            const res = await fetch(`/api/job/${job?.id}`, {
                method: "DELETE"
            })
            const data = await res.json()

            if (data.message) {
                toast.success(data.message)
            }

        } catch (error: any) {
            return toast.error(error.message || "Error deleting job")
        }
    }

    return (
        <div className='flex justify-start gap-4'>

            <Link href={`/admin/jobs/view?id=${job?.id}`}>
                <IconEye className="h-4 w-4 cursor-pointer" />
            </Link>

            <Link href={`/admin/jobs/edit?id=${job?.id}`}>
                <IconPencil className="h-4 w-4 cursor-pointer" />
            </Link>

            <IconTrash onClick={handledelete} className="h-4 w-4 cursor-pointer" />

        </div>
    )
}

export default JobActions