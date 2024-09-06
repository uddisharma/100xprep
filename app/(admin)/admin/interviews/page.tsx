import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { IconCalendar } from '@tabler/icons-react'
import { Cover } from '@/components/ui/cover'
import Link from 'next/link'
import { PaginationDemo } from '@/components/others/Pagination'

const Page = () => {
    return (
        <main className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
                <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
                    <h2 className="text-3xl font-bold text-white">
                        <Cover>
                            Recent Interviews
                        </Cover>
                    </h2>
                    <div className="grid grid-cols-2 gap-2 lg:flex lg:space-x-2">
                        <Button>
                            <IconCalendar className="mr-2 h-4 w-4" /> Schedule Interview
                        </Button>

                    </div>
                </div>

                <Card className="my-4">
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Interviewer</TableHead>
                                    <TableHead>Interviewee</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Interviewer</TableHead>
                                    <TableHead>Interviewee</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {[...new Array(5)].map((i, index) => (
                                    <TableRow key={index} style={{ borderBottom: "1px solid #525252", borderTop: index == 0 ? "1px solid #525252" : "none" }}>

                                        <TableCell>2023-06-13</TableCell>
                                        <TableCell>Emma Brown</TableCell>
                                        <TableCell>Michael Davis</TableCell>
                                        <TableCell>Cancelled</TableCell>
                                        <TableCell>John Doe</TableCell>
                                        <TableCell>
                                            <Link href="/admin/interviews/1/edit">Edit</Link>
                                        </TableCell>
                                        <TableCell>
                                            <Link href="/admin/interviews/1/view">View</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <PaginationDemo />
                </Card>


            </div>
        </main>
    )
}

export default Page