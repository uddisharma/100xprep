"use client";
import React, { ChangeEvent, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/modal";
import BottomGradient from "./BottomGradient";
import LabelInputContainer from "./LabelnputContainer";
import { Label } from "../ui/label";
import ReactSelect from "./React-Select";
import { IconDeviceDesktopCheck } from "@tabler/icons-react";
import { Select } from "../ui/select";
import { Input } from "../ui/input";
import { times } from "@/data/interviewSlots";
import { InterviewRequest } from "@/types/interviews";
import { MatchInterviewer } from "@/actions/interview";

export function RequestInterview() {

  const [data, setData] = useState<InterviewRequest>({
    date: "",
    startTime: "",
    endTime: "",
    techstacks: [],
    experience: ""
  })

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.id]: e.target.value });
  }

  const isEndTimeDisabled = (time: any) => {
    const startIndex = times.indexOf(data?.startTime);
    const currentIndex = times.indexOf(time);
    return currentIndex <= startIndex;
  };

  return (
    <div className="flex items-center justify-center w-full  ">
      <Modal>
        <ModalTrigger className="group/modal-btn">
          <div className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-2 w-full mt-5 lg:mt-0 flex items-center justify-center gap-2">
            <IconDeviceDesktopCheck className="w-4 h-4" />
            <span className="flex-shrink-0">Schedule your Interview</span>
            <BottomGradient />
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Interview For</Label>
              <ReactSelect data={data} setData={setData} />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="date">Date</Label>
              <Input id="date" onChange={(e: any) => { handleChange(e) }} type="date" placeholder="Select Date" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4 w-full">
              <Label htmlFor="time">Time Slot in which you are free</Label>
              <div className="grid grid-cols-2 gap-5 md:grid-cols-2">
                <Select
                  id="startTime"
                  value={data.startTime}
                  onChange={(e: any) => { handleChange(e) }}
                  className="min-h-[40px]"
                >
                  <option value="" disabled>Select start time</option>
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </Select>
                <Select
                  className="min-h-[40px]"
                  id="endTime"
                  value={data?.endTime}
                  onChange={(e: any) => { handleChange(e) }}
                  disabled={!data?.startTime}
                >
                  <option value="" disabled>Select end time</option>
                  {times.map((time) => (
                    <option key={time} value={time} disabled={isEndTimeDisabled(time)}>
                      {time}
                    </option>
                  ))}
                </Select>
              </div>
            </LabelInputContainer>
            <LabelInputContainer className="mb-3 lg:mb-0">
              <Label htmlFor="experience">Years of Experience of Interviewer you want </Label>
              <Select
                id="experience"
                onChange={(e: any) => { handleChange(e) }}
                className="min-h-[40px] "
              >
                <option className="text-[12px]" value="1">1 year</option>
                <option className="text-[12px]" value="2">2 years</option>
                <option className="text-[12px]" value="3">3 years</option>
                <option className="text-[12px]" value="4">4 years</option>
                <option className="text-[12px]" value="5">5 years</option>
                <option className="text-[12px]" value="5+">5+ years</option>
              </Select>
            </LabelInputContainer>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Cancel
              </span>
              <BottomGradient />
            </button>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              onClick={async () => {
                // console.log(data)
                const res = await MatchInterviewer(data);
                console.log(res)
              }}
            >
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Submit
              </span>

              <BottomGradient />
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
