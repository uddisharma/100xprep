"use server";

import { prisma } from "@/db/db";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";
import { UserProfile, userProfileSchema } from "@/types/user";
import { getServerSession } from "next-auth";

export async function updateUser(
  newData: UserProfile,
): Promise<UserProfile | string | null> {
  try {
    const session = await getServerSession(NEXT_AUTH_CONFIG);

    if (!session?.user?.id) {
      return "User not logged in";
    }

    let sessionID = session?.user?.id;
    if (session?.user?.role == "admin") {
      sessionID = newData.id;
    }

    const updatedUser = await prisma.user.update({
      where: { id: sessionID },
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

export const editUser = actionClient
  .schema(userProfileSchema)
  .action(async ({ parsedInput }) => {
    
    const { id, fullName, phoneNumber, role } = parsedInput;

    const sessions = await getServerSession(NEXT_AUTH_CONFIG);

    if (!sessions?.user?.email)
      return { message: "You must be logged in to perform this action" };

    if (!process.env.ADMINS?.split(",").includes(sessions.user.email!))
      return { message: "You must be an admin to perform this action" };

    await prisma.user.update({
      where: { id },
      data: { fullName, phoneNumber, role },
    });
    return {
      message: "Handbook updated successfully",
    };
  });
