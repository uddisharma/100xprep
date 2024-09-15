"use client";
import React from "react";
import { toast } from "sonner";

const page = () => {
  const handleDelete = async () => {
    try {
      const res = await fetch("/api/db", {
        method: "DELETE",
      });
      console.log(res);
      toast.success("Deleted");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default page;
