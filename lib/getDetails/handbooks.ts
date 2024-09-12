import { prisma } from "@/db/db";
import { HandbookType } from "@/types";
import { unstable_cache } from 'next/cache'


enum SortBy {
    title = "title",
    createdAt = "createdAt"
}

export const getHandbooks = unstable_cache(
    async ({ page = 1, limit = 2, searchQuery = '', sortBy = SortBy.title, sortOrder = "asc" }: { page?: number, limit?: number, searchQuery?: string, sortBy?: string, sortOrder?: string }): Promise<{ handbooks: HandbookType[], count: number } | null> => {

        try {
            const where = searchQuery
                ? {
                    OR: [
                        {
                            description: {
                                contains: searchQuery,
                                mode: 'insensitive',
                            },
                        },
                        {
                            title: {
                                contains: searchQuery,
                                mode: 'insensitive',
                            },
                        },
                        {
                            link: {
                                contains: searchQuery,
                                mode: 'insensitive',
                            },
                        },
                    ],
                }
                : {} as any;

            const handbooks = await prisma.handbook.findMany({
                where,
                orderBy: { [sortBy]: sortOrder === 'desc' ? 'desc' : 'asc' },
                skip: (page - 1) * limit,
                take: limit,
            });

            const count = await prisma.handbook.count();

            return { handbooks, count };

        } catch (error) {
            return null;

        }
    },
    ['handbooks'],
    { revalidate: 3600, tags: ['handbooks'] }
)

=======
export const getHandbooks = async ({
  page = 1,
  limit = 2,
  searchQuery = "",
  createdAt = "desc",
  title = "desc",
}: {
  page?: number;
  limit?: number;
  searchQuery?: string;
  createdAt?: string;
  title?: string;
}): Promise<{ handbooks: HandbookType[]; count: number } | null> => {
  try {
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
      orderBy: [
        { createdAt: createdAt === "desc" ? "desc" : "asc" },
        { title: title === "desc" ? "desc" : "asc" },
      ],
      skip: (page - 1) * limit,
      take: limit,
    });
    const count = await prisma.handbook.count();

    return { handbooks, count };
  } catch (error) {
    return null;
  }
};

export const getHandbookById = async (
  id: string
): Promise<HandbookType | null> => {
  try {
    console.log("Fetching handbook with id:", id);
    const handbook = await prisma.handbook.findUnique({ where: { id } });
    return handbook;
  } catch (error) {
    console.error("Error fetching handbook:", error);
    return null;
  }
};
