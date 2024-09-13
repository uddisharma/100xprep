import { prisma } from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../auth";
import { UserProfileType } from "@/types/user";

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
}: {
  page?: number;
  limit?: number;
}): Promise<{ users: UserProfileType[]; count: number } | null> => {
  console.log("THis is api page", page);
  const pageNumber = page < 1 ? 1 : page;
  const itemsPerPage = limit < 1 ? 1 : limit;

  // Calculate the number of records to skip
  const skip = (pageNumber - 1) * itemsPerPage;

  // Fetch users with pagination
  const users = await prisma.user.findMany({
    skip: skip,
    take: itemsPerPage,
  });

  const count = await prisma.user.count();

  return users ? { users, count } : null;
};
