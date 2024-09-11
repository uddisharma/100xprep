import { prisma } from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../auth";

export const getUserDetails = async () => {

  const session = await getServerSession(NEXT_AUTH_CONFIG);
  const user = await prisma.user.findFirst({
    where: {
      id: session?.user?.id,
    },
  });
  return user;
};
export const getAllUserDetails = async (
  page: number = 1,
  limit: number = 1
) => {
  const pageNumber = page < 1 ? 1 : page;
  const itemsPerPage = limit < 1 ? 1 : limit;

  // Calculate the number of records to skip
  const skip = (pageNumber - 1) * itemsPerPage;

  // Fetch users with pagination
  const users = await prisma.user.findMany({
    skip: skip,
    take: itemsPerPage,
  });

  return users;
};
=======
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    const user = await prisma.user.findFirst({
        where: {
            id: session?.user?.id
        },
    });
    return user;
}; 

