'use client'
import { prisma } from '@/db/db'
import { HandbookType } from '@/types'
import { IconEye, IconPencil, IconTrash } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'
import { toast } from 'sonner'

const Actions = ({ handbook }: { handbook: HandbookType }) => {

    const handledelete = () => {
        prisma.handbook.delete({ where: { id: handbook.id } }).then(() => {
            return toast.success("Handbook deleted successfully")
        }).catch(() => {
            return toast.error("Error deleting handbook")
        })
    }

    return (
        <div className='flex justify-start gap-4'>

            <Link href={`/dashboard/handbooks/${handbook?.id}`}>
                <IconEye className="h-4 w-4 cursor-pointer" />
            </Link>

            <Link href={`/admin/handbooks/${handbook?.id}/edit`}>
                <IconPencil className="h-4 w-4 cursor-pointer" />
            </Link>

            <IconTrash onClick={handledelete} className="h-4 w-4 cursor-pointer" />

        </div>
    )
}

export default Actions