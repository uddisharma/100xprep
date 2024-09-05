import { prisma } from "@/db/db";
import { JobType } from "@/types/jobs";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "../auth";

const getJobs = async ({ page = 1, limit = 2, searchQuery = '', dateOrder = "desc", salaryOrder = "desc" }: { page?: number, limit?: number, searchQuery?: string, dateOrder?: string, salaryOrder?: string }): Promise<JobType[] | null> => {
    try {
        const where = searchQuery
            ? {
                OR: [
                    {
                        description: {
                            contains: searchQuery,
                            mode: 'insensitive',
                        },
                    },
                    {
                        title: {
                            contains: searchQuery,
                            mode: 'insensitive',
                        },
                    },
                    {
                        company: {
                            contains: searchQuery,
                            mode: 'insensitive',
                        },
                    },
                    {
                        requirements: {
                            has: searchQuery,
                        }
                    }
                ],
            }
            : {} as any;

        const jobs = await prisma.job.findMany({
            where,
            orderBy: [
                { endDate: dateOrder === "desc" ? "desc" : "asc" },
                { salary: salaryOrder === "desc" ? "desc" : "asc" },
            ],
            skip: (page - 1) * limit,
            take: limit,
        });

        return jobs;

    } catch (error) {
        return null;
    }
};


const getRecommendedJobs = async (): Promise<JobType[]> => {
    const session = await getServerSession(NEXT_AUTH_CONFIG)

    if (!session) return []

    try {
        const user = await prisma.user.findFirst({
            where: {
                id: session?.user?.id,
            },
        });

        if (!user || !user.techstacks) {
            throw new Error('User not found or techstacks not defined');
        }

        const jobs = await prisma.job.findMany({
            where: {
                requirements: {
                    hasSome: user.techstacks,
                },
            },
        });

        const sortedJobs = jobs
            .map(job => ({
                ...job,
                matchCount: job.requirements.filter(req => user.techstacks.includes(req)).length,
            }))
            .sort((a, b) => b.matchCount - a.matchCount)
            .slice(0, 5);

        return sortedJobs;

    } catch (error) {
        console.error('Error fetching recommended jobs:', error);
        return [];
    }
};

export async function getJobById(id: string): Promise<JobType | null> {
    try {
        const job = await prisma.job.findUnique({
            where: {
                id
            }
        });
        return job;
    } catch (error) {
        console.error('Error fetching job:', error);
        return null;
    }
} 