"use server"

import { prisma } from "@/db/db";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { actionClient } from "@/lib/safe-action";
import { jobSchema } from "@/types";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";

export const AddJob = actionClient
    .schema(jobSchema)
    .action(async ({ parsedInput }) => {
        const { title, description, company, location, requirements, salary, startDate, endDate, link } = parsedInput;

        const sessions = await getServerSession(NEXT_AUTH_CONFIG)

        if (!sessions?.user?.email) return { message: "You must be logged in to perform this action" }

        if (!process.env.ADMINS?.split(',').includes(sessions.user.email!)) return { message: "You must be an admin to perform this action" }

        await prisma.job.create({
            data: {
                title,
                description,
                company,
                location,
                requirements: requirements.split(',').map(requirement => requirement.trim()),
                salary,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                link
            }
        })
        revalidateTag("jobs")
        return { message: "Job created successfully" }
    })

export const UpdateJob = actionClient
    .schema(jobSchema)
    .action(async ({ parsedInput }) => {
        const { title, description, company, location, requirements, salary, startDate, endDate, link, id } = parsedInput;
        await prisma.job.update({
            where: {
                id
            },
            data: {
                title,
                description,
                company,
                location,
                requirements: requirements.split(',').map(requirement => requirement.trim()),
                salary,
                startDate: new Date(startDate),
                endDate: new Date(endDate),
                link
            }
        })
        return { message: "Job updated successfully" }
    })