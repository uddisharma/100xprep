"use server"

import { prisma } from "@/db/db";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { JobType } from "@/types/jobs";
import { getServerSession } from "next-auth";

export async function addJob(job: JobType,): Promise<JobType | null> {

    try {
        const session = await getServerSession(NEXT_AUTH_CONFIG)

        if (!session || session?.user?.role !== 'admin') return null

        if (!session?.user?.email || !process.env.ADMINS?.split(',').includes(session.user.email!)) return null

        return await prisma.job.create({
            data: {
                company: job.company,
                description: job.description,
                link: job.link,
                location: job.location,
                requirements: job.requirements,
                salary: job.salary,
                startDate: job.startDate,
                endDate: job.endDate,
                title: job.title,
            }
        });

    } catch (error) {
        console.error('Error adding job:', error);
        return null;

    } finally {
        await prisma.$disconnect();
    }
}

export async function UpdateJob(job: JobType): Promise<JobType | null> {

    try {
        const session = await getServerSession(NEXT_AUTH_CONFIG)

        if (!session || session?.user?.role !== 'admin') return null

        if (!session?.user?.email || !process.env.ADMINS?.split(',').includes(session.user.email!)) return null

        return await prisma.job.update({
            where: {
                id: job.id
            },
            data: job
        })

    } catch (error) {
        console.error('Error updating job:', error);
        return null

    } finally {
        await prisma.$disconnect();
    }

}