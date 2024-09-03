'use client'
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { IconDeviceDesktop } from "@tabler/icons-react"
import BottomGradient from "@/components/others/BottomGradient"

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
        <div className="container mx-auto p-4 space-y-6 h-[100vh] overflow-y-scroll lg:overflow-y-hidden w-full  lg:w-9/12 m-auto">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3 space-y-4  p-4 rounded-lg  w-full animate-shimmer items-center justify-between  bg-[linear-gradient(110deg,#333_0.6%,#222)]    border border-[#eaeaea] dark:border-[#71717a]">
                    <div className="rounded-lg overflow-hidden">
                        <img
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
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold">{user.name}</h1>
                        <p className="text-muted-foreground">
                            <IconDeviceDesktop className="inline mr-2 h-4 w-4" />
                            {user.email} | {user.phone}
                        </p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Tech Stacks</h2>
                        <div className="flex flex-wrap gap-2">
                            {user.techStack.map((tech) => (
                                <Badge key={tech} variant="secondary">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Previous Interviews</h2>
                        <div className="space-y-4">
                            {user.previousInterviews.map((interview, index) => (
                                <div key={index} className="space-y-1">
                                    <div className="flex justify-between">
                                        <span>{interview.company}</span>
                                        <span>{interview.rating}%</span>
                                    </div>
                                    <Progress value={interview.rating} className="w-full" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" p-4 rounded-lg space-y-4   w-full animate-shimmer items-center justify-between  bg-[linear-gradient(110deg,#333_0.6%,#222)]    border border-[#eaeaea] dark:border-[#71717a] cursor-pointer">
                <h2 className="text-xl font-semibold">Upcoming Interview</h2>
                <div className="flex items-center space-x-2">
                    <IconDeviceDesktop className="h-5 w-5" />
                    <span>{user.interviewDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                    <IconDeviceDesktop className="h-5 w-5" />
                    <span>{user.interviewTime}</span>
                </div>
                <div className="flex space-x-4">
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
                        type="submit"
                    >

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                            Reject Interview
                        </span>
                        <BottomGradient />
                    </button>
                    <button
                        className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] "
                        type="submit"
                    >

                        <span className="text-neutral-700 dark:text-neutral-300 text-sm text-center">
                            Accpect Interview
                        </span>
                        <BottomGradient />
                    </button>
                </div>
            </div>
        </div>
    )
}