import { prisma } from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../auth";
import { UserProfileType } from "@/types/user";

enum SortBy {
  title = "fullName",
  createdAt = "createdAt",
}
export const getUserDetails = async () => {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id,
    },
  });
  return user;
};
export const getAllUserDetails = async ({
  page = 1,
  limit = 1,
  searchQuery = "",
  sortBy = SortBy.title,
  sortOrder = "asc",
}: {
  page?: number;
  limit?: number;
  searchQuery?: string;
  sortBy?: string;
  sortOrder?: string;
}): Promise<{ users: UserProfileType[]; count: number } | null> => {
  console.log("THis is api page", page);
  const pageNumber = page < 1 ? 1 : page;
  const itemsPerPage = limit < 1 ? 1 : limit;
  // Calculate the number of records to skip
  const skip = (pageNumber - 1) * itemsPerPage;

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
            company: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
        ],
      }
    : ({} as any);
  // Fetch users with pagination
  console.log("This is order", sortBy);
  const users = await prisma.user.findMany({
    where,
    orderBy: { [sortBy]: sortOrder === "desc" ? "desc" : "asc" },
    skip: skip,
    take: limit,
  });

  // const users = await prisma.user.findMany({
  //   skip: skip,
  //   take: itemsPerPage,
  // });

  const count = await prisma.user.count();

  // console.log("This is user",users)

  return users ? { users, count } : null;
};

export const getIndividualUserDetails = async (id: any) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
  });
  return user;
};
