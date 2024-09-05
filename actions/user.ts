"use server";

import { prisma } from "@/db/db";
import { UserProfile } from "@/types/user";
import { getServerSession } from "next-auth";

export async function updateUser(newData: UserProfile): Promise<UserProfile | null> {
    try {
        const session = await getServerSession();

        if (!session?.user?.id) return null

        const updatedUser = await prisma.user.update({
            where: { id: session?.user?.id },
            data: newData,
        });
        return updatedUser as UserProfile
    } catch (error) {
        console.error('Error updating user:', error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}