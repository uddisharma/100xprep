"use client";
import React, { useCallback } from "react";
import { Select } from "../ui/select";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

const Sorting = ({ fields }: { fields: { name: string; value: string }[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const sort = searchParams.get("sort");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "sortby") return;
    const newSortValue = e.target.value;
    const newQueryString = createQueryString("sort", newSortValue);
    router.push(`${path}?${newQueryString}`);
  };

  return (
    <Select
      defaultValue={sort as string}
      onChange={(e) => {
        handleChange(e);
      }}
      id="working"
      className=" min-h-[40px] w-[95%] m-auto md:w-[200px]"
    >
      <option value="sortby">Sort By</option>
      {fields.map((field) => (
        <option key={field?.value} value={field?.value}>
          {field?.name}
        </option>
      ))}
    </Select>
  );
};

export default Sorting;
