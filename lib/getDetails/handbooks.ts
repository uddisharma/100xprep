import { prisma } from "@/db/db";
import { HandbookRequestType, HandbookType } from "@/types";
import { unstable_cache } from "next/cache";

enum SortBy {
  title = "title",
  createdAt = "createdAt",
}

export const getHandbooks = unstable_cache(
  async ({
    page = 1,
    limit = 2,
    searchQuery = "",
    sortBy = SortBy.title,
    sortOrder = "asc",
  }: {
    page?: number;
    limit?: number;
    searchQuery?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<{ handbooks: HandbookType[]; count: number } | null> => {
    try {
      if (limit < 1) limit = 1;
      if (page < 1) page = 1;

      const where = searchQuery
        ? {
            OR: [
              {
                description: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
              {
                title: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
              {
                link: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
            ],
          }
        : ({} as any);

      const handbooks = await prisma.handbook.findMany({
        where,
        orderBy: { [sortBy]: sortOrder === "desc" ? "desc" : "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });

      const count = await prisma.handbook.count();

      return { handbooks, count };
    } catch (error) {
      return null;
    }
  },
  ["handbooks"],
  { revalidate: 3600, tags: ["handbooks"] },
);

export const getHandbookById = async (
  id: string,
): Promise<HandbookType | null> => {
  try {
    const handbook = await prisma.handbook.findUnique({ where: { id } });
    return handbook;
  } catch (error) {
    console.error("Error fetching handbook:", error);
    return null;
  }
};

export const getHandbooksRequests = unstable_cache(
  async ({
    page = 1,
    limit = 2,
    searchQuery = "",
    sortBy = SortBy.title,
    sortOrder = "asc",
  }: {
    page?: number;
    limit?: number;
    searchQuery?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<{ handbooks: HandbookRequestType[]; count: number } | null> => {
    try {
      if (limit < 1) limit = 1;
      if (page < 1) page = 1;

      const where = searchQuery
        ? {
            OR: [
              {
                description: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
              {
                title: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
            ],
          }
        : ({} as any);

      const handbooks = await prisma.handbookRequest.findMany({
        where,
        orderBy: { [sortBy]: sortOrder === "desc" ? "desc" : "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });

      const count = await prisma.handbookRequest.count();

      return { handbooks, count };
    } catch (error) {
      return null;
    }
  },
  ["handbookRequests"],
  { revalidate: 3600, tags: ["handbookRequests"] },
);

export const getHandbookRequestById = async (
  id: string,
): Promise<HandbookRequestType | null> => {
  try {
    const handbook = await prisma.handbookRequest.findUnique({ where: { id } });
    return handbook;
  } catch (error) {
    console.error("Error fetching handbook request", error);
    return null;
  }
};
