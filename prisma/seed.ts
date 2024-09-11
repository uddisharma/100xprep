import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
    // Create Users
    const user1 = await prisma.user.create({
        data: {
            email: 'john.doe@example.com',
            fullName: 'John Doe',
            password: await bcrypt.hash("password123", 10),
            phoneNumber: '1234567890',
            isWorking: true,
            experience: 5,
            company: 'Tech Corp',
            role: 'Software Engineer',
            preferredRole: 'Senior Software Engineer',
            currentCTC: '100000',
            expectedCTC: '120000',
            resume: 'resume_link',
            photo: 'https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png',
            techstacks: ["HTML CSS", "JavaScript", "TypeScript"],
            incomingInterviewReqs: 8,
            accepted: 7,
            rejected: 1,
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: 'jane.smith@example.com',
            fullName: 'Jane Smith',
            password: await bcrypt.hash("password123", 10),
            phoneNumber: '0987654321',
            isWorking: false,
            experience: 3,
            company: 'Web Solutions',
            role: 'Frontend Developer',
            preferredRole: 'Fullstack Developer',
            currentCTC: '80000',
            expectedCTC: '100000',
            resume: 'resume_link',
            photo: 'https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png',
            techstacks: ["HTML CSS", "JavaScript", "TypeScript"],
            incomingInterviewReqs: 15,
            accepted: 10,
            rejected: 5,
        },
    });

    // Create Interviews
    const interview1 = await prisma.interviews.create({
        data: {
            intervieweeId: user1.id,
            interviewerId: user2.id,
            scheduledAt: new Date('2023-06-12T10:00:00Z'),
            accepted_For_Time: new Date('2023-06-10T10:00:00Z'),
            isCompleted: true,
            techstack: ['HTML CSS', 'JavaScript', 'TypeScript'],
            rating: 5,
            feedback: 'Great interview!',
            allRating: {
                technical: 5,
                communication: 4,
                problemSolving: 5,
            },
        },
    });

    const interview2 = await prisma.interviews.create({
        data: {
            intervieweeId: user2.id,
            interviewerId: user1.id,
            scheduledAt: new Date('2023-06-13T14:00:00Z'),
            accepted_For_Time: new Date('2023-06-11T14:00:00Z'),
            isCompleted: false,
            techstack: ['HTML CSS', 'JavaScript', 'TypeScript'],
            rating: null,
            feedback: null,
            allRating: {
                technical: null,
                communication: null,
                problemSolving: null,
            },
        },
    });

    // Create Jobs
    const job1 = await prisma.job.create({
        data: {
            title: 'Senior Software Engineer',
            description: 'Looking for an experienced software engineer.',
            location: 'New York, NY',
            salary: '120000',
            company: 'Tech Corp',
            link: 'https://techcorp.com/jobs/1',
            requirements: ['JavaScript', 'React', 'Node.js'],
            startDate: new Date('2023-07-01T00:00:00Z'),
            endDate: new Date('2023-07-31T00:00:00Z'),
        },
    });

    await prisma.job.create({
        data: {
            title: 'Frontend Developer',
            description: 'Looking for a skilled frontend developer.',
            location: 'San Francisco, CA',
            salary: '100000',
            company: 'Web Solutions',
            link: 'https://websolutions.com/jobs/2',
            requirements: ['HTML', 'CSS', 'JavaScript'],
            startDate: new Date('2023-08-01T00:00:00Z'),
            endDate: new Date('2023-08-31T00:00:00Z'),
        },
    });

    // Create Email Logs
    await prisma.emailLog.create({
        data: {
            interviewId: interview1.id,
            emailSentAt: new Date('2023-06-10T12:00:00Z'),
        },
    });

    await prisma.emailLog.create({
        data: {
            interviewId: interview2.id,
            emailSentAt: new Date('2023-06-11T16:00:00Z'),
        },
    });

    // handbooks
    const handbook1 = await prisma.handbook.create({
        data: {
            title: 'JavaScript Handbook',
            description: 'A comprehensive guide to JavaScript.',
            link: 'b30b884e53514b13b09b562fc02ad1a3',
        },
    })

    const handbook2 = await prisma.handbook.create({
        data: {
            title: 'React Handbook',
            description: 'A comprehensive guide to React.',
            link: '0b97a34530e64029a5c3022a29476fed',
        },
    })


}

main()
    .then(() => {
        console.log('Seeded successfully');
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });