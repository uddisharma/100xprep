import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import { PaginationDemo } from "@/components/others/Pagination";
import { getHandbooksRequests } from "@/lib/getDetails/handbooks";
import { HandbookRequestType } from "@/types";
import Searchbar from "@/components/others/Searchbar";
import Sorting from "@/components/others/Sorting";
import NotFound from "./_notFound";
import TableActions from "@/components/others/TableActions";
import { Per_page } from "@/config/site-config";
import BottomGradient from "@/components/others/BottomGradient";

export default async function HanbookRequests({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? Per_page;
  const query = searchParams["query"]?.toString() ?? "";
  const sort = searchParams["sort"]?.toString() ?? "";

  const sortBy = sort?.split("-")[0];
  const sortOrder = sort?.split("-")[1];

  const result = await getHandbooksRequests({
    page: Number(page),
    limit: Number(per_page),
    searchQuery: query,
    sortBy: sortBy ? sortBy : "createdAt",
    sortOrder: sortOrder ?? "desc",
  });
  const {
    handbooks,
    count,
  }: { handbooks: HandbookRequestType[]; count: number } = result ?? {
    handbooks: [],
    count: 0,
  };

  const fields = [
    {
      name: "Title A to Z",
      value: "title-asc",
    },
    {
      name: "Title Z to A",
      value: "title-desc",
    },
    {
      name: "Newest",
      value: "createdAt-desc",
    },
    {
      name: "Oldest",
      value: "createdAt-asc",
    },
  ];

  return (
    <main className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
        <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
          <h2 className="text-3xl font-bold text-white">
            <Cover>Handbook Edit Requests</Cover>
          </h2>
          <div className="w-full md:w-[200px]">
            <Link href="/admin/handbooks/create">
              <div className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 dark:bg-zinc-800 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] px-2 w-full mt-5 lg:mt-0 flex items-center justify-center gap-2 cursor-pointer">
                <IconPlus className="w-4 h-4" />
                <span className="flex-shrink-0">Add Handbook</span>
                <BottomGradient />
              </div>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-5">
          <div className="md:justify-self-start">
            <Searchbar text="Handbooks" />
          </div>
          <div className="md:justify-self-end">
            <Sorting fields={fields} />
          </div>
        </div>
        <Card className="my-4">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>

              {handbooks?.length ? (
                <TableBody>
                  {handbooks?.map((handbook: HandbookRequestType, index) => (
                    <TableRow
                      key={index}
                      style={{
                        borderBottom: "1px solid #525252",
                        borderTop: index == 0 ? "1px solid #525252" : "none",
                      }}
                    >
                      <TableCell>{handbook?.title}</TableCell>

                      <TableCell>
                        {handbook?.description?.slice(0, 50)}
                        {handbook?.description?.length > 50 ? "..." : ""}
                      </TableCell>

                      <TableCell>
                        <TableActions
                          view={`/admin/handbooks/requests/view?id=${handbook?.id}`}
                          deleteLink={`/api/handbook/request/${handbook?.id}`}
                          revalidatetag={`handbookRequests`}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : null}
            </Table>
            {!handbooks.length ? <NotFound /> : null}
          </CardContent>
          {handbooks.length ? <PaginationDemo count={count} /> : null}
        </Card>
      </div>
    </main>
  );
}
