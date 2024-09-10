"use client"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { useState } from "react"

export function PaginationDemo() {
    const [page, setPage] = useState(1)
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem className="cursor-pointer" onClick={() => setPage(page - 1)} >
                    <PaginationPrevious />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>{page}</PaginationLink>
                </PaginationItem>
                <PaginationItem className="cursor-pointer" onClick={() => setPage(page + 1)}>
                    <PaginationNext />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
