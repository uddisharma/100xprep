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
import { Cover } from "@/components/ui/cover";
import { PaginationDemo } from "@/components/others/Pagination";
import Searchbar from "@/components/others/Searchbar";
import Sorting from "@/components/others/Sorting";
import NotFound from "./_notFound";
import { getUsers } from "@/lib/getDetails/user";
import { UserProfile1 } from "@/types/user";
import { Per_page } from "@/config/site-config";
import TableActions from "@/components/others/TableActions";

export default async function Users({
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

  const result = await getUsers({
    page: Number(page),
    limit: Number(per_page),
    searchQuery: query,
    sortBy: sortBy ? sortBy : "createdAt",
    sortOrder: sortOrder ?? "desc",
  });

  const { users, count }: { users: UserProfile1[]; count: number } = result ?? {
    users: [],
    count: 0,
  };

  const fields = [
    {
      name: "Name A to Z",
      value: "fullName-asc",
    },
    {
      name: "Name Z to A",
      value: "fullName-desc",
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
            <Cover>Users</Cover>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-5">
          <div className="md:justify-self-start">
            <Searchbar text="users" />
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
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Interview Given</TableHead>
                  <TableHead>Interview Received</TableHead>
                  <TableHead>Resume</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>

              {users?.length ? (
                <TableBody>
                  {users?.map((user: UserProfile1, index) => (
                    <TableRow
                      key={index}
                      style={{
                        borderBottom: "1px solid #525252",
                        borderTop: index == 0 ? "1px solid #525252" : "none",
                      }}
                    >
                      <TableCell>{user?.fullName}</TableCell>

                      <TableCell>{user?.email}</TableCell>

                      <TableCell>{user?.phoneNumber ?? "-"}</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>
                        {user?.resume ? (
                          <a
                            target="_blank"
                            className="underline cursor-pointer"
                            href={user?.resume}
                          >
                            View
                          </a>
                        ) : (
                          "No Resume"
                        )}
                      </TableCell>
                      <TableCell>
                        <TableActions
                          edit={`/admin/users/edit?id=${user?.id}`}
                          deleteLink={`/api/user/${user?.id}`}
                          revalidatetag="users"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              ) : null}
            </Table>
            {!users.length ? <NotFound /> : null}
          </CardContent>
          {users.length ? <PaginationDemo count={count} /> : null}
        </Card>
      </div>
    </main>
  );
}
