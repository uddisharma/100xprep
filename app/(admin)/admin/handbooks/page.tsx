import React from 'react'
import { Card, CardContent, } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { IconPlus } from '@tabler/icons-react'
import { Cover } from '@/components/ui/cover'
import Link from 'next/link'
import { PaginationDemo } from '@/components/others/Pagination'
import { getHandbooks } from '@/lib/getDetails/handbooks'
import { HandbookType } from '@/types'
import Actions from '@/components/others/hanbook/actions'

const Page = async () => {

    const handbooks = await getHandbooks({ page: 1, limit: 1 });

    return (
        <main className="flex flex-1">
            <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
                <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">

                    <h2 className="text-3xl font-bold text-white">
                        <Cover>
                            Recent Handbooks
                        </Cover>
                    </h2>
                    <div className="grid grid-cols-2 gap-2 lg:flex lg:space-x-2">
                        <Link href={'/admin/handbooks/create'}>
                            <Button>
                                <IconPlus className="mr-2 h-4 w-4" /> Create Handbook
                            </Button>
                        </Link>
                    </div>
                </div>

                <Card className="my-4">
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Description</TableHead>
                                    <TableHead>Notion Id</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {handbooks ? handbooks?.map((handbook: HandbookType, index) => (
                                    <TableRow key={index} style={{ borderBottom: "1px solid #525252", borderTop: index == 0 ? "1px solid #525252" : "none" }}>

                                        <TableCell>
                                            {handbook?.title}
                                        </TableCell>

                                        <TableCell>
                                            {handbook?.description?.slice(0, 20)}{handbook?.description?.length > 50 ? "..." : ""}
                                        </TableCell>

                                        <TableCell>
                                            {handbook?.link}
                                        </TableCell>

                                        <TableCell>
                                            <Actions handbook={handbook} />
                                        </TableCell>
                                    </TableRow>
                                )) : ""}
                            </TableBody>
                        </Table>
                    </CardContent>
                    <PaginationDemo />
                </Card>
            </div>
        </main >
    )
}

export default Page