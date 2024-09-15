"use client";
import React from "react";
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
import { Input } from "../ui/input";
import { IconPencil } from "@tabler/icons-react";
import { Textarea } from "../ui/textarea";
import { useAction } from "next-safe-action/hooks";
import { CreateHandbookRequest } from "@/actions/handbooks";
import { DisplayServerActionResponse } from "./ServerActionResponse";

export function RequestCorrection() {
  const { execute, result, isExecuting } = useAction(CreateHandbookRequest);

  return (
    <div className="flex items-center justify-center w-full  ">
      <DisplayServerActionResponse result={result} />
      <Modal>
        <ModalTrigger className="group/modal-btn">
          <div className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-2 w-full mt-5 lg:mt-0 flex items-center justify-center gap-2">
            <IconPencil className="w-4 h-4" />
            <span className="flex-shrink-0">Request Correction</span>
            <BottomGradient />
          </div>
        </ModalTrigger>
        <ModalBody>
          <form action={execute}>
            <ModalContent>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="topic">Topic Name</Label>
                <Input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter Topic Name"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4 w-full">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="description"
                  name="description"
                  className="h-full w-full min-h-[200px]"
                  placeholder="Enter Content"
                />
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
                type="submit"
                disabled={isExecuting}
              >
                <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                  {isExecuting ? "Saving..." : "Submit"}
                </span>
                <BottomGradient />
              </button>
            </ModalFooter>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}
