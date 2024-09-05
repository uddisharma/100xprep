import { prisma } from "@/db/db";
import { getToken } from "next-auth/jwt";

export const getUserDetails = async (req: any) => {
    const token = await getToken({ req: req, secret: process.env.NEXTAUTH_SECRET });
    const user = await prisma.user.findFirst({
        where: {
            id: (token?.sub || token?.uid) as string,
        },
    });
    return user;
};

export const getUserDetailsBySessions = async (req: any) => {
   
}