import { prisma } from "@/db/db";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../auth";

export const getUserDetails = async () => {
    const session = await getServerSession(NEXT_AUTH_CONFIG)
    const user = await prisma.user.findFirst({
        where: {
            id: session?.user?.id
        },
    });
    return user;
}; 0