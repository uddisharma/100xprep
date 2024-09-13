import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { IconPlus, IconEdit } from "@tabler/icons-react";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
import { PaginationDemo } from "@/components/others/Pagination";
import { getAllUserDetails } from "@/lib/getDetails/user";
import Searchbar from "@/components/others/Searchbar";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const page = searchParams["page"] ?? 1;
  const { users, count }: any = await getAllUserDetails({
    page: Number(page),
    limit: 1,
  });

  return (
    <main className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
        <div className="flex justify-between items-center mt-2 lg:mt-0 lg:mb-5 flex-wrap gap-2">
          <h2 className="text-3xl font-bold text-white">
            <Cover>Users</Cover>
          </h2>

          <div className="grid grid-cols-2 gap-2 lg:flex lg:space-x-2">
            <Button>
              <IconPlus className="mr-2 h-4 w-4" /> Post Job
            </Button>
          </div>
        </div>
        <div className="md:justify-self-start">
          <Searchbar text="Users" />
        </div>
        <Card className="my-4">
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Tech stacks</TableHead>
                  <TableHead>Interview taken</TableHead>
                  <TableHead>Interview given</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Edit</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users?.map((i: any, index: any) => (
                  <TableRow
                    key={index}
                    style={{
                      borderBottom: "1px solid #525252",
                      borderTop: index == 0 ? "1px solid #525252" : "none",
                    }}
                  >
                    <TableCell>{i?.fullName}</TableCell>
                    <TableCell>Html,CSS</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>Online</TableCell>
                    <TableCell>
                      <Link href="/admin/users/1/edit">
                        <IconEdit size={24} stroke={1.5} />
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <PaginationDemo count={count} />
        </Card>
      </div>
    </main>
  );
};

export default Page;
