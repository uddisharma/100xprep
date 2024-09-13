"use client";

import BottomGradient from "@/components/others/BottomGradient";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React from "react";
import { useAction } from "next-safe-action/hooks";
import { CreateHandbook } from "@/actions/handbooks";
import { DisplayServerActionResponse } from "../ServerActionResponse";

const HandbookCreateForm = () => {
  const { execute, result, isExecuting } = useAction(CreateHandbook);

  return (
    <>
      <DisplayServerActionResponse result={result} />

      <form action={execute}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-0 lg:mt-0">
          <Card>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" placeholder="Enter the title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link">Notion Id</Label>
                <Input
                  id="link"
                  name="link"
                  placeholder="Enter the notion Id"
                />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description"> Description</Label>
                <Textarea
                  name="description"
                  id="description"
                  placeholder="Enter the description"
                  className="min-h-[150px]"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-6 flex justify-end space-x-4 mb-40">
          <Link href="/admin/handbooks">
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

export default HandbookCreateForm;
