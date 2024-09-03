"use client";

import BottomGradient from "@/components/others/BottomGradient"
import LabelInputContainer from "@/components/others/LabelnputContainer"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import ReactSelectSingle from "@/components/others/ReactSelectSingle";
import Image from "next/image";

export default function InterviewProfile() {
    const user = {
        name: "Jane Doe",
        photo: "/logo.jpg?height=200&width=200",
        email: "jane.doe@example.com",
        phone: "+1 (555) 123-4567",
        resumeUrl: "#",
        techStack: ["React", "Node.js", "Python", "SQL", "AWS"],
        previousInterviews: [
            { company: "Tech Co", rating: 85 },
            { company: "Startup Inc", rating: 92 },
            { company: "Big Corp", rating: 78 },
        ],
        interviewDate: "2023-07-15",
        interviewTime: "14:00 AM",
    }

    return (
        <div className="container mx-auto p-4 space-y-6 h-[100vh] overflow-y-scroll  w-full   m-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/5 space-y-4 p-4 rounded-lg  w-full animate-shimmer items-center justify-between bg-[linear-gradient(110deg,#333_0.6%,#222)] border border-[#eaeaea] dark:border-[#71717a]">
                    <div className="rounded-lg overflow-hidden">
                        <Image
                            height={300}
                            width={300}
                            src={user.photo}
                            alt={user.name}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
                        type="submit"
                    >

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                            Download Resume
                        </span>
                        <BottomGradient />
                    </button>
                </div>
                <div className="md:w-2/3 space-y-6  p-4 rounded-lg  w-full animate-shimmer items-center justify-between  bg-[linear-gradient(110deg,#333_0.6%,#222)]    border border-[#eaeaea] dark:border-[#71717a]">
                    <form className="my-8" >
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Input id="fullname" placeholder="Full Name" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Input id="email" placeholder="Email" type="email" />
                            </LabelInputContainer>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Input id="phone" placeholder="Phone Number" type="number" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Input id="role" placeholder="Current Role" type="email" />
                            </LabelInputContainer>
                        </div>

                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer className="mb-3 lg:mb-0">
                                <ReactSelectSingle />
                            </LabelInputContainer>
                            <LabelInputContainer>

                                <Input id="company" placeholder="Company Name" type="text" />
                            </LabelInputContainer>
                        </div>

                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Input id="experience" placeholder="Experience in Years" type="number" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Input id="prefferedrole" placeholder="Preffered Role" type="text" />
                            </LabelInputContainer>

                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Input id="currentctc" placeholder="Current CTC" type="text" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Input id="expectedctc" placeholder="Expected CTC" type="text" />
                            </LabelInputContainer>

                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <LabelInputContainer>
                                <Label htmlFor="lastname" >Profile Photo</Label>
                                <Input id="lastname" placeholder="Expected CTC" type="file" />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="lastname">Resume</Label>
                                <Input id="lastname"
                                    placeholder="Preffered Role" type="file" />
                            </LabelInputContainer>
                        </div>


                        <button
                            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                            type="submit"
                        >
                            Save Changes &rarr;
                            <BottomGradient />
                        </button>
                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
                    </form>
                </div>
            </div>

        </div>
    )
}