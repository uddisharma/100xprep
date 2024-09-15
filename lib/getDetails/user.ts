import { prisma } from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../auth";
import { UserProfile, UserProfile1 } from "@/types/user";
import { unstable_cache } from "next/cache";

export const getUserDetails = async () => {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id,
    },
  });
  return user;
};

export const getUserById = async (id: string): Promise<UserProfile | null> => {
  try {
    const handbook = await prisma.user.findUnique({
      where: { id },
    });
    return handbook as UserProfile;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

enum SortBy {
  name = "fullName",
  createdAt = "createdAt",
}

export const getUsers = unstable_cache(
  async ({
    page = 1,
    limit = 2,
    searchQuery = "",
    sortBy = SortBy.name,
    sortOrder = "asc",
  }: {
    page?: number;
    limit?: number;
    searchQuery?: string;
    sortBy?: string;
    sortOrder?: string;
  }): Promise<{ users: UserProfile1[]; count: number } | null> => {
    try {
      if (limit < 1) limit = 1;
      if (page < 1) page = 1;

      const where = searchQuery
        ? {
            OR: [
              {
                fullName: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
              {
                email: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
              {
                phoneNumber: {
                  contains: searchQuery,
                  mode: "insensitive",
                },
              },
            ],
          }
        : ({} as any);

      const users = await prisma.user.findMany({
        where,
        select: {
          id: true,
          fullName: true,
          email: true,
          phoneNumber: true,
          resume: true,
          createdAt: true,
        },
        orderBy: { [sortBy]: sortOrder === "desc" ? "desc" : "asc" },
        skip: (page - 1) * limit,
        take: limit,
      });

      const count = await prisma.user.count();

      return { users, count };
    } catch (error) {
      return null;
    }
  },
  ["users"],
  { revalidate: 3600, tags: ["users"] },
);
