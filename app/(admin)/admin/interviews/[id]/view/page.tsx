"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  IconCalendar,
  IconClock,
  IconFileText,
  IconMapPin,
  IconNotebook,
  IconPencil,
  IconVideo,
} from "@tabler/icons-react";
import { Cover } from "@/components/ui/cover";
import BottomGradient from "@/components/others/BottomGradient";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";

export default function InterviewDetails() {
  const [status, setStatus] = useState("scheduled");
  const [notes, setNotes] = useState("");

  return (
    <div className="w-full mx-auto">
      <div className=" p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
        <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
          <h2 className="text-3xl font-bold text-white">
            <Cover>Interview Details</Cover>
          </h2>
          <div className="grid grid-cols-2 gap-2 lg:flex lg:space-x-2">
            <Button>
              <IconCalendar className="mr-2 h-4 w-4" /> View All Interviews
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Participants</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="Interviewer"
                      />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">John Doe</h3>
                      <p className="text-gray-500">Interviewer</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 mr-4">
                      <AvatarImage
                        src="/placeholder.svg?height=48&width=48"
                        alt="Interviewee"
                      />
                      <AvatarFallback>JS</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">Jane Smith</h3>
                      <p className="text-gray-500">Interviewee</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <IconCalendar className="mr-2 h-5 w-5 text-gray-400" />
                    <span>June 20, 2023</span>
                  </div>
                  <div className="flex items-center">
                    <IconClock className="mr-2 h-5 w-5 text-gray-400" />
                    <span>2:00 PM - 3:00 PM (EST)</span>
                  </div>
                  <div className="flex items-center">
                    <IconMapPin className="mr-2 h-5 w-5 text-gray-400" />
                    <span>Remote</span>
                  </div>
                  <div className="flex items-center">
                    <IconVideo className="mr-2 h-5 w-5 text-gray-400" />
                    <span>Zoom Meeting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Interview Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Enter interview notes here..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[200px] border-[#525252]"
                />
                <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800  text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-4 mt-5 w-[200px]">
                  <IconNotebook className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  Save Notes
                  <BottomGradient />
                </button>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Interview Status</CardTitle>
              </CardHeader>
              <CardContent>
                {/* <Select value={status} onValueChange={setStatus}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="scheduled">
                                            <Badge variant="outline" className="mr-2">Scheduled</Badge>
                                            Scheduled
                                        </SelectItem>
                                        <SelectItem value="in-progress">
                                            <Badge variant="outline" className="mr-2 bg-yellow-100 text-yellow-800">In Progress</Badge>
                                            In Progress
                                        </SelectItem>
                                        <SelectItem value="completed">
                                            <Badge variant="outline" className="mr-2 bg-green-100 text-green-800">Completed</Badge>
                                            Completed
                                        </SelectItem>
                                        <SelectItem value="cancelled">
                                            <Badge variant="outline" className="mr-2 bg-red-100 text-red-800">Cancelled</Badge>
                                            Cancelled
                                        </SelectItem>
                                    </SelectContent>
                                </Select> */}
                <Select id="status" className="min-h-[40px]">
                  <option value="scheduled">Scheduled</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </Select>
                <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-4 mt-5">
                  <IconPencil className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  Update Status
                  <BottomGradient />
                </button>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-4">
                    <IconFileText className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    View Resume
                    <BottomGradient />
                  </button>
                  <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600  dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] flex justify-center items-center gap-4">
                    <IconCalendar className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    Reschedule
                    <BottomGradient />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
