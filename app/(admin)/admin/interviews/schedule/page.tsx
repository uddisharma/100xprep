"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { IconCalendar, IconDeviceDesktop } from "@tabler/icons-react";
import { Cover } from "@/components/ui/cover";
import { Select } from "@/components/ui/select";
import Link from "next/link";
import BottomGradient from "@/components/others/BottomGradient";

export default function UpdateInterview() {
  const [date, setDate] = useState<Date>();
  const [isRemote, setIsRemote] = useState(true);

  return (
    <div className="w-full">
      <div className=" p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
        <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
          <h2 className="text-3xl font-bold text-white">
            <Cover>Interview Update</Cover>
          </h2>
          <div className="w-full md:w-[200px]">
            <Link href="/admin/interviews">
              <div className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-2 w-full mt-5 lg:mt-0 flex items-center justify-center gap-2 cursor-pointer">
                <IconDeviceDesktop className="w-4 h-4" />
                <span className="flex-shrink-0">All Interviews</span>
                <BottomGradient />
              </div>
            </Link>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Interview Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="interviewer">Interviewer</Label>
                  <Input id="interviewer" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="interviewee">Interviewee</Label>
                  <Input id="interviewee" placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-title">Job Title</Label>
                  <Select id="status" className="min-h-[40px]">
                    <option value="scheduled">Scheduled</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Pick Date & Time</Label>
                  <Input
                    id="company"
                    placeholder="Tech Corp"
                    type="datetime-local"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Schedule</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="description">Interview Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter any additional details about the interview..."
                    className="min-h-[150px]"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="notes">Interviewer Notes</Label>
                  <Textarea
                    id="notes"
                    placeholder="Enter any notes for the interviewer..."
                    className="min-h-[150px]"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 flex justify-end space-x-4">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Update Interview</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
