"use client";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons-react";
import { revalidateTag } from "next/cache";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const TableActions = ({
  view,
  deleteLink,
  edit,
  revalidatetag,
}: {
  view?: string;
  deleteLink: string;
  edit?: string;
  revalidatetag: string;
}) => {
  const handledelete = async () => {
    try {
      const res = await fetch(deleteLink, {
        method: "DELETE",
      });
      const data = await res.json();

      if (data.message) {
        toast.success(data.message);
        // revalidateTag(revalidatetag)
        location.reload();
      }
    } catch (error: any) {
      return toast.error(
        error.message || `Error while deleting ${revalidatetag}`,
      );
    }
  };
  return (
    <div className="flex justify-start gap-4">
      {view && (
        <Link href={view}>
          <IconEye className="h-4 w-4 cursor-pointer" />
        </Link>
      )}
      {edit && (
        <Link href={edit}>
          <IconPencil className="h-4 w-4 cursor-pointer" />
        </Link>
      )}
      {deleteLink && (
        <IconTrash onClick={handledelete} className="h-4 w-4 cursor-pointer" />
      )}
    </div>
  );
};

export default TableActions;
