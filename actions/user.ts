"use server";

import { prisma } from "@/db/db";
import { UserProfile } from "@/types/user";

export async function updateUser(newData: UserProfile ): Promise<UserProfile | null> {
    try {



        const updatedUser = await prisma.user.update({
            where: { id: newData.id },
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