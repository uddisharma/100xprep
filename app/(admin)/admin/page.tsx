import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { IconCalendar, IconPlus } from '@tabler/icons-react'
import { GlowingStarsBackgroundCardPreview } from '@/components/others/Card'
import { Cover } from '@/components/ui/cover'
import Image from 'next/image'
import { GlowingStarsDescription, GlowingStarsTitle } from '@/components/ui/globalstars'
import { getGreeting } from '@/app/(dashboard)/dashboard/page'
import { RequestInterview } from '@/components/others/RequestInterview'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

const Page = async () => {

  const sessions = await getServerSession()

  return (
    <main className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
        <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-3 flex-wrap gap-2">
          <h2 className="text-3xl font-bold text-white">
            <Cover>
              Admin Dashboard
            </Cover>
          </h2>
          <div className="grid grid-cols-2 gap-2 lg:flex lg:space-x-2">
            <Link href={'/admin/interviews/schedule'}>
              <Button>
                <IconCalendar className="mr-2 h-4 w-4" /> Schedule Interview
              </Button>
            </Link>
            <Link href={'/admin/jobs/create'}>
              <Button>
                <IconPlus className="mr-2 h-4 w-4" /> Post Job
              </Button>
            </Link>
          </div>
        </div>
        <div
          className='relative flex items-center justify-between h-[300px] bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4  max-h-[20rem] w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600 mb-0 lg:mb-3 md:mb-3 mt-3 lg:mt-0 md:mt-0'
        >
          <div className="">
            <div className='mt-4'>
              <GlowingStarsTitle>
                {getGreeting() + '👋 ' + sessions?.user?.name}
              </GlowingStarsTitle>

              <GlowingStarsDescription className="text-[14px] font-normal w-full text-[#71717a]">
                The only way to do great work is to love what you do.
              </GlowingStarsDescription>
            </div>

            <div className='w-full md:w-8/12 mt-3'>
              <RequestInterview />
            </div>

          </div>
          <div className="hidden lg:block md:block">
            <div className="relative">
              <Image
                src="/remote.png"
                alt="Remote"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-3 lg:mt-0 md:mt-0">
          {[...new Array(3)].map((i) => (
            <GlowingStarsBackgroundCardPreview key={i} />
          ))}
        </div>

        {/* Recent Interviews */}
        <Card className="my-4">
          <CardHeader>
            <CardTitle>Recent Interviews</CardTitle>
          </CardHeader>
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
                  <TableRow key={i} style={{ borderBottom: "1px solid #525252", borderTop: index == 0 ? "1px solid #525252" : "none" }} >
                    <TableCell>2023-06-13</TableCell>
                    <TableCell>Emma Brown</TableCell>
                    <TableCell>Michael Davis</TableCell>
                    <TableCell>Cancelled</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>


          </CardContent>
        </Card>

        {/* Recent Job Postings */}
        <Card className='mb-20'>
          <CardHeader>
            <CardTitle>Recent Job Postings</CardTitle>
          </CardHeader>
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
                  <TableRow key={i} style={{ borderBottom: "1px solid #525252", borderTop: index == 0 ? "1px solid #525252" : "none" }} >
                    <TableCell>2023-06-13</TableCell>
                    <TableCell>Emma Brown</TableCell>
                    <TableCell>Michael Davis</TableCell>
                    <TableCell>Cancelled</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>Completed</TableCell>
                  </TableRow>
                ))}
              </TableBody>

            </Table>


          </CardContent>
        </Card>
      </div>
    </main>
  )
}

export default Page