"use server"
import { prisma } from "@/db/db"
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { InterviewRequest } from "@/types/interviews";
import { getServerSession } from "next-auth";

async function SelectRandomInterviewer(users: any) {
    const randomIndex = Math.floor(Math.random() * users.length);
    return users[randomIndex];
}

async function scheduleInterview(users: { id: string; fullName: string; phoneNumber: string | null; email: string; role: string | null; experience: number | null; resume: string | null; }[], accepted_date: string) {
    let selectedInterviewer: any;
    let interviewer;
    let attempts = 0;

    const date = new Date(accepted_date);
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);

    while (users.length > 0) {
        attempts++;
        selectedInterviewer = SelectRandomInterviewer(users);

        interviewer = await prisma.interviews.findMany({
            where: {
                interviewerId: selectedInterviewer.id,
                accepted_For_Time: {
                    gte: date,
                    lt: nextDay,
                }
            },
            select: {
                id: true
            }
        });

        if (interviewer.length === 0) {
            break;
        } else {
            users = users.filter(user => user.id !== selectedInterviewer.id);
        }

        if (attempts > users.length) {
            throw new Error("No available interviewers found.");
        }
    }

    if (!selectedInterviewer) {
        throw new Error("No available interviewers found.");
    }

    return selectedInterviewer;
}


export async function MatchInterviewer(data: InterviewRequest) {

    // Step 1: Check if already have an interview scheduled today or now
    // one interview per day per interviewee

    const session = await getServerSession(NEXT_AUTH_CONFIG);
    const intervieweeId = session.user.id;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const interviewee = await prisma.interviews.findMany({
        where: {
            intervieweeId: intervieweeId,
            createdAt: {
                gte: today,
                lt: tomorrow,
            },
        },
        select: {
            id: true
        }
    });

    if (interviewee.length > 0)
        return { message: "Already have an interview scheduled for today." }

    // Step 2: Match the tech stack and experience

    if (data?.experience == "5+") data.experience = "6"
    const users = await prisma.user.findMany({
        where: {
            techstacks: {
                hasSome: data.techstacks
            },
            experience: {
                gt: Number(data.experience)
            },
        },
        select: {
            id: true,
            fullName: true,
            phoneNumber: true,
            email: true,
            role: true,
            experience: true,
            resume: true,
        }
    });

    if (users.length === 0)
        return { message: "No available interviewers match the criteria." };

    // Step 3: Randomly select an interviewer from the list

    const selectedInterviewer = await scheduleInterview(users, data.date);

    return selectedInterviewer


    // update the schema to include , asking time slots for interviews
    // save the interview details in the database
    // update interviewer profile with incoming interview requests
    // send email to the selected interviewer for interview request 
    // send email to the interviewee for confirmation of his interview

}