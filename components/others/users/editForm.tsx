"use client";

import BottomGradient from "@/components/others/BottomGradient";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { HandbookType } from "@/types";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import React from "react";
import { useAction } from "next-safe-action/hooks";
import { UpdateHandbook } from "@/actions/handbooks";
import { DisplayServerActionResponse } from "../ServerActionResponse";
import { UserProfileType } from "@/types/user";
import { editUser } from "@/actions/user";

const HandbookEditForm = ({ user }: { user: UserProfileType }) => {
  const { execute, result, isExecuting } = useAction(editUser);

  console.log("This is user", user);
  return (
    <>
      <DisplayServerActionResponse result={result} />

      <form action={execute}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5 md:mt-0 lg:mt-0">
          <Card>
            <CardContent className="space-y-4">
              <div className="space-y-2 hidden">
                <Label htmlFor="title">Email</Label>
                <Input
                  id="id"
                  readOnly
                  name="id"
                  defaultValue={user?.email as string}
                  className="cursor-not-allowed"
                />
              </div>
              <div className="space-y-2 ">
                <Label htmlFor="title">Email</Label>
                <Input
                  id="email"
                  readOnly
                  name="id"
                  defaultValue={user?.email as string}
                  className="cursor-not-allowed"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="title">Full Name</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Enter the New name"
                  defaultValue={user.fullName as string}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter the new number"
                  defaultValue={user?.phoneNumber as number}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="link">Role</Label>
                <Input
                  id="role"
                  name="role"
                  placeholder="Enter the new role"
                  defaultValue={user?.role as string}
                />
              </div>
            </CardContent>
          </Card>
          {/* <Card> */}
          {/* <CardContent className="space-y-4"> */}
          <div className="space-y-2 ">
            <Label htmlFor="title">Status</Label>
            <Input
              id="id"
              readOnly
              name="id"
              defaultValue={(user?.status as string) ?? "Enabled"}
              className="cursor-not-allowed"
            />
          </div>

          {/* </CardContent> */}
          {/* </Card> */}
          {/* <Card>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="link">Password</Label>
                <Input
                  id="link"
                  name="link"
                  placeholder="Enter the notion Id"
                  defaultValue="{handbook?.link}"
                />
              </div>
            </CardContent>
          </Card> */}
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

export default HandbookEditForm;
