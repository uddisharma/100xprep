
"use server";

import { prisma } from "@/db/db";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";
import { handbookSchema } from "@/types";
import { getServerSession } from "next-auth";

export const UpdateHandbook = actionClient
    .schema(handbookSchema)
    .action(async ({ parsedInput }) => {
        const { id, title, description, link } = parsedInput;

        const sessions = await getServerSession(NEXT_AUTH_CONFIG)

        if (!sessions?.user?.email) return { message: "You must be logged in to perform this action" }

        if (!process.env.ADMINS?.split(',').includes(sessions.user.email!)) return { message: "You must be an admin to perform this action" }

        await prisma.handbook.update({
            where: { id },
            data: {
                title,
                description,
                link,
            },
        });
        return {
            message: "Handbook updated successfully",
        };
    });


export const CreateHandbook = actionClient
    .schema(handbookSchema)
    .action(async ({ parsedInput }) => {
        const { title, description, link } = parsedInput;

        const sessions = await getServerSession(NEXT_AUTH_CONFIG)

        if (!sessions?.user?.email) return { message: "You must be logged in to perform this action" }

        if (!process.env.ADMINS?.split(',').includes(sessions.user.email!)) return { message: "You must be an admin to perform this action" }

        await prisma.handbook.create({
            data: {
                title,
                description,
                link,
            },
        });
        return {
            message: "Handbook created successfully",
        };
    })