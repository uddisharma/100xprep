"use client";
import { HandbookType } from "@/types";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const Actions = ({

  view,
  deleteLink,
  edit,
}: {
  view: any;
  deleteLink: any;
  edit: any;
}) => {
  const handledelete = async () => {
    try {
      const res = await fetch(deleteLink, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.message) {
        toast.success(data.message);
        location.reload();
        // revalidatePath('/admin/handbooks')
      }
    } catch (error: any) {
      return toast.error(error.message || "Error deleting handbook");
    }
  };
  return (
    <div className="flex justify-start gap-4">
      <Link href={view}>
        <IconEye className="h-4 w-4 cursor-pointer" />
      </Link>

      <Link href={edit}>
        <IconPencil className="h-4 w-4 cursor-pointer" />
      </Link>

      <IconTrash onClick={handledelete} className="h-4 w-4 cursor-pointer" />
    </div>
  );
};

export default Actions;
