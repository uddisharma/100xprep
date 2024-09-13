"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import BottomGradient from "../BottomGradient";
import Link from "next/link";
import { UpdateJob } from "@/actions/jobs";
import { useAction } from "next-safe-action/hooks";
import { DisplayServerActionResponse } from "../ServerActionResponse";
import { JobType } from "@/types/jobs";

const JobEditForm = ({ job }: { job: JobType | null }) => {
  const { execute, result, isExecuting } = useAction(UpdateJob);

  return (
    <>
      <DisplayServerActionResponse result={result} />

      <form action={execute}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2 hidden">
                <Input defaultValue={job?.id} id="id" name="id" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                  defaultValue={job?.company}
                  id="company"
                  name="company"
                  placeholder="Company Name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Role</Label>
                <Input
                  defaultValue={job?.title}
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Enter the role"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  defaultValue={job?.location}
                  id="location"
                  placeholder="Enter the location"
                  name="location"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="salary">Salary</Label>
                <Input
                  defaultValue={job?.salary}
                  id="salary"
                  placeholder="Salary"
                  name="salary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input
                  defaultValue={job?.startDate?.toISOString().split("T")[0]}
                  id="startDate"
                  placeholder="Start Date"
                  name="startDate"
                  type="date"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date</Label>
                <Input
                  defaultValue={job?.endDate?.toISOString().split("T")[0]}
                  id="endDate"
                  placeholder="End Date"
                  name="endDate"
                  type="date"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link">Apply Link</Label>
                <Input
                  defaultValue={job?.link}
                  id="link"
                  placeholder="Apply Link"
                  name="link"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description & Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  defaultValue={job?.description}
                  id="description"
                  name="description"
                  placeholder="Enter the job description"
                  className="min-h-[150px]"
                  rows={15}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Job Requirements</Label>
                <Textarea
                  defaultValue={job?.requirements.join(",")}
                  id="requirements"
                  placeholder="Enter the required skills and experience using a comma separated list"
                  className="min-h-[150px]"
                  name="requirements"
                  rows={10}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex justify-end space-x-4 mb-40">
          <Link href="/admin/jobs">
            <button className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full md:w-[200px] text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] cursor-pointer">
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Cancel
              </span>
              <BottomGradient />
            </button>
          </Link>
          <button
            className=" relative group/btn flex space-x-2 items-center justify-center px-4 w-full md:w-[200px] text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] cursor-pointer"
            type="submit"
          >
            <span className="text-neutral-700 dark:text-neutral-300 text-sm">
              {isExecuting ? "Saving..." : "Save Changes"}
            </span>
            <BottomGradient />
          </button>
        </div>
      </form>
    </>
  );
};

export default JobEditForm;
