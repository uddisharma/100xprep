"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function PaginationDemo({ count }: { count: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();
  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "1";

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const handlePageIncrement = () => {
    if (Number(page) + 1 > count) {
      return;
    }
    const pageNo = Number(page) + 1;
    const newQueryString = createQueryString("page", String(pageNo));
    router.push(`${path}?${newQueryString}`);
  };

  const handlePageDecrement = () => {
    if (Number(page) - 1 < 1) {
      return;
    }
    const pageNo = Number(page) - 1;
    const newQueryString = createQueryString("page", String(pageNo));
    router.push(`${path}?${newQueryString}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem
          className={` ${page == "1" ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={handlePageDecrement}
        >
          <PaginationPrevious />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href="#" isActive>
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem
          className={` ${Number(page) == count ? "cursor-not-allowed" : "cursor-pointer"}`}
          onClick={handlePageIncrement}
        >
          <PaginationNext />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
