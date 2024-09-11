"use client"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useRouter, useSearchParams } from "next/navigation"

export function PaginationDemo() {
    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '1'

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem className={` ${page == '1' ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={() => {
                    if (page == '1') return
                    router.push(`/admin/handbooks?page=${Number(page) - 1}&per_page=${per_page}`)
                }}>
                    <PaginationPrevious />
                </PaginationItem>

                <PaginationItem>
                    <PaginationLink href="#" isActive>{page}</PaginationLink>
                </PaginationItem>

                <PaginationItem className="cursor-pointer" onClick={() => {
                    router.push(`/admin/handbooks?page=${Number(page) + 1}&per_page=${per_page}`)
                }}>
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
