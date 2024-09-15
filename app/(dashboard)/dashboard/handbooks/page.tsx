import { HandbookCards } from "@/components/ui/card-hover-effect";
import { RequestCorrection } from "@/components/others/CorrectionRequest";
import { Cover } from "@/components/ui/cover";
import { getHandbooks } from "@/lib/getDetails/handbooks";
import { PaginationDemo } from "@/components/others/Pagination";
import { HandbookType } from "@/types";
import Searchbar from "@/components/others/Searchbar";
import Sorting from "@/components/others/Sorting";
import NotFound from "./_notFound";
import { Per_page } from "@/config/site-config";

export default async function Home({
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

  const result = await getHandbooks({
    page: Number(page),
    limit: Number(per_page),
    searchQuery: query,
    sortBy: sortBy ? sortBy : "title",
    sortOrder: sortOrder ?? "asc",
  });
  const { handbooks, count }: { handbooks: HandbookType[]; count: number } =
    result ?? { handbooks: [], count: 0 };

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
    <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll max-h-[100vh] ">
      <div className="flex justify-between items-center mt-2 lg:mt-0  flex-wrap ">
        <h2 className="text-3xl font-bold text-white">
          <Cover>Interview Handbooks</Cover>
        </h2>
        <div className="w-full md:w-[250px]">
          <RequestCorrection />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full items-center gap-5">
        <div className="md:justify-self-start">
          <Searchbar text="handbooks" />
        </div>
        <div className="md:justify-self-end">
          <Sorting fields={fields} />
        </div>
      </div>
      {!handbooks?.length ? <NotFound /> : null}
      {handbooks?.length ? (
        <>
          <HandbookCards items={handbooks} />
          <PaginationDemo count={count} />
        </>
      ) : null}
    </div>
  );
}
