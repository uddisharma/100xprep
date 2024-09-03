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
import ReactSelect from "./React-Select";


export function RequestInterview() {

    return (
        <div className="flex items-center justify-center w-full lg:w-[200px] ">
            <Modal>
                <ModalTrigger className=" group/modal-btn">
                    <button
                        className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-5 w-full lg:w-[200px] mt-5 lg:mt-0"
                    >
                        Request Interview
                        <BottomGradient />
                    </button>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <LabelInputContainer className="mb-4">
                            <Label htmlFor="email">Interview For</Label>
                            <ReactSelect />
                        </LabelInputContainer>
                        <LabelInputContainer className="mb-4 w-full">
                            <Label htmlFor="password">Timing</Label>
                            <Input id="email" type="datetime-local" />
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




