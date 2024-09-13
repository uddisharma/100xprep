"use server";

import { prisma } from "@/db/db";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { UserProfile } from "@/types/user";
import { getServerSession } from "next-auth";

export async function updateUser(
  newData: UserProfile,
): Promise<UserProfile | string | null> {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    if (!session?.user?.id) {
      return "User not logged in";
    }

    const updatedUser = await prisma.user.update({
      where: { id: session?.user?.id },
      data: newData,
    });
    return updatedUser as UserProfile;
  } catch (error: any) {
    console.error("Error updating user:", error);
    return error.message?.toString() || null;
  } finally {
    await prisma.$disconnect();
  }
}
